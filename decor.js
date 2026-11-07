"use strict";
/* ================= DECORACIÓN DETALLADA (sustituye y amplía la de art.js) ================= */
let dcK = 0;
const frame = (x, y, w, h, c, inner) => VR(x, y, w, h, 1.6, c, { w: 1.6 }) + LINE(`M${x + 2} ${y + h - 2} L${x + 2} ${y + 2} L${x + w - 2} ${y + 2}`, lighten(c, .35), 1.2, 'opacity=".8"') + LINE(`M${x + w - 2} ${y + 2} L${x + w - 2} ${y + h - 2} L${x + 2} ${y + h - 2}`, darken(c, .7), 1.2, 'opacity=".7"') + (inner ? VR(x + 4, y + 4, w - 8, h - 8, .6, inner, { w: .9, sh: 0, hl: 0 }) : "");
const noAnim = s => s.replace(/class="/g, 'data-c="').replace(/<animate[^>]*\/>/g, "");

Object.assign(DECOR.wallL, {
  cuadro: () => {
    const k = "dc" + (dcK++);
    return `<defs>${vGrad(k + "s", "#9fcbe6", "#f6dcc0", "#f3e2c4")}${vGrad(k + "l", "#8fbcd6", "#c9e2ee")}</defs>` + SOFT(138, 63, 26, 2.4, .35) +
      frame(110, 22, 56, 40, "#b58550") + `<rect x="115" y="27" width="46" height="30" fill="url(#${k}s)"/>` +
      `<circle cx="150" cy="35" r="3.2" fill="#fbe9b0"/><path d="M115 46 L124 35 L130 40 L137 31 L146 41 L152 36 L161 45 V57 H115Z" fill="#8fa3c0"/><path d="M124 35 l-2.4 3 h4.6Z M137 31 l-3 3.6 h5.8Z" fill="#fbfdff"/>` +
      `<path d="M115 49 Q128 44 140 49 Q150 46 161 50 V57 H115Z" fill="#7fa87a"/><rect x="115" y="51" width="46" height="6" fill="url(#${k}l)"/>` +
      LINE("M122 53 h8M137 54.5 h10M148 52.6 h6", "#fbfdff", .7, 'opacity=".7"') + vPine(119, 41, 12, "#4f7a5f") + vPine(157, 43, 10, "#4f7a5f") +
      LINE("M117 30 q6 -1 12 1M140 29 q5 1 9 0", "#ffffff", .8, 'opacity=".5"') + `<rect x="115" y="27" width="46" height="30" fill="url(#gGrain)" opacity=".25"/>`;
  },
  diploma: () => {
    const k = "dc" + (dcK++);
    return `<defs>${vGrad(k + "p", "#fbf4e3", "#f1e2c2")}</defs>` + SOFT(137, 61, 24, 2.2, .3) + frame(113, 24, 48, 35, "#6b4430") + `<rect x="118" y="29" width="38" height="25" fill="url(#${k}p)"/>` +
      `<text x="137" y="36" text-anchor="middle" font-family="Georgia,serif" font-size="4.2" font-style="italic" fill="#6b4430">Veterinaria</text>` +
      LINE("M123 40 h28M125 43.5 h24M127 47 h20", "#c9b48e", .9) + `<path d="M148 52 l-1.8 5 l2.4 -1.4 l1.4 2.4 l.6 -5Z M151 52 l1.8 5 l-2.4 -1.4 l-1.4 2.4 l-.6 -5Z" fill="#c0453a"/>` + VC(149.5, 50, 3.6, "#d14f45", { w: .8 }) + STARP(149.5, 50, 2, "#f3d36b") + LINE("M121 51.5 q4 -2 8 0", "#4f6fae", .8);
  },
  espejo: () => {
    const k = "dc" + (dcK++);
    return `<defs><radialGradient id="${k}m" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#f1f8fa"/><stop offset="1" stop-color="#b9d3dc"/></radialGradient></defs>` + SOFT(138, 66, 18, 2, .3) +
      VC(137, 44, 20, "#c9a65a") + LINE("M137 24 v-3", "#6b4a35", 1.4) + `<circle cx="137" cy="44" r="15.5" fill="url(#${k}m)" ${LN("#9cb5c0", 1)}/>` +
      `<rect x="127" y="38" width="9" height="11" fill="#cfe7ee" opacity=".55"/><path d="M127 49 h9" stroke="#a87447" stroke-width="1" opacity=".5"/>` + LINE("M128 37 l8 -8M131 44 l12 -12", "#ffffff", 2.2, 'opacity=".75"') +
      [0, 45, 90, 135, 180, 225, 270, 315].map(a => `<circle cx="${(137 + 18 * Math.cos(a * Math.PI / 180)).toFixed(1)}" cy="${(44 + 18 * Math.sin(a * Math.PI / 180)).toFixed(1)}" r="1" fill="#f3d36b"/>`).join("");
  },
  retrato: () => {
    const k = "dc" + (dcK++);
    return `<defs><clipPath id="${k}c"><ellipse cx="137" cy="43" rx="15" ry="18"/></clipPath><radialGradient id="${k}b" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#5f7a5c"/><stop offset="1" stop-color="#2f4a3a"/></radialGradient></defs>` + SOFT(137, 66, 20, 2, .3) +
      VE(137, 43, 20, 23, "#c9a24a", { w: 1.6 }) + [...Array(12)].map((_, i) => { const a = i / 12 * Math.PI * 2; return `<circle cx="${(137 + 20 * Math.cos(a)).toFixed(1)}" cy="${(43 + 23 * Math.sin(a)).toFixed(1)}" r="1.5" fill="#e8c46a" ${LN("#c9a24a", .6)}/>`; }).join("") +
      `<ellipse cx="137" cy="43" rx="15" ry="18" fill="url(#${k}b)"/><g clip-path="url(#${k}c)"><svg x="117" y="25" width="40" height="40" viewBox="6 14 88 88">${noAnim(dogSVG("Bigotes", "neutral"))}</svg>` +
      `<path d="M126 61 Q137 54 148 61 L150 64 L124 64Z" fill="#2e2630"/><path d="M137 57 l-4 -2.4 v4.8Z M137 57 l4 -2.4 v4.8Z" fill="#c0453a"/></g>` + VR(129, 63, 16, 4.4, 1, "#e8c46a", { w: .7, sh: 0 }) + `<text x="137" y="66.4" text-anchor="middle" font-family="Georgia,serif" font-size="2.8" fill="#6b4430">Sr. Bigotes</text>`;
  },
  bodegon: () => {
    const k = "dc" + (dcK++);
    return `<defs>${vGrad(k + "b", "#4a5a6a", "#2e3a46")}</defs>` + SOFT(138, 63, 26, 2.4, .3) + frame(110, 22, 56, 40, "#7a5638") + `<rect x="115" y="27" width="46" height="30" fill="url(#${k}b)"/>` +
      `<rect x="115" y="50" width="46" height="7" fill="#8a5f3a"/>` + VP("M132 50 Q128 42 132 38 H142 Q146 42 142 50Z", "#4f7fae", { w: .9 }) + LINE("M131 44 h12", "#9cc0dc", .8) +
      LINE("M135 38 q-3 -6 -6 -8M137 38 v-9M139 38 q3 -6 7 -7M136 38 q-1 -4 -3 -5", "#5f8a55", .9) +
      [[129, 30, "#e14f6c"], [137, 29, "#f3d36b"], [146, 31, "#f29b8a"], [133, 33, "#fbf7ef"]].map(([x, y, c]) => FLOWER(x, y, 1.9, c, "#f3d36b")).join("") +
      VC(124, 52, 3, "#c0453a", { w: .7 }) + VC(152, 52, 2.6, "#f3b04f", { w: .7 }) + LINE("M124 49 q1 -2 2 -2", "#5f8a55", .7) + `<rect x="115" y="27" width="46" height="30" fill="url(#gGrain)" opacity=".3"/>`;
  },
  acuarela: () => SOFT(138, 64, 24, 2.2, .3) + frame(111, 23, 54, 39, "#efe3cf") + `<rect x="116" y="28" width="44" height="29" fill="#fffdf8"/>` +
    `<ellipse cx="130" cy="47" rx="9" ry="6" fill="#f0b07a" opacity=".55"/><circle cx="126" cy="39" r="5" fill="#f0b07a" opacity=".6"/><path d="M122 35 l1 -4 l3 3Z M128 34 l2 -3 l1 4Z" fill="#f0b07a" opacity=".6"/>` +
    `<ellipse cx="148" cy="48" rx="8" ry="5.4" fill="#9a9aa6" opacity=".5"/><circle cx="152" cy="41" r="4.4" fill="#9a9aa6" opacity=".55"/><path d="M149 38 l1 -3.6 l2.6 2.6Z M154 37 l2 -3 l.6 3.6Z" fill="#9a9aa6" opacity=".55"/>` +
    `<path d="M137 52 q2 -6 6 -4" stroke="#e58aa6" stroke-width="1" fill="none" opacity=".6"/>${PAWP(140, 33, .7, "#e9a1b5")}<circle cx="125" cy="38.4" r=".6" fill="#3a2418"/><circle cx="151.6" cy="40.4" r=".6" fill="#3a2418"/>`
});
Object.assign(DECOR.wallC, {
  reloj: () => {
    const now = new Date(), hA = (now.getHours() % 12 + now.getMinutes() / 60) * 30, mA = now.getMinutes() * 6, sec = now.getSeconds();
    return SOFT(190, 56, 13, 2, .3) + VC(190, 40, 15, "#a87447") + VC(190, 40, 12, "#fbf4e3", { w: .9, hl: .6 }) +
      [...Array(12)].map((_, i) => { const a = i * 30 * Math.PI / 180; return `<path d="M${(190 + 10.4 * Math.sin(a)).toFixed(2)} ${(40 - 10.4 * Math.cos(a)).toFixed(2)} L${(190 + (i % 3 ? 9.4 : 8.6) * Math.sin(a)).toFixed(2)} ${(40 - (i % 3 ? 9.4 : 8.6) * Math.cos(a)).toFixed(2)}" stroke="#5b3b28" stroke-width="${i % 3 ? .6 : 1.1}"/>`; }).join("") +
      `<text x="190" y="33.4" text-anchor="middle" font-family="Georgia,serif" font-size="3" fill="#5b3b28">12</text>` +
      `<path d="M190 40 L190 34.5" stroke="#3a2418" stroke-width="1.6" stroke-linecap="round" transform="rotate(${hA.toFixed(1)} 190 40)"/><path d="M190 40 L190 31.5" stroke="#3a2418" stroke-width="1.1" stroke-linecap="round" transform="rotate(${mA} 190 40)"/>` +
      `<g transform="rotate(${sec * 6} 190 40)"><path class="tick" style="transform-origin:190px 40px" d="M190 41.5 L190 30.5" stroke="#c0453a" stroke-width=".5" stroke-linecap="round"/></g>` + VC(190, 40, 1.3, "#c0453a", { w: .5, sh: 0 });
  }
});
Object.assign(DECOR.wallR, {
  anatomia: () => SOFT(320, 86, 24, 2, .3) + VR(296, 22, 48, 62, 1, "#fbf4e3", { w: 1.3 }) + `<rect x="296" y="22" width="48" height="7" fill="#c0453a"/><text x="320" y="27.6" text-anchor="middle" font-family="Georgia,serif" font-size="4" fill="#fbf7ef">ANATOMÍA</text>` +
    VP("M304 60 C304 50 312 44 322 45 C328 40 335 41 336 46 C337 50 334 53 331 53 L331 64 C330 70 326 72 320 71 C312 71 306 68 304 60Z", "#f2d6cd", { w: 1 }) +
    LINE("M309 50 Q320 45 330 50", "#a87447", 1.1) + [312, 316, 320, 324].map(x => LINE(`M${x} 50 q-1 5 0 9`, "#c9a77d", .8)).join("") +
    `<path d="M318 56 c-2 -2 -4 0 -2 2 l2 2 l2 -2 c2 -2 0 -4 -2 -2Z" fill="#d14f45"/>` + VE(323.5, 61, 3.4, 2.2, "#f0a35e", { w: .6, sh: 0 }) + VE(312, 56, 3, 4, "#f29bb0", { w: .6, sh: 0, x: 'opacity=".85"' }) +
    LINE("M309 64 v8M314 66 v6M326 66 v6M331 64 v8", "#a87447", 1.4) + `<circle cx="333" cy="45.4" r=".8" fill="#3a2418"/>` +
    LINE("M318 56 L300 76M323.5 61 L338 78M312 56 L300 70", "#8a6a55", .4) + LINE("M299 76 h6M299 70 h6M336 78 h6", "#c9b48e", 1),
  pizarra: () => frame(292, 24, 56, 46, "#a87447") + `<rect x="296" y="28" width="48" height="38" fill="#3e4f45"/><rect x="296" y="28" width="48" height="38" fill="url(#gGrain)" opacity=".25"/>` +
    `<text x="300" y="38" font-family="Georgia,serif" font-style="italic" font-size="7" fill="#f3e6cf">Hoy:</text>` + LINE("M301 44 h20M301 50 h26M301 56 h16", "#f3e6cf", 1.2, 'opacity=".8"') + HEART(334, 52, 1.5, "#f29b8a") + PAWP(336, 39, .9, "#f3e6cf") + VR(304, 67, 10, 3, .5, "#fbf7ef", { w: .5, sh: 0 })
});
Object.assign(DECOR.ceiling, {
  lampara: () => {
    const k = "dc" + (dcK++);
    return `<defs><linearGradient id="${k}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".38"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></linearGradient></defs>` +
      `<path class="glow" d="M252 44 L272 44 L322 150 L202 150 Z" fill="url(#${k}c)"/>` + `<g class="sway" style="transform-origin:262px 0px">` + LINE("M262 0 L262 26", "#5b3b28", 1.2) +
      VP("M243 43 Q262 17 281 43 Z", "#c95b4a") + LINE("M249 37 Q262 24 275 37", "#ffffff", 1.4, 'opacity=".35"') + `<ellipse cx="262" cy="44" rx="6" ry="3" fill="#fff3c4"/><ellipse class="glow" cx="262" cy="47" rx="16" ry="7" fill="url(#gGlow)"/></g>`;
  }
});
DECOR.cornerL.chimenea = () => {
  const k = "dc" + (dcK++);
  const oA = "M34 182 C30 172 36 164 40 158 C42 166 44 168 46 162 C48 152 54 146 56 140 C58 150 62 156 62 164 C64 160 66 158 66 154 C70 162 70 174 64 182 Z",
    oB = "M34 182 C29 171 34 162 39 156 C42 163 45 166 47 159 C50 150 55 143 58 137 C59 148 63 154 63 162 C65 158 67 155 68 151 C71 160 71 173 64 182 Z",
    oC = "M34 182 C31 173 37 165 41 160 C43 167 44 169 46 164 C47 155 52 149 54 144 C57 152 61 158 61 166 C63 162 65 160 64 157 C69 164 69 175 64 182 Z";
  const mA = "M38 182 C36 175 40 170 43 166 C44 171 46 172 48 168 C50 162 53 158 54 154 C56 161 59 165 59 170 C61 168 62 166 62 164 C64 170 64 177 60 182 Z",
    mB = "M38 182 C35 174 39 168 42 163 C44 169 46 170 48 165 C51 159 54 155 56 151 C57 159 60 163 60 168 C62 166 63 164 64 161 C65 168 65 176 60 182 Z";
  const iA = "M42 182 C41 177 44 174 46 171 C47 174 48 175 49 173 C50 170 52 167 52 165 C54 169 55 172 55 175 C56 174 57 173 57 172 C58 176 58 179 56 182 Z",
    iB = "M42 182 C40 176 43 172 45 169 C47 172 48 173 49 171 C51 167 53 164 54 162 C55 167 56 170 56 173 C57 172 58 171 58 169 C59 174 59 178 56 182 Z";
  return `<defs><linearGradient id="${k}i" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c1418"/><stop offset="1" stop-color="#4a2a20"/></linearGradient>
      <pattern id="${k}b" width="20" height="10" patternUnits="userSpaceOnUse"><rect width="20" height="10" fill="#c27a5c"/><rect x=".6" y=".6" width="8.8" height="3.8" rx=".6" fill="#cf866a"/><rect x="10.6" y=".6" width="8.8" height="3.8" rx=".6" fill="#b86e52"/><rect x="5.6" y="5.6" width="8.8" height="3.8" rx=".6" fill="#c97e62"/><rect x="-4.4" y="5.6" width="8.8" height="3.8" rx=".6" fill="#bd735a"/><rect x="15.6" y="5.6" width="8.8" height="3.8" rx=".6" fill="#bd735a"/></pattern></defs>` +
    SOFT(48, 187, 44, 4, .6) + VR(10, 118, 76, 68, 1, `url(#${k}b)`, { lc: "#9c5a42", w: 1.6 }) + VR(4, 111, 88, 8, 2, "#7a5638", { w: 1.6 }) + LINE("M6 113 H90", "#a87447", 1, 'opacity=".8"') +
    VP("M24 186 V152 Q48 134 72 152 V186Z", `url(#${k}i)`, { lc: "#2e2630", sh: 0, hl: 0 }) + `<ellipse class="glow" cx="48" cy="176" rx="26" ry="14" fill="url(#gGlow)"/>` +
    VP("M32 180 L64 176 L66 181 L34 185Z", "#7a5638", { w: 1 }) + VP("M36 176 L62 182 L60 186 L34 180Z", "#8a6244", { w: 1 }) + `<ellipse cx="33" cy="182.5" rx="1.6" ry="2.4" fill="#c9a26f"/><ellipse cx="65" cy="178.6" rx="1.6" ry="2.4" fill="#c9a26f"/>` +
    `<path d="${oA}" fill="#e8582e">${MORPH([oA, oB, oC, oA], 1.3)}</path><path d="${mA}" fill="#f39a3a">${MORPH([mA, mB, mA], .9)}</path><path d="${iA}" fill="#fbe08a">${MORPH([iA, iB, iA], .7)}</path>` +
    [0, 1, 2, 3].map(i => `<circle class="w-ember" cx="${44 + i * 3}" cy="160" r=".8" fill="#fbb04a" style="animation-delay:${-i * .7}s"/>`).join("") +
    `<path d="M8 113 q14 8 26 0 q14 8 26 0 q14 8 28 0" stroke="#3f6f4a" stroke-width="4" fill="none"/>` + [20, 48, 74].map(x => `<circle cx="${x}" cy="117" r="2" fill="#c0453a"/>`).join("") +
    [[18, "#c0453a"], [78, "#5f8a55"]].map(([x, c]) => `<g class="sway" style="transform-origin:${x}px 116px">${VP(`M${x - 3} 116 L${x + 3} 116 L${x + 3} 128 Q${x + 3} 132 ${x + 7} 132 L${x + 7} 136 L${x - 1} 136 Q${x - 3} 136 ${x - 3} 132 Z`, c, { w: 1 })}<rect x="${x - 3.4}" y="115" width="6.8" height="3" fill="#fbf7ef"/></g>`).join("");
};

/* ================= más decoración redibujada ================= */
/* calabaza con gajos (de atrás adelante), tallo curvo y, si se pide, hoja con zarcillo o cara tallada que brilla */
function pumpkin(x, y, rx, ry, o = {}) {
  const c = o.c || "#e8873f", d = darken(c, .82), l = lighten(c, .14), w = o.w || 1.1;
  let s = VE(x - rx * .52, y, rx * .5, ry * .96, d, { w, hl: 0 }) + VE(x + rx * .52, y, rx * .5, ry * .96, d, { w, hl: 0 }) +
    VE(x - rx * .27, y, rx * .5, ry, c, { w, hl: .35 }) + VE(x + rx * .27, y, rx * .5, ry, c, { w, hl: .35 }) +
    VE(x, y + ry * .02, rx * .4, ry * 1.02, l, { w, hl: .55 });
  const t = y - ry + ry * .12;
  s += VP(`M${x - rx * .09} ${t + 1} C${x - rx * .12} ${t - ry * .3} ${x + rx * .02} ${t - ry * .52} ${x + rx * .26} ${t - ry * .56} L${x + rx * .3} ${t - ry * .36} C${x + rx * .12} ${t - ry * .32} ${x + rx * .1} ${t - ry * .1} ${x + rx * .11} ${t + 1} Z`, "#6f8a3c", { w: w * .9 });
  if (o.leaf) s += VP(`M${x - rx * .06} ${t - ry * .12} C${x - rx * .5} ${t - ry * .62} ${x - rx * .9} ${t - ry * .32} ${x - rx * .78} ${t + ry * .02} C${x - rx * .52} ${t - ry * .02} ${x - rx * .3} ${t - ry * .02} ${x - rx * .06} ${t - ry * .12} Z`, "#7fae5a", { w: w * .8 }) +
    LINE(`M${x - rx * .12} ${t - ry * .14} C${x - rx * .45} ${t - ry * .3} ${x - rx * .62} ${t - ry * .18}`, "#5f8a45", w * .6) +
    LINE(`M${x + rx * .2} ${t - ry * .4} c${rx * .2} ${-ry * .2} ${rx * .42} ${ry * .02} ${rx * .3} ${ry * .2} c${-rx * .1} ${ry * .14} ${-rx * .26} ${ry * .02} ${-rx * .16} ${-ry * .1}`, "#6f8a3c", w * .7);
  if (o.face) {
    const e = (ex, ey, sgn) => `M${ex - rx * .14} ${ey + ry * .12} L${ex} ${ey - ry * .18} L${ex + rx * .14} ${ey + ry * .12} Z`;
    const glow = "#fbd36a";
    s += `<path d="${e(x - rx * .32, y - ry * .2)} ${e(x + rx * .32, y - ry * .2)} M${x - rx * .08} ${y + ry * .04} L${x} ${y - ry * .14} L${x + rx * .08} ${y + ry * .04} Z" fill="#5a2a14"/>` +
      `<path d="${e(x - rx * .32, y - ry * .2 + .5)} ${e(x + rx * .32, y - ry * .2 + .5)}" fill="${glow}" opacity=".85"/>` +
      `<path d="M${x - rx * .5} ${y + ry * .26} Q${x} ${y + ry * .72} ${x + rx * .5} ${y + ry * .26} L${x + rx * .36} ${y + ry * .44} L${x + rx * .24} ${y + ry * .3} L${x + rx * .1} ${y + ry * .5} L${x - rx * .06} ${y + ry * .32} L${x - rx * .2} ${y + ry * .5} L${x - rx * .34} ${y + ry * .32} Z" fill="#5a2a14"/>` +
      `<path d="M${x - rx * .42} ${y + ry * .34} Q${x} ${y + ry * .66} ${x + rx * .42} ${y + ry * .34}" fill="none" stroke="${glow}" stroke-width="${(ry * .1).toFixed(2)}" opacity=".75"/>`;
  }
  return s;
}
/* calabacita para estampados y detalles pequeños (sin contornos gruesos) */
const miniPumpkin = (x, y, s, c) => `<ellipse cx="${x - 1.25 * s}" cy="${y}" rx="${1.5 * s}" ry="${2 * s}" fill="${darken(c, .82)}"/><ellipse cx="${x + 1.25 * s}" cy="${y}" rx="${1.5 * s}" ry="${2 * s}" fill="${darken(c, .82)}"/><ellipse cx="${x}" cy="${y}" rx="${1.55 * s}" ry="${2.1 * s}" fill="${c}"/><path d="M${x} ${y - 1.9 * s} q${.2 * s} ${-1.3 * s} ${1.3 * s} ${-1.7 * s}" fill="none" stroke="#5f8a45" stroke-width="${.8 * s}" stroke-linecap="round"/><path d="M${x - .3 * s} ${y - 2.2 * s} q${-1.4 * s} ${-1.2 * s} ${-2.4 * s} ${-.2 * s} q${1.2 * s} ${.6 * s} ${2.4 * s} ${.2 * s}Z" fill="#7fae5a"/>`;

Object.assign(DECOR.wallL, {
  /* abanico japonés: papel plegado y pintado (sol y rama de cerezo), varillas de madera y borla */
  abanico: () => {
    const k = "dc" + (dcK++), cx = 138, cy = 66, R = 31, r1 = 11, a0 = -160, a1 = -20, n = 14;
    const P = (a, r) => { const t = a * Math.PI / 180; return [(cx + r * Math.cos(t)).toFixed(2), (cy + r * Math.sin(t)).toFixed(2)]; };
    let paper = "";
    for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n, [x, y] = P(a, i % 2 ? R - 1.3 : R); paper += (i ? " L" : "M") + x + " " + y; }
    for (let i = n; i >= 0; i--) { const [x, y] = P(a0 + (a1 - a0) * i / n, r1); paper += ` L${x} ${y}`; }
    paper += " Z";
    const pleats = Array.from({ length: n }, (_, i) => { if (i % 2) return ""; const a = a0 + (a1 - a0) * i / n, b = a0 + (a1 - a0) * (i + 1) / n, [x1, y1] = P(a, R), [x2, y2] = P(b, R - 1.3), [x3, y3] = P(b, r1), [x4, y4] = P(a, r1); return `M${x1} ${y1} L${x2} ${y2} L${x3} ${y3} L${x4} ${y4} Z`; }).join(" ");
    const ribs = Array.from({ length: n - 1 }, (_, i) => { const [x, y] = P(a0 + (a1 - a0) * (i + 1) / n, r1 + .6); return `M${cx} ${cy} L${x} ${y}`; }).join("");
    const [gx1, gy1] = P(a0, R + .8), [gx2, gy2] = P(a1, R + .8);
    return `<defs><clipPath id="${k}p"><path d="${paper}"/></clipPath></defs>` +
      `<path d="${paper}" fill="#2a1408" opacity=".1" transform="translate(1.6 2.2)"/>` +
      VP(paper, "#f7efdf", { w: 1, lc: "#c9b48e", hl: 0 }) +
      `<g clip-path="url(#${k}p)"><rect x="100" y="30" width="80" height="16" fill="#f3c9c9" opacity=".35"/><circle cx="152" cy="45" r="6.2" fill="#d9483e"/>` +
      LINE("M106 52 C114 46 122 44 130 40 C134 38 138 37 142 38", "#6b4430", 1.3) + LINE("M122 44 C124 40 126 38 128 37M132 39.6 C134 36 136 35 138 35", "#6b4430", .8) +
      [[118, 47.4], [125, 42.6], [131, 39.6], [137.6, 37], [128, 37.2], [114, 49.6]].map(([x, y], i) => FLOWER(x, y, 1.4 + (i % 2) * .3, "#f2b5c4", "#c9607e")).join("") +
      [[146, 53], [152, 56], [141, 58]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="1" ry=".6" fill="#f2b5c4" transform="rotate(30 ${x} ${y})"/>`).join("") +
      `<path d="${pleats}" fill="#2a1408" opacity=".07"/></g>` +
      LINE(ribs, "#8a6a4a", .9) + LINE(`M${cx} ${cy} L${gx1} ${gy1}M${cx} ${cy} L${gx2} ${gy2}`, "#6b4430", 2.4) +
      LINE(`M${cx} ${cy + 1} q-1 4 0 8`, "#c0453a", .9) + VP(`M${cx - 1.6} ${cy + 9} L${cx + 1.6} ${cy + 9} L${cx + 2.6} ${cy + 17} L${cx - 2.6} ${cy + 17} Z`, "#c0453a", { w: .8 }) +
      VC(cx, cy + 8.6, 1.4, "#e2b65e", { w: .6, sh: 0 }) + VC(cx, cy, 2, "#e2b65e", { w: .8, sh: 0 });
  },
  /* acuarela de gatitos: aguadas suaves con bordes "mojados", un ovillo y cuatro trazos de tinta */
  acuarela: () => {
    const wash = (d, c, o = .7) => `<path d="${d}" fill="${c}" opacity="${o}"/><path d="${d}" fill="none" stroke="${c}" stroke-width="1" opacity=".55" transform="translate(.4 .3)"/>`;
    const ink = (d, w = .5) => LINE(d, "#5a4636", w, 'opacity=".85"');
    return SOFT(138, 64, 24, 2.2, .3) + frame(111, 23, 54, 39, "#efe3cf") + `<rect x="116" y="28" width="44" height="29" fill="#fffdf8"/>` +
      wash("M116 28 H160 V40 C150 42 140 39 130 41 C124 42 120 40 116 41 Z", "#cfe2ec", .55) +
      wash("M116 51 C124 49 134 50 144 49 C150 48.6 156 49.4 160 50 V57 H116 Z", "#e8d9a6", .5) +
      /* gatito naranja sentado */
      wash("M121 54 C120 47 122.4 43.6 127 43.6 C131.6 43.6 134 47 133 54 Z", "#f0a96a", .75) + wash("M122.6 44.4 C121.6 40 123.6 36.4 127.4 36.4 C131.2 36.4 133 40 132 44.4 C130 46 124.6 46 122.6 44.4 Z", "#f0a96a", .8) +
      wash("M123 38.4 L123.4 33.6 L126.4 36.6 Z M131.6 38.4 L131.2 33.6 L128.2 36.6 Z", "#e8925a", .85) +
      `<path d="M132.6 52.6 C136.6 52.4 138 49.4 136.2 46.8" fill="none" stroke="#f0a96a" stroke-width="2.2" stroke-linecap="round" opacity=".75"/>` +
      ink("M124.8 40.6 q.8 -.8 1.6 0M128.6 40.6 q.8 -.8 1.6 0", .55) + ink("M127.2 42.2 l.5 .5 l.5 -.5") + ink("M122 41.6 l-3 -.6M122 42.6 l-3 .4M132.6 41.6 l3 -.6M132.6 42.6 l3 .4", .35) +
      ink("M124 47 q1.4 .6 2.6 0M124.4 50 q1.4 .6 2.6 0", .4) +
      /* gatito gris tumbado, jugando con el ovillo */
      wash("M141 54.6 C140.6 50.4 144.6 48.6 150 48.8 C155.6 49 158.6 51 158.4 54.6 Z", "#a7a9b6", .7) + wash("M151.8 50.4 C150.8 46.6 152.8 43.4 156 43.4 C159 43.6 160.4 46.6 159.6 50 C158 51.4 153.6 51.6 151.8 50.4 Z", "#a7a9b6", .8) +
      wash("M152.6 45 L152.8 40.6 L155.4 43.2 Z M159.2 45 L159.4 40.8 L157 43.2 Z", "#8e90a0", .85) +
      ink("M154.2 46.6 q.7 -.6 1.4 0M157.2 46.6 q.7 -.6 1.4 0", .5) + ink("M155.8 48 l.4 .4 l.4 -.4") +
      `<circle cx="139" cy="53" r="3.2" fill="#e58aa6" opacity=".75"/>` + ink("M136.4 52 q2.6 -2 5 .4M136.6 54 q2.6 -1.6 4.8 .6M138 50.2 q1.4 2.4 .6 5.4", .35) +
      ink("M141.6 54.4 C144 55.6 145.4 55 147 53.8", .4) +
      `<circle cx="119" cy="31" r=".7" fill="#e58aa6" opacity=".6"/><circle cx="157" cy="33" r=".9" fill="#9cc0dc" opacity=".6"/><circle cx="146" cy="31" r=".5" fill="#f0a96a" opacity=".6"/>` +
      ink("M152 55.6 q1.4 -1.2 2.6 0 q1.2 1 2.4 -.4", .35);
  }
});

Object.assign(DECOR.wallR, {
  /* póster de gatito: quieto (sin animaciones), con cinta adhesiva, corazón detrás y título */
  gatitos: () => SOFT(320, 86, 24, 2, .3) + VR(296, 22, 48, 62, 1, "#fbe3e1", { w: 1.3, lc: "#e0b5b0" }) +
    `<path d="M320 70 C306 62 302 50 308 43 C312 38.6 318 40 320 45 C322 40 328 38.6 332 43 C338 50 334 62 320 70 Z" fill="#f6c3cf" opacity=".7"/>` +
    `<svg x="302" y="30" width="36" height="36" viewBox="6 6 92 92">${still(() => noAnim(animalSVG("cat", "Póster", "happy")))}</svg>` +
    `<text x="320" y="78.6" text-anchor="middle" font-family="Georgia,serif" font-weight="bold" font-style="italic" font-size="7.4" fill="#c95b4a">¡Miau!</text>` +
    PAWP(301.6, 76, .6, "#e3a4a8") + PAWP(338.4, 76, .6, "#e3a4a8") + HEART(339, 30, .9, "#e14f6c") +
    `<rect x="293" y="19.6" width="10" height="4.4" fill="#f3e6a6" opacity=".75" transform="rotate(-24 298 22)"/><rect x="337" y="19.6" width="10" height="4.4" fill="#f3e6a6" opacity=".75" transform="rotate(24 342 22)"/>`,
  /* cartel de neón «Abierto»: placa a medida, letras centradas con brillo y tubo de borde */
  neon: () => {
    const word = (sw, c, o) => `<text x="320" y="48.2" text-anchor="middle" font-family="Georgia,serif" font-style="italic" font-weight="bold" font-size="12.4" fill="none" stroke="${c}" stroke-width="${sw}" stroke-linejoin="round" opacity="${o}">Abierto</text>`;
    return `<rect x="284" y="22" width="72" height="44" rx="12" fill="#ff7fb0" opacity=".1"/>` + LINE("M300 29 L306 18M340 29 L334 18", "#8d8a86", .8) + VC(306, 17.6, 1, "#c9c4bd", { w: .5, sh: 0 }) + VC(334, 17.6, 1, "#c9c4bd", { w: .5, sh: 0 }) +
      VR(290, 29, 60, 28, 6, "#2e2630", { w: 1.3 }) + `<rect x="292.4" y="31.4" width="55.2" height="23.2" rx="4.4" fill="none" stroke="#3e3542" stroke-width="1"/>` +
      `<g class="neon-on">` + `<rect x="294.6" y="33.6" width="50.8" height="18.8" rx="3.6" fill="none" stroke="#7fe0d0" stroke-width="2.6" opacity=".25"/><rect x="294.6" y="33.6" width="50.8" height="18.8" rx="3.6" fill="none" stroke="#bff4ec" stroke-width=".9"/>` +
      word(4, "#ff7fb0", .25) + word(2, "#ff7fb0", .6) + word(.8, "#ffe1ee", 1) + `</g>` +
      VC(293.6, 32, .9, "#9a948e", { w: .4, sh: 0 }) + VC(346.4, 32, .9, "#9a948e", { w: .4, sh: 0 });
  },
  /* lámina de anatomía canina: perro de perfil con órganos de colores, columna, costillas y rótulos */
  anatomia: () => {
    /* perro de pie, de perfil (mirando a la izquierda): hocico, cráneo, oreja caída, lomo, cola alzada y cuatro patas */
    const dog = "M301.2 47.8 C301 46.4 302.2 45.6 303.6 45.4 L305.6 43 C306.4 40.6 308.4 39.6 310.4 40 C312.6 40.4 313.8 42 314 44.2 C314.4 46.6 315.4 48.6 317.6 49.6 C322 50.4 328 50.2 333.4 50 C336 50 337.6 51.2 338.2 52.8 C339.6 51 340.4 48.6 340.4 46 L341.8 46.2 C342 49.6 340.8 52.6 338.8 54.8 C338.8 57.6 337.8 60 336.2 61.2 L337 74.4 L333.6 74.4 L332.8 63.4 L330.6 63.6 L330.2 74.4 L326.8 74.4 L326.8 63.2 C323 63.8 320 63.8 318 63.4 L318.2 74.4 L314.8 74.4 L314.4 63 L312.8 62.4 L312.6 74.4 L309.2 74.4 L309.6 60.8 C308.2 58.6 307.8 56 308.4 53.6 C307.6 51.2 306.4 49.6 304.6 49 C303.2 48.8 301.8 48.8 301.2 47.8 Z";
    const t = (x, y, s, a = "start") => `<text x="${x}" y="${y}" text-anchor="${a}" font-family="Georgia,serif" font-size="2.5" fill="#6b5a4a">${s}</text>`;
    const lbl = (x1, y1, x2, y2) => LINE(`M${x1} ${y1} L${x2} ${y2}`, "#a08870", .35) + `<circle cx="${x1}" cy="${y1}" r=".55" fill="#7a5a44"/>`;
    return SOFT(320, 86, 24, 2, .3) + VR(296, 22, 48, 62, 1, "#fbf4e3", { w: 1.3, lc: "#d9c4a4" }) +
      `<rect x="296" y="22" width="48" height="8" fill="#b8473a"/><text x="320" y="27.6" text-anchor="middle" font-family="Georgia,serif" font-size="3.3" font-weight="bold" letter-spacing=".2" fill="#fbf7ef">ANATOMÍA DEL PERRO</text>` +
      LINE("M298 31.6 h44", "#e2cdb0", .5) +
      VP(dog, "#f2e2cc", { w: 1, lc: "#a88a6a", hl: 0 }) + VP("M310 41.6 C312.4 42.4 313.4 45.4 312.8 48.6 C311.4 48 310.2 46 310 41.6 Z", "#d9bf9c", { w: .7, lc: "#a88a6a", sh: 0, hl: 0 }) +
      `<circle cx="306.6" cy="44.2" r=".7" fill="#3a2418"/><ellipse cx="301.6" cy="46.9" rx=".9" ry=".7" fill="#3a2418"/>` +
      LINE("M313.4 45.6 C315 48.4 317 50.4 320 51 C326 51.6 332 51.2 337.4 52.6", "#c9b08a", 1.1, 'stroke-dasharray=".9 .6"') +
      LINE("M319.2 51.4 q-1.2 3.4 -.2 7M322 51.6 q-1.2 3.6 -.2 7.2M324.8 51.6 q-1.2 3.4 -.2 6.8", "#e2cdb0", .55) +
      `<ellipse cx="309.4" cy="43" rx="2" ry="1.6" fill="#f2b8c6"/>` +
      `<path d="M316.6 52.2 C318.6 51 322.6 51.2 323.8 53.2 C324.4 55.4 321.8 56.8 318.8 56.4 C317 56 316 54.2 316.6 52.2 Z" fill="#f4a3b4" opacity=".92"/>` +
      `<path d="M319.4 56.2 C320.4 55.4 322 55.8 322.2 57 C322.4 58.4 321 59.8 320 60.2 C319 59.6 318.4 58.4 318.6 57.4 C318.8 56.8 319 56.4 319.4 56.2 Z" fill="#d6404f"/>` +
      `<path d="M323 57.4 C325.4 56.6 328.2 57 328.6 58.6 C328.8 60.2 325.8 61 323.6 60.6 C322.8 59.8 322.6 58.2 323 57.4 Z" fill="#9a4a3a"/>` +
      `<ellipse cx="329.8" cy="55.6" rx="2.2" ry="1.6" fill="#f0b07a"/>` +
      `<path d="M327.4 61.4 c1 -1 2.6 -1 3 0 c.5 1 -.8 1.8 -1.6 1.1 c-.8 -.7 .2 -1.8 1.4 -1.5 c1.4 .4 2 1.4 3 1 c1 -.4 1 -1.6 2 -1.5" fill="none" stroke="#f2c0a8" stroke-width="1.3" stroke-linecap="round"/>` +
      `<ellipse cx="332.4" cy="52.8" rx="1" ry=".75" fill="#a4405a"/><ellipse cx="334.6" cy="53.2" rx="1" ry=".75" fill="#a4405a"/>` +
      lbl(309.4, 43, 305, 37.4) + t(297.8, 36.8, "cerebro") + lbl(319, 53, 319, 37.4) + t(314.6, 36.8, "pulmón") +
      lbl(329.8, 55.6, 333, 37.4) + t(342.2, 36.8, "estómago", "end") + lbl(333.4, 53, 340, 41.2) + t(342.2, 40.6, "riñón", "end") +
      lbl(320.2, 58, 305, 77.6) + t(297.8, 80.4, "corazón") + lbl(326, 59.4, 321.6, 77.6) + t(317.6, 80.4, "hígado") + lbl(332, 62, 337.4, 77.6) + t(342.2, 80.4, "intestino", "end") +
      VC(320, 23.4, 1.1, "#e2b65e", { w: .5, sh: 0 });
  }
});

/* gato de la suerte (maneki-neko) sobre su cojín, con la pata que saluda, collar con cascabel y moneda; al lado, un bambú de la suerte */
DECOR.shelf.maneki = () => {
  const W = "#fbf7ef", o = { lc: "#d6cbbd" };
  return SHELF +
    VP("M114 96.4 C114 92.4 116.4 91.2 128 91.2 C139.6 91.2 142 92.4 142 96.4 Z", "#c8352c", { w: 1 }) + VC(114.4, 95.6, 1.2, "#e2b65e", { w: .5, sh: 0 }) + VC(141.6, 95.6, 1.2, "#e2b65e", { w: .5, sh: 0 }) +
    VP("M118.4 92 C116.8 84 118.6 77 128 76.6 C137.4 77 139.2 84 137.6 92 Z", W, o) +
    `<path d="M131 79 C134.6 79.4 136.6 82 136.6 85.4 C134 84 132.4 82 131 79 Z" fill="#e8a65a" opacity=".85"/>` +
    `<g class="wave" style="transform-origin:135.6px 80px">${VP("M133.2 82 C136.2 80.4 137.6 76 137.4 70.6 C137.4 68.6 139.8 67.8 140.8 69.6 C141.6 72 141 77 139 81.4 C137.8 83.6 135 84.4 133.2 82 Z", W, o)}${LINE("M138.4 68.6 v1.6M140 68.8 v1.4", "#d6cbbd", .5)}<ellipse cx="139.4" cy="71.4" rx=".9" ry=".7" fill="#f2b5c4"/></g>` +
    VE(124.6, 85.6, 4.2, 5.2, "#f0c25e", { w: .9, lc: "#b88a2a" }) + `<path d="M122.6 84.4 h4M122.6 86.8 h4M124.6 82.6 v6" stroke="#b88a2a" stroke-width=".6"/>` +
    VP("M119.4 86.4 C119 83.6 120.6 82.2 122.6 83 C123.6 84.6 123.4 86.6 121.6 88 C120.4 88.2 119.6 87.6 119.4 86.4 Z", W, o) +
    VP("M119 72 L120.4 63.4 L125 68.6 Z", W, o) + VP("M137 72 L135.6 63.4 L131 68.6 Z", W, o) + `<path d="M120.6 69.8 L121.2 65.6 L123.4 68.4 Z M135.4 69.8 L134.8 65.6 L132.6 68.4 Z" fill="#f2b5c4"/>` +
    VE(128, 71.6, 9.4, 7.8, W, o) +
    `<path d="M121.4 67.6 C123.4 65.6 126 65.6 127 67.4 C125.6 68.6 123.4 69 121.4 67.6 Z" fill="#e8a65a" opacity=".9"/><path d="M133.2 66.8 C135 67.2 136.4 68.6 136.4 70.2 C135 70.4 133.6 69.4 133.2 66.8 Z" fill="#3a3536" opacity=".85"/>` +
    LINE("M123.4 71.2 q1.4 -1.4 2.8 0M129.8 71.2 q1.4 -1.4 2.8 0", "#3a2418", .9) + `<ellipse cx="128" cy="73.4" rx=".9" ry=".7" fill="#e58a9a"/>` + LINE("M126.6 74.6 q.7 .7 1.4 0 q.7 .7 1.4 0", "#3a2418", .6) +
    LINE("M121.6 73.2 l-3.4 -.6M121.6 74.4 l-3.4 .6M134.4 73.2 l3.4 -.6M134.4 74.4 l3.4 .6", "#9a8a7a", .4) + `<ellipse cx="123" cy="74" rx="1.6" ry="1" fill="#f2b5c4" opacity=".7"/><ellipse cx="133" cy="74" rx="1.6" ry="1" fill="#f2b5c4" opacity=".7"/>` +
    `<path d="M120.6 78.4 C124 80 132 80 135.4 78.4 L135.2 80.2 C132 81.8 124 81.8 120.8 80.2 Z" fill="#c8352c"/>` + VC(128, 81.6, 1.9, "#f0c25e", { w: .7, sh: 0 }) +
    /* bambú de la suerte en una macetita */
    VP("M150 96.4 L151 89.6 L163 89.6 L164 96.4 Z", "#5f84a8", { w: 1 }) + LINE("M150.8 91.4 h12.4", "#8fb0cf", .8) +
    [[154, 89.6, 70.6, "#7fae5a"], [157, 89.6, 66, "#6f9e4a"], [160, 89.6, 72.6, "#7fae5a"]].map(([x, y0, y1, c]) => LINE(`M${x} ${y0} L${x} ${y1}`, darken(c, .7), 2.8) + LINE(`M${x} ${y0} L${x} ${y1}`, c, 1.8) + LINE(`M${x - 1} ${(y0 + y1) / 2} h2M${x - 1} ${y1 + 6} h2`, darken(c, .7), .5)).join("") +
    VP("M157 70 C152 66 151 63 152 61 C155 62 157 65 157 70 Z", "#8fcf6a", { w: .7 }) + VP("M160 74 C164 70 166 68 167 66 C164 66.4 161 69 160 74 Z", "#8fcf6a", { w: .7 }) + VP("M154 75 C150 72 149 70 149.4 68 C152 69 153.6 71.6 154 75 Z", "#8fcf6a", { w: .7 });
};

/* calabazas: montón con hojas y zarcillos, alfombra con forma de calabaza, calabaza tallada que brilla y mantita de la camilla */
DECOR.plant.calabazas = () => SOFT(338, 188, 28, 3.4, .55) + pumpkin(338, 163, 10.4, 8.2, { leaf: 1, c: "#f0a04a" }) + pumpkin(325, 177.4, 13, 9.4, { leaf: 1 }) + pumpkin(351.4, 179.4, 10.6, 8, { c: "#e57a32" }) + pumpkin(309.6, 183.6, 5.4, 4, { c: "#f3e6cf", w: .9 });
DECOR.rug.r_calabaza = () => {
  const k = "dc" + (dcK++), cx = 160, cy = 217, rx = 92, ry = 16.4;
  let outline = "";
  for (let i = 0; i <= 10; i++) { const a = Math.PI * 2 * i / 10 - Math.PI / 2, x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a); if (!i) outline = `M${x.toFixed(1)} ${y.toFixed(1)}`; else { const m = a - Math.PI / 10; outline += ` Q${(cx + rx * 1.09 * Math.cos(m)).toFixed(1)} ${(cy + ry * 1.12 * Math.sin(m)).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`; } }
  outline += " Z";
  return SOFT(cx, cy + 3, rx + 4, ry * .9, .35) + VP(outline, "#e8873f", { w: 1.4, hl: .4 }) +
    `<defs><clipPath id="${k}r"><path d="${outline}"/></clipPath></defs><g clip-path="url(#${k}r)">` +
    [-62, -32, 0, 32, 62].map(dx => LINE(`M${cx + dx} ${cy - ry - 2} Q${cx + dx * 1.18} ${cy} ${cx + dx} ${cy + ry + 2}`, "#c9682a", 1.4, 'opacity=".7"')).join("") +
    LINE(`M${cx - rx + 8} ${cy} Q${cx} ${cy - ry * 1.9} ${cx + rx - 8} ${cy}`, "#f4a964", 1, 'stroke-dasharray="2 2" opacity=".6"') + `</g>` +
    VP(`M${cx - 4} ${cy - ry + 1} L${cx - 3} ${cy - ry - 5} L${cx + 4} ${cy - ry - 6} L${cx + 4.4} ${cy - ry - 3} L${cx + 3} ${cy - ry + 1} Z`, "#7a5638", { w: 1 }) +
    VP(`M${cx + 6} ${cy - ry - 2} C${cx + 14} ${cy - ry - 8} ${cx + 24} ${cy - ry - 5} ${cx + 26} ${cy - ry} C${cx + 18} ${cy - ry + 1} ${cx + 12} ${cy - ry} ${cx + 6} ${cy - ry - 2} Z`, "#7fae5a", { w: 1 }) +
    `<path d="M${cx - 30} ${cy - 3} l7 -4.6 l7 4.6 Z M${cx + 16} ${cy - 3} l7 -4.6 l7 4.6 Z" fill="#4a2f45"/><path d="M${cx - 22} ${cy + 4} Q${cx} ${cy + 12} ${cx + 22} ${cy + 4} L${cx + 15} ${cy + 6.4} L${cx + 9} ${cy + 4.6} L${cx + 3} ${cy + 7.4} L${cx - 3} ${cy + 5} L${cx - 9} ${cy + 7.4} L${cx - 15} ${cy + 5} Z" fill="#4a2f45"/>`;
};
DECOR.sill.calabaza = () => `<ellipse class="glow" cx="56" cy="82" rx="18" ry="13" fill="url(#gGlow)" opacity=".6"/>` + SOFT(56, 92, 13, 1.6, .5) + pumpkin(56, 84.4, 11.6, 8.4, { face: 1, leaf: 1 });
TABLES.t_halloween = () => TABLES.metal() + VP("M204 146 h118 v12 l-8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6Z", "#3a2f45", { w: 1.2 }) + [218, 263, 308].map(x => miniPumpkin(x, 153.4, 1.5, "#e8873f")).join("");
/* la tortuga, más pequeña (cabe al lado del personaje sin taparlo) */
DECOR.pet.tortuga = (orig => () => `<g transform="translate(48 234) scale(.64) translate(-48 -234)">${orig()}</g>`)(DECOR.pet.tortuga);
