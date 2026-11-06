"use strict";
/* ================= MODO CONSULTA ================= */
const INK = "#4a3426";
const S = `stroke="${INK}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
const S1 = `stroke="${INK}" stroke-width="1.4" stroke-linecap="round" fill="none"`;
const PATIENTS_PER_DAY = 6;

/* ---------- catálogo de la tienda ---------- */
const SHOP = {
  hair: { label: "Peinado", items: [
    { id: "corto", name: "Corto", price: 0 }, { id: "rapado", name: "Rapado", price: 0 }, { id: "calvo", name: "Sin pelo", price: 0 },
    { id: "melena", name: "Melena", price: 60 }, { id: "coleta", name: "Coleta", price: 60 }, { id: "mono", name: "Moño", price: 90 },
    { id: "tupe", name: "Tupé", price: 120 }, { id: "rizos", name: "Rizos", price: 140 }, { id: "cresta", name: "Cresta", price: 260 }] },
  hairColor: { label: "Color de pelo", items: [
    { id: "castano", name: "Castaño", c: "#6b4430", price: 0 }, { id: "negro", name: "Negro", c: "#2c2524", price: 0 },
    { id: "rubio", name: "Rubio", c: "#e2b65e", price: 50 }, { id: "pelirrojo", name: "Pelirrojo", c: "#c0602f", price: 50 },
    { id: "canoso", name: "Canoso", c: "#cfc8c0", price: 70 }, { id: "lavanda", name: "Lavanda", c: "#a58bc9", price: 130 },
    { id: "menta", name: "Menta", c: "#7fbfa4", price: 130 }, { id: "chicle", name: "Chicle", c: "#e58aa6", price: 130 }, { id: "azul", name: "Azul tinta", c: "#4f6fae", price: 130 }] },
  skin: { label: "Piel", items: [
    { id: "s1", name: "Clara", c: "#f6d9c4", price: 0 }, { id: "s2", name: "Media", c: "#e8bd9a", price: 0 },
    { id: "s3", name: "Tostada", c: "#c48b65", price: 0 }, { id: "s4", name: "Oscura", c: "#8a5a40", price: 0 }] },
  outfit: { label: "Ropa", items: [
    { id: "bata", name: "Bata blanca", price: 0 }, { id: "pijama_salvia", name: "Pijama salvia", c: "#8fae8b", price: 70 },
    { id: "pijama_cielo", name: "Pijama cielo", c: "#86afc9", price: 70 }, { id: "pijama_rosa", name: "Pijama rosa", c: "#e3a4a8", price: 90 },
    { id: "jersey", name: "Jersey de punto", price: 160 }, { id: "peto", name: "Peto de granja", price: 180 },
    { id: "sudadera", name: "Sudadera de huellas", price: 200 }, { id: "hawaiana", name: "Camisa de flores", price: 220 },
    { id: "traje", name: "Traje de domingo", price: 300 }, { id: "capa", name: "Capa de superveterinario", price: 650 }] },
  neck: { label: "Cuello", items: [
    { id: "esteto", name: "Fonendo", price: 0 }, { id: "panuelo", name: "Pañuelo", price: 60 }, { id: "pajarita", name: "Pajarita", price: 90 }] },
  eyes: { label: "Gafas", items: [
    { id: "gafas", name: "Gafas redondas", price: 70 }, { id: "gafas_sol", name: "Gafas de sol", price: 120 }, { id: "gafas_corazon", name: "Gafas corazón", price: 180 }] },
  head: { label: "Cabeza", items: [
    { id: "gorro", name: "Gorro de quirófano", price: 80 }, { id: "flor", name: "Flor en el pelo", price: 70 }, { id: "lana", name: "Gorro de lana", price: 110 },
    { id: "paja", name: "Sombrero de paja", price: 150 }, { id: "corona", name: "Corona", price: 900 }] },
  wall: { label: "Pared", items: [
    { id: "crema", name: "Crema", c: "#f3e6cf", d: "#e2cfae", price: 0 }, { id: "salvia", name: "Salvia", c: "#d3dcc2", d: "#a9b893", price: 90 },
    { id: "cielo", name: "Cielo", c: "#d3e3e6", d: "#9fbcc2", price: 90 }, { id: "rosa", name: "Rosa empolvado", c: "#f1d6cd", d: "#d9ab9c", price: 90 },
    { id: "huellas", name: "Papel de huellas", c: "#f5ead6", d: "#d9c09a", price: 220 }, { id: "rayas", name: "Rayas", c: "#f2e3cb", d: "#c9a77d", price: 200 },
    { id: "madera", name: "Madera", c: "#c99a6b", d: "#9c7048", price: 260 }, { id: "noche", name: "Noche estrellada", c: "#3d4766", d: "#2c344d", price: 320 }] },
  floor: { label: "Suelo", items: [
    { id: "tarima", name: "Tarima", c: "#c28f5f", price: 0 }, { id: "baldosa", name: "Baldosa de barro", c: "#d8896b", price: 140 },
    { id: "damero", name: "Damero", c: "#efe6d6", price: 180 }, { id: "verde", name: "Moqueta verde", c: "#8fa876", price: 160 }] },
  decor: { label: "Decoración", multi: true, items: [
    { id: "planta", name: "Monstera", price: 90 }, { id: "diploma", name: "Título enmarcado", price: 70 }, { id: "reloj", name: "Reloj de pared", price: 80 },
    { id: "cuadro", name: "Cuadro de montañas", price: 110 }, { id: "poster", name: "Lámina de anatomía", price: 130 }, { id: "lampara", name: "Lámpara colgante", price: 150 },
    { id: "alfombra", name: "Alfombra redonda", price: 140 }, { id: "estanteria", name: "Estantería con botes", price: 200 }, { id: "guirnalda", name: "Guirnalda de luces", price: 240 },
    { id: "gato", name: "Gato de la clínica", price: 380 }, { id: "acuario", name: "Acuario", price: 420 }, { id: "trofeo", name: "Trofeo al mejor veterinario", price: 800 }] }
};
const SHOP_ORDER = ["hair", "hairColor", "skin", "outfit", "neck", "eyes", "head", "wall", "floor", "decor"];
const findItem = (cat, id) => SHOP[cat].items.find(i => i.id === id);

const DEFAULT_GAME = {
  money: 40, rep: 50, clinic: "Clínica Veterinaria",
  owned: SHOP_ORDER.flatMap(c => SHOP[c].items.filter(i => i.price === 0).map(i => c + ":" + i.id)),
  eq: { hair: "corto", hairColor: "castano", skin: "s2", outfit: "bata", neck: "esteto", eyes: null, head: null, wall: "crema", floor: "tarima", decor: [] },
  day: 1, served: 0, okTotal: 0, streak: 0, best: 0, recent: [], cur: null
};
let G = Object.assign({}, DEFAULT_GAME, store.get("ft_game", {}));
G.eq = Object.assign({}, DEFAULT_GAME.eq, G.eq);
function saveGame() { store.set("ft_game", G); }
let gview = "hub";      // hub | patient | shop | summary
let shopCat = "hair";
let lastSummary = null;

/* ---------- reputación y pagos ---------- */
const REP_TIERS = [[0, "Clínica en apuros"], [20, "Recién titulado"], [40, "Veterinario de barrio"], [60, "Clínica de confianza"], [80, "Eminencia local"], [95, "Leyenda del pueblo"]];
const repTier = r => REP_TIERS.filter(([m]) => r >= m).pop()[1];
const payFor = (rep, streak) => Math.round(30 * (0.4 + 1.2 * rep / 100)) + (streak >= 2 ? Math.min(streak - 1, 5) * 3 : 0);
const fmt = n => n.toLocaleString("es-ES");

/* ---------- utilidades de dibujo ---------- */
function hash(s) { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; }
let uid = 0;
const COIN = `<svg class="ico-coin" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#f0c25e" ${S}/><path d="M10 6v8M7.5 8.2c.6-1 4.4-1.2 4.4.6 0 1.8-4.4.9-4.4 2.7 0 1.6 3.9 1.6 4.6.5" ${S1}/></svg>`;
const STAR = `<svg class="ico-star" viewBox="0 0 20 20"><path d="M10 2.5l2.3 4.8 5.2.7-3.8 3.6.9 5.2L10 14.3l-4.6 2.5.9-5.2L2.5 8l5.2-.7Z" fill="#e8a65a" ${S}/></svg>`;

/* ---------- animales (100x100) ---------- */
const PAL = {
  dog: [{ f: "#d4a373", e: "#8c5a3c", m: "#f3e3cc" }, { f: "#f3e3cc", e: "#c99566", m: "#fff8ee" }, { f: "#4a3b36", e: "#2e2522", m: "#c9a88a" },
    { f: "#e9b872", e: "#b5793f", m: "#fbe9cf" }, { f: "#f7f2ea", e: "#3d3433", m: "#ffffff", patch: 1 }, { f: "#b07a52", e: "#6b4430", m: "#e8c9a6", patch: 1 }],
  cat: [{ f: "#e3a15c", e: "#b8733a", tabby: 1 }, { f: "#a3a3a8", e: "#6e6e75", tabby: 1 }, { f: "#3e3a3b", e: "#2a2627" }, { f: "#f2e6d2", e: "#c9b79a" }, { f: "#f7f3ec", e: "#e3a15c", patch: 1 }],
  horse: [{ f: "#9a5f3d", e: "#3a2a22", m: "#c08a68", blaze: 1 }, { f: "#5a4034", e: "#2b211c", m: "#7d6050" }, { f: "#d8cfc2", e: "#8d8478", m: "#ebe4d8" }, { f: "#c4783f", e: "#efe0c0", m: "#e2a97a", blaze: 1 }],
  cow: [{ e: "#3b3433" }, { e: "#8a5636" }],
  pig: [{}]
};
const SPECIES = { dog: "Perro", cat: "Gato", horse: "Caballo", cow: "Vaca", pig: "Cerda" };

function eyes(mood, lx, rx, y, big) {
  const ry = big ? 3.8 : 3.2, rx_ = big ? 3 : 2.6;
  if (mood === "happy") return `<path d="M${lx - 3.5} ${y + 1} Q${lx} ${y - 3.5} ${lx + 3.5} ${y + 1}M${rx - 3.5} ${y + 1} Q${rx} ${y - 3.5} ${rx + 3.5} ${y + 1}" ${S} fill="none"/>`;
  let s = `<ellipse cx="${lx}" cy="${y}" rx="${rx_}" ry="${ry}" fill="${INK}"/><ellipse cx="${rx}" cy="${y}" rx="${rx_}" ry="${ry}" fill="${INK}"/>
    <circle cx="${lx + 1}" cy="${y - 1.3}" r="1" fill="#fff"/><circle cx="${rx + 1}" cy="${y - 1.3}" r="1" fill="#fff"/>`;
  if (mood === "sad") s += `<path d="M${lx - 4.5} ${y - 5} L${lx + 3} ${y - 8}M${rx - 3} ${y - 8} L${rx + 4.5} ${y - 5}" ${S} fill="none"/>
    <path d="M${rx + 3.5} ${y + 3} q1.6 3 0 4.4 q-1.6 -1.4 0 -4.4Z" fill="#8cc4e0" stroke="${INK}" stroke-width="1"/>`;
  return s;
}
const cheeks = (lx, rx, y) => `<ellipse cx="${lx}" cy="${y}" rx="4" ry="2.6" fill="#f09a86" opacity=".45"/><ellipse cx="${rx}" cy="${y}" rx="4" ry="2.6" fill="#f09a86" opacity=".45"/>`;
function mouth(mood, x, y) {
  if (mood === "happy") return `<path d="M${x - 5} ${y} Q${x} ${y + 7} ${x + 5} ${y}" ${S} fill="#e8857c"/>`;
  if (mood === "sad") return `<path d="M${x - 4} ${y + 3} Q${x} ${y - 1} ${x + 4} ${y + 3}" ${S} fill="none"/>`;
  return `<path d="M${x - 4} ${y} Q${x - 2} ${y + 2.6} ${x} ${y} Q${x + 2} ${y + 2.6} ${x + 4} ${y}" ${S} fill="none"/>`;
}

function animalSVG(species, name, mood) {
  const pals = PAL[species] || PAL.dog, c = pals[hash(name) % pals.length];
  let g = "";
  if (species === "dog") {
    g = `<ellipse cx="50" cy="84" rx="27" ry="17" fill="${c.f}" ${S}/>
      <ellipse cx="40" cy="97" rx="7" ry="4.5" fill="${c.f}" ${S}/><ellipse cx="60" cy="97" rx="7" ry="4.5" fill="${c.f}" ${S}/>
      <ellipse cx="50" cy="46" rx="23" ry="21" fill="${c.f}" ${S}/>
      ${c.patch ? `<path d="M56 33 C64 30 70 36 68 44 C62 47 56 43 56 33Z" fill="${c.e}"/>` : ""}
      <ellipse cx="50" cy="57" rx="11.5" ry="8.5" fill="${c.m}" ${S}/>
      <path d="M29 32 C17 34 16 55 23 63 C31 61 33 48 34 38 Z" fill="${c.e}" ${S}/>
      <path d="M71 32 C83 34 84 55 77 63 C69 61 67 48 66 38 Z" fill="${c.e}" ${S}/>
      ${eyes(mood, 41, 59, 44)}${cheeks(36, 64, 52)}
      <ellipse cx="50" cy="52.5" rx="4.6" ry="3.3" fill="${INK}"/>
      ${mouth(mood, 50, 59)}
      <path d="M50 70 q-6 4 -12 2" ${S1}/>`;
  } else if (species === "cat") {
    g = `<path d="M72 92 C92 90 94 70 85 63" stroke="${INK}" stroke-width="9.5" fill="none" stroke-linecap="round"/>
      <path d="M72 92 C92 90 94 70 85 63" stroke="${c.f}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="50" cy="84" rx="24" ry="17" fill="${c.f}" ${S}/>
      <ellipse cx="41" cy="97" rx="6" ry="4" fill="${c.f}" ${S}/><ellipse cx="59" cy="97" rx="6" ry="4" fill="${c.f}" ${S}/>
      <path d="M30 40 L32 15 L48 29 Z" fill="${c.f}" ${S}/><path d="M34 33 L35 21 L43 29Z" fill="#f1a7a0"/>
      <path d="M70 40 L68 15 L52 29 Z" fill="${c.f}" ${S}/><path d="M66 33 L65 21 L57 29Z" fill="#f1a7a0"/>
      <ellipse cx="50" cy="47" rx="23.5" ry="20" fill="${c.f}" ${S}/>
      ${c.tabby ? `<path d="M46 30 L47 36M50 29 L50 36M54 30 L53 36" stroke="${c.e}" stroke-width="2.4" stroke-linecap="round"/>` : ""}
      ${c.patch ? `<path d="M30 42 C32 32 42 30 46 34 C42 40 36 44 30 42Z" fill="${c.e}"/>` : ""}
      ${eyes(mood, 41, 59, 46, true)}${cheeks(35, 65, 54)}
      <path d="M47.6 52.5 L52.4 52.5 L50 55.3Z" fill="#e58b8b" stroke="${INK}" stroke-width="1"/>
      ${mood === "happy" ? `<path d="M45 57 Q50 63 55 57" ${S} fill="#e8857c"/>` : mood === "sad" ? `<path d="M46.5 59.5 Q50 56.5 53.5 59.5" ${S} fill="none"/>` : `<path d="M50 55.3 Q48 58.4 45.8 57M50 55.3 Q52 58.4 54.2 57" ${S1}/>`}
      <path d="M37 53 L25 51M37 56 L25 57.5M63 53 L75 51M63 56 L75 57.5" stroke="${INK}" stroke-width="1" stroke-linecap="round"/>`;
  } else if (species === "horse") {
    g = `<path d="M30 100 C30 80 36 66 42 58 L62 58 C68 70 72 84 72 100 Z" fill="${c.f}" ${S}/>
      <path d="M38 20 C30 34 28 54 32 76 C38 64 40 48 46 34 Z" fill="${c.e}" ${S}/>
      <path d="M40 22 L41 6 L49 18Z" fill="${c.f}" ${S}/><path d="M60 18 L63 6 L66 22Z" fill="${c.f}" ${S}/>
      <ellipse cx="52" cy="40" rx="16.5" ry="24" fill="${c.f}" ${S}/>
      ${c.blaze ? `<path d="M50 24 C48 36 49 47 50 54 C52 47 54 36 54 24Z" fill="#f7f2e8"/>` : ""}
      <path d="M43 18 C47 27 57 27 61 18 C56 22 49 23 43 18Z" fill="${c.e}" ${S}/>
      <ellipse cx="52" cy="59" rx="14" ry="10" fill="${c.m}" ${S}/>
      <ellipse cx="46.5" cy="60" rx="1.7" ry="2.5" fill="${INK}"/><ellipse cx="57.5" cy="60" rx="1.7" ry="2.5" fill="${INK}"/>
      ${eyes(mood, 43, 61, 38)}${cheeks(41, 63, 47)}
      ${mood === "happy" ? `<path d="M46 65 Q52 70 58 65" ${S} fill="none"/>` : mood === "sad" ? `<path d="M47 67 Q52 64 57 67" ${S} fill="none"/>` : `<path d="M47.5 65.5 Q52 67 56.5 65.5" ${S1}/>`}`;
  } else if (species === "cow") {
    g = `<ellipse cx="50" cy="87" rx="30" ry="15" fill="#f8f4ec" ${S}/>
      <path d="M30 80 C36 76 42 80 40 88 C34 90 30 86 30 80Z" fill="${c.e}"/><path d="M62 84 C68 80 76 84 72 92 C66 94 62 90 62 84Z" fill="${c.e}"/>
      <path d="M33 26 C26 22 26 13 30 11 C31 17 34 21 39 23Z" fill="#efe3c4" ${S}/><path d="M67 26 C74 22 74 13 70 11 C69 17 66 21 61 23Z" fill="#efe3c4" ${S}/>
      <path d="M31 36 C20 33 13 38 15 43 C21 46 28 43 32 41Z" fill="#f8f4ec" ${S}/><path d="M69 36 C80 33 87 38 85 43 C79 46 72 43 68 41Z" fill="#f8f4ec" ${S}/>
      <ellipse cx="50" cy="43" rx="21" ry="20" fill="#f8f4ec" ${S}/>
      <path d="M53 25 C62 22 69 29 67 38 C60 41 55 35 53 25Z" fill="${c.e}"/>
      <path d="M44 22 C47 27 53 27 56 22" ${S} fill="${c.e}"/>
      <ellipse cx="50" cy="59" rx="17" ry="10" fill="#f2b8b0" ${S}/>
      <ellipse cx="44" cy="58" rx="2" ry="2.7" fill="#8a4b45"/><ellipse cx="56" cy="58" rx="2" ry="2.7" fill="#8a4b45"/>
      ${eyes(mood, 41, 59, 42)}
      ${mood === "happy" ? `<path d="M45 64 Q50 68 55 64" ${S} fill="none"/>` : mood === "sad" ? `<path d="M46 66 Q50 63 54 66" ${S} fill="none"/>` : `<path d="M46.5 64.5 Q50 66 53.5 64.5" ${S1}/>`}`;
  } else {
    g = `<path d="M76 84 c7 -3 9 4 5 6 c-4 2 -6 -4 -1 -6" ${S} fill="none"/>
      <ellipse cx="50" cy="85" rx="28" ry="17" fill="#f4b9b2" ${S}/>
      <ellipse cx="40" cy="98" rx="6" ry="4" fill="#f4b9b2" ${S}/><ellipse cx="60" cy="98" rx="6" ry="4" fill="#f4b9b2" ${S}/>
      <ellipse cx="50" cy="46" rx="23" ry="21" fill="#f6c3bc" ${S}/>
      <path d="M30 33 L27 15 L44 25 Z" fill="#f4b9b2" ${S}/><path d="M70 33 L73 15 L56 25 Z" fill="#f4b9b2" ${S}/>
      <ellipse cx="50" cy="55" rx="10.5" ry="7.5" fill="#ee9e98" ${S}/>
      <ellipse cx="46.5" cy="55" rx="1.7" ry="2.6" fill="#9b5450"/><ellipse cx="53.5" cy="55" rx="1.7" ry="2.6" fill="#9b5450"/>
      ${eyes(mood, 40, 60, 42)}${cheeks(34, 66, 52)}
      ${mood === "happy" ? `<path d="M45 64 Q50 69 55 64" ${S} fill="none"/>` : mood === "sad" ? `<path d="M46 66 Q50 63 54 66" ${S} fill="none"/>` : `<path d="M47 64.5 Q50 66 53 64.5" ${S1}/>`}`;
  }
  return g;
}

/* ---------- tu personaje (120x140) ---------- */
function avatarParts(eq) {
  const hc = findItem("hairColor", eq.hairColor).c, sk = findItem("skin", eq.skin).c;
  const H = `fill="${hc}" ${S}`;
  const hairBack = {
    melena: `<path d="M34 52 C30 30 44 24 60 24 C78 24 90 32 86 54 L90 102 C80 106 74 100 76 86 L44 86 C46 100 40 106 30 102 Z" ${H}/>`,
    coleta: `<path d="M80 40 C100 44 102 72 90 90 C88 74 84 62 78 54 Z" ${H}/>`,
    mono: `<circle cx="60" cy="24" r="10" ${H}/>`
  }[eq.hair] || "";
  const hairFront = {
    corto: `<path d="M36 52 C34 32 46 26 60 26 C76 26 86 34 84 52 C80 42 72 38 62 38 C52 38 42 42 36 52 Z" ${H}/>`,
    rapado: `<path d="M37 50 C36 34 46 29 60 29 C74 29 84 34 83 50 C76 42 68 40 60 40 C52 40 44 42 37 50 Z" ${H} opacity=".92"/>`,
    melena: `<path d="M36 56 C34 32 48 26 62 26 C78 26 86 36 84 56 C78 44 70 36 56 38 C48 40 40 46 36 56Z" ${H}/>`,
    coleta: `<path d="M36 52 C34 32 46 26 60 26 C76 26 86 34 84 52 C78 40 68 37 58 38 C50 39 42 43 36 52 Z" ${H}/>`,
    mono: `<path d="M36 52 C34 33 46 28 60 28 C76 28 86 35 84 52 C78 42 70 39 60 39 C50 39 42 43 36 52 Z" ${H}/>`,
    tupe: `<path d="M36 52 C33 30 46 22 62 20 C74 18 89 24 86 36 C88 44 85 50 84 52 C80 40 70 36 58 37 C48 38 41 44 36 52Z" ${H}/><path d="M64 24 c6 -2 10 2 8 6" ${S1}/>`,
    rizos: [[40, 42, 9], [47, 32, 10], [60, 27, 10.5], [73, 32, 10], [80, 42, 9], [85, 52, 7], [35, 52, 7]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" ${H}/>`).join(""),
    cresta: `<path d="M54 36 L50 14 L58 22 L61 6 L65 22 L73 13 L68 36 Z" ${H}/>`,
    calvo: `<path d="M44 34 q4 -3 9 -3" stroke="#fff" stroke-width="2" opacity=".5" fill="none" stroke-linecap="round"/>`
  }[eq.hair] || "";

  const body = `M18 140 C18 108 34 91 60 89 C86 91 102 108 102 140 Z`;
  const o = eq.outfit, oc = (findItem("outfit", o) || {}).c;
  let back = "", torso = "";
  if (o === "bata") torso = `<path d="M49 90 L60 108 L71 90 Z" fill="#9cc0cf" ${S}/><path d="${body}" fill="#fbf7ef" ${S}/><path d="M49 90 L60 108 L71 90" fill="#9cc0cf" ${S}/>
      <path d="M49 90 L45 140M71 90 L75 140" ${S1}/><rect x="77" y="116" width="13" height="10" rx="2" fill="#fbf7ef" ${S}/><path d="M81 112 v6" stroke="#4f6fae" stroke-width="2" stroke-linecap="round"/>`;
  else if (o && o.startsWith("pijama")) torso = `<path d="${body}" fill="${oc}" ${S}/><path d="M50 90 L60 104 L70 90 Z" fill="${sk}" ${S}/><rect x="70" y="110" width="12" height="9" rx="2" fill="${oc}" ${S}/>`;
  else if (o === "jersey") torso = `<path d="${body}" fill="#b8604a" ${S}/>${[104, 114, 124, 134].map(y => `<path d="M${y > 120 ? 20 : 26} ${y} Q60 ${y + 4} ${y > 120 ? 100 : 94} ${y}" stroke="#d98b72" stroke-width="2" stroke-dasharray="2 3" fill="none"/>`).join("")}<path d="M48 91 Q60 99 72 91" ${S} fill="#a14f3b"/>`;
  else if (o === "peto") torso = `<path d="${body}" fill="#c95b4a" ${S}/><path d="M30 104 L90 104M26 118 L94 118M42 92 L36 140M60 90 L60 140M78 92 L84 140" stroke="#e48d7b" stroke-width="1.5"/><path d="M43 140 L45 108 L75 108 L77 140Z" fill="#5f84a8" ${S}/><path d="M45 110 L40 92M75 110 L80 92" stroke="#5f84a8" stroke-width="4" stroke-linecap="round"/><circle cx="47" cy="112" r="1.8" fill="#f0c25e"/><circle cx="73" cy="112" r="1.8" fill="#f0c25e"/><rect x="53" y="116" width="14" height="10" rx="2" fill="#6f93b6" ${S}/>`;
  else if (o === "sudadera") torso = `<path d="M40 94 Q60 108 80 94 L78 90 Q60 100 42 90Z" fill="#c99847" ${S}/><path d="${body}" fill="#e2b45a" ${S}/><path d="M42 93 Q60 104 78 93" ${S} fill="none"/><path d="M40 140 L43 126 Q60 120 77 126 L80 140Z" fill="#d6a74e" ${S}/>
      <g fill="${INK}" opacity=".75"><ellipse cx="60" cy="113" rx="4" ry="3.2"/><circle cx="54.5" cy="107.5" r="1.6"/><circle cx="58.5" cy="105.5" r="1.6"/><circle cx="62.5" cy="105.5" r="1.6"/><circle cx="66" cy="108" r="1.6"/></g>`;
  else if (o === "hawaiana") torso = `<path d="${body}" fill="#4f9e94" ${S}/><path d="M50 90 L60 100 L70 90" fill="${sk}" ${S}/>
      ${[[34, 112], [80, 108], [50, 128], [72, 130], [90, 128], [28, 132]].map(([x, y], i) => `<g transform="translate(${x} ${y})"><circle r="4.5" fill="${i % 2 ? "#f3d36b" : "#f29b8a"}"/><circle r="1.5" fill="#fff6d8"/></g>`).join("")}
      <path d="M60 100 L60 140" ${S1}/>`;
  else if (o === "traje") torso = `<path d="${body}" fill="#3f4a5c" ${S}/><path d="M50 90 L60 114 L70 90Z" fill="#fbf7ef" ${S}/><path d="M57.5 95 L62.5 95 L63.5 111 L60 116 L56.5 111Z" fill="#b8473a" ${S}/><path d="M50 90 L54 120M70 90 L66 120" ${S1}/>`;
  else if (o === "capa") { back = `<path d="M8 140 C12 104 30 86 60 84 C90 86 108 104 112 140Z" fill="#c0453a" ${S}/>`; torso = `<path d="${body}" fill="#4a64a3" ${S}/><circle cx="60" cy="114" r="9" fill="#f0c25e" ${S}/><g fill="${INK}"><ellipse cx="60" cy="116.5" rx="3" ry="2.4"/><circle cx="56.2" cy="112.4" r="1.2"/><circle cx="59" cy="110.8" r="1.2"/><circle cx="61.9" cy="110.8" r="1.2"/><circle cx="64.4" cy="112.6" r="1.2"/></g><path d="M44 92 L52 89M76 92 L68 89" stroke="#c0453a" stroke-width="4" stroke-linecap="round"/>`; }

  const neckAcc = {
    esteto: `<path d="M48 90 C46 106 52 116 60 116 C68 116 74 106 72 90" stroke="#55626b" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="60" cy="118" r="4.5" fill="#c9d3d9" ${S}/>`,
    panuelo: `<path d="M47 89 L73 89 L60 103 Z" fill="#c0453a" ${S}/><circle cx="56" cy="93" r="1" fill="#fff"/><circle cx="63" cy="95" r="1" fill="#fff"/>`,
    pajarita: `<path d="M60 94 L50 88 L50 100 Z M60 94 L70 88 L70 100Z" fill="#b8473a" ${S}/><circle cx="60" cy="94" r="2.6" fill="#a03c31" ${S}/>`
  }[eq.neck] || "";
  const eyeAcc = {
    gafas: `<circle cx="51" cy="57" r="6.5" fill="#fff" fill-opacity=".25" ${S}/><circle cx="69" cy="57" r="6.5" fill="#fff" fill-opacity=".25" ${S}/><path d="M57.5 56.5 L62.5 56.5" ${S}/>`,
    gafas_sol: `<rect x="43.5" y="51.5" width="15" height="10" rx="4" fill="#2b2a2e" ${S}/><rect x="61.5" y="51.5" width="15" height="10" rx="4" fill="#2b2a2e" ${S}/><path d="M58.5 55 L61.5 55" ${S}/><path d="M46 54 l4 -1" stroke="#fff" stroke-width="1.2" opacity=".6"/>`,
    gafas_corazon: [51, 69].map(x => `<path d="M${x} 62 C${x - 9} 56 ${x - 6} 49 ${x} 53 C${x + 6} 49 ${x + 9} 56 ${x} 62Z" fill="#e8708f" fill-opacity=".85" ${S}/>`).join("") + `<path d="M57 55 L63 55" ${S}/>`
  }[eq.eyes] || "";
  const headAcc = {
    gorro: `<path d="M35 50 C34 30 46 23 60 23 C76 23 86 30 85 50 C76 45 44 45 35 50Z" fill="#7fb2cf" ${S}/>${[[46, 34], [56, 30], [66, 31], [75, 37], [52, 40], [68, 41]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff"/>`).join("")}`,
    flor: `<g transform="translate(79 35)">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="3.6" ry="5.5" transform="rotate(${a}) translate(0 -5)" fill="#f29b8a" ${S1}/>`).join("")}<circle r="3" fill="#f3d36b" ${S}/></g>`,
    lana: `<path d="M34 50 C34 26 86 26 86 50 Z" fill="#c95b4a" ${S}/><rect x="32" y="44" width="56" height="9" rx="4" fill="#a8483a" ${S}/><circle cx="60" cy="24" r="6.5" fill="#f3e6cf" ${S}/>`,
    paja: `<ellipse cx="60" cy="40" rx="37" ry="8" fill="#e2c27a" ${S}/><path d="M42 40 C42 22 78 22 78 40 Z" fill="#e8cc89" ${S}/><path d="M42 36 C52 39 68 39 78 36" stroke="#c0453a" stroke-width="3.5" fill="none"/>`,
    corona: `<path d="M42 36 L43 18 L51 28 L60 13 L69 28 L77 18 L78 36Z" fill="#f1c75b" ${S}/><circle cx="60" cy="29" r="2.6" fill="#c0453a"/>`
  }[eq.head] || "";
  return { back, hairBack, torso, sk, hc, hairFront, neckAcc, eyeAcc, headAcc };
}
function avatarG(eq, mood) {
  const p = avatarParts(eq);
  const eyesNow = mood === "happy"
    ? `<path d="M47.5 57 Q51 53.5 54.5 57M65.5 57 Q69 53.5 72.5 57" ${S} fill="none"/>`
    : `<ellipse cx="51" cy="57" rx="2.4" ry="3" fill="${INK}"/><ellipse cx="69" cy="57" rx="2.4" ry="3" fill="${INK}"/>`;
  const m = mood === "sad" ? `<path d="M55 67 Q60 63.5 65 67" ${S} fill="none"/>` : `<path d="M54 64.5 Q60 70 66 64.5" ${S} fill="${mood === "happy" ? "#e8857c" : "none"}"/>`;
  const brows = mood === "sad" ? `<path d="M46.5 50 L54 48M66 48 L73.5 50" stroke="${p.hc}" stroke-width="2.4" stroke-linecap="round"/>` : `<path d="M47 49 L54 48M66 48 L73 49" stroke="${p.hc}" stroke-width="2.4" stroke-linecap="round"/>`;
  return `${p.back}${p.hairBack}${p.torso}
    <path d="M53 76 L53 90 L67 90 L67 76Z" fill="${p.sk}" ${S}/>
    ${p.neckAcc}
    <circle cx="36" cy="58" r="5" fill="${p.sk}" ${S}/><circle cx="84" cy="58" r="5" fill="${p.sk}" ${S}/>
    <circle cx="60" cy="55" r="24" fill="${p.sk}" ${S}/>
    ${eyesNow}${brows}${cheeks(45, 75, 64)}${m}
    ${p.hairFront}${p.eyeAcc}${p.headAcc}`;
}
function avatarSVG(eq, mood, cls) { return `<svg class="${cls || ""}" viewBox="0 0 120 140" aria-hidden="true">${avatarG(eq, mood || "neutral")}</svg>`; }

/* ---------- la clínica (360x240) ---------- */
function decorSVG(id, k) {
  switch (id) {
    case "guirnalda": return `<path d="M0 12 Q90 34 180 14 Q270 34 360 12" stroke="${INK}" stroke-width="1.3" fill="none"/>${[22, 54, 90, 126, 158, 202, 236, 272, 306, 340].map((x, i) => { const y = x < 180 ? 12 + 22 * Math.sin(Math.PI * x / 180) * .9 : 14 + 20 * Math.sin(Math.PI * (x - 180) / 180) * .9; const c = ["#f3d36b", "#f29b8a", "#9cc0cf", "#a9c49a"][i % 4]; return `<circle cx="${x}" cy="${y + 4}" r="6" fill="${c}" opacity=".35"/><ellipse cx="${x}" cy="${y + 4}" rx="2.6" ry="3.6" fill="${c}" ${S1}/>`; }).join("")}`;
    case "lampara": return `<path d="M262 0 L262 26" stroke="${INK}" stroke-width="1.4"/><ellipse cx="262" cy="52" rx="34" ry="14" fill="#ffe7a8" opacity=".35"/><path d="M246 40 Q262 20 278 40 Z" fill="#c95b4a" ${S}/><circle cx="262" cy="42" r="3.5" fill="#fff3c4" ${S1}/>`;
    case "diploma": return `<rect x="114" y="26" width="42" height="31" rx="2" fill="#b58550" ${S}/><rect x="119" y="31" width="32" height="21" fill="#fbf4e3"/><path d="M124 37 h22M124 42 h16" stroke="#c9b48e" stroke-width="1.6" stroke-linecap="round"/><circle cx="143" cy="47" r="3" fill="#c0453a"/>`;
    case "reloj": return `<circle cx="188" cy="40" r="14" fill="#fbf4e3" ${S}/><path d="M188 40 L188 31M188 40 L194 43" ${S}/><circle cx="188" cy="40" r="1.6" fill="${INK}"/>`;
    case "cuadro": return `<rect x="209" y="26" width="38" height="28" rx="2" fill="#7a5638" ${S}/><rect x="213" y="30" width="30" height="20" fill="#cfe0e6"/><path d="M213 50 L222 38 L229 45 L235 36 L243 50Z" fill="#8fae8b"/><path d="M233 39 l2 -3 2 3Z" fill="#fff"/><circle cx="219" cy="35" r="2.4" fill="#f3d36b"/>`;
    case "poster": return `<rect x="296" y="22" width="48" height="62" rx="2" fill="#fbf4e3" ${S}/><path d="M306 60 C306 48 316 42 326 44 C330 38 336 40 336 46 C334 50 332 52 330 52 L330 72 M312 60 L312 72M322 62 L322 72" ${S} fill="none"/><circle cx="333" cy="44" r="1" fill="${INK}"/><path d="M302 30 h20" stroke="#c0453a" stroke-width="2" stroke-linecap="round"/>`;
    case "estanteria": return `<rect x="108" y="96" width="62" height="5" rx="1.5" fill="#a87447" ${S}/><path d="M114 101 l0 5M164 101 l0 5" ${S}/>
      <rect x="114" y="80" width="10" height="16" rx="2" fill="#a9c49a" ${S}/><rect x="113" y="77" width="12" height="4" rx="1" fill="#e2cfae" ${S1}/>
      <rect x="128" y="84" width="9" height="12" rx="2" fill="#f29b8a" ${S}/><path d="M141 96 L141 78 L146 78 L146 96Z M147 96 L147 82 L152 82 L152 96Z" fill="#9cc0cf" ${S}/><path d="M154 96 l3 -15 4 1 -3 14Z" fill="#e2b45a" ${S}/>`;
    case "acuario": return `<rect x="10" y="138" width="76" height="38" rx="3" fill="#b58550" ${S}/><path d="M48 140 v34" ${S1}/><circle cx="43" cy="157" r="1.5" fill="${INK}"/><circle cx="53" cy="157" r="1.5" fill="${INK}"/>
      <rect x="16" y="106" width="64" height="32" rx="3" fill="#bfe0e8" ${S}/><path d="M18 134 Q30 128 44 134 Q58 128 78 134 L78 136 L18 136Z" fill="#e2cfae"/>
      <path d="M26 134 q-3 -8 1 -16M30 134 q3 -7 -1 -13" stroke="#6f9e6b" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <g transform="translate(52 120)"><ellipse rx="6" ry="4" fill="#f0a35e" ${S1}/><path d="M6 0 l5 -4 0 8Z" fill="#f0a35e" ${S1}/><circle cx="-2.6" cy="-.8" r=".9" fill="${INK}"/></g>
      <circle cx="66" cy="116" r="2" fill="none" stroke="#fff" stroke-width="1"/><circle cx="69" cy="111" r="1.3" fill="none" stroke="#fff" stroke-width="1"/>`;
    case "planta": return `<path d="M330 176 L326 150 L352 150 L348 176Z" fill="#c9764e" ${S}/>
      ${[["M339 150 C330 130 316 126 312 132 C318 140 328 146 339 150Z", "#6f9e6b"], ["M339 150 C342 126 354 114 360 118 C358 130 350 142 339 150Z", "#7fae78"], ["M339 150 C336 128 340 108 346 104 C350 116 346 136 339 150Z", "#5f8e5c"]].map(([d, c]) => `<path d="${d}" fill="${c}" ${S}/>`).join("")}`;
    case "gato": return `<ellipse cx="44" cy="214" rx="34" ry="9" fill="#c95b4a" ${S}/><path d="M22 208 C22 192 52 188 62 198 C66 202 66 208 62 210 Z" fill="#e3a15c" ${S}/>
      <path d="M56 196 L58 186 L64 194Z" fill="#e3a15c" ${S}/><path d="M64 199 L68 190 L70 200Z" fill="#e3a15c" ${S}/><path d="M60 202 q2 2 4 0" ${S1}/><path d="M24 206 C14 206 14 214 26 212" stroke="${INK}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M24 206 C14 206 14 214 26 212" stroke="#e3a15c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <text x="70" y="186" font-size="9" fill="${INK}" font-family="Georgia,serif" font-style="italic">z</text><text x="76" y="178" font-size="7" fill="${INK}" font-family="Georgia,serif" font-style="italic">z</text>`;
    case "trofeo": return `<path d="M52 92 h12 l-2 -4 h-8Z" fill="#b58550" ${S1}/><path d="M53 76 h10 c0 6 -2 9 -5 9 c-3 0 -5 -3 -5 -9Z" fill="#f1c75b" ${S1}/><path d="M58 85 v3" ${S1}/><path d="M53 78 c-3 0 -3 4 0 4M63 78 c3 0 3 4 0 4" ${S1}/>`;
    default: return "";
  }
}
function sceneSVG(opts = {}) {
  const eq = opts.eq || G.eq, k = "s" + (uid++);
  const wall = findItem("wall", eq.wall), floor = findItem("floor", eq.floor);
  const dec = new Set(eq.decor || []);
  let wallFill = wall.c, pattern = "";
  if (eq.wall === "huellas") { pattern = `<pattern id="${k}w" width="38" height="38" patternUnits="userSpaceOnUse"><rect width="38" height="38" fill="${wall.c}"/><g fill="${wall.d}" transform="translate(10 12) rotate(-15)"><ellipse cx="0" cy="3" rx="3.4" ry="2.8"/><circle cx="-3.6" cy="-1.6" r="1.3"/><circle cx="-1.2" cy="-3.4" r="1.3"/><circle cx="1.6" cy="-3.4" r="1.3"/><circle cx="3.8" cy="-1.4" r="1.3"/></g><g fill="${wall.d}" transform="translate(29 30) rotate(20)"><ellipse cx="0" cy="3" rx="3.4" ry="2.8"/><circle cx="-3.6" cy="-1.6" r="1.3"/><circle cx="-1.2" cy="-3.4" r="1.3"/><circle cx="1.6" cy="-3.4" r="1.3"/><circle cx="3.8" cy="-1.4" r="1.3"/></g></pattern>`; wallFill = `url(#${k}w)`; }
  if (eq.wall === "rayas") { pattern = `<pattern id="${k}w" width="22" height="10" patternUnits="userSpaceOnUse"><rect width="22" height="10" fill="${wall.c}"/><rect width="8" height="10" fill="${wall.d}" opacity=".45"/></pattern>`; wallFill = `url(#${k}w)`; }
  if (eq.wall === "madera") { pattern = `<pattern id="${k}w" width="30" height="60" patternUnits="userSpaceOnUse"><rect width="30" height="60" fill="${wall.c}"/><path d="M0 0 V60" stroke="${wall.d}" stroke-width="2"/><path d="M12 14 q3 5 0 10" stroke="${wall.d}" stroke-width="1" fill="none" opacity=".6"/></pattern>`; wallFill = `url(#${k}w)`; }
  if (eq.wall === "noche") { pattern = `<pattern id="${k}w" width="60" height="50" patternUnits="userSpaceOnUse"><rect width="60" height="50" fill="${wall.c}"/><circle cx="10" cy="12" r="1.2" fill="#f3e6cf"/><circle cx="40" cy="8" r=".9" fill="#f3e6cf"/><circle cx="28" cy="34" r="1.4" fill="#f3d36b"/><circle cx="52" cy="40" r=".9" fill="#f3e6cf"/></pattern>`; wallFill = `url(#${k}w)`; }
  let floorFill = floor.c;
  if (eq.floor === "tarima") { pattern += `<pattern id="${k}f" width="80" height="16" patternUnits="userSpaceOnUse"><rect width="80" height="16" fill="${floor.c}"/><path d="M0 15.5 H80M30 0 V16" stroke="#a87447" stroke-width="1.4"/></pattern>`; floorFill = `url(#${k}f)`; }
  if (eq.floor === "baldosa") { pattern += `<pattern id="${k}f" width="32" height="20" patternUnits="userSpaceOnUse"><rect width="32" height="20" fill="${floor.c}"/><path d="M0 19.5 H32 M31.5 0 V20" stroke="#b86d52" stroke-width="1.4"/></pattern>`; floorFill = `url(#${k}f)`; }
  if (eq.floor === "damero") { pattern += `<pattern id="${k}f" width="32" height="24" patternUnits="userSpaceOnUse"><rect width="32" height="24" fill="${floor.c}"/><rect width="16" height="12" fill="#8a6a55"/><rect x="16" y="12" width="16" height="12" fill="#8a6a55"/></pattern>`; floorFill = `url(#${k}f)`; }
  const dark = eq.wall === "noche";
  const patient = opts.patient ? `<g transform="translate(206 56) scale(1.08)">${animalSVG(opts.patient.species, opts.patient.name, opts.mood || "neutral")}</g>` : "";
  return `<svg class="scene" viewBox="0 0 360 240" role="img" aria-label="Tu clínica">
    <defs>${pattern}</defs>
    <rect width="360" height="176" fill="${wallFill}"/>
    <rect y="128" width="360" height="48" fill="${wall.d}" opacity=".55"/><path d="M0 128 H360" stroke="${INK}" stroke-width="1.6" opacity=".6"/>
    <rect y="176" width="360" height="64" fill="${floorFill}"/><path d="M0 176 H360" stroke="${INK}" stroke-width="2"/>
    ${dec.has("guirnalda") ? decorSVG("guirnalda") : ""}
    <g><rect x="20" y="24" width="72" height="68" rx="3" fill="${dark ? "#26304a" : "#cfe7ee"}" ${S}/>
      ${dark ? `<circle cx="70" cy="42" r="8" fill="#f3e6cf"/><circle cx="73" cy="40" r="7" fill="#26304a"/>` : `<circle cx="72" cy="40" r="7" fill="#f6d77a"/><path d="M28 70 q10 -10 22 -2 q10 -8 20 0 L84 70 L84 92 L28 92Z" fill="#a9c49a"/>`}
      <path d="M56 24 V92M20 58 H92" stroke="${INK}" stroke-width="2"/>
      <path d="M16 20 C22 40 22 70 14 96 L26 96 C32 70 30 40 30 20Z" fill="#e6a77f" ${S}/><path d="M96 20 C90 40 90 70 98 96 L86 96 C80 70 82 40 82 20Z" fill="#e6a77f" ${S}/>
      <rect x="12" y="16" width="88" height="5" rx="2.5" fill="#a87447" ${S}/><rect x="18" y="92" width="76" height="5" rx="2" fill="#f3e6cf" ${S}/></g>
    ${["diploma", "reloj", "cuadro", "poster", "estanteria", "lampara", "acuario"].filter(d => dec.has(d)).map(d => decorSVG(d)).join("")}
    ${dec.has("trofeo") ? decorSVG("trofeo") : ""}
    ${dec.has("alfombra") ? `<ellipse cx="160" cy="214" rx="96" ry="18" fill="#c9764e" ${S}/><ellipse cx="160" cy="214" rx="78" ry="12" fill="none" stroke="#f3d36b" stroke-width="2" stroke-dasharray="5 4"/>` : ""}
    <g><rect x="200" y="148" width="126" height="9" rx="3" fill="#dfe6e8" ${S}/><path d="M212 157 L212 204M314 157 L314 204" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M206 204 h14M306 204 h14" ${S}/>
      ${opts.patient ? "" : `<path d="M226 148 q8 -10 22 -4 q12 -6 22 2 q10 -2 14 2" fill="#f2d6cd" ${S}/>`}</g>
    ${patient}
    ${dec.has("planta") ? decorSVG("planta") : ""}
    <g transform="translate(84 88) scale(1.08)">${avatarG(eq, opts.vetMood || "neutral")}</g>
    ${dec.has("gato") ? decorSVG("gato") : ""}
  </svg>`;
}

/* ---------- selección de pacientes ---------- */
function buildQueue() {
  const pool = QUESTIONS.filter(q => cfg.topics.includes(q.t)).map(q => q.id);
  if (!pool.length) return [];
  const pend = Stats.pending().filter(x => cfg.topics.includes(x.q.t)).sort((a, b) => Stats.weight(b.e) - Stats.weight(a.e)).map(x => x.q.id);
  const q = [];
  shuffle(pend.slice(0, 6)).slice(0, 2).forEach(id => q.push(id));
  const fresh = shuffle(pool.filter(id => !q.includes(id) && !G.recent.includes(id)));
  const rest = shuffle(pool.filter(id => !q.includes(id) && G.recent.includes(id)));
  for (const id of [...fresh, ...rest]) { if (q.length >= PATIENTS_PER_DAY) break; q.push(id); }
  return shuffle(q);
}
function openDay() {
  const queue = buildQueue();
  if (!queue.length) return;
  G.cur = { queue, i: 0, order: shuffle([0, 1, 2, 3]), answer: null, earned: 0, drep: 0, ok: 0, log: [] };
  saveGame(); gview = "patient"; render(); window.scrollTo(0, 0);
}

/* ---------- vistas ---------- */
function statsBar() {
  return `<div class="g-stats">
    <div class="g-pill">${COIN}<b>${fmt(G.money)}</b></div>
    <div class="g-rep">${STAR}<div><div class="g-rep-top"><b>${G.rep}</b><span>${repTier(G.rep)}</span></div><div class="g-bar"><div style="width:${G.rep}%"></div></div></div></div>
  </div>`;
}

function renderConsulta() {
  if (gview === "patient" && G.cur) return renderPatient();
  if (gview === "shop") return renderShop();
  if (gview === "summary" && lastSummary) return renderSummary();
  gview = "hub";
  setFocusMode(false);
  const inDay = G.cur && G.cur.i < G.cur.queue.length;
  $("#app").innerHTML = `
    <div class="g-wrap">
      <header class="g-head">
        <div><p class="g-kicker">Día ${G.day}</p><h1 class="g-title" id="cname">${esc(G.clinic)}</h1></div>
        <button class="icon-btn soft" id="rename" aria-label="Cambiar nombre"><svg viewBox="0 0 24 24"><path d="M4 20l4-1 10.5-10.5a2.1 2.1 0 0 0-3-3L5 16Z"/></svg></button>
      </header>
      ${statsBar()}
      <div class="scene-frame">${sceneSVG({ vetMood: "happy" })}</div>
      <div class="g-actions">
        <button class="btn primary block big" id="open">${inDay ? `Seguir con la consulta · paciente ${G.cur.i + 1} de ${G.cur.queue.length}` : `Abrir la consulta`}</button>
        <button class="btn block" id="shop">Tienda y aspecto</button>
      </div>
      <div class="g-paper">
        <p class="g-hand">Cómo funciona</p>
        <p>Cada jornada llegan ${PATIENTS_PER_DAY} pacientes. Si aciertas, cobras y ganas reputación. Si fallas, el cliente se va descontento y pierdes reputación. Cuanta más reputación tengas, más cobras por consulta.</p>
        <p class="muted small">Atendidos: <b>${G.served}</b> · Aciertos: <b>${G.okTotal}</b> · Mejor racha: <b>${G.best}</b></p>
        <p class="label" style="margin-top:12px">Casos de los temas</p>
        <div class="chips">${topicsWithQ().map(t => `<button class="chip" data-gt="${t}" aria-pressed="${cfg.topics.includes(t)}">Tema ${t}</button>`).join("")}</div>
      </div>
    </div>`;
  $("#open").onclick = () => { if (inDay) { gview = "patient"; render(); window.scrollTo(0, 0); } else openDay(); };
  $("#open").disabled = !cfg.topics.length && !inDay;
  $("#shop").onclick = () => { gview = "shop"; render(); window.scrollTo(0, 0); };
  $$("[data-gt]").forEach(b => b.onclick = () => { const t = +b.dataset.gt; cfg.topics = cfg.topics.includes(t) ? cfg.topics.filter(x => x !== t) : [...cfg.topics, t]; store.set("ft_cfg", cfg); renderConsulta(); });
  $("#rename").onclick = () => {
    modal(`<h3>Nombre de tu clínica</h3><input id="cn" class="field" maxlength="32" value="${esc(G.clinic)}">
      <div class="row" style="margin-top:14px"><button class="btn" id="no" style="flex:1">Cancelar</button><button class="btn primary" id="yes" style="flex:1">Guardar</button></div>`);
    $("#cn").focus(); $("#no").onclick = closeModal;
    $("#yes").onclick = () => { const v = $("#cn").value.trim(); if (v) { G.clinic = v; saveGame(); } closeModal(); renderConsulta(); };
  };
}

function renderPatient() {
  setFocusMode(true);
  const C = G.cur, id = C.queue[C.i], Q = QUESTIONS[id], [species, name, motivo] = CASES[id];
  const A = C.answer, last = C.i === C.queue.length - 1;
  const mood = A ? (A.ok ? "happy" : "sad") : "neutral";
  $("#app").innerHTML = `
    <div class="g-wrap">
      <div class="topbar">
        <button class="icon-btn soft" id="back" aria-label="Volver a la clínica"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>
        <div class="muted"><b class="ink">Paciente ${C.i + 1}</b> de ${C.queue.length}</div>
        <span class="spacer"></span>
        <div class="g-pill sm">${COIN}<b>${fmt(G.money)}</b></div><div class="g-pill sm">${STAR}<b>${G.rep}</b></div>
      </div>
      <div class="dots">${C.queue.map((_, i) => `<span class="${i < C.i ? (C.log[i] ? "ok" : "bad") : i === C.i ? "cur" : ""}"></span>`).join("")}</div>
      <div class="scene-frame">${sceneSVG({ patient: { species, name }, mood, vetMood: A ? (A.ok ? "happy" : "sad") : "neutral" })}</div>
      <div class="ficha">
        <div class="ficha-clip"></div>
        <div class="ficha-head"><span class="ficha-name">${esc(name)}</span><span class="ficha-sp">${SPECIES[species]} · ${TOPICS[Q.t].name}</span></div>
        <p class="ficha-motivo">${esc(motivo)}</p>
      </div>
      <div class="g-question">
        <p class="g-hand">Para decidir el tratamiento…</p>
        <h2 class="qtext">${esc(Q.q)}</h2>
        <div>${C.order.map((oi, k) => {
          let cls = "";
          if (A) { if (oi === Q.a) cls = "correct"; else if (oi === A.choice) cls = "wrong"; else cls = "dim"; }
          return `<button class="opt ${cls}" data-g="${oi}" ${A ? "disabled" : ""}><span class="letter">${LET[k]}</span><span>${esc(Q.o[oi])}</span></button>`;
        }).join("")}</div>
      </div>
      ${A ? `<div class="g-result ${A.ok ? "ok" : "bad"}">
        <div class="g-result-msg">${A.ok
          ? `<b>¡Bien visto!</b> ${esc(name)} se va a casa mucho mejor.<div class="g-gains"><span>${COIN}+${A.pay}</span><span>${STAR}+${A.drep}</span>${A.streak >= 2 ? `<span class="streak">racha ${A.streak}</span>` : ""}</div>`
          : `<b>Vaya…</b> el tratamiento no era ese y el dueño de ${esc(name)} se va descontento.<div class="g-gains"><span>${STAR}${A.drep}</span></div>`}</div>
        <div class="row">
          <button class="btn" id="notes" style="flex:1">Ver apuntes</button>
          <button class="btn primary" id="nextp" style="flex:1.4">${last ? "Cerrar la jornada" : "Siguiente paciente"}</button>
        </div>
      </div>` : ""}
    </div>`;
  $("#back").onclick = () => { gview = "hub"; render(); window.scrollTo(0, 0); };
  $$("[data-g]").forEach(b => b.onclick = () => answerPatient(+b.dataset.g));
  if (A) {
    $("#notes").onclick = () => openInfo(id);
    $("#nextp").onclick = nextPatient;
    requestAnimationFrame(() => { const r = $(".g-result"); if (r) r.scrollIntoView({ behavior: "smooth", block: "nearest" }); });
  }
}
function answerPatient(choice) {
  const C = G.cur, id = C.queue[C.i], Q = QUESTIONS[id], ok = choice === Q.a;
  Stats.record(id, ok);
  G.served++;
  let pay = 0, drep;
  if (ok) {
    G.streak++; G.best = Math.max(G.best, G.streak); G.okTotal++;
    pay = payFor(G.rep, G.streak);
    drep = Math.min(4, 100 - G.rep);
    C.ok++;
  } else {
    G.streak = 0;
    drep = -Math.min(8, G.rep);
  }
  G.money += pay; G.rep += drep; C.earned += pay; C.drep += drep;
  C.answer = { choice, ok, pay, drep, streak: G.streak };
  C.log[C.i] = ok;
  G.recent = [id, ...G.recent.filter(x => x !== id)].slice(0, 24);
  saveGame(); renderPatient();
}
function nextPatient() {
  const C = G.cur;
  if (C.i < C.queue.length - 1) {
    C.i++; C.answer = null; C.order = shuffle([0, 1, 2, 3]); saveGame(); renderPatient(); window.scrollTo(0, 0);
  } else {
    const perfect = C.ok === C.queue.length;
    const bonus = perfect ? 40 : 0;
    G.money += bonus;
    lastSummary = { day: G.day, ok: C.ok, total: C.queue.length, earned: C.earned + bonus, bonus, drep: C.drep, names: C.queue.map((id, i) => [CASES[id], C.log[i], id]) };
    G.day++; G.cur = null; saveGame();
    gview = "summary"; render(); window.scrollTo(0, 0);
  }
}
function renderSummary() {
  setFocusMode(false);
  const s = lastSummary;
  const msg = s.ok === s.total ? "¡Jornada perfecta! El pueblo entero habla de tu clínica." : s.ok >= s.total * .66 ? "Buen día de trabajo. Los clientes se van contentos." : s.ok >= s.total / 3 ? "Un día regular. Mañana irá mejor: repasa lo que fallaste." : "Día duro. Échale un ojo a los apuntes antes de abrir mañana.";
  $("#app").innerHTML = `
    <div class="g-wrap">
      <div class="g-paper summary">
        <p class="g-kicker">Fin del día ${s.day}</p>
        <h1 class="g-title">${s.ok} de ${s.total} pacientes curados</h1>
        <p>${msg}</p>
        <div class="g-gains big"><span>${COIN}+${s.earned}</span><span>${STAR}${s.drep >= 0 ? "+" : ""}${s.drep}</span></div>
        ${s.bonus ? `<p class="muted small">Incluye ${s.bonus} monedas de propina por la jornada perfecta.</p>` : ""}
        <ul class="sum-list">${s.names.map(([[sp, nm], ok, id]) => `<li><svg viewBox="0 0 100 100" class="mini-pet">${animalSVG(sp, nm, ok ? "happy" : "sad")}</svg><span>${esc(nm)}</span><span class="spacer"></span>${ok ? `<span class="tag okt">curado</span>` : `<button class="link" data-info="${id}">ver apuntes</button>`}</li>`).join("")}</ul>
        <button class="btn primary block" id="home">Volver a la clínica</button>
      </div>
    </div>`;
  $$("[data-info]").forEach(b => b.onclick = () => openInfo(+b.dataset.info));
  $("#home").onclick = () => { lastSummary = null; gview = "hub"; render(); window.scrollTo(0, 0); };
}

/* ---------- tienda ---------- */
let preview = null;
function renderShop() {
  setFocusMode(false);
  const cat = SHOP[shopCat];
  const isRoom = ["wall", "floor", "decor"].includes(shopCat);
  const owned = (c, id) => G.owned.includes(c + ":" + id);
  const isOn = (c, id) => c === "decor" ? G.eq.decor.includes(id) : G.eq[c] === id;
  const thumb = it => {
    if (shopCat === "hairColor" || shopCat === "skin") return `<span class="swatch" style="background:${it.c}"></span>`;
    if (shopCat === "wall" || shopCat === "floor" || shopCat === "decor") {
      const eq = Object.assign({}, G.eq, shopCat === "decor" ? { decor: [it.id] } : { [shopCat]: it.id });
      return `<span class="thumb room">${sceneSVG({ eq })}</span>`;
    }
    const eq = Object.assign({}, G.eq, { [shopCat]: it.id });
    return `<span class="thumb">${avatarSVG(eq, "neutral")}</span>`;
  };
  $("#app").innerHTML = `
    <div class="g-wrap">
      <div class="topbar">
        <button class="icon-btn soft" id="back" aria-label="Volver"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button>
        <h1 class="g-title sm">Tienda</h1><span class="spacer"></span>
        <div class="g-pill">${COIN}<b>${fmt(G.money)}</b></div>
      </div>
      <div class="scene-frame">${sceneSVG({ eq: preview || G.eq, vetMood: "happy" })}</div>
      <div class="shop-cats">${SHOP_ORDER.map(c => `<button data-cat="${c}" aria-pressed="${shopCat === c}">${SHOP[c].label}</button>`).join("")}</div>
      <div class="shop-grid">${cat.items.map(it => {
        const have = owned(shopCat, it.id), on = isOn(shopCat, it.id);
        let btn;
        if (have) btn = shopCat === "decor" ? `<button class="btn sm ${on ? "" : "primary"}" data-toggle="${it.id}">${on ? "Quitar" : "Colocar"}</button>`
          : on ? (["eyes", "head"].includes(shopCat) ? `<button class="btn sm" data-off="${it.id}">Quitar</button>` : `<span class="worn">Puesto</span>`) : `<button class="btn sm primary" data-wear="${it.id}">Ponérmelo</button>`;
        else btn = `<button class="btn sm buy" data-buy="${it.id}" ${G.money < it.price ? "disabled" : ""}>${COIN}${it.price}</button>`;
        return `<div class="item ${on ? "on" : ""}" data-prev="${it.id}">${thumb(it)}<span class="item-name">${esc(it.name)}</span>${btn}</div>`;
      }).join("")}</div>
      <p class="muted small" style="text-align:center">Toca un objeto para verlo puesto antes de comprarlo.</p>
    </div>`;
  $("#back").onclick = () => { preview = null; gview = "hub"; render(); window.scrollTo(0, 0); };
  $$("[data-cat]").forEach(b => b.onclick = () => { shopCat = b.dataset.cat; preview = null; renderShop(); });
  $$("[data-prev]").forEach(el => el.onclick = e => {
    if (e.target.closest("button")) return;
    const id = el.dataset.prev;
    preview = Object.assign({}, G.eq, shopCat === "decor" ? { decor: [...new Set([...G.eq.decor, id])] } : { [shopCat]: id });
    $(".scene-frame").innerHTML = sceneSVG({ eq: preview, vetMood: "happy" });
    $(".scene-frame").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
  $$("[data-buy]").forEach(b => b.onclick = () => {
    const it = findItem(shopCat, b.dataset.buy);
    confirmBox(`¿Comprar ${it.name}?`, `Cuesta ${it.price} monedas. Te quedarán ${G.money - it.price}.`, "Comprar", () => {
      G.money -= it.price; G.owned.push(shopCat + ":" + it.id);
      if (shopCat === "decor") G.eq.decor.push(it.id); else G.eq[shopCat] = it.id;
      preview = null; saveGame(); renderShop();
    });
  });
  $$("[data-wear]").forEach(b => b.onclick = () => { G.eq[shopCat] = b.dataset.wear; preview = null; saveGame(); renderShop(); });
  $$("[data-off]").forEach(b => b.onclick = () => { G.eq[shopCat] = null; preview = null; saveGame(); renderShop(); });
  $$("[data-toggle]").forEach(b => b.onclick = () => {
    const id = b.dataset.toggle; G.eq.decor = G.eq.decor.includes(id) ? G.eq.decor.filter(x => x !== id) : [...G.eq.decor, id];
    preview = null; saveGame(); renderShop();
  });
}
