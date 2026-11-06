"use strict";
/* ================= ILUSTRACIONES (SVG dibujado a mano) ================= */
const INK = "#4a3426";
const S = `stroke="${INK}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
const S1 = `stroke="${INK}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
const SF = (c) => `fill="${c}" ${S}`;
const SH = (cx, cy, rx, ry, o = .16) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${INK}" opacity="${o}"/>`;
function hash(s) { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return h; }
let uid = 0;
const COIN = `<svg class="ico-coin" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" fill="#f0c25e" ${S}/><path d="M10 6v8M7.5 8.2c.6-1 4.4-1.2 4.4.6 0 1.8-4.4.9-4.4 2.7 0 1.6 3.9 1.6 4.6.5" ${S1}/></svg>`;
const BOLT = `<svg class="ico-bolt" viewBox="0 0 20 20"><path d="M11.6 1.8 4.4 11.3h4.8L8 18.2l7.6-9.7h-4.9Z" fill="#f3c74f" ${S}/></svg>`;
const STAR = `<svg class="ico-star" viewBox="0 0 20 20"><path d="M10 2.5l2.3 4.8 5.2.7-3.8 3.6.9 5.2L10 14.3l-4.6 2.5.9-5.2L2.5 8l5.2-.7Z" fill="#e8a65a" ${S}/></svg>`;

/* ---------------- estampados (pijamas, gorros, cortinas) ---------------- */
const HEART = (x, y, s, c) => `<path d="M${x} ${y + 2.6 * s} C${x - 4 * s} ${y - .4 * s} ${x - 2.6 * s} ${y - 3.6 * s} ${x} ${y - 1.6 * s} C${x + 2.6 * s} ${y - 3.6 * s} ${x + 4 * s} ${y - .4 * s} ${x} ${y + 2.6 * s}Z" fill="${c}"/>`;
const STARP = (x, y, r, c) => { let p = ""; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(2) + " " + (y + rr * Math.sin(a)).toFixed(2); } return `<path d="${p}Z" fill="${c}"/>`; };
const FLOWER = (x, y, r, c, mid) => [0, 72, 144, 216, 288].map(a => `<circle cx="${(x + r * Math.cos(a * Math.PI / 180)).toFixed(2)}" cy="${(y + r * Math.sin(a * Math.PI / 180)).toFixed(2)}" r="${r * .75}" fill="${c}"/>`).join("") + `<circle cx="${x}" cy="${y}" r="${r * .55}" fill="${mid || "#f3d36b"}"/>`;
const PAWP = (x, y, s, c) => `<g fill="${c}" transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="2.2" rx="2.6" ry="2.1"/><circle cx="-2.8" cy="-1.3" r="1"/><circle cx="-1" cy="-2.7" r="1"/><circle cx="1.2" cy="-2.7" r="1"/><circle cx="3" cy="-1.2" r="1"/></g>`;
function patternDef(id, pat, bg, fg) {
  const T = (w, h, body) => `<pattern id="${id}" width="${w}" height="${h}" patternUnits="userSpaceOnUse"><rect width="${w}" height="${h}" fill="${bg}"/>${body}</pattern>`;
  switch (pat) {
    case "huellas": return T(16, 16, PAWP(5, 5, .75, fg) + PAWP(13, 13, .75, fg));
    case "huesos": return T(18, 14, `<g fill="${fg}" transform="rotate(-25 9 7)"><rect x="5" y="6" width="8" height="2.2" rx="1"/><circle cx="5" cy="6" r="1.5"/><circle cx="5" cy="8.2" r="1.5"/><circle cx="13" cy="6" r="1.5"/><circle cx="13" cy="8.2" r="1.5"/></g>`);
    case "corazones": return T(14, 14, HEART(4, 4.5, .8, fg) + HEART(11, 11.5, .8, fg));
    case "estrellas": return T(14, 14, STARP(4, 4, 2.6, fg) + STARP(11, 11, 2, fg));
    case "lunares": return T(10, 10, `<circle cx="2.5" cy="2.5" r="1.7" fill="${fg}"/><circle cx="7.5" cy="7.5" r="1.7" fill="${fg}"/>`);
    case "rayas": return T(8, 8, `<rect width="3" height="8" fill="${fg}"/>`);
    case "marinera": return T(8, 7, `<rect width="8" height="3" fill="${fg}"/>`);
    case "cuadros": return T(10, 10, `<rect width="5" height="10" fill="${fg}" opacity=".45"/><rect width="10" height="5" fill="${fg}" opacity=".45"/>`);
    case "flores": return T(16, 16, FLOWER(5, 5, 1.6, fg) + FLOWER(13, 13, 1.6, fg, "#fff6d8"));
    case "sakura": return T(16, 16, FLOWER(5, 5, 1.7, fg, "#c9607e") + FLOWER(12.5, 12.5, 1.3, fg, "#c9607e"));
    case "copos": return T(16, 16, [[5, 5, 3], [12.5, 12, 2.3]].map(([x, y, r]) => `<path d="M${x - r} ${y}H${x + r}M${x} ${y - r}V${y + r}M${x - r * .7} ${y - r * .7}L${x + r * .7} ${y + r * .7}M${x - r * .7} ${y + r * .7}L${x + r * .7} ${y - r * .7}" stroke="${fg}" stroke-width=".9" stroke-linecap="round"/>`).join(""));
    case "calabazas": return T(16, 16, [[5, 6], [12, 13]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="2.8" ry="2.2" fill="${fg}"/><path d="M${x} ${y - 2} v-1.4" stroke="#5f8a55" stroke-width="1" stroke-linecap="round"/>`).join(""));
    case "olas": return T(16, 9, `<path d="M0 5 q4 -4 8 0 t8 0" stroke="${fg}" stroke-width="1.4" fill="none"/>`);
    case "cactus": return T(16, 16, [[5, 6], [12, 13]].map(([x, y]) => `<path d="M${x} ${y + 3} v-6 M${x} ${y} h-2 v-2 M${x} ${y - 1} h2 v-2" stroke="${fg}" stroke-width="1.5" stroke-linecap="round" fill="none"/>`).join(""));
    case "cerezas": return T(16, 16, [[5, 7], [12, 13]].map(([x, y]) => `<circle cx="${x - 1.4}" cy="${y}" r="1.5" fill="${fg}"/><circle cx="${x + 1.4}" cy="${y + .4}" r="1.5" fill="${fg}"/><path d="M${x - 1.4} ${y - 1.4} Q${x} ${y - 4.5} ${x + 1.8} ${y - 4.4} M${x + 1.4} ${y - 1} L${x + 1.4} ${y - 4}" stroke="#5f8a55" stroke-width=".8" fill="none"/>`).join(""));
    case "acebo": return T(16, 16, `<path d="M3 6 q2 -2 4 0 q-2 2 -4 0Z M7 6 q2 -2 4 0 q-2 2 -4 0Z" fill="#5f8a55"/><circle cx="7" cy="7.5" r="1.1" fill="${fg}"/><path d="M10 14 q2 -2 4 0 q-2 2 -4 0Z" fill="#5f8a55"/><circle cx="12.5" cy="12.5" r="1" fill="${fg}"/>`);
    case "murcielagos": return T(18, 16, `<path d="M3 6 q2 -2 3 0 q1 -1.5 1.5 -0.2 q.5 -1.3 1.5 .2 q1 -2 3 0 q-2 0 -2.5 2 q-1 -1 -2 0 q-1 -1 -2 0 q-.5 -2 -2.5 -2Z" fill="${fg}"/><circle cx="13" cy="12" r=".8" fill="${fg}"/>`);
    case "rombos": return T(14, 14, `<path d="M7 1 L13 7 L7 13 L1 7Z" fill="none" stroke="${fg}" stroke-width="1.4"/><circle cx="7" cy="7" r="1.4" fill="${fg}"/>`);
    default: return T(10, 10, "");
  }
}
const PAT_SETS = { navidad: "Navidad", halloween: "Halloween", sanvalentin: "San Valentín", asiatico: "Asiático", mediterraneo: "Mediterráneo", americano: "Americano" };

/* ---------------- catálogo ---------------- */
const scrubs = (id, name, c, price, pat, pc, set) => ({ id, name, k: "scrubs", c, pat, pc, price, set });
const cap = (id, name, c, price, pat, pc, set) => ({ id, name, k: "cap", c, pat, pc, price, set });
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
    { id: "bata", name: "Bata blanca", k: "bata", price: 0 }, { id: "bata_botones", name: "Bata con botones de colores", k: "bata", btn: 1, price: 90 },
    scrubs("pijama_salvia", "Pijama salvia", "#8fae8b", 50), scrubs("pijama_cielo", "Pijama cielo", "#86afc9", 50), scrubs("pijama_rosa", "Pijama rosa", "#e3a4a8", 50),
    scrubs("pijama_mostaza", "Pijama mostaza", "#d9b45a", 50), scrubs("pijama_granate", "Pijama granate", "#a85a5a", 50), scrubs("pijama_lavanda", "Pijama lavanda", "#a99acb", 50),
    scrubs("pijama_menta", "Pijama menta", "#8ccbb4", 50), scrubs("pijama_coral", "Pijama coral", "#ec9373", 50), scrubs("pijama_marino", "Pijama azul marino", "#3f5878", 60),
    scrubs("pijama_gris", "Pijama gris perla", "#a9a6a1", 50), scrubs("pijama_negro", "Pijama negro", "#3a3536", 70),
    scrubs("pijama_huellas", "Pijama de huellas", "#86afc9", 110, "huellas", "#fbf7ef"), scrubs("pijama_huesos", "Pijama de huesos", "#8fae8b", 110, "huesos", "#fbf7ef"),
    scrubs("pijama_estrellas", "Pijama de estrellas", "#3f5878", 120, "estrellas", "#f3d36b"), scrubs("pijama_lunares", "Pijama de lunares", "#d9b45a", 110, "lunares", "#fbf7ef"),
    scrubs("pijama_flores", "Pijama de flores", "#e3a4a8", 120, "flores", "#fbf7ef"), scrubs("pijama_rayas", "Pijama de rayas", "#8ccbb4", 100, "rayas", "#fbf7ef"),
    scrubs("pijama_cuadros", "Pijama de cuadros", "#fbf2e8", 110, "cuadros", "#c95b4a"), scrubs("pijama_cerezas", "Pijama de cerezas", "#fbf2e8", 130, "cerezas", "#c0453a"),
    { id: "jersey", name: "Jersey de punto", k: "jersey", c: "#b8604a", price: 140 }, { id: "cardigan", name: "Rebeca lila", k: "cardigan", price: 150 },
    { id: "chaleco", name: "Chaleco polar", k: "chaleco", price: 150 }, { id: "peto", name: "Peto de granja", k: "peto", price: 160 },
    { id: "sudadera", name: "Sudadera de huellas", k: "sudadera", price: 180 }, { id: "hawaiana", name: "Camisa de flores", k: "hawaiana", price: 200 },
    { id: "traje", name: "Traje de domingo", k: "traje", price: 260 }, { id: "capa", name: "Capa de superveterinario", k: "capa", price: 600 },
    scrubs("pijama_copos", "Pijama de copos", "#b8473a", 130, "copos", "#fbf7ef", "navidad"), { id: "jersey_navidad", name: "Jersey navideño", k: "jersey", c: "#b8473a", motif: "navidad", price: 190, set: "navidad" },
    scrubs("pijama_calabazas", "Pijama de calabazas", "#4a3a5c", 130, "calabazas", "#e8873f", "halloween"), { id: "vampiro", name: "Capa de vampiro", k: "vampiro", price: 220, set: "halloween" },
    scrubs("pijama_corazones", "Pijama de corazones", "#f0b8c0", 130, "corazones", "#c9607e", "sanvalentin"), { id: "jersey_amor", name: "Jersey de corazones", k: "jersey", c: "#e58aa6", motif: "corazones", price: 180, set: "sanvalentin" },
    scrubs("pijama_sakura", "Pijama de cerezos", "#f6e4e6", 130, "sakura", "#e9a1b5", "asiatico"), { id: "haori", name: "Chaqueta haori", k: "haori", price: 230, set: "asiatico" },
    scrubs("pijama_olas", "Pijama de olas", "#dfeef2", 130, "olas", "#4f7fae", "mediterraneo"), { id: "marinera", name: "Camiseta marinera", k: "marinera", price: 150, set: "mediterraneo" },
    scrubs("pijama_cactus", "Pijama de cactus", "#efdcb6", 130, "cactus", "#5f8a55", "americano"), { id: "vaquera", name: "Camisa vaquera", k: "vaquera", price: 170, set: "americano" }] },
  neck: { label: "Cuello", opt: true, items: [
    { id: "esteto", name: "Fonendo", price: 0 }, { id: "panuelo", name: "Pañuelo rojo", price: 50 }, { id: "collar", name: "Collar de cuentas", price: 70 },
    { id: "pajarita", name: "Pajarita", price: 80 }, { id: "bufanda", name: "Bufanda verde", price: 110 },
    { id: "bufanda_navidad", name: "Bufanda de rayas", price: 110, set: "navidad" }, { id: "collar_corazones", name: "Collar de corazones", price: 90, set: "sanvalentin" },
    { id: "lunares", name: "Pañuelo de lunares", price: 70, set: "mediterraneo" }, { id: "bandana", name: "Bandana vaquera", price: 70, set: "americano" }] },
  eyes: { label: "Gafas", opt: true, items: [
    { id: "gafas", name: "Gafas redondas", price: 60 }, { id: "pasta", name: "Gafas de pasta", price: 80 },
    { id: "gafas_sol", name: "Gafas de sol", price: 110 }, { id: "gafas_corazon", name: "Gafas corazón", price: 160, set: "sanvalentin" }] },
  head: { label: "Cabeza", opt: true, items: [
    cap("gorro", "Gorro cielo", "#7fb2cf", 60), cap("gorro_verde", "Gorro verde quirófano", "#7fae8f", 60), cap("gorro_rosa", "Gorro rosa", "#e9a7b4", 60),
    cap("gorro_morado", "Gorro morado", "#9c84c4", 60), cap("gorro_huellas", "Gorro de huellas", "#86afc9", 100, "huellas", "#fbf7ef"),
    cap("gorro_huesos", "Gorro de huesos", "#d9b45a", 100, "huesos", "#fbf7ef"), cap("gorro_flores", "Gorro de flores", "#fbf2e8", 110, "flores", "#e58aa6"),
    cap("gorro_estrellas", "Gorro de estrellas", "#3f5878", 110, "estrellas", "#f3d36b"), cap("gorro_cerezas", "Gorro de cerezas", "#fbf2e8", 110, "cerezas", "#c0453a"),
    cap("gorro_lunares", "Gorro de lunares", "#c95b4a", 100, "lunares", "#fbf7ef"),
    { id: "flor", name: "Flor en el pelo", price: 60 }, { id: "diadema", name: "Diadema con lazo", price: 80 }, { id: "lana", name: "Gorro de lana", price: 100 },
    { id: "boina", name: "Boina", price: 110 }, { id: "paja", name: "Sombrero de paja", price: 140 }, { id: "corona", name: "Corona", price: 900 },
    cap("gorro_copos", "Gorro de copos", "#b8473a", 110, "copos", "#fbf7ef", "navidad"), { id: "papanoel", name: "Gorro de Papá Noel", price: 150, set: "navidad" }, { id: "reno", name: "Diadema de reno", price: 130, set: "navidad" },
    cap("gorro_calabazas", "Gorro de calabazas", "#4a3a5c", 110, "calabazas", "#e8873f", "halloween"), { id: "bruja", name: "Sombrero de bruja", price: 160, set: "halloween" }, { id: "orejas_gato", name: "Orejas de gato", price: 110, set: "halloween" },
    cap("gorro_corazones", "Gorro de corazones", "#f0b8c0", 110, "corazones", "#c9607e", "sanvalentin"), { id: "diadema_corazones", name: "Diadema de corazones", price: 120, set: "sanvalentin" },
    cap("gorro_sakura", "Gorro de cerezos", "#f6e4e6", 110, "sakura", "#e9a1b5", "asiatico"), { id: "horquilla", name: "Horquillas con flor", price: 110, set: "asiatico" },
    cap("gorro_olas", "Gorro de olas", "#dfeef2", 110, "olas", "#4f7fae", "mediterraneo"), { id: "pamela", name: "Pamela de paja", price: 150, set: "mediterraneo" },
    cap("gorro_cactus", "Gorro de cactus", "#efdcb6", 110, "cactus", "#5f8a55", "americano"), { id: "vaquero", name: "Sombrero vaquero", price: 170, set: "americano" }] },
  ears: { label: "Pendientes", opt: true, items: [
    { id: "aros", name: "Aros dorados", price: 50 }, { id: "perlas", name: "Perlas", price: 70 }, { id: "estrellas", name: "Estrellitas", price: 90 },
    { id: "cascabeles", name: "Cascabeles", price: 80, set: "navidad" }, { id: "calabacitas", name: "Calabacitas", price: 80, set: "halloween" },
    { id: "corazones", name: "Corazones", price: 80, set: "sanvalentin" }, { id: "borlas", name: "Borlas rojas", price: 80, set: "asiatico" }, { id: "coral", name: "Coral", price: 80, set: "mediterraneo" }] },
  /* --- tu clínica --- */
  wall: { label: "Pared", items: [
    { id: "crema", name: "Crema", c: "#f3e6cf", d: "#e2cfae", price: 0 }, { id: "salvia", name: "Salvia", c: "#d3dcc2", d: "#a9b893", price: 80 },
    { id: "cielo", name: "Cielo", c: "#d3e3e6", d: "#9fbcc2", price: 80 }, { id: "rosa", name: "Rosa empolvado", c: "#f1d6cd", d: "#d9ab9c", price: 80 },
    { id: "mostaza", name: "Mostaza suave", c: "#f2deac", d: "#d6b46a", price: 80 },
    { id: "huellas", name: "Papel de huellas", c: "#f5ead6", d: "#d9c09a", price: 200 }, { id: "flores", name: "Papel de flores", c: "#f4e8d8", d: "#c9a77d", price: 220 },
    { id: "rayas", name: "Rayas", c: "#f2e3cb", d: "#c9a77d", price: 180 }, { id: "azulejo", name: "Azulejo verde", c: "#e9efe4", d: "#8fae8b", price: 240 },
    { id: "madera", name: "Madera", c: "#c99a6b", d: "#9c7048", price: 240 }, { id: "noche", name: "Noche estrellada", c: "#3d4766", d: "#2c344d", price: 300 },
    { id: "w_navidad", name: "Papel de acebo", c: "#f6ece0", d: "#b8473a", price: 220, set: "navidad" }, { id: "w_halloween", name: "Papel de murciélagos", c: "#5c4a72", d: "#3e3150", price: 220, set: "halloween" },
    { id: "w_amor", name: "Papel de corazones", c: "#f8e1e4", d: "#e3a4b0", price: 220, set: "sanvalentin" }, { id: "shoji", name: "Paneles shoji", c: "#f6efe0", d: "#8a6a4a", price: 240, set: "asiatico" },
    { id: "cal", name: "Cal y azulejo azul", c: "#fbf8f2", d: "#4f7fae", price: 240, set: "mediterraneo" }, { id: "ladrillo", name: "Ladrillo visto", c: "#c27a5c", d: "#9c5a42", price: 240, set: "americano" }] },
  floor: { label: "Suelo", items: [
    { id: "tarima", name: "Tarima", c: "#c28f5f", price: 0 }, { id: "espiga", name: "Madera en espiga", c: "#c9965f", price: 160 },
    { id: "oscura", name: "Madera oscura", c: "#8a6244", price: 150 },
    { id: "baldosa", name: "Baldosa de barro", c: "#d8896b", price: 130, set: "mediterraneo" }, { id: "hidraulica", name: "Baldosa hidráulica", c: "#efe6d6", price: 200 },
    { id: "damero", name: "Damero", c: "#efe6d6", price: 170, set: "americano" }, { id: "verde", name: "Moqueta verde", c: "#8fa876", price: 140 },
    { id: "tatami", name: "Tatami", c: "#d9c88f", price: 200, set: "asiatico" }] },
  view: { label: "Vista", items: [
    { id: "campo", name: "Campo", price: 0 }, { id: "ciudad", name: "Ciudad", price: 90 }, { id: "mar", name: "Mar", price: 140 },
    { id: "otono", name: "Otoño", price: 120 }, { id: "noche", name: "Noche", price: 160 },
    { id: "nieve", name: "Nevada", price: 140, set: "navidad" }, { id: "luna", name: "Luna de Halloween", price: 160, set: "halloween" },
    { id: "sakura", name: "Cerezos en flor", price: 160, set: "asiatico" }, { id: "pueblo", name: "Pueblo blanco", price: 160, set: "mediterraneo" }, { id: "desierto", name: "Desierto", price: 160, set: "americano" }] },
  curtains: { label: "Cortinas", opt: true, items: [
    { id: "terracota", name: "Terracota", c: "#e6a77f", price: 0 }, { id: "salvia", name: "Salvia", c: "#a9c49a", price: 50 },
    { id: "mostaza", name: "Mostaza", c: "#e8c06a", price: 50 }, { id: "rosa", name: "Rosa", c: "#eab3ae", price: 50, set: "sanvalentin" },
    { id: "lino", name: "Lino", c: "#efe3cf", price: 60 }, { id: "cuadros", name: "Cuadros vichy", c: "#d97a6c", pat: "cuadros", price: 110 },
    { id: "c_navidad", name: "Rojas de acebo", c: "#b8473a", pat: "acebo", pbg: "#fbf2e8", price: 110, set: "navidad" },
    { id: "c_halloween", name: "Moradas", c: "#6a4f86", price: 90, set: "halloween" }, { id: "c_rayas", name: "Rayas azules", c: "#4f7fae", pat: "rayas", pbg: "#fbf8f2", price: 100, set: "mediterraneo" },
    { id: "c_vaquera", name: "Vaqueras", c: "#5b7da3", price: 90, set: "americano" }] },
  table: { label: "Camilla", items: [
    { id: "metal", name: "Acero", price: 0 }, { id: "madera", name: "Madera", price: 140 }, { id: "cojin", name: "Con cojín de flores", price: 220 },
    { id: "hidraulica", name: "Hidráulica", price: 260 }, { id: "acolchada", name: "Acolchada con ruedas", price: 240 }, { id: "bascula_mesa", name: "Con báscula", price: 280 },
    { id: "rustica", name: "Rústica de granja", price: 200 },
    { id: "t_navidad", name: "Con manta navideña", price: 240, set: "navidad" }, { id: "t_halloween", name: "Con manta de calabazas", price: 240, set: "halloween" },
    { id: "t_amor", name: "Con cojín de corazones", price: 240, set: "sanvalentin" }, { id: "t_laca", name: "Lacada roja", price: 260, set: "asiatico" },
    { id: "t_azulejo", name: "Con frente de azulejos", price: 260, set: "mediterraneo" }, { id: "t_diner", name: "Estilo cafetería", price: 260, set: "americano" }] },
  ceiling: { label: "Techo", opt: true, items: [
    { id: "lampara", name: "Lámpara colgante", price: 130 }, { id: "banderines", name: "Banderines", price: 120 }, { id: "farolillos", name: "Farolillos de papel", price: 180 },
    { id: "guirnalda", name: "Guirnalda de luces", price: 220 }, { id: "macrame", name: "Plantas colgantes", price: 240 },
    { id: "espumillon", name: "Guirnalda navideña", price: 200, set: "navidad" }, { id: "murcielagos", name: "Murciélagos colgantes", price: 180, set: "halloween" },
    { id: "hilo_corazones", name: "Hilo de corazones", price: 180, set: "sanvalentin" }, { id: "farol_rojo", name: "Farolillos rojos", price: 200, set: "asiatico" },
    { id: "buganvilla", name: "Buganvilla", price: 200, set: "mediterraneo" }, { id: "ventilador", name: "Ventilador de techo", price: 200, set: "americano" }] },
  wallL: { label: "Cuadro grande", opt: true, items: [
    { id: "diploma", name: "Título enmarcado", price: 60 }, { id: "cuadro", name: "Cuadro de montañas", price: 100 }, { id: "espejo", name: "Espejo redondo", price: 110 },
    { id: "galeria", name: "Fotos de pacientes", price: 140 }, { id: "corcho", name: "Corcho con notas", price: 120 },
    { id: "corona_navidad", name: "Corona de acebo", price: 140, set: "navidad" }, { id: "fantasma", name: "Retrato encantado", price: 140, set: "halloween" },
    { id: "polaroids", name: "Fotos con corazones", price: 140, set: "sanvalentin" }, { id: "abanico", name: "Abanico de papel", price: 150, set: "asiatico" },
    { id: "platos", name: "Platos de cerámica", price: 150, set: "mediterraneo" }, { id: "cartel", name: "Cartel de rancho", price: 140, set: "americano" }] },
  wallC: { label: "Pared centro", opt: true, items: [
    { id: "reloj", name: "Reloj de pared", price: 70 }, { id: "calendario", name: "Calendario", price: 60 }, { id: "huella", name: "Huella enmarcada", price: 90 }, { id: "cuco", name: "Reloj de cuco", price: 230 },
    { id: "muerdago", name: "Muérdago", price: 90, set: "navidad" }, { id: "telarana", name: "Telaraña", price: 90, set: "halloween" },
    { id: "corazon", name: "Corazón enmarcado", price: 90, set: "sanvalentin" }, { id: "ventana_luna", name: "Ventana redonda", price: 160, set: "asiatico" },
    { id: "sol", name: "Espejo de sol", price: 140, set: "mediterraneo" }, { id: "reloj_retro", name: "Reloj retro", price: 120, set: "americano" }] },
  wallR: { label: "Lámina", opt: true, items: [
    { id: "anatomia", name: "Lámina de anatomía", price: 110 }, { id: "gatitos", name: "Póster de gatito", price: 100 }, { id: "pizarra", name: "Pizarra del día", price: 130 },
    { id: "adviento", name: "Calendario de adviento", price: 150, set: "navidad" }, { id: "luna_llena", name: "Póster de luna llena", price: 130, set: "halloween" },
    { id: "carta", name: "Carta de amor", price: 120, set: "sanvalentin" }, { id: "pergamino", name: "Pergamino de bambú", price: 150, set: "asiatico" },
    { id: "faro", name: "Póster del faro", price: 130, set: "mediterraneo" }, { id: "neon", name: "Letrero de neón", price: 180, set: "americano" }] },
  shelf: { label: "Balda", opt: true, items: [
    { id: "botes", name: "Botes de farmacia", price: 120 }, { id: "libros", name: "Libros y cactus", price: 120 }, { id: "pothos", name: "Poto colgante", price: 150 }, { id: "peluches", name: "Peluches", price: 160 },
    { id: "jengibre", name: "Casita de jengibre", price: 150, set: "navidad" }, { id: "golosinas", name: "Tarros de golosinas", price: 140, set: "halloween" },
    { id: "bombones", name: "Bombones y cartas", price: 140, set: "sanvalentin" }, { id: "maneki", name: "Gato de la suerte", price: 160, set: "asiatico" },
    { id: "jarras", name: "Jarras y limones", price: 140, set: "mediterraneo" }, { id: "radio", name: "Radio antigua", price: 150, set: "americano" }] },
  sill: { label: "Alféizar", opt: true, items: [
    { id: "macetas", name: "Suculentas", price: 60 }, { id: "velas", name: "Velas", price: 80 }, { id: "trofeo", name: "Trofeo al mejor veterinario", price: 700 },
    { id: "regalos", name: "Regalitos", price: 110, set: "navidad" }, { id: "calabaza", name: "Calabaza tallada", price: 110, set: "halloween" },
    { id: "rosas", name: "Jarrón de rosas", price: 110, set: "sanvalentin" }, { id: "te", name: "Juego de té", price: 110, set: "asiatico" }, { id: "botijo", name: "Botijo y geranios", price: 110, set: "mediterraneo" }] },
  cornerL: { label: "Rincón", opt: true, items: [
    { id: "bascula", name: "Báscula para mascotas", price: 120 }, { id: "botiquin", name: "Botiquín", price: 140 }, { id: "sofa", name: "Banco de espera", price: 220 },
    { id: "acuario", name: "Acuario", price: 380 },
    { id: "chimenea", name: "Chimenea", price: 360, set: "navidad" }, { id: "caldero", name: "Caldero burbujeante", price: 220, set: "halloween" },
    { id: "globos", name: "Globos de corazón", price: 180, set: "sanvalentin" }, { id: "biombo", name: "Biombo de cerezos", price: 260, set: "asiatico" },
    { id: "tinaja", name: "Tinaja con lavanda", price: 220, set: "mediterraneo" }, { id: "gramola", name: "Gramola", price: 320, set: "americano" }] },
  plant: { label: "Planta", opt: true, items: [
    { id: "monstera", name: "Monstera", price: 80 }, { id: "cactus", name: "Cactus", price: 80 }, { id: "helecho", name: "Helecho", price: 100 }, { id: "ficus", name: "Ficus", price: 140 },
    { id: "arbol_navidad", name: "Árbol de Navidad", price: 260, set: "navidad" }, { id: "calabazas", name: "Montón de calabazas", price: 160, set: "halloween" },
    { id: "arbol_corazones", name: "Arbolito de corazones", price: 180, set: "sanvalentin" }, { id: "bonsai", name: "Bonsái", price: 200, set: "asiatico" },
    { id: "olivo", name: "Olivo", price: 200, set: "mediterraneo" }, { id: "saguaro", name: "Cactus saguaro", price: 180, set: "americano" }] },
  rug: { label: "Alfombra", opt: true, items: [
    { id: "redonda", name: "Redonda", price: 120 }, { id: "rayas", name: "De rayas", price: 140 }, { id: "huella", name: "Con forma de huella", price: 200 },
    { id: "r_navidad", name: "Alfombra de copos", price: 160, set: "navidad" }, { id: "r_calabaza", name: "Alfombra calabaza", price: 160, set: "halloween" },
    { id: "r_corazon", name: "Alfombra corazón", price: 160, set: "sanvalentin" }, { id: "r_tatami", name: "Estera de tatami", price: 160, set: "asiatico" },
    { id: "r_esparto", name: "Esparto redonda", price: 160, set: "mediterraneo" }, { id: "r_rombos", name: "Alfombra de rombos", price: 160, set: "americano" }] },
  pet: { label: "Mascota", opt: true, items: [
    { id: "gato", name: "Gato dormilón", price: 320 }, { id: "perro", name: "Beagle en su cama", price: 340 }, { id: "conejo", name: "Conejo", price: 300 }, { id: "tortuga", name: "Tortuga", price: 260 }] }
};
const SHOP_SECTIONS = [
  { id: "me", label: "Tu aspecto", cats: ["hair", "hairColor", "skin", "face", "outfit", "neck", "eyes", "head", "ears"] },
  { id: "room", label: "Tu clínica", cats: ["wall", "floor", "view", "curtains", "table", "ceiling", "wallL", "wallC", "wallR", "shelf", "sill", "cornerL", "plant", "rug", "pet"] },
  { id: "sets", label: "Colecciones", cats: Object.keys(PAT_SETS) }
];
const SHOP_ORDER = SHOP_SECTIONS[0].cats.concat(SHOP_SECTIONS[1].cats);
const findItem = (cat, id) => SHOP[cat] && SHOP[cat].items.find(i => i.id === id);
const setItems = set => SHOP_ORDER.flatMap(c => SHOP[c].items.filter(i => i.set === set).map(i => ({ cat: c, it: i })));
const FOCUS = {
  wall: "0 0 360 240", floor: "0 150 360 90", view: "12 16 88 88", curtains: "8 12 96 92", table: "186 110 152 104",
  ceiling: "0 0 360 96", wallL: "98 14 84 60", wallC: "156 12 66 60", wallR: "282 12 76 84", shelf: "100 60 80 52",
  sill: "14 64 84 40", cornerL: "0 96 100 96", plant: "290 80 70 112", rug: "50 180 230 60", pet: "0 180 106 60"
};
const AV_FOCUS = { hair: "22 2 76 92", hairColor: "22 2 76 92", skin: "22 2 76 92", face: "22 2 76 92", eyes: "22 2 76 92", head: "16 -6 88 96", ears: "22 2 76 92", neck: "14 50 92 90", outfit: "0 40 120 100" };

/* ---------------- animales pacientes (100x100) ---------------- */
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
  if (mood === "sad") s += `<path d="M${lx - 4.5} ${y - 5.5} L${lx + 3} ${y - 8.5}M${rx - 3} ${y - 8.5} L${rx + 4.5} ${y - 5.5}" ${S} fill="none"/><path d="M${rx + 3.5} ${y + 3} q1.8 3.2 0 4.8 q-1.8 -1.6 0 -4.8Z" fill="#8cc4e0" stroke="${INK}" stroke-width="1"/>`;
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
    g += `<g class="${mood === "sad" ? "" : "wag"}" style="transform-box:fill-box;transform-origin:0% 100%"><path d="M71 88 C82 85 88 76 85 66" stroke="${INK}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M71 88 C82 85 88 76 85 66" stroke="${c.f}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="85" cy="66.5" r="2" fill="${c.m}"/></g>
      <ellipse cx="50" cy="84" rx="27" ry="17" fill="${c.f}" ${S}/><ellipse cx="50" cy="91" rx="20" ry="7" fill="${c.e}" opacity=".18"/><path d="M38 72 C40 86 60 86 62 72 C56 76 44 76 38 72Z" fill="${c.m}"/>
      <path d="M43 79 l2.5 3.5 l2.5 -3.5 l2.5 3.5 l2.5 -3.5 l2.5 3.5 l2.5 -3.5" stroke="${c.m}" stroke-width="2" fill="none" stroke-linejoin="round"/>
      <path d="M27 88 C25 94 28 98 33 98" stroke="${c.e}" stroke-width="1.4" fill="none" opacity=".5"/><path d="M73 88 C75 94 72 98 67 98" stroke="${c.e}" stroke-width="1.4" fill="none" opacity=".5"/>
      <ellipse cx="40" cy="97" rx="7" ry="4.5" fill="${c.f}" ${S}/><ellipse cx="60" cy="97" rx="7" ry="4.5" fill="${c.f}" ${S}/>${toes(40, 97)}${toes(60, 97)}
      ${c.ear === 0 ? "" : ears}<ellipse cx="50" cy="46" rx="23" ry="21" fill="${c.f}" ${S}/><path d="M47 26 q3 -6 6 0" ${S1}/>
      <path d="M28 50 l-2.5 3 l3 1 l-2 3M72 50 l2.5 3 l-3 1 l2 3" stroke="${c.f}" stroke-width="2.4" fill="none" stroke-linejoin="round"/><path d="M28 50 l-2.5 3 l3 1 l-2 3M72 50 l2.5 3 l-3 1 l2 3" ${S1}/>
      ${c.patch ? `<path d="M56 33 C64 30 70 36 68 44 C62 47 56 43 56 33Z" fill="${c.e}"/>` : ""}${c.brow ? `<ellipse cx="41" cy="37" rx="3" ry="2" fill="${c.m}"/><ellipse cx="59" cy="37" rx="3" ry="2" fill="${c.m}"/>` : ""}
      <ellipse cx="50" cy="57" rx="11.5" ry="8.5" fill="${c.m}" ${S}/>${c.ear === 0 ? ears : ""}
      <path d="M33 66 Q50 74 67 66" stroke="${col}" stroke-width="4.5" fill="none" stroke-linecap="round"/><circle cx="50" cy="72.5" r="3.2" fill="#f0c25e" stroke="${INK}" stroke-width="1.1"/>
      ${eyes(mood, 41, 59, 44)}${cheeks(36, 64, 52)}<ellipse cx="50" cy="52.5" rx="4.8" ry="3.4" fill="${INK}"/><ellipse cx="48.6" cy="51.6" rx="1.5" ry=".9" fill="#fff" opacity=".7"/><path d="M50 55.8 v2.4" ${S1}/>${smallMouth(mood, 50, 59)}`;
  } else if (species === "cat") {
    g += `<path d="M72 92 C92 90 94 70 85 63" stroke="${INK}" stroke-width="9.5" fill="none" stroke-linecap="round"/><path d="M72 92 C92 90 94 70 85 63" stroke="${c.f}" stroke-width="6" fill="none" stroke-linecap="round"/>
      ${c.tabby ? `<path d="M88 80 l4 1M90 72 l4 -1M86 66 l3 -2" stroke="${c.e}" stroke-width="2" stroke-linecap="round"/>` : ""}${c.point ? `<path d="M88 72 C92 68 90 64 85 63" stroke="${c.e}" stroke-width="6" fill="none" stroke-linecap="round"/>` : ""}
      <ellipse cx="50" cy="84" rx="24" ry="17" fill="${c.f}" ${S}/><ellipse cx="50" cy="91" rx="18" ry="7" fill="${c.e}" opacity=".16"/>
      ${c.bib ? `<path d="M42 70 Q50 86 58 70 Q50 74 42 70Z" fill="#fbf7ef"/>` : ""}${c.tabby ? `<path d="M30 82 q4 -3 8 0M62 82 q4 -3 8 0M32 90 q4 -3 7 0M61 90 q4 -3 7 0" stroke="${c.e}" stroke-width="2" fill="none" stroke-linecap="round"/>` : ""}
      <ellipse cx="41" cy="97" rx="6" ry="4" fill="${c.bib ? "#fbf7ef" : c.f}" ${S}/><ellipse cx="59" cy="97" rx="6" ry="4" fill="${c.bib ? "#fbf7ef" : c.f}" ${S}/>${toes(41, 97)}${toes(59, 97)}
      <path d="M30 40 L32 14 L48 29 Z" fill="${c.point ? c.e : c.f}" ${S}/><path d="M34 33 L35 21 L43 29Z" fill="#f1a7a0"/><path d="M70 40 L68 14 L52 29 Z" fill="${c.point ? c.e : c.f}" ${S}/><path d="M66 33 L65 21 L57 29Z" fill="#f1a7a0"/>
      <ellipse cx="50" cy="47" rx="23.5" ry="20" fill="${c.f}" ${S}/>${c.point ? `<ellipse cx="50" cy="55" rx="11" ry="9" fill="${c.e}" opacity=".7"/>` : ""}
      ${c.tabby ? `<path d="M46 29 L47 36M50 28 L50 36M54 29 L53 36M28 46 l5 1M28 51 l5 0M72 46 l-5 1M72 51 l-5 0" stroke="${c.e}" stroke-width="2.2" stroke-linecap="round"/>` : ""}${c.patch ? `<path d="M30 42 C32 32 42 30 46 34 C42 40 36 44 30 42Z" fill="${c.e}"/>` : ""}
      <ellipse cx="45.5" cy="55.5" rx="4.5" ry="3.2" fill="#fbf7ef" opacity=".85"/><ellipse cx="54.5" cy="55.5" rx="4.5" ry="3.2" fill="#fbf7ef" opacity=".85"/>
      ${eyes(mood, 41, 59, 46, true)}${cheeks(35, 65, 54)}<path d="M47.6 52.4 L52.4 52.4 L50 55.2Z" fill="#e58b8b" stroke="${INK}" stroke-width="1"/>
      ${mood === "happy" ? `<path d="M45 57 Q50 63 55 57" ${S} fill="#e8857c"/>` : mood === "sad" ? `<path d="M46.5 59.5 Q50 56.5 53.5 59.5" ${S} fill="none"/>` : `<path d="M50 55.2 Q48 58.4 45.8 57M50 55.2 Q52 58.4 54.2 57" ${S1}/>`}
      <path d="M38 53 L25 51M38 56 L25 57.5M62 53 L75 51M62 56 L75 57.5" stroke="${INK}" stroke-width=".9" stroke-linecap="round"/>
      <path d="M36 66 Q50 72 64 66" stroke="${col}" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="50" cy="71" r="2.6" fill="#f0c25e" stroke="${INK}" stroke-width="1"/>`;
  } else if (species === "horse") {
    g += `<path d="M30 100 C30 80 36 66 42 58 L62 58 C68 70 72 84 72 100 Z" fill="${c.f}" ${S}/><path d="M58 64 C64 74 68 86 68 100 L60 100 C60 86 58 74 54 66Z" fill="${c.e}" opacity=".15"/>
      <path d="M38 20 C30 34 28 54 32 76 C38 64 40 48 46 34 Z" fill="${c.e}" ${S}/><path d="M40 22 L41 6 L49 18Z" fill="${c.f}" ${S}/><path d="M60 18 L63 6 L66 22Z" fill="${c.f}" ${S}/>
      <ellipse cx="52" cy="40" rx="16.5" ry="24" fill="${c.f}" ${S}/>${c.blaze ? `<path d="M50 24 C48 36 49 47 50 54 C52 47 54 36 54 24Z" fill="#f7f2e8"/>` : ""}
      <path d="M43 18 C47 27 57 27 61 18 C56 22 49 23 43 18Z" fill="${c.e}" ${S}/><ellipse cx="52" cy="59" rx="14" ry="10" fill="${c.m}" ${S}/>
      <ellipse cx="46.5" cy="60" rx="1.7" ry="2.5" fill="${INK}"/><ellipse cx="57.5" cy="60" rx="1.7" ry="2.5" fill="${INK}"/>
      <path d="M38.5 50 C42 56 62 56 65.5 50" stroke="#c0453a" stroke-width="3" fill="none"/><path d="M39 34 L39 50M65 34 L65 50" stroke="#c0453a" stroke-width="3"/>
      <circle cx="39" cy="50" r="2" fill="#f0c25e" stroke="${INK}" stroke-width="1"/><circle cx="65" cy="50" r="2" fill="#f0c25e" stroke="${INK}" stroke-width="1"/>
      ${eyes(mood, 44.5, 59.5, 38)}${cheeks(41, 63, 47)}
      ${mood === "happy" ? `<path d="M46 65 Q52 70 58 65" ${S} fill="none"/>` : mood === "sad" ? `<path d="M47 67 Q52 64 57 67" ${S} fill="none"/>` : `<path d="M47.5 65.5 Q52 67 56.5 65.5" ${S1}/>`}`;
  } else if (species === "cow") {
    g += `<ellipse cx="50" cy="87" rx="30" ry="15" fill="#f8f4ec" ${S}/><path d="M30 80 C36 76 42 80 40 88 C34 90 30 86 30 80Z" fill="${c.e}"/><path d="M62 84 C68 80 76 84 72 92 C66 94 62 90 62 84Z" fill="${c.e}"/>
      <path d="M33 26 C26 22 26 13 30 11 C31 17 34 21 39 23Z" fill="#efe3c4" ${S}/><path d="M67 26 C74 22 74 13 70 11 C69 17 66 21 61 23Z" fill="#efe3c4" ${S}/>
      <path d="M31 36 C20 33 13 38 15 43 C21 46 28 43 32 41Z" fill="#f8f4ec" ${S}/><path d="M69 36 C80 33 87 38 85 43 C79 46 72 43 68 41Z" fill="#f8f4ec" ${S}/><rect x="79" y="40" width="6" height="7" rx="1.2" fill="#f3d36b" stroke="${INK}" stroke-width="1"/>
      <ellipse cx="50" cy="43" rx="21" ry="20" fill="#f8f4ec" ${S}/><path d="M53 25 C62 22 69 29 67 38 C60 41 55 35 53 25Z" fill="${c.e}"/><path d="M44 22 C47 27 53 27 56 22" ${S} fill="${c.e}"/>
      <ellipse cx="50" cy="59" rx="17" ry="10" fill="#f2b8b0" ${S}/><ellipse cx="44" cy="58" rx="2" ry="2.7" fill="#8a4b45"/><ellipse cx="56" cy="58" rx="2" ry="2.7" fill="#8a4b45"/>
      ${c.bell ? `<path d="M36 70 Q50 76 64 70" stroke="#7a5638" stroke-width="4" fill="none"/><path d="M46 74 h8 l1.5 8 h-11Z" fill="#f0c25e" ${S1}/>` : ""}
      ${eyes(mood, 41, 59, 42)}${mood === "happy" ? `<path d="M45 64 Q50 68 55 64" ${S} fill="none"/>` : mood === "sad" ? `<path d="M46 66 Q50 63 54 66" ${S} fill="none"/>` : `<path d="M46.5 64.5 Q50 66 53.5 64.5" ${S1}/>`}`;
  } else {
    g += `<path d="M76 84 c7 -3 9 4 5 6 c-4 2 -6 -4 -1 -6" ${S} fill="none"/><ellipse cx="50" cy="85" rx="28" ry="17" fill="#f4b9b2" ${S}/><ellipse cx="50" cy="92" rx="21" ry="7" fill="#c97f78" opacity=".2"/>
      ${c.spots ? `<path d="M30 80 C34 76 40 79 38 85 C33 87 30 85 30 80Z" fill="#8a6a5e" opacity=".75"/>` : ""}
      <ellipse cx="40" cy="98" rx="6" ry="4" fill="#f4b9b2" ${S}/><ellipse cx="60" cy="98" rx="6" ry="4" fill="#f4b9b2" ${S}/>
      <ellipse cx="50" cy="46" rx="23" ry="21" fill="#f6c3bc" ${S}/>${c.spots ? `<path d="M58 30 C64 28 69 33 67 39 C62 40 58 36 58 30Z" fill="#8a6a5e" opacity=".7"/>` : ""}
      <path d="M30 33 L27 15 L44 25 Z" fill="#f4b9b2" ${S}/><path d="M70 33 L73 15 L56 25 Z" fill="#f4b9b2" ${S}/>
      <ellipse cx="50" cy="55" rx="10.5" ry="7.5" fill="#ee9e98" ${S}/><ellipse cx="46.5" cy="55.5" rx="1.7" ry="2.6" fill="#9b5450"/><ellipse cx="53.5" cy="55.5" rx="1.7" ry="2.6" fill="#9b5450"/>
      ${eyes(mood, 40, 60, 42)}${cheeks(34, 66, 52)}${mood === "happy" ? `<path d="M45 64 Q50 69 55 64" ${S} fill="none"/>` : mood === "sad" ? `<path d="M46 66 Q50 63 54 66" ${S} fill="none"/>` : `<path d="M47 64.5 Q50 66 53 64.5" ${S1}/>`}`;
  }
  return g;
}

/* ---------------- tu personaje (120x140) ---------------- */
const BODY = `M18 140 C18 108 34 91 60 89 C86 91 102 108 102 140 Z`;
const darken = (hex, f = .78) => "#" + [1, 3, 5].map(i => Math.round(parseInt(hex.slice(i, i + 2), 16) * f).toString(16).padStart(2, "0")).join("");
function outfitSVG(it, sk, k) {
  let back = "", t = "";
  const fill = it.pat ? `url(#${k}o)` : it.c;
  let defs = it.pat ? patternDef(k + "o", it.pat, it.c, it.pc) : "";
  switch (it.k) {
    case "bata":
      t = `<path d="M49 90 L60 108 L71 90 Z" fill="#9cc0cf" ${S}/><path d="${BODY}" fill="#fbf7ef" ${S}/><path d="M49 90 L60 108 L71 90" fill="#9cc0cf" ${S}/>
        <path d="M49 90 L45 140M71 90 L75 140" ${S1}/>${[118, 130].map((y, i) => `<circle cx="${44.5 - i * .5}" cy="${y}" r="${it.btn ? 2.2 : 1.4}" fill="${it.btn ? ["#e58aa6", "#7fb2cf"][i] : INK}" ${it.btn ? `stroke="${INK}" stroke-width=".9"` : ""}/>`).join("")}
        <rect x="77" y="116" width="13" height="10" rx="2" fill="#fbf7ef" ${S}/><path d="M81 112 v6" stroke="#4f6fae" stroke-width="2" stroke-linecap="round"/><path d="M85 113 v5" stroke="#c0453a" stroke-width="2" stroke-linecap="round"/>
        <rect x="28" y="106" width="14" height="7" rx="1.5" fill="#f3e6cf" stroke="${INK}" stroke-width="1"/><path d="M31 109.5 h8" stroke="#c9a77d" stroke-width="1.2"/>
        ${it.btn ? PAWP(84, 132, .8, "#e8a65a") : ""}`; break;
    case "scrubs": {
      const tc = darken(it.c, .72);
      t = `<path d="${BODY}" fill="${fill}" ${S}/><path d="M50 90 L60 105 L70 90 Z" fill="${sk}"/><path d="M48.5 89.5 L60 106 L71.5 89.5" fill="none" stroke="${tc}" stroke-width="3.2" stroke-linejoin="round"/><path d="M48.5 89.5 L60 106 L71.5 89.5" ${S1}/>
        <path d="M26 112 q6 -2 10 1M94 112 q-6 -2 -10 1" stroke="${tc}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <rect x="69" y="110" width="13" height="10" rx="2" fill="${fill}" ${S}/><path d="M69 112.5 h13" stroke="${tc}" stroke-width="1.6"/><path d="M72 106 v6" stroke="#4f6fae" stroke-width="2" stroke-linecap="round"/><path d="M75.5 107 v5" stroke="#f3d36b" stroke-width="2" stroke-linecap="round"/>
        <path d="M34 128 h14v8h-14Z" fill="${fill}" ${S1}/><path d="M60 106 V140" stroke="${INK}" stroke-width=".9" opacity=".22"/>`; break; }
    case "jersey": {
      const c = it.c, d = darken(c, .8);
      t = `<path d="${BODY}" fill="${c}" ${S}/>${[104, 114, 124, 134].map(y => `<path d="M${y > 120 ? 20 : 26} ${y} Q60 ${y + 4} ${y > 120 ? 100 : 94} ${y}" stroke="${darken(c, 1.18)}" stroke-width="2" stroke-dasharray="2 3" fill="none"/>`).join("")}<path d="M48 91 Q60 99 72 91" ${S} fill="${d}"/>`;
      if (it.motif === "navidad") t += `<rect x="24" y="111" width="72" height="13" fill="#fbf7ef" opacity=".95"/><path d="M24 111 h72M24 124 h72" stroke="${INK}" stroke-width="1"/>${[32, 48, 64, 80].map((x, i) => i % 2 ? `<path d="M${x} 113 l-4 8 h8Z" fill="#5f8a55"/><circle cx="${x}" cy="113" r="1" fill="#f3d36b"/>` : STARP(x, 117.5, 3.2, "#b8473a")).join("")}<path d="M26 130 l4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3 4 -3 4 3" stroke="#fbf7ef" stroke-width="1.6" fill="none"/>`;
      if (it.motif === "corazones") t += [[38, 112], [60, 116], [82, 112], [48, 128], [72, 128]].map(([x, y]) => HEART(x, y, 1.6, "#fbf7ef")).join("");
      break; }
    case "cardigan": t = `<path d="${BODY}" fill="#9c7bb0" ${S}/><path d="M52 90 L60 100 L68 90 L66 140 L54 140Z" fill="#fbf7ef" ${S}/><path d="M60 100 L60 140" ${S1}/>${[110, 122, 134].map(y => `<circle cx="51" cy="${y}" r="1.8" fill="#f3d36b" stroke="${INK}" stroke-width=".8"/>`).join("")}<path d="M28 132 h14M78 132 h14" stroke="#7d5f92" stroke-width="2.5"/>`; break;
    case "chaleco": t = `<path d="${BODY}" fill="#a9c7d9" ${S}/><path d="M50 90 L60 100 L70 90" fill="none" ${S1}/><path d="M18 140 C18 108 30 94 48 90 L56 140Z" fill="#6f9e6b" ${S}/><path d="M102 140 C102 108 90 94 72 90 L64 140Z" fill="#6f9e6b" ${S}/><path d="M30 104 q4 2 8 0M28 116 q5 2 10 0M84 104 q-4 2 -8 0M88 116 q-5 2 -10 0" stroke="#8fbf8a" stroke-width="1.4" fill="none"/><rect x="40" y="118" width="10" height="6" rx="1" fill="#5f8a55" ${S1}/>`; break;
    case "peto": t = `<path d="${BODY}" fill="#c95b4a" ${S}/><path d="M30 104 L90 104M26 118 L94 118M42 92 L36 140M60 90 L60 140M78 92 L84 140" stroke="#e48d7b" stroke-width="1.5"/><path d="M43 140 L45 108 L75 108 L77 140Z" fill="#5f84a8" ${S}/><path d="M45 110 L40 92M75 110 L80 92" stroke="#5f84a8" stroke-width="4" stroke-linecap="round"/><circle cx="47" cy="112" r="1.8" fill="#f0c25e"/><circle cx="73" cy="112" r="1.8" fill="#f0c25e"/><rect x="53" y="116" width="14" height="10" rx="2" fill="#6f93b6" ${S}/>`; break;
    case "sudadera": t = `<path d="M40 94 Q60 108 80 94 L78 90 Q60 100 42 90Z" fill="#c99847" ${S}/><path d="${BODY}" fill="#e2b45a" ${S}/><path d="M42 93 Q60 104 78 93" ${S} fill="none"/><path d="M54 96 v10M66 96 v10" stroke="#fbf7ef" stroke-width="1.6" stroke-linecap="round"/><path d="M40 140 L43 126 Q60 120 77 126 L80 140Z" fill="#d6a74e" ${S}/>${PAWP(60, 112, 1.3, INK)}`; break;
    case "hawaiana": t = `<path d="${BODY}" fill="#4f9e94" ${S}/><path d="M50 90 L60 100 L70 90" fill="${sk}" ${S}/>${[[34, 112], [80, 108], [50, 128], [72, 130], [90, 128], [28, 132], [62, 114]].map(([x, y], i) => FLOWER(x, y, 2.6, i % 2 ? "#f3d36b" : "#f29b8a", "#fff6d8")).join("")}<path d="M60 100 L60 140" ${S1}/>`; break;
    case "traje": t = `<path d="${BODY}" fill="#3f4a5c" ${S}/><path d="M50 90 L60 114 L70 90Z" fill="#fbf7ef" ${S}/><path d="M57.5 95 L62.5 95 L63.5 111 L60 116 L56.5 111Z" fill="#b8473a" ${S}/><path d="M50 90 L54 120M70 90 L66 120" ${S1}/><path d="M76 108 l6 -2 l1 3 l-6 2Z" fill="#fbf7ef"/>`; break;
    case "capa": back = `<path d="M8 140 C12 104 30 86 60 84 C90 86 108 104 112 140Z" fill="#c0453a" ${S}/>`; t = `<path d="${BODY}" fill="#4a64a3" ${S}/><circle cx="60" cy="114" r="9" fill="#f0c25e" ${S}/>${PAWP(60, 114, 1.1, INK)}<path d="M44 92 L52 89M76 92 L68 89" stroke="#c0453a" stroke-width="4" stroke-linecap="round"/>`; break;
    case "vampiro": back = `<path d="M6 140 C10 100 26 80 40 76 L60 90 L80 76 C94 80 110 100 114 140Z" fill="#2e2630" ${S}/><path d="M40 76 L48 96 L60 90 L72 96 L80 76" fill="#b8473a" ${S}/>`; t = `<path d="${BODY}" fill="#2e2630" ${S}/><path d="M48 90 L60 116 L72 90Z" fill="#fbf7ef" ${S}/><path d="M60 94 l-6 -4 v8Z M60 94 l6 -4 v8Z" fill="#b8473a" ${S1}/><path d="M30 104 L48 92M90 104 L72 92" stroke="#b8473a" stroke-width="2"/>`; break;
    case "haori": defs += patternDef(k + "h", "sakura", "#3f5878", "#e9a1b5"); t = `<path d="${BODY}" fill="#c9b8a0" ${S}/><path d="M18 140 C18 110 30 96 46 91 L54 140Z" fill="url(#${k}h)" ${S}/><path d="M102 140 C102 110 90 96 74 91 L66 140Z" fill="url(#${k}h)" ${S}/><path d="M46 91 L56 140M74 91 L64 140" stroke="#2d4058" stroke-width="5"/><path d="M54 116 q6 4 12 0" stroke="#f3e6cf" stroke-width="2" fill="none"/><circle cx="60" cy="118" r="2" fill="#f3e6cf"/>`; break;
    case "marinera": defs += patternDef(k + "m", "marinera", "#fbf8f2", "#3f5878"); t = `<path d="${BODY}" fill="url(#${k}m)" ${S}/><path d="M42 92 Q60 98 78 92" stroke="#3f5878" stroke-width="3" fill="none"/><path d="M42 92 Q60 98 78 92" ${S1}/>`; break;
    case "vaquera": t = `<path d="${BODY}" fill="#6f8fb4" ${S}/><path d="M50 90 L60 98 L70 90 L68 86 L60 92 L52 86Z" fill="#5b7da3" ${S}/><path d="M24 108 Q60 100 96 108" stroke="#f3d36b" stroke-width="1.2" stroke-dasharray="3 2" fill="none"/><path d="M60 98 V140" ${S1}/>${[108, 118, 128, 138].map(y => `<circle cx="60" cy="${y}" r="1.5" fill="#fbf7ef" stroke="${INK}" stroke-width=".6"/>`).join("")}<path d="M36 112 h14 l-2 6 h-10Z M70 112 h14 l-2 6 h-10Z" fill="#5b7da3" ${S1}/>`; break;
    default: t = `<path d="${BODY}" fill="#fbf7ef" ${S}/>`;
  }
  return { back, torso: (defs ? `<defs>${defs}</defs>` : "") + t };
}
function headSVG(it, hc, k) {
  if (!it) return "";
  if (it.k === "cap") {
    const fill = it.pat ? `url(#${k}c)` : it.c, d = darken(it.c, .72);
    return `${it.pat ? `<defs>${patternDef(k + "c", it.pat, it.c, it.pc)}</defs>` : ""}<path d="M83 42 l8 -4 l1 6Z M83 43 l7 4 l-2 4Z" fill="${it.c}" ${S1}/>
      <path d="M35 50 C34 30 46 22 60 22 C76 22 86 30 85 50 C76 45 44 45 35 50Z" fill="${fill}" ${S}/><path d="M35.5 48 C46 43.5 74 43.5 84.5 48" stroke="${d}" stroke-width="3" fill="none"/><path d="M44 30 q6 -4 14 -4" stroke="#fff" stroke-width="2" opacity=".35" fill="none" stroke-linecap="round"/>`;
  }
  switch (it.id) {
    case "flor": return `<g transform="translate(79 35)">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="3.6" ry="5.5" transform="rotate(${a}) translate(0 -5)" fill="#f29b8a" ${S1}/>`).join("")}<circle r="3" fill="#f3d36b" ${S}/></g>`;
    case "diadema": return `<path d="M37 46 C40 28 80 28 83 46" stroke="#e58aa6" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M72 30 l-7 -5 v10Z M72 30 l7 -5 v10Z" fill="#e58aa6" ${S1}/><circle cx="72" cy="30" r="2" fill="#c9607e"/>`;
    case "lana": return `<path d="M34 50 C34 26 86 26 86 50 Z" fill="#c95b4a" ${S}/><path d="M44 30 v14M52 28 v16M60 27 v17M68 28 v16M76 30 v14" stroke="#a8483a" stroke-width="1.4"/><rect x="32" y="44" width="56" height="9" rx="4" fill="#a8483a" ${S}/><circle cx="60" cy="24" r="6.5" fill="#f3e6cf" ${S}/>`;
    case "boina": return `<path d="M34 44 C34 28 52 22 66 24 C82 26 92 34 86 42 C76 46 46 48 34 44Z" fill="#3f4a5c" ${S}/><path d="M62 24 l1 -5" ${S}/>`;
    case "paja": return `<ellipse cx="60" cy="40" rx="37" ry="8" fill="#e2c27a" ${S}/><path d="M42 40 C42 22 78 22 78 40 Z" fill="#e8cc89" ${S}/><path d="M42 36 C52 39 68 39 78 36" stroke="#c0453a" stroke-width="3.5" fill="none"/>`;
    case "corona": return `<path d="M42 36 L43 18 L51 28 L60 13 L69 28 L77 18 L78 36Z" fill="#f1c75b" ${S}/><circle cx="60" cy="29" r="2.6" fill="#c0453a"/><circle cx="48" cy="31" r="1.6" fill="#4f6fae"/><circle cx="72" cy="31" r="1.6" fill="#5f8a55"/>`;
    case "papanoel": return `<path d="M36 46 C38 24 58 14 80 18 C90 20 96 30 96 42" fill="none"/><path d="M36 46 C38 26 56 16 76 20 C88 23 94 34 92 46 L84 42 C84 34 80 30 74 30 C60 30 46 36 36 46Z" fill="#c0453a" ${S}/><path d="M76 20 C90 22 98 34 96 46" stroke="#c0453a" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="96" cy="48" r="5.5" fill="#fbf7ef" ${S}/><rect x="32" y="42" width="56" height="9" rx="4.5" fill="#fbf7ef" ${S}/>`;
    case "reno": return `<path d="M37 46 C40 28 80 28 83 46" stroke="#8a6244" stroke-width="4" fill="none" stroke-linecap="round"/>${[[42, -1], [78, 1]].map(([x, s]) => `<path d="M${x} 32 C${x - 4 * s} 22 ${x - 2 * s} 14 ${x - 6 * s} 8 M${x - 2 * s} 22 l${-7 * s} -4 M${x - 3 * s} 15 l${4 * s} -6" stroke="#a87447" stroke-width="3.4" fill="none" stroke-linecap="round"/>`).join("")}<circle cx="40" cy="36" r="2" fill="#c0453a"/><circle cx="80" cy="36" r="2" fill="#c0453a"/>`;
    case "bruja": return `<ellipse cx="60" cy="40" rx="38" ry="7" fill="#3a2f45" ${S}/><path d="M42 40 C46 26 52 14 58 6 C62 2 70 4 72 10 C66 10 64 14 66 20 C70 28 76 34 78 40Z" fill="#4a3a5c" ${S}/><path d="M44 35 C54 38 68 38 77 35" stroke="#e8873f" stroke-width="4" fill="none"/><rect x="56" y="31" width="7" height="7" fill="none" stroke="#f3d36b" stroke-width="1.6"/>`;
    case "orejas_gato": return `<path d="M37 46 C40 28 80 28 83 46" stroke="#2e2630" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M38 36 L40 18 L52 30Z M82 36 L80 18 L68 30Z" fill="#2e2630" ${S}/><path d="M42 31 L42.5 23 L48 29Z M78 31 L77.5 23 L72 29Z" fill="#e58aa6"/>`;
    case "diadema_corazones": return `<path d="M37 46 C40 28 80 28 83 46" stroke="#e58aa6" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M48 31 L46 20M72 31 L74 20" stroke="${INK}" stroke-width="1.2"/>${HEART(46, 18, 1.8, "#e14f6c")}${HEART(74, 18, 1.8, "#e14f6c")}`;
    case "horquilla": return `<path d="M70 26 L86 16M74 30 L90 22" stroke="#2e2630" stroke-width="2" stroke-linecap="round"/><g transform="translate(70 28)">${FLOWER(0, 0, 3, "#f2b5c4", "#c9607e")}</g><path d="M86 16 l3 5 M90 22 l2 5" stroke="#c0453a" stroke-width="1.4"/>`;
    case "pamela": return `<ellipse cx="60" cy="40" rx="44" ry="9" fill="#ead39b" ${S}/><path d="M40 40 C40 22 80 22 80 40Z" fill="#efdcab" ${S}/><path d="M40 36 C52 39 68 39 80 36" stroke="#4f7fae" stroke-width="3.5" fill="none"/><path d="M26 42 q4 2 8 2M86 44 q4 0 8 -2" stroke="#c9a65a" stroke-width="1" fill="none"/>`;
    case "vaquero": return `<path d="M18 40 C24 48 40 46 60 45 C80 46 96 48 102 40 C96 44 88 42 82 40 L78 22 C74 14 68 18 60 18 C52 18 46 14 42 22 L38 40 C32 42 24 44 18 40Z" fill="#a8724a" ${S}/><path d="M39 36 C50 39 70 39 81 36" stroke="#6b4430" stroke-width="3.5" fill="none"/><path d="M60 18 v6" ${S1}/>`;
    default: return "";
  }
}
function avatarG(eq, mood) {
  mood = mood || "neutral";
  const k = "a" + (uid++);
  const hcI = findItem("hairColor", eq.hairColor) || SHOP.hairColor.items[0], hc = hcI.c, sk = (findItem("skin", eq.skin) || SHOP.skin.items[1]).c;
  const H = `fill="${hc}" ${S}`;
  const shine = `<path d="M46 33 Q53 28.5 61 29.5" stroke="#fff" stroke-width="2.2" opacity=".32" fill="none" stroke-linecap="round"/>`;
  const fringeShort = `<path d="M36 52 C34 32 46 26 60 26 C76 26 86 34 84 52 C80 42 72 38 62 38 C52 38 42 42 36 52 Z" ${H}/>`;
  const hairBack = {
    melena: `<path d="M34 52 C30 30 44 24 60 24 C78 24 90 32 86 54 L90 102 C80 106 74 100 76 86 L44 86 C46 100 40 106 30 102 Z" ${H}/>`,
    media: `<path d="M34 54 C30 30 44 24 60 24 C78 24 90 30 86 54 L88 78 C80 83 74 79 74 72 L46 72 C46 79 40 83 32 78Z" ${H}/>`,
    coleta: `<path d="M80 40 C100 44 102 72 90 90 C88 74 84 62 78 54 Z" ${H}/>`,
    mono: `<circle cx="60" cy="23" r="10" ${H}/>`,
    trenzas: [36, 84].map(x => [0, 1, 2, 3].map(i => `<ellipse cx="${x + (x < 60 ? -2 : 2) * i / 2}" cy="${66 + i * 9}" rx="5" ry="6" ${H}/>`).join("") + `<path d="M${x - 3} 103 h6" stroke="#c0453a" stroke-width="3" stroke-linecap="round"/>`).join("")
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
    tupe: `<path d="M36 52 C33 30 46 22 62 20 C74 18 89 24 86 36 C88 44 85 50 84 52 C80 40 70 36 58 37 C48 38 41 44 36 52Z" ${H}/>` + shine,
    rizos: [[40, 42, 9], [47, 32, 10], [60, 27, 10.5], [73, 32, 10], [80, 42, 9], [85, 52, 7], [35, 52, 7]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" ${H}/>`).join(""),
    cresta: `<path d="M54 36 L50 14 L58 22 L61 6 L65 22 L73 13 L68 36 Z" ${H}/>`,
    calvo: `<path d="M44 34 q4 -3 9 -3" stroke="#fff" stroke-width="2" opacity=".5" fill="none" stroke-linecap="round"/>`
  }[eq.hair] || "";
  const oi = findItem("outfit", eq.outfit) || SHOP.outfit.items[0];
  const { back, torso } = outfitSVG(oi, sk, k);
  const shade = `<path d="M18 140 C18 120 24 108 32 101 C30 114 30 128 32 140Z" fill="${INK}" opacity=".08"/><path d="M102 140 C102 120 96 108 88 101 C90 114 90 128 88 140Z" fill="${INK}" opacity=".08"/>`;
  const neckAcc = {
    esteto: `<path d="M48 90 C46 106 52 116 60 116 C68 116 74 106 72 90" stroke="#55626b" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="60" cy="118" r="4.5" fill="#c9d3d9" ${S}/>`,
    panuelo: `<path d="M47 89 L73 89 L60 103 Z" fill="#c0453a" ${S}/><circle cx="56" cy="93" r="1" fill="#fff"/><circle cx="63" cy="95" r="1" fill="#fff"/>`,
    lunares: `<path d="M46 89 L74 89 L60 105 Z" fill="#c0453a" ${S}/>${[[53, 92], [60, 92], [67, 92], [57, 97], [63, 97], [60, 101]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fbf7ef"/>`).join("")}`,
    bandana: `<path d="M46 89 L74 89 L60 104 Z" fill="#4f6fae" ${S}/>${[[54, 92], [64, 93], [59, 98]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="none" stroke="#fbf7ef" stroke-width=".8"/>`).join("")}`,
    collar: [0, 1, 2, 3, 4, 5, 6].map(i => { const t = i / 6, x = 48 + 24 * t, y = 92 + 9 * Math.sin(Math.PI * t); return `<circle cx="${x}" cy="${y}" r="2.2" fill="${["#f29b8a", "#f3d36b", "#9cc0cf"][i % 3]}" stroke="${INK}" stroke-width=".9"/>`; }).join(""),
    collar_corazones: `<path d="M48 91 Q60 104 72 91" stroke="#f3d36b" stroke-width="1.2" fill="none"/>${HEART(60, 100, 1.4, "#e14f6c")}`,
    pajarita: `<path d="M60 94 L50 88 L50 100 Z M60 94 L70 88 L70 100Z" fill="#b8473a" ${S}/><circle cx="60" cy="94" r="2.6" fill="#a03c31" ${S}/>`,
    bufanda: `<path d="M43 88 Q60 97 77 88 L78 96 Q60 106 42 96Z" fill="#5f8a55" ${S}/><path d="M66 98 L70 124 L62 125 L60 100Z" fill="#5f8a55" ${S}/>`,
    bufanda_navidad: `<defs>${patternDef(k + "b", "rayas", "#fbf7ef", "#c0453a")}</defs><path d="M43 88 Q60 97 77 88 L78 96 Q60 106 42 96Z" fill="url(#${k}b)" ${S}/><path d="M66 98 L70 124 L62 125 L60 100Z" fill="url(#${k}b)" ${S}/><path d="M62 125 l-1 3M65 125 v3M68 124 l1 3" ${S1}/>`
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
    gafas_sol: `<rect x="43.5" y="51.5" width="15" height="10" rx="4" fill="#2b2a2e" ${S}/><rect x="61.5" y="51.5" width="15" height="10" rx="4" fill="#2b2a2e" ${S}/><path d="M58.5 55 L61.5 55" ${S}/>`,
    gafas_corazon: [51, 69].map(x => `<path d="M${x} 62 C${x - 9} 56 ${x - 6} 49 ${x} 53 C${x + 6} 49 ${x + 9} 56 ${x} 62Z" fill="#e8708f" fill-opacity=".85" ${S}/>`).join("") + `<path d="M57 55 L63 55" ${S}/>`
  }[eq.eyes] || "";
  const earAcc = {
    aros: `<circle cx="35" cy="66" r="3.2" fill="none" stroke="#e2b65e" stroke-width="1.8"/><circle cx="85" cy="66" r="3.2" fill="none" stroke="#e2b65e" stroke-width="1.8"/>`,
    perlas: `<circle cx="35" cy="64.5" r="2.2" fill="#fbf7ef" stroke="${INK}" stroke-width=".9"/><circle cx="85" cy="64.5" r="2.2" fill="#fbf7ef" stroke="${INK}" stroke-width=".9"/>`,
    estrellas: [35, 85].map(x => STARP(x, 65, 3, "#f3d36b")).join(""),
    cascabeles: [35, 85].map(x => `<circle cx="${x}" cy="66" r="2.6" fill="#f0c25e" stroke="${INK}" stroke-width=".9"/><path d="M${x - 1.5} 66.5 h3" stroke="${INK}" stroke-width=".7"/>`).join(""),
    calabacitas: [35, 85].map(x => `<ellipse cx="${x}" cy="66.5" rx="2.8" ry="2.3" fill="#e8873f" stroke="${INK}" stroke-width=".8"/><path d="M${x} 64.2 v-1.4" stroke="#5f8a55" stroke-width="1"/>`).join(""),
    corazones: [35, 85].map(x => HEART(x, 66, .9, "#e14f6c")).join(""),
    borlas: [35, 85].map(x => `<circle cx="${x}" cy="64" r="1.4" fill="#f0c25e"/><path d="M${x - 1.2} 65 L${x - 2} 72 L${x + 2} 72 L${x + 1.2} 65Z" fill="#c0453a"/>`).join(""),
    coral: [35, 85].map(x => `<circle cx="${x}" cy="65" r="2" fill="#e8806b" stroke="${INK}" stroke-width=".8"/><circle cx="${x}" cy="69" r="1.4" fill="#e8806b"/>`).join("")
  }[eq.ears] || "";
  const eyesNow = mood === "happy" ? `<path d="M47.5 57 Q51 53.5 54.5 57M65.5 57 Q69 53.5 72.5 57" ${S} fill="none"/>`
    : `<ellipse cx="51" cy="57" rx="2.5" ry="3.1" fill="${INK}"/><ellipse cx="69" cy="57" rx="2.5" ry="3.1" fill="${INK}"/><circle cx="52" cy="55.8" r=".9" fill="#fff"/><circle cx="70" cy="55.8" r=".9" fill="#fff"/>`;
  const mY = eq.face === "bigote" ? 1.2 : 0;
  const m = mood === "sad" ? `<path d="M55 ${67 + mY} Q60 ${63.5 + mY} 65 ${67 + mY}" ${S} fill="none"/>` : `<path d="M54 ${64.5 + mY} Q60 ${70 + mY} 66 ${64.5 + mY}" ${S} fill="${mood === "happy" ? "#e8857c" : "none"}"/>`;
  const brows = mood === "sad" ? `<path d="M46.5 50 L54 48M66 48 L73.5 50" stroke="${hc}" stroke-width="2.4" stroke-linecap="round"/>` : `<path d="M47 49 L54 48M66 48 L73 49" stroke="${hc}" stroke-width="2.4" stroke-linecap="round"/>`;
  const head = headSVG(findItem("head", eq.head), hc, k);
  return `${back}${hairBack}${torso}${shade}
    <path d="M53 76 L53 90 L67 90 L67 76Z" fill="${sk}" ${S}/><path d="M53 80 Q60 84 67 80 L67 76 L53 76Z" fill="${INK}" opacity=".1"/>
    ${neckAcc}
    <circle cx="36" cy="58" r="5" fill="${sk}" ${S}/><circle cx="84" cy="58" r="5" fill="${sk}" ${S}/>${earAcc}
    <circle cx="60" cy="55" r="24" fill="${sk}" ${S}/>
    ${eq.face === "barba" ? faceAcc : ""}${eyesNow}${brows}${cheeks(45, 75, 64)}<path d="M60 59 q1.8 2.4 -.6 3.4" ${S1}/>
    ${eq.face && eq.face !== "barba" && eq.face !== "bigote" ? faceAcc : ""}${m}${eq.face === "bigote" ? faceAcc : ""}
    ${hairFront}${eyeAcc}${head}`;
}
function avatarSVG(eq, mood, cls, vb) { return `<svg class="${cls || ""}" viewBox="${vb || "0 0 120 140"}" aria-hidden="true">${avatarG(eq, mood || "neutral")}</svg>`; }

/* ---------------- la clínica (360x240) ---------------- */
const FLOOR_Y = 186;   /* base de todo lo que está apoyado contra la pared */
const POT = (x, y, w, h, c) => `<path d="M${x} ${y} h${w} l-${w * .12} ${h} h-${w * .76}Z" fill="${c || "#c9764e"}" ${S}/><rect x="${x - 2}" y="${y - 4}" width="${w + 4}" height="5" rx="1.5" fill="${c || "#c9764e"}" ${S}/>`;
function windowView(id) {
  const sky = { campo: "#cfe7ee", ciudad: "#d6e4ec", mar: "#cde6f0", otono: "#f6dcc0", nieve: "#e3ecf0", noche: "#26304a", luna: "#3a2f4f", sakura: "#f6e6ea", pueblo: "#cfe6f0", desierto: "#f6dcb0" }[id] || "#cfe7ee";
  let v = `<rect x="20" y="24" width="72" height="68" fill="${sky}"/>`;
  if (id === "campo") v += `<circle cx="72" cy="40" r="7" fill="#f6d77a"/><path d="M20 70 q12 -12 26 -4 q12 -10 24 -2 q10 -6 22 0 L92 92 L20 92Z" fill="#a9c49a"/><path d="M20 80 q20 -8 40 0 q18 -6 32 0 L92 92 L20 92Z" fill="#8fae8b"/><circle cx="36" cy="66" r="5" fill="#6f9e6b"/><path d="M36 70 v6" stroke="#7a5638" stroke-width="2"/><path d="M30 36 q3 -3 6 0 q3 -3 6 0" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
  if (id === "ciudad") v += `<circle cx="34" cy="38" r="6" fill="#f6d77a"/>${[[22, 60, 12], [36, 50, 10], [48, 64, 12], [62, 46, 14], [78, 58, 14]].map(([x, y, w], i) => `<rect x="${x}" y="${y}" width="${w}" height="${92 - y}" fill="${["#b9a28c", "#c9b6a0", "#a9917c", "#bfa58e", "#d0bba5"][i]}"/>${[0, 1, 2].map(r => `<rect x="${x + 3}" y="${y + 5 + r * 9}" width="3" height="4" fill="#fbf2d8"/><rect x="${x + w - 6}" y="${y + 5 + r * 9}" width="3" height="4" fill="#fbf2d8"/>`).join("")}`).join("")}`;
  if (id === "mar") v += `<circle cx="70" cy="42" r="7" fill="#f6d77a"/><rect x="20" y="64" width="72" height="28" fill="#7fb2cf"/><path d="M22 70 q4 -2 8 0M44 76 q4 -2 8 0M66 70 q4 -2 8 0" stroke="#fff" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M38 64 l8 -14 v14Z" fill="#fbf7ef" ${S1}/><path d="M34 64 h16 l-3 4 h-10Z" fill="#c95b4a"/><path d="M20 88 q20 -6 40 0 q16 -4 32 0 V92 H20Z" fill="#efdcb6"/>`;
  if (id === "otono") v += `<circle cx="72" cy="38" r="6" fill="#f2b45a"/><path d="M20 78 q24 -8 48 0 q12 -4 24 0 V92 H20Z" fill="#c9a65a"/>${[[34, 62, "#d9733f"], [56, 58, "#e8a03f"], [78, 64, "#c0453a"]].map(([x, y, c]) => `<path d="M${x} ${y + 12} v10" stroke="#7a5638" stroke-width="2.4"/><circle cx="${x}" cy="${y}" r="10" fill="${c}"/><circle cx="${x - 5}" cy="${y + 4}" r="6" fill="${c}"/>`).join("")}`;
  if (id === "nieve") v += `<path d="M20 72 q16 -12 34 -2 q16 -10 38 2 V92 H20Z" fill="#fbfdff"/>${[[34, 60], [52, 56], [76, 62]].map(([x, y]) => `<path d="M${x} ${y} l-7 14 h14Z M${x} ${y + 8} l-8 14 h16Z" fill="#5f8a6b"/><path d="M${x - 3} ${y + 8} h6" stroke="#fbfdff" stroke-width="2"/>`).join("")}${[[28, 34], [46, 30], [62, 40], [84, 32], [40, 48], [74, 50]].map(([x, y]) => `<circle class="snow" cx="${x}" cy="${y}" r="1.4" fill="#fff"/>`).join("")}`;
  if (id === "noche") v += `<circle cx="70" cy="42" r="8" fill="#f3e6cf"/><circle cx="73.5" cy="40" r="7" fill="#26304a"/>${[[30, 34], [44, 46], [56, 32], [36, 58], [84, 60], [50, 66]].map(([x, y]) => `<circle class="twinkle" cx="${x}" cy="${y}" r="1.1" fill="#f3e6cf"/>`).join("")}<path d="M20 80 q20 -8 40 0 q16 -6 32 0 V92 H20Z" fill="#1c2438"/>`;
  if (id === "luna") v += `<circle cx="64" cy="44" r="13" fill="#f2b45a"/><circle cx="60" cy="40" r="2" fill="#e09a42"/><circle cx="68" cy="48" r="3" fill="#e09a42"/><path d="M20 82 q20 -6 40 0 q16 -4 32 0 V92 H20Z" fill="#241c30"/><path d="M34 82 v-14 M34 72 l-6 -6 M34 68 l5 -7 M30 66 l-3 1" stroke="#241c30" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M76 34 q2 -2 3 0 q1 -1.5 1.5 0 q1 -2 3 0 q-2 0 -2.5 1.5 q-1 -.8 -2 0 q-.5 -1.5 -3 -1.5Z" fill="#241c30"/>`;
  if (id === "sakura") v += `<circle cx="72" cy="38" r="6" fill="#f6d77a"/><path d="M20 72 l14 -20 l10 12 l12 -16 l18 24 H20Z" fill="#a9b8c9"/><path d="M50 48 l6 -8 l6 8Z" fill="#fbfdff"/><path d="M20 80 q30 -8 72 0 V92 H20Z" fill="#a9c49a"/>${[[30, 68], [46, 72], [78, 70]].map(([x, y]) => `<path d="M${x} ${y + 10} v8" stroke="#6b4430" stroke-width="2.4"/><circle cx="${x}" cy="${y}" r="9" fill="#f2b5c4"/><circle cx="${x + 5}" cy="${y + 3}" r="6" fill="#e9a1b5"/>`).join("")}`;
  if (id === "pueblo") v += `<circle cx="74" cy="36" r="6" fill="#f6d77a"/><rect x="20" y="74" width="72" height="18" fill="#7fb2cf"/>${[[22, 60, 14], [36, 56, 12], [48, 62, 14], [62, 54, 12], [74, 60, 16]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${78 - y}" fill="#fbf8f2" stroke="#d9cbb5" stroke-width=".6"/><rect x="${x + w / 2 - 2}" y="${y + 6}" width="4" height="5" fill="#4f7fae"/>`).join("")}<path d="M62 54 q6 -8 12 0Z" fill="#4f7fae"/>`;
  if (id === "desierto") v += `<circle cx="70" cy="40" r="8" fill="#f6c45a"/><path d="M20 70 h14 v-12 h12 v12 h8 V92 H20Z" fill="#c9764e"/><path d="M60 72 h8 v-8 h10 v8 h14 V92 H60Z" fill="#b86a45"/><path d="M20 84 q36 -6 72 0 V92 H20Z" fill="#e6c08a"/><path d="M50 88 v-14 M50 80 h-4 v-4 M50 78 h4 v-5" stroke="#5f8a55" stroke-width="2.4" stroke-linecap="round" fill="none"/>`;
  return v;
}
function curtainsSVG(id, k) {
  if (!id) return "";
  const it = findItem("curtains", id); if (!it) return "";
  const fill = it.pat ? `url(#${k}g)` : it.c;
  return `${it.pat ? `<defs>${patternDef(k + "g", it.pat, it.pbg || "#fbf2e8", it.c)}</defs>` : ""}
    <path d="M16 20 C22 40 22 70 14 96 L26 96 C32 70 30 40 30 20Z" fill="${fill}" ${S}/><path d="M22 24 C25 44 25 70 20 94" stroke="${INK}" stroke-width="1" opacity=".25" fill="none"/>
    <path d="M96 20 C90 40 90 70 98 96 L86 96 C80 70 82 40 82 20Z" fill="${fill}" ${S}/><path d="M90 24 C87 44 87 70 92 94" stroke="${INK}" stroke-width="1" opacity=".25" fill="none"/>
    <path d="M18 62 q6 4 12 0M82 62 q6 4 12 0" stroke="#c9a65a" stroke-width="2.4" fill="none"/>`;
}
const SHELF = `<rect x="108" y="96" width="64" height="5" rx="1.5" fill="#a87447" ${S}/><path d="M114 101 l0 5M166 101 l0 5" ${S}/>`;
const DECOR = {
  ceiling: {
    lampara: () => `<path d="M262 0 L262 26" stroke="${INK}" stroke-width="1.4"/><ellipse class="glow" cx="262" cy="60" rx="46" ry="22" fill="#ffe7a8" opacity=".28"/><path d="M244 42 Q262 18 280 42 Z" fill="#c95b4a" ${S}/><circle cx="262" cy="43" r="3.5" fill="#fff3c4" ${S1}/>`,
    banderines: () => { let s = `<path d="M0 6 Q90 26 180 8 Q270 26 360 6" stroke="${INK}" stroke-width="1.2" fill="none"/>`; for (let x = 10; x < 360; x += 24) { const t = (x % 180) / 180, y = 7 + 18 * Math.sin(Math.PI * t) * .9; s += `<path class="sway" style="transform-origin:${x}px ${y}px" d="M${x - 8} ${y} L${x + 8} ${y + 1} L${x} ${y + 15}Z" fill="${["#e6a77f", "#a9c49a", "#f3d36b", "#9cc0cf", "#eab3ae"][(x / 24 | 0) % 5]}" ${S1}/>`; } return s; },
    farolillos: () => [[104, 16, "#f29b8a"], [172, 13, "#f3d36b"], [242, 30, "#9cc0cf"], [276, 18, "#a9c49a"]].map(([x, y, c]) => `<g class="sway" style="transform-origin:${x}px 0px"><path d="M${x} 0 V${y - 10}" stroke="${INK}" stroke-width="1.2"/><ellipse cx="${x}" cy="${y + 4}" rx="18" ry="16" fill="#ffe7a8" opacity=".25"/><ellipse cx="${x}" cy="${y}" rx="10" ry="11" fill="${c}" ${S}/><rect x="${x - 4}" y="${y - 13}" width="8" height="3" fill="${INK}"/><rect x="${x - 4}" y="${y + 10}" width="8" height="3" fill="${INK}"/></g>`).join(""),
    guirnalda: () => `<path d="M0 12 Q90 34 180 14 Q270 34 360 12" stroke="${INK}" stroke-width="1.3" fill="none"/>${[22, 54, 90, 126, 158, 202, 236, 272, 306, 340].map((x, i) => { const y = x < 180 ? 12 + 22 * Math.sin(Math.PI * x / 180) * .9 : 14 + 20 * Math.sin(Math.PI * (x - 180) / 180) * .9; const c = ["#f3d36b", "#f29b8a", "#9cc0cf", "#a9c49a"][i % 4]; return `<circle class="twinkle" style="animation-delay:${i * .3}s" cx="${x}" cy="${y + 4}" r="7" fill="${c}" opacity=".3"/><ellipse cx="${x}" cy="${y + 4}" rx="2.6" ry="3.6" fill="${c}" ${S1}/>`; }).join("")}`,
    macrame: () => [[238, 42], [280, 26]].map(([x, y]) => `<g class="sway" style="transform-origin:${x}px 0px"><path d="M${x} 0 L${x - 10} ${y} M${x} 0 L${x + 10} ${y} M${x} 0 L${x} ${y}" stroke="#c9a65a" stroke-width="1.4"/>${POT(x - 10, y, 20, 12, "#efe3cf")}<path d="M${x - 8} ${y - 2} q-6 14 -2 26M${x} ${y - 3} q2 16 -3 30M${x + 8} ${y - 2} q6 12 2 22" stroke="#6f9e6b" stroke-width="2.2" fill="none" stroke-linecap="round"/>${[[x - 12, y + 10], [x - 9, y + 20], [x + 1, y + 16], [x - 3, y + 26], [x + 10, y + 12], [x + 9, y + 20]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="3.4" ry="2.2" fill="#7fae78" ${S1}/>`).join("")}</g>`).join(""),
    espumillon: () => `<path d="M0 8 Q45 30 90 10 Q135 30 180 10 Q225 30 270 10 Q315 30 360 8" stroke="#3f6f4a" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M0 8 Q45 30 90 10 Q135 30 180 10 Q225 30 270 10 Q315 30 360 8" stroke="#5f8a55" stroke-width="3" stroke-dasharray="2 3" fill="none"/>${[[45, 22, "#c0453a"], [135, 22, "#f0c25e"], [225, 22, "#c0453a"], [315, 22, "#f0c25e"], [90, 12, "#9cc0cf"], [270, 12, "#9cc0cf"]].map(([x, y, c], i) => `<g class="sway" style="transform-origin:${x}px ${y}px;animation-delay:${i * .4}s"><path d="M${x} ${y} v4" stroke="${INK}" stroke-width="1"/><circle cx="${x}" cy="${y + 9}" r="5" fill="${c}" ${S1}/><circle cx="${x - 1.6}" cy="${y + 7.4}" r="1.3" fill="#fff" opacity=".6"/></g>`).join("")}${[[180, 12], [0, 8]].map(([x, y]) => `<path d="M${x} ${y} l-7 -4 v8Z M${x} ${y} l7 -4 v8Z" fill="#c0453a" ${S1}/>`).join("")}`,
    murcielagos: () => [[110, 26], [168, 18], [242, 34], [300, 22]].map(([x, y], i) => `<g class="sway" style="transform-origin:${x}px 0px;animation-delay:${i * .5}s"><path d="M${x} 0 V${y - 4}" stroke="${INK}" stroke-width="1"/><path d="M${x - 12} ${y} q5 -6 9 -1 q1 -4 3 -4 q2 0 3 4 q4 -5 9 1 q-6 0 -7 5 q-2 -2 -5 0 q-3 -2 -5 0 q-1 -5 -7 -5Z" fill="#2e2630" ${S1}/><circle cx="${x - 1.5}" cy="${y}" r=".8" fill="#f3d36b"/><circle cx="${x + 1.5}" cy="${y}" r=".8" fill="#f3d36b"/></g>`).join(""),
    hilo_corazones: () => `<path d="M0 8 Q90 30 180 10 Q270 30 360 8" stroke="${INK}" stroke-width="1.1" fill="none"/>${[20, 60, 100, 140, 220, 260, 300, 340].map((x, i) => { const y = x < 180 ? 8 + 20 * Math.sin(Math.PI * x / 180) : 10 + 18 * Math.sin(Math.PI * (x - 180) / 180); return `<g class="sway" style="transform-origin:${x}px ${y}px;animation-delay:${i * .25}s">${HEART(x, y + 7, 2.2, ["#e14f6c", "#f29bb0", "#f6c3cf"][i % 3])}<path d="M${x} ${y + 9} C${x - 8.8} ${y + 2.1} ${x - 5.7} ${y - 4.9} ${x} ${y + .5} C${x + 5.7} ${y - 4.9} ${x + 8.8} ${y + 2.1} ${x} ${y + 9}Z" fill="none" ${S1}/></g>`; }).join("")}`,
    farol_rojo: () => [[110, 22], [190, 16], [270, 26]].map(([x, y], i) => `<g class="sway" style="transform-origin:${x}px 0px;animation-delay:${i * .6}s"><path d="M${x} 0 V${y - 12}" stroke="${INK}" stroke-width="1.2"/><ellipse cx="${x}" cy="${y + 4}" rx="22" ry="18" fill="#ffd28a" opacity=".22"/><ellipse cx="${x}" cy="${y}" rx="13" ry="11" fill="#c8352c" ${S}/><path d="M${x - 8} ${y - 8} q-3 8 0 16M${x + 8} ${y - 8} q3 8 0 16M${x} ${y - 11} v22" stroke="#9a2620" stroke-width="1" fill="none"/><rect x="${x - 5}" y="${y - 14}" width="10" height="4" rx="1" fill="#e2b65e" ${S1}/><rect x="${x - 5}" y="${y + 10}" width="10" height="4" rx="1" fill="#e2b65e" ${S1}/><path d="M${x} ${y + 14} v10" stroke="#c8352c" stroke-width="3"/></g>`).join(""),
    buganvilla: () => { let s = `<path d="M0 6 Q40 18 90 4 M200 4 Q280 20 360 6" stroke="#6b4430" stroke-width="2" fill="none"/>`; [[10, 10], [24, 14], [40, 16], [56, 14], [72, 10], [86, 6], [210, 8], [230, 14], [250, 16], [272, 16], [292, 14], [312, 12], [330, 10], [348, 8], [30, 24], [60, 22], [240, 26], [300, 24], [340, 18]].forEach(([x, y], i) => { s += `<circle cx="${x}" cy="${y}" r="${4 + (i % 3)}" fill="${["#d9568a", "#e47aa3", "#c94479"][i % 3]}"/>${i % 2 ? `<ellipse cx="${x + 4}" cy="${y + 4}" rx="3" ry="1.6" fill="#6f9e6b"/>` : ""}`; }); return s; },
    ventilador: () => `<path d="M262 0 V16" stroke="${INK}" stroke-width="2"/><g class="fan" style="transform-origin:262px 22px"><ellipse cx="236" cy="22" rx="24" ry="4" fill="#a87447" ${S1}/><ellipse cx="288" cy="22" rx="24" ry="4" fill="#a87447" ${S1}/><ellipse cx="262" cy="22" rx="6" ry="5" fill="#8a5f3a"/></g><rect x="254" y="16" width="16" height="10" rx="4" fill="#c9a65a" ${S}/><path d="M262 26 v8" ${S1}/><circle cx="262" cy="36" r="2" fill="#f3d36b"/>`
  },
  wallL: {
    diploma: () => `${SH(137, 59, 22, 2, .12)}<rect x="114" y="26" width="46" height="32" rx="2" fill="#b58550" ${S}/><rect x="119" y="31" width="36" height="22" fill="#fbf4e3"/><path d="M124 37 h26M124 42 h18M124 47 h12" stroke="#c9b48e" stroke-width="1.6" stroke-linecap="round"/><circle cx="148" cy="47" r="3.4" fill="#c0453a"/>`,
    cuadro: () => `<rect x="112" y="24" width="50" height="36" rx="2" fill="#7a5638" ${S}/><rect x="116" y="28" width="42" height="28" fill="#cfe0e6"/><path d="M116 56 L128 40 L137 49 L145 37 L158 56Z" fill="#8fae8b"/><circle cx="123" cy="35" r="3" fill="#f3d36b"/>`,
    espejo: () => `<circle cx="137" cy="44" r="20" fill="#c9a65a" ${S}/><circle cx="137" cy="44" r="15" fill="#dfeef2" ${S1}/><path d="M128 38 l8 -8M131 44 l12 -12" stroke="#fff" stroke-width="2.2" opacity=".7" stroke-linecap="round"/>`,
    galeria: () => [[112, 26, 22, 18, "dog"], [138, 24, 24, 26, "cat"], [114, 48, 18, 14, "pig"]].map(([x, y, w, h, sp]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" fill="#fbf4e3" ${S}/><svg x="${x + 2}" y="${y + 2}" width="${w - 4}" height="${h - 4}" viewBox="10 10 80 70">${animalSVG(sp, "Foto" + sp, "happy")}</svg>`).join(""),
    corcho: () => `<rect x="110" y="24" width="56" height="38" rx="2" fill="#c9a26f" ${S}/><rect x="114" y="28" width="48" height="30" fill="#d9b585"/><rect x="117" y="31" width="14" height="12" fill="#fbf4e3" transform="rotate(-6 124 37)"/><rect x="134" y="30" width="12" height="10" fill="#f3d36b"/><rect x="148" y="33" width="12" height="14" fill="#cfe7ee" transform="rotate(5 154 40)"/><rect x="122" y="45" width="16" height="10" fill="#f6c3bc"/>${[[124, 32], [140, 31], [154, 34], [130, 46]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#c0453a"/>`).join("")}`,
    corona_navidad: () => `<circle cx="137" cy="44" r="18" fill="none" stroke="#3f6f4a" stroke-width="10"/>${Array.from({ length: 14 }, (_, i) => { const a = i / 14 * Math.PI * 2; return `<ellipse cx="${137 + 18 * Math.cos(a)}" cy="${44 + 18 * Math.sin(a)}" rx="5" ry="2.6" fill="${i % 2 ? "#5f8a55" : "#4a7a52"}" transform="rotate(${a * 180 / Math.PI + 60} ${137 + 18 * Math.cos(a)} ${44 + 18 * Math.sin(a)})"/>`; }).join("")}${[[126, 32], [150, 36], [146, 58], [124, 54], [137, 26]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#c0453a"/>`).join("")}<path d="M137 62 l-8 5 v-8Z M137 62 l8 5 v-8Z" fill="#c0453a" ${S1}/>`,
    fantasma: () => `<rect x="114" y="22" width="46" height="40" rx="2" fill="#5c4a72" ${S}/><rect x="119" y="27" width="36" height="30" fill="#2e2630"/><path d="M128 54 V40 q9 -12 18 0 V54 l-3 -3 -3 3 -3 -3 -3 3 -3 -3Z" fill="#f6f2fa"/><circle cx="134" cy="42" r="1.3" fill="${INK}"/><circle cx="140" cy="42" r="1.3" fill="${INK}"/><ellipse cx="137" cy="47" rx="1.6" ry="2" fill="${INK}"/>`,
    polaroids: () => `<path d="M108 30 Q137 40 166 30" stroke="${INK}" stroke-width="1" fill="none"/>${[[114, 32, -6], [132, 36, 3], [150, 33, -3]].map(([x, y, r], i) => `<g transform="rotate(${r} ${x + 8} ${y + 10})"><rect x="${x}" y="${y}" width="16" height="19" fill="#fbf7ef" ${S1}/><rect x="${x + 2}" y="${y + 2}" width="12" height="11" fill="${["#f6c3cf", "#cfe7ee", "#f3d36b"][i]}"/>${HEART(x + 8, y + 7.5, .9, "#e14f6c")}</g>`).join("")}`,
    abanico: () => `<path d="M137 60 L111 38 A34 34 0 0 1 163 38 Z" fill="#f6efe0" ${S}/>${Array.from({ length: 9 }, (_, i) => { const a = Math.PI + (i + 1) / 10 * Math.PI; return `<path d="M137 60 L${137 + 34 * Math.cos(a) * .98} ${60 + 34 * Math.sin(a) * .98}" stroke="#8a6a4a" stroke-width=".8"/>`; }).join("")}<path d="M120 46 q10 -10 18 -4 q8 -8 16 2" stroke="#c8352c" stroke-width="2" fill="none"/>${FLOWER(128, 40, 1.6, "#e9a1b5", "#c9607e")}${FLOWER(148, 42, 1.6, "#e9a1b5", "#c9607e")}<circle cx="137" cy="60" r="2.4" fill="#e2b65e" ${S1}/>`,
    platos: () => [[120, 40, 11, "#4f7fae"], [144, 34, 10, "#e2b65e"], [146, 56, 8, "#5f8a55"]].map(([x, y, r, c]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fbf8f2" ${S}/><circle cx="${x}" cy="${y}" r="${r * .7}" fill="none" stroke="${c}" stroke-width="1.6"/>${FLOWER(x, y, r * .22, c, "#fbf8f2")}`).join(""),
    cartel: () => `<path d="M118 62 v-8M156 62 v-8" ${S}/><rect x="110" y="28" width="54" height="28" rx="3" fill="#a87447" ${S}/><path d="M114 36 h46M114 44 h46" stroke="#8a5f3a" stroke-width="1"/><path d="M126 50 v-12 M126 44 h-4 v-4 M126 42 h4 v-5" stroke="#5f8a55" stroke-width="2.4" stroke-linecap="round" fill="none"/><path d="M138 38 h18M138 44 h14M138 50 h16" stroke="#fbf2d8" stroke-width="2" stroke-linecap="round"/>`
  },
  wallC: {
    reloj: () => `<circle cx="190" cy="40" r="14" fill="#fbf4e3" ${S}/><path d="M190 40 L190 31" ${S}/><path class="tick" style="transform-origin:190px 40px" d="M190 40 L196 43" ${S}/><circle cx="190" cy="40" r="1.6" fill="${INK}"/>`,
    calendario: () => `<rect x="176" y="26" width="28" height="34" rx="2" fill="#fbf4e3" ${S}/><rect x="176" y="26" width="28" height="9" rx="2" fill="#c0453a" ${S}/>${[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c2 => `<rect x="${180 + c2 * 5.5}" y="${39 + r * 5}" width="3" height="3" fill="${r === 2 && c2 === 1 ? "#c0453a" : "#c9b48e"}"/>`).join("")).join("")}`,
    huella: () => `<rect x="174" y="24" width="32" height="32" rx="2" fill="#a87447" ${S}/><rect x="178" y="28" width="24" height="24" fill="#fbf4e3"/>${PAWP(190, 40, 1.6, "#c95b4a")}`,
    cuco: () => `<path d="M174 34 L190 20 L206 34Z" fill="#7a5638" ${S}/><rect x="177" y="33" width="26" height="26" fill="#b58550" ${S}/><circle cx="190" cy="45" r="7" fill="#fbf4e3" ${S1}/><path d="M190 45 v-4.5M190 45 l3 1.6" stroke="${INK}" stroke-width="1.2"/><path class="sway" style="transform-origin:190px 59px" d="M190 59 v14" stroke="${INK}" stroke-width="1"/><circle class="sway" style="transform-origin:190px 59px" cx="190" cy="75" r="3" fill="#c9a65a" ${S1}/>`,
    muerdago: () => `<path d="M190 22 v10" stroke="${INK}" stroke-width="1"/><path d="M190 32 l-8 -3 v6Z M190 32 l8 -3 v6Z" fill="#c0453a" ${S1}/><g class="sway" style="transform-origin:190px 32px"><ellipse cx="184" cy="40" rx="6" ry="3" fill="#7fae78" transform="rotate(-30 184 40)" ${S1}/><ellipse cx="196" cy="40" rx="6" ry="3" fill="#7fae78" transform="rotate(30 196 40)" ${S1}/><circle cx="190" cy="40" r="1.8" fill="#fbf7ef" ${S1}/><circle cx="187" cy="42" r="1.8" fill="#fbf7ef" ${S1}/><circle cx="193" cy="42" r="1.8" fill="#fbf7ef" ${S1}/></g>`,
    telarana: () => `<g stroke="#fbf7ef" stroke-width=".8" fill="none" opacity=".85">${[0, 30, 60, 90, 120, 150].map(a => `<path d="M${190 - 22 * Math.cos(a * Math.PI / 180)} ${40 - 22 * Math.sin(a * Math.PI / 180)} L${190 + 22 * Math.cos(a * Math.PI / 180)} ${40 + 22 * Math.sin(a * Math.PI / 180)}"/>`).join("")}${[6, 12, 18].map(r => `<circle cx="190" cy="40" r="${r}"/>`).join("")}</g><g class="bob"><path d="M200 40 v8" stroke="#2e2630" stroke-width=".8"/><circle cx="200" cy="50" r="2.6" fill="#2e2630"/><path d="M197 49 l-2 -1M197 51 l-2 1M203 49 l2 -1M203 51 l2 1" stroke="#2e2630" stroke-width=".7"/></g>`,
    corazon: () => `<rect x="174" y="24" width="32" height="32" rx="2" fill="#f6dccb" ${S}/>${HEART(190, 40, 2.8, "#e14f6c")}<path d="M184 34 q2 -2 4 -1" stroke="#fff" stroke-width="1.4" opacity=".6"/>`,
    ventana_luna: () => `<circle cx="190" cy="42" r="18" fill="#cfe0e6" ${S}/><circle cx="190" cy="42" r="18" fill="none" stroke="#8a6a4a" stroke-width="4"/><path d="M178 60 q2 -16 -2 -30M184 60 q1 -14 4 -28" stroke="#5f8a55" stroke-width="1.6" fill="none"/>${[[178, 40], [184, 34], [181, 48], [188, 42]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="4" ry="1.4" fill="#6f9e6b" transform="rotate(-30 ${x} ${y})"/>`).join("")}<circle cx="198" cy="34" r="4" fill="#f6e6c0"/>`,
    sol: () => `<g class="spin-slow" style="transform-origin:190px 42px">${Array.from({ length: 12 }, (_, i) => { const a = i / 12 * Math.PI * 2; return `<path d="M${190 + 13 * Math.cos(a)} ${42 + 13 * Math.sin(a)} L${190 + 21 * Math.cos(a)} ${42 + 21 * Math.sin(a)}" stroke="#e2b65e" stroke-width="3" stroke-linecap="round"/>`; }).join("")}</g><circle cx="190" cy="42" r="12" fill="#e2b65e" ${S}/><circle cx="190" cy="42" r="8" fill="#dfeef2" ${S1}/>`,
    reloj_retro: () => `<circle cx="190" cy="40" r="15" fill="#fbf7ef" stroke="#e58aa6" stroke-width="4"/><circle cx="190" cy="40" r="15" fill="none" ${S}/><path d="M190 40 L190 30" ${S}/><path class="tick" style="transform-origin:190px 40px" d="M190 40 L197 44" stroke="#c0453a" stroke-width="1.6"/>${[0, 3, 6, 9].map(h => `<circle cx="${190 + 11 * Math.cos(h / 12 * 2 * Math.PI - Math.PI / 2)}" cy="${40 + 11 * Math.sin(h / 12 * 2 * Math.PI - Math.PI / 2)}" r="1.2" fill="#4f9e94"/>`).join("")}`
  },
  wallR: {
    anatomia: () => `<rect x="296" y="22" width="48" height="62" rx="2" fill="#fbf4e3" ${S}/><path d="M306 60 C306 48 316 42 326 44 C330 38 336 40 336 46 C334 50 332 52 330 52 L330 72 M312 60 L312 72M322 62 L322 72" ${S} fill="none"/><path d="M302 30 h20" stroke="#c0453a" stroke-width="2" stroke-linecap="round"/><circle cx="318" cy="52" r="3" fill="#e58b8b" opacity=".7"/>`,
    gatitos: () => `<rect x="296" y="22" width="48" height="62" rx="2" fill="#f6dccb" ${S}/><svg x="300" y="28" width="40" height="40" viewBox="10 8 80 80">${animalSVG("cat", "Póster", "happy")}</svg><path d="M302 74 h36" stroke="#c95b4a" stroke-width="3" stroke-linecap="round"/>`,
    pizarra: () => `<rect x="292" y="24" width="56" height="46" rx="2" fill="#a87447" ${S}/><rect x="296" y="28" width="48" height="38" fill="#3e4f45"/><text x="300" y="40" font-family="Georgia,serif" font-style="italic" font-size="8" fill="#f3e6cf">Hoy:</text><path d="M301 47 h18M301 53 h26M301 59 h14" stroke="#f3e6cf" stroke-width="1.4" stroke-linecap="round" opacity=".8"/>${HEART(334, 54, 1.5, "#f29b8a")}`,
    adviento: () => `<rect x="294" y="22" width="52" height="62" rx="2" fill="#b8473a" ${S}/>${Array.from({ length: 12 }, (_, i) => `<rect x="${299 + (i % 3) * 15}" y="${28 + (i / 3 | 0) * 13}" width="12" height="10" rx="1" fill="${i === 5 ? "#f3d36b" : "#fbf2e8"}" ${S1}/><text x="${302 + (i % 3) * 15}" y="${35.5 + (i / 3 | 0) * 13}" font-size="5.5" font-family="Georgia,serif" fill="${INK}">${i * 2 + 1}</text>`).join("")}`,
    luna_llena: () => `<rect x="296" y="22" width="48" height="62" rx="2" fill="#3a2f4f" ${S}/><circle cx="320" cy="46" r="14" fill="#f2b45a"/><path d="M300 78 v-12 h6 v-6 h6 v6 h6 v-10 h6 v10 h6 v-4 h6 v16Z" fill="#241c30"/><path d="M304 34 q2 -2 3 0 q1 -1.5 2 0 q1 -2 3 0 q-2 0 -2.5 1.5 q-1 -.8 -2 0 q-.5 -1.5 -3.5 -1.5Z" fill="#241c30"/>`,
    carta: () => `<rect x="296" y="26" width="48" height="56" rx="2" fill="#fbf2e8" ${S}/><path d="M296 26 L320 46 L344 26" fill="none" ${S1}/>${HEART(320, 58, 3, "#e14f6c")}<path d="M304 72 h32M308 77 h24" stroke="#e3a4b0" stroke-width="1.6" stroke-linecap="round"/>`,
    pergamino: () => `<rect x="300" y="18" width="40" height="5" rx="2" fill="#6b4430" ${S}/><rect x="303" y="22" width="34" height="58" fill="#f6efe0" ${S1}/><rect x="300" y="79" width="40" height="5" rx="2" fill="#6b4430" ${S}/><path d="M314 74 v-42 M322 74 v-34 M316 50 l-8 -6 M316 40 l-6 -4 M322 56 l8 -6 M322 46 l7 -2" stroke="#3e4f45" stroke-width="2" stroke-linecap="round"/><rect x="330" y="64" width="5" height="7" fill="#c8352c"/>`,
    faro: () => `<rect x="296" y="22" width="48" height="62" rx="2" fill="#dfeef2" ${S}/><path d="M296 70 q12 -4 24 0 q12 -4 24 0 V84 H296Z" fill="#4f7fae"/><path d="M316 70 l2 -32 h6 l2 32Z" fill="#fbf8f2" ${S1}/><path d="M317 52 h8M316.5 62 h9" stroke="#c0453a" stroke-width="3"/><path d="M318 38 h6 v-5 h-6Z" fill="#f3d36b" ${S1}/><path class="glow" d="M324 35 L344 28 V42Z" fill="#f6e6a0" opacity=".6"/>`,
    neon: () => `<rect x="292" y="30" width="56" height="30" rx="6" fill="#2e2630" ${S}/><text class="neon" x="298" y="51" font-family="Georgia,serif" font-style="italic" font-size="15" font-weight="bold" fill="none" stroke="#ff7fb0" stroke-width="1.6">Abierto</text><path d="M298 55 h44" stroke="#7fe0d0" stroke-width="1.6" class="neon"/>`
  },
  shelf: {
    botes: () => `${SHELF}<rect x="114" y="80" width="10" height="16" rx="2" fill="#a9c49a" ${S}/><rect x="113" y="77" width="12" height="4" rx="1" fill="#e2cfae" ${S1}/><rect x="128" y="84" width="9" height="12" rx="2" fill="#f29b8a" ${S}/><path d="M141 96 L141 78 L146 78 L146 96Z M147 96 L147 82 L152 82 L152 96Z" fill="#9cc0cf" ${S}/><circle cx="166" cy="92" r="3.5" fill="#f3d36b" ${S1}/>`,
    libros: () => `${SHELF}${[[112, 78, 7, "#c95b4a"], [119, 82, 6, "#4f6fae"], [125, 80, 8, "#8fae8b"], [133, 84, 6, "#e2b45a"]].map(([x, y, w, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${96 - y}" fill="${c}" ${S1}/>`).join("")}<path d="M140 96 l6 -16 5 2 -6 14Z" fill="#a85a9a" ${S1}/>${POT(154, 88, 12, 8)}<path d="M160 88 v-10" stroke="#6f9e6b" stroke-width="3" stroke-linecap="round"/>`,
    pothos: () => `${SHELF}${POT(130, 84, 20, 12, "#efe3cf")}<path d="M134 84 q-14 4 -20 22M140 84 q-2 10 -8 20M146 84 q12 6 18 20" stroke="#6f9e6b" stroke-width="1.8" fill="none"/>${[[124, 92], [116, 102], [133, 100], [156, 92], [163, 102], [138, 80], [146, 79]].map(([x, y]) => `<path d="M${x} ${y} q-4 -4 0 -7 q4 3 0 7Z" fill="#7fae78" ${S1}/>`).join("")}`,
    peluches: () => `${SHELF}<circle cx="122" cy="88" r="7" fill="#c99566" ${S}/><circle cx="116" cy="82" r="3" fill="#c99566" ${S1}/><circle cx="128" cy="82" r="3" fill="#c99566" ${S1}/><circle cx="120" cy="87" r="1" fill="${INK}"/><circle cx="124" cy="87" r="1" fill="${INK}"/><ellipse cx="142" cy="89" rx="8" ry="7" fill="#f4b9b2" ${S}/><ellipse cx="142" cy="90.5" rx="3" ry="2" fill="#ee9e98" ${S1}/><path d="M156 96 c0 -10 4 -14 8 -14 c4 0 6 4 6 14Z" fill="#fbf7ef" ${S}/>`,
    jengibre: () => `${SHELF}<path d="M118 96 V84 L128 76 L138 84 V96Z" fill="#c98a52" ${S}/><path d="M116 85 L128 74 L140 85" stroke="#fbf7ef" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="125" y="88" width="6" height="8" fill="#8a5a3a"/><circle cx="121" cy="88" r="1.4" fill="#e14f6c"/><circle cx="135" cy="88" r="1.4" fill="#5f8a55"/>${[150, 160].map((x, i) => `<rect x="${x}" y="${86 - i * 3}" width="6" height="${10 + i * 3}" fill="#fbf7ef" ${S1}/><path d="M${x + 3} ${85 - i * 3} q2 -3 0 -5 q-2 2 0 5Z" fill="#f3b04f" class="flicker"/>`).join("")}`,
    golosinas: () => `${SHELF}${[[114, "#e8873f"], [132, "#9c84c4"], [150, "#7fbf8a"]].map(([x, c]) => `<rect x="${x}" y="78" width="14" height="18" rx="3" fill="#dfeef2" fill-opacity=".7" ${S1}/><rect x="${x - 1}" y="75" width="16" height="4" rx="1" fill="#6b4430" ${S1}/>${[0, 1, 2, 3].map(i => `<circle cx="${x + 3.5 + (i % 2) * 7}" cy="${85 + (i / 2 | 0) * 6}" r="2.6" fill="${c}"/>`).join("")}`).join("")}<ellipse cx="168" cy="92" rx="4" ry="3.5" fill="#e8873f" ${S1}/>`,
    bombones: () => `${SHELF}<path d="M124 96 C112 86 116 76 124 82 C132 76 136 86 124 96Z" fill="#c0453a" ${S}/>${HEART(124, 86, 1.1, "#f6c3cf")}<rect x="140" y="82" width="16" height="12" rx="1" fill="#fbf2e8" transform="rotate(-8 148 88)" ${S1}/><path d="M141 82 l7 6 l8 -7" stroke="${INK}" stroke-width=".8" fill="none" transform="rotate(-8 148 88)"/><rect x="158" y="86" width="12" height="10" rx="1" fill="#f6c3cf" ${S1}/>`,
    maneki: () => `${SHELF}<path d="M120 96 C118 84 120 76 128 76 C136 76 138 84 136 96Z" fill="#fbf7ef" ${S}/><path d="M121 78 l2 -6 4 4M135 78 l-2 -6 -4 4" fill="#fbf7ef" ${S1}/><g class="wave" style="transform-origin:136px 84px"><path d="M135 84 q4 -4 4 -10" stroke="${INK}" stroke-width="5" stroke-linecap="round"/><path d="M135 84 q4 -4 4 -10" stroke="#fbf7ef" stroke-width="3" stroke-linecap="round"/></g><path d="M125 82 q1 1 2 0M129 82 q1 1 2 0" ${S1}/><path d="M122 88 h12" stroke="#c8352c" stroke-width="2"/><circle cx="128" cy="90" r="1.8" fill="#f0c25e"/><path d="M148 96 q-2 -10 8 -10 q10 0 8 10Z" fill="#5f8a55" ${S}/><path d="M164 90 q4 0 4 -3" ${S1}/>`,
    jarras: () => `${SHELF}<path d="M114 96 q-2 -8 2 -12 q-2 -4 2 -6 h6 q4 2 2 6 q4 4 2 12Z" fill="#4f7fae" ${S}/><path d="M116 88 h8" stroke="#fbf8f2" stroke-width="1.6"/><path d="M134 96 q-3 -12 4 -16 h6 q7 4 4 16Z" fill="#fbf8f2" ${S}/><path d="M136 88 q5 3 10 0" stroke="#4f7fae" stroke-width="1.6" fill="none"/><ellipse cx="160" cy="94" rx="10" ry="3" fill="#c9764e" ${S1}/>${[[155, 90], [161, 89], [166, 91]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="3.2" ry="2.6" fill="#f3d36b" ${S1}/>`).join("")}`,
    radio: () => `${SHELF}<path d="M114 96 V84 Q114 74 132 74 Q150 74 150 84 V96Z" fill="#a87447" ${S}/><path d="M118 94 V86 Q118 78 132 78 Q146 78 146 86 V94Z" fill="#efdcb6"/><path d="M122 92 V84M126 92 V82M130 92 V81M134 92 V81M138 92 V82M142 92 V84" stroke="#a87447" stroke-width="1"/><circle cx="160" cy="90" r="5" fill="#5f8a55" ${S1}/><path d="M160 85 v-8" stroke="#5f8a55" stroke-width="3" stroke-linecap="round"/>`
  },
  sill: {
    macetas: () => `${POT(28, 84, 10, 8)}<path d="M33 84 q-3 -6 0 -9 q3 3 0 9" fill="#8fae8b" ${S1}/>${POT(46, 86, 9, 6, "#efe3cf")}<circle cx="50.5" cy="82" r="4" fill="#7fae78" ${S1}/>${POT(64, 84, 10, 8, "#9cc0cf")}<path d="M69 84 v-8M66 80 h6" stroke="#6f9e6b" stroke-width="3" stroke-linecap="round"/><circle cx="69" cy="75" r="1.6" fill="#f29b8a"/>`,
    velas: () => [[36, 78], [48, 82], [72, 80]].map(([x, y]) => `<ellipse class="glow" cx="${x}" cy="${y - 4}" rx="9" ry="9" fill="#ffe7a8" opacity=".3"/><rect x="${x - 4}" y="${y}" width="8" height="${92 - y}" rx="1.5" fill="#fbf4e3" ${S1}/><path class="flicker" style="transform-origin:${x}px ${y}px" d="M${x} ${y - 7} q3 3 0 5 q-3 -2 0 -5Z" fill="#f3b04f"/>`).join(""),
    trofeo: () => `<path d="M50 92 h14 l-2 -4 h-10Z" fill="#b58550" ${S1}/><path d="M51 74 h12 c0 7 -2 11 -6 11 c-4 0 -6 -4 -6 -11Z" fill="#f1c75b" ${S1}/><path d="M57 85 v3" ${S1}/><path d="M51 76 c-4 0 -4 5 0 5M63 76 c4 0 4 5 0 5" ${S1}/>`,
    regalos: () => `<rect x="28" y="80" width="16" height="12" fill="#c0453a" ${S1}/><path d="M36 80 v12M28 85 h16" stroke="#f3d36b" stroke-width="2"/><path d="M36 80 l-4 -4 M36 80 l4 -4" stroke="#f3d36b" stroke-width="1.6"/><rect x="48" y="84" width="12" height="8" fill="#5f8a55" ${S1}/><path d="M54 84 v8" stroke="#fbf7ef" stroke-width="1.6"/><rect x="64" y="78" width="14" height="14" fill="#4f6fae" ${S1}/><path d="M64 84 h14M71 78 v14" stroke="#e58aa6" stroke-width="2"/>`,
    calabaza: () => `<ellipse class="glow" cx="56" cy="82" rx="16" ry="12" fill="#ffd28a" opacity=".35"/><ellipse cx="56" cy="84" rx="12" ry="9" fill="#e8873f" ${S}/><path d="M50 76 q-2 8 0 16M62 76 q2 8 0 16M56 75 v18" stroke="#c9682a" stroke-width="1.2" fill="none"/><path d="M56 75 q0 -4 3 -5" stroke="#5f8a55" stroke-width="2.4" fill="none"/><path d="M50 81 l2 -2 2 2Z M58 81 l2 -2 2 2Z" fill="#fbe08a"/><path d="M50 86 q6 4 12 0 l-2 1 -2 -1 -2 1 -2 -1 -2 1Z" fill="#fbe08a"/>`,
    rosas: () => `<path d="M48 92 q-4 -10 2 -14 h12 q6 4 2 14Z" fill="#dfeef2" fill-opacity=".8" ${S1}/><path d="M52 78 q-4 -8 -8 -10M56 78 v-12M60 78 q4 -8 8 -10" stroke="#5f8a55" stroke-width="1.6" fill="none"/>${[[44, 67], [56, 64], [68, 67]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#e14f6c" ${S1}/><path d="M${x - 1.5} ${y} q1.5 -2 3 0" stroke="#a8243f" stroke-width=".8" fill="none"/>`).join("")}`,
    te: () => `<path d="M38 92 q-6 -10 6 -14 h10 q12 4 6 14Z" fill="#c8352c" ${S}/><path d="M60 82 q8 -2 6 -8" ${S1}/><path d="M36 82 q-6 -2 -4 -6" ${S1}/><rect x="46" y="74" width="6" height="4" rx="1" fill="#c8352c" ${S1}/><path d="M48 70 q2 -3 0 -6 q-2 -3 0 -6" stroke="#fff" stroke-width="1.2" fill="none" opacity=".7" class="steam"/><path d="M66 92 h10 v-6 h-10Z M80 92 h8 v-5 h-8Z" fill="#fbf7ef" ${S1}/>`,
    botijo: () => `<path d="M30 92 q-6 -10 2 -16 q8 -4 14 0 q8 6 2 16Z" fill="#d6a274" ${S}/><path d="M40 76 v-6 M44 74 l6 -6" ${S}/><path d="M32 72 q8 -6 16 0" stroke="#d6a274" stroke-width="2" fill="none"/>${POT(58, 84, 18, 8)}${[[60, 76], [66, 72], [72, 76], [68, 80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#e14f6c"/>`).join("")}<path d="M62 82 q2 -2 4 0M70 82 q2 -2 4 0" stroke="#5f8a55" stroke-width="1.6" fill="none"/>`
  },
  cornerL: {
    bascula: () => `${SH(48, 187, 38, 3)}<rect x="12" y="172" width="72" height="13" rx="3" fill="#dfeef2" ${S}/><rect x="16" y="168" width="64" height="5" rx="2" fill="#c9d3d9" ${S1}/><rect x="40" y="140" width="16" height="29" fill="#c9d3d9" ${S}/><rect x="34" y="122" width="28" height="19" rx="3" fill="#fbf7ef" ${S}/><rect x="38" y="126" width="20" height="9" rx="1.5" fill="#bfe0c8"/><text x="41" y="133.5" font-family="monospace" font-size="7" fill="${INK}">4,2</text>`,
    botiquin: () => `${SH(48, 187, 36, 3)}<rect x="14" y="128" width="68" height="57" rx="3" fill="#fbf7ef" ${S}/><path d="M48 130 v53" ${S1}/><circle cx="44" cy="156" r="1.6" fill="${INK}"/><circle cx="52" cy="156" r="1.6" fill="${INK}"/><rect x="24" y="116" width="48" height="12" rx="2" fill="#dfeef2" ${S}/><path d="M48 136 v12M42 142 h12" stroke="#c0453a" stroke-width="4" stroke-linecap="round"/><rect x="28" y="108" width="10" height="8" rx="1.5" fill="#a9c49a" ${S1}/>`,
    sofa: () => `${SH(48, 187, 38, 3)}<path d="M20 186 v-6M76 186 v-6" stroke="#7a5638" stroke-width="3" stroke-linecap="round"/><rect x="18" y="144" width="60" height="22" rx="7" fill="#8fae8b" ${S}/><rect x="14" y="162" width="68" height="18" rx="5" fill="#a9c49a" ${S}/><path d="M48 164 v14" ${S1}/><rect x="10" y="156" width="11" height="26" rx="4" fill="#8fae8b" ${S}/><rect x="75" y="156" width="11" height="26" rx="4" fill="#8fae8b" ${S}/><rect x="24" y="148" width="18" height="13" rx="5" fill="#f3d36b" transform="rotate(-8 33 154)" ${S1}/><rect x="56" y="148" width="16" height="12" rx="5" fill="#eab3ae" transform="rotate(6 64 154)" ${S1}/>`,
    acuario: () => `${SH(48, 187, 40, 3)}<rect x="10" y="148" width="76" height="37" rx="3" fill="#b58550" ${S}/><path d="M48 150 v33" ${S1}/><circle cx="43" cy="166" r="1.5" fill="${INK}"/><circle cx="53" cy="166" r="1.5" fill="${INK}"/>
      <rect x="16" y="116" width="64" height="32" rx="3" fill="#bfe0e8" ${S}/><path d="M18 144 Q30 138 44 144 Q58 138 78 144 L78 146 L18 146Z" fill="#e2cfae"/><path d="M26 144 q-3 -8 1 -16M30 144 q3 -7 -1 -13M70 144 q2 -6 -1 -11" stroke="#6f9e6b" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <g class="swim"><ellipse cx="52" cy="130" rx="6" ry="4" fill="#f0a35e" ${S1}/><path d="M58 130 l5 -4 0 8Z" fill="#f0a35e" ${S1}/><circle cx="49.4" cy="129.2" r=".9" fill="${INK}"/></g><g class="swim2"><ellipse cx="36" cy="136" rx="4" ry="2.8" fill="#9cc0cf" ${S1}/><path d="M40 136 l3.5 -3 0 6Z" fill="#9cc0cf" ${S1}/></g><circle class="bubble" cx="66" cy="126" r="2" fill="none" stroke="#fff" stroke-width="1"/>`,
    chimenea: () => `${SH(48, 187, 42, 3)}<rect x="10" y="118" width="76" height="68" fill="#c27a5c" ${S}/>${[128, 138, 148, 158, 168, 178].map((y, i) => `<path d="M10 ${y} h76" stroke="#9c5a42" stroke-width="1"/>${[0, 1, 2, 3].map(j => `<path d="M${16 + j * 20 + (i % 2) * 10} ${y - 10} v10" stroke="#9c5a42" stroke-width="1"/>`).join("")}`).join("")}<rect x="4" y="112" width="88" height="8" rx="2" fill="#7a5638" ${S}/><path d="M26 186 V150 Q48 136 70 150 V186Z" fill="#2e2630" ${S}/><ellipse class="glow" cx="48" cy="176" rx="22" ry="12" fill="#f3b04f" opacity=".35"/><path d="M34 182 h28" stroke="#7a5638" stroke-width="4" stroke-linecap="round"/><path class="flicker" style="transform-origin:48px 182px" d="M38 182 q-2 -10 6 -16 q-2 8 4 8 q2 -10 8 -14 q-2 10 4 14 q4 4 0 8Z" fill="#f3b04f"/><path class="flicker" style="transform-origin:48px 182px;animation-delay:.3s" d="M44 182 q0 -8 4 -10 q0 6 4 6 q2 2 0 4Z" fill="#fbe08a"/><path d="M8 112 q14 8 26 0 q14 8 26 0 q14 8 28 0" stroke="#3f6f4a" stroke-width="4" fill="none"/>${[20, 48, 74].map(x => `<circle cx="${x}" cy="116" r="2" fill="#c0453a"/>`).join("")}`,
    caldero: () => `${SH(48, 187, 30, 3)}<path d="M26 186 l4 -6M70 186 l-4 -6" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M20 156 Q18 184 48 184 Q78 184 76 156Z" fill="#2e2630" ${S}/><ellipse cx="48" cy="156" rx="29" ry="7" fill="#7fbf8a" ${S}/><circle class="bubble" cx="40" cy="152" r="3" fill="#9fd8a8" ${S1}/><circle class="bubble" style="animation-delay:.6s" cx="56" cy="150" r="2.2" fill="#9fd8a8" ${S1}/><circle class="bubble" style="animation-delay:1.2s" cx="48" cy="148" r="1.6" fill="#9fd8a8" ${S1}/><ellipse class="glow" cx="48" cy="150" rx="26" ry="10" fill="#9fd8a8" opacity=".25"/>`,
    globos: () => `${SH(48, 187, 14, 2)}<rect x="42" y="178" width="12" height="8" rx="2" fill="#e2b65e" ${S1}/>${[[30, 118, "#e14f6c"], [50, 108, "#f29bb0"], [68, 122, "#c94479"]].map(([x, y, c], i) => `<g class="bob" style="animation-delay:${i * .5}s"><path d="M${x} ${y + 10} Q${x + (48 - x) / 2} ${y + 40} 48 178" stroke="${INK}" stroke-width=".8" fill="none"/><path d="M${x} ${y + 10} C${x - 14} ${y + 1} ${x - 9} ${y - 10} ${x} ${y - 3} C${x + 9} ${y - 10} ${x + 14} ${y + 1} ${x} ${y + 10}Z" fill="${c}" ${S1}/><path d="M${x - 5} ${y - 3} q2 -3 4 -2" stroke="#fff" stroke-width="1.4" opacity=".6"/></g>`).join("")}`,
    biombo: () => `${SH(48, 187, 40, 3)}${[10, 36, 62].map(x => `<rect x="${x}" y="116" width="25" height="70" rx="1" fill="#f6efe0" ${S}/><path d="M${x + 12.5} 116 v70M${x} 150 h25" stroke="#8a6a4a" stroke-width="1.4"/>`).join("")}<path d="M14 140 q20 -10 36 -4 q16 4 32 -8" stroke="#6b4430" stroke-width="2" fill="none"/>${[[22, 136], [34, 132], [48, 136], [60, 136], [72, 130], [80, 128]].map(([x, y]) => FLOWER(x, y, 1.8, "#f2b5c4", "#c9607e")).join("")}`,
    tinaja: () => `${SH(48, 187, 22, 3)}<path d="M34 186 q-12 -20 -4 -40 q4 -8 0 -12 h36 q-4 4 0 12 q8 20 -4 40Z" fill="#c9764e" ${S}/><path d="M32 152 q16 6 32 0" stroke="#a85f3a" stroke-width="1.6" fill="none"/><path d="M40 134 q-6 -14 -10 -20M48 134 v-24M56 134 q6 -14 10 -20M44 134 q-2 -16 -6 -22M52 134 q2 -16 6 -22" stroke="#7a9a6a" stroke-width="1.4" fill="none"/>${[[30, 114], [38, 112], [48, 110], [58, 112], [66, 114]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="2" ry="5" fill="#9c84c4"/>`).join("")}`,
    gramola: () => `${SH(48, 187, 32, 3)}<path d="M20 186 V140 Q20 112 48 112 Q76 112 76 140 V186Z" fill="#a87447" ${S}/><path d="M26 160 V142 Q26 120 48 120 Q70 120 70 142 V160Z" fill="#f3d36b" ${S1}/><path class="neon" d="M26 142 Q26 120 48 120 Q70 120 70 142" stroke="#e14f6c" stroke-width="3" fill="none"/><path d="M30 150 h36M30 155 h36" stroke="#c9764e" stroke-width="1.2"/><rect x="28" y="164" width="40" height="16" rx="3" fill="#3e4f45" ${S1}/>${[34, 42, 50, 58].map(x => `<path d="M${x} 166 v12" stroke="#7a8a80" stroke-width="2"/>`).join("")}`
  },
  plant: {
    monstera: () => `${SH(339, 187, 16, 2.6)}${POT(326, 160, 26, 26)}${[["M339 160 C330 140 316 136 312 142 C318 150 328 156 339 160Z", "#6f9e6b"], ["M339 160 C342 136 354 124 360 128 C358 140 350 152 339 160Z", "#7fae78"], ["M339 160 C336 138 340 118 346 114 C350 126 346 146 339 160Z", "#5f8e5c"]].map(([d, c]) => `<path class="leaf" style="transform-origin:339px 160px" d="${d}" fill="${c}" ${S}/>`).join("")}`,
    cactus: () => `${SH(340, 187, 16, 2.6)}${POT(328, 164, 24, 22, "#e2b45a")}<path d="M334 164 V122 q0 -7 6 -7 q6 0 6 7 V164Z" fill="#7fae78" ${S}/><path d="M334 142 h-6 q-4 0 -4 -4 v-8 q0 -3 3 -3 q3 0 3 3 v6 h4" fill="#7fae78" ${S}/><path d="M346 136 h6 q4 0 4 -4 v-10 q0 -3 -3 -3 q-3 0 -3 3 v8 h-4" fill="#7fae78" ${S}/><circle cx="340" cy="114" r="3" fill="#f29b8a" ${S1}/>`,
    helecho: () => `${SH(340, 187, 18, 2.6)}<path d="M330 186 l4 -20 h12 l4 20" fill="none" stroke="#7a5638" stroke-width="2.4"/>${POT(328, 150, 24, 16, "#efe3cf")}${[[-28, 0], [-16, -14], [0, -22], [16, -14], [26, 2]].map(([dx, dy]) => `<path class="leaf" style="transform-origin:340px 150px" d="M340 150 Q${340 + dx * .5} ${136 + dy * .6} ${340 + dx} ${142 + dy}" stroke="#6f9e6b" stroke-width="3" fill="none" stroke-linecap="round"/>`).join("")}`,
    ficus: () => `${SH(340, 187, 18, 2.6)}${POT(328, 162, 26, 24, "#9cc0cf")}<path d="M341 162 C339 146 343 134 340 118" stroke="#7a5638" stroke-width="3" fill="none"/>${[[326, 122], [338, 110], [352, 118], [330, 134], [354, 132], [342, 124], [320, 114], [346, 102]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="9" fill="${i % 2 ? "#6f9e6b" : "#7fae78"}" ${S1}/>`).join("")}`,
    arbol_navidad: () => `${SH(338, 187, 20, 3)}<rect x="326" y="172" width="24" height="14" rx="2" fill="#c0453a" ${S}/><path d="M326 178 h24" stroke="#f3d36b" stroke-width="2"/><rect x="335" y="164" width="6" height="9" fill="#7a5638"/>${[[338, 92, 14, 132], [338, 108, 19, 150], [338, 124, 23, 166]].map(([x, y, w, b]) => `<path d="M${x} ${y} L${x - w} ${b} Q${x} ${b + 5} ${x + w} ${b}Z" fill="#3f6f4a" ${S}/>`).join("")}${[[332, 126, "#c0453a"], [346, 140, "#f0c25e"], [326, 152, "#9cc0cf"], [344, 158, "#c0453a"], [336, 144, "#e58aa6"], [350, 160, "#f0c25e"], [340, 114, "#9cc0cf"]].map(([x, y, c], i) => `<circle class="twinkle" style="animation-delay:${i * .35}s" cx="${x}" cy="${y}" r="2.6" fill="${c}" ${S1}/>`).join("")}${STARP(338, 90, 6, "#f3d36b")}`,
    calabazas: () => `${SH(338, 187, 22, 3)}${[[326, 176, 12, 9], [350, 178, 10, 8], [338, 160, 11, 9]].map(([x, y, rx, ry]) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#e8873f" ${S}/><path d="M${x - rx / 2} ${y - ry + 1} q-2 ${ry} 0 ${ry * 2 - 2}M${x + rx / 2} ${y - ry + 1} q2 ${ry} 0 ${ry * 2 - 2}" stroke="#c9682a" stroke-width="1.2" fill="none"/><path d="M${x} ${y - ry} q0 -4 3 -5" stroke="#5f8a55" stroke-width="2.4" fill="none"/>`).join("")}`,
    arbol_corazones: () => `${SH(339, 187, 16, 2.6)}${POT(328, 166, 22, 20, "#f6c3cf")}<path d="M339 166 C338 150 342 140 339 126M339 146 l-10 -8M340 138 l10 -8" stroke="#7a5638" stroke-width="2.6" fill="none"/>${[[328, 134], [339, 122], [350, 128], [324, 120], [352, 116], [338, 108], [330, 146], [350, 144]].map(([x, y], i) => `<g class="bob" style="animation-delay:${i * .2}s">${HEART(x, y, 1.7, ["#e14f6c", "#f29bb0", "#c94479"][i % 3])}</g>`).join("")}`,
    bonsai: () => `${SH(339, 187, 22, 3)}<rect x="320" y="174" width="38" height="12" fill="#6b4430" ${S}/><path d="M318 166 h42 l-4 8 h-34Z" fill="#3e4f45" ${S}/><path d="M340 166 C344 156 334 150 338 140 C342 132 352 132 350 124" stroke="#6b4430" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M338 146 q-10 -2 -14 -8" stroke="#6b4430" stroke-width="2.6" fill="none"/>${[[322, 134, 10], [348, 120, 12], [336, 128, 8]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .55}" fill="#5f8e5c" ${S1}/>`).join("")}`,
    olivo: () => `${SH(339, 187, 18, 3)}${POT(326, 162, 28, 24, "#c9764e")}<path d="M340 162 C336 150 344 142 338 128 M340 140 l10 -10M338 132 l-10 -8" stroke="#7a6a5a" stroke-width="3" fill="none" stroke-linecap="round"/>${[[330, 118, 14, 11], [348, 112, 13, 10], [338, 102, 12, 9], [322, 128, 9, 7], [354, 126, 9, 7]].map(([x, y, rx, ry]) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#8a9c7a" opacity=".55"/>`).join("")}${Array.from({ length: 40 }, (_, i) => { const a = i * 2.4, r = 4 + (i * 7) % 16, x = 338 + r * Math.cos(a) * 1.3, y = 116 + r * Math.sin(a) * .8; return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="4.6" ry="1.7" fill="${i % 3 ? "#9fae8a" : "#7d8f6d"}" stroke="#5f6f52" stroke-width=".4" transform="rotate(${(i * 47) % 120 - 60} ${x.toFixed(1)} ${y.toFixed(1)})"/>`; }).join("")}${[[330, 112], [346, 120], [336, 104]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#4a4a5c"/>`).join("")}`,
    saguaro: () => `${SH(340, 187, 18, 3)}${POT(326, 168, 28, 18)}<path d="M334 168 V100 q0 -8 7 -8 q7 0 7 8 V168Z" fill="#6f9e6b" ${S}/><path d="M334 138 h-8 q-4 0 -4 -4 v-16 q0 -4 4 -4 q4 0 4 4 v12 h4" fill="#6f9e6b" ${S}/><path d="M348 128 h8 q4 0 4 -4 v-12 q0 -4 -4 -4 q-4 0 -4 4 v8 h-4" fill="#6f9e6b" ${S}/><path d="M338 98 v66M344 98 v66" stroke="#5f8e5c" stroke-width="1.2"/>`
  },
  rug: {
    redonda: () => `<ellipse cx="160" cy="214" rx="96" ry="18" fill="#c9764e" ${S}/><ellipse cx="160" cy="214" rx="78" ry="12" fill="none" stroke="#f3d36b" stroke-width="2" stroke-dasharray="5 4"/>`,
    rayas: () => `<rect x="70" y="198" width="190" height="34" rx="4" fill="#efe3cf" ${S}/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${76 + i * 23}" y="200" width="10" height="30" fill="${["#8fae8b", "#e6a77f"][i % 2]}"/>`).join("")}`,
    huella: () => `<g fill="#e6a77f" ${S}><ellipse cx="165" cy="225" rx="50" ry="12"/><ellipse cx="96" cy="210" rx="16" ry="5.5"/><ellipse cx="128" cy="204" rx="16" ry="5.5"/><ellipse cx="202" cy="204" rx="16" ry="5.5"/><ellipse cx="234" cy="210" rx="16" ry="5.5"/></g>`,
    r_navidad: () => `<ellipse cx="160" cy="214" rx="96" ry="18" fill="#b8473a" ${S}/><ellipse cx="160" cy="214" rx="80" ry="13" fill="none" stroke="#fbf7ef" stroke-width="2"/>${[100, 130, 160, 190, 220].map((x, i) => `<path d="M${x - 5} ${214 + (i % 2 ? 4 : -4)} h10M${x} ${209 + (i % 2 ? 4 : -4)} v10M${x - 3.5} ${210.5 + (i % 2 ? 4 : -4)} l7 7M${x + 3.5} ${210.5 + (i % 2 ? 4 : -4)} l-7 7" stroke="#fbf7ef" stroke-width="1.2"/>`).join("")}`,
    r_calabaza: () => `<ellipse cx="160" cy="216" rx="92" ry="17" fill="#e8873f" ${S}/>${[-60, -30, 0, 30, 60].map(dx => `<path d="M${160 + dx} 200 q${dx * .1} 16 0 32" stroke="#c9682a" stroke-width="1.6" fill="none"/>`).join("")}<path d="M140 212 l6 -5 6 5Z M168 212 l6 -5 6 5Z" fill="#3a2f45"/><path d="M144 220 q16 8 32 0" stroke="#3a2f45" stroke-width="3" fill="none"/>`,
    r_corazon: () => `<path d="M160 236 C110 218 108 196 132 196 C146 196 154 204 160 210 C166 204 174 196 188 196 C212 196 210 218 160 236Z" fill="#f29bb0" ${S}/><path d="M160 228 C124 216 124 202 136 202 C146 202 154 208 160 214 C166 208 174 202 184 202 C196 202 196 216 160 228Z" fill="none" stroke="#fbf7ef" stroke-width="2" stroke-dasharray="4 3"/>`,
    r_tatami: () => `<rect x="80" y="198" width="170" height="36" fill="#d9c88f" ${S}/><rect x="80" y="198" width="170" height="36" fill="none" stroke="#3e4f45" stroke-width="5"/>${Array.from({ length: 16 }, (_, i) => `<path d="M${88 + i * 10} 202 v28" stroke="#c4b277" stroke-width="1"/>`).join("")}`,
    r_esparto: () => `<ellipse cx="160" cy="214" rx="90" ry="17" fill="#d9bf8a" ${S}/>${[72, 56, 40, 24].map(r => `<ellipse cx="160" cy="214" rx="${r}" ry="${r * .19}" fill="none" stroke="#bfa16a" stroke-width="1.6"/>`).join("")}`,
    r_rombos: () => `<defs>${patternDef("rugR", "rombos", "#efe3cf", "#c0453a")}</defs><rect x="76" y="198" width="180" height="34" rx="3" fill="url(#rugR)" ${S}/><rect x="76" y="198" width="180" height="34" rx="3" fill="none" stroke="#3e4f45" stroke-width="3"/>`
  },
  pet: {
    gato: () => `${SH(48, 232, 38, 3, .14)}<ellipse cx="48" cy="225" rx="38" ry="10" fill="#b8473a" ${S}/><ellipse cx="48" cy="222" rx="31" ry="6.5" fill="#d0675a"/>
      <g class="breathe" style="transform-origin:48px 222px">
      <path d="M22 220 C18 204 34 194 52 196 C68 198 79 207 75 217 C71 224 30 226 22 220Z" fill="#d89a5b" ${S}/>
      <path d="M30 203 q4 4 2 9M40 199 q4 5 1 10M50 198 q3 5 0 10M60 200 q2 5 -1 9" stroke="#b8733a" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M24 214 C30 220 52 224 64 220" stroke="#c4864a" stroke-width="2" fill="none" opacity=".6"/>
      <path d="M59 207 L60 198 L66 205Z" fill="#d89a5b" ${S1}/><path d="M60.5 204.5 L61 200.5 L64 204Z" fill="#f1a7a0"/><path d="M67 205 L72 198 L74 207Z" fill="#d89a5b" ${S1}/>
      <ellipse cx="67" cy="214" rx="11" ry="9" fill="#d89a5b" ${S}/><path d="M61 207 q2 3 1 6M66 206 q1 3 0 5" stroke="#b8733a" stroke-width="1.6" fill="none"/>
      <ellipse cx="71" cy="218.5" rx="5" ry="3" fill="#f6e7d2"/><path d="M62.5 213.5 q2 1.6 4 0M69 214 q2 1.6 4 0" ${S1}/><path d="M71 216.5 l1.4 1 l1.4 -1Z" fill="#e58b8b"/>
      <path d="M74 218 l9 -1M74 219.5 l9 1" stroke="${INK}" stroke-width=".6"/>
      <ellipse cx="58" cy="222" rx="7" ry="3" fill="#f6e7d2" ${S1}/>
      <path d="M24 218 C24 230 52 231 62 225" stroke="${INK}" stroke-width="8.5" fill="none" stroke-linecap="round"/><path d="M24 218 C24 230 52 231 62 225" stroke="#d89a5b" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M40 228 v-3M48 228 v-3" stroke="#b8733a" stroke-width="2"/>
      </g><text class="zz" x="78" y="200" font-size="8" fill="${INK}" font-family="Georgia,serif" font-style="italic">z</text>`,
    perro: () => `${SH(50, 234, 44, 3, .14)}
      <ellipse cx="50" cy="226" rx="46" ry="12.5" fill="#5f84a8" ${S}/><ellipse cx="50" cy="223.5" rx="38" ry="8" fill="#a8c4da"/><path d="M8 226 Q50 240 92 226" stroke="#86a6c4" stroke-width="2" stroke-dasharray="3 3" fill="none"/>
      <g class="breathe" style="transform-origin:50px 224px">
      <path class="wag-slow" style="transform-box:fill-box;transform-origin:100% 100%" d="M16 214 C9 212 6 206 9 200" stroke="${INK}" stroke-width="5.5" fill="none" stroke-linecap="round"/>
      <path class="wag-slow" style="transform-box:fill-box;transform-origin:100% 100%" d="M16 214 C9 212 6 206 9 200" stroke="#c98f55" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      <path d="M14 222 C12 210 20 202 34 201 C48 200 60 203 68 208 C74 212 76 218 74 224 C60 228 26 229 14 222Z" fill="#c98f55" ${S}/>
      <path d="M20 207 C28 201 46 200 58 204 C54 209 44 211 34 211 C27 211 22 210 20 207Z" fill="#3e3230"/>
      <path d="M17 220 C24 225 44 227 58 225" stroke="#a87444" stroke-width="2" fill="none" opacity=".55"/>
      <path d="M18 215 C18 206 30 205 34 212 C36 219 32 224 24 224 C20 224 18 220 18 215Z" fill="#c98f55" ${S1}/><path d="M23 210 q5 1 7 5" stroke="#a87444" stroke-width="1.4" fill="none"/>
      <ellipse cx="33" cy="226.5" rx="8" ry="2.6" fill="#fbf7ef" ${S1}/><path d="M37 225.5 v2M39.5 225.8 v2" stroke="${INK}" stroke-width=".7"/>
      <path d="M48 225 C56 222 66 221 74 222 L74 226.5 C62 228 54 228 48 227Z" fill="#fbf7ef"/>
      <ellipse cx="84" cy="226.5" rx="9" ry="2.8" fill="#fbf7ef" ${S1}/><ellipse cx="77" cy="228.6" rx="8" ry="2.5" fill="#fbf7ef" ${S1}/><path d="M89 225.5 v2M91 225.8 v2M82 227.6 v2M84.5 227.8 v2" stroke="${INK}" stroke-width=".7"/>
      <path d="M65 214 C66 205 76 201 83 204 C87 206 89 210 89 213 L95 215 C98 216.5 98 221 95 222 L84 223.5 C75 224.5 66 221 65 214Z" fill="#c98f55" ${S}/>
      <path d="M86 212.5 C90 212.5 96 214.5 96.5 218 C96.5 221 91 222.5 85 222 Z" fill="#fbf7ef"/><path d="M79 203.5 C81 207 84 210 87 212.5" stroke="#fbf7ef" stroke-width="2.8" fill="none" stroke-linecap="round"/>
      <ellipse cx="96.5" cy="217" rx="2.2" ry="1.7" fill="${INK}"/><ellipse cx="95.8" cy="216.4" rx=".7" ry=".4" fill="#fff" opacity=".7"/><path d="M96 219 q-3 2.4 -7 1.6" ${S1}/>
      <path d="M80 210 q2.2 1.6 4.4 0" ${S1}/><path d="M80.5 207.5 q1.6 -.8 3 -.2" stroke="#3e3230" stroke-width="1" fill="none"/>
      <path class="ear" style="transform-box:fill-box;transform-origin:50% 0%" d="M73 206 C67 207 65 217 69 223 C73 225.5 77.5 221 77.5 214.5 C77.5 210 76 207 73 206Z" fill="#7a4a2c" ${S1}/>
      <path d="M71 210 q-2 6 0 10" stroke="#5c3620" stroke-width="1" fill="none" opacity=".6"/>
      <path d="M66 216 q-1 4 1 6" stroke="#c0453a" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="67.6" cy="222.6" r="1.4" fill="#f0c25e"/>
      </g>`,
    conejo: () => `${SH(46, 234, 26, 3, .14)}<g class="breathe" style="transform-origin:46px 232px">
      <path d="M24 232 C18 216 28 200 46 200 C60 200 66 212 64 224 C62 233 30 235 24 232Z" fill="#c9b29a" ${S}/>
      <path d="M30 228 C26 218 34 208 46 212 C52 214 54 222 50 228" stroke="#a8917a" stroke-width="1.6" fill="none"/>
      <ellipse cx="42" cy="233" rx="12" ry="3" fill="#e8dccb" ${S1}/><circle cx="22" cy="222" r="4.4" fill="#fbf7ef" ${S1}/>
      <path d="M59 199 C53 183 57 176 61 180 C64 186 64 192 63 198Z" fill="#c9b29a" ${S1}/><path d="M59.5 194 C57 184 59 181 61 184Z" fill="#e8b0a8"/>
      <path class="ear" style="transform-origin:66px 197px" d="M64 197 C64 180 70 175 72 181 C72 188 69 194 67 198Z" fill="#c9b29a" ${S1}/>
      <ellipse cx="66" cy="205" rx="11" ry="9" fill="#c9b29a" ${S}/><ellipse cx="72" cy="208" rx="5" ry="3.6" fill="#e8dccb"/>
      <circle cx="68" cy="202" r="2.2" fill="${INK}"/><circle cx="68.8" cy="201.2" r=".7" fill="#fff"/><path d="M76 206 l-1.4 1.6 h2.8Z" fill="#e58b8b"/>
      <path d="M75 208 l7 1M75 209 l7 3" stroke="${INK}" stroke-width=".5"/><ellipse cx="64" cy="216" rx="4" ry="2.4" fill="#e8dccb" ${S1}/>
      </g>`,
    tortuga: () => `${SH(48, 233, 28, 3, .14)}<g class="walk" style="transform-origin:48px 230px">
      <path d="M30 228 q-2 6 4 6 q4 0 4 -6Z M56 228 q-2 6 4 6 q4 0 4 -6Z" fill="#8fa06b" ${S1}/>
      <path d="M22 226 C22 206 36 198 48 198 C62 198 74 208 74 226Z" fill="#7a6a3e" ${S}/>
      <path d="M22 226 h52" stroke="#a08a52" stroke-width="4"/><path d="M22 226 h52" ${S1}/>
      <path d="M36 224 l4 -12 h16 l4 12M40 212 l-8 -4M56 212 l8 -4M48 212 v-12" stroke="#5c4f2c" stroke-width="1.4" fill="none"/>
      <path d="M74 222 C80 216 88 216 91 221 C92 226 84 228 75 226Z" fill="#8fa06b" ${S1}/><circle cx="86" cy="220" r="1.4" fill="${INK}"/><path d="M88 224 q1.6 .8 2.6 0" ${S1}/>
      <path d="M22 224 l-6 2" stroke="#8fa06b" stroke-width="2.4" stroke-linecap="round"/></g>`
  }
};
/* camillas: superficie a la altura y=148; patas hasta y=206 */
const TABLES = {
  metal: () => `<rect x="200" y="148" width="126" height="9" rx="3" fill="#dfe6e8" ${S}/><path d="M204 150 h118" stroke="#fff" stroke-width="1.4" opacity=".7"/><path d="M212 157 L212 204M314 157 L314 204" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M212 182 h102" stroke="${INK}" stroke-width="1.6"/><path d="M206 204 h14M306 204 h14" ${S}/>`,
  madera: () => `<rect x="200" y="146" width="126" height="11" rx="2" fill="#c28f5f" ${S}/><path d="M204 151 h40M262 152 h50" stroke="#a87447" stroke-width="1.2"/><rect x="208" y="157" width="8" height="49" fill="#b07a4a" ${S}/><rect x="310" y="157" width="8" height="49" fill="#b07a4a" ${S}/><rect x="216" y="176" width="94" height="8" fill="#b07a4a" ${S}/>`,
  cojin: () => `<rect x="200" y="150" width="126" height="9" rx="2" fill="#c28f5f" ${S}/><rect x="208" y="159" width="8" height="47" fill="#b07a4a" ${S}/><rect x="310" y="159" width="8" height="47" fill="#b07a4a" ${S}/><rect x="198" y="138" width="130" height="14" rx="7" fill="#f6dccb" ${S}/>${[214, 238, 262, 286, 310].map((x, i) => FLOWER(x, 145, 1.8, i % 2 ? "#a9c49a" : "#f29b8a", "#fff6d8")).join("")}`,
  hidraulica: () => `<rect x="198" y="144" width="130" height="13" rx="5" fill="#5f84a8" ${S}/><path d="M204 147 h118" stroke="#8fb0cf" stroke-width="2" opacity=".8"/><rect x="214" y="157" width="98" height="6" rx="2" fill="#c9d3d9" ${S}/><rect x="255" y="163" width="16" height="32" rx="3" fill="#dfe6e8" ${S}/><path d="M259 167 v24" stroke="#fff" stroke-width="1.6" opacity=".7"/><path d="M226 206 Q263 192 300 206Z" fill="#c9d3d9" ${S}/><rect x="282" y="198" width="14" height="5" rx="2" fill="${INK}"/>`,
  acolchada: () => `<rect x="198" y="142" width="130" height="15" rx="6" fill="#86afc9" ${S}/>${[214, 232, 250, 268, 286, 304].map(x => `<circle cx="${x}" cy="149.5" r="1.2" fill="#5f84a8"/>`).join("")}<path d="M206 157 L214 196M320 157 L312 196" stroke="#c9d3d9" stroke-width="4" stroke-linecap="round"/><path d="M206 157 L214 196M320 157 L312 196" ${S1}/><path d="M212 178 h102" stroke="#c9d3d9" stroke-width="3"/>${[214, 312].map(x => `<circle cx="${x}" cy="201" r="5" fill="#3e3a3b" ${S1}/><circle cx="${x}" cy="201" r="1.6" fill="#c9d3d9"/>`).join("")}`,
  bascula_mesa: () => `<rect x="200" y="148" width="126" height="9" rx="3" fill="#dfe6e8" ${S}/><rect x="204" y="157" width="118" height="18" rx="2" fill="#c9d3d9" ${S}/><rect x="248" y="160" width="30" height="12" rx="2" fill="#3e4f45" ${S1}/><text x="251" y="169" font-family="monospace" font-size="7.5" fill="#9fe0b0">5,40</text><path d="M212 175 L212 204M314 175 L314 204" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M206 204 h14M306 204 h14" ${S}/>`,
  rustica: () => `<rect x="198" y="146" width="130" height="12" rx="2" fill="#a87447" ${S}/><path d="M202 152 h122" stroke="#8a5f3a" stroke-width="1"/><path d="M212 158 L238 204M238 158 L212 204M288 158 L314 204M314 158 L288 204" stroke="#8a5f3a" stroke-width="6" stroke-linecap="round"/><path d="M212 158 L238 204M238 158 L212 204M288 158 L314 204M314 158 L288 204" ${S1}/><path d="M225 181 h76" stroke="#8a5f3a" stroke-width="4"/>`,
  t_navidad: () => TABLES.metal() + `<path d="M204 146 h118 v6 q-6 14 -14 8 q-8 10 -16 2 q-8 10 -16 2 q-8 10 -16 2 q-8 10 -16 2 q-8 10 -16 2 q-8 8 -14 -2Z" fill="#c0453a" ${S}/><path d="M204 152 h118" stroke="#fbf7ef" stroke-width="4"/>${[214, 262, 310].map(x => `<path d="M${x - 4} 160 q2 -3 4 0 q2 -3 4 0" fill="#5f8a55"/><circle cx="${x}" cy="161" r="1.4" fill="#c0453a"/>`).join("")}`,
  t_halloween: () => TABLES.metal() + `<path d="M204 146 h118 v12 l-8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6Z" fill="#3a2f45" ${S}/>${[220, 262, 304].map(x => `<ellipse cx="${x}" cy="153" rx="4" ry="3.2" fill="#e8873f"/>`).join("")}`,
  t_amor: () => TABLES.cojin().replace("#f6dccb", "#f6c3cf").replace(/#a9c49a/g, "#e14f6c").replace(/#f29b8a/g, "#fbf7ef"),
  t_laca: () => `<rect x="198" y="144" width="130" height="12" rx="2" fill="#b8352c" ${S}/><path d="M200 147 h126" stroke="#e86a5c" stroke-width="1.4" opacity=".7"/><path d="M198 144 h8 v12 h-8Z M320 144 h8 v12 h-8Z" fill="#e2b65e"/><path d="M210 156 Q206 182 212 206M316 156 Q320 182 314 206" stroke="#2e2630" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M216 176 h94" stroke="#2e2630" stroke-width="4"/>`,
  t_azulejo: () => `<defs>${patternDef("tAz", "flores", "#fbf8f2", "#4f7fae")}</defs><rect x="200" y="148" width="126" height="9" rx="2" fill="#c28f5f" ${S}/><rect x="204" y="157" width="118" height="49" fill="url(#tAz)" ${S}/><path d="M204 173 h118M204 189 h118M243 157 v49M283 157 v49" stroke="#4f7fae" stroke-width="1"/>`,
  t_diner: () => `<rect x="198" y="144" width="130" height="13" rx="6" fill="#d9454f" ${S}/><path d="M204 147 h118" stroke="#f39aa0" stroke-width="2" opacity=".8"/><rect x="200" y="157" width="126" height="4" fill="#dfe6e8" ${S1}/><path d="M212 161 L212 204M314 161 L314 204" stroke="#c9d3d9" stroke-width="4" stroke-linecap="round"/><path d="M212 161 L212 204M314 161 L314 204" ${S1}/><path d="M206 204 h14M306 204 h14" ${S}/>`
};
const TOWEL = { madera: "#cfe0e6", rustica: "#efdcb6", t_laca: "#f6efe0", t_azulejo: "#dfeef2", t_diner: "#fbf7ef" };

function sceneSVG(opts = {}) {
  const eq = opts.eq || G.eq, k = "s" + (uid++);
  const wall = findItem("wall", eq.wall) || SHOP.wall.items[0], floor = findItem("floor", eq.floor) || SHOP.floor.items[0];
  let defs = "", wallFill = wall.c;
  const pat = (body, w, h) => { defs += `<pattern id="${k}w" width="${w}" height="${h}" patternUnits="userSpaceOnUse">${body}</pattern>`; wallFill = `url(#${k}w)`; };
  const usePat = (p, bg, fg) => { defs += patternDef(k + "w", p, bg, fg); wallFill = `url(#${k}w)`; };
  if (eq.wall === "huellas") pat(`<rect width="38" height="38" fill="${wall.c}"/>${PAWP(10, 12, 1.2, wall.d)}${PAWP(29, 30, 1.2, wall.d)}`, 38, 38);
  if (eq.wall === "flores") pat(`<rect width="34" height="34" fill="${wall.c}"/>${FLOWER(8, 9, 2, "#e6a77f")}${FLOWER(26, 25, 2, "#a9c49a", "#f3d36b")}`, 34, 34);
  if (eq.wall === "rayas") pat(`<rect width="22" height="10" fill="${wall.c}"/><rect width="8" height="10" fill="${wall.d}" opacity=".45"/>`, 22, 10);
  if (eq.wall === "azulejo") pat(`<rect width="16" height="12" fill="${wall.c}"/><path d="M0 11.5 H16 M15.5 0 V12" stroke="${wall.d}" stroke-width="1"/>`, 16, 12);
  if (eq.wall === "madera") pat(`<rect width="30" height="60" fill="${wall.c}"/><path d="M0 0 V60" stroke="${wall.d}" stroke-width="2"/>`, 30, 60);
  if (eq.wall === "noche") pat(`<rect width="60" height="50" fill="${wall.c}"/><circle cx="10" cy="12" r="1.2" fill="#f3e6cf"/><circle cx="40" cy="8" r=".9" fill="#f3e6cf"/><circle cx="28" cy="34" r="1.4" fill="#f3d36b"/>`, 60, 50);
  if (eq.wall === "w_navidad") usePat("acebo", wall.c, wall.d);
  if (eq.wall === "w_halloween") usePat("murcielagos", wall.c, wall.d);
  if (eq.wall === "w_amor") usePat("corazones", wall.c, wall.d);
  if (eq.wall === "shoji") pat(`<rect width="24" height="30" fill="${wall.c}"/><path d="M0 0 V30 M0 0 H24 M12 0 V30 M0 15 H24" stroke="${wall.d}" stroke-width="1.6"/>`, 24, 30);
  if (eq.wall === "cal") pat(`<rect width="20" height="20" fill="${wall.c}"/>`, 20, 20);
  if (eq.wall === "ladrillo") pat(`<rect width="28" height="14" fill="${wall.c}"/><path d="M0 6.5 H28 M0 13.5 H28 M14 0 V6.5 M0 7 V14 M28 7 V14" stroke="${wall.d}" stroke-width="1.4"/>`, 28, 14);
  let floorFill = floor.c;
  const fpat = (body, w, h) => { defs += `<pattern id="${k}f" width="${w}" height="${h}" patternUnits="userSpaceOnUse">${body}</pattern>`; floorFill = `url(#${k}f)`; };
  if (eq.floor === "tarima") fpat(`<rect width="80" height="16" fill="${floor.c}"/><path d="M0 15.5 H80M30 0 V16" stroke="#a87447" stroke-width="1.4"/>`, 80, 16);
  if (eq.floor === "oscura") fpat(`<rect width="80" height="16" fill="${floor.c}"/><path d="M0 15.5 H80M50 0 V16" stroke="#6b4a32" stroke-width="1.4"/>`, 80, 16);
  if (eq.floor === "espiga") fpat(`<rect width="24" height="24" fill="${floor.c}"/><path d="M0 12 L12 0 L24 12 L12 24Z" fill="none" stroke="#a87447" stroke-width="1.3"/>`, 24, 24);
  if (eq.floor === "baldosa") fpat(`<rect width="32" height="20" fill="${floor.c}"/><path d="M0 19.5 H32 M31.5 0 V20" stroke="#b86d52" stroke-width="1.4"/>`, 32, 20);
  if (eq.floor === "hidraulica") fpat(`<rect width="24" height="24" fill="${floor.c}"/><path d="M12 2 L22 12 L12 22 L2 12Z" fill="#9cc0cf" opacity=".6"/><circle cx="12" cy="12" r="3" fill="#c95b4a" opacity=".7"/>`, 24, 24);
  if (eq.floor === "damero") fpat(`<rect width="32" height="24" fill="${floor.c}"/><rect width="16" height="12" fill="#8a6a55"/><rect x="16" y="12" width="16" height="12" fill="#8a6a55"/>`, 32, 24);
  if (eq.floor === "verde") fpat(`<rect width="10" height="10" fill="${floor.c}"/><circle cx="3" cy="3" r=".8" fill="#7d9665"/>`, 10, 10);
  if (eq.floor === "tatami") fpat(`<rect width="60" height="30" fill="${floor.c}"/><path d="M0 29 H60 M59 0 V30" stroke="#3e4f45" stroke-width="2.4"/><path d="M0 8 H60 M0 16 H60 M0 23 H60" stroke="#c4b277" stroke-width=".8"/>`, 60, 30);
  defs += `<linearGradient id="${k}l" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff6d8" stop-opacity=".5"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></linearGradient>
    <radialGradient id="${k}v" cx=".5" cy=".45" r=".75"><stop offset=".6" stop-color="#4a3426" stop-opacity="0"/><stop offset="1" stop-color="#4a3426" stop-opacity=".22"/></radialGradient>
    <clipPath id="${k}c"><rect x="20" y="24" width="72" height="68"/></clipPath>`;
  const D = (cat) => eq[cat] && DECOR[cat][eq[cat]] ? DECOR[cat][eq[cat]]() : "";
  const night = ["noche", "luna"].includes(eq.view);
  const wainscot = eq.wall === "cal" ? `<defs>${patternDef(k + "z", "flores", "#fbf8f2", wall.d)}</defs><rect y="128" width="360" height="49" fill="url(#${k}z)"/><path d="M0 128 H360" stroke="${wall.d}" stroke-width="3"/>`
    : `<rect y="128" width="360" height="48" fill="${wall.d}" opacity=".55"/>${[30, 90, 150, 210, 270, 330].map(x => `<rect x="${x - 24}" y="135" width="48" height="34" rx="2" fill="none" stroke="${INK}" stroke-width="1" opacity=".18"/>`).join("")}`;
  /* altura de la superficie de cada camilla: el paciente se sienta encima, sobre la toalla */
  const TOP = { cojin: 138, t_amor: 138, acolchada: 142, hidraulica: 144, t_laca: 144, t_diner: 144, madera: 146, rustica: 146, t_navidad: 146, t_halloween: 146 }[eq.table] || 148;
  const PS = .8, py = TOP - 2 - 101 * PS, px = 263 - 50 * PS;
  const patient = opts.patient ? `${SH(263, TOP - 2, 30, 3, .16)}<g class="${opts.mood === "happy" ? "hop" : opts.mood === "sad" ? "droop" : "idle"}" style="transform-origin:263px ${TOP}px"><g transform="translate(${px} ${py.toFixed(1)}) scale(${PS})">${animalSVG(opts.patient.species, opts.patient.name, opts.mood || "neutral")}</g></g>` : "";
  const table = (TABLES[eq.table] || TABLES.metal)();
  const towelC = TOWEL[eq.table] || "#f2d6cd";
  const towel = opts.patient ? `<path d="M226 ${TOP - 1} q6 -6 18 -4 h38 q10 -2 16 4 v4 h-72Z" fill="${towelC}" ${S1}/>` : `<path d="M226 147 q8 -10 22 -4 q12 -6 22 2 q10 -2 14 2" fill="${towelC}" ${S}/>`;
  return `<svg class="scene" viewBox="${opts.viewBox || "0 0 360 240"}" role="img" aria-label="Tu clínica" preserveAspectRatio="xMidYMid meet">
    <defs>${defs}</defs>
    <rect width="360" height="177" fill="${wallFill}"/>${wainscot}
    <path d="M0 128 H360" stroke="${INK}" stroke-width="1.6" opacity=".6"/><rect y="170" width="360" height="7" fill="${eq.wall === "cal" ? "#4f7fae" : wall.d}"/><path d="M0 170 H360" stroke="${INK}" stroke-width="1" opacity=".4"/>
    <g>${D("wallL")}${D("wallC")}${D("wallR")}</g>
    <g><g clip-path="url(#${k}c)">${windowView(eq.view || "campo")}</g>
      <rect x="20" y="24" width="72" height="68" rx="2" fill="none" ${S}/><path d="M56 24 V92M20 58 H92" stroke="${INK}" stroke-width="2"/><path d="M24 28 l14 0 l-14 14Z" fill="#fff" opacity=".25"/>
      ${curtainsSVG(eq.curtains, k)}
      <rect x="12" y="16" width="88" height="5" rx="2.5" fill="#a87447" ${S}/><rect x="16" y="91" width="80" height="6" rx="2" fill="#f3e6cf" ${S}/>${SH(56, 99, 38, 2, .12)}
      ${D("sill")}</g>
    ${D("shelf")}
    <rect y="177" width="360" height="63" fill="${floorFill}"/><path d="M0 177 H360" stroke="${INK}" stroke-width="2"/><rect y="177" width="360" height="10" fill="${INK}" opacity=".08"/>
    ${night ? "" : `<path d="M24 179 L94 179 L140 238 L54 238Z" fill="url(#${k}l)"/>`}
    ${D("cornerL")}
    ${D("rug")}
    ${D("plant")}
    ${SH(263, 207, 66, 5, .14)}${table}${towel}
    ${patient}
    ${D("pet")}
    ${SH(146, 236, 40, 4, .1)}<g class="vet ${opts.vetMood === "happy" ? "cheer" : ""}" style="transform-origin:146px 240px"><g transform="translate(84 88) scale(1.08)">${avatarG(eq, opts.vetMood || "neutral")}</g></g>
    ${D("ceiling")}
    <rect width="360" height="240" fill="url(#${k}v)" pointer-events="none"/>
  </svg>`;
}
