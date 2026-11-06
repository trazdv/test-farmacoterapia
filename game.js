"use strict";
/* ================= MODO CONSULTA (lógica) — los dibujos y el catálogo están en art.js ================= */
const DEFAULT_EQ = {
  hair: "corto", hairColor: "castano", skin: "s2", face: null, outfit: "bata", neck: "esteto", eyes: null, head: null, ears: null,
  wall: "crema", floor: "tarima", view: "campo", curtains: "terracota", table: "metal",
  ceiling: null, wallL: null, wallC: null, wallR: null, shelf: null, sill: null, cornerL: null, plant: null, rug: null, pet: null
};
const DEFAULT_GAME = {
  money: 40, rep: 50, clinic: "Clínica Veterinaria",
  owned: SHOP_ORDER.flatMap(c => SHOP[c].items.filter(i => i.price === 0).map(i => c + ":" + i.id)),
  eq: Object.assign({}, DEFAULT_EQ),
  day: 1, served: 0, okTotal: 0, streak: 0, best: 0, cur: null,
  energy: 10, energyStart: true, topics: [1, 2, 3, 4, 5], recentCases: []
};
let G = Object.assign({}, DEFAULT_GAME, store.get("ft_game", {}));
G.eq = Object.assign({}, DEFAULT_EQ, G.eq);
/* migración: la decoración antigua (lista "decor") pasa a rincones concretos */
(function migrate() {
  const MAP = { planta: ["plant", "monstera"], diploma: ["wallL", "diploma"], reloj: ["wallC", "reloj"], cuadro: ["wallL", "cuadro"], poster: ["wallR", "anatomia"],
    lampara: ["ceiling", "lampara"], alfombra: ["rug", "redonda"], estanteria: ["shelf", "botes"], guirnalda: ["ceiling", "guirnalda"], gato: ["pet", "gato"],
    acuario: ["cornerL", "acuario"], trofeo: ["sill", "trofeo"] };
  G.owned = G.owned.map(o => { const [c, id] = o.split(":"); return c === "decor" && MAP[id] ? MAP[id].join(":") : o; });
  if (Array.isArray(G.eq.decor)) { G.eq.decor.forEach(id => { const m = MAP[id]; if (m && !G.eq[m[0]]) G.eq[m[0]] = m[1]; }); delete G.eq.decor; }
  DEFAULT_GAME.owned.forEach(o => { if (!G.owned.includes(o)) G.owned.push(o); });
  for (const c of SHOP_ORDER) if (G.eq[c] && !findItem(c, G.eq[c])) G.eq[c] = DEFAULT_EQ[c];
})();
if (!G.energyStart) { G.energy = Math.max(G.energy, 10); G.energyStart = true; }   // partidas anteriores: energía inicial de 10
if (G.cur && !G.cur.clients) G.cur = null;   // partida guardada con el formato antiguo
function saveGame() { store.set("ft_game", G); }
let gview = "hub";      // hub | patient | shop | summary
let shopSec = "me", shopCat = "hair";
let lastSummary = null;

/* ---------- energía ---------- */
const ENERGY_COST = 3, MAX_ENERGY = 15;
function addEnergy(n, reason) {
  const before = G.energy;
  G.energy = Math.min(MAX_ENERGY, G.energy + n);
  saveGame();
  const got = G.energy - before;
  if (got > 0) toast(`${BOLT}<b>+${got}</b> de energía ${reason}`);
  else toast(`${BOLT} Energía al máximo (${MAX_ENERGY})`);
  return got;
}

/* ---------- reputación y pagos ---------- */
const REP_TIERS = [[0, "Clínica en apuros"], [20, "Recién titulado"], [40, "Veterinario de barrio"], [60, "Clínica de confianza"], [80, "Eminencia local"], [95, "Leyenda del pueblo"]];
const repTier = r => REP_TIERS.filter(([m]) => r >= m).pop()[1];
const clientsForRep = r => r < 20 ? 2 : r < 40 ? 3 : r < 60 ? 4 : r < 80 ? 5 : 6;
const payFor = (rep, streak) => Math.round(12 * (0.4 + 1.2 * rep / 100)) + (streak >= 3 ? Math.min(streak - 2, 4) * 2 : 0);
const REP_OK = 2, REP_BAD = -5, REP_HAPPY = 2, TIP_HAPPY = 10;
const fmt = n => n.toLocaleString("es-ES");

/* ---------- estadísticas propias de la consulta ---------- */
const CStats = {
  all() { return store.get("ft_cstats", {}); },
  record(key, ok) {
    const s = this.all(); const e = s[key] || { w: 0, r: 0, s: 0 };
    if (ok) { e.r++; e.s++; } else { e.w++; e.s = 0; }
    s[key] = e; store.set("ft_cstats", s);
  },
  failed() {
    const s = this.all(), out = [];
    CONSULTAS.forEach((c, ci) => c.steps.forEach((st, si) => { const e = s[ci + "-" + si]; if (e && e.w) out.push({ c, ci, st, si, e, mastered: e.s >= 2 }); }));
    return out.sort((a, b) => b.e.w - a.e.w);
  },
  caseWeight(ci) {
    const s = this.all();
    return CONSULTAS[ci].steps.reduce((acc, _, si) => { const e = s[ci + "-" + si]; return acc + (e && e.w && e.s < 2 ? e.w : 0); }, 0);
  }
};

/* ---------- los dueños ---------- */
function ownerEq(name, farm) {
  const h = hash(name + "·dueño");
  const pick = (arr, k) => arr[Math.floor(h / k) % arr.length];
  return {
    hair: pick(["corto", "melena", "coleta", "mono", "rizos", "tupe", "rapado", "media", "flequillo", "trenzas", "calvo"], 1),
    hairColor: pick(["castano", "negro", "rubio", "pelirrojo", "canoso", "miel", "castano", "negro"], 7),
    skin: pick(["s1", "s2", "s3", "s4", "s2"], 13),
    face: pick([null, null, "pecas", "barba", null, "bigote", "lunar", null], 29),
    outfit: pick(farm ? ["peto", "jersey", "sudadera", "peto", "cardigan"] : ["jersey", "sudadera", "hawaiana", "traje", "cardigan", "jersey"], 17),
    neck: pick([null, null, "bufanda", null, "collar", "panuelo"], 31), eyes: pick([null, null, "gafas", null, "pasta"], 23),
    head: farm && h % 3 === 0 ? "paja" : pick([null, null, null, "boina", null, "diadema", "lana"], 37),
    ears: pick([null, null, "aros", null, "perlas"], 41)
  };
}
const faceSVG = (eq, mood) => `<svg class="face" viewBox="22 16 76 76" aria-hidden="true">${avatarG(eq, mood || "neutral")}</svg>`;
const REACT_OK = ["¡Ah, vale! Ahora lo entiendo.", "Perfecto, muchas gracias.", "Qué bien explicado, da gusto.", "Entendido, lo haré así.", "Me quedo mucho más tranquila con eso.", "Genial, eso me aclara mucho."];
const REACT_BAD = ["Mmm… no sé, no me convence.", "¿Seguro? Eso no es lo que me habían dicho…", "Vaya, pues no me ha quedado nada claro.", "Uy… creo que pediré una segunda opinión.", "No sé yo… lo consultaré en otro sitio."];
function bubble(who, text, eq, cls, mood) {
  return `<div class="bub ${who} ${cls || ""}">${faceSVG(eq, mood)}<p>${esc(text)}</p></div>`;
}

/* ---------- la jornada ---------- */
function pickClients(n) {
  const pool = CONSULTAS.map((_, i) => i).filter(i => G.topics.includes(CONSULTAS[i].t));
  if (!pool.length) return [];
  const weak = shuffle(pool.filter(i => CStats.caseWeight(i) > 0)).sort((a, b) => CStats.caseWeight(b) - CStats.caseWeight(a));
  const out = weak.slice(0, Math.min(2, Math.floor(n / 2)));
  const fresh = shuffle(pool.filter(i => !out.includes(i) && !G.recentCases.includes(i)));
  const old = pool.filter(i => !out.includes(i) && G.recentCases.includes(i)).sort((a, b) => G.recentCases.indexOf(b) - G.recentCases.indexOf(a));
  /* primero un caso de cada especie que aún no esté en la jornada, para que no salgan solo perros */
  const cand = [...fresh, ...old];
  const species = new Set(out.map(i => CONSULTAS[i].sp));
  for (const i of cand) { if (out.length >= n) break; if (!species.has(CONSULTAS[i].sp)) { out.push(i); species.add(CONSULTAS[i].sp); } }
  for (const i of cand) { if (out.length >= n) break; if (!out.includes(i)) out.push(i); }
  return shuffle(out);
}
function openDay() {
  if (G.energy < ENERGY_COST) return;
  const clients = pickClients(clientsForRep(G.rep));
  if (!clients.length) return;
  G.energy -= ENERGY_COST;
  G.cur = { clients, ci: 0, si: 0, order: shuffle([0, 1, 2, 3]), answers: clients.map(() => []), bye: [], earned: 0, drep: 0 };
  saveGame(); gview = "patient"; render(); window.scrollTo(0, 0);
}

/* ---------- vistas ---------- */
function statsBar() {
  return `<div class="g-stats">
    <div class="g-pill">${COIN}<b>${fmt(G.money)}</b></div>
    <div class="g-meter">${BOLT}<div><div class="g-rep-top"><b>${G.energy}/${MAX_ENERGY}</b><span>energía</span></div><div class="g-bar en"><div style="width:${G.energy / MAX_ENERGY * 100}%"></div></div></div></div>
    <div class="g-meter wide">${STAR}<div><div class="g-rep-top"><b>${G.rep}</b><span>${repTier(G.rep)}</span></div><div class="g-bar"><div style="width:${G.rep}%"></div></div></div></div>
  </div>`;
}

function renderConsulta() {
  if (gview === "patient" && G.cur) return renderPatient();
  if (gview === "shop") return renderShop();
  if (gview === "summary" && lastSummary) return renderSummary();
  gview = "hub";
  setFocusMode(false);
  const inDay = !!G.cur, n = clientsForRep(G.rep), enough = G.energy >= ENERGY_COST;
  $("#app").innerHTML = `
    <div class="g-wrap">
      <header class="g-head">
        <div><p class="g-kicker">Día ${G.day}</p><h1 class="g-title">${esc(G.clinic)}</h1></div>
        <button class="icon-btn soft" id="rename" aria-label="Cambiar nombre"><svg viewBox="0 0 24 24"><path d="M4 20l4-1 10.5-10.5a2.1 2.1 0 0 0-3-3L5 16Z"/></svg></button>
      </header>
      ${statsBar()}
      <div class="scene-frame">${sceneSVG({ vetMood: "happy" })}</div>
      <div class="g-actions">
        ${inDay ? `<button class="btn primary block big" id="open">Seguir con la consulta · cliente ${G.cur.ci + 1} de ${G.cur.clients.length}</button>`
        : enough ? `<button class="btn primary block big" id="open" ${G.topics.length ? "" : "disabled"}>Abrir la consulta <span class="cost">${BOLT}${ENERGY_COST}</span></button>
          <p class="muted small center">Hoy esperan <b>${n} clientes</b>. Con más reputación vendrán más.</p>`
        : `<div class="g-paper tired"><p class="g-hand">Estás sin energía</p>
          <p>Para abrir la clínica necesitas ${BOLT}<b>${ENERGY_COST}</b> y tienes <b>${G.energy}</b>. Recarga estudiando:</p>
          <div class="row"><button class="btn primary" id="gotest" style="flex:1">Hacer un test</button><button class="btn" id="gostudy" style="flex:1">Leer apuntes</button></div></div>`}
        <button class="btn block" id="shop">Tienda y aspecto</button>
      </div>
      <div class="g-paper">
        <p class="g-hand">Cómo funciona</p>
        <p>Abrir la consulta cuesta ${BOLT}${ENERGY_COST} de energía. La consigues <b>haciendo tests</b> (+1 por cada 3 preguntas, y +1 extra si sacas un 7 o más) y <b>leyendo apuntes</b> en Estudiar (+1 cada minuto).</p>
        <p>Cada cliente te hará varias preguntas sobre su animal. Si respondes bien, cobras y ganas reputación; si te equivocas, la pierdes. Si respondes bien a todo, te deja propina. Cuanta más reputación, más clientes y mejor pagados.</p>
        <p class="muted small">Preguntas respondidas: <b>${G.served}</b> · Aciertos: <b>${G.okTotal}</b> · Mejor racha: <b>${G.best}</b></p>
        <p class="label" style="margin-top:12px">Casos de los temas</p>
        <div class="chips">${ALL_TOPICS.map(t => `<button class="chip" data-gt="${t}" aria-pressed="${G.topics.includes(t)}">Tema ${t}</button>`).join("")}</div>
      </div>
      <p class="footer-note"><button class="link" id="xfer">Pasar mi partida a otro dispositivo</button></p>
    </div>`;
  $("#xfer").onclick = openTransfer;
  if ($("#open")) $("#open").onclick = () => { if (inDay) { gview = "patient"; render(); window.scrollTo(0, 0); } else openDay(); };
  if ($("#gotest")) $("#gotest").onclick = () => setView("test");
  if ($("#gostudy")) $("#gostudy").onclick = () => setView("estudiar");
  $("#shop").onclick = () => { gview = "shop"; render(); window.scrollTo(0, 0); };
  $$("[data-gt]").forEach(b => b.onclick = () => { const t = +b.dataset.gt; G.topics = G.topics.includes(t) ? G.topics.filter(x => x !== t) : [...G.topics, t]; saveGame(); renderConsulta(); });
  $("#rename").onclick = () => {
    modal(`<h3>Nombre de tu clínica</h3><input id="cn" class="field" maxlength="32" value="${esc(G.clinic)}">
      <div class="row" style="margin-top:14px"><button class="btn" id="no" style="flex:1">Cancelar</button><button class="btn primary" id="yes" style="flex:1">Guardar</button></div>`);
    $("#cn").focus(); $("#no").onclick = closeModal;
    $("#yes").onclick = () => { const v = $("#cn").value.trim(); if (v) { G.clinic = v; saveGame(); } closeModal(); renderConsulta(); };
  };
}

function feedbackCard(st, a) {
  return `<div class="fb ${a.ok ? "ok" : "bad"}">
    <div class="fb-h"><b>${a.ok ? "Buena respuesta" : "No era lo más adecuado"}</b>
      <span class="fb-gain">${a.ok ? `${COIN}+${a.pay} ${STAR}+${a.drep}` : `${STAR}${a.drep}`}</span></div>
    ${a.ok ? "" : `<p class="fb-correct"><b>Lo correcto era:</b> ${esc(st.o[0])}</p>`}
    <p class="fb-why">${esc(st.why)}</p>
    ${st.q != null ? `<button class="link" data-info="${st.q}">Ver apuntes de la pregunta del examen</button>` : ""}
  </div>`;
}

function renderPatient() {
  setFocusMode(true);
  const C = G.cur, ci = C.clients[C.ci], K = CONSULTAS[ci], ans = C.answers[C.ci];
  const cur = ans[C.si], done = ans.length === K.steps.length, bye = C.bye[C.ci];
  const last = ans[ans.length - 1];
  const mood = done ? (bye.nOk === bye.total ? "happy" : bye.nOk * 2 >= bye.total ? "neutral" : "sad") : last ? (last.ok ? "happy" : "sad") : "neutral";
  const farm = ["cow", "pig", "horse"].includes(K.sp);
  const oq = ownerEq(K.owner, farm);
  const lastClient = C.ci === C.clients.length - 1;
  let chat = "";
  for (let si = 0; si <= C.si && si < K.steps.length; si++) {
    const st = K.steps[si], a = ans[si];
    chat += bubble("them", st.ask, oq);
    if (a) {
      chat += bubble("me", st.o[a.choice], G.eq, a.ok ? "ok" : "bad", a.ok ? "happy" : "neutral");
      chat += feedbackCard(st, a);
      if (!(done && si === K.steps.length - 1)) chat += bubble("them", (a.ok ? REACT_OK : REACT_BAD)[(ci * 3 + si) % (a.ok ? REACT_OK : REACT_BAD).length], oq, "", a.ok ? "happy" : "sad");
    }
  }
  if (done) {
    const msg = bye.nOk === bye.total ? "¡Muchísimas gracias! Da gusto venir aquí. Volveremos seguro." : bye.nOk * 2 >= bye.total ? "Gracias. Alguna cosa no me ha quedado clara, pero bueno." : "Pues… no sé si volveremos, la verdad.";
    chat += bubble("them", msg, oq, "bye", mood === "neutral" ? "neutral" : mood);
  }
  const st = K.steps[C.si];
  $("#app").innerHTML = `
    <div class="g-wrap">
      <div class="topbar">
        <button class="icon-btn soft" id="back" aria-label="Volver a la clínica"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>
        <div class="muted"><b class="ink">Cliente ${C.ci + 1}</b> de ${C.clients.length}</div>
        <span class="spacer"></span>
        <div class="g-pill sm">${COIN}<b>${fmt(G.money)}</b></div><div class="g-pill sm">${STAR}<b>${G.rep}</b></div>
      </div>
      <div class="dots">${C.clients.map((_, i) => { const b = C.bye[i]; return `<span class="${b ? (b.nOk === b.total ? "ok" : "bad") : i === C.ci ? "cur" : ""}"></span>`; }).join("")}</div>
      <div class="scene-frame">${sceneSVG({ patient: { species: K.sp, name: K.pet }, mood, vetMood: last ? (last.ok ? "happy" : "sad") : "neutral" })}</div>
      <div class="ficha">
        <div class="ficha-clip"></div>
        <div class="ficha-head"><span class="ficha-name">${esc(K.pet)}</span><span class="ficha-sp">${SPECIES[K.sp]} · ${TOPICS[K.t].name}</span></div>
        <p class="ficha-owner">Viene con ${esc(K.owner)}</p>
        <p class="ficha-motivo">${esc(K.intro)}</p>
      </div>
      <div class="chat">${chat}</div>
      ${!cur && !done ? `<p class="g-hand reply-head">¿Qué le respondes a ${esc(K.owner)}?</p>
        <div>${C.order.map((oi, k) => `<button class="opt reply" data-g="${oi}"><span class="letter">${LET[k]}</span><span>${esc(st.o[oi])}</span></button>`).join("")}</div>` : ""}
      ${cur && !done ? `<button class="btn primary block big" id="cont" style="margin-top:14px">Continuar</button>` : ""}
      ${done ? `<div class="g-result ${bye.nOk === bye.total ? "ok" : "bad"}">
          <div class="g-result-msg"><b>${esc(K.pet)} y ${esc(K.owner)} se van a casa.</b> Has acertado ${bye.nOk} de ${bye.total}.
          ${bye.tip ? `<div class="g-gains"><span>${COIN}+${bye.tip} propina</span><span>${STAR}+${bye.rb}</span></div>` : ""}</div>
          <button class="btn primary block" id="nextc">${lastClient ? "Cerrar la jornada" : "Que pase el siguiente"}</button>
        </div>` : ""}
    </div>`;
  $("#back").onclick = () => { gview = "hub"; render(); window.scrollTo(0, 0); };
  $$("[data-g]").forEach(b => b.onclick = () => answerStep(+b.dataset.g));
  $$("[data-info]").forEach(b => b.onclick = () => openInfo(+b.dataset.info));
  if ($("#cont")) $("#cont").onclick = () => { C.si++; C.order = shuffle([0, 1, 2, 3]); saveGame(); renderPatient(); scrollToEl(".chat .bub.them"); };
  if ($("#nextc")) $("#nextc").onclick = nextClient;
}
function scrollToEl(sel) {
  requestAnimationFrame(() => { const els = $$(sel); const el = els[els.length - 1]; if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); });
}
function answerStep(choice) {
  const C = G.cur, ci = C.clients[C.ci], K = CONSULTAS[ci], ok = choice === 0;
  CStats.record(ci + "-" + C.si, ok);
  G.served++;
  let pay = 0, drep;
  if (ok) { G.streak++; G.best = Math.max(G.best, G.streak); G.okTotal++; pay = payFor(G.rep, G.streak); drep = Math.min(REP_OK, 100 - G.rep); }
  else { G.streak = 0; drep = Math.max(REP_BAD, -G.rep); }
  G.money += pay; G.rep += drep; C.earned += pay; C.drep += drep;
  C.answers[C.ci][C.si] = { choice, ok, pay, drep };
  if (C.answers[C.ci].length === K.steps.length) {
    const nOk = C.answers[C.ci].filter(a => a.ok).length;
    let tip = 0, rb = 0;
    if (nOk === K.steps.length) { tip = TIP_HAPPY; rb = Math.min(REP_HAPPY, 100 - G.rep); G.money += tip; G.rep += rb; C.earned += tip; C.drep += rb; }
    C.bye[C.ci] = { nOk, total: K.steps.length, tip, rb };
    G.recentCases = [ci, ...G.recentCases.filter(x => x !== ci)].slice(0, 14);
  }
  saveGame(); renderPatient(); scrollToEl(".chat .fb");
  const happyClient = C.bye[C.ci] && C.bye[C.ci].tip;
  setTimeout(() => {
    const fbs = $$(".chat .fb"), last = fbs[fbs.length - 1];
    if (ok) { coinBurst(last ? last.querySelector(".fb-gain") : null, 5); confetti(happyClient ? 70 : 18); }
  }, 250);
}
function nextClient() {
  const C = G.cur;
  if (C.ci < C.clients.length - 1) {
    C.ci++; C.si = 0; C.order = shuffle([0, 1, 2, 3]); saveGame(); renderPatient(); window.scrollTo(0, 0);
  } else {
    lastSummary = { day: G.day, earned: C.earned, drep: C.drep, list: C.clients.map((ci, i) => ({ K: CONSULTAS[ci], b: C.bye[i] })) };
    G.day++; G.cur = null; saveGame();
    gview = "summary"; render(); window.scrollTo(0, 0);
    const happy = lastSummary.list.filter(x => x.b.nOk === x.b.total).length;
    if (happy * 2 >= lastSummary.list.length) setTimeout(() => confetti(happy === lastSummary.list.length ? 130 : 60), 300);
  }
}
function renderSummary() {
  setFocusMode(false);
  const s = lastSummary;
  const happy = s.list.filter(x => x.b.nOk === x.b.total).length, total = s.list.length;
  const msg = happy === total ? "¡Jornada redonda! El pueblo entero habla de tu clínica." : happy * 3 >= total * 2 ? "Buen día de trabajo. La mayoría se ha ido encantada." : happy * 3 >= total ? "Un día regular. Repasa lo que fallaste y mañana irá mejor." : "Día duro. Échale un ojo a los apuntes antes de volver a abrir.";
  $("#app").innerHTML = `
    <div class="g-wrap">
      <div class="g-paper summary">
        <p class="g-kicker">Fin del día ${s.day}</p>
        <h1 class="g-title">${happy} de ${total} clientes encantados</h1>
        <p>${msg}</p>
        <div class="g-gains big"><span>${COIN}+${s.earned}</span><span>${STAR}${s.drep >= 0 ? "+" : ""}${s.drep}</span></div>
        <ul class="sum-list">${s.list.map(({ K, b }) => {
          const m = b.nOk === b.total ? "happy" : b.nOk * 2 >= b.total ? "neutral" : "sad";
          return `<li><svg viewBox="0 0 100 100" class="mini-pet">${animalSVG(K.sp, K.pet, m)}</svg><span>${esc(K.pet)} <span class="muted small">· ${esc(K.owner)}</span></span><span class="spacer"></span><span class="tag ${b.nOk === b.total ? "okt" : "bad"}">${b.nOk}/${b.total}</span></li>`;
        }).join("")}</ul>
        <p class="muted small">Tus fallos de la consulta aparecen en Estudiar → Última hora.</p>
        <button class="btn primary block" id="home">Volver a la clínica</button>
      </div>
    </div>`;
  $("#home").onclick = () => { lastSummary = null; gview = "hub"; render(); window.scrollTo(0, 0); };
}

/* ---------- tienda ---------- */
let preview = null, shopSet = "navidad";
const SET_DISCOUNT = .85;
function renderShop() {
  setFocusMode(false);
  const sec = SHOP_SECTIONS.find(s => s.id === shopSec);
  const isSets = shopSec === "sets";
  if (isSets) { if (!PAT_SETS[shopSet]) shopSet = "navidad"; }
  else if (!sec.cats.includes(shopCat)) shopCat = sec.cats[0];
  const owned = (c, id) => G.owned.includes(c + ":" + id);
  const isRoomCat = c => SHOP_SECTIONS[1].cats.includes(c);
  const thumb = (c, it) => {
    if (c === "hairColor" || c === "skin") return `<span class="swatch" style="background:${it.c}"></span>`;
    const eq = Object.assign({}, G.eq, { [c]: it.id });
    if (isRoomCat(c)) return `<span class="thumb room">${sceneSVG({ eq, viewBox: FOCUS[c] })}</span>`;
    return `<span class="thumb">${avatarSVG(eq, "happy", "", AV_FOCUS[c] || "0 0 120 140")}</span>`;
  };
  const list = isSets ? setItems(shopSet) : SHOP[shopCat].items.map(it => ({ cat: shopCat, it }));
  const showRoom = isSets ? true : isRoomCat(shopCat);
  const stageEq = preview || G.eq;
  const stage = showRoom ? sceneSVG({ eq: stageEq, vetMood: "happy" }) : `<div class="dress"><div class="dress-av">${avatarSVG(stageEq, "happy")}</div></div>`;
  const missing = isSets ? list.filter(x => !owned(x.cat, x.it.id)) : [];
  const setPrice = Math.round(missing.reduce((a, x) => a + x.it.price, 0) * SET_DISCOUNT);
  $("#app").innerHTML = `
    <div class="g-wrap">
      <div class="topbar">
        <button class="icon-btn soft" id="back" aria-label="Volver"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>
        <h1 class="g-title sm">Tienda</h1><span class="spacer"></span>
        <div class="g-pill">${COIN}<b>${fmt(G.money)}</b></div>
      </div>
      <div class="seg">${SHOP_SECTIONS.map(s => `<button data-sec="${s.id}" aria-selected="${shopSec === s.id}">${s.label}</button>`).join("")}</div>
      <div class="scene-frame ${showRoom ? "" : "dressing"}">${stage}</div>
      <div class="shop-cats">${isSets
        ? Object.entries(PAT_SETS).map(([id, l]) => `<button data-set="${id}" aria-pressed="${shopSet === id}">${l}</button>`).join("")
        : sec.cats.map(c => `<button data-cat="${c}" aria-pressed="${shopCat === c}">${SHOP[c].label}</button>`).join("")}</div>
      ${isSets ? `<div class="set-bar">
          <button class="btn" id="tryall">Probar todo</button>
          ${missing.length ? `<button class="btn primary" id="buyall" ${G.money < setPrice ? "disabled" : ""}>Comprar lo que falta ${COIN}${setPrice}</button>` : `<span class="worn">¡Colección completa!</span>`}
        </div>${missing.length ? `<p class="muted small center">Comprando la colección entera tienes un 15 % de descuento.</p>` : ""}` : ""}
      ${!isSets && SHOP[shopCat].opt && G.eq[shopCat] ? `<button class="link" id="none" style="margin:-4px 0 8px">Quitar ${SHOP[shopCat].label.toLowerCase()}</button>` : ""}
      <div class="shop-grid">${list.map(({ cat, it }, i) => {
        const have = owned(cat, it.id), on = G.eq[cat] === it.id;
        let btn;
        if (have) btn = on ? (SHOP[cat].opt ? `<button class="btn sm" data-off="${cat}">Quitar</button>` : `<span class="worn">Puesto</span>`) : `<button class="btn sm primary" data-wear="${cat}|${it.id}">${isRoomCat(cat) ? "Colocar" : "Ponérmelo"}</button>`;
        else btn = `<button class="btn sm buy" data-buy="${cat}|${it.id}" ${G.money < it.price ? "disabled" : ""}>${COIN}${it.price}</button>`;
        return `<div class="item ${on ? "on" : ""}" data-prev="${cat}|${it.id}" style="animation-delay:${Math.min(i, 14) * 35}ms">${thumb(cat, it)}${isSets ? `<span class="item-cat">${SHOP[cat].label}</span>` : ""}<span class="item-name">${esc(it.name)}</span>${btn}</div>`;
      }).join("")}</div>
      <p class="muted small" style="text-align:center">Toca un objeto para probarlo antes de comprarlo.</p>
    </div>`;
  const cats = $(".shop-cats"), act = $(".shop-cats [aria-pressed=true]");
  if (cats && act) cats.scrollLeft = Math.max(0, act.offsetLeft - cats.offsetLeft - 24);
  const restage = (eq, room) => {
    const fr = $(".scene-frame");
    fr.classList.toggle("dressing", !room);
    fr.innerHTML = room ? sceneSVG({ eq, vetMood: "happy" }) : `<div class="dress"><div class="dress-av">${avatarSVG(eq, "happy")}</div></div>`;
    fr.classList.remove("pop"); void fr.offsetWidth; fr.classList.add("pop");
  };
  $("#back").onclick = () => { preview = null; gview = "hub"; render(); window.scrollTo(0, 0); };
  $$("[data-sec]").forEach(b => b.onclick = () => { shopSec = b.dataset.sec; preview = null; renderShop(); });
  $$("[data-cat]").forEach(b => b.onclick = () => { shopCat = b.dataset.cat; preview = null; renderShop(); });
  $$("[data-set]").forEach(b => b.onclick = () => { shopSet = b.dataset.set; preview = null; renderShop(); });
  $$("[data-prev]").forEach(el => el.onclick = e => {
    if (e.target.closest("button")) return;
    const [cat, id] = el.dataset.prev.split("|");
    preview = Object.assign({}, preview || G.eq, { [cat]: id });
    restage(preview, isSets ? true : isRoomCat(cat));
    $$(".item").forEach(x => x.classList.toggle("trying", x === el));
    $(".scene-frame").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  if ($("#tryall")) $("#tryall").onclick = () => {
    preview = Object.assign({}, G.eq); const done = new Set(); list.forEach(({ cat, it }) => { if (!done.has(cat)) { preview[cat] = it.id; done.add(cat); } });
    restage(preview, true); $(".scene-frame").scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  if ($("#buyall")) $("#buyall").onclick = () => confirmBox(`¿Comprar la colección ${PAT_SETS[shopSet]}?`, `${missing.length} objetos por ${setPrice} monedas (15 % de descuento). Te quedarán ${G.money - setPrice}.`, "Comprar", () => {
    G.money -= setPrice; const done = new Set(); missing.forEach(({ cat, it }) => { G.owned.push(cat + ":" + it.id); if (!done.has(cat)) { G.eq[cat] = it.id; done.add(cat); } });
    preview = null; saveGame(); renderShop(); celebrate(`¡Colección ${PAT_SETS[shopSet]} completa!`);
  });
  $$("[data-buy]").forEach(b => b.onclick = () => {
    const [cat, id] = b.dataset.buy.split("|"), it = findItem(cat, id);
    confirmBox(`¿Comprar ${it.name}?`, `Cuesta ${it.price} monedas. Te quedarán ${G.money - it.price}.`, "Comprar", () => {
      G.money -= it.price; G.owned.push(cat + ":" + it.id); G.eq[cat] = it.id;
      preview = null; saveGame(); renderShop(); celebrate("¡Nuevo objeto!");
    });
  });
  $$("[data-wear]").forEach(b => b.onclick = () => { const [cat, id] = b.dataset.wear.split("|"); G.eq[cat] = id; preview = null; saveGame(); renderShop(); });
  $$("[data-off]").forEach(b => b.onclick = () => { G.eq[b.dataset.off] = null; preview = null; saveGame(); renderShop(); });
  if ($("#none")) $("#none").onclick = () => { G.eq[shopCat] = null; preview = null; saveGame(); renderShop(); };
}
