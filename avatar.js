"use strict";
/* ================= TU PERSONAJE · cuerpo entero (lienzo 120 x 200) =================
   Capas: pelo de atrás · piernas · calzado · parte de abajo · cuello · parte de arriba ·
   prenda larga · brazos · complementos · cabeza (cara, pelo, gafas, sombrero).
   Animación en reposo con clases CSS: av-up (respira), av-head (inclina), av-blink (parpadea), av-arm-l/r. */
const AVG = {
  torso: "M37 94 C37 88 44 85 52 85 L68 85 C76 85 83 88 83 94 L85 132 C77 136 43 136 35 132 Z",
  pants: "M36 128 L84 128 L85.6 173 C85.6 176 84 177 81 177 L65 177 C63 177 62 176 62 173 L60.6 148 L59.4 148 L58 173 C58 176 57 177 55 177 L39 177 C36 177 34.4 176 34.4 173 Z",
  wide: "M36 128 L84 128 L90 181 C90 184 88 185 85 185 L65 185 C63 185 62 184 62 181 L60.6 148 L59.4 148 L58 181 C58 184 57 185 55 185 L35 185 C32 185 30 184 30 181 Z",
  slim: "M37 128 L83 128 L80.4 174.5 C80.4 176.5 79.4 177.5 77.4 177.5 L66 177.5 C64 177.5 63 176.5 63 174.5 L60.6 148 L59.4 148 L57 174.5 C57 176.5 56 177.5 54 177.5 L42.6 177.5 C40.6 177.5 39.6 176.5 39.6 174.5 Z",
  shorts: "M36 128 L84 128 L86 154 C80 157 68 157 62 156 L60 146 L58 156 C52 157 40 157 34 154 Z",
  skirt: "M38 128 L82 128 L91 160 C78 165 42 165 29 160 Z",
  skirtL: "M38 128 L82 128 L94 178 C80 184 40 184 26 178 Z",
  legL: "M41.5 134 L54.5 134 L54 182 C51 184 45 184 42 182 Z",
  legR: "M65.5 134 L78.5 134 L78 182 C75 184 69 184 66 182 Z",
  armL: "M40 93 C35 99 33 108 33 118 L33 126",
  armR: "M80 93 C85 99 87 108 87 118 L87 126",
  slvShortL: "M40 93 C36 98 34.3 103 33.7 108", slvShortR: "M80 93 C84 98 85.7 103 86.3 108",
  slv3qL: "M40 93 C35 99 33 108 33 116", slv3qR: "M80 93 C85 99 87 108 87 116",
  slvLongL: "M40 93 C35 99 33 108 33 118 L33 123.5", slvLongR: "M80 93 C85 99 87 108 87 118 L87 123.5"
};
const AV_CROP = { head: "27 16 66 72", face: "36 38 48 38", torso: "12 76 96 80", legs: "22 118 76 80", feet: "30 158 60 40", full: "0 4 120 194", coat: "8 70 104 110" };
/* recorte de la miniatura de la tienda para cada categoría de tu personaje */
const AV_FOCUS = {
  hair: "16 8 88 100", hairColor: "16 8 88 100", skin: AV_CROP.head, eyeShape: AV_CROP.face, eyeColor: AV_CROP.face, brows: AV_CROP.face, nose: AV_CROP.face,
  mouth: AV_CROP.face, blush: AV_CROP.face, face: "30 30 60 56", glasses: AV_CROP.face, head: "18 2 84 88", ears: AV_CROP.head,
  top: AV_CROP.torso, neck: AV_CROP.torso, acc: AV_CROP.coat, bottom: AV_CROP.legs, shoes: AV_CROP.feet, coat: AV_CROP.coat
};
let avK = 0;

/* ---------- utilidades del personaje ---------- */
function avLimb(d, w, color, paint) {
  return `<path d="${d}" fill="none" stroke="${lineOf(color)}" stroke-width="${w + 2.6}" stroke-linecap="round" stroke-linejoin="round"/>` +
    `<path d="${d}" fill="none" stroke="${paint || color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>` +
    `<path d="${d}" fill="none" stroke="#2a1408" stroke-opacity=".13" stroke-width="${(w * .38).toFixed(1)}" stroke-linecap="round" transform="translate(${(w * .27).toFixed(2)} 0)"/>`;
}
const avPat = (k, it, id) => it && it.pat ? DEFS(patternDef(k + id, it.pat, it.c, it.pc)) : "";
const avFill = (k, it, id) => it && it.pat ? `url(#${k}${id})` : (it ? it.c : "#cccccc");

/* ---------- parte de abajo ---------- */
function avBottom(it, k) {
  if (!it) return "";
  const f = avFill(k, it, "b"), c = it.c, d = darken(c, .8), defs = avPat(k, it, "b"), o = { lc: c };
  const shapeOf = { wide: AVG.wide, slim: AVG.slim, shorts: AVG.shorts, skirt: AVG.skirt, skirtL: AVG.skirtL }[it.cut] || AVG.pants;
  let s = defs + VP(shapeOf, f, o);
  const isPants = !["shorts", "skirt", "skirtL"].includes(it.cut);
  if (it.cut === "shorts" || isPants) s += LINE("M60 130 L60 146", d, 1.1, 'opacity=".7"');
  if (it.style === "jeans") s += LINE("M39 131 Q45 138 52 131M81 131 Q75 138 68 131M38 140 L57 140", "#e2a65a", .9, 'stroke-dasharray="1.6 1.4" opacity=".9"') + LINE("M48 152 L47.2 173M72 152 L72.8 173", lighten(c, .25), 1, 'opacity=".5"');
  if (it.style === "cord") s += [42, 46, 50, 54, 66, 70, 74, 78].map(x => LINE(`M${x} 146 L${x + (x < 60 ? -1 : 1)} 174`, d, .8, 'opacity=".55"')).join("");
  if (it.style === "track") s += LINE("M35.5 132 L34.8 170M84.5 132 L85.2 170", "#fbf7ef", 2.4) + `<rect x="35" y="171.5" width="23" height="5.5" rx="2" fill="${d}"/><rect x="62" y="171.5" width="23" height="5.5" rx="2" fill="${d}"/>`;
  if (it.style === "suit") s += LINE("M47 146 L46.6 175M73 146 L73.4 175", d, 1);
  if (it.style === "belt") s += `<rect x="36" y="128" width="48" height="5" fill="#6b4430"/><rect x="55" y="127" width="10" height="7" rx="1.5" fill="#d9b45a" ${LN("#d9b45a", 1)}/>`;
  if (it.cut === "skirt" || it.cut === "skirtL") {
    const hem = it.cut === "skirt" ? 162 : 180;
    s += [44, 52, 60, 68, 76].map(x => LINE(`M${x + (x - 60) * .05} 131 L${x + (x - 60) * .28} ${hem - 2}`, d, 1, 'opacity=".45"')).join("");
    if (it.style === "denim") s += LINE(`M60 130 L60 ${hem - 1}`, "#e2a65a", .9, 'stroke-dasharray="1.6 1.4"');
  }
  if (it.cut !== "skirt" && it.cut !== "skirtL") s += `<rect x="36" y="128" width="48" height="4.5" fill="${d}" opacity=".55"/>`;
  return s;
}
const avLegs = sk => VP(AVG.legL, sk, { hl: 0 }) + VP(AVG.legR, sk, { hl: 0 }) + LINE("M44 160 Q48 162 52 160M68 160 Q72 162 76 160", darken(sk, .8), .9, 'opacity=".6"');

/* ---------- calzado (vista frontal; pies en x 48 y 72) ---------- */
function avShoes(it) {
  if (!it) return "";
  const c = it.c || "#fbf7ef";
  const low = x => `M${x - 10} 188 C${x - 10} 181 ${x - 6} 178 ${x} 178 C${x + 6} 178 ${x + 10} 181 ${x + 10} 188 C${x + 10} 191 ${x + 7} 192.5 ${x} 192.5 C${x - 7} 192.5 ${x - 10} 191 ${x - 10} 188 Z`;
  const one = x => {
    const sock = it.k === "boot" || it.k === "cowboy" ? "" : `<rect x="${x - 6}" y="174" width="12" height="6" rx="2" fill="#fbf7ef" ${LN("#fbf7ef", 1)}/>`;
    switch (it.k) {
      case "sneaker": return sock + VP(low(x), c) + `<path d="M${x - 10} 188.5 Q${x} 191 ${x + 10} 188.5 L${x + 10} 189.5 C${x + 10} 191.5 ${x + 7} 192.5 ${x} 192.5 C${x - 7} 192.5 ${x - 10} 191.5 ${x - 10} 189.5Z" fill="${it.sole || "#e2d9c8"}"/>` + LINE(`M${x - 3} 181 L${x + 3} 182M${x - 3} 183.5 L${x + 3} 184.5`, darken(c, .6), .9) + (it.acc ? LINE(`M${x - 8} 186 Q${x - 2} 184 ${x + 5} 186.5`, it.acc, 1.6) : "");
      case "croc": {
        const b = `M${x - 11} 189 C${x - 11} 180 ${x - 7} 175.5 ${x} 175.5 C${x + 7} 175.5 ${x + 11} 180 ${x + 11} 189 C${x + 11} 192 ${x + 8} 193.5 ${x} 193.5 C${x - 8} 193.5 ${x - 11} 192 ${x - 11} 189Z`;
        const holes = [[-5, 180], [0, 179], [5, 180], [-3, 183.5], [3, 183.5]].map(([dx, y]) => `<ellipse cx="${x + dx}" cy="${y}" rx="1.3" ry="1" fill="${darken(c, .62)}"/>`).join("");
        const pins = it.pins ? `${STARP(x - 6, 185.5, 2.2, "#f3d36b")}${HEART(x + 6, 185.5, .55, "#e14f6c")}${PAWP(x, 186.5, .45, "#4f6fae")}` : "";
        return sock + LINE(`M${x - 11} 186 Q${x - 14.5} 181 ${x - 9} 178.5`, darken(c, .7), 2.2) + VP(b, c) + `<path d="M${x - 11} 190 Q${x} 193 ${x + 11} 190" fill="none" stroke="${darken(c, .75)}" stroke-width="1.6"/>` + holes + pins;
      }
      case "clog": return sock + VP(low(x), "#f6f4ef") + `<rect x="${x - 10.5}" y="188" width="21" height="5" rx="2" fill="#dcd6cc" ${LN("#dcd6cc", 1)}/>` + [-3, 0, 3].map(dx => `<rect x="${x + dx - .6}" y="180" width="1.2" height="4" rx=".6" fill="#c9c2b6"/>`).join("");
      case "boot": return VP(`M${x - 9} ${it.top || 162} L${x + 9} ${it.top || 162} L${x + 10} 188 C${x + 10} 191 ${x + 7} 192.5 ${x} 192.5 C${x - 7} 192.5 ${x - 10} 191 ${x - 10} 188 Z`, c) + `<rect x="${x - 9.5}" y="${(it.top || 162) - 1}" width="19" height="4" rx="1.5" fill="${darken(c, .82)}"/>` + LINE(`M${x - 6.5} ${(it.top || 162) + 6} L${x - 7} 186`, "#fff", 1.3, 'opacity=".4"') + (it.lace ? LINE([4, 8, 12].map(dy => { const y = (it.top || 162) + dy; return `M${x - 2.6} ${y} L${x + 2.6} ${y + 2.6}M${x + 2.6} ${y} L${x - 2.6} ${y + 2.6}`; }).join(""), darken(c, .5), .8) : "");
      case "cowboy": return VP(`M${x - 8.5} 163 L${x + 8.5} 163 L${x + 9} 184 C${x + 13} 186 ${x + 14} 190 ${x + 11} 192 L${x - 9} 192.5 C${x - 11} 191 ${x - 10} 188 ${x - 9.5} 184 Z`, c) + LINE(`M${x - 4} 168 Q${x} 174 ${x + 4} 168M${x - 4} 174 Q${x} 180 ${x + 4} 174`, "#f3d36b", 1, 'opacity=".9"') + `<rect x="${x - 9}" y="189" width="6" height="4" fill="${darken(c, .6)}"/>`;
      case "flat": return VP(`M${x - 9.5} 187 C${x - 9.5} 183 ${x - 6} 181 ${x} 181 C${x + 6} 181 ${x + 9.5} 183 ${x + 9.5} 187 C${x + 9.5} 190.5 ${x + 7} 192 ${x} 192 C${x - 7} 192 ${x - 9.5} 190.5 ${x - 9.5} 187Z`, c) + (it.bow ? `<path d="M${x} 183 l-3 -2 v4Z M${x} 183 l3 -2 v4Z" fill="${it.bow}"/>` : "") + (it.strap ? LINE(`M${x - 7} 182 Q${x} 177 ${x + 7} 182`, darken(c, .8), 1.8) + `<circle cx="${x + 5}" cy="180.5" r="1" fill="#f3d36b"/>` : "");
      case "loafer": return sock + VP(low(x), c) + `<rect x="${x - 5}" y="181" width="10" height="3.2" rx="1" fill="${darken(c, .78)}"/>` + LINE(`M${x - 8} 184 Q${x} 181.5 ${x + 8} 184`, darken(c, .7), 1);
      case "reindeer": return VP(`M${x - 11} 188 C${x - 11} 179 ${x - 6} 176 ${x} 176 C${x + 6} 176 ${x + 11} 179 ${x + 11} 188 C${x + 11} 191.5 ${x + 7} 193 ${x} 193 C${x - 7} 193 ${x - 11} 191.5 ${x - 11} 188Z`, "#a87447") + LINE(`M${x - 5} 177 l-3 -6 M${x - 6} 174 l-3 -1 M${x + 5} 177 l3 -6 M${x + 6} 174 l3 -1`, "#7a5638", 1.6) + `<circle cx="${x - 3}" cy="182" r="1" fill="#2e2630"/><circle cx="${x + 3}" cy="182" r="1" fill="#2e2630"/><circle cx="${x}" cy="186" r="2.2" fill="#e14f4f"/>`;
      case "witch": return sock + VP(`M${x - 9} 188 C${x - 9} 181 ${x - 5} 178 ${x} 178 C${x + 6} 178 ${x + 10} 182 ${x + 15} 184 C${x + 18} 185 ${x + 17} 180 ${x + 15} 182 C${x + 13} 190 ${x + 8} 192.5 ${x} 192.5 C${x - 7} 192.5 ${x - 9} 191 ${x - 9} 188Z`, "#2e2630") + `<rect x="${x - 3}" y="181" width="6" height="4" fill="none" stroke="#f3d36b" stroke-width="1.2"/>`;
      case "espadrille": return sock + VP(low(x), c) + `<path d="M${x - 10} 188 Q${x} 191 ${x + 10} 188 L${x + 10} 190 C${x + 10} 192 ${x + 7} 193 ${x} 193 C${x - 7} 193 ${x - 10} 192 ${x - 10} 190Z" fill="#d9bf8a"/>` + [-7, -3.5, 0, 3.5, 7].map(dx => LINE(`M${x + dx} 189.5 v3`, "#b89a5e", .7)).join("");
      case "cloth": return sock + VP(low(x), c) + `<path d="M${x - 10} 188.5 Q${x} 191 ${x + 10} 188.5 L${x + 10} 190 C${x + 10} 192 ${x + 7} 192.8 ${x} 192.8 C${x - 7} 192.8 ${x - 10} 192 ${x - 10} 190Z" fill="#fbf7ef"/>` + LINE(`M${x - 4} 180 Q${x} 178.5 ${x + 4} 180`, darken(c, .6), 1);
      default: return sock + VP(low(x), c);
    }
  };
  return one(48) + one(72);
}

/* ---------- parte de arriba ---------- */
function avTop(it, sk, k) {
  if (!it) return "";
  const f = avFill(k, it, "t"), c = it.c || "#cccccc", d = darken(c, .78), defs = avPat(k, it, "t");
  let s = defs + VP(AVG.torso, f, { lc: c });
  const vNeck = (tc) => `<path d="M51 85.5 L60 100 L69 85.5 Z" fill="${sk}"/>` + LINE("M50.5 85.5 L60 100.5 L69.5 85.5", tc || d, 3) + LINE("M50.5 85.5 L60 100.5 L69.5 85.5", lineOf(c), .8);
  const crew = (tc) => `<path d="M51 85.2 Q60 92 69 85.2 Z" fill="${sk}"/>` + LINE("M50.5 85.4 Q60 92.6 69.5 85.4", tc || d, 2.6);
  const collar = (cc) => VP("M51 84.5 L58 85 L55.5 93 Z", cc, { w: 1.1, sh: 0 }) + VP("M69 84.5 L62 85 L64.5 93 Z", cc, { w: 1.1, sh: 0 });
  switch (it.k) {
    case "tee": s += crew(); break;
    case "shirt": s += crew(lighten(c, .2)) + collar(lighten(c, .35)) + LINE("M60 92 L60 133", d, .9) + [100, 110, 120].map(y => `<circle cx="61.5" cy="${y}" r=".9" fill="${d}"/>`).join("") + VR(65, 100, 10, 8, 1, lighten(c, .08), { w: .9, sh: 0, hl: 0 }); break;
    case "scrubs": s += vNeck(darken(c, .7)) + VR(66, 104, 12, 10, 1.6, f, { lc: c, w: 1, sh: .5 }) + LINE("M66 106.5 H78", darken(c, .72), 1.4) + LINE("M69 99 v7", "#4f6fae", 1.8) + LINE("M72.5 100 v6", "#f3d36b", 1.8) + LINE("M60 100 L60 133", "#2a1408", .8, 'opacity=".18"'); break;
    case "knit": {
      s += [100, 110, 120].map(y => LINE(`M38 ${y} Q60 ${y + 3.5} 82 ${y}`, lighten(c, .18), 1.6, 'stroke-dasharray="2 2.6"')).join("") + `<path d="M50 85.5 Q60 93 70 85.5" fill="none" stroke="${d}" stroke-width="3.4" stroke-linecap="round"/>` + `<rect x="35.5" y="127" width="49" height="6" rx="2.5" fill="${d}" opacity=".7"/>`;
      if (it.motif === "navidad") s += `<rect x="37" y="104" width="46" height="11" fill="#fbf7ef"/>` + [43, 53, 63, 73].map((x, i) => i % 2 ? `<path d="M${x} 106 l-3.4 7 h6.8Z" fill="#5f8a55"/>` : STARP(x, 109.5, 2.8, "#b8473a")).join("") + LINE("M37 104 H83M37 115 H83", d, .8);
      if (it.motif === "corazones") s += [[46, 106], [60, 112], [74, 106], [52, 122], [68, 122]].map(([x, y]) => HEART(x, y, 1.3, "#fbf7ef")).join("");
      break;
    }
    case "turtle": s += VR(51, 80, 18, 9, 4, c, { w: 1.2 }) + [100, 112, 124].map(y => LINE(`M39 ${y} Q60 ${y + 3} 81 ${y}`, lighten(c, .15), 1.2, 'opacity=".6"')).join(""); break;
    case "cardigan": s = VP(AVG.torso, "#fbf7ef") + crew("#e9e2d6") + VP("M37 94 C37 88 44 85 52 85 L56 85 L57 134 C50 135 42 134 35 132 Z", c) + VP("M83 94 C83 88 76 85 68 85 L64 85 L63 134 C70 135 78 134 85 132 Z", c) + [104, 115, 126].map(y => `<circle cx="55" cy="${y}" r="1.5" fill="#f3d36b" ${LN("#f3d36b", .8)}/>`).join(""); break;
    case "vest": s = VP(AVG.torso, "#a9c7d9") + collar("#dfeef2") + VP("M37 94 C37 88 44 85 50 85 L57 133 C50 135 42 134 35 132 Z", c) + VP("M83 94 C83 88 76 85 70 85 L63 133 C70 135 78 134 85 132 Z", c) + LINE("M42 102 q4 2 8 0M41 114 q5 2 10 0M78 102 q-4 2 -8 0M79 114 q-5 2 -10 0", lighten(c, .2), 1.2); break;
    case "hoodie": s = `<path d="M44 92 Q60 104 76 92 L74 86 Q60 96 46 86Z" fill="${d}"/>` + VP(AVG.torso, c) + LINE("M45 90 Q60 101 75 90", d, 1.4) + LINE("M55 92 v10M65 92 v10", "#fbf7ef", 1.4) + VP("M44 134 L46 120 Q60 115 74 120 L76 134 Z", darken(c, .92), { w: 1.1 }) + PAWP(60, 107, 1.3, darken(c, .55)); break;
    case "hawaiian": s += collar(lighten(c, .15)) + `<path d="M52 85.5 L60 96 L68 85.5Z" fill="${sk}"/>` + [[43, 102], [74, 100], [50, 122], [70, 124], [80, 118], [40, 124], [62, 110]].map(([x, y], i) => FLOWER(x, y, 2.2, i % 2 ? "#f3d36b" : "#f29b8a", "#fff6d8")).join("") + LINE("M60 96 L60 133", d, .9); break;
    case "breton": s = DEFS(patternDef(k + "m", "marinera", "#fbf8f2", "#3f5878")) + VP(AVG.torso, `url(#${k}m)`, { lc: "#3f5878" }) + LINE("M47 86.5 Q60 91 73 86.5", "#3f5878", 2.6); break;
    case "denim": s += collar(lighten(c, .12)) + LINE("M38 99 Q60 93 82 99", "#e2a65a", .9, 'stroke-dasharray="1.6 1.4"') + LINE("M60 92 L60 133", d, .9) + [102, 112, 122].map(y => `<circle cx="61.5" cy="${y}" r="1.1" fill="#fbf7ef"/>`).join("") + VP("M41 101 h12 l-1.5 5 h-9Z", darken(c, .9), { w: .9, sh: 0 }) + VP("M67 101 h12 l-1.5 5 h-9Z", darken(c, .9), { w: .9, sh: 0 }); break;
    case "plaid": s = DEFS(patternDef(k + "p", "cuadros", c, darken(c, .55))) + VP(AVG.torso, `url(#${k}p)`, { lc: c }) + collar(lighten(c, .1)) + LINE("M60 92 L60 133", darken(c, .6), .9); break;
    case "blazer": s = VP(AVG.torso, "#fbf7ef") + `<path d="M57.5 92 L62.5 92 L63.5 110 L60 115 L56.5 110Z" fill="${it.tie || "#b8473a"}" ${LN(it.tie || "#b8473a", 1)}/>` + VP("M37 94 C37 88 44 85 51 85 L60 116 L57 134 C50 135 42 134 35 132 Z", c) + VP("M83 94 C83 88 76 85 69 85 L60 116 L63 134 C70 135 78 134 85 132 Z", c) + LINE("M51 85 L55 102 L52 106M69 85 L65 102 L68 106", lighten(c, .2), 1.1) + `<path d="M73 100 l6 -1 l.6 2.6 l-6 1Z" fill="#fbf7ef"/>`; break;
    default: s += crew();
  }
  return s;
}
const SLEEVE = { tee: "short", scrubs: "short", hawaiian: "short", shirt: "3q", breton: "3q", knit: "long", turtle: "long", cardigan: "long", hoodie: "long", vest: "3q", denim: "long", plaid: "3q", blazer: "long" };

/* ---------- prendas largas (batas, vestidos, petos, capas...) ---------- */
function avCoatBack(it) {
  if (!it) return "";
  if (it.k === "cape") return VP("M33 90 C26 118 21 156 22 178 C40 187 80 187 98 178 C99 156 94 118 87 90 Z", it.c || "#c0453a", { hl: .5 });
  if (it.k === "vampire") return VP("M31 90 C24 118 19 158 20 180 C40 189 80 189 100 180 C101 158 96 118 89 90 Z", "#2e2630", { hl: .4 }) + VP("M37 92 C30 80 32 66 36 60 L44 74 Z", "#b8473a", { w: 1.2 }) + VP("M83 92 C90 80 88 66 84 60 L76 74 Z", "#b8473a", { w: 1.2 });
  if (it.k === "raincoat") return VP("M40 86 C34 70 42 58 60 58 C78 58 86 70 80 86 Z", it.c, { hl: .4 });
  return "";
}
function avCoat(it, sk, k) {
  if (!it) return "";
  const c = it.c || "#fbf8f2", d = darken(c, .82);
  const panelL = (b) => `M37 94 C37 88 44 85 52 85 L56 85 L57 108 L58 ${b} L32 ${b} C30.5 ${b - 18} 33 120 35 108 Z`;
  const panelR = (b) => `M83 94 C83 88 76 85 68 85 L64 85 L63 108 L62 ${b} L88 ${b} C89.5 ${b - 18} 87 120 85 108 Z`;
  switch (it.k) {
    case "lab": {
      const lab = "M37 94 C37 88 44 85 52 85 L53.6 85 L50.4 104 L49.6 152 L32.4 152 C31 136 33 120 35 108 Z";
      let s = VP("M49 85 Q60 79.5 71 85 L69 88 Q60 84.4 51 88 Z", d, { w: 1 }) + VP(lab, c) + VP(mirX(lab), c);
      s += VP("M52.4 85 L56.6 85 L51.4 102.6 L46.6 95 Z", lighten(c, .3), { w: 1.1, sh: .6 }) + VP(mirX("M52.4 85 L56.6 85 L51.4 102.6 L46.6 95 Z"), lighten(c, .3), { w: 1.1, sh: .6 });
      s += LINE("M41.5 97.6 L41.5 103", "#4f6fae", 1.5) + LINE("M44.6 97.2 L44.6 103", "#c0453a", 1.5) + VR(38.6, 101, 9.6, 7, 1.2, c, { w: 1, sh: .5, hl: 0 });
      s += VR(35.4, 127, 12.4, 11, 1.5, c, { w: 1.1, sh: .5, hl: 0 }) + VR(72.2, 127, 12.4, 11, 1.5, c, { w: 1.1, sh: .5, hl: 0 }) + VR(72, 100.4, 9.6, 5, 1, "#f3e6cf", { w: .8, sh: 0, hl: 0 }) + LINE("M74 103 h5.6", "#c9a77d", 1);
      s += DET([112, 124, 136].map((y, i) => `<circle cx="71.6" cy="${y}" r="${it.btn ? 1.9 : 1.2}" fill="${it.btn ? ["#e58aa6", "#7fb2cf", "#f3d36b"][i] : darken(c, .55)}" ${it.btn ? LN("#e58aa6", .8) : ""}/>`).join(""));
      if (it.emb) s += DET(PAWP(78, 114, .9, it.emb));
      return s;
    }
    case "overalls": {
      const den = it.c || "#5f84a8";
      return VP(AVG.pants, den) + LINE("M60 130 L60 146", darken(den, .75), 1) + VP("M44 102 L76 102 L77 131 L43 131 Z", den) + VR(53, 108, 14, 9, 1.5, darken(den, .9), { w: .9, sh: 0 }) +
        LINE("M45 104 L41 88M75 104 L79 88", den, 4) + LINE("M45 104 L41 88M75 104 L79 88", lineOf(den), .7, 'opacity=".6"') + `<circle cx="46" cy="105" r="1.8" fill="#f0c25e"/><circle cx="74" cy="105" r="1.8" fill="#f0c25e"/>` + LINE("M40 140 L57 140", "#e2a65a", .9, 'stroke-dasharray="1.6 1.4"');
    }
    case "apron": return LINE("M48 98 Q46 88 52 84M72 98 Q74 88 68 84", it.c, 2.6) + VP("M44 98 L76 98 L81 160 L39 160 Z", it.c) + VR(51, 128, 18, 11, 2, darken(it.c, .9), { w: .9, sh: 0 }) + LINE("M60 128 v11", lineOf(it.c), .8) + LINE("M39 118 L33 122M81 118 L87 122", it.c, 2);
    case "raincoat": return VP("M37 94 C37 88 44 85 52 85 L68 85 C76 85 83 88 83 94 L88 160 C76 165 44 165 32 160 Z", c) + LINE("M60 88 L60 162", d, 1.1) + [104, 120, 136, 150].map(y => `<rect x="62" y="${y}" width="6" height="2.4" rx="1" fill="#6b4430"/>`).join("") + VR(38, 132, 14, 10, 1.5, c, { w: 1, sh: .5, hl: 0 }) + VR(68, 132, 14, 10, 1.5, c, { w: 1, sh: .5, hl: 0 });
    case "dress": {
      const f = avFill(k, it, "d"), defs = avPat(k, it, "d");
      return defs + VP("M38 93 C38 88 45 85 52 85 L68 85 C75 85 82 88 82 93 L82 124 L38 124 Z", f, { lc: c }) + `<path d="M51 85.2 Q60 93 69 85.2 Z" fill="${sk}"/>` + VP("M38 122 L82 122 L94 164 C80 170 40 170 26 164 Z", f, { lc: c }) + `<rect x="37.5" y="120" width="45" height="5" rx="2" fill="${it.belt || darken(c, .72)}"/>` + [46, 56, 64, 74].map(x => LINE(`M${x} 126 L${x + (x - 60) * .4} 164`, darken(c, .75), 1, 'opacity=".45"')).join("");
    }
    case "cape": return `<circle cx="44" cy="90" r="3" fill="#f0c25e" ${LN("#f0c25e", 1)}/><circle cx="76" cy="90" r="3" fill="#f0c25e" ${LN("#f0c25e", 1)}/>` + LINE("M44 90 Q60 96 76 90", "#f0c25e", 1.4);
    case "vampire": return `<path d="M48 88 L60 96 L72 88" fill="none" stroke="#b8473a" stroke-width="2"/>` + `<circle cx="60" cy="96" r="2.4" fill="#f0c25e" ${LN("#f0c25e", .8)}/>`;
    case "haori": {
      return DEFS(patternDef(k + "h", "sakura", "#3f5878", "#e9a1b5")) + VP(panelL(150), `url(#${k}h)`, { lc: "#3f5878" }) + VP(panelR(150), `url(#${k}h)`, { lc: "#3f5878" }) + LINE("M54 86 L56.5 150M66 86 L63.5 150", "#2d4058", 4.5) + LINE("M55 118 q5 3 10 0", "#f3e6cf", 1.6);
    }
    case "wintercoat": return VP("M37 94 C37 88 44 85 52 85 L68 85 C76 85 83 88 83 94 L87 158 C76 163 44 163 33 158 Z", c) + VP("M33 152 C44 158 76 158 87 152 L87.6 160 C76 166 44 166 32.4 160 Z", "#fbf7ef", { w: 1 }) + VP("M47 84 Q60 94 73 84 L74 89 Q60 99 46 89 Z", "#fbf7ef", { w: 1 }) + LINE("M60 92 L60 156", d, 1) + [106, 120, 134].map(y => `<circle cx="64" cy="${y}" r="1.9" fill="#f0c25e" ${LN("#f0c25e", .8)}/>`).join("") + `<rect x="34" y="124" width="52" height="4.5" rx="2" fill="#2e2630"/>`;
    case "denimvest": return VP("M37 94 C37 88 44 85 50 85 L57 134 C50 135 42 134 35 132 Z", c) + VP("M83 94 C83 88 76 85 70 85 L63 134 C70 135 78 134 85 132 Z", c) + LINE("M38 99 Q46 96 54 99M82 99 Q74 96 66 99", "#e2a65a", .9, 'stroke-dasharray="1.6 1.4"') + VR(41, 102, 10, 6, 1, darken(c, .9), { w: .8, sh: 0 }) + VR(69, 102, 10, 6, 1, darken(c, .9), { w: .8, sh: 0 }) + [36, 40, 44, 48, 52, 68, 72, 76, 80, 84].map(x => LINE(`M${x} 133 l${x < 60 ? -.5 : .5} 5`, c, 1.4)).join("");
    default: return "";
  }
}
const COAT_SLEEVE = { lab: "long", raincoat: "long", wintercoat: "long", haori: "wide" };
const COAT_REPLACES = { dress: ["top", "bottom"], overalls: ["bottom"] };

/* ---------- complementos ---------- */
function avAccBack(it) { if (!it || it.id !== "mochila") return ""; return VR(31, 92, 58, 42, 8, "#c95b4a", { hl: .4 }); }
function avAccFront(it) {
  if (!it) return "";
  switch (it.id) {
    case "reloj": return DET(`<path d="M30.4 118.4 L37.5 118.1 L37.3 121.5 L30.2 121.9 Z" fill="#6b4430"/>`) + VC(33.8, 120, 2.4, "#f3e6cf", { w: 1, sh: 0 }) + LINE("M33.8 120 v-1.3M33.8 120 h1", "#2e2630", .6);
    case "credencial": return LINE("M53 86 L58 108M67 86 L62 108", "#4f6fae", 1.6) + VR(54.5, 107, 11, 13, 1.5, "#fbf7ef", { w: .9, sh: 0 }) + `<rect x="56.5" y="109" width="4" height="5" fill="#9cc0cf"/>` + LINE("M61.5 110 h2.6M61.5 112.4 h2.6M56.5 116.5 h7", "#c9b48e", .9);
    case "bandolera": return LINE("M43 88 L80 126", "#8a5a3a", 2.6) + VR(72, 122, 17, 14, 3, "#a87447", { w: 1.2 }) + VP("M72 122 h17 v6 q-8.5 4 -17 0Z", "#8a5a3a", { w: 1, sh: 0 }) + `<circle cx="80.5" cy="128.5" r="1.3" fill="#f0c25e"/>`;
    case "mochila": return LINE("M44 88 L45 120M76 88 L75 120", "#a8483a", 3.4) + `<rect x="42.5" y="104" width="5" height="3" rx="1" fill="#f0c25e"/><rect x="72.5" y="104" width="5" height="3" rx="1" fill="#f0c25e"/>`;
    case "rinonera": return LINE("M36 129 L84 129", "#3f5878", 2.4) + VR(52, 124, 17, 10, 4, "#4f6fae", { w: 1.1 }) + LINE("M54 127 h13", "#f3d36b", .9);
    default: return "";
  }
}
const avMask = it => it && it.id === "mascarilla" && !SIL() ? VP("M46.5 59.5 C52 58 68 58 73.5 59.5 L72.5 70 C66 75.5 54 75.5 47.5 70 Z", "#bfe0e8", { w: 1.1, sh: .5 }) + LINE("M49 63 h22M49 66.5 h22", "#9cc0cf", .9) + LINE("M46.5 61 L37 58M73.5 61 L83 58", "#dfeef2", 1) : "";

/* ---------- cara ---------- */
function avEyes(eq, mood) {
  if (SIL()) return "";
  const ic = (findItem("eyeColor", eq.eyeColor) || { c: "#5a3a26" }).c, ink = mixC(ic, "#1c1410", .72), shape = eq.eyeShape || "punto";
  if (shape === "alegres" || (mood === "happy" && shape === "punto")) return LINE("M46.5 58 Q50 53.5 53.5 58M66.5 58 Q70 53.5 73.5 58", ink, 2.2);
  const at = (x) => {
    switch (shape) {
      case "ovalados": case "pestanas": return VE(x, 57, 4, 4.6, "#fffdf8", { w: 1, sh: 0, hl: 0 }) + `<circle cx="${x + .3}" cy="57.6" r="3" fill="${ic}"/><circle cx="${x + .3}" cy="57.6" r="1.6" fill="${ink}"/><circle cx="${x + 1.4}" cy="56.2" r="1" fill="#fff"/><circle cx="${x - .6}" cy="58.8" r=".45" fill="#fff"/>` + LINE(`M${x - 4.2} 55.6 Q${x} 51.6 ${x + 4.2} 55.6`, ink, 1.4) + (shape === "pestanas" ? LINE(`M${x + (x < 60 ? -3.6 : 3.6)} 54.6 l${x < 60 ? -1.6 : 1.6} -1.6M${x + (x < 60 ? -2.2 : 2.2)} 53.4 l${x < 60 ? -1 : 1} -1.8M${x + (x < 60 ? -.6 : .6)} 52.7 l${x < 60 ? -.3 : .3} -1.9`, ink, 1) : "");
      case "grandes": case "estrellas": return VE(x, 56.5, 5, 6, "#fffdf8", { w: 1, sh: 0, hl: 0 }) + `<ellipse cx="${x + .2}" cy="57.3" rx="3.9" ry="4.8" fill="${ic}"/><ellipse cx="${x + .2}" cy="59" rx="2.8" ry="2.4" fill="${lighten(ic, .35)}" opacity=".7"/><ellipse cx="${x + .2}" cy="57.3" rx="1.8" ry="2.4" fill="${ink}"/>` + (shape === "estrellas" ? STARP(x + 1.6, 55.2, 1.8, "#fff") + STARP(x - 1.4, 59.4, .8, "#fff") : `<circle cx="${x + 1.6}" cy="55.2" r="1.6" fill="#fff"/><circle cx="${x - 1.3}" cy="59.3" r=".8" fill="#fff"/>`) + LINE(`M${x - 5.2} 54.4 Q${x} 49.4 ${x + 5.2} 54.4 L${x + (x < 60 ? -6.4 : 6.4)} 53.2`, ink, 1.8);
      case "almendra": { const m = x < 60 ? 1 : -1; return `<path d="M${x - 4.8 * m} 57.4 Q${x} 52.6 ${x + 4.8 * m} 56.6 Q${x} 60.6 ${x - 4.8 * m} 57.4Z" fill="#fffdf8"/><circle cx="${x}" cy="57" r="2.5" fill="${ic}"/><circle cx="${x}" cy="57" r="1.3" fill="${ink}"/><circle cx="${x + .9}" cy="56" r=".7" fill="#fff"/>` + LINE(`M${x - 4.8 * m} 57.4 Q${x} 52.6 ${x + 4.8 * m} 56.6 L${x + 6.6 * m} 55.2`, ink, 1.6); }
      case "dormilones": return VE(x, 57.5, 3.6, 3.4, "#fffdf8", { w: .9, sh: 0, hl: 0 }) + `<circle cx="${x}" cy="58.2" r="2.4" fill="${ic}"/><circle cx="${x}" cy="58.2" r="1.2" fill="${ink}"/>` + `<path d="M${x - 4.2} 57.6 Q${x} 53 ${x + 4.2} 57.6 Z" fill="${(findItem("skin", eq.skin) || { c: "#e8bd9a" }).c}"/>` + LINE(`M${x - 4.2} 57.6 Q${x} 56 ${x + 4.2} 57.6`, ink, 1.5);
      case "finos": return `<path d="M${x - 4.4} 57.2 Q${x} 54.6 ${x + 4.4} 57.2 Q${x} 59.2 ${x - 4.4} 57.2Z" fill="#fffdf8"/><ellipse cx="${x}" cy="57.2" rx="1.9" ry="1.9" fill="${ink}"/>` + LINE(`M${x - 4.6} 57 Q${x} 54.2 ${x + 4.6} 57`, ink, 1.6);
      default: return `<ellipse cx="${x}" cy="57" rx="2.6" ry="3.3" fill="${ink}"/><circle cx="${x + 1}" cy="55.8" r=".95" fill="#fff"/><circle cx="${x - .8}" cy="58.4" r=".45" fill="#fff"/>`;
    }
  };
  const tear = mood === "sad" ? `<path d="M73.5 61 q1.8 3.2 0 4.8 q-1.8 -1.6 0 -4.8Z" fill="#8cc4e0" opacity=".9"/>` : "";
  return `<g class="av-blink">${at(50)}${at(70)}</g>${tear}`;
}
function avBrows(eq, mood, hc) {
  if (SIL()) return "";
  const c = darken(hc, .82), b = eq.brows || "finas";
  if (mood === "sad") return LINE("M46.5 50.6 L53.8 47.8M66.2 47.8 L73.5 50.6", c, 2.2);
  switch (b) {
    case "gruesas": return LINE("M46.5 49 Q50 47 53.6 48.4M66.4 48.4 Q70 47 73.5 49", c, 3.1);
    case "arqueadas": return LINE("M46 50 Q49.5 45.4 54 48.6M66 48.6 Q70.5 45.4 74 50", c, 1.8);
    case "rectas": return LINE("M46.5 48.6 L53.8 48.2M66.2 48.2 L73.5 48.6", c, 2.4);
    case "pobladas": return `<path d="M45.5 49.6 C47 46 53 45.4 54.6 48.4 C51 48 48 48.6 45.5 49.6Z" fill="${c}"/><path d="M74.5 49.6 C73 46 67 45.4 65.4 48.4 C69 48 72 48.6 74.5 49.6Z" fill="${c}"/>`;
    case "puntitos": return `<ellipse cx="51" cy="48.4" rx="1.8" ry="1.2" fill="${c}"/><ellipse cx="69" cy="48.4" rx="1.8" ry="1.2" fill="${c}"/>`;
    default: return LINE("M46.5 49 Q50 47.2 53.6 48.6M66.4 48.6 Q70 47.2 73.5 49", c, 1.7);
  }
}
function avNose(eq, sk) {
  if (SIL()) return "";
  const c = darken(sk, .7);
  switch (eq.nose) {
    case "punto": return `<ellipse cx="60" cy="62" rx="1.1" ry=".85" fill="${c}"/>`;
    case "redonda": return `<circle cx="60" cy="61.6" r="2.2" fill="${darken(sk, .93)}"/>` + LINE("M58.2 62.6 Q60 64 61.8 62.6", c, 1) + `<circle cx="59.3" cy="60.8" r=".6" fill="#fff" opacity=".6"/>`;
    case "respingona": return LINE("M59.2 58.6 Q61.8 62 59.2 63.2 Q60.2 63.8 61.4 63", c, 1.3);
    case "larga": return LINE("M60 56.5 L61.6 62.4 Q60.8 63.6 59 63", c, 1.3);
    case "triangulo": return `<path d="M60 59 L62.2 63.2 L57.8 63.2 Z" fill="${darken(sk, .9)}"/>` + LINE("M57.8 63.2 L62.2 63.2", c, 1);
    default: return LINE("M60 59.5 q1.8 2.4 -.6 3.4", c, 1.3);
  }
}
function avMouth(eq, mood, sk) {
  if (SIL()) return "";
  const y = eq.face === "bigote" ? 1.2 : 0, ln = "#7a3b2e", Y = v => +(v + y).toFixed(2);
  const m = mood === "sad" ? "triste" : mood === "happy" ? (eq.mouth === "labios" ? "labios_feliz" : !eq.mouth || eq.mouth === "sonrisa" ? "abierta" : eq.mouth) : (eq.mouth || "sonrisa");
  const T = (d, w = 1.6) => LINE(d, ln, w);
  const smile = `M54.5 ${Y(65)} Q60 ${Y(69.6)} 65.5 ${Y(65)}`;
  const teeth = (bottom) => `<path d="M50 ${Y(60)} H70 V${Y(bottom)} Q60 ${Y(bottom + 1.3)} 50 ${Y(bottom)} Z" fill="#fffdf8"/>`;
  switch (m) {
    case "triste": return T(`M55.5 ${Y(67.6)} Q60 ${Y(64)} 64.5 ${Y(67.6)}`);
    case "abierta": /* boca muy contenta: dientes arriba y lengua abajo, siempre dentro de la boca */
      return openMouth(`M53.8 ${Y(64.4)} Q60 ${Y(66)} 66.2 ${Y(64.4)} Q65.4 ${Y(72.4)} 60 ${Y(72.4)} Q54.6 ${Y(72.4)} 53.8 ${Y(64.4)} Z`,
        teeth(66.4) + `<ellipse cx="60" cy="${Y(73)}" rx="4.8" ry="3.4" fill="#f08a8a"/><path d="M57.6 ${Y(70.8)} Q60 ${Y(70)} 62.4 ${Y(70.8)}" fill="none" stroke="#d96a6a" stroke-width=".7"/>`, ln);
    case "gatuna": return T(`M55 ${Y(65)} Q57.5 ${Y(67.6)} 60 ${Y(65)} Q62.5 ${Y(67.6)} 65 ${Y(65)}`);
    case "timida": return T(`M57.5 ${Y(66)} Q60 ${Y(67.6)} 62.5 ${Y(66)}`);
    case "dientes":
      return openMouth(`M53.8 ${Y(64.4)} Q60 ${Y(65.6)} 66.2 ${Y(64.4)} Q65 ${Y(70.6)} 60 ${Y(70.6)} Q55 ${Y(70.6)} 53.8 ${Y(64.4)} Z`,
        `<rect x="50" y="${Y(60)}" width="20" height="14" fill="#fffdf8"/><path d="M50 ${Y(67.4)} Q60 ${Y(68.8)} 70 ${Y(67.4)}" fill="none" stroke="#d9cfc2" stroke-width=".8"/>` + [56.6, 60, 63.4].map(x => `<path d="M${x} ${Y(64.8)} V${Y(70.4)}" stroke="#e6ded2" stroke-width=".6"/>`).join(""), ln);
    case "lengua": { /* lengua fuera: se recorta por debajo de la sonrisa, así nace justo de la línea de la boca */
      if (SIL()) return "";
      const id = "mo" + (mouthK++);
      const below = `M48 ${Y(62)} L54.5 ${Y(65)} Q60 ${Y(69.6)} 65.5 ${Y(65)} L72 ${Y(62)} L72 ${Y(80)} L48 ${Y(80)} Z`;
      return `<defs><clipPath id="${id}"><path d="${below}"/></clipPath></defs><g clip-path="url(#${id})"><path d="M58.2 ${Y(63)} L58.2 ${Y(70.4)} C58.2 ${Y(72.5)} 59.7 ${Y(73.3)} 61.3 ${Y(73.3)} C62.9 ${Y(73.3)} 64.4 ${Y(72.3)} 64.4 ${Y(70)} L64.4 ${Y(63)} Z" fill="#f08a8a" stroke="#b9555a" stroke-width=".9"/><path d="M61.3 ${Y(68.4)} L61.4 ${Y(71.2)}" stroke="#d36a70" stroke-width=".8" stroke-linecap="round"/></g>` + T(smile);
    }
    case "labios": return `<path d="M55 ${Y(65.5)} Q57.5 ${Y(64)} 60 ${Y(65)} Q62.5 ${Y(64)} 65 ${Y(65.5)} Q60 ${Y(70)} 55 ${Y(65.5)}Z" fill="#d4566a" stroke="#a83a4e" stroke-width="1"/>` + `<path d="M56.5 ${Y(66.5)} Q60 ${Y(67.5)} 63.5 ${Y(66.5)}" fill="none" stroke="#f3a3b0" stroke-width=".9"/>`;
    case "labios_feliz":
      return openMouth(`M54 ${Y(64.5)} Q60 ${Y(66)} 66 ${Y(64.5)} Q65 ${Y(71.4)} 60 ${Y(71.4)} Q55 ${Y(71.4)} 54 ${Y(64.5)} Z`, teeth(66.6) + `<ellipse cx="60" cy="${Y(72)}" rx="4" ry="2.8" fill="#f08a8a"/>`, "#c23f57", "#9c3434", 2);
    case "sorpresa":
      return openMouth(`M57.8 ${Y(67.2)} C57.8 ${Y(64.6)} 62.2 ${Y(64.6)} 62.2 ${Y(67.2)} C62.2 ${Y(70.6)} 57.8 ${Y(70.6)} 57.8 ${Y(67.2)} Z`, `<ellipse cx="60" cy="${Y(70)}" rx="2" ry="1.4" fill="#f08a8a"/>`, ln, "#9c3434", 1.1);
    case "seria": return T(`M56 ${Y(66)} L64 ${Y(66)}`);
    default: return T(smile);
  }
}
function avBlush(eq) {
  if (SIL()) return "";
  switch (eq.blush) {
    case null: case undefined: case "": return "";
    case "intenso": return `<ellipse cx="45" cy="64" rx="5" ry="3.2" fill="#f07a70" opacity=".55"/><ellipse cx="75" cy="64" rx="5" ry="3.2" fill="#f07a70" opacity=".55"/>`;
    case "corazones": return HEART(45, 64, 1.1, "#f2879e") + HEART(75, 64, 1.1, "#f2879e");
    case "rayitas": return `<ellipse cx="45" cy="64" rx="4.4" ry="2.6" fill="#f09a86" opacity=".4"/><ellipse cx="75" cy="64" rx="4.4" ry="2.6" fill="#f09a86" opacity=".4"/>` + LINE("M42.5 65 l1.6 -2.6M45 65.4 l1.6 -2.6M47.5 65 l1.6 -2.6M72.5 65 l1.6 -2.6M75 65.4 l1.6 -2.6M77.5 65 l1.6 -2.6", "#e0607a", .8);
    default: return `<ellipse cx="45" cy="64" rx="4.2" ry="2.7" fill="#f09a86" opacity=".42"/><ellipse cx="75" cy="64" rx="4.2" ry="2.7" fill="#f09a86" opacity=".42"/>`;
  }
}
function avFaceExtra(eq, hc) {
  if (SIL()) return "";
  switch (eq.face) {
    case "pecas": return [[45, 61], [48, 63.5], [43, 64.5], [75, 61], [72, 63.5], [77, 64.5]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".9" fill="#a86a48"/>`).join("");
    case "lunar": return `<circle cx="70" cy="67" r="1.1" fill="#3a2418"/>`;
    case "bigote": return VP("M52 64.5 Q56 60.5 60 63.5 Q64 60.5 68 64.5 Q64 66.5 60 65 Q56 66.5 52 64.5Z", hc, { w: 1, sh: 0 });
    case "perilla": return VP("M55 74 Q60 81 65 74 Q60 76.5 55 74Z", hc, { w: 1, sh: 0 });
    case "tirita": return `<g transform="rotate(-24 75 63)">${VR(70, 61, 11, 4.6, 2, "#f3d0a8", { w: .8, sh: 0, hl: 0 })}<rect x="73.6" y="61.4" width="3.8" height="3.8" rx=".8" fill="#e8b88a"/></g>`;
    case "pegatina": return STARP(75, 63, 3.2, "#f3d36b") + STARP(75, 63, 1.4, "#fff3c4");
    default: return "";
  }
}
const avBeard = (eq, hc) => eq.face === "barba" ? VP("M37 58 C37 76 48 83 60 83 C72 83 83 76 83 58 C79 70 70 75 60 75 C50 75 41 70 37 58Z", hc) : "";

/* ---------- gafas ---------- */
function avGlasses(id) {
  if (!id || SIL()) return "";
  const lens = `fill="#ffffff" fill-opacity=".22"`;
  switch (id) {
    case "gafas": return `<circle cx="50" cy="57" r="6.5" ${lens} ${LN("#6b4a35", 1.6)}/><circle cx="70" cy="57" r="6.5" ${lens} ${LN("#6b4a35", 1.6)}/>` + LINE("M56.5 56.5 L63.5 56.5", "#6b4a35", 1.6);
    case "pasta": return `<rect x="42.5" y="51.5" width="15" height="11" rx="3" ${lens} stroke="#7a3b2e" stroke-width="3"/><rect x="62.5" y="51.5" width="15" height="11" rx="3" ${lens} stroke="#7a3b2e" stroke-width="3"/>` + LINE("M57.5 55 L62.5 55", "#7a3b2e", 3);
    case "gafas_sol": return VR(43, 51.5, 15, 10, 4, "#2b2a2e", { w: 1.4, sh: 0 }) + VR(62, 51.5, 15, 10, 4, "#2b2a2e", { w: 1.4, sh: 0 }) + LINE("M58 55 L62 55", "#2b2a2e", 1.6) + LINE("M46 54 l4 -1M65 54 l4 -1", "#fff", 1.2, 'opacity=".6"');
    case "gafas_corazon": return [50, 70].map(x => `<path d="M${x} 62 C${x - 9} 56 ${x - 6} 49 ${x} 53 C${x + 6} 49 ${x + 9} 56 ${x} 62Z" fill="#e8708f" fill-opacity=".85" ${LN("#e8708f", 1.4)}/>`).join("") + LINE("M57 55 L63 55", "#c9506f", 1.4);
    case "aviador": return [50, 70].map(x => `<path d="M${x - 6.5} 52.5 Q${x} 51 ${x + 6.5} 52.5 Q${x + 6.5} 60 ${x} 62.5 Q${x - 6.5} 60 ${x - 6.5} 52.5Z" fill="#6a8aa8" fill-opacity=".55" ${LN("#d9b45a", 1.3)}/>`).join("") + LINE("M56.5 53.5 Q60 52 63.5 53.5M57 56 L63 56", "#d9b45a", 1.1);
    case "doradas": return `<ellipse cx="50" cy="57" rx="6" ry="5" ${lens} ${LN("#d9b45a", 1)}/><ellipse cx="70" cy="57" rx="6" ry="5" ${lens} ${LN("#d9b45a", 1)}/>` + LINE("M56 56.5 Q60 55 64 56.5", "#d9b45a", 1);
    case "ojo_gato": return [50, 70].map(x => { const m = x < 60 ? -1 : 1; return `<path d="M${x - 6.5 * -m} 59 Q${x} 62.5 ${x + 6.2 * m} 58.5 L${x + 8 * m} 52 Q${x} 51.5 ${x - 6.5 * -m} 54 Z" ${lens} stroke="#2e2630" stroke-width="2.2" stroke-linejoin="round"/>`; }).join("") + LINE("M57 55.5 L63 55.5", "#2e2630", 2) + `<circle cx="42.5" cy="52.4" r=".9" fill="#f3d36b"/><circle cx="77.5" cy="52.4" r=".9" fill="#f3d36b"/>`;
    case "cuadradas": return `<rect x="43.5" y="52" width="13" height="10" rx="1.2" ${lens} ${LN("#3a3536", 1.3)}/><rect x="63.5" y="52" width="13" height="10" rx="1.2" ${lens} ${LN("#3a3536", 1.3)}/>` + LINE("M56.5 55.5 L63.5 55.5", "#3a3536", 1.3);
    case "lectura": return `<path d="M44 58.5 L56 58.5 Q55.5 64.5 50 64.5 Q44.5 64.5 44 58.5Z" ${lens} ${LN("#8a5636", 1.3)}/><path d="M64 58.5 L76 58.5 Q75.5 64.5 70 64.5 Q64.5 64.5 64 58.5Z" ${lens} ${LN("#8a5636", 1.3)}/>` + LINE("M56 59.5 Q60 58 64 59.5", "#8a5636", 1.3) + LINE("M44 59 Q38 70 41 86M76 59 Q82 70 79 86", "#d9b45a", .7, 'stroke-dasharray="1 1"');
    case "monoculo": return `<circle cx="70" cy="57" r="6" ${lens} ${LN("#d9b45a", 1.6)}/>` + LINE("M75.5 60 Q82 74 76 96", "#d9b45a", .8, 'stroke-dasharray="1.2 1"');
    case "proteccion": return `<path d="M41 52 Q60 47 79 52 L78.5 61.5 Q70 64.5 64 61 Q60 59.5 56 61 Q50 64.5 41.5 61.5 Z" fill="#bfe8f0" fill-opacity=".5" ${LN("#5f84a8", 1.5)}/>` + LINE("M41 55 L36 56M79 55 L84 56", "#4f6fae", 2.4) + LINE("M45 53.5 l5 -1", "#fff", 1.4, 'opacity=".7"');
    case "fiesta": return STARP(50, 57, 8, "#f3a3c4").replace("/>", ` fill-opacity=".85" ${LN("#e14f6c", 1.3)}/>`) + STARP(70, 57, 8, "#9fd8e8").replace("/>", ` fill-opacity=".85" ${LN("#4f9fb4", 1.3)}/>`) + LINE("M57.5 56 L62.5 56", "#e14f6c", 1.4);
    default: return "";
  }
}

/* ---------- pelo ---------- */
function avHair(style, hc, part) {
  const P = (d, o) => VP(d, hc, o || {});
  const shine = LINE("M46 33 Q53 28.5 61 29.5", "#ffffff", 2.2, 'opacity=".32"');
  const fringe = "M36 52 C34 32 46 26 60 26 C76 26 86 34 84 52 C80 42 72 38 62 38 C52 38 42 42 36 52 Z";
  const curls = (pts) => pts.map(([x, y, r]) => VC(x, y, r, hc, { w: 1.5, hl: .6 })).join("");
  const back = {
    melena: "M34 52 C30 30 44 24 60 24 C78 24 90 32 86 54 L90 102 C80 106 74 100 76 86 L44 86 C46 100 40 106 30 102 Z",
    media: "M34 54 C30 30 44 24 60 24 C78 24 90 30 86 54 L88 78 C80 83 74 79 74 72 L46 72 C46 79 40 83 32 78Z",
    coleta: "M80 40 C100 44 102 72 90 90 C88 74 84 62 78 54 Z",
    ondas: "M34 52 C28 32 44 22 60 22 C78 22 92 32 86 54 C92 64 86 72 90 82 C94 92 86 102 80 104 C78 96 76 90 76 86 L44 86 C44 90 42 96 40 104 C34 102 26 92 30 82 C34 72 28 64 34 52Z",
    bob_flequillo: "M33 56 C29 30 44 22 60 22 C76 22 91 30 87 56 L88 76 C82 80 76 78 75 72 L45 72 C44 78 38 80 32 76Z",
    raya_medio: "M34 50 C30 30 44 23 60 23 C76 23 90 30 86 50 L88 104 C80 106 76 100 76 92 L44 92 C44 100 40 106 32 104Z",
    media_coleta: "M34 52 C30 30 44 24 60 24 C78 24 90 32 86 54 L89 96 C80 100 74 94 76 84 L44 84 C46 94 40 100 31 96 Z",
    trenza_lateral: "M35 54 C31 32 44 24 60 24 C76 24 89 32 85 54 L86 70 L34 70Z"
  }[style];
  if (part === "back") {
    let s = back ? P(back, { hl: .5 }) : "";
    if (style === "mono") s += VC(60, 23, 10, hc, { hl: .6 });
    if (style === "mono_alto") s += VC(60, 20, 11, hc, { hl: .6 }) + `<rect x="54" y="28" width="12" height="3.4" rx="1.6" fill="#c0453a"/>`;
    if (style === "trenzas") s += [36, 84].map(x => [0, 1, 2, 3].map(i => VE(x + (x < 60 ? -2 : 2) * i / 2, 66 + i * 9, 5, 6, hc, { w: 1.4, hl: .5 })).join("") + LINE(`M${x - 3} 103 h6`, "#c0453a", 3)).join("");
    if (style === "coletas") s += [[34, -1], [86, 1]].map(([x, m]) => P(`M${x} 46 C${x + 12 * m} 52 ${x + 16 * m} 70 ${x + 10 * m} 88 C${x + 6 * m} 76 ${x + 2 * m} 64 ${x - 4 * m} 56 Z`, { hl: .5 }) + `<circle cx="${x}" cy="49" r="3" fill="#e58aa6" ${LN("#e58aa6", .9)}/>`).join("");
    if (style === "afro") s += curls([[36, 44, 13], [44, 30, 13], [60, 24, 14], [76, 30, 13], [84, 44, 13], [88, 58, 10], [32, 58, 10], [48, 40, 12], [72, 40, 12]]);
    if (style === "rizada_larga") s += curls([[34, 50, 9], [32, 64, 9], [34, 78, 9], [38, 92, 8], [86, 50, 9], [88, 64, 9], [86, 78, 9], [82, 92, 8], [42, 30, 10], [60, 24, 11], [78, 30, 10]]);
    if (style === "trenza_lateral") s += [0, 1, 2, 3, 4].map(i => VE(82 + i * .8, 64 + i * 9, 5.2, 6, hc, { w: 1.4, hl: .5 })).join("") + LINE("M83 109 h7", "#5f8a55", 3);
    if (style === "media_coleta") s += VC(60, 26, 6, hc, { hl: .5 }) + `<rect x="56" y="30" width="8" height="2.6" rx="1.2" fill="#c0453a"/>`;
    return s;
  }
  switch (style) {
    case "corto": return P(fringe) + shine;
    case "rapado": return P("M37 50 C36 34 46 29 60 29 C74 29 84 34 83 50 C76 42 68 40 60 40 C52 40 44 42 37 50 Z", { hl: .5 });
    case "calvo": return LINE("M44 34 q4 -3 9 -3", "#ffffff", 2, 'opacity=".5"');
    case "melena": return P("M36 56 C34 32 48 26 62 26 C78 26 86 36 84 56 C78 44 70 36 56 38 C48 40 40 46 36 56Z") + shine;
    case "media": return P("M36 52 C34 30 48 26 60 26 C74 26 86 30 84 52 C78 46 70 44 60 44 C50 44 42 46 36 52Z") + shine;
    case "flequillo": return P("M36 54 C33 30 50 24 66 26 C80 28 88 38 84 54 C80 44 72 40 64 42 C56 44 46 48 36 54Z") + shine;
    case "coleta": return P("M36 52 C34 32 46 26 60 26 C76 26 86 34 84 52 C78 40 68 37 58 38 C50 39 42 43 36 52 Z") + shine;
    case "mono": case "mono_alto": return P("M36 52 C34 33 46 28 60 28 C76 28 86 35 84 52 C78 42 70 39 60 39 C50 39 42 43 36 52 Z") + shine;
    case "trenzas": return P("M36 54 C34 32 46 26 60 26 C76 26 86 34 84 54 C80 42 70 38 60 38 C50 38 40 42 36 54 Z") + LINE("M60 27 V38", darken(hc, .7), 1.2);
    case "tupe": return P("M36 52 C33 30 46 22 62 20 C74 18 89 24 86 36 C88 44 85 50 84 52 C80 40 70 36 58 37 C48 38 41 44 36 52Z") + LINE("M64 24 c6 -2 10 2 8 6", darken(hc, .7), 1.2) + shine;
    case "rizos": return curls([[40, 42, 9], [47, 32, 10], [60, 27, 10.5], [73, 32, 10], [80, 42, 9], [85, 52, 7], [35, 52, 7]]);
    case "cresta": return P("M54 36 L50 14 L58 22 L61 6 L65 22 L73 13 L68 36 Z");
    case "pixie": return P("M36 54 C33 34 46 25 62 25 C76 25 87 33 85 50 C82 44 76 40 70 41 L72 47 C66 42 58 41 52 44 L54 38 C46 42 40 48 36 54Z") + shine;
    case "afro": return P("M38 50 C38 38 48 33 60 33 C72 33 82 38 82 50 C76 43 68 41 60 41 C52 41 44 43 38 50Z", { hl: .4 });
    case "coletas": return P(fringe) + shine;
    case "ondas": return P("M36 54 C33 32 48 25 62 26 C78 27 86 36 84 54 C80 46 76 42 70 42 C66 46 60 46 56 42 C50 44 42 48 36 54Z") + shine;
    case "bob_flequillo": return P("M37 50 C36 34 46 27 60 27 C74 27 84 34 83 50 C83 47 81 46 78 46 L42 46 C39 46 37 47 37 50Z") + LINE("M46 46 L46.6 41M54 46 V40M62 46 V40M70 46 L69.4 41", darken(hc, .75), .9, 'opacity=".7"') + shine;
    case "undercut": return `<path d="M36 55 C35 46 37 44 40 44 L40 56Z M84 55 C85 46 83 44 80 44 L80 56Z" fill="${hc}" opacity=".45"/>` + P("M38 44 C38 28 52 22 66 23 C80 24 88 32 86 42 C80 36 70 36 62 38 C52 40 44 44 38 44Z") + shine;
    case "rizada_larga": return curls([[40, 40, 8], [50, 33, 8.5], [61, 30, 9], [72, 33, 8.5], [81, 41, 8]]);
    case "punta": return P("M36 52 L34 40 L40 42 L40 30 L47 36 L50 24 L56 33 L61 22 L65 33 L71 24 L73 35 L80 30 L80 42 L86 40 L84 52 C78 44 70 40 60 40 C50 40 42 44 36 52Z");
    case "raya_medio": return P("M60 27 C48 27 38 34 36 54 C40 45 48 38 60 33 Z") + P("M60 27 C72 27 82 34 84 54 C80 45 72 38 60 33 Z") + LINE("M60 27 V33", darken(hc, .7), 1);
    case "media_coleta": return P("M36 54 C33 32 48 25 62 26 C78 27 86 36 84 54 C78 44 70 38 56 39 C48 40 40 46 36 54Z") + shine;
    case "trenza_lateral": return P("M36 54 C33 31 50 24 66 26 C80 28 88 38 84 54 C80 44 72 40 64 42 C56 44 46 48 36 54Z") + shine;
    case "ondulado_corto": return P("M36 52 C33 34 44 26 58 26 C72 26 86 32 84 50 C80 46 78 42 72 42 C70 46 64 44 60 42 C56 46 50 44 46 44 C42 48 38 48 36 52Z") + shine;
    default: return P(fringe) + shine;
  }
}

/* ---------- sombreros y gorros (mismo sistema que antes) ---------- */
function avHat(it, k) {
  if (!it) return "";
  if (it.k === "cap") {
    const fill = it.pat ? `url(#${k}c)` : it.c, d = darken(it.c, .72);
    return `${it.pat ? DEFS(patternDef(k + "c", it.pat, it.c, it.pc)) : ""}${DET(`<path d="M83 42 l8 -4 l1 6Z M83 43 l7 4 l-2 4Z" fill="${it.c}" ${LN(it.c, 1)}/>`)}` +
      VP("M35 50 C34 30 46 22 60 22 C76 22 86 30 85 50 C76 45 44 45 35 50Z", fill, { lc: it.c }) + LINE("M35.5 48 C46 43.5 74 43.5 84.5 48", d, 3) + LINE("M44 30 q6 -4 14 -4", "#fff", 2, 'opacity=".35"');
  }
  switch (it.id) {
    case "flor": return `<g transform="translate(79 35)">${[0, 72, 144, 216, 288].map(a => `<ellipse rx="3.6" ry="5.5" transform="rotate(${a}) translate(0 -5)" fill="#f29b8a" ${LN("#f29b8a", 1)}/>`).join("")}<circle r="3" fill="#f3d36b" ${LN("#f3d36b", 1)}/></g>`;
    case "diadema": return LINE("M37 46 C40 28 80 28 83 46", "#e58aa6", 4.5) + `<path d="M72 30 l-7 -5 v10Z M72 30 l7 -5 v10Z" fill="#e58aa6" ${LN("#e58aa6", 1)}/><circle cx="72" cy="30" r="2" fill="#c9607e"/>`;
    case "lana": return VP("M34 50 C34 26 86 26 86 50 Z", "#c95b4a") + LINE("M44 30 v14M52 28 v16M60 27 v17M68 28 v16M76 30 v14", "#a8483a", 1.4) + VR(32, 44, 56, 9, 4, "#a8483a") + VC(60, 24, 6.5, "#f3e6cf");
    case "boina": return VP("M34 44 C34 28 52 22 66 24 C82 26 92 34 86 42 C76 46 46 48 34 44Z", "#3f4a5c") + LINE("M62 24 l1 -5", "#3f4a5c", 2);
    case "paja": return VE(60, 40, 37, 8, "#e2c27a") + VP("M42 40 C42 22 78 22 78 40 Z", "#e8cc89") + LINE("M42 36 C52 39 68 39 78 36", "#c0453a", 3.5);
    case "corona": return VP("M42 36 L43 18 L51 28 L60 13 L69 28 L77 18 L78 36Z", "#f1c75b") + `<circle cx="60" cy="29" r="2.6" fill="#c0453a"/><circle cx="48" cy="31" r="1.6" fill="#4f6fae"/><circle cx="72" cy="31" r="1.6" fill="#5f8a55"/>`;
    case "papanoel": { const red = "#c63b35", fur = "#fbf7ef", fl = "#d9cfc2";
      /* gorro: cono rojo que cae hacia un lado; el ribete y el pompón son "pelo" esponjoso (bolitas fundidas sin línea interior) */
      return VP("M36.5 42 C37 28 46 17.5 60 14.8 C72 12.5 84.5 15.5 90.5 24.5 C94.5 30.5 96 38 94.6 43.6 C91.6 40.6 89 36.6 87 32.6 C86.2 36.4 85.6 39.4 85.4 42 Z", red) +
        LINE("M58 17 C70 15.6 81 18.6 87 26.6", lighten(red, .3), 1.6, 'opacity=".5"') + LINE("M86.4 29.6 C88.2 33.4 88.8 36.8 88.4 40", darken(red, .7), 1, 'opacity=".6"') +
        [[36.8, 47.4], [44.2, 48.2], [51.8, 47.6], [59.6, 47.4], [67.4, 47.6], [75, 48.2], [82.6, 47.4]].map(([x, y]) => VC(x, y, 2.9, fur, { lc: fl, w: 1.3, hl: 0, sh: 0, in: 0 })).join("") +
        VP("M33 44 C33 38.6 45.5 35.4 60 35.4 C74.5 35.4 87 38.6 87 44 C87 48.6 84.4 49.6 80.4 48.6 C72.4 47 66 46.6 60 46.6 C54 46.6 47.6 47 39.6 48.6 C35.6 49.6 33 48.6 33 44 Z", fur, { lc: fl, hl: .35, sh: 0, in: 0 }) +
        LINE("M38 41.4 q2 -1.2 4 0M48 39.4 q2 -1.2 4 0M58 38.8 q2 -1.2 4 0M68 39.4 q2 -1.2 4 0M78 41.4 q2 -1.2 4 0M43 45 q2 -1 4 0M63 44.6 q2 -1 4 0", "#e6ded2", .9) +
        VC(91.4, 43.6, 2.6, fur, { lc: fl, w: 1.3, hl: 0, sh: 0, in: 0 }) + VC(98.8, 49.6, 2.6, fur, { lc: fl, w: 1.3, hl: 0, sh: 0, in: 0 }) + VC(94.6, 51, 2.4, fur, { lc: fl, w: 1.3, hl: 0, sh: 0, in: 0 }) +
        VC(95.2, 46.4, 5.4, fur, { lc: fl, hl: .5, sh: 0, in: 0 }) + LINE("M93 45 q1.6 -1 3.2 0M94.6 48.6 q1.6 -1 3.2 0", "#e6ded2", .8); }
    case "reno": return LINE("M37 46 C40 28 80 28 83 46", "#8a6244", 4) + [[42, -1], [78, 1]].map(([x, s]) => LINE(`M${x} 32 C${x - 4 * s} 22 ${x - 2 * s} 14 ${x - 6 * s} 8 M${x - 2 * s} 22 l${-7 * s} -4 M${x - 3 * s} 15 l${4 * s} -6`, "#a87447", 3.4)).join("") + `<circle cx="40" cy="36" r="2" fill="#c0453a"/><circle cx="80" cy="36" r="2" fill="#c0453a"/>`;
    case "bruja": return VE(60, 40, 38, 7, "#3a2f45") + VP("M42 40 C46 26 52 14 58 6 C62 2 70 4 72 10 C66 10 64 14 66 20 C70 28 76 34 78 40Z", "#4a3a5c") + LINE("M44 35 C54 38 68 38 77 35", "#e8873f", 4) + `<rect x="56" y="31" width="7" height="7" fill="none" stroke="#f3d36b" stroke-width="1.6"/>`;
    case "orejas_gato": return LINE("M37 46 C40 28 80 28 83 46", "#2e2630", 4) + VP("M38 36 L40 18 L52 30Z", "#2e2630", { w: 1.2 }) + VP("M82 36 L80 18 L68 30Z", "#2e2630", { w: 1.2 }) + `<path d="M42 31 L42.5 23 L48 29Z M78 31 L77.5 23 L72 29Z" fill="#e58aa6"/>`;
    case "diadema_corazones": return LINE("M37 46 C40 28 80 28 83 46", "#e58aa6", 3.5) + LINE("M48 31 L46 20M72 31 L74 20", "#7a3b2e", 1.2) + HEART(46, 18, 1.8, "#e14f6c") + HEART(74, 18, 1.8, "#e14f6c");
    case "horquilla": return LINE("M70 26 L86 16M74 30 L90 22", "#2e2630", 2) + `<g transform="translate(70 28)">${FLOWER(0, 0, 3, "#f2b5c4", "#c9607e")}</g>`;
    case "pamela": return VE(60, 40, 44, 9, "#ead39b") + VP("M40 40 C40 22 80 22 80 40Z", "#efdcab") + LINE("M40 36 C52 39 68 39 80 36", "#4f7fae", 3.5);
    case "vaquero": return VP("M18 40 C24 48 40 46 60 45 C80 46 96 48 102 40 C96 44 88 42 82 40 L78 22 C74 14 68 18 60 18 C52 18 46 14 42 22 L38 40 C32 42 24 44 18 40Z", "#a8724a") + LINE("M39 36 C50 39 70 39 81 36", "#6b4430", 3.5);
    default: return "";
  }
}
function avEarrings(id) {
  switch (id) {
    case "aros": return `<circle cx="35" cy="66" r="3.2" fill="none" stroke="#e2b65e" stroke-width="1.8"/><circle cx="85" cy="66" r="3.2" fill="none" stroke="#e2b65e" stroke-width="1.8"/>`;
    case "perlas": return VC(35, 64.5, 2.2, "#fbf7ef", { w: .9 }) + VC(85, 64.5, 2.2, "#fbf7ef", { w: .9 });
    case "estrellas": return [35, 85].map(x => STARP(x, 65, 3, "#f3d36b")).join("");
    case "cascabeles": return [35, 85].map(x => VC(x, 66, 2.6, "#f0c25e", { w: .9 }) + LINE(`M${x - 1.5} 66.5 h3`, "#7a5638", .7)).join("");
    case "calabacitas": return [35, 85].map(x => VE(x, 66.5, 2.8, 2.3, "#e8873f", { w: .8 }) + LINE(`M${x} 64.2 v-1.4`, "#5f8a55", 1)).join("");
    case "corazones": return [35, 85].map(x => HEART(x, 66, .9, "#e14f6c")).join("");
    case "borlas": return [35, 85].map(x => `<circle cx="${x}" cy="64" r="1.4" fill="#f0c25e"/><path d="M${x - 1.2} 65 L${x - 2} 72 L${x + 2} 72 L${x + 1.2} 65Z" fill="#c0453a"/>`).join("");
    case "coral": return [35, 85].map(x => VC(x, 65, 2, "#e8806b", { w: .8 }) + `<circle cx="${x}" cy="69" r="1.4" fill="#e8806b"/>`).join("");
    default: return "";
  }
}
function avNeckAcc(id, k) {
  switch (id) {
    case "esteto": return LINE("M48 88 C46 104 52 114 60 114 C68 114 74 104 72 88", "#55626b", 2.6) + VC(60, 116.5, 4.5, "#c9d3d9", { w: 1.2 });
    case "panuelo": return VP("M47 87 L73 87 L60 101 Z", "#c0453a", { w: 1.2 }) + `<circle cx="56" cy="91" r="1" fill="#fff"/><circle cx="63" cy="93" r="1" fill="#fff"/>`;
    case "lunares": return VP("M46 87 L74 87 L60 103 Z", "#c0453a", { w: 1.2 }) + [[53, 90], [60, 90], [67, 90], [57, 95], [63, 95], [60, 99]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.4" fill="#fbf7ef"/>`).join("");
    case "bandana": return VP("M46 87 L74 87 L60 102 Z", "#4f6fae", { w: 1.2 }) + [[54, 90], [64, 91], [59, 96]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="none" stroke="#fbf7ef" stroke-width=".8"/>`).join("");
    case "collar": return [0, 1, 2, 3, 4, 5, 6].map(i => { const t = i / 6, x = 48 + 24 * t, y = 90 + 9 * Math.sin(Math.PI * t); return VC(x.toFixed(1), y.toFixed(1), 2.2, ["#f29b8a", "#f3d36b", "#9cc0cf"][i % 3], { w: .8, sh: 0 }); }).join("");
    case "collar_corazones": return LINE("M48 89 Q60 102 72 89", "#f3d36b", 1.2) + HEART(60, 98, 1.4, "#e14f6c");
    case "pajarita": return VP("M60 92 L50 86 L50 98 Z", "#b8473a", { w: 1.1 }) + VP("M60 92 L70 86 L70 98 Z", "#b8473a", { w: 1.1 }) + VC(60, 92, 2.6, "#a03c31", { w: 1 });
    case "bufanda": return VP("M43 86 Q60 95 77 86 L78 94 Q60 104 42 94Z", "#5f8a55") + VP("M66 96 L70 122 L62 123 L60 98Z", "#5f8a55");
    case "bufanda_navidad": return DEFS(patternDef(k + "s", "rayas", "#fbf7ef", "#c0453a")) + VP("M43 86 Q60 95 77 86 L78 94 Q60 104 42 94Z", `url(#${k}s)`, { lc: "#c0453a" }) + VP("M66 96 L70 122 L62 123 L60 98Z", `url(#${k}s)`, { lc: "#c0453a" });
    default: return "";
  }
}

/* ---------- brazos y manos: formas cerradas (el brazo se estrecha hacia la muñeca; mano tipo manopla con pulgar) ---------- */
const ARM_L = "M41.6 88.4 C36 89.4 32.8 95 31.8 103 L30.6 121.4 Q33.7 123.2 36.8 121.8 L37.6 107 C37.9 101.5 39.5 97.5 42.6 95 Z";
const HAND_L = "M30.4 120.6 C29.3 124.4 29.5 129.6 31.4 132.2 C33.2 134.5 36.4 134.1 37.3 131.2 C37.6 130.2 37.7 129.2 37.7 128.3 C39 128.4 39.8 127.2 39.4 125.9 C39.1 124.9 38.2 124.5 37.4 124.6 L37.1 120.8 Z";
const SLEEVE_Y = { short: 107.5, "3q": 115.5, long: 121.6, wide: 118.5 };
/* manga del brazo izquierdo que acaba en la altura Y (vuelo = ensanche de las mangas anchas) */
function sleeveEdges(Y, flare) {
  const xo = 31.8 - 1.2 * Math.max(0, Y - 103) / 18.5 - 1.1 - flare;
  const xi = (Y <= 107 ? 38.4 : 37.6 - .8 * (Y - 107) / 14.8) + 1 + flare * .25;
  return [xo, xi];
}
function sleevePath(Y, flare = 0) {
  const [xo, xi] = sleeveEdges(Y, flare);
  return `M42.8 86.6 C35 87.6 30.8 94 30.2 102.8 L${xo.toFixed(2)} ${Y} Q${((xo + xi) / 2).toFixed(2)} ${(Y + 1.8).toFixed(2)} ${xi.toFixed(2)} ${(Y - .4).toFixed(2)} L38.9 105 C39.4 100.5 41 96.8 44.6 94.2 Z`;
}
function sleeveCuff(Y, flare = 0) {
  const [xo, xi] = sleeveEdges(Y - 3.2, flare);
  return `M${(xo + .2).toFixed(2)} ${(Y - 3.2).toFixed(2)} Q${((xo + xi) / 2).toFixed(2)} ${(Y - 1.6).toFixed(2)} ${(xi - .1).toFixed(2)} ${(Y - 3.6).toFixed(2)}`;
}

/* ---------- personaje completo (de una pieza: silueta común + rellenos) ---------- */
function avatarG(eq, mood, opt = {}) {
  mood = mood || "neutral";
  const k = "v" + (avK++) + "_";
  const body = () => avatarBody(eq, mood, opt, k);
  return `<g class="av ${mood}">${onePiece(body)}</g>`;
}
function avatarBody(eq, mood, opt, k) {
  const hc = (findItem("hairColor", eq.hairColor) || { c: "#6b4430" }).c, sk = (findItem("skin", eq.skin) || { c: "#e8bd9a" }).c;
  const coat = findItem("coat", eq.coat), top = findItem("top", eq.top), bottom = findItem("bottom", eq.bottom), shoes = findItem("shoes", eq.shoes), acc = findItem("acc", eq.acc);
  const rep = coat ? (COAT_REPLACES[coat.k] || []) : [];
  const hairT = `transform="translate(60 54) scale(1.04) translate(-60 -55)"`;
  const neck = VP("M53 70 L67 70 L67 89 C64 91 56 91 53 89 Z", sk, { w: 1.6, hl: 0 });
  const head = `<g class="av-head">
      ${DET(`<ellipse cx="60" cy="79" rx="8" ry="3.4" fill="#2a1408" opacity=".14"/>`)}
      ${VC(35, 58, 5.5, sk, { w: 1.6, hl: 0 })}${VC(85, 58, 5.5, sk, { w: 1.6, hl: 0 })}${LINE("M34 56 q2 2 0 4M86 56 q-2 2 0 4", darken(sk, .75), 1)}
      ${avEarrings(eq.ears)}
      ${VC(60, 54, 25, sk, { w: 1.9, dir: "gShR" })}
      ${avBeard(eq, hc)}${avBlush(eq)}${avEyes(eq, mood)}${avBrows(eq, mood, hc)}${avNose(eq, sk)}
      ${eq.face && eq.face !== "barba" && eq.face !== "bigote" ? avFaceExtra(eq, hc) : ""}${avMouth(eq, mood, sk)}${eq.face === "bigote" ? avFaceExtra(eq, hc) : ""}
      ${avMask(acc)}
      <g ${hairT}>${avHair(eq.hair, hc, "front")}</g>
      ${avGlasses(eq.glasses)}
      <g ${hairT}>${avHat(findItem("head", eq.head), k)}</g>
    </g>`;
  if (opt.headOnly) return `<g ${hairT}>${avHair(eq.hair, hc, "back")}</g>${neck}${head}`;
  const sleeveFrom = coat && COAT_SLEEVE[coat.k] ? coat : (rep.includes("top") ? coat : top);
  const sleeveLen = coat && COAT_SLEEVE[coat.k] ? COAT_SLEEVE[coat.k] : (rep.includes("top") ? "short" : SLEEVE[top && top.k] || "short");
  const sPaint = sleeveFrom && sleeveFrom.pat ? `url(#${k}${sleeveFrom === top ? "t" : "d"})` : null;
  const sc = (sleeveFrom && sleeveFrom.c) || "#cccccc";
  const Y = SLEEVE_Y[sleeveLen] || SLEEVE_Y.short, flare = sleeveLen === "wide" ? 3.2 : 0;
  const arm = (side) => {
    const L = side === "L", m = d => L ? d : mirX(d);
    return `<g class="av-arm-${L ? "l" : "r"}"><g transform="rotate(${L ? 7 : -7} ${L ? 40.5 : 79.5} 92)">` +
      VP(m(ARM_L), sk, { w: 1.5, hl: 0 }) + VP(m(HAND_L), sk, { w: 1.5, hl: .6 }) + LINE(m("M37.5 128.1 Q36.9 126.5 37.3 124.8"), darken(sk, .7), .8) +
      VP(m(sleevePath(Y, flare)), sPaint || sc, { lc: sc, w: 1.5 }) +
      (sleeveLen === "long" ? LINE(m(sleeveCuff(Y, flare)), darken(sc, .78), 1) : "") +
      (L && acc && acc.id === "reloj" ? avAccFront(acc) : "") + `</g></g>`;
  };
  const tallShoes = shoes && (shoes.k === "boot" || shoes.k === "cowboy");
  return `${avCoatBack(coat)}${avAccBack(acc)}
    <g ${hairT}>${avHair(eq.hair, hc, "back")}</g>
    ${avLegs(sk)}
    ${tallShoes ? "" : avShoes(shoes)}
    ${rep.includes("bottom") ? "" : avBottom(bottom, k)}
    ${tallShoes ? avShoes(shoes) : ""}
    <g class="av-up">
      ${neck}
      ${rep.includes("top") ? "" : avTop(top, sk, k)}
      ${avCoat(coat, sk, k)}
      ${arm("L")}${arm("R")}
      ${acc && acc.id !== "reloj" && acc.id !== "mascarilla" ? avAccFront(acc) : ""}
      ${avNeckAcc(eq.neck, k)}
      ${head}
    </g>`;
}
function avatarSVG(eq, mood, cls, vb) { return `<svg class="${cls || ""}" viewBox="${vb || AV_CROP.full}" aria-hidden="true">${avatarG(eq, mood || "neutral")}</svg>`; }
