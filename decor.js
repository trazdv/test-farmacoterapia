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
