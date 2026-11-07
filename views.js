"use strict";
/* ================= VISTAS DE LA VENTANA (animadas) Y CORTINAS =================
   La ventana ocupa x 20..92, y 24..92 (se recorta en sceneSVG). */
let vwK = 0;
const vGrad = (id, a, b, c) => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/>${c ? `<stop offset=".6" stop-color="${b}"/><stop offset="1" stop-color="${c}"/>` : `<stop offset="1" stop-color="${b}"/>`}</linearGradient>`;
const vCloud = (x, y, s, dur, delay, c = "#ffffff") => `<g class="w-drift" style="animation-duration:${dur}s;animation-delay:${delay}s"><g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="9" ry="4.6" fill="${c}"/><ellipse cx="-5" cy="-2.6" rx="5" ry="4.4" fill="${c}"/><ellipse cx="3" cy="-4.2" rx="5.6" ry="5" fill="${c}"/><ellipse cx="0" cy="1.6" rx="9" ry="2.6" fill="#c9d8e8" opacity=".45"/></g></g>`;
const vBird = (x, y, dur, delay, c = "#4a3f4a") => { const a = `M${x} ${y} q2 -2.2 4 0 q2 -2.2 4 0`, b = `M${x} ${y} q2 1 4 0 q2 1 4 0`; return `<g class="w-fly" style="animation-duration:${dur}s;animation-delay:${delay}s"><path d="${a}" fill="none" stroke="${c}" stroke-width="1" stroke-linecap="round">${MORPH([a, b, a], .5)}</path></g>`; };
const vTree = (x, y, r, c) => `<path d="M${x} ${y + r * .6} v${r * .9}" stroke="#7a5638" stroke-width="${r * .28}" stroke-linecap="round"/>` + `<g class="w-grass" style="animation-duration:${4 + r * .2}s"><circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><circle cx="${x - r * .5}" cy="${y + r * .3}" r="${r * .7}" fill="${c}"/><circle cx="${x + r * .45}" cy="${y + r * .25}" r="${r * .65}" fill="${darken(c, .9)}"/><circle cx="${x - r * .3}" cy="${y - r * .35}" r="${r * .4}" fill="${lighten(c, .25)}" opacity=".8"/></g>`;
const vPine = (x, y, h, c, snow) => `<path d="M${x} ${y} l${-h * .38} ${h * .55} h${h * .2} l${-h * .26} ${h * .4} h${h * .88} l${-h * .26} ${-h * .4} h${h * .2}Z" fill="${c}"/><path d="M${x} ${y + h * .95} v${h * .12}" stroke="#6b4430" stroke-width="${h * .1}"/>` + (snow ? `<path d="M${x} ${y} l${-h * .2} ${h * .3} q${h * .2} ${-h * .06} ${h * .4} 0Z" fill="#fbfdff"/><path d="M${x - h * .22} ${y + h * .55} q${h * .22} ${-h * .08} ${h * .44} 0" stroke="#fbfdff" stroke-width="${h * .08}" fill="none" stroke-linecap="round"/>` : "");
function windowView(id) {
  const k = "w" + (vwK++);
  let d = "", v = "";
  switch (id) {
    case "ciudad":
      d = vGrad(k + "s", "#a9d0ec", "#e9f1f2");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle cx="34" cy="36" r="5" fill="#fbe39a"/>${vCloud(60, 34, .7, 46, -10)}${vCloud(30, 30, .5, 60, -40)}
        ${[[20, 52, 10, "#b8c4d4"], [30, 46, 8, "#aab8ca"], [38, 50, 12, "#b8c4d4"], [50, 40, 9, "#a7b4c6"], [59, 48, 12, "#b5c1d2"], [71, 42, 10, "#aab8ca"], [81, 50, 11, "#b8c4d4"]].map(([x, y, w, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${92 - y}" fill="${c}"/>`).join("")}
        ${[[20, 62, 12, "#c99a72"], [33, 56, 10, "#d6b08a"], [43, 66, 13, "#b8805e"], [57, 54, 14, "#e2c39a"], [72, 60, 11, "#c9906a"], [83, 64, 10, "#d6a882"]].map(([x, y, w, c], i) => `<rect x="${x}" y="${y}" width="${w}" height="${92 - y}" fill="${c}"/><rect x="${x}" y="${y}" width="${w}" height="2" fill="${darken(c, .8)}"/>` + [0, 1, 2, 3].map(r => [0, 1].map(cc => `<rect x="${x + 2 + cc * (w - 6)}" y="${y + 5 + r * 7}" width="2.4" height="3.6" fill="${(i + r + cc) % 4 === 0 ? "#fbe39a" : "#9fc4dc"}" ${(i + r + cc) % 4 === 0 ? `class="twinkle" style="animation-duration:${3 + r}s"` : ""}/>`).join("")).join("")).join("")}
        <path d="M24 92 v-8 h-1.4 v-1 h4 v1 h-1.4 v8Z" fill="#3a3a40"/><circle cx="25" cy="82" r="2.2" fill="#fbe39a" opacity=".5"/>
        <g class="w-fly" style="animation-duration:22s;animation-delay:-6s"><path d="M30 31 l6 0 l2 -1.6 l1 0 l-1 2.2 l-8 .6Z" fill="#fbfdff" stroke="#8a95a5" stroke-width=".4"/><circle class="twinkle" cx="31" cy="31.6" r=".6" fill="#e14f4f" style="animation-duration:1s"/></g>${vBird(26, 40, 14, -3)}`;
      break;
    case "mar":
      d = vGrad(k + "s", "#8cc8ec", "#d9eef5") + vGrad(k + "w", "#5fa7cf", "#3f86b4") + `<pattern id="${k}p" width="16" height="6" patternUnits="userSpaceOnUse"><path d="M0 3 q4 -3 8 0 t8 0" fill="none" stroke="#e8f6fb" stroke-width=".9" opacity=".8"/></pattern>`;
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle class="w-pulse" cx="70" cy="44" r="13" fill="url(#gGlow)" opacity=".5"/><circle cx="70" cy="44" r="6.5" fill="#fbe39a"/>${vCloud(36, 34, .6, 50, -15)}${vCloud(74, 30, .45, 64, -45)}
        <path d="M20 60 q10 -6 18 -1 q6 -4 12 1 V64 H20Z" fill="#8fb39a"/><path d="M27 58 v-7 M27 51 q-4 -1 -6 1 M27 51 q4 -2 6 0 M27 51 q-2 -3 -5 -3 M27 51 q3 -3 5 -2" stroke="#4f7a52" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <rect x="20" y="62" width="72" height="30" fill="url(#${k}w)"/>
        <g class="w-wave"><rect x="20" y="64" width="96" height="6" fill="url(#${k}p)"/><rect x="12" y="72" width="96" height="6" fill="url(#${k}p)" opacity=".8"/><rect x="20" y="80" width="96" height="6" fill="url(#${k}p)" opacity=".6"/></g>
        ${[0, 1, 2, 3].map(i => `<rect class="twinkle" x="${66 + (i % 2) * 3}" y="${64 + i * 4}" width="${7 - i}" height="1" rx=".5" fill="#fff6c8" style="animation-delay:${i * .4}s"/>`).join("")}
        <g class="w-bob"><path d="M40 70 l9 -15 v15Z" fill="#fbf7ef" stroke="#8a7f74" stroke-width=".5"/><path d="M50 70 l5 -10 v10Z" fill="#f2b5a0" stroke="#8a7f74" stroke-width=".5"/><path d="M36 70 h22 l-3.4 4 h-15Z" fill="#c95b4a"/><path d="M49 55 v15" stroke="#6b4430" stroke-width=".9"/></g>
        ${vBird(48, 38, 16, -4, "#fbfdff")}${vBird(30, 44, 19, -11, "#fbfdff")}
        <path d="M20 86 q18 -5 36 0 q18 -4 36 0 V92 H20Z" fill="#efd9ae"/><circle cx="34" cy="89" r=".9" fill="#f2b5a0"/><circle cx="74" cy="88.6" r=".8" fill="#fbf7ef"/>`;
      break;
    case "otono":
      d = vGrad(k + "s", "#f6c99a", "#fbe8cf");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle cx="72" cy="38" r="6" fill="#f6b45a"/>${vCloud(40, 34, .6, 55, -20, "#fff6ea")}
        <path d="M20 66 q14 -10 30 -4 q14 -9 42 0 V92 H20Z" fill="#d9a56a"/><path d="M20 76 q24 -8 46 0 q12 -4 26 0 V92 H20Z" fill="#c9884f"/>
        ${vTree(32, 62, 9, "#d9733f")}${vTree(56, 58, 10, "#e8a03f")}${vTree(80, 64, 9, "#c0453a")}
        <path d="M20 86 h72" stroke="#a8724a" stroke-width="1.2"/>${[24, 34, 44, 54, 64, 74, 84].map(x => `<rect x="${x}" y="80" width="2" height="9" fill="#a8724a"/>`).join("")}
        ${[[28, "#d9733f", 0], [44, "#e8a03f", -2], [60, "#c0453a", -4], [72, "#e8a03f", -1], [86, "#d9733f", -5], [38, "#c0453a", -6]].map(([x, c, dl]) => `<g class="w-leaf" style="animation-duration:${6 + (x % 4)}s;animation-delay:${dl}s"><path d="M${x} 28 q2 -2 4 0 q-2 2 -4 0Z" fill="${c}"/></g>`).join("")}`;
      break;
    case "nieve":
      d = vGrad(k + "s", "#c9d8e6", "#eef3f6");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/>${vCloud(50, 32, .8, 70, -20, "#f4f7fa")}
        <path d="M20 68 q16 -12 34 -2 q16 -10 38 2 V92 H20Z" fill="#fbfdff"/><path d="M20 78 q22 -6 44 0 q14 -4 28 0 V92 H20Z" fill="#eef4f8"/>
        ${vPine(30, 54, 18, "#4f7a5f", 1)}${vPine(44, 58, 14, "#5f8a6b", 1)}${vPine(84, 56, 16, "#4f7a5f", 1)}
        <rect x="60" y="66" width="16" height="12" fill="#a8724a"/><path d="M58 67 l10 -8 l10 8Z" fill="#fbfdff" stroke="#c9d3d9" stroke-width=".6"/><rect x="65" y="70" width="5" height="5" fill="#fbe39a"/><rect x="72" y="58" width="3" height="6" fill="#7a5638"/>
        ${[0, 1, 2].map(i => `<circle class="w-smoke" cx="73.5" cy="56" r="2" fill="#e6ebef" style="animation-delay:${-i * 1.3}s"/>`).join("")}
        ${Array.from({ length: 16 }, (_, i) => `<circle class="w-snow" cx="${22 + (i * 37) % 70}" cy="${26 + (i * 13) % 20}" r="${.8 + (i % 3) * .35}" fill="#fff" style="animation-duration:${5 + (i % 5)}s;animation-delay:${-i * .7}s"/>`).join("")}`;
      break;
    case "noche":
      d = vGrad(k + "s", "#1c2340", "#3a3f66");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle class="w-pulse" cx="70" cy="40" r="14" fill="url(#gGlow)" opacity=".35"/><circle cx="70" cy="40" r="7.5" fill="#f6edd2"/><circle cx="73.5" cy="38" r="6.5" fill="#262d4c"/>
        ${[[28, 32], [40, 44], [52, 30], [36, 56], [84, 58], [48, 64], [60, 50], [26, 48], [88, 34]].map(([x, y], i) => `<circle class="twinkle" cx="${x}" cy="${y}" r="${.7 + (i % 3) * .3}" fill="#f6edd2" style="animation-delay:${i * .37}s"/>`).join("")}
        <g class="w-shoot"><path d="M64 28 l8 -4" stroke="#fff" stroke-width="1" stroke-linecap="round"/></g>
        <path d="M20 76 q20 -8 40 0 q16 -6 32 0 V92 H20Z" fill="#161b30"/><rect x="34" y="70" width="12" height="10" fill="#1b2138"/><path d="M33 71 l7 -6 l7 6Z" fill="#1b2138"/><rect x="37.5" y="73" width="3" height="3" fill="#fbe39a"/>
        ${[[56, 80], [70, 84], [80, 78], [46, 86]].map(([x, y], i) => `<circle class="w-firefly" cx="${x}" cy="${y}" r=".9" fill="#e8f58a" style="animation-delay:${-i * .8}s"/>`).join("")}`;
      break;
    case "luna":
      d = vGrad(k + "s", "#3a2f4f", "#6a4f86");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle class="w-pulse" cx="62" cy="44" r="20" fill="url(#gGlow)" opacity=".45"/><circle cx="62" cy="44" r="12" fill="#f2b45a"/><circle cx="58" cy="40" r="2" fill="#e09a42"/><circle cx="66" cy="48" r="3" fill="#e09a42"/>
        <g class="w-fog"><path d="M14 74 q12 -4 24 0 q12 -4 24 0 q12 -4 24 0 q12 -4 24 0 V80 H14Z" fill="#d8c8e8" opacity=".25"/></g>
        <path d="M20 82 q20 -6 40 0 q16 -4 32 0 V92 H20Z" fill="#241c30"/><path d="M76 82 v-14 h12 v14Z M74 69 l8 -7 l8 7Z" fill="#241c30"/><rect class="twinkle" x="79" y="72" width="2.4" height="3" fill="#f3b04f" style="animation-duration:1.4s"/><rect x="84" y="72" width="2.4" height="3" fill="#f3b04f" opacity=".7"/>
        <path d="M32 84 v-16 M32 72 l-6 -6 M32 68 l5 -7 M28 66 l-3 1 M36 63 l3 -2" stroke="#241c30" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        ${[[34, 36, 12, -2], [48, 30, 15, -8], [40, 52, 18, -12]].map(([x, y, dur, dl]) => `<g class="w-fly" style="animation-duration:${dur}s;animation-delay:${dl}s"><g transform="translate(${x} ${y})"><path d="M-6 0 q3 -4 5 -1 q1 -2.6 1 -2.6 q0 0 1 2.6 q2 -3 5 1 q-4 0 -5 3 q-1 -1.4 -2 0 q-1 -3 -5 -3Z" fill="#241c30">${ANIT("scale", "1 1;1 .4;1 1", .4)}</path></g></g>`).join("")}
        <ellipse cx="46" cy="88" rx="4" ry="3" fill="#e8873f"/><ellipse class="w-pulse" cx="46" cy="88" rx="7" ry="5" fill="url(#gGlow)" opacity=".5"/>`;
      break;
    case "sakura":
      d = vGrad(k + "s", "#f3d9e2", "#fbf1ee");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle cx="76" cy="36" r="5" fill="#f8d77a" opacity=".9"/>${vCloud(40, 32, .6, 60, -25, "#fff8fa")}
        <path d="M20 70 l18 -26 l12 14 l14 -18 l28 30 Z" fill="#b5bfd6"/><path d="M50 44 l-5 6 q5 -1 10 0Z M64 40 l-5 6 q5 -1 9 1Z" fill="#fbfdff"/>
        <path d="M20 78 q30 -8 72 0 V92 H20Z" fill="#a9c49a"/><path d="M20 84 q20 -3 36 1 q20 4 36 -1 V88 H20Z" fill="#9cc0dc"/>
        ${[[30, 70, 9], [48, 74, 8], [80, 72, 10]].map(([x, y, r]) => `<path d="M${x} ${y + 4} v10" stroke="#6b4430" stroke-width="2.2"/>` + `<circle cx="${x}" cy="${y}" r="${r}" fill="#f2b5c4"/><circle cx="${x + r * .5}" cy="${y + 2}" r="${r * .7}" fill="#e9a1b5"/><circle cx="${x - r * .4}" cy="${y - r * .3}" r="${r * .5}" fill="#f8d0da"/>`).join("")}
        ${[[26, -1], [40, -3], [54, -5], [66, -2], [78, -6], [88, -4], [34, -7]].map(([x, dl]) => `<g class="w-leaf" style="animation-duration:${7 + (x % 3)}s;animation-delay:${dl}s"><ellipse cx="${x}" cy="28" rx="1.4" ry=".9" fill="#f6b4c6"/></g>`).join("")}`;
      break;
    case "pueblo":
      d = vGrad(k + "s", "#8cc8ec", "#d9eef5") + vGrad(k + "w", "#4f96c8", "#2f6fa0");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle cx="76" cy="34" r="5.5" fill="#fbe39a"/>${vCloud(40, 32, .55, 52, -18)}
        <rect x="20" y="70" width="72" height="22" fill="url(#${k}w)"/><g class="w-wave">${[72, 78, 84].map(y => `<path d="M14 ${y} q4 -2 8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0 t8 0" fill="none" stroke="#dff1fb" stroke-width=".7" opacity=".7"/>`).join("")}</g>
        <path d="M20 72 L20 56 Q36 50 56 58 L56 72Z" fill="#e6d9c2"/>
        ${[[22, 60, 10, 8], [32, 56, 9, 9], [41, 60, 10, 8], [26, 66, 12, 6], [40, 66, 11, 6], [50, 62, 7, 10]].map(([x, y, w, hh], i) => `<rect x="${x}" y="${y}" width="${w}" height="${hh}" fill="#fbf8f2" stroke="#d9cbb5" stroke-width=".4"/><rect x="${x + w / 2 - 1.2}" y="${y + hh - 4}" width="2.4" height="4" fill="${i % 2 ? "#4f7fae" : "#5f8a55"}"/>` + (i === 1 ? `<path d="M${x} ${y} q${w / 2} -6 ${w} 0Z" fill="#4f7fae"/>` : "")).join("")}
        ${[[28, 58], [44, 58], [52, 60]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2" fill="#d9568a"/><circle cx="${x + 1.6}" cy="${y + 1}" r="1.4" fill="#e47aa3"/>`).join("")}
        <g class="w-bob"><path d="M66 76 l7 -11 v11Z" fill="#fbf7ef"/><path d="M63 76 h16 l-2.6 3 h-11Z" fill="#c0453a"/></g><g class="w-bob" style="animation-delay:-1.4s"><path d="M80 82 l5 -8 v8Z" fill="#fbf7ef"/><path d="M78 82 h12 l-2 2.4 h-8Z" fill="#4f7fae"/></g>
        ${vBird(60, 40, 17, -6, "#fbfdff")}`;
      break;
    case "desierto":
      d = vGrad(k + "s", "#f7c88a", "#fbe9c8");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle class="w-pulse" cx="70" cy="40" r="16" fill="url(#gGlow)" opacity=".5"/><circle cx="70" cy="40" r="8" fill="#f6c45a"/>
        <path d="M20 70 h12 v-14 h14 v14 h8 V92 H20Z" fill="#c9764e"/><path d="M60 72 h8 v-10 h12 v10 h12 V92 H60Z" fill="#b86a45"/><path d="M33 56 h12 v2 h-12Z M69 62 h10 v2 h-10Z" fill="#a85f3a" opacity=".6"/>
        <path d="M20 84 q36 -6 72 0 V92 H20Z" fill="#e6c08a"/>
        <path d="M50 88 v-16 M50 80 h-4 v-5 M50 78 h4 v-6" stroke="#5f8a55" stroke-width="2.6" stroke-linecap="round" fill="none"/><path d="M84 88 v-9 M84 83 h3 v-3" stroke="#6f9e6b" stroke-width="2" stroke-linecap="round" fill="none"/>
        <g class="w-roll" style="animation-duration:11s;animation-delay:-3s"><g class="w-spin-fast"><circle cx="24" cy="86" r="3" fill="none" stroke="#a8824a" stroke-width=".9"/><path d="M22 84 l4 4 M26 84 l-4 4 M24 83 v6" stroke="#a8824a" stroke-width=".7"/></g></g>
        ${vBird(40, 34, 20, -8, "#6b4430")}`;
      break;
    default: /* campo */
      d = vGrad(k + "s", "#9fd0ee", "#e6f4ef");
      v = `<rect x="20" y="24" width="72" height="68" fill="url(#${k}s)"/><circle class="w-pulse" cx="74" cy="38" r="13" fill="url(#gGlow)" opacity=".55"/><circle cx="74" cy="38" r="6.5" fill="#f8d77a"/>
        ${vCloud(34, 34, .7, 48, -12)}${vCloud(64, 30, .5, 62, -40)}
        <path d="M20 62 q12 -10 26 -4 q12 -8 24 -2 q10 -5 22 0 V92 H20Z" fill="#b5d2bd"/><path d="M20 70 q18 -8 34 -2 q16 -7 38 1 V92 H20Z" fill="#9cc08a"/><path d="M20 80 q20 -6 40 0 q18 -5 32 0 V92 H20Z" fill="#86b06e"/>
        <rect x="64" y="64" width="12" height="9" fill="#c0453a"/><path d="M62.5 65 l7.5 -6 l7.5 6Z" fill="#8a3a32"/><rect x="68.5" y="68" width="3" height="5" fill="#fbf7ef"/>
        ${vTree(34, 66, 6, "#6f9e6b")}${vTree(84, 70, 5, "#5f8e5c")}
        <path d="M20 86 h72" stroke="#c9a26f" stroke-width="1"/>${[26, 38, 50, 62, 74, 86].map(x => `<rect x="${x}" y="82" width="1.6" height="8" fill="#c9a26f"/>`).join("")}
        ${[[30, 89, "#f29b8a"], [46, 90, "#f3d36b"], [58, 88.6, "#fbf7ef"], [70, 90, "#e58aa6"], [80, 89, "#f3d36b"]].map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="1" fill="${c}"/>`).join("")}
        ${vBird(30, 44, 15, -5)}${vBird(40, 40, 18, -11)}
        <g class="w-fly" style="animation-duration:25s;animation-delay:-7s"><g transform="translate(26 78)"><path d="M0 0 q-2 -2 -3 0 q1 2 3 0 q2 -2 3 0 q-1 2 -3 0" fill="#f3d36b">${ANIT("scale", "1 1;.3 1;1 1", .3)}</path></g></g>`;
  }
  return `<defs>${d}</defs>${v}`;
}

/* ---------- cortinas ---------- */
function drapeFolds(x0, x1, y0, y1, c, n = 4) {
  let s = "";
  for (let i = 1; i < n; i++) { const x = x0 + (x1 - x0) * i / n; s += `<path d="M${x} ${y0} C${x - 1.5} ${y0 + (y1 - y0) * .4} ${x + 1.5} ${y0 + (y1 - y0) * .7} ${x} ${y1}" stroke="${i % 2 ? darken(c, .78) : lighten(c, .3)}" stroke-width="${i % 2 ? 1.4 : 1}" fill="none" opacity=".75"/>`; }
  return s;
}
function curtainsSVG(id, k) {
  if (!id) return "";
  const it = findItem("curtains", id); if (!it) return "";
  const c = it.c || "#e6a77f", st = it.st || "open";
  const fill = it.pat ? `url(#${k}g)` : c;
  const defs = it.pat ? `<defs>${patternDef(k + "g", it.pat, it.pbg || "#fbf2e8", it.pc || c)}</defs>` : "";
  const o = { lc: c };
  switch (st) {
    case "closed":
      return defs + `<g class="w-billow" style="animation-delay:-1s">${VP("M12 19 L57 19 C57 40 56 70 57 97 L12 97 C13 70 12 40 12 19Z", fill, o)}${drapeFolds(12, 57, 21, 96, c, 5)}</g>` +
        `<g class="w-billow">${VP("M55 19 L100 19 C100 40 99 70 100 97 L55 97 C56 70 55 40 55 19Z", fill, o)}${drapeFolds(55, 100, 21, 96, c, 5)}</g>` +
        `<rect x="12" y="19" width="88" height="78" fill="url(#gGlow)" opacity=".18"/>` + LINE("M56 22 L56 96", "#fff4d8", 1.2, 'opacity=".55"');
    case "half":
      return defs + VP("M18 22 L94 22 L94 50 Q75 56 56 50 Q37 56 18 50 Z", fill, o) + [30, 38, 46].map(y => LINE(`M18 ${y} Q56 ${y + 4} 94 ${y}`, darken(c, .82), 1, 'opacity=".6"')).join("") + LINE("M88 50 L88 62", "#c9a26f", 1) + VC(88, 63, 1.6, "#c9a26f", { w: .6, sh: 0 });
    case "blind":
      return Array.from({ length: 10 }, (_, i) => VR(19, 23 + i * 4, 74, 3.4, .8, c, { w: .7, hl: 0 })).join("") + LINE("M34 22 V64M78 22 V64", "#efe3cf", .7) + VR(18, 63, 76, 3, 1, darken(c, .85), { w: .8 }) + LINE("M90 64 L90 76", "#efe3cf", .8) + VC(90, 77, 1.4, "#c9a26f", { w: .5, sh: 0 });
    case "bamboo":
      return VR(18, 22, 76, 28, 1, "#d9b878", { w: 1, hl: 0 }) + Array.from({ length: 13 }, (_, i) => LINE(`M18 ${24 + i * 2} H94`, "#b8955a", .5)).join("") + VE(56, 50, 39, 3, "#c9a463", { w: 1 }) + LINE("M30 22 V53M82 22 V53", "#8a3a32", 1.2);
    case "sheer":
      return `<defs>${patternDef(k + "l", "flores", "#ffffff", "#ffffff")}</defs><g class="w-billow"><path d="M20 22 L92 22 L92 92 L20 92Z" fill="#fbfdff" opacity=".42"/><path d="M20 22 L92 22 L92 92 L20 92Z" fill="url(#${k}l)" opacity=".35"/>${drapeFolds(20, 92, 22, 92, "#e9eef2", 7)}</g>` +
        VP("M14 20 C19 40 20 70 14 96 L22 96 C26 70 25 40 24 20Z", "#efe3cf", { lc: "#efe3cf" }) + VP("M98 20 C93 40 92 70 98 96 L90 96 C86 70 87 40 88 20Z", "#efe3cf", { lc: "#efe3cf" });
    case "cafe":
      return defs + LINE("M17 58 H95", "#a87447", 2) + `<g class="w-billow">${VP("M19 58 L93 58 L93 90 Q56 94 19 90 Z", fill, o)}${drapeFolds(19, 93, 59, 90, c, 8)}</g>` + LINE("M19 59.5 Q56 63 93 59.5", lighten(c, .4), 1.6);
    default: /* abiertas, recogidas con alzapaños */
      return defs + `<g class="w-sway">${VP("M14 20 C20 40 22 64 14 96 L28 96 C33 70 31 44 30 20Z", fill, o)}${LINE("M19 24 C22 44 22 66 18 94M25 24 C27 44 27 66 24 94", darken(c, .8), 1, 'opacity=".55"')}</g>` +
        `<g class="w-sway" style="animation-delay:-2s">${VP("M98 20 C92 40 90 64 98 96 L84 96 C79 70 81 44 82 20Z", fill, o)}${LINE("M93 24 C90 44 90 66 94 94M87 24 C85 44 85 66 88 94", darken(c, .8), 1, 'opacity=".55"')}</g>` +
        LINE("M18 62 q6 4 12 0M82 62 q6 4 12 0", "#c9a65a", 2.4) + VC(30, 62, 1.6, "#d9b45a", { w: .6, sh: 0 }) + VC(82, 62, 1.6, "#d9b45a", { w: .6, sh: 0 });
  }
}
