"use strict";
/* ================= ILUSTRACIONES (SVG dibujado a mano) ================= */
const INK = "#4a3426";
const S = `stroke="${INK}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
const S1 = `stroke="${INK}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
const SH = (cx, cy, rx, ry, o = .16) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${INK}" opacity="${o}"/>`;
function hash(s) { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; }
let uid = 0;
const COIN = `<svg class="ico-coin" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#f0c25e" ${S}/><path d="M10 6v8M7.5 8.2c.6-1 4.4-1.2 4.4.6 0 1.8-4.4.9-4.4 2.7 0 1.6 3.9 1.6 4.6.5" ${S1}/></svg>`;
const BOLT = `<svg class="ico-bolt" viewBox="0 0 20 20"><path d="M11.6 1.8 4.4 11.3h4.8L8 18.2l7.6-9.7h-4.9Z" fill="#f3c74f" ${S}/></svg>`;
const STAR = `<svg class="ico-star" viewBox="0 0 20 20"><path d="M10 2.5l2.3 4.8 5.2.7-3.8 3.6.9 5.2L10 14.3l-4.6 2.5.9-5.2L2.5 8l5.2-.7Z" fill="#e8a65a" ${S}/></svg>`;

/* ---------------- catálogo ---------------- */
const SHOP = {
  /* --- tu aspecto --- */
  hair: { label: "Peinado", items: [
    { id: "corto", name: "Corto", price: 0 }, { id: "rapado", name: "Rapado", price: 0 }, { id: "calvo", name: "Sin pelo", price: 0 },
    { id: "flequillo", name: "Flequillo de lado", price: 50 }, { id: "media", name: "Media melena", price: 60 }, { id: "melena", name: "Melena", price: 70 },
    { id: "coleta", name: "Coleta", price: 70 }, { id: "mono", name: "Moño", price: 90 }, { id: "trenzas", name: "Trenzas", price: 120 },
    { id: "tupe", name: "Tupé", price: 120 }, { id: "rizos", name: "Rizos", price: 140 }, { id: "cresta", name: "Cresta", price: 260 }] },
  hairColor: { label: "Color de pelo", items: [
    { id: "castano", name: "Castaño", c: "#6b4430", price: 0 }, { id: "negro", name: "Negro", c: "#2c2524", price: 0 },
    { id: "rubio", name: "Rubio", c: "#e2b65e", price: 40 }, { id: "pelirrojo", name: "Pelirrojo", c: "#c0602f", price: 40 },
    { id: "miel", name: "Miel", c: "#b8803e", price: 40 }, { id: "canoso", name: "Canoso", c: "#cfc8c0", price: 60 },
    { id: "lavanda", name: "Lavanda", c: "#a58bc9", price: 110 }, { id: "menta", name: "Menta", c: "#7fbfa4", price: 110 },
    { id: "chicle", name: "Chicle", c: "#e58aa6", price: 110 }, { id: "azul", name: "Azul tinta", c: "#4f6fae", price: 110 }] },
  skin: { label: "Piel", items: [
    { id: "s1", name: "Clara", c: "#f6d9c4", price: 0 }, { id: "s2", name: "Media", c: "#e8bd9a", price: 0 },
    { id: "s3", name: "Tostada", c: "#c48b65", price: 0 }, { id: "s4", name: "Oscura", c: "#8a5a40", price: 0 }] },
  face: { label: "Cara", opt: true, items: [
    { id: "pecas", name: "Pecas", price: 30 }, { id: "lunar", name: "Lunar", price: 20 }, { id: "bigote", name: "Bigote", price: 60 },
    { id: "perilla", name: "Perilla", price: 60 }, { id: "barba", name: "Barba", price: 90 }] },
  outfit: { label: "Ropa", items: [
    { id: "bata", name: "Bata blanca", price: 0 }, { id: "pijama_salvia", name: "Pijama salvia", c: "#8fae8b", price: 60 },
    { id: "pijama_cielo", name: "Pijama cielo", c: "#86afc9", price: 60 }, { id: "pijama_rosa", name: "Pijama rosa", c: "#e3a4a8", price: 70 },
    { id: "pijama_mostaza", name: "Pijama mostaza", c: "#d9b45a", price: 70 }, { id: "pijama_granate", name: "Pijama granate", c: "#a85a5a", price: 70 },
    { id: "jersey", name: "Jersey de punto", price: 150 }, { id: "cardigan", name: "Rebeca lila", price: 160 }, { id: "peto", name: "Peto de granja", price: 170 },
    { id: "sudadera", name: "Sudadera de huellas", price: 190 }, { id: "hawaiana", name: "Camisa de flores", price: 210 },
    { id: "traje", name: "Traje de domingo", price: 280 }, { id: "capa", name: "Capa de superveterinario", price: 600 }] },
  neck: { label: "Cuello", opt: true, items: [
    { id: "esteto", name: "Fonendo", price: 0 }, { id: "panuelo", name: "Pañuelo", price: 50 }, { id: "collar", name: "Collar de cuentas", price: 70 },
    { id: "pajarita", name: "Pajarita", price: 80 }, { id: "bufanda", name: "Bufanda", price: 110 }] },
  eyes: { label: "Gafas", opt: true, items: [
    { id: "gafas", name: "Gafas redondas", price: 60 }, { id: "pasta", name: "Gafas de pasta", price: 80 },
    { id: "gafas_sol", name: "Gafas de sol", price: 110 }, { id: "gafas_corazon", name: "Gafas corazón", price: 160 }] },
  head: { label: "Cabeza", opt: true, items: [
    { id: "gorro", name: "Gorro de quirófano", price: 70 }, { id: "flor", name: "Flor en el pelo", price: 60 }, { id: "diadema", name: "Diadema con lazo", price: 80 },
    { id: "lana", name: "Gorro de lana", price: 100 }, { id: "boina", name: "Boina", price: 110 }, { id: "paja", name: "Sombrero de paja", price: 140 }, { id: "corona", name: "Corona", price: 900 }] },
  ears: { label: "Pendientes", opt: true, items: [
    { id: "aros", name: "Aros dorados", price: 50 }, { id: "perlas", name: "Perlas", price: 70 }, { id: "estrellas", name: "Estrellitas", price: 90 }] },
  /* --- tu clínica --- */
  wall: { label: "Pared", items: [
    { id: "crema", name: "Crema", c: "#f3e6cf", d: "#e2cfae", price: 0 }, { id: "salvia", name: "Salvia", c: "#d3dcc2", d: "#a9b893", price: 80 },
    { id: "cielo", name: "Cielo", c: "#d3e3e6", d: "#9fbcc2", price: 80 }, { id: "rosa", name: "Rosa empolvado", c: "#f1d6cd", d: "#d9ab9c", price: 80 },
    { id: "mostaza", name: "Mostaza suave", c: "#f2deac", d: "#d6b46a", price: 80 },
    { id: "huellas", name: "Papel de huellas", c: "#f5ead6", d: "#d9c09a", price: 200 }, { id: "flores", name: "Papel de flores", c: "#f4e8d8", d: "#c9a77d", price: 220 },
    { id: "rayas", name: "Rayas", c: "#f2e3cb", d: "#c9a77d", price: 180 }, { id: "azulejo", name: "Azulejo verde", c: "#e9efe4", d: "#8fae8b", price: 240 },
    { id: "madera", name: "Madera", c: "#c99a6b", d: "#9c7048", price: 240 }, { id: "noche", name: "Noche estrellada", c: "#3d4766", d: "#2c344d", price: 300 }] },
  floor: { label: "Suelo", items: [
    { id: "tarima", name: "Tarima", c: "#c28f5f", price: 0 }, { id: "espiga", name: "Madera en espiga", c: "#c9965f", price: 160 },
    { id: "baldosa", name: "Baldosa de barro", c: "#d8896b", price: 130 }, { id: "hidraulica", name: "Baldosa hidráulica", c: "#efe6d6", price: 200 },
    { id: "damero", name: "Damero", c: "#efe6d6", price: 170 }, { id: "verde", name: "Moqueta verde", c: "#8fa876", price: 140 }] },
  view: { label: "Vista", items: [
    { id: "campo", name: "Campo", price: 0 }, { id: "ciudad", name: "Ciudad", price: 90 }, { id: "mar", name: "Mar", price: 140 },
    { id: "otono", name: "Otoño", price: 120 }, { id: "nieve", name: "Nevada", price: 140 }, { id: "noche", name: "Noche", price: 160 }] },
  curtains: { label: "Cortinas", opt: true, items: [
    { id: "terracota", name: "Terracota", c: "#e6a77f", price: 0 }, { id: "salvia", name: "Salvia", c: "#a9c49a", price: 50 },
    { id: "mostaza", name: "Mostaza", c: "#e8c06a", price: 50 }, { id: "rosa", name: "Rosa", c: "#eab3ae", price: 50 },
    { id: "lino", name: "Lino", c: "#efe3cf", price: 60 }, { id: "cuadros", name: "Cuadros vichy", c: "#d97a6c", price: 110 }] },
  table: { label: "Camilla", items: [
    { id: "metal", name: "Acero", price: 0 }, { id: "madera", name: "Madera", price: 140 }, { id: "cojin", name: "Con cojín de flores", price: 220 }] },
  ceiling: { label: "Techo", opt: true, items: [
    { id: "lampara", name: "Lámpara colgante", price: 130 }, { id: "banderines", name: "Banderines", price: 120 }, { id: "farolillos", name: "Farolillos de papel", price: 180 },
    { id: "guirnalda", name: "Guirnalda de luces", price: 220 }, { id: "macrame", name: "Plantas colgantes", price: 240 }] },
  wallL: { label: "Cuadro grande", opt: true, items: [
    { id: "diploma", name: "Título enmarcado", price: 60 }, { id: "cuadro", name: "Cuadro de montañas", price: 100 }, { id: "espejo", name: "Espejo redondo", price: 110 },
    { id: "galeria", name: "Fotos de pacientes", price: 140 }, { id: "corcho", name: "Corcho con notas", price: 120 }] },
  wallC: { label: "Pared centro", opt: true, items: [
    { id: "reloj", name: "Reloj de pared", price: 70 }, { id: "calendario", name: "Calendario", price: 60 }, { id: "huella", name: "Huella enmarcada", price: 90 }, { id: "cuco", name: "Reloj de cuco", price: 230 }] },
  wallR: { label: "Lámina", opt: true, items: [
    { id: "anatomia", name: "Lámina de anatomía", price: 110 }, { id: "gatitos", name: "Póster de gatito", price: 100 }, { id: "pizarra", name: "Pizarra del día", price: 130 }] },
  shelf: { label: "Balda", opt: true, items: [
    { id: "botes", name: "Botes de farmacia", price: 120 }, { id: "libros", name: "Libros y cactus", price: 120 }, { id: "pothos", name: "Poto colgante", price: 150 }, { id: "peluches", name: "Peluches", price: 160 }] },
  sill: { label: "Alféizar", opt: true, items: [
    { id: "macetas", name: "Suculentas", price: 60 }, { id: "velas", name: "Velas", price: 80 }, { id: "trofeo", name: "Trofeo al mejor veterinario", price: 700 }] },
  cornerL: { label: "Rincón", opt: true, items: [
    { id: "bascula", name: "Báscula para mascotas", price: 120 }, { id: "botiquin", name: "Botiquín", price: 140 }, { id: "sofa", name: "Banco de espera", price: 220 },
    { id: "acuario", name: "Acuario", price: 380 }] },
  plant: { label: "Planta", opt: true, items: [
    { id: "monstera", name: "Monstera", price: 80 }, { id: "cactus", name: "Cactus", price: 80 }, { id: "helecho", name: "Helecho", price: 100 }, { id: "ficus", name: "Ficus", price: 140 }] },
  rug: { label: "Alfombra", opt: true, items: [
    { id: "redonda", name: "Redonda", price: 120 }, { id: "rayas", name: "De rayas", price: 140 }, { id: "huella", name: "Con forma de huella", price: 200 }] },
  pet: { label: "Mascota", opt: true, items: [
    { id: "gato", name: "Gato dormilón", price: 320 }, { id: "perro", name: "Perro en su cama", price: 340 }, { id: "conejo", name: "Conejo", price: 300 }, { id: "tortuga", name: "Tortuga", price: 260 }] }
};
const SHOP_SECTIONS = [
  { id: "me", label: "Tu aspecto", cats: ["hair", "hairColor", "skin", "face", "outfit", "neck", "eyes", "head", "ears"] },
  { id: "room", label: "Tu clínica", cats: ["wall", "floor", "view", "curtains", "table", "ceiling", "wallL", "wallC", "wallR", "shelf", "sill", "cornerL", "plant", "rug", "pet"] }
];
const SHOP_ORDER = SHOP_SECTIONS.flatMap(s => s.cats);
const findItem = (cat, id) => SHOP[cat].items.find(i => i.id === id);
/* zona de la escena que se enseña en la miniatura de cada categoría */
const FOCUS = {
  wall: "0 0 360 240", floor: "0 150 360 90", view: "12 16 88 88", curtains: "8 12 96 92", table: "186 118 152 96",
  ceiling: "0 0 360 96", wallL: "98 14 84 60", wallC: "156 12 66 60", wallR: "282 12 76 84", shelf: "100 60 80 52",
  sill: "14 66 84 38", cornerL: "0 92 100 90", plant: "296 86 64 96", rug: "50 180 230 60", pet: "0 168 112 72"
};

/* ---------------- animales (100x100) ---------------- */
const PAL = {
  dog: [{ f: "#d4a373", e: "#8c5a3c", m: "#f3e3cc", ear: 0 }, { f: "#f3e3cc", e: "#c99566", m: "#fff8ee", ear: 2 }, { f: "#4a3b36", e: "#2e2522", m: "#c9a88a", ear: 1, brow: 1 },
    { f: "#e9b872", e: "#b5793f", m: "#fbe9cf", ear: 1 }, { f: "#f7f2ea", e: "#3d3433", m: "#ffffff", patch: 1, ear: 0 }, { f: "#b07a52", e: "#6b4430", m: "#e8c9a6", patch: 1, ear: 2 },
    { f: "#2f2a2a", e: "#1e1a1a", m: "#d9a374", ear: 1, brow: 1 }, { f: "#c9c4bd", e: "#8f8a83", m: "#f4f1ec", ear: 0 }],
  cat: [{ f: "#e3a15c", e: "#b8733a", tabby: 1 }, { f: "#a3a3a8", e: "#6e6e75", tabby: 1, bib: 1 }, { f: "#3e3a3b", e: "#2a2627", bib: 1 }, { f: "#f2e6d2", e: "#c9b79a", point: 1 },
    { f: "#f7f3ec", e: "#e3a15c", patch: 1 }, { f: "#5b5552", e: "#3a3533", tabby: 1 }],
  horse: [{ f: "#9a5f3d", e: "#3a2a22", m: "#c08a68", blaze: 1 }, { f: "#5a4034", e: "#2b211c", m: "#7d6050" }, { f: "#d8cfc2", e: "#8d8478", m: "#ebe4d8" }, { f: "#c4783f", e: "#efe0c0", m: "#e2a97a", blaze: 1 }],
  cow: [{ e: "#3b3433" }, { e: "#8a5636" }, { e: "#3b3433", bell: 1 }],
  pig: [{}, { spots: 1 }]
};
const SPECIES = { dog: "Perro", cat: "Gato", horse: "Caballo", cow: "Vaca", pig: "Cerdo" };
const COLLARS = ["#c0453a", "#4f6fae", "#5f8a55", "#e8a65a", "#a85a9a"];

function eyes(mood, lx, rx, y, big) {
  const ry = big ? 4 : 3.5, rx_ = big ? 3.1 : 2.8;
  if (mood === "happy") return `<path d="M${lx - 3.5} ${y + 1} Q${lx} ${y - 3.5} ${lx + 3.5} ${y + 1}M${rx - 3.5} ${y + 1} Q${rx} ${y - 3.5} ${rx + 3.5} ${y + 1}" ${S} fill="none"/>`;
  let s = [lx, rx].map(x => `<ellipse cx="${x}" cy="${y}" rx="${rx_}" ry="${ry}" fill="${INK}"/><circle cx="${x + 1.1}" cy="${y - 1.5}" r="1.15" fill="#fff"/><circle cx="${x - .9}" cy="${y + 1.4}" r=".55" fill="#fff"/>`).join("");
  if (mood === "sad") s += `<path d="M${lx - 4.5} ${y - 5.5} L${lx + 3} ${y - 8.5}M${rx - 3} ${y - 8.5} L${rx + 4.5} ${y - 5.5}" ${S} fill="none"/>
    <path d="M${rx + 3.5} ${y + 3} q1.8 3.2 0 4.8 q-1.8 -1.6 0 -4.8Z" fill="#8cc4e0" stroke="${INK}" stroke-width="1"/>`;
  return s;
}
const cheeks = (lx, rx, y) => `<ellipse cx="${lx}" cy="${y}" rx="4" ry="2.6" fill="#f09a86" opacity=".45"/><ellipse cx="${rx}" cy="${y}" rx="4" ry="2.6" fill="#f09a86" opacity=".45"/>`;
const toes = (x, y) => `<path d="M${x - 3} ${y - 1} v2.6M${x} ${y - .6} v2.8M${x + 3} ${y - 1} v2.6" stroke="${INK}" stroke-width="1" stroke-linecap="round" opacity=".7"/>`;
function smallMouth(mood, x, y) {
  if (mood === "happy") return `<path d="M${x - 5} ${y} Q${x} ${y + 7} ${x + 5} ${y}" ${S} fill="#e8857c"/>`;
  if (mood === "sad") return `<path d="M${x - 4} ${y + 3} Q${x} ${y - 1} ${x + 4} ${y + 3}" ${S} fill="none"/>`;
  return `<path d="M${x - 4} ${y} Q${x - 2} ${y + 2.6} ${x} ${y} Q${x + 2} ${y + 2.6} ${x + 4} ${y}" ${S} fill="none"/>`;
}

function animalSVG(species, name, mood) {
  const pals = PAL[species] || PAL.dog, h = hash(name), c = pals[h % pals.length], col = COLLARS[(h >> 3) % COLLARS.length];
  let g = SH(50, 99, 30, 3.6);
  if (species === "dog") {
    const ears = [
      `<path d="M29 32 C17 34 16 55 23 63 C31 61 33 48 34 38 Z" fill="${c.e}" ${S}/><path d="M71 32 C83 34 84 55 77 63 C69 61 67 48 66 38 Z" fill="${c.e}" ${S}/>`,
      `<path d="M30 36 L27 12 L45 27 Z" fill="${c.f}" ${S}/><path d="M32 31 L31 18 L41 27Z" fill="#e8a99a" opacity=".8"/><path d="M70 36 L73 12 L55 27 Z" fill="${c.f}" ${S}/><path d="M68 31 L69 18 L59 27Z" fill="#e8a99a" opacity=".8"/>`,
      `<path d="M30 37 L29 17 Q36 13 41 20 L46 27 Z" fill="${c.f}" ${S}/><path d="M29 17 Q36 13 41 20 L34 25Z" fill="${c.e}" ${S1}/><path d="M70 37 L71 17 Q64 13 59 20 L54 27 Z" fill="${c.f}" ${S}/><path d="M71 17 Q64 13 59 20 L66 25Z" fill="${c.e}" ${S1}/>`][c.ear || 0];
    g += `<ellipse cx="50" cy="84" rx="27" ry="17" fill="${c.f}" ${S}/>
      <ellipse cx="50" cy="91" rx="20" ry="7" fill="${c.e}" opacity=".18"/>
      <ellipse cx="50" cy="80" rx="11" ry="10" fill="${c.m}" opacity=".9"/>
      <ellipse cx="40" cy="97" rx="7" ry="4.5" fill="${c.f}" ${S}/><ellipse cx="60" cy="97" rx="7" ry="4.5" fill="${c.f}" ${S}/>${toes(40, 97)}${toes(60, 97)}
      ${c.ear === 0 ? "" : ears}
      <ellipse cx="50" cy="46" rx="23" ry="21" fill="${c.f}" ${S}/>
      <path d="M47 26 q3 -6 6 0" ${S1}/>
      ${c.patch ? `<path d="M56 33 C64 30 70 36 68 44 C62 47 56 43 56 33Z" fill="${c.e}"/>` : ""}
      ${c.brow ? `<ellipse cx="41" cy="37" rx="3" ry="2" fill="${c.m}"/><ellipse cx="59" cy="37" rx="3" ry="2" fill="${c.m}"/>` : ""}
      <ellipse cx="50" cy="57" rx="11.5" ry="8.5" fill="${c.m}" ${S}/>
      ${c.ear === 0 ? ears : ""}
      <path d="M33 66 Q50 74 67 66" stroke="${col}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M33 66 Q50 74 67 66" ${S1} opacity=".5"/>
      <circle cx="50" cy="72.5" r="3.2" fill="#f0c25e" stroke="${INK}" stroke-width="1.1"/>
      ${eyes(mood, 41, 59, 44)}${cheeks(36, 64, 52)}
      <ellipse cx="50" cy="52.5" rx="4.8" ry="3.4" fill="${INK}"/><ellipse cx="48.6" cy="51.6" rx="1.5" ry=".9" fill="#fff" opacity=".7"/>
      <path d="M50 55.8 v2.4" ${S1}/>
      ${smallMouth(mood, 50, 59)}`;
  } else if (species === "cat") {
    g += `<path d="M72 92 C92 90 94 70 85 63" stroke="${INK}" stroke-width="9.5" fill="none" stroke-linecap="round"/>
      <path d="M72 92 C92 90 94 70 85 63" stroke="${c.f}" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${c.tabby ? `<path d="M88 80 l4 1M90 72 l4 -1M86 66 l3 -2" stroke="${c.e}" stroke-width="2" stroke-linecap="round"/>` : ""}
      ${c.point ? `<path d="M88 72 C92 68 90 64 85 63" stroke="${c.e}" stroke-width="6" fill="none" stroke-linecap="round"/>` : ""}
      <ellipse cx="50" cy="84" rx="24" ry="17" fill="${c.f}" ${S}/>
      <ellipse cx="50" cy="91" rx="18" ry="7" fill="${c.e}" opacity=".16"/>
      ${c.bib ? `<path d="M42 70 Q50 86 58 70 Q50 74 42 70Z" fill="#fbf7ef"/>` : ""}
      ${c.tabby ? `<path d="M30 82 q4 -3 8 0M62 82 q4 -3 8 0M32 90 q4 -3 7 0M61 90 q4 -3 7 0" stroke="${c.e}" stroke-width="2" fill="none" stroke-linecap="round"/>` : ""}
      <ellipse cx="41" cy="97" rx="6" ry="4" fill="${c.bib ? "#fbf7ef" : c.f}" ${S}/><ellipse cx="59" cy="97" rx="6" ry="4" fill="${c.bib ? "#fbf7ef" : c.f}" ${S}/>${toes(41, 97)}${toes(59, 97)}
      <path d="M30 40 L32 14 L48 29 Z" fill="${c.point ? c.e : c.f}" ${S}/><path d="M34 33 L35 21 L43 29Z" fill="#f1a7a0"/><path d="M33 17 l2 5" stroke="${INK}" stroke-width="1"/>
      <path d="M70 40 L68 14 L52 29 Z" fill="${c.point ? c.e : c.f}" ${S}/><path d="M66 33 L65 21 L57 29Z" fill="#f1a7a0"/><path d="M67 17 l-2 5" stroke="${INK}" stroke-width="1"/>
      <ellipse cx="50" cy="47" rx="23.5" ry="20" fill="${c.f}" ${S}/>
      ${c.point ? `<ellipse cx="50" cy="55" rx="11" ry="9" fill="${c.e}" opacity=".7"/>` : ""}
      ${c.tabby ? `<path d="M46 29 L47 36M50 28 L50 36M54 29 L53 36M28 46 l5 1M28 51 l5 0M72 46 l-5 1M72 51 l-5 0" stroke="${c.e}" stroke-width="2.2" stroke-linecap="round"/>` : ""}
      ${c.patch ? `<path d="M30 42 C32 32 42 30 46 34 C42 40 36 44 30 42Z" fill="${c.e}"/>` : ""}
      <ellipse cx="45.5" cy="55.5" rx="4.5" ry="3.2" fill="#fbf7ef" opacity=".85"/><ellipse cx="54.5" cy="55.5" rx="4.5" ry="3.2" fill="#fbf7ef" opacity=".85"/>
      ${eyes(mood, 41, 59, 46, true)}${cheeks(35, 65, 54)}
      <path d="M47.6 52.4 L52.4 52.4 L50 55.2Z" fill="#e58b8b" stroke="${INK}" stroke-width="1"/>
      ${mood === "happy" ? `<path d="M45 57 Q50 63 55 57" ${S} fill="#e8857c"/>` : mood === "sad" ? `<path d="M46.5 59.5 Q50 56.5 53.5 59.5" ${S} fill="none"/>` : `<path d="M50 55.2 Q48 58.4 45.8 57M50 55.2 Q52 58.4 54.2 57" ${S1}/>`}
      <path d="M38 53 L25 51M38 56 L25 57.5M62 53 L75 51M62 56 L75 57.5" stroke="${INK}" stroke-width=".9" stroke-linecap="round"/>
      <path d="M36 66 Q50 72 64 66" stroke="${col}" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="50" cy="71" r="2.6" fill="#f0c25e" stroke="${INK}" stroke-width="1"/>`;
  } else if (species === "horse") {
    g += `<path d="M30 100 C30 80 36 66 42 58 L62 58 C68 70 72 84 72 100 Z" fill="${c.f}" ${S}/>
      <path d="M58 64 C64 74 68 86 68 100 L60 100 C60 86 58 74 54 66Z" fill="${c.e}" opacity=".15"/>
      <path d="M38 20 C30 34 28 54 32 76 C38 64 40 48 46 34 Z" fill="${c.e}" ${S}/><path d="M34 40 q2 8 0 16M36 30 q2 8 1 14" stroke="#fff" stroke-width="1.2" opacity=".25" fill="none"/>
      <path d="M40 22 L41 6 L49 18Z" fill="${c.f}" ${S}/><path d="M42 18 L42.5 10 L46 17Z" fill="#e8a99a" opacity=".6"/><path d="M60 18 L63 6 L66 22Z" fill="${c.f}" ${S}/>
      <ellipse cx="52" cy="40" rx="16.5" ry="24" fill="${c.f}" ${S}/>
      ${c.blaze ? `<path d="M50 24 C48 36 49 47 50 54 C52 47 54 36 54 24Z" fill="#f7f2e8"/>` : ""}
      <path d="M43 18 C47 27 57 27 61 18 C56 22 49 23 43 18Z" fill="${c.e}" ${S}/>
      <ellipse cx="52" cy="59" rx="14" ry="10" fill="${c.m}" ${S}/>
      <ellipse cx="46.5" cy="60" rx="1.7" ry="2.5" fill="${INK}"/><ellipse cx="57.5" cy="60" rx="1.7" ry="2.5" fill="${INK}"/>
      <path d="M38.5 50 C42 56 62 56 65.5 50" stroke="#c0453a" stroke-width="3" fill="none"/><path d="M39 34 L39 50M65 34 L65 50" stroke="#c0453a" stroke-width="3"/>
      <circle cx="39" cy="50" r="2" fill="#f0c25e" stroke="${INK}" stroke-width="1"/><circle cx="65" cy="50" r="2" fill="#f0c25e" stroke="${INK}" stroke-width="1"/>
      ${eyes(mood, 44.5, 59.5, 38)}${mood !== "happy" ? `<path d="M41 34.5 l-1.5 -1.5M48 34.5 l1.5 -1.5M56 34.5 l-1.5 -1.5M63 34.5 l1.5 -1.5" stroke="${INK}" stroke-width="1"/>` : ""}${cheeks(41, 63, 47)}
      ${mood === "happy" ? `<path d="M46 65 Q52 70 58 65" ${S} fill="none"/>` : mood === "sad" ? `<path d="M47 67 Q52 64 57 67" ${S} fill="none"/>` : `<path d="M47.5 65.5 Q52 67 56.5 65.5" ${S1}/>`}`;
  } else if (species === "cow") {
    g += `<ellipse cx="50" cy="87" rx="30" ry="15" fill="#f8f4ec" ${S}/>
      <path d="M30 80 C36 76 42 80 40 88 C34 90 30 86 30 80Z" fill="${c.e}"/><path d="M62 84 C68 80 76 84 72 92 C66 94 62 90 62 84Z" fill="${c.e}"/>
      <ellipse cx="50" cy="93" rx="22" ry="5" fill="${INK}" opacity=".08"/>
      <path d="M33 26 C26 22 26 13 30 11 C31 17 34 21 39 23Z" fill="#efe3c4" ${S}/><path d="M67 26 C74 22 74 13 70 11 C69 17 66 21 61 23Z" fill="#efe3c4" ${S}/>
      <path d="M31 36 C20 33 13 38 15 43 C21 46 28 43 32 41Z" fill="#f8f4ec" ${S}/><path d="M29 38 C22 37 19 40 20 41.5 C24 42 28 41 30 40Z" fill="#f2b8b0"/>
      <path d="M69 36 C80 33 87 38 85 43 C79 46 72 43 68 41Z" fill="#f8f4ec" ${S}/><rect x="79" y="40" width="6" height="7" rx="1.2" fill="#f3d36b" stroke="${INK}" stroke-width="1"/>
      <ellipse cx="50" cy="43" rx="21" ry="20" fill="#f8f4ec" ${S}/>
      <path d="M53 25 C62 22 69 29 67 38 C60 41 55 35 53 25Z" fill="${c.e}"/>
      <path d="M44 22 C47 27 53 27 56 22" ${S} fill="${c.e}"/>
      <ellipse cx="50" cy="59" rx="17" ry="10" fill="#f2b8b0" ${S}/><ellipse cx="45" cy="55" rx="4" ry="1.6" fill="#fff" opacity=".45"/>
      <ellipse cx="44" cy="58" rx="2" ry="2.7" fill="#8a4b45"/><ellipse cx="56" cy="58" rx="2" ry="2.7" fill="#8a4b45"/>
      ${c.bell ? `<path d="M36 70 Q50 76 64 70" stroke="#7a5638" stroke-width="4" fill="none"/><path d="M46 74 h8 l1.5 8 h-11Z" fill="#f0c25e" ${S1}/><circle cx="50" cy="83" r="1.3" fill="${INK}"/>` : ""}
      ${eyes(mood, 41, 59, 42)}
      ${mood === "happy" ? `<path d="M45 64 Q50 68 55 64" ${S} fill="none"/>` : mood === "sad" ? `<path d="M46 66 Q50 63 54 66" ${S} fill="none"/>` : `<path d="M46.5 64.5 Q50 66 53.5 64.5" ${S1}/>`}`;
  } else {
    g += `<path d="M76 84 c7 -3 9 4 5 6 c-4 2 -6 -4 -1 -6" ${S} fill="none"/>
      <ellipse cx="50" cy="85" rx="28" ry="17" fill="#f4b9b2" ${S}/>
      <ellipse cx="50" cy="92" rx="21" ry="7" fill="#c97f78" opacity=".2"/>
      ${c.spots ? `<path d="M30 80 C34 76 40 79 38 85 C33 87 30 85 30 80Z" fill="#8a6a5e" opacity=".75"/><path d="M60 88 C65 84 72 87 69 92 C64 94 61 92 60 88Z" fill="#8a6a5e" opacity=".75"/>` : ""}
      <ellipse cx="40" cy="98" rx="6" ry="4" fill="#f4b9b2" ${S}/><ellipse cx="60" cy="98" rx="6" ry="4" fill="#f4b9b2" ${S}/><path d="M40 95 v5M60 95 v5" ${S1}/>
      <ellipse cx="50" cy="46" rx="23" ry="21" fill="#f6c3bc" ${S}/>
      ${c.spots ? `<path d="M58 30 C64 28 69 33 67 39 C62 40 58 36 58 30Z" fill="#8a6a5e" opacity=".7"/>` : ""}
      <path d="M30 33 L27 15 L44 25 Z" fill="#f4b9b2" ${S}/><path d="M30 29 L29 20 L39 26Z" fill="#e89990" opacity=".7"/>
      <path d="M70 33 L73 15 L56 25 Z" fill="#f4b9b2" ${S}/><path d="M70 29 L71 20 L61 26Z" fill="#e89990" opacity=".7"/>
      <ellipse cx="50" cy="55" rx="10.5" ry="7.5" fill="#ee9e98" ${S}/><ellipse cx="47" cy="52.5" rx="3" ry="1.2" fill="#fff" opacity=".5"/>
      <ellipse cx="46.5" cy="55.5" rx="1.7" ry="2.6" fill="#9b5450"/><ellipse cx="53.5" cy="55.5" rx="1.7" ry="2.6" fill="#9b5450"/>
      ${eyes(mood, 40, 60, 42)}${cheeks(34, 66, 52)}
      ${mood === "happy" ? `<path d="M45 64 Q50 69 55 64" ${S} fill="none"/>` : mood === "sad" ? `<path d="M46 66 Q50 63 54 66" ${S} fill="none"/>` : `<path d="M47 64.5 Q50 66 53 64.5" ${S1}/>`}`;
  }
  return g;
}

/* ---------------- tu personaje (120x140) ---------------- */
function avatarG(eq, mood) {
  mood = mood || "neutral";
  const hcI = findItem("hairColor", eq.hairColor) || SHOP.hairColor.items[0], hc = hcI.c, sk = (findItem("skin", eq.skin) || SHOP.skin.items[1]).c;
  const H = `fill="${hc}" ${S}`;
  const shine = `<path d="M46 33 Q53 28.5 61 29.5" stroke="#fff" stroke-width="2.2" opacity=".32" fill="none" stroke-linecap="round"/>`;
  const fringeShort = `<path d="M36 52 C34 32 46 26 60 26 C76 26 86 34 84 52 C80 42 72 38 62 38 C52 38 42 42 36 52 Z" ${H}/>`;
  const hairBack = {
    melena: `<path d="M34 52 C30 30 44 24 60 24 C78 24 90 32 86 54 L90 102 C80 106 74 100 76 86 L44 86 C46 100 40 106 30 102 Z" ${H}/>`,
    media: `<path d="M34 54 C30 30 44 24 60 24 C78 24 90 30 86 54 L88 78 C80 83 74 79 74 72 L46 72 C46 79 40 83 32 78Z" ${H}/>`,
    coleta: `<path d="M80 40 C100 44 102 72 90 90 C88 74 84 62 78 54 Z" ${H}/><path d="M86 48 q6 12 2 28" stroke="#fff" stroke-width="1.6" opacity=".25" fill="none"/>`,
    mono: `<circle cx="60" cy="23" r="10" ${H}/><path d="M54 20 q6 -5 12 0" stroke="#fff" stroke-width="1.6" opacity=".3" fill="none"/>`,
    trenzas: [36, 84].map(x => [0, 1, 2, 3].map(i => `<ellipse cx="${x + (x < 60 ? -2 : 2) * i / 2}" cy="${66 + i * 9}" rx="5" ry="6" ${H}/>`).join("") + `<path d="M${x - 3} ${103} h6" stroke="#c0453a" stroke-width="3" stroke-linecap="round"/>`).join("")
  }[eq.hair] || "";
  const hairFront = {
    corto: fringeShort + shine,
    rapado: `<path d="M37 50 C36 34 46 29 60 29 C74 29 84 34 83 50 C76 42 68 40 60 40 C52 40 44 42 37 50 Z" ${H} opacity=".92"/>`,
    melena: `<path d="M36 56 C34 32 48 26 62 26 C78 26 86 36 84 56 C78 44 70 36 56 38 C48 40 40 46 36 56Z" ${H}/>` + shine,
    media: `<path d="M36 52 C34 30 48 26 60 26 C74 26 86 30 84 52 C78 46 70 44 60 44 C50 44 42 46 36 52Z" ${H}/>` + shine,
    flequillo: `<path d="M36 54 C33 30 50 24 66 26 C80 28 88 38 84 54 C80 44 72 40 64 42 C56 44 46 48 36 54Z" ${H}/>` + shine,
    coleta: `<path d="M36 52 C34 32 46 26 60 26 C76 26 86 34 84 52 C78 40 68 37 58 38 C50 39 42 43 36 52 Z" ${H}/>` + shine,
    mono: `<path d="M36 52 C34 33 46 28 60 28 C76 28 86 35 84 52 C78 42 70 39 60 39 C50 39 42 43 36 52 Z" ${H}/>`,
    trenzas: `<path d="M36 54 C34 32 46 26 60 26 C76 26 86 34 84 54 C80 42 70 38 60 38 C50 38 40 42 36 54 Z" ${H}/><path d="M60 27 V38" ${S1}/>`,
    tupe: `<path d="M36 52 C33 30 46 22 62 20 C74 18 89 24 86 36 C88 44 85 50 84 52 C80 40 70 36 58 37 C48 38 41 44 36 52Z" ${H}/><path d="M64 24 c6 -2 10 2 8 6" ${S1}/>` + shine,
    rizos: [[40, 42, 9], [47, 32, 10], [60, 27, 10.5], [73, 32, 10], [80, 42, 9], [85, 52, 7], [35, 52, 7]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" ${H}/><path d="M${x - 3} ${y - 2} q3 -3 6 0" stroke="#fff" stroke-width="1.2" opacity=".28" fill="none"/>`).join(""),
    cresta: `<path d="M54 36 L50 14 L58 22 L61 6 L65 22 L73 13 L68 36 Z" ${H}/>`,
    calvo: `<path d="M44 34 q4 -3 9 -3" stroke="#fff" stroke-width="2" opacity=".5" fill="none" stroke-linecap="round"/>`
  }[eq.hair] || "";

  const body = `M18 140 C18 108 34 91 60 89 C86 91 102 108 102 140 Z`;
  const shade = `<path d="M18 140 C18 120 24 108 32 101 C30 114 30 128 32 140Z" fill="${INK}" opacity=".08"/><path d="M102 140 C102 120 96 108 88 101 C90 114 90 128 88 140Z" fill="${INK}" opacity=".08"/>`;
  const o = eq.outfit, oc = (findItem("outfit", o) || {}).c;
  let back = "", torso = "";
  if (o === "bata") torso = `<path d="M49 90 L60 108 L71 90 Z" fill="#9cc0cf" ${S}/><path d="${body}" fill="#fbf7ef" ${S}/><path d="M49 90 L60 108 L71 90" fill="#9cc0cf" ${S}/>
      <path d="M49 90 L45 140M71 90 L75 140" ${S1}/><circle cx="44.5" cy="118" r="1.4" fill="${INK}"/><circle cx="44" cy="130" r="1.4" fill="${INK}"/>
      <rect x="77" y="116" width="13" height="10" rx="2" fill="#fbf7ef" ${S}/><path d="M81 112 v6" stroke="#4f6fae" stroke-width="2" stroke-linecap="round"/><path d="M85 113 v5" stroke="#c0453a" stroke-width="2" stroke-linecap="round"/>
      <rect x="28" y="106" width="14" height="7" rx="1.5" fill="#f3e6cf" stroke="${INK}" stroke-width="1"/><path d="M31 109.5 h8" stroke="#c9a77d" stroke-width="1.2"/>`;
  else if (o && o.startsWith("pijama")) torso = `<path d="${body}" fill="${oc}" ${S}/><path d="M50 90 L60 104 L70 90 Z" fill="${sk}" ${S}/><rect x="70" y="110" width="12" height="9" rx="2" fill="${oc}" ${S}/><path d="M73 107 v5" stroke="#4f6fae" stroke-width="1.8" stroke-linecap="round"/><path d="M60 104 V140" stroke="${INK}" stroke-width="1" opacity=".25"/>`;
  else if (o === "jersey") torso = `<path d="${body}" fill="#b8604a" ${S}/>${[104, 114, 124, 134].map(y => `<path d="M${y > 120 ? 20 : 26} ${y} Q60 ${y + 4} ${y > 120 ? 100 : 94} ${y}" stroke="#d98b72" stroke-width="2" stroke-dasharray="2 3" fill="none"/>`).join("")}<path d="M48 91 Q60 99 72 91" ${S} fill="#a14f3b"/>`;
  else if (o === "cardigan") torso = `<path d="${body}" fill="#9c7bb0" ${S}/><path d="M52 90 L60 100 L68 90 L66 140 L54 140Z" fill="#fbf7ef" ${S}/><path d="M60 100 L60 140" ${S1}/>${[110, 122, 134].map(y => `<circle cx="51" cy="${y}" r="1.8" fill="#f3d36b" stroke="${INK}" stroke-width=".8"/>`).join("")}<path d="M28 132 h14M78 132 h14" stroke="#7d5f92" stroke-width="2.5"/>`;
  else if (o === "peto") torso = `<path d="${body}" fill="#c95b4a" ${S}/><path d="M30 104 L90 104M26 118 L94 118M42 92 L36 140M60 90 L60 140M78 92 L84 140" stroke="#e48d7b" stroke-width="1.5"/><path d="M43 140 L45 108 L75 108 L77 140Z" fill="#5f84a8" ${S}/><path d="M45 110 L40 92M75 110 L80 92" stroke="#5f84a8" stroke-width="4" stroke-linecap="round"/><circle cx="47" cy="112" r="1.8" fill="#f0c25e"/><circle cx="73" cy="112" r="1.8" fill="#f0c25e"/><rect x="53" y="116" width="14" height="10" rx="2" fill="#6f93b6" ${S}/>`;
  else if (o === "sudadera") torso = `<path d="M40 94 Q60 108 80 94 L78 90 Q60 100 42 90Z" fill="#c99847" ${S}/><path d="${body}" fill="#e2b45a" ${S}/><path d="M42 93 Q60 104 78 93" ${S} fill="none"/><path d="M54 96 v10M66 96 v10" stroke="#fbf7ef" stroke-width="1.6" stroke-linecap="round"/><path d="M40 140 L43 126 Q60 120 77 126 L80 140Z" fill="#d6a74e" ${S}/>
      <g fill="${INK}" opacity=".75"><ellipse cx="60" cy="115" rx="4" ry="3.2"/><circle cx="54.5" cy="109.5" r="1.6"/><circle cx="58.5" cy="107.5" r="1.6"/><circle cx="62.5" cy="107.5" r="1.6"/><circle cx="66" cy="110" r="1.6"/></g>`;
  else if (o === "hawaiana") torso = `<path d="${body}" fill="#4f9e94" ${S}/><path d="M50 90 L60 100 L70 90" fill="${sk}" ${S}/>
      ${[[34, 112], [80, 108], [50, 128], [72, 130], [90, 128], [28, 132], [62, 114]].map(([x, y], i) => `<g transform="translate(${x} ${y})"><circle r="4.5" fill="${i % 2 ? "#f3d36b" : "#f29b8a"}"/><circle r="1.5" fill="#fff6d8"/><path d="M4 2 q4 1 5 4" stroke="#2f7a6f" stroke-width="1.5" fill="none"/></g>`).join("")}
      <path d="M60 100 L60 140" ${S1}/>`;
  else if (o === "traje") torso = `<path d="${body}" fill="#3f4a5c" ${S}/><path d="M50 90 L60 114 L70 90Z" fill="#fbf7ef" ${S}/><path d="M57.5 95 L62.5 95 L63.5 111 L60 116 L56.5 111Z" fill="#b8473a" ${S}/><path d="M50 90 L54 120M70 90 L66 120" ${S1}/><path d="M76 108 l6 -2 l1 3 l-6 2Z" fill="#fbf7ef"/>`;
  else if (o === "capa") { back = `<path d="M8 140 C12 104 30 86 60 84 C90 86 108 104 112 140Z" fill="#c0453a" ${S}/>`; torso = `<path d="${body}" fill="#4a64a3" ${S}/><circle cx="60" cy="114" r="9" fill="#f0c25e" ${S}/><g fill="${INK}"><ellipse cx="60" cy="116.5" rx="3" ry="2.4"/><circle cx="56.2" cy="112.4" r="1.2"/><circle cx="59" cy="110.8" r="1.2"/><circle cx="61.9" cy="110.8" r="1.2"/><circle cx="64.4" cy="112.6" r="1.2"/></g><path d="M44 92 L52 89M76 92 L68 89" stroke="#c0453a" stroke-width="4" stroke-linecap="round"/>`; }

  const neckAcc = {
    esteto: `<path d="M48 90 C46 106 52 116 60 116 C68 116 74 106 72 90" stroke="#55626b" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="60" cy="118" r="4.5" fill="#c9d3d9" ${S}/><circle cx="59" cy="117" r="1.4" fill="#fff" opacity=".7"/>`,
    panuelo: `<path d="M47 89 L73 89 L60 103 Z" fill="#c0453a" ${S}/><circle cx="56" cy="93" r="1" fill="#fff"/><circle cx="63" cy="95" r="1" fill="#fff"/><circle cx="60" cy="99" r="1" fill="#fff"/>`,
    collar: [0, 1, 2, 3, 4, 5, 6].map(i => { const t = i / 6, x = 48 + 24 * t, y = 92 + 9 * Math.sin(Math.PI * t); return `<circle cx="${x}" cy="${y}" r="2.2" fill="${["#f29b8a", "#f3d36b", "#9cc0cf"][i % 3]}" stroke="${INK}" stroke-width=".9"/>`; }).join(""),
    pajarita: `<path d="M60 94 L50 88 L50 100 Z M60 94 L70 88 L70 100Z" fill="#b8473a" ${S}/><circle cx="60" cy="94" r="2.6" fill="#a03c31" ${S}/>`,
    bufanda: `<path d="M43 88 Q60 97 77 88 L78 96 Q60 106 42 96Z" fill="#5f8a55" ${S}/><path d="M66 98 L70 124 L62 125 L60 100Z" fill="#5f8a55" ${S}/><path d="M48 92 v6M54 94 v6M62 95 v6M70 93 v6M63 118 h6" stroke="#a9c49a" stroke-width="1.6"/>`
  }[eq.neck] || "";
  const faceAcc = {
    pecas: [[45, 61], [48, 63.5], [43, 64.5], [75, 61], [72, 63.5], [77, 64.5]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9" fill="#a86a48"/>`).join(""),
    lunar: `<circle cx="70" cy="67" r="1.1" fill="${INK}"/>`,
    bigote: `<path d="M52 64.5 Q56 60.5 60 63.5 Q64 60.5 68 64.5 Q64 66.5 60 65 Q56 66.5 52 64.5Z" fill="${hc}" ${S1}/>`,
    perilla: `<path d="M55 74 Q60 81 65 74 Q60 76.5 55 74Z" fill="${hc}" ${S1}/>`,
    barba: `<path d="M37 58 C37 76 48 83 60 83 C72 83 83 76 83 58 C79 70 70 75 60 75 C50 75 41 70 37 58Z" fill="${hc}" ${S}/>`
  }[eq.face] || "";
  const eyeAcc = {
    gafas: `<circle cx="51" cy="57" r="6.5" fill="#fff" fill-opacity=".25" ${S}/><circle cx="69" cy="57" r="6.5" fill="#fff" fill-opacity=".25" ${S}/><path d="M57.5 56.5 L62.5 56.5" ${S}/>`,
    pasta: `<rect x="43" y="51.5" width="16" height="11" rx="3" fill="#fff" fill-opacity=".2" stroke="#7a3b2e" stroke-width="3"/><rect x="61" y="51.5" width="16" height="11" rx="3" fill="#fff" fill-opacity=".2" stroke="#7a3b2e" stroke-width="3"/><path d="M59 55 L61 55" stroke="#7a3b2e" stroke-width="3"/>`,
    gafas_sol: `<rect x="43.5" y="51.5" width="15" height="10" rx="4" fill="#2b2a2e" ${S}/><rect x="61.5" y="51.5" width="15" height="10" rx="4" fill="#2b2a2e" ${S}/><path d="M58.5 55 L61.5 55" ${S}/><path d="M46 54 l4 -1M64 54 l4 -1" stroke="#fff" stroke-width="1.2" opacity=".6"/>`,
    gafas_corazon: [51, 69].map(x => `<path d="M${x} 62 C${x - 9} 56 ${x - 6} 49 ${x} 53 C${x + 6} 49 ${x + 9} 56 ${x} 62Z" fill="#e8708f" fill-opacity=".85" ${S}/>`).join("") + `<path d="M57 55 L63 55" ${S}/>`
  }[eq.eyes] || "";
  const headAcc = {
    gorro: `<path d="M35 50 C34 30 46 23 60 23 C76 23 86 30 85 50 C76 45 44 45 35 50Z" fill="#7fb2cf" ${S}/>${[[46, 34], [56, 30], [66, 31], [75, 37], [52, 40], [68, 41]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff"/>`).join("")}`,
    flor: `<g transform="translate(79 35)">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="3.6" ry="5.5" transform="rotate(${a}) translate(0 -5)" fill="#f29b8a" ${S1}/>`).join("")}<circle r="3" fill="#f3d36b" ${S}/></g>`,
    diadema: `<path d="M37 46 C40 28 80 28 83 46" stroke="#e58aa6" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M72 30 l-7 -5 v10Z M72 30 l7 -5 v10Z" fill="#e58aa6" ${S1}/><circle cx="72" cy="30" r="2" fill="#c9607e"/>`,
    lana: `<path d="M34 50 C34 26 86 26 86 50 Z" fill="#c95b4a" ${S}/><path d="M44 30 v14M52 28 v16M60 27 v17M68 28 v16M76 30 v14" stroke="#a8483a" stroke-width="1.4"/><rect x="32" y="44" width="56" height="9" rx="4" fill="#a8483a" ${S}/><circle cx="60" cy="24" r="6.5" fill="#f3e6cf" ${S}/>`,
    boina: `<path d="M34 44 C34 28 52 22 66 24 C82 26 92 34 86 42 C76 46 46 48 34 44Z" fill="#3f4a5c" ${S}/><path d="M62 24 l1 -5" ${S}/>`,
    paja: `<ellipse cx="60" cy="40" rx="37" ry="8" fill="#e2c27a" ${S}/><path d="M42 40 C42 22 78 22 78 40 Z" fill="#e8cc89" ${S}/><path d="M42 36 C52 39 68 39 78 36" stroke="#c0453a" stroke-width="3.5" fill="none"/><path d="M30 41 h8M84 41 h6" stroke="#c9a65a" stroke-width="1"/>`,
    corona: `<path d="M42 36 L43 18 L51 28 L60 13 L69 28 L77 18 L78 36Z" fill="#f1c75b" ${S}/><circle cx="60" cy="29" r="2.6" fill="#c0453a"/><circle cx="48" cy="31" r="1.6" fill="#4f6fae"/><circle cx="72" cy="31" r="1.6" fill="#5f8a55"/>`
  }[eq.head] || "";
  const earAcc = {
    aros: `<circle cx="35" cy="66" r="3.2" fill="none" stroke="#e2b65e" stroke-width="1.8"/><circle cx="85" cy="66" r="3.2" fill="none" stroke="#e2b65e" stroke-width="1.8"/>`,
    perlas: `<circle cx="35" cy="64.5" r="2.2" fill="#fbf7ef" stroke="${INK}" stroke-width=".9"/><circle cx="85" cy="64.5" r="2.2" fill="#fbf7ef" stroke="${INK}" stroke-width=".9"/>`,
    estrellas: [35, 85].map(x => `<path d="M${x} 61.5l1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4Z" fill="#f3d36b" stroke="${INK}" stroke-width=".8"/>`).join("")
  }[eq.ears] || "";

  const eyesNow = mood === "happy"
    ? `<path d="M47.5 57 Q51 53.5 54.5 57M65.5 57 Q69 53.5 72.5 57" ${S} fill="none"/>`
    : `<ellipse cx="51" cy="57" rx="2.5" ry="3.1" fill="${INK}"/><ellipse cx="69" cy="57" rx="2.5" ry="3.1" fill="${INK}"/><circle cx="52" cy="55.8" r=".9" fill="#fff"/><circle cx="70" cy="55.8" r=".9" fill="#fff"/>`;
  const mY = eq.face === "bigote" ? 1.2 : 0;
  const m = mood === "sad" ? `<path d="M55 ${67 + mY} Q60 ${63.5 + mY} 65 ${67 + mY}" ${S} fill="none"/>` : `<path d="M54 ${64.5 + mY} Q60 ${70 + mY} 66 ${64.5 + mY}" ${S} fill="${mood === "happy" ? "#e8857c" : "none"}"/>`;
  const brows = mood === "sad" ? `<path d="M46.5 50 L54 48M66 48 L73.5 50" stroke="${hc}" stroke-width="2.4" stroke-linecap="round"/>` : `<path d="M47 49 L54 48M66 48 L73 49" stroke="${hc}" stroke-width="2.4" stroke-linecap="round"/>`;
  return `${back}${hairBack}${torso}${shade}
    <path d="M53 76 L53 90 L67 90 L67 76Z" fill="${sk}" ${S}/><path d="M53 80 Q60 84 67 80 L67 76 L53 76Z" fill="${INK}" opacity=".1"/>
    ${neckAcc}
    <circle cx="36" cy="58" r="5" fill="${sk}" ${S}/><path d="M35 56 q2 2 0 4" ${S1}/><circle cx="84" cy="58" r="5" fill="${sk}" ${S}/><path d="M85 56 q-2 2 0 4" ${S1}/>
    ${earAcc}
    <circle cx="60" cy="55" r="24" fill="${sk}" ${S}/>
    ${eq.face === "barba" ? faceAcc : ""}
    ${eyesNow}${brows}${cheeks(45, 75, 64)}<path d="M60 59 q1.8 2.4 -.6 3.4" ${S1}/>
    ${eq.face && eq.face !== "barba" && eq.face !== "bigote" ? faceAcc : ""}${m}${eq.face === "bigote" ? faceAcc : ""}
    ${hairFront}${eyeAcc}${headAcc}`;
}
function avatarSVG(eq, mood, cls, vb) { return `<svg class="${cls || ""}" viewBox="${vb || "0 0 120 140"}" aria-hidden="true">${avatarG(eq, mood || "neutral")}</svg>`; }

/* ---------------- la clínica (360x240) ---------------- */
function windowView(id, k) {
  const sky = { campo: "#cfe7ee", ciudad: "#d6e4ec", mar: "#cde6f0", otono: "#f6dcc0", nieve: "#e3ecf0", noche: "#26304a" }[id] || "#cfe7ee";
  let v = `<rect x="20" y="24" width="72" height="68" fill="${sky}"/>`;
  if (id === "campo") v += `<circle cx="72" cy="40" r="7" fill="#f6d77a"/><path d="M20 70 q12 -12 26 -4 q12 -10 24 -2 q10 -6 22 0 L92 92 L20 92Z" fill="#a9c49a"/><path d="M20 80 q20 -8 40 0 q18 -6 32 0 L92 92 L20 92Z" fill="#8fae8b"/><circle cx="36" cy="66" r="5" fill="#6f9e6b"/><path d="M36 70 v6" stroke="#7a5638" stroke-width="2"/><path d="M30 36 q3 -3 6 0 q3 -3 6 0" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  if (id === "ciudad") v += `<circle cx="34" cy="38" r="6" fill="#f6d77a"/>${[[22, 60, 12], [36, 50, 10], [48, 64, 12], [62, 46, 14], [78, 58, 14]].map(([x, y, w], i) => `<rect x="${x}" y="${y}" width="${w}" height="${92 - y}" fill="${["#b9a28c", "#c9b6a0", "#a9917c", "#bfa58e", "#d0bba5"][i]}"/>${[0, 1, 2].map(r => `<rect x="${x + 3}" y="${y + 5 + r * 9}" width="3" height="4" fill="#fbf2d8"/><rect x="${x + w - 6}" y="${y + 5 + r * 9}" width="3" height="4" fill="#fbf2d8"/>`).join("")}`).join("")}`;
  if (id === "mar") v += `<circle cx="70" cy="42" r="7" fill="#f6d77a"/><rect x="20" y="64" width="72" height="28" fill="#7fb2cf"/><path d="M22 70 q4 -2 8 0M44 76 q4 -2 8 0M66 70 q4 -2 8 0M30 84 q4 -2 8 0M60 86 q4 -2 8 0" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M38 64 l8 -14 v14Z" fill="#fbf7ef" ${S1}/><path d="M34 64 h16 l-3 4 h-10Z" fill="#c95b4a"/><path d="M20 88 q20 -6 40 0 q16 -4 32 0 V92 H20Z" fill="#efdcb6"/>`;
  if (id === "otono") v += `<circle cx="72" cy="38" r="6" fill="#f2b45a"/><path d="M20 78 q24 -8 48 0 q12 -4 24 0 V92 H20Z" fill="#c9a65a"/>${[[34, 62, "#d9733f"], [56, 58, "#e8a03f"], [78, 64, "#c0453a"]].map(([x, y, c]) => `<path d="M${x} ${y + 12} v10" stroke="#7a5638" stroke-width="2.4"/><circle cx="${x}" cy="${y}" r="10" fill="${c}"/><circle cx="${x - 5}" cy="${y + 4}" r="6" fill="${c}"/>`).join("")}<path d="M44 44 l2 2M60 40 l2 3" stroke="#d9733f" stroke-width="2" stroke-linecap="round"/>`;
  if (id === "nieve") v += `<path d="M20 72 q16 -12 34 -2 q16 -10 38 2 V92 H20Z" fill="#fbfdff"/>${[[34, 60], [52, 56], [76, 62]].map(([x, y]) => `<path d="M${x} ${y} l-7 14 h14Z M${x} ${y + 8} l-8 14 h16Z" fill="#5f8a6b"/><path d="M${x - 3} ${y + 8} h6" stroke="#fbfdff" stroke-width="2"/>`).join("")}${[[28, 34], [46, 30], [62, 40], [84, 32], [40, 48], [74, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fff"/>`).join("")}`;
  if (id === "noche") v += `<circle cx="70" cy="42" r="8" fill="#f3e6cf"/><circle cx="73.5" cy="40" r="7" fill="#26304a"/>${[[30, 34], [44, 46], [56, 32], [36, 58], [84, 60], [50, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.1" fill="#f3e6cf"/>`).join("")}<path d="M20 80 q20 -8 40 0 q16 -6 32 0 V92 H20Z" fill="#1c2438"/>`;
  return v;
}
function curtainsSVG(id, k) {
  if (!id) return "";
  const it = findItem("curtains", id); const fill = id === "cuadros" ? `url(#${k}g)` : it.c;
  return `${id === "cuadros" ? `<pattern id="${k}g" width="8" height="8" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="#fbf2e8"/><rect width="4" height="8" fill="${it.c}" opacity=".55"/><rect width="8" height="4" fill="${it.c}" opacity=".55"/></pattern>` : ""}
    <path d="M16 20 C22 40 22 70 14 96 L26 96 C32 70 30 40 30 20Z" fill="${fill}" ${S}/><path d="M22 24 C25 44 25 70 20 94" stroke="${INK}" stroke-width="1" opacity=".25" fill="none"/>
    <path d="M96 20 C90 40 90 70 98 96 L86 96 C80 70 82 40 82 20Z" fill="${fill}" ${S}/><path d="M90 24 C87 44 87 70 92 94" stroke="${INK}" stroke-width="1" opacity=".25" fill="none"/>
    <path d="M18 62 q6 4 12 0M82 62 q6 4 12 0" stroke="#c9a65a" stroke-width="2.4" fill="none"/>`;
}
const POT = (x, y, w, h, c) => `<path d="M${x} ${y} h${w} l-${w * .12} ${h} h-${w * .76}Z" fill="${c || "#c9764e"}" ${S}/><rect x="${x - 2}" y="${y - 4}" width="${w + 4}" height="5" rx="1.5" fill="${c || "#c9764e"}" ${S}/>`;
const DECOR = {
  ceiling: {
    lampara: () => `<path d="M262 0 L262 26" stroke="${INK}" stroke-width="1.4"/><ellipse cx="262" cy="60" rx="46" ry="22" fill="#ffe7a8" opacity=".28"/><path d="M244 42 Q262 18 280 42 Z" fill="#c95b4a" ${S}/><path d="M250 36 Q262 24 274 36" stroke="#fff" stroke-width="1.4" opacity=".3" fill="none"/><circle cx="262" cy="43" r="3.5" fill="#fff3c4" ${S1}/>`,
    banderines: () => { let s = `<path d="M0 6 Q90 26 180 8 Q270 26 360 6" stroke="${INK}" stroke-width="1.2" fill="none"/>`; for (let x = 10; x < 360; x += 24) { const t = (x % 180) / 180, y = 7 + 18 * Math.sin(Math.PI * t) * .9; s += `<path d="M${x - 8} ${y} L${x + 8} ${y + 1} L${x} ${y + 15}Z" fill="${["#e6a77f", "#a9c49a", "#f3d36b", "#9cc0cf", "#eab3ae"][(x / 24 | 0) % 5]}" ${S1}/>`; } return s; },
    farolillos: () => [[104, 16, "#f29b8a"], [172, 13, "#f3d36b"], [242, 30, "#9cc0cf"], [276, 18, "#a9c49a"]].map(([x, y, c]) => `<path d="M${x} 0 V${y - 10}" stroke="${INK}" stroke-width="1.2"/><ellipse cx="${x}" cy="${y + 4}" rx="18" ry="16" fill="#ffe7a8" opacity=".25"/><ellipse cx="${x}" cy="${y}" rx="10" ry="11" fill="${c}" ${S}/><path d="M${x - 9} ${y - 3} h18M${x - 9} ${y + 3} h18" stroke="${INK}" stroke-width="1" opacity=".4"/><rect x="${x - 4}" y="${y - 13}" width="8" height="3" fill="${INK}"/><rect x="${x - 4}" y="${y + 10}" width="8" height="3" fill="${INK}"/>`).join(""),
    guirnalda: () => `<path d="M0 12 Q90 34 180 14 Q270 34 360 12" stroke="${INK}" stroke-width="1.3" fill="none"/>${[22, 54, 90, 126, 158, 202, 236, 272, 306, 340].map((x, i) => { const y = x < 180 ? 12 + 22 * Math.sin(Math.PI * x / 180) * .9 : 14 + 20 * Math.sin(Math.PI * (x - 180) / 180) * .9; const c = ["#f3d36b", "#f29b8a", "#9cc0cf", "#a9c49a"][i % 4]; return `<circle cx="${x}" cy="${y + 4}" r="7" fill="${c}" opacity=".3"/><ellipse cx="${x}" cy="${y + 4}" rx="2.6" ry="3.6" fill="${c}" ${S1}/>`; }).join("")}`,
    macrame: () => [[238, 42], [280, 26]].map(([x, y]) => `<path d="M${x} 0 L${x - 10} ${y} M${x} 0 L${x + 10} ${y} M${x} 0 L${x} ${y}" stroke="#c9a65a" stroke-width="1.4"/>${POT(x - 10, y, 20, 12, "#efe3cf")}<path d="M${x - 8} ${y - 2} q-6 14 -2 26M${x} ${y - 3} q2 16 -3 30M${x + 8} ${y - 2} q6 12 2 22" stroke="#6f9e6b" stroke-width="2.2" fill="none" stroke-linecap="round"/>${[[x - 12, y + 10], [x - 9, y + 20], [x + 1, y + 16], [x - 3, y + 26], [x + 10, y + 12], [x + 9, y + 20]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="3.4" ry="2.2" fill="#7fae78" ${S1}/>`).join("")}`).join("")
  },
  wallL: {
    diploma: () => `${SH(137, 59, 22, 2, .12)}<rect x="114" y="26" width="46" height="32" rx="2" fill="#b58550" ${S}/><rect x="119" y="31" width="36" height="22" fill="#fbf4e3"/><path d="M124 37 h26M124 42 h18M124 47 h12" stroke="#c9b48e" stroke-width="1.6" stroke-linecap="round"/><circle cx="148" cy="47" r="3.4" fill="#c0453a"/><path d="M146 50 l-1 5M150 50 l1 5" stroke="#c0453a" stroke-width="1.6"/>`,
    cuadro: () => `<rect x="112" y="24" width="50" height="36" rx="2" fill="#7a5638" ${S}/><rect x="116" y="28" width="42" height="28" fill="#cfe0e6"/><path d="M116 56 L128 40 L137 49 L145 37 L158 56Z" fill="#8fae8b"/><path d="M143 40 l2 -3 2 3Z" fill="#fff"/><circle cx="123" cy="35" r="3" fill="#f3d36b"/><path d="M116 56 q20 -6 42 0" fill="#6f9e6b"/>`,
    espejo: () => `<circle cx="137" cy="44" r="20" fill="#c9a65a" ${S}/><circle cx="137" cy="44" r="15" fill="#dfeef2" ${S1}/><path d="M128 38 l8 -8M131 44 l12 -12" stroke="#fff" stroke-width="2.2" opacity=".7" stroke-linecap="round"/><path d="M137 20 v4" ${S}/>`,
    galeria: () => [[112, 26, 22, 18, "dog"], [138, 24, 24, 26, "cat"], [114, 48, 18, 14, "pig"]].map(([x, y, w, h, sp]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" fill="#fbf4e3" ${S}/><svg x="${x + 2}" y="${y + 2}" width="${w - 4}" height="${h - 4}" viewBox="10 10 80 70">${animalSVG(sp, "Foto" + sp, "happy")}</svg>`).join("") + `<path d="M140 54 h20 v9 h-20Z" fill="#f3d36b" ${S1}/><path d="M143 58.5 h14" stroke="${INK}" stroke-width="1" opacity=".5"/>`,
    corcho: () => `<rect x="110" y="24" width="56" height="38" rx="2" fill="#c9a26f" ${S}/><rect x="114" y="28" width="48" height="30" fill="#d9b585"/><rect x="117" y="31" width="14" height="12" fill="#fbf4e3" transform="rotate(-6 124 37)"/><rect x="134" y="30" width="12" height="10" fill="#f3d36b"/><rect x="148" y="33" width="12" height="14" fill="#cfe7ee" transform="rotate(5 154 40)"/><rect x="122" y="45" width="16" height="10" fill="#f6c3bc"/><path d="M137 34 h6M137 36.5 h5" stroke="${INK}" stroke-width=".8"/>${[[124, 32], [140, 31], [154, 34], [130, 46]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#c0453a"/>`).join("")}`
  },
  wallC: {
    reloj: () => `<circle cx="190" cy="40" r="14" fill="#fbf4e3" ${S}/><circle cx="190" cy="40" r="11" fill="none" stroke="${INK}" stroke-width=".8" opacity=".4"/><path d="M190 40 L190 31M190 40 L196 43" ${S}/><circle cx="190" cy="40" r="1.6" fill="${INK}"/>${[0, 90, 180, 270].map(a => `<circle cx="${190 + 9.5 * Math.cos(a * Math.PI / 180)}" cy="${40 + 9.5 * Math.sin(a * Math.PI / 180)}" r=".9" fill="${INK}"/>`).join("")}`,
    calendario: () => `<rect x="176" y="26" width="28" height="34" rx="2" fill="#fbf4e3" ${S}/><rect x="176" y="26" width="28" height="9" rx="2" fill="#c0453a" ${S}/><circle cx="182" cy="26" r="1.4" fill="${INK}"/><circle cx="198" cy="26" r="1.4" fill="${INK}"/>${[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c2 => `<rect x="${180 + c2 * 5.5}" y="${39 + r * 5}" width="3" height="3" fill="${r === 2 && c2 === 1 ? "#c0453a" : "#c9b48e"}"/>`).join("")).join("")}`,
    huella: () => `<rect x="174" y="24" width="32" height="32" rx="2" fill="#a87447" ${S}/><rect x="178" y="28" width="24" height="24" fill="#fbf4e3"/><g fill="#c95b4a"><ellipse cx="190" cy="43" rx="5" ry="4"/><circle cx="184.5" cy="37" r="2"/><circle cx="188.5" cy="34.5" r="2"/><circle cx="192.5" cy="34.5" r="2"/><circle cx="196" cy="37.5" r="2"/></g>`,
    cuco: () => `<path d="M174 34 L190 20 L206 34Z" fill="#7a5638" ${S}/><rect x="177" y="33" width="26" height="26" fill="#b58550" ${S}/><circle cx="190" cy="45" r="7" fill="#fbf4e3" ${S1}/><path d="M190 45 v-4.5M190 45 l3 1.6" stroke="${INK}" stroke-width="1.2"/><rect x="186" y="26" width="8" height="6" fill="#3a2a22"/><circle cx="190" cy="29" r="2" fill="#f3d36b"/><path d="M184 59 v12M196 59 v8" stroke="${INK}" stroke-width="1"/><path d="M182 71 h4 l-.5 5 h-3Z M194 67 h4 l-.5 5 h-3Z" fill="#c9a65a" ${S1}/><path d="M177 40 q-4 6 0 12M203 40 q4 6 0 12" stroke="#5f8a55" stroke-width="2" fill="none"/>`
  },
  wallR: {
    anatomia: () => `<rect x="296" y="22" width="48" height="62" rx="2" fill="#fbf4e3" ${S}/><path d="M306 60 C306 48 316 42 326 44 C330 38 336 40 336 46 C334 50 332 52 330 52 L330 72 M312 60 L312 72M322 62 L322 72" ${S} fill="none"/><circle cx="333" cy="44" r="1" fill="${INK}"/><path d="M302 30 h20" stroke="#c0453a" stroke-width="2" stroke-linecap="round"/><path d="M302 78 h14M318 78 h8" stroke="#c9b48e" stroke-width="1.6" stroke-linecap="round"/><circle cx="318" cy="52" r="3" fill="#e58b8b" opacity=".7"/>`,
    gatitos: () => `<rect x="296" y="22" width="48" height="62" rx="2" fill="#f6dccb" ${S}/><svg x="300" y="28" width="40" height="40" viewBox="10 8 80 80">${animalSVG("cat", "Póster", "happy")}</svg><path d="M302 74 h36" stroke="#c95b4a" stroke-width="3" stroke-linecap="round"/><path d="M308 80 h24" stroke="#c9a77d" stroke-width="1.6" stroke-linecap="round"/>`,
    pizarra: () => `<rect x="292" y="24" width="56" height="46" rx="2" fill="#a87447" ${S}/><rect x="296" y="28" width="48" height="38" fill="#3e4f45"/><text x="300" y="40" font-family="Georgia,serif" font-style="italic" font-size="8" fill="#f3e6cf">Hoy:</text><path d="M301 47 h18M301 53 h26M301 59 h14" stroke="#f3e6cf" stroke-width="1.4" stroke-linecap="round" opacity=".8"/><path d="M332 52 c-3 -4 -8 0 0 6 c8 -6 3 -10 0 -6Z" fill="#f29b8a"/><rect x="304" y="69" width="10" height="3" fill="#fbf7ef"/>`
  },
  shelf: {
    botes: () => `${SH(140, 106, 32, 2.4, .12)}<rect x="108" y="96" width="64" height="5" rx="1.5" fill="#a87447" ${S}/><path d="M114 101 l0 5M166 101 l0 5" ${S}/>
      <rect x="114" y="80" width="10" height="16" rx="2" fill="#a9c49a" ${S}/><rect x="113" y="77" width="12" height="4" rx="1" fill="#e2cfae" ${S1}/><rect x="116" y="86" width="6" height="4" fill="#fbf7ef"/>
      <rect x="128" y="84" width="9" height="12" rx="2" fill="#f29b8a" ${S}/><path d="M141 96 L141 78 L146 78 L146 96Z M147 96 L147 82 L152 82 L152 96Z" fill="#9cc0cf" ${S}/><path d="M155 96 l3 -15 4 1 -3 14Z" fill="#e2b45a" ${S}/><circle cx="166" cy="92" r="3.5" fill="#f3d36b" ${S1}/>`,
    libros: () => `${SH(140, 106, 32, 2.4, .12)}<rect x="108" y="96" width="64" height="5" rx="1.5" fill="#a87447" ${S}/><path d="M114 101 l0 5M166 101 l0 5" ${S}/>
      ${[[112, 78, 7, "#c95b4a"], [119, 82, 6, "#4f6fae"], [125, 80, 8, "#8fae8b"], [133, 84, 6, "#e2b45a"]].map(([x, y, w, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${96 - y}" fill="${c}" ${S1}/><path d="M${x + 1.5} ${y + 4} h${w - 3}" stroke="#fff" stroke-width="1" opacity=".5"/>`).join("")}<path d="M140 96 l6 -16 5 2 -6 14Z" fill="#a85a9a" ${S1}/>${POT(154, 88, 12, 8)}<path d="M160 88 v-10 q-4 0 -4 4M160 82 q4 0 4 -4" stroke="#6f9e6b" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    pothos: () => `<rect x="108" y="96" width="64" height="5" rx="1.5" fill="#a87447" ${S}/><path d="M114 101 l0 5M166 101 l0 5" ${S}/>${POT(130, 84, 20, 12, "#efe3cf")}<path d="M134 84 q-14 4 -20 22M140 84 q-2 10 -8 20M146 84 q12 6 18 20" stroke="#6f9e6b" stroke-width="1.8" fill="none"/>${[[124, 92], [116, 102], [133, 100], [156, 92], [163, 102], [138, 80], [146, 79]].map(([x, y]) => `<path d="M${x} ${y} q-4 -4 0 -7 q4 3 0 7Z" fill="#7fae78" ${S1}/>`).join("")}`,
    peluches: () => `${SH(140, 106, 32, 2.4, .12)}<rect x="108" y="96" width="64" height="5" rx="1.5" fill="#a87447" ${S}/><path d="M114 101 l0 5M166 101 l0 5" ${S}/>
      <circle cx="122" cy="88" r="7" fill="#c99566" ${S}/><circle cx="116" cy="82" r="3" fill="#c99566" ${S1}/><circle cx="128" cy="82" r="3" fill="#c99566" ${S1}/><circle cx="120" cy="87" r="1" fill="${INK}"/><circle cx="124" cy="87" r="1" fill="${INK}"/><ellipse cx="122" cy="90.5" rx="2.4" ry="1.6" fill="#f3e3cc"/>
      <ellipse cx="142" cy="89" rx="8" ry="7" fill="#f4b9b2" ${S}/><ellipse cx="142" cy="90.5" rx="3" ry="2" fill="#ee9e98" ${S1}/><path d="M136 83 l-2 -4 4 2M148 83 l2 -4 -4 2" fill="#f4b9b2" ${S1}/>
      <path d="M156 96 c0 -10 4 -14 8 -14 c4 0 6 4 6 14Z" fill="#fbf7ef" ${S}/><path d="M160 82 l-1 -8 3 6M166 82 l2 -8 -1 7" ${S1}/><circle cx="161" cy="88" r=".9" fill="${INK}"/><circle cx="165" cy="88" r=".9" fill="${INK}"/>`
  },
  sill: {
    macetas: () => `${POT(28, 84, 10, 8)}<path d="M33 84 q-3 -6 0 -9 q3 3 0 9 M33 84 q-5 -2 -6 -6M33 84 q5 -2 6 -6" fill="#8fae8b" ${S1}/>${POT(46, 86, 9, 6, "#efe3cf")}<circle cx="50.5" cy="82" r="4" fill="#7fae78" ${S1}/><path d="M48 80 l1 1M52 79 l-1 1" stroke="#fff" stroke-width=".8"/>${POT(64, 84, 10, 8, "#9cc0cf")}<path d="M69 84 v-8M66 80 h6" stroke="#6f9e6b" stroke-width="3" stroke-linecap="round"/><circle cx="69" cy="75" r="1.6" fill="#f29b8a"/>`,
    velas: () => [[36, 78, 14], [48, 82, 10], [72, 80, 12]].map(([x, y, h]) => `<ellipse cx="${x}" cy="${y - 4}" rx="9" ry="9" fill="#ffe7a8" opacity=".3"/><rect x="${x - 4}" y="${y}" width="8" height="${92 - y}" rx="1.5" fill="#fbf4e3" ${S1}/><path d="M${x} ${y} v-2" ${S1}/><path d="M${x} ${y - 7} q3 3 0 5 q-3 -2 0 -5Z" fill="#f3b04f"/>`).join(""),
    trofeo: () => `<path d="M50 92 h14 l-2 -4 h-10Z" fill="#b58550" ${S1}/><path d="M51 74 h12 c0 7 -2 11 -6 11 c-4 0 -6 -4 -6 -11Z" fill="#f1c75b" ${S1}/><path d="M57 85 v3" ${S1}/><path d="M51 76 c-4 0 -4 5 0 5M63 76 c4 0 4 5 0 5" ${S1}/><path d="M54 77 l1 4" stroke="#fff" stroke-width="1.2" opacity=".6"/>`
  },
  cornerL: {
    bascula: () => `${SH(48, 176, 36, 3)}<rect x="12" y="160" width="72" height="12" rx="3" fill="#dfe6e8" ${S}/><rect x="16" y="156" width="64" height="5" rx="2" fill="#c9d3d9" ${S1}/><rect x="40" y="130" width="16" height="30" fill="#c9d3d9" ${S}/><rect x="34" y="114" width="28" height="18" rx="3" fill="#fbf7ef" ${S}/><rect x="38" y="118" width="20" height="9" rx="1.5" fill="#bfe0c8"/><text x="41" y="125.5" font-family="monospace" font-size="7" fill="${INK}">4,2</text>`,
    botiquin: () => `${SH(48, 176, 36, 3)}<rect x="14" y="120" width="68" height="56" rx="3" fill="#fbf7ef" ${S}/><path d="M48 122 v52" ${S1}/><circle cx="44" cy="148" r="1.6" fill="${INK}"/><circle cx="52" cy="148" r="1.6" fill="${INK}"/><rect x="24" y="108" width="48" height="12" rx="2" fill="#dfe6e8" ${S}/><path d="M48 128 v12M42 134 h12" stroke="#c0453a" stroke-width="4" stroke-linecap="round"/><rect x="28" y="100" width="10" height="8" rx="1.5" fill="#a9c49a" ${S1}/><rect x="56" y="102" width="8" height="6" rx="1.5" fill="#f29b8a" ${S1}/>`,
    sofa: () => `${SH(48, 177, 40, 3)}<rect x="8" y="128" width="80" height="22" rx="8" fill="#8fae8b" ${S}/><rect x="10" y="146" width="76" height="16" rx="5" fill="#a9c49a" ${S}/><path d="M48 148 v12" ${S1}/><rect x="6" y="140" width="10" height="26" rx="4" fill="#8fae8b" ${S}/><rect x="80" y="140" width="10" height="26" rx="4" fill="#8fae8b" ${S}/><path d="M14 166 v9M82 166 v9" ${S}/><rect x="20" y="132" width="20" height="14" rx="5" fill="#f3d36b" transform="rotate(-8 30 139)" ${S1}/><rect x="56" y="132" width="18" height="13" rx="5" fill="#eab3ae" transform="rotate(6 65 138)" ${S1}/>`,
    acuario: () => `${SH(48, 177, 40, 3)}<rect x="10" y="138" width="76" height="38" rx="3" fill="#b58550" ${S}/><path d="M48 140 v34" ${S1}/><circle cx="43" cy="157" r="1.5" fill="${INK}"/><circle cx="53" cy="157" r="1.5" fill="${INK}"/>
      <rect x="16" y="106" width="64" height="32" rx="3" fill="#bfe0e8" ${S}/><rect x="18" y="108" width="60" height="5" fill="#fff" opacity=".35"/><path d="M18 134 Q30 128 44 134 Q58 128 78 134 L78 136 L18 136Z" fill="#e2cfae"/>
      <path d="M26 134 q-3 -8 1 -16M30 134 q3 -7 -1 -13M70 134 q2 -6 -1 -11" stroke="#6f9e6b" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <g transform="translate(52 120)"><ellipse rx="6" ry="4" fill="#f0a35e" ${S1}/><path d="M6 0 l5 -4 0 8Z" fill="#f0a35e" ${S1}/><circle cx="-2.6" cy="-.8" r=".9" fill="${INK}"/></g>
      <g transform="translate(36 126) scale(.7)"><ellipse rx="6" ry="4" fill="#9cc0cf" ${S1}/><path d="M6 0 l5 -4 0 8Z" fill="#9cc0cf" ${S1}/><circle cx="-2.6" cy="-.8" r=".9" fill="${INK}"/></g>
      <circle cx="66" cy="116" r="2" fill="none" stroke="#fff" stroke-width="1"/><circle cx="69" cy="111" r="1.3" fill="none" stroke="#fff" stroke-width="1"/>`
  },
  plant: {
    monstera: () => `${SH(339, 177, 16, 2.6)}${POT(326, 150, 26, 26)}${[["M339 150 C330 130 316 126 312 132 C318 140 328 146 339 150Z", "#6f9e6b"], ["M339 150 C342 126 354 114 360 118 C358 130 350 142 339 150Z", "#7fae78"], ["M339 150 C336 128 340 108 346 104 C350 116 346 136 339 150Z", "#5f8e5c"]].map(([d, c]) => `<path d="${d}" fill="${c}" ${S}/>`).join("")}<path d="M322 136 l4 -2M350 128 l4 -3M343 118 l2 -4" stroke="#f3e6cf" stroke-width="1.4"/>`,
    cactus: () => `${SH(340, 177, 16, 2.6)}${POT(328, 154, 24, 22, "#e2b45a")}<path d="M334 154 V112 q0 -7 6 -7 q6 0 6 7 V154Z" fill="#7fae78" ${S}/><path d="M334 132 h-6 q-4 0 -4 -4 v-8 q0 -3 3 -3 q3 0 3 3 v6 h4" fill="#7fae78" ${S}/><path d="M346 126 h6 q4 0 4 -4 v-10 q0 -3 -3 -3 q-3 0 -3 3 v8 h-4" fill="#7fae78" ${S}/><path d="M340 110 v42M337 120 l-2 1M343 130 l2 1M338 142 l-2 1" stroke="#5f8e5c" stroke-width="1.2"/><circle cx="340" cy="104" r="3" fill="#f29b8a" ${S1}/>`,
    helecho: () => `${SH(340, 177, 18, 2.6)}<path d="M330 176 l4 -20 h12 l4 20" fill="none" stroke="#7a5638" stroke-width="2.4"/>${POT(328, 140, 24, 16, "#efe3cf")}${[[-28, 0], [-16, -14], [0, -22], [16, -14], [26, 2]].map(([dx, dy]) => `<path d="M340 140 Q${340 + dx * .5} ${126 + dy * .6} ${340 + dx} ${132 + dy}" stroke="#6f9e6b" stroke-width="2.4" fill="none"/>${[.4, .65, .85].map(t => `<ellipse cx="${340 + dx * t}" cy="${140 + (132 + dy - 140) * t - 4 * t}" rx="3.4" ry="1.6" fill="#7fae78" transform="rotate(${dx} ${340 + dx * t} ${140 + (132 + dy - 140) * t})"/>`).join("")}`).join("")}`,
    ficus: () => `${SH(340, 177, 18, 2.6)}${POT(328, 152, 26, 24, "#9cc0cf")}<path d="M341 152 C339 136 343 124 340 108" stroke="#7a5638" stroke-width="3" fill="none"/><path d="M340 126 l-8 -6M341 116 l8 -6" stroke="#7a5638" stroke-width="2"/>${[[326, 112], [338, 100], [352, 108], [330, 124], [354, 122], [342, 114], [320, 104], [346, 92]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="9" fill="${i % 2 ? "#6f9e6b" : "#7fae78"}" ${S1}/>`).join("")}`
  },
  rug: {
    redonda: () => `<ellipse cx="160" cy="214" rx="96" ry="18" fill="#c9764e" ${S}/><ellipse cx="160" cy="214" rx="78" ry="12" fill="none" stroke="#f3d36b" stroke-width="2" stroke-dasharray="5 4"/><ellipse cx="160" cy="214" rx="50" ry="7" fill="none" stroke="#e6a77f" stroke-width="2"/>`,
    rayas: () => `<rect x="70" y="198" width="190" height="34" rx="4" fill="#efe3cf" ${S}/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${76 + i * 23}" y="200" width="10" height="30" fill="${["#8fae8b", "#e6a77f"][i % 2]}"/>`).join("")}<path d="M70 202 h-6M70 210 h-6M70 218 h-6M70 226 h-6M260 202 h6M260 210 h6M260 218 h6M260 226 h6" ${S1}/>`,
    huella: () => `<g fill="#e6a77f" ${S}><ellipse cx="165" cy="225" rx="50" ry="12"/><ellipse cx="96" cy="210" rx="16" ry="5.5"/><ellipse cx="128" cy="204" rx="16" ry="5.5"/><ellipse cx="202" cy="204" rx="16" ry="5.5"/><ellipse cx="234" cy="210" rx="16" ry="5.5"/></g><ellipse cx="165" cy="225" rx="38" ry="7" fill="none" stroke="#f3d36b" stroke-width="2" stroke-dasharray="4 4"/>`
  },
  pet: {
    gato: () => `<ellipse cx="44" cy="216" rx="36" ry="10" fill="#c95b4a" ${S}/><ellipse cx="44" cy="214" rx="28" ry="6" fill="#d97a6c"/><path d="M22 208 C22 192 52 188 62 198 C66 202 66 208 62 210 Z" fill="#e3a15c" ${S}/><path d="M30 196 q4 -2 6 2M40 193 q4 -2 6 2" stroke="#b8733a" stroke-width="2" fill="none"/>
      <path d="M56 196 L58 186 L64 194Z" fill="#e3a15c" ${S}/><path d="M64 199 L68 190 L70 200Z" fill="#e3a15c" ${S}/><path d="M60 202 q2 2 4 0" ${S1}/><path d="M24 206 C14 206 14 214 26 212" stroke="${INK}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M24 206 C14 206 14 214 26 212" stroke="#e3a15c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <text x="70" y="186" font-size="9" fill="${INK}" font-family="Georgia,serif" font-style="italic">z</text><text x="76" y="178" font-size="7" fill="${INK}" font-family="Georgia,serif" font-style="italic">z</text>`,
    perro: () => `<path d="M8 222 q0 -22 40 -22 q40 0 40 22 q0 8 -40 8 q-40 0 -40 -8Z" fill="#5f84a8" ${S}/><ellipse cx="48" cy="216" rx="32" ry="8" fill="#9cc0cf"/><path d="M24 214 C24 198 60 196 70 206 C74 210 72 216 68 217 Z" fill="#d4a373" ${S}/><path d="M62 200 C70 196 76 202 74 210 C70 214 64 212 62 206Z" fill="#d4a373" ${S}/><path d="M66 199 C62 198 60 206 63 210" fill="#8c5a3c" ${S1}/><path d="M68 207 q2 1.5 4 0" ${S1}/><ellipse cx="74" cy="206" rx="1.6" ry="1.2" fill="${INK}"/><path d="M26 210 c-6 -2 -8 4 -3 6" ${S1}/>`,
    conejo: () => `${SH(48, 222, 24, 3)}<ellipse cx="44" cy="210" rx="20" ry="13" fill="#f3e9dc" ${S}/><circle cx="26" cy="210" r="5" fill="#fff" ${S1}/><circle cx="62" cy="200" r="10" fill="#f3e9dc" ${S}/><path d="M58 192 C54 176 60 172 62 178 C63 184 62 190 61 192Z" fill="#f3e9dc" ${S}/><path d="M58.5 190 C57 180 59 177 60.5 181Z" fill="#f1a7a0"/><path d="M64 191 C66 175 72 174 72 180 C71 186 68 190 66 192Z" fill="#f3e9dc" ${S}/><circle cx="65" cy="199" r="1.4" fill="${INK}"/><ellipse cx="71" cy="203" rx="1.4" ry="1" fill="#e58b8b"/><path d="M70 205 l6 1M70 204 l6 -2" stroke="${INK}" stroke-width=".7"/><path d="M84 218 l4 -10 3 9Z" fill="#f29b8a" ${S1}/><path d="M86 208 q-2 -5 2 -6 q3 3 -2 6" fill="#7fae78" ${S1}/>`,
    tortuga: () => `${SH(48, 224, 26, 3)}<ellipse cx="34" cy="216" rx="6" ry="4" fill="#a9c49a" ${S}/><ellipse cx="62" cy="216" rx="6" ry="4" fill="#a9c49a" ${S}/><path d="M24 216 C24 196 72 196 72 216Z" fill="#8a6a3e" ${S}/><path d="M36 214 l4 -10 h16 l4 10M44 204 l4 -6 4 6" stroke="#c9a65a" stroke-width="1.6" fill="none"/><circle cx="80" cy="210" r="7" fill="#a9c49a" ${S}/><circle cx="82" cy="208" r="1.2" fill="${INK}"/><path d="M82 213 q2 1 3 0" ${S1}/><path d="M24 214 l-5 2" ${S}/>`
  }
};
const TABLES = {
  metal: (pat) => `<rect x="200" y="148" width="126" height="9" rx="3" fill="#dfe6e8" ${S}/><path d="M204 150 h118" stroke="#fff" stroke-width="1.4" opacity=".7"/><path d="M212 157 L212 204M314 157 L314 204" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M212 182 h102" stroke="${INK}" stroke-width="1.6"/><path d="M206 204 h14M306 204 h14" ${S}/>${pat ? "" : `<path d="M226 148 q8 -10 22 -4 q12 -6 22 2 q10 -2 14 2" fill="#f2d6cd" ${S}/>`}`,
  madera: (pat) => `<rect x="200" y="146" width="126" height="11" rx="2" fill="#c28f5f" ${S}/><path d="M204 151 h40M262 152 h50" stroke="#a87447" stroke-width="1.2"/><rect x="208" y="157" width="8" height="47" fill="#b07a4a" ${S}/><rect x="310" y="157" width="8" height="47" fill="#b07a4a" ${S}/><rect x="216" y="176" width="94" height="8" fill="#b07a4a" ${S}/><path d="M216 190 h94" stroke="${INK}" stroke-width="1" opacity=".3"/>${pat ? "" : `<path d="M226 146 q8 -10 22 -4 q12 -6 22 2 q10 -2 14 2" fill="#cfe0e6" ${S}/>`}`,
  cojin: (pat) => `<rect x="200" y="150" width="126" height="9" rx="2" fill="#c28f5f" ${S}/><rect x="208" y="159" width="8" height="45" fill="#b07a4a" ${S}/><rect x="310" y="159" width="8" height="45" fill="#b07a4a" ${S}/><rect x="198" y="138" width="130" height="14" rx="7" fill="#f6dccb" ${S}/>${[214, 238, 262, 286, 310].map((x, i) => `<g transform="translate(${x} 145)"><circle r="2.6" fill="${i % 2 ? "#a9c49a" : "#f29b8a"}"/><circle r="1" fill="#fff6d8"/></g>`).join("")}`
};

function sceneSVG(opts = {}) {
  const eq = opts.eq || G.eq, k = "s" + (uid++);
  const wall = findItem("wall", eq.wall) || SHOP.wall.items[0], floor = findItem("floor", eq.floor) || SHOP.floor.items[0];
  let defs = "", wallFill = wall.c;
  const pat = (body, w, h) => { defs += `<pattern id="${k}w" width="${w}" height="${h}" patternUnits="userSpaceOnUse">${body}</pattern>`; wallFill = `url(#${k}w)`; };
  const paw = (x, y, r, c) => `<g fill="${c}" transform="translate(${x} ${y}) rotate(${r})"><ellipse cx="0" cy="3" rx="3.4" ry="2.8"/><circle cx="-3.6" cy="-1.6" r="1.3"/><circle cx="-1.2" cy="-3.4" r="1.3"/><circle cx="1.6" cy="-3.4" r="1.3"/><circle cx="3.8" cy="-1.4" r="1.3"/></g>`;
  if (eq.wall === "huellas") pat(`<rect width="38" height="38" fill="${wall.c}"/>${paw(10, 12, -15, wall.d)}${paw(29, 30, 20, wall.d)}`, 38, 38);
  if (eq.wall === "flores") pat(`<rect width="34" height="34" fill="${wall.c}"/>${[[8, 9, "#e6a77f"], [26, 25, "#a9c49a"]].map(([x, y, c]) => `<g transform="translate(${x} ${y})">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="1.8" ry="3" transform="rotate(${a}) translate(0 -2.6)" fill="${c}"/>`).join("")}<circle r="1.4" fill="#f3d36b"/></g>`).join("")}<path d="M24 8 q3 2 5 0M6 26 q3 2 5 0" stroke="#a9c49a" stroke-width="1.2" fill="none"/>`, 34, 34);
  if (eq.wall === "rayas") pat(`<rect width="22" height="10" fill="${wall.c}"/><rect width="8" height="10" fill="${wall.d}" opacity=".45"/>`, 22, 10);
  if (eq.wall === "azulejo") pat(`<rect width="16" height="12" fill="${wall.c}"/><path d="M0 11.5 H16 M15.5 0 V12" stroke="${wall.d}" stroke-width="1"/><rect x="2" y="2" width="11" height="7" rx="2" fill="${wall.d}" opacity=".15"/>`, 16, 12);
  if (eq.wall === "madera") pat(`<rect width="30" height="60" fill="${wall.c}"/><path d="M0 0 V60" stroke="${wall.d}" stroke-width="2"/><path d="M12 14 q3 5 0 10M20 40 q-3 4 0 8" stroke="${wall.d}" stroke-width="1" fill="none" opacity=".6"/>`, 30, 60);
  if (eq.wall === "noche") pat(`<rect width="60" height="50" fill="${wall.c}"/><circle cx="10" cy="12" r="1.2" fill="#f3e6cf"/><circle cx="40" cy="8" r=".9" fill="#f3e6cf"/><circle cx="28" cy="34" r="1.4" fill="#f3d36b"/><circle cx="52" cy="40" r=".9" fill="#f3e6cf"/>`, 60, 50);
  let floorFill = floor.c;
  const fpat = (body, w, h) => { defs += `<pattern id="${k}f" width="${w}" height="${h}" patternUnits="userSpaceOnUse">${body}</pattern>`; floorFill = `url(#${k}f)`; };
  if (eq.floor === "tarima") fpat(`<rect width="80" height="16" fill="${floor.c}"/><path d="M0 15.5 H80M30 0 V16" stroke="#a87447" stroke-width="1.4"/><path d="M50 6 q6 2 12 0" stroke="#a87447" stroke-width=".8" fill="none" opacity=".6"/>`, 80, 16);
  if (eq.floor === "espiga") fpat(`<rect width="24" height="24" fill="${floor.c}"/><path d="M0 12 L12 0 L24 12 L12 24Z" fill="none" stroke="#a87447" stroke-width="1.3"/><path d="M0 0 L24 24M24 0 L0 24" stroke="#b07a4a" stroke-width=".6" opacity=".5"/>`, 24, 24);
  if (eq.floor === "baldosa") fpat(`<rect width="32" height="20" fill="${floor.c}"/><path d="M0 19.5 H32 M31.5 0 V20" stroke="#b86d52" stroke-width="1.4"/>`, 32, 20);
  if (eq.floor === "hidraulica") fpat(`<rect width="24" height="24" fill="${floor.c}"/><path d="M12 2 L22 12 L12 22 L2 12Z" fill="#9cc0cf" opacity=".6"/><circle cx="12" cy="12" r="3" fill="#c95b4a" opacity=".7"/><path d="M0 0 h24 v24" fill="none" stroke="#c9b48e" stroke-width="1"/>`, 24, 24);
  if (eq.floor === "damero") fpat(`<rect width="32" height="24" fill="${floor.c}"/><rect width="16" height="12" fill="#8a6a55"/><rect x="16" y="12" width="16" height="12" fill="#8a6a55"/>`, 32, 24);
  if (eq.floor === "verde") fpat(`<rect width="10" height="10" fill="${floor.c}"/><circle cx="3" cy="3" r=".8" fill="#7d9665"/><circle cx="8" cy="7" r=".8" fill="#7d9665"/>`, 10, 10);
  defs += `<linearGradient id="${k}l" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff6d8" stop-opacity=".5"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></linearGradient>
    <radialGradient id="${k}v" cx=".5" cy=".45" r=".75"><stop offset=".6" stop-color="#4a3426" stop-opacity="0"/><stop offset="1" stop-color="#4a3426" stop-opacity=".22"/></radialGradient>
    <clipPath id="${k}c"><rect x="20" y="24" width="72" height="68"/></clipPath>`;
  const D = (cat) => eq[cat] && DECOR[cat][eq[cat]] ? DECOR[cat][eq[cat]]() : "";
  const night = eq.view === "noche";
  const patient = opts.patient ? `${SH(263, 150, 44, 4, .14)}<g transform="translate(206 56) scale(1.08)">${animalSVG(opts.patient.species, opts.patient.name, opts.mood || "neutral")}</g>` : "";
  const table = (TABLES[eq.table] || TABLES.metal)(!!opts.patient);
  const towel = opts.patient ? `<path d="M222 150 q6 -6 20 -4 h44 q12 -2 18 4 v4 h-82Z" fill="${eq.table === "madera" ? "#cfe0e6" : "#f2d6cd"}" ${S1}/>` : "";
  return `<svg class="scene" viewBox="${opts.viewBox || "0 0 360 240"}" role="img" aria-label="Tu clínica" preserveAspectRatio="xMidYMid meet">
    <defs>${defs}</defs>
    <rect width="360" height="176" fill="${wallFill}"/>
    <rect y="128" width="360" height="48" fill="${wall.d}" opacity=".55"/>${[30, 90, 150, 210, 270, 330].map(x => `<rect x="${x - 24}" y="135" width="48" height="34" rx="2" fill="none" stroke="${INK}" stroke-width="1" opacity=".18"/>`).join("")}
    <path d="M0 128 H360" stroke="${INK}" stroke-width="1.6" opacity=".6"/><rect y="170" width="360" height="7" fill="${wall.d}"/><path d="M0 170 H360" stroke="${INK}" stroke-width="1" opacity=".4"/>
    <g>${D("wallL")}${D("wallC")}${D("wallR")}</g>
    <g><g clip-path="url(#${k}c)">${windowView(eq.view || "campo", k)}</g>
      <rect x="20" y="24" width="72" height="68" rx="2" fill="none" ${S}/><path d="M56 24 V92M20 58 H92" stroke="${INK}" stroke-width="2"/><path d="M24 28 l14 0 l-14 14Z" fill="#fff" opacity=".25"/>
      ${curtainsSVG(eq.curtains, k)}
      <rect x="12" y="16" width="88" height="5" rx="2.5" fill="#a87447" ${S}/><rect x="16" y="91" width="80" height="6" rx="2" fill="#f3e6cf" ${S}/>${SH(56, 99, 38, 2, .12)}
      ${D("sill")}</g>
    ${D("shelf")}
    ${D("cornerL")}
    <rect y="177" width="360" height="63" fill="${floorFill}"/><path d="M0 177 H360" stroke="${INK}" stroke-width="2"/><rect y="177" width="360" height="10" fill="${INK}" opacity=".08"/>
    ${night ? "" : `<path d="M24 179 L94 179 L140 238 L54 238Z" fill="url(#${k}l)"/>`}
    ${D("rug")}
    ${SH(263, 206, 66, 5, .14)}${table}${towel}
    ${patient}
    ${D("plant")}
    ${SH(146, 236, 40, 4, .1)}<g transform="translate(84 88) scale(1.08)">${avatarG(eq, opts.vetMood || "neutral")}</g>
    ${D("pet")}
    ${D("ceiling")}
    <rect width="360" height="240" fill="url(#${k}v)" pointer-events="none"/>
  </svg>`;
}
