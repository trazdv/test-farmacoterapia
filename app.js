"use strict";
/* ============ utilidades ============ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const LET = ["A", "B", "C", "D", "E"];
const ALL_TOPICS = [1, 2, 3, 4, 5];
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { } }
};
const countByTopic = t => QUESTIONS.filter(q => q.t === t).length;
const topicsWithQ = () => ALL_TOPICS.filter(t => countByTopic(t) > 0);

/* ============ estadísticas de fallos ============ */
/* por pregunta: w = veces fallada, r = veces acertada, s = aciertos seguidos, t = fecha del último fallo */
const Stats = {
  all() { return store.get("ft_stats", {}); },
  get(id) { return this.all()[id] || null; },
  record(id, ok) {
    const s = this.all(); const e = s[id] || { w: 0, r: 0, s: 0, t: 0 };
    if (ok) { e.r++; e.s++; } else { e.w++; e.s = 0; e.t = Date.now(); }
    s[id] = e; store.set("ft_stats", s);
  },
  /* una pregunta fallada se considera dominada tras acertarla 2 veces seguidas */
  failed() {
    const s = this.all();
    return QUESTIONS.filter(q => s[q.id] && s[q.id].w > 0).map(q => ({ q, e: s[q.id], mastered: s[q.id].s >= 2 }));
  },
  pending() { return this.failed().filter(x => !x.mastered); },
  weight(e) { return e.w * 3 - e.r + (e.s === 0 ? 2 : 0) + e.t / 1e13; },
  reset() { store.del("ft_stats"); }
};
/* las preguntas de los apuntes llevan sus propias estadísticas: no salen en Repaso ni en Última hora */
const ApStats = Object.assign({}, Stats, {
  all() { return store.get("ft_apstats", {}); },
  record(id, ok) {
    const s = this.all(); const e = s[id] || { w: 0, r: 0, s: 0, t: 0 };
    if (ok) { e.r++; e.s++; } else { e.w++; e.s = 0; e.t = Date.now(); }
    s[id] = e; store.set("ft_apstats", s);
  },
  failed() {
    const s = this.all();
    return APQ.filter(q => s[q.id] && s[q.id].w > 0).map(q => ({ q, e: s[q.id], mastered: s[q.id].s >= 2 }));
  },
  reset() { store.del("ft_apstats"); }
});
const bankQ = b => b === "ap" ? APQ : QUESTIONS;
/* nombre del tema de una pregunta de apuntes: el nombre corto de su documento si lo tiene («Tema 5 A»), si no el del tema */
const apDoc = Q => APUNTES.find(d => d.id === Q.doc);
const apName = Q => { const d = apDoc(Q); return d && d.short ? d.short : TOPICS[Q.t].name; };
const bankStats = b => b === "ap" ? ApStats : Stats;

/* ============ iconos (trazo a mano) ============ */
const ICON = {
  test: `<svg viewBox="0 0 24 24"><path d="M7 3.5h8.5L19 7v13.2a.8.8 0 0 1-.8.8H7a.8.8 0 0 1-.8-.8V4.3a.8.8 0 0 1 .8-.8Z"/><path d="M9.5 10.5l1.6 1.6 3-3.2M9.5 16h5"/></svg>`,
  repaso: `<svg viewBox="0 0 24 24"><path d="M4.5 12a7.5 7.5 0 0 1 13-5.1M19.5 12a7.5 7.5 0 0 1-13 5.1"/><path d="M17.8 3.8v3.4h-3.4M6.2 20.2v-3.4h3.4"/></svg>`,
  estudiar: `<svg viewBox="0 0 24 24"><path d="M3.5 5.5c3-.9 5.8-.6 8.5 1.2v13c-2.7-1.8-5.5-2.1-8.5-1.2Z"/><path d="M20.5 5.5c-3-.9-5.8-.6-8.5 1.2v13c2.7-1.8 5.5-2.1 8.5-1.2Z"/></svg>`,
  consulta: `<svg viewBox="0 0 24 24"><path d="M8 4.2c-1.3 0-2 .9-2 2.2v3.4a4.5 4.5 0 0 0 9 0V6.4c0-1.3-.7-2.2-2-2.2"/><path d="M10.5 14.3v1.9a3.6 3.6 0 0 0 7.2 0v-2.4"/><circle cx="17.7" cy="12.2" r="1.7"/></svg>`,
  apuntes: `<svg viewBox="0 0 24 24"><rect x="5.5" y="3.5" width="13" height="17" rx="1.6"/><path d="M9 3.5v17M11.8 8.2h4M11.8 11.6h4"/><path d="M3.8 7.2h2.6M3.8 12h2.6M3.8 16.8h2.6"/></svg>`
};

/* ============ estado global ============ */
let cfg = store.get("ft_cfg", { topics: topicsWithQ(), limit: 0, shuffleQ: true });
if (!cfg.t1) { if (!cfg.topics.includes(1) && cfg.topics.length >= 4) cfg.topics = [1, ...cfg.topics]; cfg.t1 = 1; store.set("ft_cfg", cfg); }
let view = store.get("ft_view", "test");
let quiz = null;          // test en curso o terminado
let reviewTab = "bad";
let showGrid = false;
let studyTab = "temas";
let studyTopic = 2;
let repasoLimit = 20;

function saveQuiz() { if (quiz && !quiz.done) store.set("ft_test", quiz); else store.del("ft_test"); }
function setView(v) { view = v; store.set("ft_view", v); if (quiz && quiz.done) quiz = null; render(); window.scrollTo(0, 0); }
function setFocusMode(on) { document.body.classList.toggle("focus", on); }

function renderTabs() {
  const tabs = [["test", "Test"], ["repaso", "Repaso"], ["estudiar", "Estudiar"], ["apuntes", "Apuntes"], ["consulta", "Consulta"]];
  const pend = Stats.pending().length;
  $("#tabs").innerHTML = `<div class="tabs-inner">${tabs.map(([k, l]) =>
    `<button data-view="${k}" aria-current="${view === k ? "page" : "false"}">${ICON[k]}<span>${l}</span>${k === "repaso" && pend ? `<i class="badge">${pend}</i>` : ""}</button>`).join("")}</div>`;
  $$("#tabs [data-view]").forEach(b => b.onclick = () => setView(b.dataset.view));
}

/* la animación de entrada solo se lanza al cambiar de pantalla, no al tocar botones */
let lastScreen = "";
function enterAnim() {
  const a = $("#app"); a.classList.remove("enter"); void a.offsetWidth; a.classList.add("enter");
  clearTimeout(enterAnim._t); enterAnim._t = setTimeout(() => a.classList.remove("enter"), 800);
}
function render() {
  closeModal();
  renderTabs();
  const screen = view + "|" + (quiz ? (quiz.done ? "res" : "quiz") : "") + "|" + (view === "consulta" && typeof gview !== "undefined" ? gview : "");
  if (screen !== lastScreen) { lastScreen = screen; enterAnim(); }
  if (quiz && !quiz.done) { setFocusMode(true); return renderQuiz(); }
  setFocusMode(false);
  if (quiz && quiz.done) return renderResults();
  if (view === "test") return renderSetup();
  if (view === "repaso") return renderRepaso();
  if (view === "estudiar") return renderStudy();
  if (view === "apuntes") return renderApuntes();
  if (view === "consulta") return renderConsulta();
}

/* ============ TEST: configuración ============ */
function renderSetup() {
  const pending = store.get("ft_test", null);
  const pool = QUESTIONS.filter(q => cfg.topics.includes(q.t));
  const n = cfg.limit && cfg.limit < pool.length ? cfg.limit : pool.length;
  const topicsHtml = ALL_TOPICS.map(t => {
    const c = countByTopic(t), on = cfg.topics.includes(t);
    return `<button class="topic" data-topic="${t}" aria-pressed="${on && c > 0}" ${c ? "" : "disabled"}>
      <span class="chk"><svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7"/></svg></span>
      <span><span class="t-name">${TOPICS[t].name}</span><br><span class="t-desc">${esc(TOPICS[t].desc)}</span></span>
      <span class="count">${c ? c + " preg." : "sin preguntas"}</span></button>`;
  }).join("");
  $("#app").innerHTML = `
    <header class="page-head"><h1>Test Farmacoterapia</h1>
    <p class="sub">1er parcial · ${QUESTIONS.length} preguntas. Respondes todas y al final ves la nota y los apuntes de lo que falles.</p></header>
    ${pending && !pending.done && pending.bank !== "ap" ? `<div class="card note-card"><div class="row"><div><b>Tienes un test a medias</b><br><span class="muted">${pending.answers.filter(a => a != null).length} de ${pending.items.length} respondidas</span></div><span class="spacer"></span><button class="btn primary" id="resume">Continuar</button></div></div>` : ""}
    <div class="card stack">
      <div>
        <div class="row" style="margin-bottom:10px"><p class="label">Temas</p><span class="spacer"></span><button class="link" id="all">Todos</button></div>
        ${topicsHtml}
      </div>
      <div><p class="label">Número de preguntas</p>
        <div class="chips">${[0, 10, 20, 30].map(l => `<button class="chip" data-limit="${l}" aria-pressed="${cfg.limit === l}">${l || "Todas"}</button>`).join("")}</div></div>
      <label class="toggle"><button class="switch" id="shq" role="switch" aria-checked="${cfg.shuffleQ}" aria-label="Orden aleatorio"></button><span>Preguntas en orden aleatorio</span></label>
      <button class="btn primary block" id="start" ${n ? "" : "disabled"}>${n ? `Empezar test · ${n} preguntas` : "Elige al menos un tema"}</button>
    </div>
    <p class="footer-note">Las respuestas cambian de orden en cada pregunta. Cada 3 preguntas respondidas ganas ${BOLT}+1 de energía para la consulta.</p>
    <p class="footer-note"><button class="link" id="xfer">Copia de seguridad · pasar la partida a otro dispositivo</button></p>
    <div class="theme-pick">Aspecto:${[["light", "Claro"], ["dark", "Oscuro"], ["auto", "Como el móvil"]].map(([k, l]) => `<button data-th="${k}" aria-pressed="${store.get("ft_theme", "light") === k}">${l}</button>`).join("")}</div>`;
  $("#xfer").onclick = openTransfer;
  $$("[data-th]").forEach(b => b.onclick = () => {
    const t = b.dataset.th; store.set("ft_theme", t);
    if (t === "auto") delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = t;
    renderSetup();
  });
  $$("[data-topic]").forEach(b => b.onclick = () => {
    const t = +b.dataset.topic; cfg.topics = cfg.topics.includes(t) ? cfg.topics.filter(x => x !== t) : [...cfg.topics, t];
    store.set("ft_cfg", cfg); renderSetup();
  });
  $("#all").onclick = () => { const all = topicsWithQ(); cfg.topics = cfg.topics.length === all.length ? [] : all; store.set("ft_cfg", cfg); renderSetup(); };
  $$("[data-limit]").forEach(b => b.onclick = () => { cfg.limit = +b.dataset.limit; store.set("ft_cfg", cfg); renderSetup(); });
  $("#shq").onclick = () => { cfg.shuffleQ = !cfg.shuffleQ; store.set("ft_cfg", cfg); renderSetup(); };
  $("#start").onclick = () => {
    let ids = pool.map(q => q.id); if (cfg.shuffleQ) ids = shuffle(ids);
    if (cfg.limit) ids = ids.slice(0, cfg.limit);
    startQuiz(ids, "test");
  };
  if ($("#resume")) $("#resume").onclick = () => { quiz = pending; render(); };
}

function startQuiz(ids, mode, bank = "main") {
  const B = bankQ(bank);
  quiz = { mode, bank, items: ids.map(id => ({ id, order: shuffle(B[id].o.map((_, i) => i)) })), answers: ids.map(() => null), idx: 0, done: false };
  showGrid = false; saveQuiz(); render(); window.scrollTo(0, 0);
}

/* ============ TEST: preguntas ============ */
function renderQuiz() {
  const it = quiz.items[quiz.idx], Q = bankQ(quiz.bank)[it.id], total = quiz.items.length;
  const answered = quiz.answers.filter(a => a != null).length;
  const last = quiz.idx === total - 1;
  $("#app").innerHTML = `
    <div class="topbar">
      <button class="icon-btn" id="exit" aria-label="Salir"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
      <div class="muted"><b class="ink">Pregunta ${quiz.idx + 1}</b> de ${total}${quiz.bank === "ap" ? " · apuntes" : quiz.mode === "repaso" ? " · repaso" : ""}</div>
      <span class="spacer"></span>
      <button class="icon-btn" id="gridbtn" aria-label="Ver todas"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/></svg></button>
    </div>
    <div class="progress"><div style="width:${(answered / total) * 100}%"></div></div>
    <div id="grid" class="card ${showGrid ? "" : "hidden"}" style="margin-bottom:16px">
      <div class="muted small">Toca un número para ir a esa pregunta</div>
      <div class="grid">${quiz.items.map((_, i) => `<button data-go="${i}" class="${quiz.answers[i] != null ? "answered" : ""} ${i === quiz.idx ? "current" : ""}">${i + 1}</button>`).join("")}</div>
    </div>
    <span class="tag">${quiz.bank === "ap" ? "Tus apuntes · " + apName(Q) : `${TOPICS[Q.t].name} · ${esc(TOPICS[Q.t].desc.split(" (")[0])}`}</span>
    <h2 class="qtext">${esc(Q.q)}</h2>
    <div>${it.order.map((oi, k) => `<button class="opt" data-opt="${oi}" aria-pressed="${quiz.answers[quiz.idx] === oi}"><span class="letter">${LET[k]}</span><span>${esc(Q.o[oi])}</span></button>`).join("")}</div>
    <nav class="navbar"><div class="inner">
      <button class="btn" id="prev" ${quiz.idx === 0 ? "disabled" : ""}>‹ Anterior</button>
      ${last ? `<button class="btn primary" id="finish">Finalizar</button>` : `<button class="btn primary" id="next">Siguiente ›</button>`}
    </div></nav>`;
  $$("[data-opt]").forEach(b => b.onclick = () => {
    const v = +b.dataset.opt; quiz.answers[quiz.idx] = quiz.answers[quiz.idx] === v ? null : v; saveQuiz(); renderQuiz();
  });
  $$("[data-go]").forEach(b => b.onclick = () => { quiz.idx = +b.dataset.go; saveQuiz(); renderQuiz(); window.scrollTo(0, 0); });
  $("#gridbtn").onclick = () => { showGrid = !showGrid; $("#grid").classList.toggle("hidden", !showGrid); };
  $("#prev").onclick = () => go(-1);
  if ($("#next")) $("#next").onclick = () => go(1);
  if ($("#finish")) $("#finish").onclick = tryFinish;
  $("#exit").onclick = () => confirmBox("¿Salir del test?", `Tu progreso se guarda y podrás continuarlo desde la pestaña ${quiz.bank === "ap" ? "Apuntes" : "Test"}.`, "Salir", () => { quiz = null; render(); });
}
function go(d) { const n = quiz.idx + d; if (n < 0 || n >= quiz.items.length) return; quiz.idx = n; saveQuiz(); renderQuiz(); window.scrollTo(0, 0); }
function tryFinish() {
  const blank = quiz.answers.filter(a => a == null).length;
  if (blank) confirmBox("¿Finalizar el test?", `Te quedan ${blank} pregunta${blank > 1 ? "s" : ""} sin responder; contarán como falladas.`, "Finalizar", finish);
  else finish();
}
function finish() {
  quiz.done = true;
  const B = bankQ(quiz.bank), S = bankStats(quiz.bank);
  quiz.items.forEach((it, i) => S.record(it.id, quiz.answers[i] === B[it.id].a));
  store.del("ft_test");
  // energía para la consulta: +1 por cada 3 respondidas, +1 extra si nota >= 7 (con 10 o más preguntas)
  const answered = quiz.answers.filter(a => a != null).length;
  const okN = quiz.items.filter((it, i) => quiz.answers[i] === B[it.id].a).length;
  let e = Math.floor(answered / 3) + (quiz.items.length >= 10 && okN / quiz.items.length >= 0.7 ? 1 : 0);
  quiz.energy = e ? addEnergy(e, "por el test") : 0;
  const allOk = okN === quiz.items.length;
  if (okN / quiz.items.length >= 0.5) setTimeout(() => confetti(allOk ? 120 : 60), 350);
  reviewTab = "bad";
  render(); window.scrollTo(0, 0);
}

/* ============ TEST: resultados ============ */
function renderResults() {
  const B = bankQ(quiz.bank), bank = quiz.bank;
  const rows = quiz.items.map((it, i) => { const Q = B[it.id]; const a = quiz.answers[i]; return { Q, a, status: a == null ? "blank" : a === Q.a ? "ok" : "bad", n: i + 1 }; });
  const ok = rows.filter(r => r.status === "ok").length, bad = rows.filter(r => r.status === "bad").length, blank = rows.filter(r => r.status === "blank").length;
  const total = rows.length, pct = Math.round(ok / total * 100), nota = (ok / total * 10).toFixed(1).replace(".", ",");
  const pass = ok / total >= 0.5;
  const tabs = [["bad", `Falladas (${bad})`], ["blank", `En blanco (${blank})`], ["ok", `Acertadas (${ok})`], ["all", "Todas"]];
  const list = rows.filter(r => reviewTab === "all" || r.status === reviewTab);
  $("#app").innerHTML = `
    <header class="page-head"><h1>Resultado</h1></header>
    <div class="card">
      <div class="score">
        <div class="ring" style="--p:${pct};--ring-color:${pass ? "var(--ok)" : "var(--bad)"}"><div><b>${nota}</b><span>sobre 10</span></div></div>
        <div style="flex:1;min-width:220px">
          <div class="verdict" style="color:${pass ? "var(--ok)" : "var(--bad)"}">${pass ? "Aprobado" : "Suspenso"} · ${pct}% de aciertos</div>
          <div class="stats">
            <div class="stat ok"><b>${ok}</b>Bien</div><div class="stat bad"><b>${bad}</b>Mal</div><div class="stat"><b>${blank}</b>En blanco</div>
          </div>
        </div>
      </div>
      <div class="row" style="margin-top:16px">
        ${bad + blank ? `<button class="btn primary" id="redo" style="flex:1">Repetir falladas (${bad + blank})</button>` : ""}
        <button class="btn" id="new" style="flex:1">Cerrar</button>
      </div>
      <p class="muted small" style="margin:12px 0 0">${bank === "ap" ? "Las falladas se guardan en <b>Apuntes</b>, en «Solo las que he fallado»." : "Las falladas se han guardado en <b>Repaso</b>."}${quiz.energy ? ` Has ganado ${BOLT}<b>+${quiz.energy}</b> de energía para la consulta.` : ""}</p>
    </div>
    <div class="seg" role="tablist">${tabs.map(([k, l]) => `<button role="tab" data-tab="${k}" aria-selected="${reviewTab === k}">${l}</button>`).join("")}</div>
    <div>${list.length ? list.map(r => reviewCard(r, bank)).join("") :`<div class="empty">${reviewTab === "bad" ? "¡No has fallado ninguna!" : "No hay preguntas aquí."}</div>`}</div>`;
  $$("[data-tab]").forEach(b => b.onclick = () => { reviewTab = b.dataset.tab; renderResults(); });
  $$("[data-info]").forEach(b => b.onclick = () => openInfo(+b.dataset.info, bank));
  if ($("#redo")) $("#redo").onclick = () => startQuiz(shuffle(rows.filter(r => r.status !== "ok").map(r => r.Q.id)), quiz.mode, bank);
  $("#new").onclick = () => { quiz = null; render(); window.scrollTo(0, 0); };
}
function reviewCard(r, bank) {
  const { Q, a, status } = r;
  const mine = a == null ? `<div class="ans blank"><span class="k">Tu respuesta</span><span>Sin responder</span></div>`
    : status === "ok" ? "" : `<div class="ans bad"><span class="k">Tu respuesta</span><span>${esc(Q.o[a])}</span></div>`;
  return `<div class="rev">
    <div class="row"><span class="tag">${r.n} · ${bank === "ap" ? "Tus apuntes · " + apName(Q) : TOPICS[Q.t].name}</span>${Q.d ? `<span class="tag warn">Dudosa</span>` : ""}</div>
    <div class="qtext sm">${esc(Q.q)}</div>
    ${mine}
    <div class="ans ok"><span class="k">Correcta</span><span>${esc(Q.o[Q.a])}</span></div>
    <button class="info-btn" data-info="${Q.id}">${bank === "ap" ? "Ver en tus apuntes" : "Ver apuntes"}</button>
  </div>`;
}

/* ============ REPASO ============ */
function renderRepaso() {
  const failed = Stats.failed();
  const pending = failed.filter(x => !x.mastered).sort((a, b) => Stats.weight(b.e) - Stats.weight(a.e));
  const multi = pending.filter(x => x.e.w >= 2);
  const mastered = failed.filter(x => x.mastered);
  if (!failed.length) {
    $("#app").innerHTML = `<header class="page-head"><h1>Repaso</h1></header>
      <div class="card empty-state"><svg viewBox="0 0 120 90" class="doodle"><path d="M18 70c10-30 30-48 58-50"/><path d="M70 12l8 8-10 5"/><circle cx="92" cy="58" r="14"/><path d="M86 58l4 4 8-9"/></svg>
      <p><b>Aún no tienes preguntas falladas.</b></p><p class="muted">Cuando falles en un test o en la consulta, aparecerán aquí. Las que falles más veces salen primero.</p>
      <button class="btn primary" id="gotest">Hacer un test</button></div>`;
    $("#gotest").onclick = () => setView("test");
    return;
  }
  const smartN = Math.min(repasoLimit || pending.length, pending.length);
  $("#app").innerHTML = `
    <header class="page-head"><h1>Repaso</h1><p class="sub">Las preguntas que fallas se guardan aquí. Cuando aciertas una dos veces seguidas, pasa a dominada.</p></header>
    <div class="trio">
      <div class="stat bad"><b>${pending.length}</b>Pendientes</div>
      <div class="stat warnc"><b>${multi.length}</b>Falladas 2+ veces</div>
      <div class="stat ok"><b>${mastered.length}</b>Dominadas</div>
    </div>
    <div class="card stack" style="margin-top:14px">
      ${pending.length ? `
      <div><p class="label">Preguntas por sesión</p>
      <div class="chips">${[10, 20, 0].map(l => `<button class="chip" data-rl="${l}" aria-pressed="${repasoLimit === l}">${l || "Todas"}</button>`).join("")}</div></div>
      <button class="btn primary block" id="smart">Repaso inteligente · ${smartN} preguntas</button>
      <p class="muted small" style="margin:10px 2px 0">Empieza por las que más fallas y las más recientes.</p>
      ${multi.length ? `<button class="btn block" id="multi">Solo las que fallo varias veces (${multi.length})</button>` : ""}`
      : `<p><b>¡Todo dominado!</b> No te quedan preguntas pendientes.</p>`}
      ${mastered.length ? `<button class="btn ghost block" id="mast">Repasar también las dominadas (${mastered.length})</button>` : ""}
    </div>
    ${pending.length ? `<h2 class="section-title">Tus puntos débiles</h2>
    <div>${pending.slice(0, 20).map(x => `<button class="weak" data-info="${x.q.id}">
      <span class="weak-n" title="veces fallada">${x.e.w}×</span>
      <span class="weak-q"><span class="tag">${TOPICS[x.q.t].name}</span><br>${esc(x.q.q)}</span>
      <span class="weak-r">${x.e.r ? `✓${x.e.r}` : ""}</span></button>`).join("")}</div>` : ""}
    <p class="footer-note"><button class="link danger" id="reset">Borrar estadísticas de fallos</button></p>`;
  $$("[data-rl]").forEach(b => b.onclick = () => { repasoLimit = +b.dataset.rl; renderRepaso(); });
  if ($("#smart")) $("#smart").onclick = () => {
    // las más pesadas primero, pero mezcladas dentro de la sesión
    startQuiz(shuffle(pending.slice(0, smartN).map(x => x.q.id)), "repaso");
  };
  if ($("#multi")) $("#multi").onclick = () => startQuiz(shuffle(multi.map(x => x.q.id)), "repaso");
  if ($("#mast")) $("#mast").onclick = () => startQuiz(shuffle(failed.map(x => x.q.id)), "repaso");
  $$("[data-info]").forEach(b => b.onclick = () => openInfo(+b.dataset.info));
  $("#reset").onclick = () => confirmBox("¿Borrar estadísticas?", "Se olvidarán todas las preguntas falladas. No afecta a tu partida de la consulta.", "Borrar", () => { Stats.reset(); render(); });
}

/* ============ ESTUDIAR ============ */
function renderStudy() {
  const failed = Stats.failed().sort((a, b) => b.e.w - a.e.w);
  let body = "";
  if (studyTab === "temas") {
    const S = STUDY[studyTopic];
    const qs = QUESTIONS.filter(q => q.t === studyTopic);
    body = `
      <div class="chips topic-chips">${ALL_TOPICS.map(t => `<button class="chip" data-st="${t}" aria-pressed="${studyTopic === t}">Tema ${t}</button>`).join("")}</div>
      <article class="paper">
        <h2 class="paper-title">${TOPICS[studyTopic].name}: ${esc(TOPICS[studyTopic].desc)}</h2>
        <p class="muted">${S.intro}</p>
        ${S.sections.map(([h, html]) => `<section><h3>${h}</h3>${html}</section>`).join("")}
      </article>
      ${qs.length ? `<h2 class="section-title">Preguntas del tema con su respuesta</h2>
      ${qs.map(q => { const e = Stats.get(q.id); return `<details class="qa"><summary>${esc(q.q)}${e && e.w ? ` <span class="tag bad">${e.w}× fallada</span>` : ""}</summary>
        <div class="ans ok"><span class="k">Correcta</span><span>${esc(q.o[q.a])}</span></div><div class="qa-note">${q.n}</div></details>`; }).join("")}` : ""}`;
  } else {
    const byTopic = ALL_TOPICS.map(t => [t, failed.filter(x => x.q.t === t)]).filter(([, l]) => l.length);
    const cf = CStats.failed();
    body = failed.length || cf.length ? `
      <div class="row" style="margin-bottom:12px"><p class="muted small" style="margin:0;flex:1">Solo lo que has fallado alguna vez, de más a menos fallado.</p>
      <button class="btn" id="print">Imprimir / PDF</button></div>
      ${byTopic.map(([t, l]) => `<article class="paper last">
        <h2 class="paper-title">${TOPICS[t].name}: ${esc(TOPICS[t].desc.split(" (")[0])}</h2>
        ${l.map(x => `<div class="lh">
          <div class="lh-q">${esc(x.q.q)} <span class="tag ${x.mastered ? "okt" : "bad"}">${x.e.w}× fallada${x.mastered ? " · dominada" : ""}</span></div>
          <div class="lh-a">✓ ${esc(x.q.o[x.q.a])}</div>
          <div class="lh-n">${x.q.n}</div></div>`).join("")}
      </article>`).join("")}
      ${cf.length ? `<article class="paper last">
        <h2 class="paper-title">De la consulta</h2>
        ${cf.map(x => `<div class="lh">
          <div class="lh-q">${esc(x.c.pet)} (${esc(x.c.owner)}): «${esc(x.st.ask)}» <span class="tag ${x.mastered ? "okt" : "bad"}">${x.e.w}× fallada${x.mastered ? " · dominada" : ""}</span></div>
          <div class="lh-a">✓ ${esc(x.st.o[0])}</div>
          <div class="lh-n">${esc(x.st.why)}</div></div>`).join("")}
      </article>` : ""}`
      : `<div class="card empty-state"><p><b>Aquí aparecerán tus apuntes de última hora.</b></p><p class="muted">Solo con lo que hayas fallado en los tests y en la consulta, la respuesta correcta y la explicación.</p></div>`;
  }
  const nFail = failed.length + CStats.failed().length;
  $("#app").innerHTML = `
    <header class="page-head row"><h1 style="flex:1">Estudiar</h1><span class="energy-chip" id="studychip"></span></header>
    <div class="seg"><button data-sv="temas" aria-selected="${studyTab === "temas"}">Apuntes por tema</button><button data-sv="ultima" aria-selected="${studyTab === "ultima"}">Última hora${nFail ? ` (${nFail})` : ""}</button></div>
    ${body}`;
  updateStudyChip();
  $$("[data-sv]").forEach(b => b.onclick = () => { studyTab = b.dataset.sv; renderStudy(); });
  $$("[data-st]").forEach(b => b.onclick = () => { studyTopic = +b.dataset.st; renderStudy(); });
  if ($("#print")) $("#print").onclick = () => window.print();
}

/* ============ APUNTES: los resúmenes del usuario, tal cual ============ */
let apTopic = null, apTab = "docs";
let apCfg = store.get("ft_apcfg", { topics: null, limit: 0 });
const apCount = docId => APQ.filter(q => q.doc === docId).length;
/* un documento puede abarcar varios temas (t: [2, 3]); «from» dice en qué página empieza cada tema */
const docIn = (d, t) => Array.isArray(d.t) ? d.t.includes(t) : d.t === t;
function renderApuntes() {
  const docTopics = ALL_TOPICS.filter(t => APUNTES.some(d => docIn(d, t)));
  if (apTopic == null) apTopic = docTopics[0] || 1;
  const pending = store.get("ft_test", null), pAp = pending && !pending.done && pending.bank === "ap" ? pending : null;
  // grupos del repaso: uno por tema, salvo los documentos con nombre corto propio (el Tema 5 A y el 5 B van por separado)
  const apKey = q => { const d = apDoc(q); return d && d.short ? d.id : String(q.t); };
  const groups = [];
  ALL_TOPICS.forEach(t => {
    if (APQ.some(q => q.t === t && apKey(q) === String(t))) groups.push({ k: String(t), name: TOPICS[t].name });
    APUNTES.filter(d => d.short && !groups.some(g => g.k === d.id) && APQ.some(q => q.doc === d.id && q.t === t)).forEach(d => groups.push({ k: d.id, name: d.short }));
  });
  const keys = groups.map(g => g.k);
  const sel = (apCfg.topics || keys).map(String).filter(k => keys.includes(k));
  const pool = APQ.filter(q => sel.includes(apKey(q)));
  const n = apCfg.limit && apCfg.limit < pool.length ? apCfg.limit : pool.length;
  const pend = ApStats.pending();
  const docs = APUNTES.filter(d => docIn(d, apTopic));
  const reviewHtml = APQ.length ? `<div class="card stack">
      <div class="row ap-head"><span class="ap-ico">${ICON.apuntes}</span><div><b>Repasar apuntes</b><br><span class="muted small">${APQ.length} preguntas hechas solo con tus apuntes. No salen en el Test ni en Repaso.</span></div></div>
      ${groups.length > 1 ? `<div><p class="label">Temas</p><div class="chips">${groups.map(g => `<button class="chip" data-aqt="${g.k}" aria-pressed="${sel.includes(g.k)}">${esc(g.name)}</button>`).join("")}</div></div>` : ""}
      <div><p class="label">Número de preguntas</p><div class="chips">${[0, 10, 20].map(l => `<button class="chip" data-alim="${l}" aria-pressed="${apCfg.limit === l}">${l || "Todas"}</button>`).join("")}</div></div>
      <button class="btn primary block" id="apstart" ${n ? "" : "disabled"}>${n ? `Repasar apuntes · ${n} preguntas` : "Elige al menos un tema"}</button>
      ${pend.length ? `<button class="btn block" id="apfail">Solo las que he fallado (${pend.length})</button>` : ""}
    </div>
    ${pend.length ? `<h2 class="section-title">Lo que más fallas de tus apuntes</h2>
    <div>${pend.sort((a, b) => ApStats.weight(b.e) - ApStats.weight(a.e)).slice(0, 20).map(x => `<button class="weak" data-apinfo="${x.q.id}">
      <span class="weak-n" title="veces fallada">${x.e.w}×</span>
      <span class="weak-q"><span class="tag">${apName(x.q)} · pág. ${x.q.p}</span><br>${esc(x.q.q)}</span>
      <span class="weak-r">${x.e.r ? `✓${x.e.r}` : ""}</span></button>`).join("")}</div>` : ""}`
    : `<div class="card empty-state"><p><b>Aún no hay preguntas de tus apuntes.</b></p></div>`;
  $("#app").innerHTML = `
    <header class="page-head row"><h1 style="flex:1">Apuntes</h1><span class="energy-chip" id="studychip"></span></header>
    ${pAp ? `<div class="card note-card"><div class="row"><div><b>Tienes un repaso de apuntes a medias</b><br><span class="muted">${pAp.answers.filter(a => a != null).length} de ${pAp.items.length} respondidas</span></div><span class="spacer"></span><button class="btn primary" id="apresume">Continuar</button></div></div>` : ""}
    <div class="seg"><button data-asv="docs" aria-selected="${apTab === "docs"}">Mis apuntes</button><button data-asv="repasar" aria-selected="${apTab === "repasar"}">Repasar apuntes${pend.length ? ` (${pend.length})` : ""}</button></div>
    ${apTab === "repasar" ? reviewHtml : `
    <p class="sub ap-sub">Tus resúmenes tal cual, por temas.</p>
    <div class="chips topic-chips">${ALL_TOPICS.map(t => { const c = APUNTES.filter(d => docIn(d, t)).length; return `<button class="chip" data-at="${t}" aria-pressed="${apTopic === t}">Tema ${t}${c ? ` · ${c}` : ""}</button>`; }).join("")}</div>
    ${docs.length ? docs.map(d => `<div class="card doc-card">
        <button class="doc-thumb" data-open="${d.id}" aria-label="Leer ${esc(d.title)}"><img src="${d.dir}p1.webp" alt="" loading="lazy" decoding="async"></button>
        <div class="doc-info"><b>${esc(d.title)}</b>${d.sub ? `<span class="muted small">${esc(d.sub)}</span>` : ""}
          <span class="muted small">${d.pages} páginas${apCount(d.id) ? ` · ${apCount(d.id)} preguntas` : ""}</span>
          ${d.from ? `<span class="muted small">${Object.entries(d.from).map(([t, p], i, a) => `Tema ${t}: ${a[i + 1] ? `págs. ${p}-${a[i + 1][1] - 1}` : `págs. ${p}-${d.pages}`}`).join(" · ")}</span>` : ""}
          <div class="row doc-btns"><button class="btn primary" data-open="${d.id}">Leer</button>${apCount(d.id) ? `<button class="btn" data-arev="${d.id}">Repasar</button>` : ""}</div></div>
      </div>`).join("")
      : `<div class="card empty-state"><p><b>Aún no hay apuntes del ${TOPICS[apTopic].name}.</b></p><p class="muted">Cuando me pases tus resúmenes de este tema, aparecerán aquí tal cual.</p></div>`}`}`;
  updateStudyChip();
  $$("[data-asv]").forEach(b => b.onclick = () => { apTab = b.dataset.asv; renderApuntes(); });
  $$("[data-apinfo]").forEach(b => b.onclick = () => openInfo(+b.dataset.apinfo, "ap"));
  $$("[data-at]").forEach(b => b.onclick = () => { apTopic = +b.dataset.at; renderApuntes(); });
  $$("[data-aqt]").forEach(b => b.onclick = () => { const k = b.dataset.aqt; apCfg.topics = sel.includes(k) ? sel.filter(x => x !== k) : [...sel, k]; store.set("ft_apcfg", apCfg); renderApuntes(); });
  $$("[data-alim]").forEach(b => b.onclick = () => { apCfg.limit = +b.dataset.alim; store.set("ft_apcfg", apCfg); renderApuntes(); });
  if ($("#apstart")) $("#apstart").onclick = () => { let ids = shuffle(pool.map(q => q.id)); if (apCfg.limit) ids = ids.slice(0, apCfg.limit); startQuiz(ids, "test", "ap"); };
  if ($("#apfail")) $("#apfail").onclick = () => startQuiz(shuffle(pend.map(x => x.q.id)), "repaso", "ap");
  if ($("#apresume")) $("#apresume").onclick = () => { quiz = pAp; render(); };
  $$("[data-open]").forEach(b => b.onclick = () => { const d = APUNTES.find(x => x.id === b.dataset.open); openViewer(d.id, (d.from && d.from[apTopic]) || 1); });
  $$("[data-arev]").forEach(b => b.onclick = () => startQuiz(shuffle(APQ.filter(q => q.doc === b.dataset.arev).map(q => q.id)), "test", "ap"));
}

/* visor de páginas: zoom con dos dedos, doble toque o botones; el botón «atrás» del móvil lo cierra */
let viewer = null;
const VZ = { min: 1, max: 4 }, VSTEPS = [1, 1.5, 2, 2.5, 3, 4];
function openViewer(docId, page = 1) {
  const d = APUNTES.find(x => x.id === docId); if (!d) return;
  closeModal();
  let root = $("#viewer-root"); if (!root) { root = document.createElement("div"); root.id = "viewer-root"; document.body.appendChild(root); }
  viewer = { doc: d, z: Math.min(VZ.max, Math.max(VZ.min, +store.get("ft_apzoom", 1) || 1)) };
  const nq = apCount(d.id);
  root.innerHTML = `<div class="viewer" role="dialog" aria-modal="true" aria-label="${esc(d.title)}">
    <div class="vbar">
      <button class="icon-btn" id="vclose" aria-label="Cerrar"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>
      <div class="vtitle"><b>${esc(d.title)}</b><span class="muted small" id="vpage">Página ${page} de ${d.pages}</span></div>
      <button class="icon-btn" id="vzout" aria-label="Alejar"><svg viewBox="0 0 24 24"><path d="M6 12h12"/></svg></button>
      <button class="vzl" id="vzreset" aria-label="Ajustar al ancho">100 %</button>
      <button class="icon-btn" id="vzin" aria-label="Acercar"><svg viewBox="0 0 24 24"><path d="M6 12h12M12 6v12"/></svg></button>
      <a class="icon-btn" href="${d.pdf}" target="_blank" rel="noopener" aria-label="Abrir el PDF original" title="Abrir el PDF original"><svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg></a>
    </div>
    <div class="vscroll" id="vscroll"><div class="vpages" id="vpages">
      ${Array.from({ length: d.pages }, (_, i) => `<div class="vpage" id="vp${i + 1}" style="aspect-ratio:${d.w}/${d.h}"><img src="${d.dir}p${i + 1}.webp" alt="Página ${i + 1} de ${d.pages}" decoding="async"${Math.abs(i + 1 - page) > 1 ? ' loading="lazy"' : ""}></div><div class="vpnum">${i + 1} / ${d.pages}</div>`).join("")}
      ${nq ? `<button class="btn primary block" id="vrev">Repasar estos apuntes · ${nq} preguntas</button>` : ""}
    </div></div></div>`;
  document.body.style.overflow = "hidden";
  const sc = $("#vscroll");
  vApply();
  const target = $("#vp" + page); if (target && page > 1) sc.scrollTop = target.offsetTop - 8;
  $("#vzreset").textContent = Math.round(viewer.z * 100) + " %";
  $("#vclose").onclick = () => closeViewer();
  $("#vzin").onclick = () => vZoom(vStep(1));
  $("#vzout").onclick = () => vZoom(vStep(-1));
  $("#vzreset").onclick = () => vZoom(1);
  if ($("#vrev")) $("#vrev").onclick = () => { closeViewer(); startQuiz(shuffle(APQ.filter(q => q.doc === d.id).map(q => q.id)), "test", "ap"); };
  sc.addEventListener("scroll", vPageLabel, { passive: true });
  vTouch(sc);
  if (!(history.state && history.state.viewer)) { try { history.pushState({ viewer: 1 }, ""); } catch (e) { } }
}
function closeViewer(fromPop) {
  if (!viewer) return;
  viewer = null;
  const r = $("#viewer-root"); if (r) r.innerHTML = "";
  document.body.style.overflow = "";
  if (!fromPop && history.state && history.state.viewer) { try { history.back(); } catch (e) { } }
}
window.addEventListener("popstate", () => { if (viewer) closeViewer(true); });
window.addEventListener("resize", () => { if (viewer) vApply(); });
function vStep(dir) { const z = viewer.z; return dir > 0 ? (VSTEPS.find(s => s > z + .01) || VZ.max) : ([...VSTEPS].reverse().find(s => s < z - .01) || VZ.min); }
function vApply() {
  const sc = $("#vscroll"), pg = $("#vpages"); if (!sc || !pg || !viewer) return;
  pg.style.width = Math.round(Math.min(sc.clientWidth, 920) * viewer.z) + "px";
}
function vZoom(nz, cx, cy) {
  const sc = $("#vscroll"); if (!sc || !viewer) return;
  nz = Math.min(VZ.max, Math.max(VZ.min, nz));
  const oz = viewer.z; if (Math.abs(nz - oz) < .001) return;
  if (cx == null) { cx = sc.clientWidth / 2; cy = sc.clientHeight / 2; }
  const x = sc.scrollLeft + cx, y = sc.scrollTop + cy, r = nz / oz;
  viewer.z = nz; vApply();
  sc.scrollLeft = x * r - cx; sc.scrollTop = y * r - cy;
  $("#vzreset").textContent = Math.round(nz * 100) + " %";
  clearTimeout(vZoom._t); vZoom._t = setTimeout(() => { if (viewer) store.set("ft_apzoom", viewer.z); }, 400);
}
function vPageLabel() {
  const sc = $("#vscroll"); if (!sc || !viewer) return;
  const mid = sc.scrollTop + sc.clientHeight * .35; let p = 1;
  for (let i = 1; i <= viewer.doc.pages; i++) { const el = $("#vp" + i); if (el && el.offsetTop <= mid) p = i; }
  const lab = $("#vpage"); if (lab) lab.textContent = `Página ${p} de ${viewer.doc.pages}`;
}
function vTouch(sc) {
  let pinch = null, raf = 0, next = null, tap = null, lastTap = null;
  const rel = (x, y) => { const r = sc.getBoundingClientRect(); return [x - r.left, y - r.top]; };
  sc.addEventListener("touchstart", e => {
    if (e.touches.length === 2) { const [a, b] = e.touches; pinch = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) || 1, z: viewer.z }; tap = null; }
    else if (e.touches.length === 1) tap = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
  }, { passive: true });
  sc.addEventListener("touchmove", e => {
    if (tap && e.touches.length === 1 && Math.hypot(e.touches[0].clientX - tap.x, e.touches[0].clientY - tap.y) > 10) tap = null;
    if (!pinch || e.touches.length !== 2) return;
    e.preventDefault();
    const [a, b] = e.touches, d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    const [cx, cy] = rel((a.clientX + b.clientX) / 2, (a.clientY + b.clientY) / 2);
    next = { z: pinch.z * d / pinch.d, cx, cy };
    if (!raf) raf = requestAnimationFrame(() => { raf = 0; if (next && viewer) vZoom(next.z, next.cx, next.cy); next = null; });
  }, { passive: false });
  sc.addEventListener("touchend", e => {
    if (pinch) { if (e.touches.length < 2) pinch = null; return; }
    if (!tap || e.touches.length) return;
    const now = Date.now(), t = tap; tap = null;
    if (now - t.t > 300) return;
    if (lastTap && now - lastTap.t < 320 && Math.hypot(t.x - lastTap.x, t.y - lastTap.y) < 30) {
      const [cx, cy] = rel(t.x, t.y); vZoom(viewer.z > 1.2 ? 1 : 2.5, cx, cy); lastTap = null;
    } else lastTap = { x: t.x, y: t.y, t: now };
  }, { passive: true });
  sc.addEventListener("dblclick", e => { const [cx, cy] = rel(e.clientX, e.clientY); vZoom(viewer.z > 1.2 ? 1 : 2.5, cx, cy); });
}

/* ============ energía por estudiar ============ */
/* cuenta el tiempo con la pestaña Estudiar (o unos apuntes) abiertos, la app visible y actividad reciente */
const STUDY_SECS = 120;   // +1 de energía cada 2 minutos de estudio
let studyAcc = store.get("ft_studyacc", 0), lastInteract = Date.now(), infoOpen = false;
["scroll", "touchstart", "pointerdown", "keydown", "wheel"].forEach(ev => window.addEventListener(ev, () => { lastInteract = Date.now(); }, { passive: true, capture: true }));
function isStudying() {
  return document.visibilityState === "visible" && Date.now() - lastInteract < 120000 && (((view === "estudiar" || view === "apuntes") && !quiz) || infoOpen || !!viewer);
}
// con la energía llena el contador se para (no se gana nada ni salen avisos) hasta que se gaste
function energyFull() { try { return G.energy >= MAX_ENERGY; } catch (e) { return false; } }
function updateStudyChip() {
  const el = $("#studychip"); if (!el) return;
  if (energyFull()) { el.innerHTML = `${BOLT}<span>Energía al máximo</span>`; el.classList.add("paused"); return; }
  const left = Math.max(0, STUDY_SECS - studyAcc), m = Math.floor(left / 60), s = String(left % 60).padStart(2, "0");
  el.innerHTML = `${BOLT}<span>+1 en ${m}:${s}</span>`;
  el.classList.toggle("paused", !isStudying());
}
setInterval(() => {
  if (isStudying() && !energyFull()) {
    studyAcc += 5;
    if (studyAcc >= STUDY_SECS) { studyAcc -= STUDY_SECS; addEnergy(1, "por estudiar"); }
    store.set("ft_studyacc", studyAcc);
  }
  updateStudyChip();
}, 5000);

/* ============ aviso flotante ============ */
function toast(html) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
  t.innerHTML = html; t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 3000);
}

/* ============ celebraciones ============ */
const calm = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
function confetti(n = 60) {
  if (calm()) return;
  const colors = ["#ff6f4f", "#ffc23d", "#2ec4b0", "#5fb8ef", "#a98bf0", "#ff7fae"];
  for (let i = 0; i < n; i++) {
    const d = document.createElement("div");
    d.className = "confetti";
    d.style.left = Math.random() * 100 + "vw";
    d.style.background = colors[i % colors.length];
    d.style.setProperty("--dx", (Math.random() * 140 - 70) + "px");
    d.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
    d.style.setProperty("--t", (1.6 + Math.random() * 1.4) + "s");
    d.style.animationDelay = (Math.random() * .4) + "s";
    if (i % 3 === 0) { d.style.borderRadius = "50%"; d.style.width = d.style.height = "10px"; }
    document.body.appendChild(d); setTimeout(() => d.remove(), 3600);
  }
}
function coinBurst(el, n = 6) {
  if (calm() || typeof COIN === "undefined") return;
  const r = el ? el.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
  for (let i = 0; i < n; i++) {
    const d = document.createElement("div");
    d.className = "coinfx"; d.innerHTML = COIN;
    d.style.left = (r.left + r.width / 2 - 13) + "px"; d.style.top = (r.top + r.height / 2 - 13) + "px";
    d.style.setProperty("--dx", (Math.random() * 120 - 60) + "px"); d.style.animationDelay = i * 70 + "ms";
    document.body.appendChild(d); setTimeout(() => d.remove(), 1600);
  }
}
function celebrate(text) { confetti(70); if (text) toast(text); }

/* ============ modales ============ */
function closeModal() { const r = $("#modal-root"); if (r) r.innerHTML = ""; document.body.style.overflow = ""; infoOpen = false; }
function modal(html) {
  $("#modal-root").innerHTML = `<div class="backdrop" id="bd"><div class="modal" role="dialog" aria-modal="true">${html}</div></div>`;
  document.body.style.overflow = "hidden";
  $("#bd").onclick = e => { if (e.target.id === "bd") closeModal(); };
}
function openInfo(id, bank = "main") {
  const Q = bankQ(bank)[id], e = bankStats(bank).get(id);
  const doc = bank === "ap" ? APUNTES.find(d => d.id === Q.doc) : null;
  modal(`<span class="tag">${doc ? "Tus apuntes · " + apName(Q) :`${TOPICS[Q.t].name} · ${esc(TOPICS[Q.t].desc.split(" (")[0])}`}</span>
    <h3 style="margin-top:10px">${esc(Q.q)}</h3>
    <div class="callout okc"><b>Respuesta correcta:</b> ${esc(Q.o[Q.a])}</div>
    ${doc ? `<div class="cita"><div class="cita-h">${ICON.apuntes}<span>En tus apuntes · página ${Q.p}</span></div><blockquote>${esc(Q.cita)}</blockquote><button class="btn block" id="gopage">Ver la página ${Q.p} de tus apuntes</button></div>` : ""}
    ${Q.n ? `<div class="note">${Q.n}</div>` : ""}
    ${Q.m != null ? `<div class="callout warn"><b>Ojo:</b> en tus apuntes estaba marcada «${esc(Q.o[Q.m])}», que no es la correcta.</div>` : ""}
    ${Q.d ? `<div class="callout warn"><b>Pregunta dudosa:</b> el enunciado admite discusión; si tu profesor/a dio otra respuesta, prioriza la suya.</div>` : ""}
    ${e && e.w ? `<p class="muted small" style="margin-top:12px">La has fallado ${e.w} ${e.w === 1 ? "vez" : "veces"} y acertado ${e.r}.</p>` : ""}
    <button class="btn primary block" style="margin-top:16px" id="close">Cerrar</button>`);
  $("#close").onclick = closeModal;
  if ($("#gopage")) $("#gopage").onclick = () => openViewer(doc.id, Q.p);
  infoOpen = true;
}
function confirmBox(title, text, okLabel, onOk) {
  modal(`<h3>${esc(title)}</h3><p class="muted">${esc(text)}</p>
    <div class="row" style="margin-top:16px"><button class="btn" id="no" style="flex:1">Cancelar</button><button class="btn primary" id="yes" style="flex:1">${esc(okLabel)}</button></div>`);
  $("#no").onclick = closeModal; $("#yes").onclick = () => { closeModal(); onOk(); };
}

/* ============ copia de seguridad: exportar / importar partida ============ */
const SAVE_KEYS = ["ft_game", "ft_stats", "ft_cstats", "ft_cfg", "ft_studyacc", "ft_test", "ft_apstats", "ft_apcfg", "ft_apzoom"];
const toB64 = u8 => { let s = ""; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
const fromB64 = b => Uint8Array.from(atob(b), ch => ch.charCodeAt(0));
async function exportSave() {
  const data = { v: 1, t: Date.now(), d: {} };
  SAVE_KEYS.forEach(k => { try { const v = localStorage.getItem(k); if (v != null) data.d[k] = v; } catch (e) { } });
  const bytes = new TextEncoder().encode(JSON.stringify(data));
  if (window.CompressionStream) {
    const gz = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream("gzip"))).arrayBuffer());
    return "FTZ" + toB64(gz);
  }
  return "FTJ" + toB64(bytes);
}
async function readSave(code) {
  code = String(code || "").replace(/\s+/g, "");
  const kind = code.slice(0, 3), body = code.slice(3);
  if (kind !== "FTZ" && kind !== "FTJ") throw new Error("ese texto no es un código de partida.");
  let bytes, data;
  try {
    bytes = fromB64(body);
    if (kind === "FTZ") {
      if (!window.DecompressionStream) throw new Error("este navegador no puede leer el código.");
      bytes = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer());
    }
    data = JSON.parse(new TextDecoder().decode(bytes));
  } catch (e) { throw new Error("el código está cortado o tiene algún carácter de más."); }
  if (!data || data.v !== 1 || typeof data.d !== "object") throw new Error("El código está incompleto o es de otra versión.");
  return data;
}
function saveSummary(d) {
  const g = (() => { try { return JSON.parse(d.ft_game || "{}"); } catch (e) { return {}; } })();
  const st = (() => { try { return JSON.parse(d.ft_stats || "{}"); } catch (e) { return {}; } })();
  const fails = Object.values(st).filter(e => e && e.w > 0).length;
  return `${COIN}<b>${fmt(g.money || 0)}</b> monedas · día <b>${g.day || 1}</b> · <b>${(g.owned || []).length}</b> objetos · <b>${fails}</b> preguntas falladas`;
}
function applySave(data) {
  SAVE_KEYS.forEach(k => { try { localStorage.removeItem(k); } catch (e) { } });
  Object.entries(data.d).forEach(([k, v]) => { if (SAVE_KEYS.includes(k)) try { localStorage.setItem(k, v); } catch (e) { } });
  try { localStorage.setItem("ft_imported", "1"); } catch (e) { }
  location.reload();
}
function openTransfer() {
  const cur = {}; SAVE_KEYS.forEach(k => { try { const v = localStorage.getItem(k); if (v != null) cur[k] = v; } catch (e) { } });
  modal(`<h3>Tu partida</h3>
    <p class="muted small" style="margin-top:0">Tu progreso solo se guarda en este dispositivo. Para llevarlo a otro, exporta aquí y luego importa allí.</p>
    <div class="xfer">
      <p class="label">En este dispositivo</p>
      <p class="xfer-sum">${saveSummary(cur)}</p>
      <div class="row"><button class="btn primary" id="exCopy" style="flex:1">Copiar código</button><button class="btn" id="exFile" style="flex:1">Descargar archivo</button></div>
      <textarea id="exOut" class="field code hidden" readonly aria-label="Código de tu partida"></textarea>
    </div>
    <div class="xfer">
      <p class="label">Traer una partida de otro dispositivo</p>
      <textarea id="imIn" class="field code" placeholder="Pega aquí el código de tu partida" aria-label="Código para importar"></textarea>
      <div class="row" style="margin-top:10px"><button class="btn" id="imFileBtn" style="flex:1">Cargar archivo</button><button class="btn primary" id="imGo" style="flex:1">Importar</button></div>
      <input type="file" id="imFile" accept=".txt,text/plain" hidden>
      <p class="muted small" id="imMsg" style="margin:8px 0 0">Importar sustituye la partida que hay ahora en este dispositivo.</p>
    </div>
    <button class="btn block" style="margin-top:14px" id="close">Cerrar</button>`);
  $("#close").onclick = closeModal;
  const showCode = c => { const o = $("#exOut"); o.value = c; o.classList.remove("hidden"); o.focus(); o.select(); };
  $("#exCopy").onclick = async () => {
    const c = await exportSave();
    try { await navigator.clipboard.writeText(c); toast("Código copiado: pégalo en el otro dispositivo"); showCode(c); }
    catch (e) { showCode(c); toast("Copia el código del recuadro"); }
  };
  $("#exFile").onclick = async () => {
    const c = await exportSave(), a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([c], { type: "text/plain" }));
    a.download = `partida-farmacotest-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    toast("Archivo de partida descargado");
  };
  $("#imFileBtn").onclick = () => $("#imFile").click();
  $("#imFile").onchange = async e => { const f = e.target.files[0]; if (f) { $("#imIn").value = (await f.text()).trim(); $("#imGo").click(); } };
  $("#imGo").onclick = async () => {
    const msg = $("#imMsg");
    try {
      const data = await readSave($("#imIn").value);
      const sum = saveSummary(data.d);
      modal(`<h3>¿Importar esta partida?</h3><p class="xfer-sum">${sum}</p>
        <p class="muted small">Guardada el ${new Date(data.t).toLocaleString("es-ES")}. Sustituirá la partida de este dispositivo.</p>
        <div class="row" style="margin-top:16px"><button class="btn" id="no" style="flex:1">Cancelar</button><button class="btn primary" id="yes" style="flex:1">Importar</button></div>`);
      $("#no").onclick = closeModal; $("#yes").onclick = () => applySave(data);
    } catch (e) {
      msg.textContent = "No se ha podido leer: " + (e.message || "código no válido") + " Comprueba que lo has copiado entero.";
      msg.style.color = "var(--bad)";
    }
  };
}
try { if (localStorage.getItem("ft_imported")) { localStorage.removeItem("ft_imported"); setTimeout(() => celebrate("¡Partida importada!"), 500); } } catch (e) { }

/* ============ teclado ============ */
document.addEventListener("keydown", e => {
  if (viewer) { if (e.key === "Escape") closeViewer(); else if (e.key === "+" || e.key === "=") vZoom(vStep(1)); else if (e.key === "-") vZoom(vStep(-1)); return; }
  if ($("#modal-root").innerHTML) { if (e.key === "Escape") closeModal(); return; }
  if (!quiz || quiz.done) return;
  const k = e.key.toUpperCase(), it = quiz.items[quiz.idx];
  const pos = "12345".indexOf(k) >= 0 ? "12345".indexOf(k) : "ABCDE".indexOf(k);
  if (k.length === 1 && pos >= 0 && pos < it.order.length) { quiz.answers[quiz.idx] = it.order[pos]; saveQuiz(); renderQuiz(); }
  else if (e.key === "ArrowRight") go(1);
  else if (e.key === "ArrowLeft") go(-1);
});

/* ============ arranque ============ */
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost") && window.self === window.top) {
  try { navigator.serviceWorker.register("sw.js").catch(() => { }); } catch (e) { }
}
window.addEventListener("DOMContentLoaded", render);
