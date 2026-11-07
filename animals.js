"use strict";
/* ================= PACIENTES =================
   Perro y gato: sentados de frente (lienzo 100x100, patas en y≈101).
   Cerdo: de pie de perfil sobre la camilla (120x86, pezuñas en y=84).
   Caballo y vaca: de cuerpo entero de perfil, de pie en el suelo (180x172 / 180x152).
   Se dibujan "de una pieza" (onePiece, en art.js): un único contorno exterior y líneas interiores finas.
   Los detalles (ojos, manchas, bocas...) van dentro de DET() porque no forman parte de la silueta. */
const PAL = {
  dog: [{ f: "#d4a373", e: "#8c5a3c", m: "#f3e3cc", ear: 0 }, { f: "#f3e3cc", e: "#c99566", m: "#fff8ee", ear: 2 }, { f: "#4a3b36", e: "#2e2522", m: "#c9a88a", ear: 1, brow: 1 },
    { f: "#e9b872", e: "#b5793f", m: "#fbe9cf", ear: 1 }, { f: "#f7f2ea", e: "#3d3433", m: "#ffffff", patch: 1, ear: 0 }, { f: "#b07a52", e: "#6b4430", m: "#e8c9a6", patch: 1, ear: 2 },
    { f: "#2f2a2a", e: "#1e1a1a", m: "#d9a374", ear: 1, brow: 1 }, { f: "#c9c4bd", e: "#8f8a83", m: "#f4f1ec", ear: 0 }],
  cat: [{ f: "#e3a15c", e: "#b8733a", tabby: 1 }, { f: "#a3a3a8", e: "#6e6e75", tabby: 1, bib: 1 }, { f: "#3e3a3b", e: "#2a2627", bib: 1 }, { f: "#f2e6d2", e: "#c9b79a", point: 1 },
    { f: "#f7f3ec", e: "#e3a15c", patch: 1 }, { f: "#5b5552", e: "#3a3533", tabby: 1 }],
  horse: [{ f: "#9a5f3d", e: "#3a2a22", m: "#c08a68", blaze: 1, socks: 1 }, { f: "#5a4034", e: "#2b211c", m: "#7d6050" }, { f: "#d8cfc2", e: "#8d8478", m: "#ebe4d8", socks: 0 }, { f: "#c4783f", e: "#efe0c0", m: "#e2a97a", blaze: 1, socks: 1 }],
  cow: [{ b: "#f6f2ea", s: "#3b3433" }, { b: "#f6f2ea", s: "#8a5636" }, { b: "#9c6a44", s: "#7a4e2e", face: "#f6f2ea" }, { b: "#f6f2ea", s: "#3b3433", bell: 1 }],
  pig: [{ f: "#f4b9b2" }, { f: "#f4b9b2", spots: "#8a6a5e" }, { f: "#f0c7a8", spots: "#b07a52" }]
};
const SPECIES = { dog: "Perro", cat: "Gato", horse: "Caballo", cow: "Vaca", pig: "Cerdo" };
const COLLARS = ["#c0453a", "#4f6fae", "#5f8a55", "#e8a65a", "#a85a9a"];
const BIG = ["horse", "cow"];
let anK = 0;

const glossyEyes = (mood, lx, rx, y, big) => {
  if (SIL()) return "";
  const ry = big ? 4 : 3.5, rx_ = big ? 3.1 : 2.8;
  if (mood === "happy") return LINE(`M${lx - 3.5} ${y + 1} Q${lx} ${y - 3.5} ${lx + 3.5} ${y + 1}M${rx - 3.5} ${y + 1} Q${rx} ${y - 3.5} ${rx + 3.5} ${y + 1}`, "#2a1a12", 2);
  let s = `<g class="pt-blink">` + [lx, rx].map(x => `<ellipse cx="${x}" cy="${y}" rx="${rx_}" ry="${ry}" fill="#24170f"/><ellipse cx="${x}" cy="${y + 1.2}" rx="${rx_ * .7}" ry="${ry * .45}" fill="#5a3a26" opacity=".7"/><circle cx="${x + 1.1}" cy="${y - 1.5}" r="1.2" fill="#fff"/><circle cx="${x - .9}" cy="${y + 1.4}" r=".55" fill="#fff"/>`).join("") + `</g>`;
  if (mood === "sad") s += LINE(`M${lx - 4.5} ${y - 5.5} L${lx + 3} ${y - 8.5}M${rx - 3} ${y - 8.5} L${rx + 4.5} ${y - 5.5}`, "#2a1a12", 1.8) + `<path d="M${rx + 3.5} ${y + 3} q1.8 3.2 0 4.8 q-1.8 -1.6 0 -4.8Z" fill="#8cc4e0" opacity=".9"/>`;
  return s;
};
const blushPair = (lx, rx, y) => DET(`<ellipse cx="${lx}" cy="${y}" rx="4" ry="2.6" fill="#f09a86" opacity=".45"/><ellipse cx="${rx}" cy="${y}" rx="4" ry="2.6" fill="#f09a86" opacity=".45"/>`);
const toeLines = (x, y, c) => LINE(`M${x - 3} ${y - 1} v2.4M${x} ${y - .6} v2.6M${x + 3} ${y - 1} v2.4`, c, .9, 'opacity=".75"');
/* boca abierta: la lengua se recorta dentro, así nunca asoma por debajo */
const petOpenMouth = (x, y, w = 5, h = 6.4) => openMouth(`M${x - w} ${y} Q${x} ${y + 1.4} ${x + w} ${y} Q${x + w * .84} ${y + h} ${x} ${y + h} Q${x - w * .84} ${y + h} ${x - w} ${y} Z`,
  `<ellipse cx="${x}" cy="${y + h + .4}" rx="${(w * .68).toFixed(2)}" ry="${(h * .42).toFixed(2)}" fill="#f08a8a"/><path d="M${x} ${(y + h - 1.6).toFixed(2)} V${(y + h + .6).toFixed(2)}" stroke="#d96a6a" stroke-width=".7"/>`);
const petMouth = (mood, x, y) => SIL() ? "" : mood === "happy" ? petOpenMouth(x, y)
  : mood === "sad" ? LINE(`M${x - 4} ${y + 3} Q${x} ${y - 1} ${x + 4} ${y + 3}`, "#5a3a26", 1.5)
    : LINE(`M${x - 4} ${y} Q${x - 2} ${y + 2.6} ${x} ${y} Q${x + 2} ${y + 2.6} ${x + 4} ${y}`, "#5a3a26", 1.5);

/* ---------- perro (sentado) ---------- */
function dogSVG(name, mood) {
  const h = hash(name), c = PAL.dog[h % PAL.dog.length], col = COLLARS[(h >> 3) % COLLARS.length];
  const inner = d => DET(`<path d="${d}" fill="#e8a99a" opacity=".8"/>`);
  const ears = [
    VP("M33 30 C19 31 15 52 22 63 C30 62 34 50 37 37 Z", c.e) + VP(mirX("M33 30 C19 31 15 52 22 63 C30 62 34 50 37 37 Z", 50), c.e),
    VP("M30 36 L27 12 L45 27 Z", c.f) + inner("M32 31 L31 18 L41 27Z") + VP("M70 36 L73 12 L55 27 Z", c.f) + inner("M68 31 L69 18 L59 27Z"),
    VP("M30 37 L29 17 Q36 13 41 20 L46 27 Z", c.f) + VP("M29 17 Q36 13 41 20 L34 25Z", c.e, { w: 1, sh: 0, sil: 0 }) + VP("M70 37 L71 17 Q64 13 59 20 L54 27 Z", c.f) + VP("M71 17 Q64 13 59 20 L66 25Z", c.e, { w: 1, sh: 0, sil: 0 })][c.ear || 0];
  const tail = `<g class="${mood === "sad" ? "" : "wag"}" style="transform-box:fill-box;transform-origin:0% 100%">${TUBE(["M71 88 C82 85 88 76 85 66"], 5, c.f)}${DET(`<circle cx="85" cy="66.5" r="2" fill="${c.m}"/>`)}</g>`;
  return `${SOFT(50, 100, 32, 4.5, .6)}${tail}
    ${VP("M36 56 C34 63 34 70 35 78 L65 78 C66 70 66 63 64 56 Z", c.f, { hl: 0, sh: 0, in: 0 })}
    ${VE(50, 84, 27, 17, c.f, { in: 0 })}
    ${DET(`<path d="M38 72 C40 88 60 88 62 72 C56 76 44 76 38 72Z" fill="${c.m}"/>`)}
    ${LINE("M43 79 l2.5 3.5 l2.5 -3.5 l2.5 3.5 l2.5 -3.5 l2.5 3.5 l2.5 -3.5", c.m, 2)}
    ${VP("M36 80 Q33 92 35 99 L45 99 Q46 90 44 80Z", c.f, { hl: .5 })}${VP("M64 80 Q67 92 65 99 L55 99 Q54 90 56 80Z", c.f, { hl: .5 })}
    ${VE(40, 98, 7, 4.5, c.f, { hl: .5 })}${VE(60, 98, 7, 4.5, c.f, { hl: .5 })}${toeLines(40, 98, lineOf(c.f))}${toeLines(60, 98, lineOf(c.f))}
    ${c.ear === 0 ? "" : ears}
    <g class="pt-head" style="transform-box:fill-box;transform-origin:50% 90%">
    ${VE(50, 46, 23, 21, c.f, { dir: "gShR" })}${LINE("M47 26 q3 -6 6 0", lineOf(c.f), 1.4)}
    ${LINE("M28 50 l-2.5 3 l3 1 l-2 3M72 50 l2.5 3 l-3 1 l2 3", c.f, 2.4)}
    ${DET((c.patch ? `<path d="M56 33 C64 30 70 36 68 44 C62 47 56 43 56 33Z" fill="${c.e}"/>` : "") + (c.brow ? `<ellipse cx="41" cy="37" rx="3" ry="2" fill="${c.m}"/><ellipse cx="59" cy="37" rx="3" ry="2" fill="${c.m}"/>` : ""))}
    ${VE(50, 57, 11.5, 8.5, c.m, { w: 1.4, sil: 0 })}
    ${c.ear === 0 ? ears : ""}
    ${LINE("M33 66 Q50 74 67 66", col, 4.5)}${VC(50, 72.5, 3.2, "#f0c25e", { w: 1, sil: 0 })}
    ${glossyEyes(mood, 41, 59, 44)}${blushPair(36, 64, 52)}
    ${VE(50, 52.5, 4.8, 3.4, "#2a1d16", { w: 0, sh: 0 })}${DET(`<ellipse cx="48.6" cy="51.6" rx="1.6" ry=".9" fill="#fff" opacity=".75"/>`)}${LINE("M50 55.8 v2.4", "#5a3a26", 1.3)}
    ${petMouth(mood, 50, 58.6)}
    </g>`;
}

/* ---------- gato (sentado) ---------- */
function catSVG(name, mood) {
  const h = hash(name), c = PAL.cat[h % PAL.cat.length], col = COLLARS[(h >> 3) % COLLARS.length];
  const tailA = "M72 92 C92 90 94 70 85 63", tailB = "M72 92 C94 92 98 74 92 64";
  const earC = c.point ? c.e : c.f;
  const eyes = mood === "happy" ? glossyEyes(mood, 41, 59, 46, true)
    : DET(`<g class="pt-blink">${[41, 59].map(x => `<ellipse cx="${x}" cy="46" rx="3.6" ry="4.2" fill="#8fbf6a"/><ellipse cx="${x}" cy="46" rx="1.3" ry="3.6" fill="#1c1410"/><circle cx="${x + 1.2}" cy="44.4" r="1" fill="#fff"/>`).join("")}</g>${mood === "sad" ? `<path d="M62.5 49 q1.8 3.2 0 4.8 q-1.8 -1.6 0 -4.8Z" fill="#8cc4e0"/>` : ""}`) + (mood === "sad" ? LINE("M37 40 L44 38M63 38 L56 40", "#2a1a12", 1.6) : "");
  const mouth = SIL() ? "" : mood === "happy" ? LINE("M50 55.2 V56.8", "#5a3a26", 1.2) + petOpenMouth(50, 56.6, 4.2, 5.2)
    : mood === "sad" ? LINE("M46.5 59.5 Q50 56.5 53.5 59.5", "#5a3a26", 1.4) : LINE("M50 55.2 Q48 58.4 45.8 57M50 55.2 Q52 58.4 54.2 57", "#5a3a26", 1.3);
  return `${SOFT(50, 100, 30, 4.5, .6)}${TUBE([tailA, tailB, tailA], 6, c.f, 3.2)}
    ${VP("M38 58 C36 65 36 71 37 78 L63 78 C64 71 64 65 62 58 Z", c.f, { hl: 0, sh: 0, in: 0 })}
    ${VE(50, 84, 24, 17, c.f, { in: 0 })}
    ${DET(c.bib ? `<path d="M42 70 Q50 88 58 70 Q50 74 42 70Z" fill="#fbf7ef"/>` : "")}
    ${c.tabby ? LINE("M30 82 q4 -3 8 0M62 82 q4 -3 8 0M32 90 q4 -3 7 0M61 90 q4 -3 7 0", c.e, 2) : ""}
    ${VE(41, 97, 6.4, 4.2, c.bib ? "#fbf7ef" : c.f, { hl: .5 })}${VE(59, 97, 6.4, 4.2, c.bib ? "#fbf7ef" : c.f, { hl: .5 })}${toeLines(41, 97, lineOf(c.f))}${toeLines(59, 97, lineOf(c.f))}
    <g class="pt-head" style="transform-box:fill-box;transform-origin:50% 90%">
    <g class="ear-twitch" style="transform-box:fill-box;transform-origin:70% 100%">${VP("M30 40 L32 14 L48 29 Z", earC)}${DET(`<path d="M34 33 L35 21 L43 29Z" fill="#f1a7a0"/>`)}${LINE("M33 17 l2 5M35 16 l1 4", "#fff", .8, 'opacity=".8"')}</g>
    ${VP("M70 40 L68 14 L52 29 Z", earC)}${DET(`<path d="M66 33 L65 21 L57 29Z" fill="#f1a7a0"/>`)}
    ${VE(50, 47, 23.5, 20, c.f, { dir: "gShR" })}
    ${DET(c.point ? `<ellipse cx="50" cy="55" rx="11" ry="9" fill="${c.e}" opacity=".7"/>` : "")}
    ${c.tabby ? LINE("M46 29 L47 36M50 28 L50 36M54 29 L53 36M28 46 l5 1M28 51 l5 0M72 46 l-5 1M72 51 l-5 0", c.e, 2.2) : ""}
    ${DET(c.patch ? `<path d="M30 42 C32 32 42 30 46 34 C42 40 36 44 30 42Z" fill="${c.e}"/>` : "")}
    ${DET(`<ellipse cx="45.5" cy="55.5" rx="4.5" ry="3.2" fill="#fbf7ef" opacity=".85"/><ellipse cx="54.5" cy="55.5" rx="4.5" ry="3.2" fill="#fbf7ef" opacity=".85"/>`)}
    ${eyes}${blushPair(35, 65, 54)}
    ${DET(`<path d="M47.6 52.4 L52.4 52.4 L50 55.2Z" fill="#e58b8b" stroke="#a5555a" stroke-width="1" stroke-linejoin="round"/>`)}
    ${mouth}
    ${LINE("M38 53 L25 51M38 56 L25 57.5M62 53 L75 51M62 56 L75 57.5", "#6b5a50", .8)}
    ${LINE("M36 66 Q50 72 64 66", col, 3.5)}${VC(50, 71, 2.6, "#f0c25e", { w: .9, sil: 0 })}
    </g>`;
}

/* ---------- cerdo (de pie, de perfil) ---------- */
function pigSVG(name, mood) {
  const h = hash(name), c = PAL.pig[h % PAL.pig.length], f = c.f, dk = darken(f, .86);
  const tA = "M108 40 c9 -5 14 3 8 7.5 c-5 3.5 -9 -3 -2.5 -6.5", tB = "M108 40 c10 -3 13 5 7 8.5 c-5 2.5 -8 -4 -1.5 -6.5";
  const eye = SIL() ? "" : mood === "happy" ? LINE("M21 38 Q24 35 27 38", "#2a1a12", 1.8)
    : `<g class="pt-blink"><ellipse cx="24" cy="38" rx="2" ry="2.4" fill="#24170f"/><circle cx="24.8" cy="37.2" r=".7" fill="#fff"/></g>${mood === "sad" ? `<path d="M26 42 q1.6 3 0 4.4 q-1.6 -1.4 0 -4.4Z" fill="#8cc4e0"/>` : ""}`;
  const mouth = SIL() ? "" : mood === "happy" ? openMouth("M13 52 Q19 53.4 25 52 Q24 57.8 19 57.8 Q14 57.8 13 52 Z", `<ellipse cx="19" cy="58.4" rx="3.6" ry="2.6" fill="#f08a8a"/>`)
    : LINE(mood === "sad" ? "M14 55 Q19 51 24 55" : "M13 52 Q18 55.5 23 52.5", "#7a3b2e", 1.3);
  return `${SOFT(62, 84, 46, 4.5, .55)}
    ${VP("M42 64 L41 82 L50 82 L50 64Z", dk)}${VP("M88 62 L88 82 L97 82 L97 62Z", dk)}
    ${VP("M48 62 L47 82 L56 82 L56 62Z", f, { hl: .5 })}${VP("M80 60 L80 82 L89 82 L89 60Z", f, { hl: .5 })}
    ${TUBE([tA, tB, tA], 1.8, f, .9)}
    ${VP("M28 40 C32 26 56 22 80 24 C100 26 112 34 112 50 C112 64 100 72 82 72 L44 72 C30 70 24 56 28 40 Z", f)}
    ${DET(c.spots ? `<path d="M60 32 C66 28 76 32 74 40 C68 43 60 40 60 32Z M86 50 C92 46 100 50 98 56 C92 59 86 56 86 50Z" fill="${c.spots}" opacity=".75"/>` : "")}
    ${LINE("M46 68 Q70 74 96 66", darken(f, .8), 1.4, 'opacity=".5"')}
    ${["M46.5 79 h10", "M79.5 79 h10"].map(d => LINE(d, "#7a5a50", 3)).join("")}${LINE("M51.5 79 v3M84.5 79 v3", "#5a3a30", .8)}
    <g class="pt-head" style="transform-box:fill-box;transform-origin:90% 60%">
    ${VP("M34 26 C24 24 14 30 12 40 C10 50 16 58 26 58 C34 58 40 52 40 42 C40 34 38 28 34 26 Z", lighten(f, .06), { dir: "gShR" })}
    ${VE(10, 44, 5, 6.5, darken(f, .9))}${DET(`<ellipse cx="8.4" cy="42" rx="1.1" ry="1.8" fill="#9b5450"/><ellipse cx="8.6" cy="46.6" rx="1.1" ry="1.8" fill="#9b5450"/>`)}
    ${VP("M28 26 C30 14 40 12 44 20 C42 26 36 30 32 30 Z", f, { w: 1.4 })}${DET(`<path d="M31 25 C33 18 38 17 40 21 C38 24 35 26 33 26Z" fill="#e89990" opacity=".8"/>`)}
    ${eye}${DET(`<ellipse cx="22" cy="47" rx="3.4" ry="2.2" fill="#f09a86" opacity=".5"/>`)}
    ${mouth}
    </g>`;
}

/* ---------- caballo (cuerpo entero) ---------- */
function horseSVG(name, mood) {
  const h = hash(name), c = PAL.horse[h % PAL.horse.length], f = c.f, e = c.e, far = darken(f, .82);
  const hoof = (x, y) => VP(`M${x - 6} ${y} L${x + 6} ${y} L${x + 7} ${y + 8} L${x - 7} ${y + 8} Z`, "#3a2e28", { w: 1.2, hl: .5 });
  const sock = (x, y) => DET(c.socks ? `<path d="M${x - 5.6} ${y - 14} C${x - 2} ${y - 16} ${x + 2} ${y - 16} ${x + 5.6} ${y - 14} L${x + 5.4} ${y} L${x - 5.4} ${y} Z" fill="#f7f2e8"/>` : "");
  const tA = "M150 80 C162 86 166 104 162 124 C160 134 156 140 154 148 C150 136 150 124 152 112 C150 102 148 92 146 84 Z";
  const tB = "M150 80 C164 84 172 100 170 120 C168 132 162 140 160 148 C156 136 154 124 156 112 C152 102 150 92 146 84 Z";
  const mA = "M52 36 C62 40 72 50 80 60 C86 66 90 70 94 76 C86 76 80 72 74 66 C66 58 58 50 50 44 Z";
  const mB = "M52 36 C63 39 74 48 82 58 C88 64 93 69 97 75 C88 76 81 72 75 66 C67 58 58 50 50 44 Z";
  const eye = SIL() ? "" : mood === "happy" ? LINE("M36 47 Q40 43.5 44 47", "#24170f", 2)
    : `<g class="pt-blink"><ellipse cx="40" cy="47" rx="3.2" ry="2.6" fill="#24170f"/><circle cx="41.2" cy="46" r=".9" fill="#fff"/></g>${LINE("M36.5 45 l-1.6 -1.6M38.6 44 l-.8 -2M41 44 l.2 -2", "#24170f", .9)}${mood === "sad" ? `<path d="M40 51 q1.8 3 0 4.6 q-1.8 -1.6 0 -4.6Z" fill="#8cc4e0"/>` : ""}`;
  /* orejas: nacen del cráneo (por detrás de la frente) y la lejana queda detrás de la cercana */
  const nearEar = "M41.6 34.6 C41 27.6 43.2 21 46.6 16.6 C49.6 21.2 51 27.6 49.2 35.4 Z";
  const farEar = "M46.6 36.4 C47.2 29.4 50.4 23.2 54 19.6 C56 24.6 55.8 30.8 52.4 38.6 Z";
  const earRot = mood === "sad" ? 'transform="rotate(32 46 35)"' : "";
  const mouth = mood === "happy" ? "M21.4 79.2 Q26.4 83.8 31.6 78.4" : mood === "sad" ? "M22 81.4 Q27 79 31 80.6" : "M22 80 Q27 82 31 79";
  return `${SOFT(104, 170, 74, 6, .55)}
    ${VP("M69.5 108 C71 118 70.4 126 71.4 133 C70.6 138 71.4 144 71.8 149 L70.4 161 L79.6 161 L79.4 149 C80 144 81 138 80.4 133 C81.6 126 81.8 118 80.6 108 Z", far)}${hoof(74, 161)}
    ${VP("M130 104 C134 118 134 130 131 140 L132 161 L141 161 L141 140 C144 126 144 112 140 100 Z", far)}${hoof(136.5, 161)}
    ${VPM([tA, tB, tA], 2.6, e, { w: 1.6 })}
    ${VP("M66 82 C70 70 92 66 112 68 C134 68 152 72 156 88 C160 104 152 118 136 120 C116 124 86 122 72 116 C62 110 60 92 66 82 Z", f)}
    ${LINE("M78 112 Q108 120 138 112", darken(f, .8), 1.4, 'opacity=".5"')}${LINE("M138 86 Q146 96 142 108", darken(f, .85), 1.2, 'opacity=".5"')}
    ${VP("M124 104 C136 108 142 120 138 134 L140 161 L130 161 L129 142 C128 134 122 126 116 118 Z", f)}${sock(135, 161)}${hoof(135, 161)}
    ${VP("M75.5 108 C77 118 76.4 126 77.4 133 C76.6 138 77.6 144 78.2 149 L77.4 161 L87 161 L86.8 149 C87.6 144 88.6 138 88 133 C89.4 126 89.6 118 88.4 108 Z", f)}${sock(82, 161)}${hoof(82, 161)}
    <g class="pt-nod" style="transform-box:fill-box;transform-origin:95% 95%">
      ${VP("M60 100 C54 88 46 76 40 64 L52 40 C64 48 78 60 88 76 C82 88 72 98 60 100 Z", f, { in: 0, sh: .45 })}
      ${VPM([mA, mB, mA], 3.4, e, { w: 1.4 })}
      ${LINE("M58 44 q6 8 10 18M64 48 q6 8 10 18", lighten(e, .25), 1, 'opacity=".6"')}
      <g ${earRot}>${VP(farEar, far, { w: 1.4 })}<g class="ear-flick" style="transform-box:fill-box;transform-origin:50% 100%">${VP(nearEar, f, { w: 1.4 })}${DET(`<path d="M43.8 32.6 C43.6 27.4 45 22.8 46.6 20.4 C48 23.4 48.6 27.6 47.6 33 Z" fill="#e8a99a" opacity=".55"/>`)}</g></g>
      ${VP("M54 40 C50 32 42 30 36 34 C30 38 24 52 20 64 C17 72 18 79 24 81 C30 83 36 79 40 73 C44 66 52 60 56 52 C58 47 57 43 54 40 Z", f, { dir: "gShR" })}
      ${DET(c.blaze ? `<path d="M40 34 C36 44 30 56 25 66 L28.5 68 C33 58 38 46 43.5 35 Z" fill="#f7f2e8"/>` : "")}
      ${VE(25, 74, 8.5, 7.5, c.m, { w: 1.3, x: 'transform="rotate(-20 25 74)"' })}
      ${DET(`<ellipse cx="20.5" cy="72" rx="1.6" ry="2.6" fill="#2a1d16"/>`)}${LINE(mouth, "#3a2a22", 1.2)}
      ${DET(`<path d="M45 33.4 C46.4 37.6 44 41.4 40.4 42.8 C41.6 39 42.6 36.2 45 33.4 Z" fill="${e}" ${LN(e, .8)}/>`)}
      ${LINE("M18 66 C24 62 34 64 40 68M40 68 L49.6 38.4M40 68 L52 60", "#c0453a", 2.6)}${VC(40, 68, 1.8, "#f0c25e", { w: .8, sh: 0, sil: 0 })}
      ${eye}
    </g>`;
}

/* ---------- vaca (cuerpo entero) ---------- */
function cowSVG(name, mood) {
  const h = hash(name), c = PAL.cow[h % PAL.cow.length], b = c.b, s = c.s, far = darken(b, .84), k = "c" + (anK++);
  const hoof = (x, y) => VP(`M${x - 6} ${y} L${x + 6} ${y} L${x + 6.6} ${y + 7} L${x - 6.6} ${y + 7} Z`, "#3a2e28", { w: 1.2, hl: .5 });
  const body = "M58 64 C64 52 92 48 120 50 C144 52 158 58 160 74 C162 92 158 108 148 114 C128 120 92 120 70 114 C58 110 52 92 54 78 C54 72 56 68 58 64 Z";
  const tA = "M157 64 C165 80 165 100 161 118", tB = "M157 64 C168 78 171 98 168 116";
  const eye = SIL() ? "" : mood === "happy" ? LINE("M34 60 Q38 56.5 42 60", "#24170f", 2)
    : `<g class="pt-blink"><ellipse cx="38" cy="60" rx="3" ry="3.2" fill="#24170f"/><circle cx="39.1" cy="58.8" r=".9" fill="#fff"/></g>${LINE("M34.6 57.6 l-1.4 -1.4M36.6 56.6 l-.6 -1.8M38.8 56.4 l.2 -1.9", "#24170f", .9)}${mood === "sad" ? `<path d="M38 64 q1.8 3 0 4.6 q-1.8 -1.6 0 -4.6Z" fill="#8cc4e0"/>` : ""}`;
  const jawA = "M15 84 Q24 88 33 84", jawB = "M15 85 Q24 90.5 33 85.5";
  return `${SOFT(104, 150, 72, 6, .55)}
    ${VP("M68 112 L67 141 L76 141 L77 112Z", far)}${hoof(71.6, 141)}${VP("M134 108 L136 141 L145 141 L143 108Z", far)}${hoof(140.5, 141)}
    ${TUBE([tA, tB, tA], 2.6, b, 2.8)}${DET(`<ellipse cx="161" cy="122" rx="4.2" ry="7" fill="${s}">${ANI("cx", "161;167.5;161", 2.8)}</ellipse>`)}
    ${VP(body, b)}
    ${DET(c.face ? "" : `<clipPath id="${k}b"><path d="${body}"/></clipPath><g clip-path="url(#${k}b)"><path d="M88 52 C100 46 116 52 112 66 C104 74 90 70 88 52Z M126 70 C138 62 156 70 152 86 C144 94 128 88 126 70Z M66 84 C74 78 86 84 82 96 C76 102 64 98 66 84Z M108 92 C116 88 126 94 122 104 C116 108 106 104 108 92Z" fill="${s}"/></g>`)}
    ${VP("M118 112 C120 124 132 126 136 114 Z", "#f2b8b0", { w: 1.2 })}${LINE("M122 121 v4M126.5 122.5 v4M131 121 v4", "#d98f88", 1.6)}
    ${VP("M78 110 L77 141 L88 141 L89 110 Z", b)}${hoof(82.5, 141)}
    ${VP("M132 106 C138 116 140 124 138 132 L140 141 L130 141 L129 130 C128 122 124 116 122 110 Z", b)}${hoof(135, 141)}
    <g class="pt-nod" style="transform-box:fill-box;transform-origin:95% 70%">
      ${VP("M58 66 C50 70 44 80 44 92 C50 100 60 104 66 100 C62 90 62 78 66 70 Z", b, { in: 0 })}
      ${c.bell ? LINE("M46 74 C50 84 58 88 66 86", "#7a5638", 3.4) + VP("M53 86 h9 l1.6 8 h-12.2Z", "#f0c25e", { w: 1 }) : ""}
      ${VP("M28 46 C22 42 16 44 14 48 C18 52 24 52 28 50 Z", b, { w: 1.3 })}
      ${VP("M40 44 C36 36 38 30 44 28 C42 34 44 38 46 42 Z", "#efe3c4", { w: 1.2 })}${VP("M30 44 C26 38 28 32 33 30 C32 36 33 40 35 43 Z", darken("#efe3c4", .9), { w: 1.2 })}
      ${VP("M54 50 C48 42 38 40 30 44 C22 48 18 58 18 68 C18 78 22 86 30 88 C38 90 46 86 50 80 C54 72 58 62 54 50 Z", c.face || b, { dir: "gShR" })}
      ${DET(c.face ? "" : `<path d="M36 44 C42 42 50 46 50 54 C44 56 38 52 36 44Z" fill="${s}"/>`)}
      ${VE(24, 80, 11, 8.5, "#f2b8b0", { w: 1.3 })}${DET(`<ellipse cx="19" cy="79" rx="1.6" ry="2.2" fill="#8a4b45"/><ellipse cx="27" cy="78" rx="1.6" ry="2.2" fill="#8a4b45"/>`)}
      ${DET(`<path d="${jawA}" fill="none" stroke="#8a4b45" stroke-width="1.3" stroke-linecap="round">${MORPH([jawA, jawB, jawA], 1.1)}</path>`)}
      <g ${mood === "sad" ? 'transform="rotate(30 54 54)"' : ""}><g class="ear-flick" style="transform-box:fill-box;transform-origin:0% 50%">${VP("M54 52 C60 48 68 50 70 54 C66 58 58 58 54 56 Z", b, { w: 1.3 })}${DET(`<path d="M57 53 C61 51 65 52 66 54 C63 56 59 56 57 55Z" fill="#f2b8b0"/>`)}${VR(63.5, 55, 5, 6, 1, "#f3d36b", { w: .8, sh: 0, hl: 0 })}</g></g>
      ${DET(`<path d="M40 40 C42 36 46 36 46 40 C44 42 42 42 40 40Z" fill="${s}"/>`)}
      ${eye}
    </g>`;
}

/* ---------- elección ---------- */
function animalSVG(species, name, mood) {
  const fn = { cat: catSVG, pig: pigSVG, horse: horseSVG, cow: cowSVG }[species] || dogSVG;
  return onePiece(() => fn(name, mood || "neutral"));
}
const ANIMAL_VB = { dog: "0 6 100 100", cat: "0 6 100 100", pig: "0 6 120 86", horse: "0 0 180 172", cow: "0 20 180 136" };
function animalIcon(species, name, mood, cls) { return `<svg class="${cls || ""}" viewBox="${ANIMAL_VB[species] || ANIMAL_VB.dog}" aria-hidden="true">${animalSVG(species, name, mood || "neutral")}</svg>`; }
/* colocación en la escena: perro/gato/cerdo sobre la camilla (TOP = altura de la superficie); caballo y vaca en el suelo */
function patientInScene(species, name, mood, TOP) {
  const cls = mood === "happy" ? "hop" : mood === "sad" ? "droop" : "idle";
  const art = animalSVG(species, name, mood);
  if (species === "horse") return `<g class="${cls}" style="transform-origin:262px 232px"><g transform="translate(188 72) scale(.94)">${art}</g></g>`;
  if (species === "cow") return `<g class="${cls}" style="transform-origin:262px 232px"><g transform="translate(184 92) scale(.97)">${art}</g></g>`;
  if (species === "pig") { const s = .66; return `<g class="${cls}" style="transform-origin:263px ${TOP}px"><g transform="translate(${(263 - 62 * s).toFixed(1)} ${(TOP - 2 - 83 * s).toFixed(1)}) scale(${s})">${art}</g></g>`; }
  const s = .8;
  return `<g class="${cls}" style="transform-origin:263px ${TOP}px"><g transform="translate(${263 - 50 * s} ${(TOP - 2 - 101 * s).toFixed(1)}) scale(${s})">${art}</g></g>`;
}
