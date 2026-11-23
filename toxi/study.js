"use strict";
/* Resúmenes de Toxicología por tema (pestaña Estudiar), hechos con los apuntes; las preguntas de desarrollo del examen van al final de cada tema */
const STUDY = {
1: {
intro: "Temas 26-29 de los apuntes: generalidades y legislación, insecticidas, rodenticidas, molusquicidas, herbicidas y fungicidas. Según los alumnos, la profesora pregunta mucho los ejemplos y las tablas. Al final, las preguntas de desarrollo (del examen y de la recopilación) con su respuesta.",
sections: [
["Tema 26 · Plaguicidas: definiciones y clasificación legal",`<p><b>Plaguicida (p. 1):</b> sustancias o ingredientes activos, y también las formulaciones o preparados que contengan uno o varios de ellos, destinados a alguno de estos fines:</p>
<ul>
<li>Combatir los agentes nocivos para los vegetales y productos vegetales o prevenir su acción.</li>
<li>Favorecer o regular la producción vegetal, <b>con excepción de los nutrientes y los destinados a la enmienda de suelos</b>.</li>
<li>Conservar los productos vegetales, incluida la protección de las maderas.</li>
<li>Destruir los vegetales indeseables, o destruir parte de ellos y prevenir un crecimiento indeseable.</li>
<li>Hacer inofensivos, destruir o prevenir la acción de otros organismos nocivos distintos de los que atacan a los vegetales.</li>
</ul>
<p><b>Formulación o preparado (p. 1):</b> plaguicida compuesto de una o varias sustancias o ingredientes activo-técnicos y, en su caso, ingredientes inertes, coadyuvantes y aditivos, en porción fija.</p>
<table>
<tr><th>Componente</th><th>Qué es</th></tr>
<tr><td>Ingrediente activo-técnico</td><td>Producto orgánico o inorgánico, natural, sintético o biológico, con actividad plaguicida y grado de pureza establecido</td></tr>
<tr><td>Ingredientes inertes</td><td>Unidos al activo, modifican las características de <b>dosificación o aplicación</b></td></tr>
<tr><td>Coadyuvantes</td><td>Útiles en la elaboración: modifican las <b>propiedades físicas y químicas</b> del activo</td></tr>
<tr><td>Aditivos</td><td><b>Sin influencia en la eficacia</b>: cumplen prescripciones reglamentarias u otras finalidades</td></tr>
</table>
<p><b>Clasificación legal según el destino de la aplicación (p. 2) — 6 grupos:</b> a) uso fitosanitario, b) uso ganadero, c) uso en la industria alimentaria, d) uso ambiental, e) uso en higiene personal, f) uso doméstico.</p>
<p><b>Clasificación legal según el estado de presentación (p. 3):</b> gases o gases licuados; fumigantes y aerosoles; <b>polvos con diámetro de partícula inferior a 50 µ</b>; sólidos, excepto los cebos y los preparados en tabletas; líquidos; cebos y tabletas.</p>
<p class="muted">En la UE (p. 4) el plaguicida fitosanitario es el de agricultura, horticultura, parques y jardines; el biocida es el de otros usos, como proteger animales o desinfectantes.</p>`],
["Tema 26 · Clasificación toxicológica: GHS, OMS y DL50 de preparados",`<p><b>Clasificación de la OMS (p. 2):</b> atiende a la toxicidad por <b>vía dérmica / vía oral</b>, teniendo en cuenta si el ingrediente activo induce daño irreversible a órganos vitales, es volátil, tiene efecto acumulativo, es particularmente peligroso o es alergénico.</p>
<p><b>Cálculo de la DL50 de un formulado con una sola sustancia activa (p. 2):</b> se basa en cálculos proporcionales de la DL50 del ingrediente técnico. <b>DL50 del preparado = (L × 100) / C</b>, siendo L la DL50 de la sustancia activa por vía oral en rata y C su porcentaje en el preparado.</p>
<p><b>Cuadro 1 · Categorías de peligro de toxicidad aguda del GHS (p. 2), DL50 en mg/kg pv:</b></p>
<table>
<tr><th>Categoría</th><th>Oral (rata)</th><th>Indicación</th><th>Dérmica (rata o conejo)</th><th>Indicación</th></tr>
<tr><td>1</td><td>&lt; 5</td><td>Letal por ingestión</td><td>&lt; 50</td><td>Letal por contacto con piel</td></tr>
<tr><td>2</td><td>5 – 50</td><td>Letal por ingestión</td><td>50 – 200</td><td>Letal por contacto con piel</td></tr>
<tr><td>3</td><td>50 – 300</td><td>Tóxico por ingestión</td><td>200 – 1000</td><td>Tóxico por contacto con piel</td></tr>
<tr><td>4</td><td>300 – 2000</td><td>Nocivo por ingestión</td><td>1000 – 2000</td><td>Nocivo por contacto con piel</td></tr>
<tr><td>5</td><td>2000 – 5000</td><td>Puede ser nocivo por ingestión</td><td>2000 – 5000</td><td>Puede ser nocivo por contacto</td></tr>
</table>
<p><b>Cuadro 2 · Esquema anterior de la OMS (p. 3), DL50 para la rata en mg/kg pc:</b></p>
<table>
<tr><th>Clase OMS</th><th>Sólidos oral</th><th>Sólidos dérmica</th><th>Líquidos oral</th><th>Líquidos dérmica</th></tr>
<tr><td>Ia Extremadamente peligroso</td><td>&lt; 5</td><td>&lt; 10</td><td>&lt; 20</td><td>&lt; 40</td></tr>
<tr><td>Ib Altamente peligroso</td><td>5 – 50</td><td>10 – 100</td><td>20 – 200</td><td>40 – 400</td></tr>
<tr><td>II Moderadamente peligroso</td><td>50 – 500</td><td>100 – 1000</td><td>200 – 2000</td><td>400 – 4000</td></tr>
<tr><td>III Ligeramente peligroso</td><td>&gt; 500</td><td>&gt; 1000</td><td>&gt; 2000</td><td>&gt; 4000</td></tr>
</table>
<p><b>Cuadro 3 · Ejemplos de la clase Ia, extremadamente tóxicos (p. 3):</b></p>
<table>
<tr><th>Nombre</th><th>Tipo</th><th>Uso</th><th>GHS</th><th>DL50 mg/kg pv</th></tr>
<tr><td>Aldicarb</td><td>Carbamato</td><td>Insecticida-suelo</td><td>1</td><td>0,93</td></tr>
<tr><td>Brodifacoum</td><td>Coumarina</td><td>Rodenticida</td><td>1</td><td>0,3</td></tr>
<tr><td>Bromadiolona</td><td>Coumarina</td><td>Rodenticida</td><td>1</td><td>1,12</td></tr>
<tr><td>Cianuro cálcico</td><td>—</td><td>Fumigante</td><td>2</td><td>39 (gas cianuro de H2)</td></tr>
<tr><td>Captafol</td><td>—</td><td>Fungicida</td><td>5</td><td>5000 (cancerígeno)</td></tr>
<tr><td>EPN</td><td>Organofosforado</td><td>Insecticida</td><td>2</td><td>14 (neurotoxicidad retardada)</td></tr>
<tr><td>Hexaclorobenceno</td><td>Organoclorado</td><td>Fungicida-semillas</td><td>5</td><td>10000 (convenios Rotterdam y Estocolmo)</td></tr>
<tr><td>Acetato de fenilmercurio</td><td>Compuesto mercurial</td><td>Fungicida-semillas</td><td>2</td><td>24 (teratogénico)</td></tr>
</table>
<p><b>Mezclas de pesticidas que no se pueden clasificar (p. 3) — tres enfoques:</b></p>
<ul>
<li>Requerir a quien ha hecho el preparado los datos de toxicidad aguda <b>oral y dérmica para ratas</b> de la mezcla real tal como se comercializa.</li>
<li>Clasificar la formulación de acuerdo con el <b>componente más peligroso</b> de la mezcla.</li>
<li>Aplicar la fórmula <b>Ca/Ta + Cb/Tb + … + Cz/Tz = 100/Tm</b>: C son las concentraciones en porcentaje de cada constituyente, T sus DL50 orales y Tm la DL50 oral de la mezcla.</li>
</ul>
<p class="muted">Los fumigantes gaseosos o volátiles NO entran en la clasificación de peligrosidad de la OMS (cuadro 5, p. 4): fosfina, fosfuro de aluminio y de magnesio, bromuro de metilo, cloropicrina, óxido de etileno, cianuro de hidrógeno, formaldehído, 1,2-dibromoetano, 1,3-dicloropropeno, dicloruro de etileno y fluoruro de sulfurilo.</p>`],
["Tema 26 · Legislación europea, convenio de Rotterdam y residuos (LMR)",`<p><b>Convenio de Rotterdam, art. 1 (p. 4):</b> promover la <b>responsabilidad compartida</b> de los esfuerzos conjuntos de las Partes en el comercio internacional de ciertos productos químicos peligrosos, para proteger la salud humana y el medio ambiente y contribuir a su utilización ambiental racional, facilitando el intercambio de información, estableciendo un proceso nacional de decisiones sobre importación y exportación y difundiendo esas decisiones a las Partes.</p>
<p><b>Fines de la legislación de plaguicidas y biocidas en la UE (p. 4):</b> proteger la salud humana, proteger el medio ambiente y evitar las barreras al comercio.</p>
<table>
<tr><th>Norma</th><th>Contenido</th></tr>
<tr><td>Directiva 2009/128/CE (21 oct. 2009)</td><td>Marco de la actuación comunitaria para un <b>uso sostenible</b> de los plaguicidas</td></tr>
<tr><td>Reglamento (CE) 1107/2009</td><td><b>Comercialización</b> de productos fitosanitarios; criterios de alteración endocrina</td></tr>
<tr><td>Reglamento (CE) 1185/2009</td><td><b>Estadísticas</b>: cantidades anuales comercializadas y utilizadas en cada Estado miembro</td></tr>
<tr><td>Reglamento (UE) 528/2012</td><td>Simplifica la autorización y potencia el papel de la <b>ECHA</b> con condiciones más estrictas</td></tr>
</table>
<p><b>Residuos en alimentación humana o animal (p. 5):</b> todos los alimentos de la UE están sujetos a un límite máximo de residuos; el objetivo es proteger la salud humana y animal; <b>límite máximo aplicable por defecto: 0,01 mg/kg</b>.</p>
<p><b>Excepciones al cumplimiento de los LMR (p. 5):</b> algunas sustancias del <b>anexo VII</b> pueden autorizarse aunque superen los LMR si los productos no se destinan al consumo inmediato, se establecen controles para que no lleguen al consumidor y se informa a los demás países de la UE y a la Comisión.</p>
<p><b>Evaluación de la seguridad (p. 5):</b> la Autoridad evalúa las solicitudes de LMR y los informes de los Estados miembros teniendo en cuenta toda la gama de efectos toxicológicos, como la <b>inmunotoxicidad, la perturbación endocrina y la toxicidad de desarrollo</b>.</p>
<p><b>Base de datos de la EFSA sobre LMR (p. 5):</b> accesible a las autoridades competentes; recoge información científica y de buenas prácticas agrícolas, las sustancias activas, los <b>factores de transformación de los anexos II, III, IV y VII</b>, evaluaciones de la ingesta alimentaria y conclusiones de la evaluación tóxica.</p>
<p class="muted">Ojo con la lista de la p. 5 titulada productos alimenticios afectados por LMR (siembra o plantación, pruebas autorizadas sobre sustancias activas, fabricación de productos que no sean alimentos y exportación): en el reglamento esos supuestos son los que quedan <b>fuera</b> del cumplimiento de los LMR.</p>`],
["Tema 26 · Exposición y expedientes 283/2013 y 284/2013",`<p><b>Exposición a plaguicidas (p. 6):</b></p>
<ul>
<li><b>Intencional:</b> por agua, aire y alimentos, incluido el envenenamiento de animales.</li>
<li><b>No intencional:</b> dérmica, oral y respiratoria; puede ser <b>profesional</b> o <b>no profesional</b> (agua, aire, alimentos, accidentes), y cada una con efectos <b>a corto plazo</b> y <b>a largo plazo</b>.</li>
</ul>
<p>Los ensayos toxicológicos y ecotoxicológicos de los fitosanitarios los fijan dos reglamentos de la Comisión, ambos <b>de 1 de marzo de 2013</b>, de conformidad con el Reglamento (CE) 1107/2009:</p>
<table>
<tr><th>Norma</th><th>Datos de</th><th>Secciones clave</th></tr>
<tr><td>Reglamento (UE) 283/2013</td><td><b>Sustancias activas</b> (10 secciones)</td><td>Sección 5: estudios toxicológicos y metabólicos. Sección 8: estudios ecotoxicológicos</td></tr>
<tr><td>Reglamento (UE) 284/2013</td><td><b>Productos fitosanitarios</b> (12 secciones)</td><td>Sección 7: estudios toxicológicos. Sección 10: estudios ecotoxicológicos</td></tr>
</table>
<p><b>283/2013 · Sección 5, estudios toxicológicos y metabólicos (pp. 6-7):</b> 5.1 cinética (absorción, distribución, metabolismo y excreción en mamíferos); 5.2 toxicidad aguda (oral, cutánea, inhalación, irritación cutánea y ocular, sensibilización cutánea, fototoxicidad); 5.3 corto plazo (oral de 28 y de 90 días); 5.4 genotoxicidad; 5.5 toxicidad y carcinogenicidad a largo plazo; 5.6 función reproductora; 5.7 neurotoxicidad (roedores, polineuropatía retardada); 5.8 otros estudios; 5.9 datos médicos.</p>
<p><b>283/2013 · Sección 8, estudios ecotoxicológicos (pp. 7-8):</b> 8.1 aves y otros vertebrados terrestres; 8.2 organismos acuáticos (peces; invertebrados: <b>Daphnia magna</b>, <b>Chironomus riparius</b>, bentónicos; algas y macrófitos); 8.3 artrópodos (abejas: toxicidad aguda oral y por contacto, crónica, efectos subletales; no objetivo: <b>Aphidus rhopalosiphi</b> y <b>Typhlodromus pyri</b>); 8.4 mesofauna y macrofauna del suelo (lombrices); 8.5 transformación del nitrógeno del suelo; 8.6 plantas superiores no objetivo; 8.7 otros organismos terrestres; 8.8 tratamiento biológico de aguas residuales; 8.9 datos de seguimiento.</p>
<p><b>284/2013 · Sección 7, estudios toxicológicos (p. 9):</b> 7.1 toxicidad aguda (oral, contacto, inhalación, irritación cutánea y ocular, sensibilización cutánea, estudios suplementarios y de combinaciones); 7.2 datos de exposición de <b>operarios, circunstantes y residentes, y trabajadores</b>, con estimación y medición en cada caso; 7.3 absorción cutánea; 7.4 datos sobre coformulantes.</p>
<p><b>284/2013 · Sección 10, estudios ecotoxicológicos (pp. 9-10):</b> 10.1 aves y vertebrados terrestres (con datos afinados); 10.2 organismos acuáticos; 10.3 artrópodos, incluidos <b>ensayos en jaula o túnel y ensayos de campo con abejas</b>; 10.4 lombrices y fauna del suelo; 10.5 nitrógeno del suelo; 10.6 plantas no objetivo (cribado, laboratorio ampliado, semicampo y campo); 10.7 otros organismos terrestres; 10.8 datos de seguimiento.</p>
<p class="muted">Diferencia útil: el expediente de la <b>sustancia activa</b> lleva la cinética y la carcinogenicidad; el del <b>producto</b> lleva los datos de exposición de operarios y trabajadores y los ensayos de campo.</p>`],
["Tema 27 · Organoclorados (OC): grupos, cinética y clínica",`<p class="muted">Insecticidas 2005-2010: el 86% son insecticidas, de ellos carbamatos 77%, organofosforados 6% y organoclorados 3% (p. 11).</p>
<ul>
  <li><b>Grupos:</b> <b>difenilalifáticos</b> (DDT y análogos, metoxicloro), <b>ciclodienos</b> (aldrín, dieldrín, heptacloro, α-endosulfán), <b>hexaclorociclohexanos</b> (lindano = γ-HCH, α-, β-, δ-HCH) y <b>otros</b> (BHC, mirex).</li>
  <li><b>Características:</b> muy persistentes y poco biodegradables; cloro muy reactivo &rarr; <b>bioacumulación y biomagnificación</b>; insolubles en agua; muy solubles en grasas y solventes orgánicos; muy volátiles.</li>
  <li><b>Toxicidad:</b> más susceptibles los <b>gatos</b>; a <b>menor edad, mayor sensibilidad</b>; las <b>hembras</b> son bastante más sensibles; influyen el estado de salud y la grasa corporal. Atraviesan <b>BHE y BFP</b>.</li>
  <li><b>Fuentes:</b> alimentos y aguas contaminados, carne o leche con residuos, arrozales y cultivos tratados, productos conservados en lugares desinsectados.</li>
  <li><b>Eliminación en 2 fases:</b> rápida (<b>50% del ingerido en 3-4 días</b>) y lenta (el resto se acumula en <b>hígado y grasas</b>).</li>
  <li><b>Intoxicación aguda sobre crónica de fondo:</b> estrés &rarr; <b>lipólisis</b> &rarr; los OC acumulados se movilizan &rarr; vertido a la sangre &rarr; intoxicación aguda.</li>
  <li><b>Mecanismo:</b> estimulantes del SNC <b>sin receptores específicos</b>: penetran en la neurona &rarr; desequilibrio electrolítico &rarr; <b>baja el umbral de excitabilidad</b> &rarr; hiperexcitabilidad permanente &rarr; agotamiento de neurotransmisores. El aumento de NH3 y glutamina da <b>convulsiones y temblores</b>; a veces bloqueo neuronal &rarr; depresión.</li>
  <li><b>Clínica:</b> agitación y comportamiento anómalo (enloquecido), hipersalivación, fasciculaciones y temblores, <b>blefarospasmo</b>, alteraciones locomotoras, convulsiones tónico-clónicas prolongadas, <b>hipertermia</b>, coma y muerte. En crónicas: síntomas menos exagerados, falta de apetito y alteraciones reproductoras.</li>
  <li><b>Diagnóstico diferencial:</b> encefalopatía, <b>rabia</b>, eclampsia; otros tóxicos (estricnina, metaldehído, cafeína, teobromina, nicotina, OP, carbamatos, plomo, 1080, penitrem A o roquefortina).</li>
  <li><b>Tratamiento:</b> <b>no hay antídoto</b>, sintomático y de soporte: barbitúricos (fenobarbital) y miorrelajantes (<b>metocarbamol</b>); por vía oral catártico salino, carbón activado o lavado gástrico. <b>Contraindicados:</b> fenotiazinas (bajan el umbral de convulsión) y epinefrina u otras aminas adrenérgicas (arritmias).</li>
  <li><b>En el medio</b> (están prohibidos): atmósfera (vapor y partículas), agua (no solubles, tienden a <b>bioconcentrarse</b>) y suelo (unidos a la fracción sólida y a sedimentos).</li>
  <li><b>El regreso del DDT:</b> casi 40 años después de restringirse, la <b>OMS</b> lo recupera para <b>fumigar el interior de las viviendas</b> contra los mosquitos de la malaria; en interiores no supone peligro para la vida silvestre.</li>
</ul>`],
["Tema 27 · Organofosforados (OP): mecanismo, tolerancia y fases",`<ul>
  <li><b>Características:</b> buenos insecticidas de <b>contacto y sistémicos</b>; muy <b>liposolubles</b> (piel intacta y vía digestiva); suelen ir combinados (<b>sinergia</b>); sustituyeron a los OC por ser <b>menos persistentes y bioacumulables</b>; son <b>ésteres del ácido fosfórico</b>.</li>
  <li><b>Clasificación química (ejemplos que caen):</b> fosfato = diclorvos, mevinfos, clorfenvinfos; O-alquil fosforotioato = clorpirifos, diazinón, paratión, fention; <b>fosforoditioato = dimetoato, malation, etion, fosmet</b>; fosforamidato = cruformato; fosforotriamidato = triamifos; fosforotiomidato = metamidofos e isofenfos; <b>fosfonato = butonato y triclorfon</b>; fosfonotioato = cianofenos.</li>
  <li><b>Bioactivación:</b> <b>desulfuración oxidativa</b> (Dauterman, 1971) en microsomas, con NADPH y O2: <b>paratión &rarr; paraoxón</b> (+ SO4). Las formas <b>oxo son más tóxicas</b> que las tiono.</li>
  <li><b>Mecanismo:</b> los OP son <b>análogos de la ACh</b> y la sustituyen en el <b>sitio activo de las colinesterasas</b> (inhibición competitiva pero <b>irreversible</b>) &rarr; la ACh sigue despolarizando la membrana postsináptica &rarr; estimulación continua de receptores <b>muscarínicos, nicotínicos y centrales</b>.</li>
  <li><b>Envejecimiento de la enzima:</b> complejos de micelas &rarr; <b>fosforilación</b> de la enzima &rarr; reacción de reactivación &rarr; <b>envejecimiento</b>. En el esquema de neurotoxicidad los OP salen 2 veces: aguda (inhibición de la <b>AChE</b>) y retardada (inhibición de la <b>NTE</b>).</li>
  <li><b>Toxicidad:</b> disminuye con sol, aire, agua, microorganismos, medios alcalinos e iones hierro y cobre; aumenta con solventes polares a alta temperatura (isomerizaciones), rayos UV (isómeros reactivos) y metabolitos más peligrosos.</li>
  <li><b>Tolerancia (3 mecanismos):</b> el OP absorbido <b>autoinduce la síntesis de esterasas</b>; el hígado induce más esterasas; los receptores colinérgicos se adaptan al exceso de ACh. Hay <b>tolerancia cruzada con los OC</b> en exposiciones continuas.</li>
  <li><b>1. Fase muscarínica:</b> aumento de secreciones y contracción de musculatura lisa: salivación intensa, vómitos, diarreas mucosas, micción abundante, lagrimeo y <b>miosis</b>; hipersecreción bronquial y broncoconstricción con tos, disnea y edema pulmonar; <b>bradicardia</b>, bloqueos A-V y choque vagal.</li>
  <li><b>2. Fase nicotínica:</b> temblores y fasciculaciones que <b>empiezan por la cabeza</b>, convulsiones y después debilidad muscular; vasoconstricción con <b>taquicardia, midriasis</b> y desaparece la hipersecreción.</li>
  <li><b>3. Alteración del SNC:</b> ansiedad y crisis convulsivas o bien depresión.</li>
  <li><b>Toxicidad retardada (OPIDN):</b> <b>triclorfon y malatión</b>; paresia progresiva e <b>irreversible del tren posterior</b> &rarr; parálisis, degeneración axonal con desmielinización (inhibición de la esterasa neurotóxica). <b>No hay antídoto.</b></li>
  <li><b>Síndrome intermedio:</b> a las <b>24-96 horas</b>, en <b>gatos</b> expuestos a <b>clorpirifos</b> (exposiciones únicas o repetidas a dosis bajas, con tolerancia): anorexia, diarrea, debilidad, temblores, posturas anómalas, depresión y <b>muerte por parálisis respiratoria brusca</b>.</li>
</ul>`],
["Tema 27 · Tratamiento de OP y carbamatos (dosis exactas)",`<table>
  <tr><th>Medida</th><th>Dosis / detalle</th></tr>
  <tr><td><b>Sulfato de atropina</b> (genérico)</td><td>Inicio <b>0,2-1 mg/kg</b>: 1/4 IV y el resto SC. Repetir <b>a las 6 h</b> si recidivan, a <b>0,1-0,5 mg/kg</b></td></tr>
  <tr><td>Descontaminación digestiva</td><td>Vómito si han pasado &lt; 2 h, o lavado gástrico con <b>carbón activado 2-4 g/kg</b> + sulfato sódico o magnésico (0,25-0,5 g/kg de carbón)</td></tr>
  <tr><td>Exposición dérmica</td><td>Lavar con <b>agua jabonosa alcalina</b> (ej.: carbonato sódico al 2%)</td></tr>
  <tr><td>Convulsiones</td><td><b>Diazepam</b> o barbitúricos de acción corta</td></tr>
  <tr><td>Soporte</td><td>Vigilancia respiratoria intensiva; rehidratación para la volemia; <b>furosemida</b> para prevenir el edema pulmonar y favorecer la eliminación renal</td></tr>
  <tr><td><b>Pralidoxima</b> (específico OP)</td><td><b>20 mg/kg IM o IV</b>, repetible <b>a las 12 h</b> (dos veces); más eficaz <b>junto con atropina</b>; recuperación de <b>2-4 días hasta una semana</b></td></tr>
  <tr><td>Carbamatos</td><td>Tratamiento <b>similar al de los OP, pero SIN pralidoxima</b></td></tr>
</table>
<ul>
  <li><b>Carbamatos:</b> ésteres del <b>ácido carbámico</b> (carbaril, carbofurano o furadan, aldicarb, metomilo, pirimicarb, metiocarb…). <b>Carbamatos metálicos:</b> ferbam, tiram, maneb, zineb y ziram.</li>
  <li><b>Características:</b> hidrosolubles, absorbidos por las plantas, pasan a la cadena alimentaria, muy poco persistentes, <b>se activan durante el almacenamiento</b>, se absorben por piel intacta y son <b>menos tóxicos que los OP</b>.</li>
  <li><b>Mecanismo:</b> igual que los OP salvo que <b>no hay envejecimiento de la AChE</b> y la inhibición es <b>reversible</b> (por eso la oxima no aporta nada).</li>
</ul>`],
["Tema 27 · Piretroides y neonicotinoides",`<ul>
  <li><b>Origen:</b> piretrinas naturales de <b>Chrysantemun sp</b>; primer uso comercial en 1800 y <b>primer piretroide sintético en 1980</b>. Hoy son posiblemente el mayor grupo: <b>más del 30%</b> de los insecticidas del mundo (agrícolas, jardín, casa y animales de compañía; aerosoles, polvos, gránulos, champú, spray, collares).</li>
  <li><b>Mecanismo:</b> <b>aumentan la longitud del potencial de acción despolarizante</b> &rarr; latigazos repetitivos nerviosos; actúan sobre los <b>canales de sodio</b> del nervio (las fibras sensitivas son las más susceptibles).</li>
  <li><b>Toxicidad:</b> DL50 rata oral <b>260-600 mg/kg</b>; dérmica <b>1350 mg/kg</b> (rata) y &gt; 4500 mg/kg (ratón). Selectivos para insectos y poco tóxicos para los animales, <b>excepto los organismos acuáticos (peces)</b>.</li>
  <li><b>Especies sensibles:</b> los <b>gatos</b>, los animales <b>muy jóvenes</b> y los muy mayores, anémicos o débiles. Tremores, ataxia, agitación, convulsiones y muerte en gatos tratados <b>mensualmente con permetrina (36-65%)</b>. Los signos van de alergia a reacciones idiosincrásicas o neurotóxicas.</li>
  <li><b>Tratamiento:</b> controlar tremores y convulsiones, evitar que siga absorbiendo, <b>controlar la temperatura</b> y tratamiento de soporte.</li>
  <li><b>Diagnóstico diferencial:</b> otros neurotóxicos (estricnina, metaldehído, 1080, cafeína, teobromina, anfetamina, cocaína, micotoxinas tremorgénicas, OP, carbamatos y OC), <b>traumatismos cráneo-encefálicos</b>, anormalidades endocrinas y <b>neoplasia cerebral</b>.</li>
  <li><b>Neonicotinoides:</b> relacionados con la <b>nicotina</b>, introducidos en agricultura en los <b>años 90</b>; actúan de modo <b>selectivo e irreversible sobre los receptores nicotínicos de la ACh</b> de las células nerviosas del insecto, paralizándolo. Amplio espectro, por contacto o ingestión: <b>imidacloprid</b>, thiamethoxan, clotianidina.</li>
</ul>`],
["Tema 27 · Las tablitas que caen (DL50 y persistencia)",`<p class="muted">El profesor pregunta hasta las tablitas: fíjate sobre todo en los extremos (el más tóxico y el menos tóxico de cada lista).</p>
<table>
  <tr><th>Organoclorado</th><th>DL50 oral rata</th><th>DL50 dérmica</th></tr>
  <tr><td>Lindano</td><td>91</td><td>500</td></tr>
  <tr><td>Clordano</td><td>430</td><td>530</td></tr>
  <tr><td>Hepatocloro</td><td>100</td><td>195</td></tr>
  <tr><td>Aldrín</td><td>39</td><td>98</td></tr>
  <tr><td>Dieldrín</td><td>46</td><td>90</td></tr>
  <tr><td><b>Endrín (el más tóxico)</b></td><td><b>7,5</b></td><td>15</td></tr>
  <tr><td>Endosulfán</td><td>43</td><td>130</td></tr>
  <tr><td>Toxafeno</td><td>90</td><td>1075</td></tr>
  <tr><td>DDT</td><td>113-450</td><td>250-3000</td></tr>
  <tr><td><b>Metoxicloro (el menos tóxico)</b></td><td><b>6000</b></td><td>-</td></tr>
  <tr><td>Clordecone</td><td>125</td><td>2000</td></tr>
</table>
<p class="muted">Otros de la p. 11: dicofol 668-842 mg/kg; α-, β- y γ-HCH (lindano) 91 mg/kg.</p>
<table>
  <tr><th>Carbamato</th><th>DL50 oral rata</th></tr>
  <tr><td><b>Aldicarb (el más tóxico)</b></td><td><b>0,65 mg/kg</b></td></tr>
  <tr><td>Carbofurano (furadan)</td><td>6,0-7,8 mg/kg</td></tr>
  <tr><td>Carbaril</td><td>230 mg/kg</td></tr>
  <tr><td>Benomilo</td><td>&gt; 10.000 mg/kg</td></tr>
</table>
<table>
  <tr><th>Forma tiono (DL50)</th><th>Forma oxo (DL50)</th></tr>
  <tr><td>Paratión 5,0</td><td>Paraoxón 3,5</td></tr>
  <tr><td>Pyrazotión 36,0</td><td>Pyrazoxón 4,0</td></tr>
  <tr><td>Fenitrotión 1250</td><td>Sumioxón 120</td></tr>
  <tr><td>Sulfotepp 5,0</td><td>Tepp 2,0</td></tr>
  <tr><td>Akton 146</td><td>Clorfenvinfós 10-40</td></tr>
</table>
<table>
  <tr><th>Tabla 14.5 (rata, dosis oral)</th><th>Dosis</th><th>t½ sangre (P)</th><th>Dato que cae</th></tr>
  <tr><td>Diazinón</td><td>20,30</td><td>5,31 (30)</td><td>t½ cerebro 4,77</td></tr>
  <tr><td>Dimetoato</td><td>50,60</td><td>17,46 (30)</td><td>el más persistente en sangre</td></tr>
  <tr><td>Etil-paratión</td><td>0,66</td><td>3,28 (30)</td><td>la dosis más baja</td></tr>
  <tr><td><b>Malatión</b></td><td>467</td><td><b>1,40 (8)</b></td><td>el de vida media más corta</td></tr>
  <tr><td>Metil-paratión</td><td>3,0</td><td>14,67 (30)</td><td><b>N.D. en músculo</b></td></tr>
  <tr><td>Triclorfón (diclorvós)</td><td>133,33</td><td>7,04 (20)</td><td><b>N.D. en cerebro</b></td></tr>
</table>
<p class="muted">Imidacloprid: DL50 oral 424 mg/kg (rata macho), 131 mg/kg (ratón macho), 60 ng/abeja a las 48 h y 40 ng/abeja a las 72-96 h (Apis mellifera). Piretroides: 260-600 mg/kg oral y 1350 mg/kg dérmica en rata.</p>`],
["Tema 28 · Rodenticidas anticoagulantes (RAs)",`<p class="muted">Derivados de la <b>4-hidroxicumarina</b> y de la <b>indano-1,3-diona</b>. Baja solubilidad en agua y buena estabilidad a temperaturas normales. Fuentes: cebos preparados, ingestión de ratas con rodenticida y exposición ocupacional (fabricación, formulación y aplicación del cebo).</p>
<table><tr><th>Generación</th><th>Familia</th><th>Principios activos</th></tr>
<tr><td rowspan="2"><b>1ª</b></td><td>4-hidroxicumarinas</td><td><b>Warfarina</b>, coumatetralilo, coumafurilo, coumaclor</td></tr>
<tr><td>Indandionas</td><td>Clorofacinona, difacinona, pindona, valona</td></tr>
<tr><td><b>2ª</b></td><td>(las más tóxicas)</td><td><b>Difenacoum, brodifacoum, difethialona, bromadiolona, flocuamafen</b></td></tr></table>
<p><b>Mecanismo</b>: los factores de la coagulación dependientes de la vit. K son la <b>protrombina (II), VII, IX y X</b>. Inhiben el complejo protrombina y <b>alargan el tiempo de coagulación</b>; además <b>aumentan la permeabilidad capilar</b> y pueden disminuir la agregación plaquetaria (protrombina biológicamente inactiva). En el esquema de los apuntes, la warfarina y derivados bloquean la <b>vitamina K epóxido reductasa</b>, de forma que no se regenera la vitamina K activa (hidroquinona).</p>
<p><b>Factores que modifican la toxicidad</b>: dieta rica en grasa y antibióticos orales prolongados → <b>deficiencia de vit. K</b>. Enfermedades hepáticas → <b>menor producción de protrombina</b> (más susceptibilidad a la warfarina).</p>
<p><b>Toxicidad de la warfarina</b> (tabla de la p. 24):</p>
<table><tr><th>Especie</th><th>Dosis única</th><th>Dosis repetida</th></tr>
<tr><td>Ratas</td><td>50-100 mg/kg</td><td>1 mg/kg (5 días)</td></tr>
<tr><td><b>Perros</b></td><td><b>50 mg/kg</b></td><td><b>5 mg/kg (5-15 días)</b></td></tr>
<tr><td>Gatos</td><td>5-50 mg/kg</td><td>1 mg/kg (5 días)</td></tr>
<tr><td>Cerdos</td><td>3 mg/kg</td><td>0,05 mg/kg (7 días)</td></tr>
<tr><td>Aves</td><td colspan="2">50 % de peso corporal en pienso con 0,1 mg/kg</td></tr></table>
<p class="muted">Indandionas: <b>50-100 mg/kg en perros</b>.</p>
<p><b>DL50 (mg/kg)</b>, de más a menos tóxico: <b>brodifacoum 0,26</b> · floucomafen 0,46 · bromadiolona 1,12 · difenacoum 1,8 · difacinona 3,0 · clumatetralilo 16,5 · clorofacinona 20,5 · pindona 50 · <b>warfarina 58</b>.</p>
<ul>
<li><b>Clínica</b>: hemorragia nasal, encías sangrientas, hematuria, melena y equimosis severas; anemia, fatiga y disnea bajo esfuerzo.</li>
<li><b>Lesiones</b>: hemorragia generalizada; <b>corazón redondeado y flácido</b> con hemorragias subepicárdicas y subendocárdicas; <b>necrosis hepática centrolobular</b>.</li>
<li><b>Diagnóstico</b>: antecedentes, cuadro clínico y laboratorio. El <b>tiempo de protrombina está elevado</b>, entre las <b>24-48 horas y 1-3 semanas</b>. Diferenciales: aflatoxicosis, trombocitopenia, lesiones por radiación, hepatitis canina infecciosa y deficiencia de vit. K.</li>
<li><b>Tratamiento</b>: soporte normal de las funciones vitales y <b>vit. K</b> (la vitamina K1 es la respuesta del examen en la intoxicación por brodifacoum o bromadiolona).</li>
<li><b>Análisis</b>: indirecto, el <b>tiempo de protrombina</b>; hidroxicumarinas o metabolitos en <b>orina o heces</b>; capa fina, HPLC, espectofotometría y espectrofluorometría.</li></ul>`],
["Tema 28 · Estricnina",`<p class="muted"><b>Alcaloide</b> de <i>Strychnos nux-vomica</i>. Rodenticida y avicida. Es de las sustancias que más intoxican a los perros; los cebos de granos rojos o verdes llevan <b>0,5-1 % de sulfato de estricnina</b>. La Orden de 4 de febrero de 1994 prohibió importar, comercializar y utilizar en España cualquier plaguicida ambiental con estricnina.</p>
<table><tr><th>Especie</th><th>DL50 oral (mg/kg p.v)</th></tr>
<tr><td>Bóvidos / Équidos / Aves</td><td>0,5</td></tr>
<tr><td>Suidos</td><td>0,5-1</td></tr>
<tr><td><b>Perro</b></td><td><b>0,5-1,2</b></td></tr>
<tr><td>Felinos</td><td>2</td></tr>
<tr><td>Ratas</td><td>2,2-1,4</td></tr></table>
<ul>
<li><b>Toxicocinética</b>: absorción rápida digestiva y por mucosas, metabolización por enzimas microsomales hepáticas, distribución amplia y <b>eliminación lineal</b>.</li>
<li><b>Mecanismo</b> (pregunta de examen): actúa en el <b>SNC</b> como <b>antagonista competitivo y reversible de los receptores de la glicina</b> → estimulación incontrolada de los músculos esqueléticos. La glicina es el neurotransmisor inhibidor medular: sin inhibición, todo se contrae.</li>
<li><b>Latencia</b>: <b>10 min – 2 horas</b>. Temor, nerviosismo, tensión y rigidez; <b>contracciones tetánicas violentas</b>; hiperexcitabilidad y <b>postura en caballete</b>; cuello arqueado y orejas erguidas; labios hacia atrás o <b>risa sardónica</b>; anoxia y <b>muerte por parálisis medular</b>.</li>
<li><b>Lesiones</b>: muerte entre <b>10 min y 24 h</b> con <b>rigidez cadavérica rápida</b>; no hay lesiones macro ni microscópicas características (cianosis, petequias, equimosis, lesiones traumáticas). El <b>estómago aparece lleno de alimento o cebo sin digerir</b>.</li>
<li><b>Diagnóstico</b>: historia, clínica característica y <b>ausencia de lesiones</b>. Muestras: contenido gástrico, hígado, riñón, orina, tejidos del SNC, cebos o vómitos. Diferenciales: <b>tétanos, metaldehído, organofosforados y carbamatos</b>.</li>
<li><b>Tratamiento</b>: controlar las convulsiones y prevenir la asfixia. <b>No inducir el vómito si ya hay síntomas</b>; carbón activado y lavado gástrico bajo anestesia. <b>Pentobarbital iv 3-15 mg/kg</b> o <b>diazepam iv 0,5-5 mg/kg</b>, o a efecto. Manipular lo mínimo para no aumentar la estimulación sensorial.</li>
<li><b>Pronóstico</b>: reservado; se salvan los tratados de forma continua <b>hasta 72 horas</b> tras la ingestión.</li>
<li><b>Análisis</b>: extracción en <b>medio ácido con cloroformo</b>; capa fina con cristales de yodo y confirmación con <b>spray de iodoplatino</b>; GC/MS y HPLC/MS. En cadáveres persiste <b>&gt; 1,5 meses</b>.</li></ul>`],
["Tema 28 · Fósforo, fosfuro de cinc y sales de talio",`<p><b>Fósforo amarillo o blanco (P)</b></p>
<ul>
<li>Primeros minutos: <b>daño de la membrana mucosa</b>. Hasta las <b>24 h</b>: vómito severo y dolor ardiente en garganta, pecho y abdomen.</li>
<li>La émesis puede ser <b>sanguinolenta</b> (roja, marrón o negra) y a veces tiene <b>olor a ajo</b>.</li>
<li>SNC: letargo, inquietud e irritabilidad, seguido de daño gastrointestinal. <b>El shock y el paro cardiopulmonar conducen a la muerte</b>.</li></ul>
<p><b>Fosfuro de cinc o aluminio (Zn3P2)</b></p>
<ul>
<li>Olor desagradable por el fósforo, <b>insoluble en agua y etanol</b>, se descompone al calentarse. Con <b>ácidos o agua</b> libera <b>fosfina</b> (fosfuro de hidrógeno, fosfamina, hidrógeno fosfado); corrosivo, inflamable y explosivo con el aire.</li>
<li><b>Dosis letal 40 mg/kg p.v</b>; cebos de granos o pasta al <b>0,5-10 %</b>.</li>
<li><b>Fisiopatología</b>: la fosfina <b>inhibe la citocromo C oxidasa (complejo IV)</b> → fracaso de la fosforilación oxidativa y <b>descenso de ATP mayor al 70 %</b>; anoxia celular, hiperreactividad de la <b>SOD</b> y descenso de catalasas → radicales libres, peroxidación de lípidos y muerte celular. Tras inhalarse afecta a <b>hígado, riñón, corazón y cerebro</b>. En el esquema: corazón (pericarditis, sangrado miocárdico, shock cardiogénico), endotelio (fosfolipasa, calcio, radicales libres) y pulmón (permeabilidad capilar, edema agudo, vasoplejía).</li>
<li><b>Latencia 1 hora</b>: anorexia, letargo, <b>vómitos sanguinolentos</b>, <b>taquicardia</b>, dolor abdominal, disnea, debilidad y postración; coma, convulsiones y <b>muerte en 3-48 horas</b>.</li>
<li><b>Tratamiento</b>: <b>no hay tratamiento específico</b>. Descontaminación <b>dérmica por cepillado, sin agua ni jabón</b> (el agua libera fosfina); digestiva con carbón activado y cuidado con los lavados gástricos. Soporte cardíaco, pulmonar, hepático y renal; vigilancia estricta de glucosa sérica, equilibrio ácido-base y electrolitos (Na, K, Ca, Mg); transfusiones si es preciso.</li></ul>
<p><b>Sales de talio (sulfato de talio)</b></p>
<ul>
<li>Absorción fácil por intestino y piel, alto volumen de distribución, <b>vida media 1-9 días</b>, <b>DL50 10-15 mg/kg</b>.</li>
<li>Afecta a la <b>pérdida del pelo</b>, al sistema gastrointestinal, SNC, cardiovascular, renal y piel. Suero de no expuestos <b>&lt; 30 ug/L</b>; orina antes de las <b>24 h</b> post-exposición (normal <b>&lt; 10 ug/L</b>); pelo en exposiciones prolongadas.</li>
<li>Clínica: dolor abdominal, náusea, vómito, <b>diarrea sanguinolenta</b>, estomatitis y salivación; luego íleo y aumento de enzimas hepáticas; SNC (cefalea, letargo, debilidad muscular, parestesia, temblores, ptosis y ataxia, <b>una semana</b> desde el contacto); parestesias muy dolorosas, mioclonías, convulsiones, delirio y coma. La <b>fiebre es de mal pronóstico</b>: indica daño cerebral.</li></ul>`],
["Tema 28 · Fluoroacetato, escilirósido y vitamina D3",`<p><b>Fluoroacetato sódico (1080) y fluoroacetamida (1081)</b></p>
<ul>
<li>Absorción intestinal fácil y <b>dérmica limitada</b>. Descubiertos en la <b>2ª guerra mundial</b> y retirados de la venta.</li>
<li><b>Inoloros e insípidos</b>, <b>solubles en agua</b>, <b>DL50 2-4 mg/kg</b>.</li>
<li>Clínica inespecífica: <b>arritmias, fibrilación ventricular, convulsiones y espasmos</b>. Órganos diana: <b>corazón, cerebro y riñones</b>. Alteran la regulación de la glucosa y el equilibrio hidroelectrolítico, sobre todo del <b>Ca2+</b>.</li>
<li><b>Tratamiento de soporte</b>: 1) controlar las convulsiones intubando la tráquea y ventilación mecánica (si aún no hay convulsiones se pasa directo al paso 2); 2) descontaminación digestiva; 3) fluidos iv; 4) monitorización electrocardiográfica (arritmias); 5) <b>gluconato cálcico al 10 % iv lento</b> para la <b>hipocalcemia</b>.</li></ul>
<p><b>Escilirósido (escila roja, <i>Urginea marítima</i> L)</b></p>
<ul>
<li><b>Glucósidos cardiacos</b> con síntomas <b>similares a la digitoxina</b>. Cebos al <b>0,02-0,3 %</b> con base de cereales; la EPA lo clasifica como altamente tóxico.</li>
<li>Rara vez intoxica porque el animal <b>nauseabunda al comer la planta</b>, la <b>absorción intestinal es baja</b> y <b>excreta rápido</b> lo absorbido. Suele corregirse solo por su <b>efecto emético intenso</b>; se da <b>jarabe de ipecacuana</b> con uno o dos vasos de agua.</li>
<li>Toxicidad: <b>perros DL50 145 mg/kg</b>, <b>gatos DL50 100 mg/kg</b>; sensibles todas las especies, sobre todo los <b>muy jóvenes</b>. Toxicocinética: absorción intestinal poco efectiva, metabolización hepática, eliminación biliar con reabsorción y renal sin metabolizar, <b>vida media 5-6 días</b>.</li>
<li>Clínica: irritación de mucosas y vómito, temblores y fibrilación muscular, <b>miosis</b> y problemas de acomodación visual, hiperestesia, incoordinación y convulsiones, <b>alteración del ritmo cardíaco</b>. <b>Muerte a los 3 días</b>; si no muere, los síntomas duran <b>hasta los 8 días</b>. Lesiones: congestión generalizada e inflamación de ganglios mesentéricos, hígado, riñones, pulmones y miocardio.</li>
<li>Tratamiento: lavado dérmico y ocular con agua <b>al menos 15 minutos</b>; monitorización electrocardiográfica; <b>evitar diuréticos</b> (pérdida de K) y <b>monitorizar el K sérico</b>; anticonvulsionantes (diazepam o pentobarbital).</li></ul>
<p><b>Colecalciferol, vitamina D3</b></p>
<ul>
<li>Forma activada de la vitamina D. Intoxicación por rodenticidas (<b>0,075 %</b>) o medicamentos humanos (<b>calcipotriol, tacalcitol</b>).</li>
<li><b>Latencia 36-48 horas</b>: fatiga, debilidad, cefalea, náuseas y anorexia; vómitos, <b>poliuria, polidipsia, proteinuria y azotemia</b> por lesión aguda de los túbulos renales; melena y hematemesis; <b>calciuria</b>; disnea con <b>bradicardia y arritmia ventricular</b>.</li>
<li>Lesiones: hígado, riñón y miocardio (<b>efecto hipercalcémico</b>); <b>estómago vacío con úlceras</b>; deshidratación, edema, hemorragia pulmonar y nefromegalia; <b>calcificaciones en riñón, corazón, estómago, pulmones y aorta</b>.</li>
<li>Tratamiento: descontaminación gastrointestinal <b>antes de las 6-8 h</b> con emesis (<b>apomorfina en perros, xilazina en gatos</b>), carbón activado y catárticos salinos (sulfato sódico); fluidos iv; <b>furosemida</b> (diuresis); <b>prednisona 1 mg/kg/día</b> (baja el Ca en sangre); <b>calcitonina de salmón</b> en humanos cada 6 h; <b>colestiramina</b>, exitosa en animales pero no en humanos; protector gástrico (omeprazol).</li></ul>
<p class="muted">Otros rodenticidas que solo se citan: brometalina, alfa-cloralosa, derivados de la urea (PNU y ANTU) y carbonato de bario.</p>`],
["Tema 28 · Tabla comparativa de los rodenticidas",`<p class="muted">El resumen que más rinde en el examen: mecanismo, latencia, signo clave y tratamiento.</p>
<table><tr><th>Tóxico</th><th>Mecanismo</th><th>Latencia</th><th>Signo clave</th><th>Tratamiento</th></tr>
<tr><td><b>Anticoagulantes</b> (warfarina, brodifacoum…)</td><td>Inhiben el complejo protrombina (II, VII, IX, X) dependiente de vit. K</td><td>Tiempo de protrombina alterado de 24-48 h a 1-3 semanas</td><td>Hemorragias, melena, equimosis y anemia</td><td>Soporte vital + <b>vit. K1</b></td></tr>
<tr><td><b>Estricnina</b></td><td>Antagonista competitivo y reversible de los receptores de la <b>glicina</b></td><td>10 min – 2 h</td><td>Tetania, postura en caballete y <b>risa sardónica</b></td><td>Pentobarbital 3-15 mg/kg o diazepam 0,5-5 mg/kg iv</td></tr>
<tr><td><b>Fósforo blanco</b></td><td>Daño directo de mucosas</td><td>Minutos (hasta 24 h)</td><td>Vómito sanguinolento con <b>olor a ajo</b></td><td>Soporte; muere por shock y paro cardiopulmonar</td></tr>
<tr><td><b>Fosfuro de cinc</b> (fosfina)</td><td>Inhibe la <b>citocromo C oxidasa</b> (complejo IV): ATP baja más del 70 %</td><td>1 hora (muerte en 3-48 h)</td><td>Vómitos sanguinolentos, taquicardia y disnea</td><td>Sin antídoto; cepillado <b>sin agua</b> y soporte</td></tr>
<tr><td><b>Sales de talio</b></td><td>Daño multisistémico (DL50 10-15 mg/kg)</td><td>SNC a la semana del contacto</td><td><b>Pérdida del pelo</b> y diarrea sanguinolenta</td><td>Soporte; la fiebre indica daño cerebral</td></tr>
<tr><td><b>Fluoroacetato</b> (1080) y fluoroacetamida (1081)</td><td>Altera la regulación de la glucosa y el Ca2+ (hipocalcemia). Fuera de los apuntes: bloquea el <b>ciclo de Krebs</b> vía fluorocitrato-aconitasa</td><td>Clínica inespecífica y precoz</td><td>Arritmias y <b>fibrilación ventricular</b></td><td>Anticonvulsivo + <b>gluconato cálcico 10 % iv lento</b></td></tr>
<tr><td><b>Escilirósido</b> (escila roja)</td><td><b>Glucósido cardiaco</b>, como la digitoxina</td><td>Muerte a los 3 días; síntomas hasta 8 días</td><td>Vómito, miosis y arritmias</td><td>Evitar diuréticos, monitorizar K y ECG</td></tr>
<tr><td><b>Colecalciferol</b> (vit. D3)</td><td><b>Hipercalcemia</b> y calcificación de tejidos</td><td>36 – 48 h</td><td>Poliuria, polidipsia y <b>bradicardia</b></td><td>Emesis antes de 6-8 h, furosemida y <b>prednisona 1 mg/kg/día</b></td></tr></table>
<p class="muted">Ojo a los pares que se confunden: la latencia de 1 hora es del <b>fosfuro de cinc</b> y la de 36-48 h del <b>colecalciferol</b>; el estómago <b>lleno</b> de cebo sin digerir es de la estricnina y el <b>vacío con úlceras</b> del colecalciferol; el gluconato cálcico es del fluoroacetato y la vit. K1 de los anticoagulantes.</p>`],
["Tema 29 · Metaldehído (molusquicida)",`<ul>
<li><b>Qué es</b>: <b>polímero cíclico del acetaldehído</b> de los <b>cebos contra caracoles y babosas</b> (pellets, gránulos, polvos o líquido). Concentración habitual <b>3-8 %</b>, <b>31 productos</b> registrados. También en <b>combustibles sólidos</b> (hornillos, barbacoas, chimeneas).</li>
<li><b>Toxicidad</b>: mortalidad elevada, más frecuente en <b>perro</b> (toxicidad moderada). <b>DL50 perro 210-600 mg/kg</b>; <b>gato 207 mg/kg</b>.</li>
<li><b>Cinética</b>: absorción gastrointestinal (baja solubilidad en agua); en estómago <b>hidrólisis ácida → acetaldehído</b>; distribución amplia, llega al SNC; el <b>8 %</b> se elimina sin metabolizar por heces y orina; el acetaldehído pasa a CO₂ y se va en el aire espirado.</li>
<li><b>Mecanismo</b>: <b>desconocido</b>. Irrita la mucosa gástrica y da <b>acidosis metabólica</b>. ¿↓ GABA? (↓ actividad inhibidora) y <b>↑ MAO</b> → ↓ serotonina y norepinefrina → ↓ umbral convulsionante.</li>
<li><b>Signos</b>: predominio nervioso (ansiedad, tremores, alucinaciones, marcha envarada, ataxia e incoordinación = borrachera), <b>nistagmo y midriasis</b>, hiperestesia, opistótonos, convulsiones tónico-clónicas y <b>sacudidas por estímulos externos (TACTO, visual y auditivo)</b>, <b>hipertermia severa</b>, movimiento de pedaleo. Taquicardia, taquipnea, mucosas pálidas e <b>hipersalivación espesa, filante y espumosa</b>. Digestivo: vómito, hematemesis, borborigmos y <b>diarrea verdosa o azulada</b>.</li>
<li><b>Evolución</b>: acidosis, <b>CID</b>, colapso, <b>ceguera temporal</b>, fallo respiratorio, anoxia secundaria, cianosis y <b>muerte en las primeras 24 h</b>.</li>
<li><b>Lesiones</b>: <b>olor estomacal a formaldehído</b>, congestión hepática, renal, pulmonar y encefálica, petequias y equimosis en mucosa digestiva, edema y hemorragias pulmonares, degeneración hepática y de células ganglionares del cerebro.</li>
<li><b>Tratamiento</b>: lavado gástrico <b>bajo anestesia</b> + carbón activado con catárticos (<b>no inducir el vómito si hay síntomas</b>), bajar la temperatura con baños y/o enemas de agua fría. Barbitúricos de acción corta: <b>pentobarbital</b> (controla los signos nerviosos y minimiza la acidosis, compite con la enzima que metaboliza el acetaldehído) y <b>fenobarbital</b> (induce el <b>citocromo P450</b> y favorece la metabolización).</li>
<li><b>Seguimiento</b>: gases en sangre (<b>anión gap</b>) y pH de la orina. <b>Pronóstico bueno si sobrevive 24 h</b> con tratamiento adecuado.</li></ul>`],
["Tema 29 · Herbicidas: clasificación",`<ul>
<li>Hay <b>2 tipos</b>: <b>selectivos</b> y <b>no selectivos</b>.</li>
<li><b>Mecanismo en la planta</b>: interferencia de la <b>fotosíntesis</b>, alteración de la <b>regulación del crecimiento</b> e interferencia en la síntesis de <b>proteínas, aminoácidos aromáticos, lípidos y carotenos</b>.</li></ul>
<table><tr><th>Categoría toxicológica</th><th>DL50</th><th>Grupos</th></tr>
<tr><td><b>1ª</b> (peligrosos o altamente peligrosos)</td><td><b>&lt; 200 mg/kg</b></td><td>Dinitrofenoles · Derivados bipiridílicos</td></tr>
<tr><td><b>2ª</b> (poco tóxicos)</td><td><b>&gt; 200 mg/kg</b></td><td>Clorofenoxiderivados · Derivados de la urea · Triazinas (con alguna excepción)</td></tr></table>
<ul>
<li><b>Químicos inorgánicos</b>: arsenicales (trióxido de arsénico, arseniato sódico), <b>boratos</b> (tetraborato sódico), <b>cianamida cálcica</b>, <b>cloratos</b> (clorato sódico y potásico) y otros (cianato potásico, cloruro mercurioso, sulfato cúprico).</li>
<li><b>Químicos orgánicos</b> (12 grupos). Los que hay que saber: <b>clorofenoxiderivados</b> (2,4-D, 2,4,5-T, MCPA, DALAPON), <b>derivados fenólicos</b> (PCP, DNP, DNOC), <b>bipiridílicos</b> (PARAQUAT = 1,1'-dimetil-4,4'-bipiridilo; DIQUAT = 1,1'-etilén-2,2'-bipiridilo; MORFAMQUAT), <b>fenilurea</b> (monurón, menurón, diurón, linurón), <b>triazinas</b> (atrazina, propazina, simazina, prometrina), triazoles (aminotriazol), arsenicales orgánicos, uracilo (bromacil, isocil), cloroacetatos, benzoicos (clorambén, dicamba) y <b>carbámicos</b> (isopropil tiocarbamatos: dialato, trialato, vernam; fenilcarbamatos: barbano, profam, clorprofam).</li></ul>`],
["Tema 29 · Cloratos y clorofenoxiderivados",`<ul>
<li><b>Cloratos (CL)</b>: <b>poco tóxicos pero muy apetecibles</b>; absorción intestinal fácil y rápida; se eliminan por <b>orina casi sin metabolizar</b>.</li>
<li><b>Mecanismo</b>: irritación del tubo digestivo + <b>metahemoglobinizante</b> + <b>hemolítico</b> → los tres provocan <b>ANOXIA</b>.</li>
<li><b>Clínica</b>: latencia <b>30 min - 4 h</b>; vómito, diarrea y cólico, <b>micción frecuente con hematuria</b>, disnea y cianosis, temblores, colapso, coma y <b>muerte en 24 h</b>. <b>Crónica</b>: anorexia, pérdida de peso y producción, <b>abortos y neonatos nacidos muertos</b>, <b>disfunción tiroidea y avitaminosis A en cerdos</b>.</li>
<li><b>Lesiones</b>: <b>sangre oscura como chocolate</b> y tejidos del mismo color, congestión, petequias y equimosis, mucosas cianóticas, sangre espesa saliendo por los orificios.</li>
<li><b>Tratamiento</b>: <b>azul de metileno al 1 %</b> en salino isotónico <b>IV</b> (repetir a los <b>15-20 min</b>): <b>vacuno y ovino 8,5-9 mg/kg</b>, <b>demás especies 4,5-5 mg/kg</b> → reduce la <b>metahemoglobina a hemoglobina</b>. Además purgantes salinos y aceites minerales. Diagnóstico por análisis de <b>sangre</b> (indicativa), orina o tejidos.</li>
<li><b>Clorofenoxiderivados (CLFD)</b>: 2,4-D (ác. 2,4-diclorofenoxiacético), 2,4,5-T (ác. 2,4,5-triclorofenoxiacético), MCPA, DALAPON. <b>Polvo blanco de fuerte olor</b>, muy <b>irritante y cáustico</b>, hidrosolubles a pH neutro y <b>más a pH alcalino</b>.</li></ul>
<table><tr><th>DL50 aguda</th><th>2,4-D</th><th>2,4,5-T</th></tr>
<tr><td>Rata</td><td>350</td><td>300</td></tr>
<tr><td>Cobayo</td><td>1000</td><td>-</td></tr>
<tr><td>Conejo</td><td>800</td><td>-</td></tr>
<tr><td><b>Perro</b></td><td><b>100</b></td><td><b>100</b></td></tr>
<tr><td>Bovinos</td><td>350</td><td>350</td></tr>
<tr><td>Ovinos</td><td>350</td><td>350</td></tr>
<tr><td>Aves</td><td>600</td><td>600</td></tr></table>
<p class="muted">Toxicidad crónica: 2,4-D a 250 mg/kg (10 días bovinos, 9 ovinos, 10 aves); 2,4,5-T a 250 mg/kg (7 días bovinos, 6 ovinos) y <b>100 mg/kg 10 días en aves</b>.</p>
<ul>
<li><b>Cinética CLFD</b>: absorción <b>digestiva 90 %</b>, distribución en sangre unidos a proteínas, acumulación en <b>hígado y riñón</b>, eliminación por <b>orina inalterados</b>. Mecanismo: irritantes y alteraciones de hígado, riñón, corazón y SNC.</li>
<li><b>Clínica y lesiones</b>: sialorrea, anorexia, indigestión, diarrea, emaciación, <b>atonía ruminal</b>, ataxia, fenómenos paralíticos, postración y muerte; hiperemia en digestivo y vísceras y fenómenos degenerativos.</li>
<li><b>Tratamiento</b>: hepatoprotectores, diuréticos y <b>alcalinización de la orina (bicarbonato sódico 10 % IV)</b>.</li></ul>`],
["Tema 29 · Dinitrofenoles y bipiridilos",`<ul>
<li><b>Dinitrofenoles (DNF)</b>: DNP y DNOC. Dosis (mg/kg): <b>DNP</b> rata oral <b>30</b>, rata subcutánea <b>25</b>, conejo oral <b>200</b>, rata oral 20-30; <b>DNOC</b> rata oral <b>8-10</b>.</li>
<li><b>Mecanismo DNF</b>: <b>desacoplan la fosforilación oxidativa</b> (cadena respiratoria mitocondrial): inhiben la formación de <b>ATP</b> → ↑ procesos oxidativos → ↑ producción de energía <b>térmica (hipertermia)</b> y <b>mecánica (hipermotilidad, taquicardia, taquipnea)</b>. Después inhiben la <b>CPK</b> (↓ ATP). Son <b>metahemoglobinizantes, menos que los cloratos</b>.</li>
<li><b>Cinética DNF</b>: absorción digestiva (máx. <b>30-50 %</b>), inhalatoria y dérmica; distribución en sangre; metabolización hepática (conjugación); eliminación por orina (conjugadas) y heces.</li>
<li><b>Clínica DNF</b>: <b>hipertermia intensa y rápida</b>, sed intensa y sudoración, deshidratación, anorexia, taquipnea, oliguria y cólico, <b>orina y heces amarillentas</b> (color de los nitrofenoles), coma y muerte. Lesiones: <b>color amarillento generalizado</b>, hiperemia congestiva de parénquimas y fenómenos degenerativos.</li>
<li><b>Tratamiento DNF</b>: <b>oxigenoterapia</b>, tranquilizantes fenotiazínicos, bajar la temperatura y rehidratar. Dérmica: baños de agua fría. Ingestión: purgante salino (<b>sulfato de magnesio</b>) y lavado gástrico (<b>bicarbonato 5 %</b>).</li>
<li><b>Bipiridilos (BPD)</b>: derivados de la <b>piridina</b> con <b>dos amonios cuaternarios</b>, sólidos cristalinos blancos, muy solubles y <b>cáusticos</b>. Paraquat = dicloruro o sal dimetilsulfato; diquat = <b>sal dibromuro</b>. Son <b>aceptores de electrones</b> → <b>radicales libres</b>.</li></ul>
<table><tr><th>DL50 oral (mg/kg)</th><th>Diquat</th><th>Paraquat</th><th>Morfamquat</th></tr>
<tr><td>Rata</td><td>300</td><td>150</td><td>345</td></tr>
<tr><td>Conejo</td><td>190</td><td>-</td><td>-</td></tr>
<tr><td>Perro</td><td>200</td><td>-</td><td>-</td></tr>
<tr><td>Carnero</td><td>-</td><td>100</td><td>-</td></tr>
<tr><td><b>Bovino</b></td><td><b>30</b></td><td><b>60</b></td><td>-</td></tr></table>
<ul>
<li><b>Cinética BPD</b>: el <b>diquat se absorbe mal en el digestivo</b>; el paraquat por vía cutánea, respiratoria y digestiva (&lt; 20 %). Distribución por sangre <b>sin unión a proteínas</b>. <b>Acumulación selectiva en pulmón (deficitario en SOD)</b>. Eliminación por heces y orina en 48 h sin metabolizar y por <b>leche</b>.</li>
<li><b>Esquema del mecanismo</b>: redox → genera un e⁻ → e⁻ + O₂ → <b>radicales superóxido O₂⁻</b> → <b>SOD</b> → H₂O₂ → <b>catalasa</b> → H₂O. Los <b>lípidos poliinsaturados</b> pasan a <b>lípidos hidroperóxidos</b> → <b>radicales libres lipídicos</b> → <b>alteración de membranas</b>; la <b>GSH-Px (GSH y Se)</b> los desvía a lípidos alcoholes atóxicos. <b>También es irritante y cáustico.</b></li>
<li><b>Clínica BPD</b>: vómitos, anorexia, depresión del SNC, <b>temperatura corporal NORMAL</b>, dolor abdominal, <b>ictericia y disnea intensas</b>, deshidratación, cianosis o palidez, taquicardia, taquipnea, uremia y, en radiografía, <b>edema y fibrosis (enfisema pulmonar)</b>.</li>
<li><b>Lesiones BPD</b>: congestión, edema y hemorragias pulmonares, <b>úlceras en la lengua</b>, hígado, riñones y bazo congestivos y aumentados.</li>
<li><b>Tratamiento BPD</b>: <b>no es específico</b> y el <b>O₂ está contraindicado</b>. <b>Superóxido-dismutasa</b> (aumenta la supervivencia en ratas), <b>no se administra selenio</b>, sí glutatión o precursores. Para eliminar el paraquat: <b>catárticos</b> y <b>diuresis forzada (24 h) con manitol</b>. <b>Pronóstico malo pasadas las 24 h</b>.</li></ul>
<p class="muted"><b>Respuesta modelo (desarrollo, 3er parcial)</b> — <b>Diquat</b>: aceptor de electrones que genera radicales libres (peroxidación lipídica y alteración de las membranas), con acumulación pulmonar (pp. 40-41).</p>`],
["Tema 29 · Fenilurea y triazinas",`<ul>
<li><b>Fenilurea</b> (monurón, linurón, fenurón): sólidos blancos <b>poco hidrosolubles</b>, de gran <b>estabilidad química</b> y <b>escasa toxicidad</b>; acción <b>inductora de enzimas microsomales hepáticos</b>.</li>
<li><b>DL50 oral en rata</b>: monurón <b>3500</b>, linurón <b>4000</b>, fenurón <b>6400</b> mg/kg.</li></ul>
<table><tr><th>Fenilurea</th><th>Bovinos</th><th>Ovinos</th><th>Aves</th></tr>
<tr><td>Monurón</td><td>500 mg/kg · 1 día</td><td>100 · 4 días</td><td>100 · 10 días</td></tr>
<tr><td>Linurón</td><td>50 · 10 días</td><td>50 · 8 días</td><td>100 · 8 días</td></tr>
<tr><td>Fenurón</td><td>500 · 2 días</td><td>100 · 8 días</td><td>500 · 3 días</td></tr></table>
<ul>
<li><b>Patología fenilurea</b>: cuadro <b>gastrointestinal</b> (diarrea, anorexia, depresión e incoordinación motora) con <b>hiperemia renal, hepática, pulmonar, esplénica y meníngea</b>. Tratamiento: favorecer la eliminación y <b>protectores hepáticos</b>.</li>
<li><b>Triazinas, DL50 oral en rata</b>: atrazina <b>3080</b>, simazina <b>&gt; 5000</b>, prometrina <b>3150</b> mg/kg.</li></ul>
<table><tr><th>Triazínicos</th><th>Bovinos</th><th>Ovinos</th><th>Aves</th></tr>
<tr><td>Atrazina</td><td>25 · 2 días</td><td>10 · 8 días</td><td>50 · 10 días</td></tr>
<tr><td>Simazina</td><td>25 · 3 días</td><td><b>50 · 17 días</b></td><td>100 · 10 días</td></tr>
<tr><td>Prometrina</td><td>50 · 2 días</td><td>100 · 8 días</td><td>250 · 10 días</td></tr></table>
<ul>
<li><b>Clínica triazinas</b>: anorexia, depresión, disnea y <b>contracciones tónico-clónicas de la musculatura esquelética</b>.</li>
<li><b>Lesiones triazinas</b>: <b>hiperemia congestiva</b> (riñón y pulmón), <b>microhemorragia</b> (miocardio y riñón) y <b>hemorragia petequial difusa</b> en todo el organismo.</li></ul>`],
["Tema 29 · Fungicidas",`<ul>
<li><b>Minerales</b>: con <b>cobre</b> (sulfato de Cu pentahidrato, oxicloruro de cobre), con <b>mercurio</b> (inorgánicos: cloruro mercúrico y mercurioso; orgánicos: cloruro de fenilmercurio y de etilmercurio, acetato de fenilmercurio) y con <b>estaño</b> (acetato e hidróxido de trifenilestaño).</li>
<li><b>Orgánicos</b>: <b>ditiocarbamatos</b>, guanidínicos (<b>DODINE</b>), derivados del benceno (PCNB, TCNB), <b>derivados del fenol</b> (PCP, DNP, DNOC) y quinónicos (cloranil, diclone).</li></ul>
<table><tr><th>Mercuriales orgánicos</th><th>DL50</th></tr>
<tr><td>Cloruro de fenilmercurio</td><td><b>20-50 mg/kg</b></td></tr>
<tr><td>Acetato de fenilmercurio</td><td>60-100 mg/kg</td></tr>
<tr><td>Cloruro de etilmercurio</td><td>40-56 mg/kg</td></tr></table>
<ul>
<li><b>Mercuriales: cómo ocurre</b> — se usan en el <b>tratamiento de semillas</b> y se ingieren granos y semillas contaminados; especies más sensibles: <b>cerdos y aves</b>.</li>
<li><b>Clínica mercuriales</b>: <b>trastornos de visión</b>, anorexia con <b>temperatura normal o baja</b>, alteraciones locomotoras y <b>hematuria</b>, <b>intensa diarrea hemorrágica</b>, temblores, parálisis y <b>muerte en 1 semana</b>. En <b>aves</b>: inflamación <b>necrótica del buche y el estómago</b>, diarrea con heces hemorrágicas y lesiones del SNC con incoordinación y temblores.</li>
<li><b>Lesiones mercuriales</b>: congestión y necrosis digestiva, riñones aumentados y congestivos, degeneración hepática y del SNC.</li>
<li><b>Tratamiento mercuriales</b>: acelerar la eliminación con <b>soluciones salinas</b>, inactivar con <b>tiosulfato sódico</b> (oral o IV), <b>quelar el mercurio con BAL</b>, antibióticos frente a infecciones secundarias y <b>dieta rica en proteínas</b>.</li>
<li><b>Fenólicos (PCP, DNP, DNOC) — dosis mínima letal oral</b>: <b>perro 70</b>, ovejas 120, ternero 140 mg/kg. Los <b>adultos resisten más que los jóvenes</b> y los <b>rumiantes más que los monogástricos</b>.</li>
<li><b>Factores que ↑ la toxicidad</b>: alta temperatura ambiente, actividad física intensa, malas condiciones de vida, exposiciones previas e <b>hipertiroidismo</b>. <b>La ↓</b>: bajas temperaturas, <b>medicación antitiroidea</b> e individuos muy grasos.</li>
<li><b>Cinética y mecanismo fenólicos</b>: buena absorción <b>digestiva y cutánea</b> (vapores de PCP por vía pulmonar), eliminación <b>lenta y por orina</b>. Elevan el <b>metabolismo basal</b> y luego <b>desacoplan la fosforilación oxidativa</b> (↑ procesos oxidativos con pérdida de calor) → <b>falta de oxígeno para la vida celular</b>.</li>
<li><b>Clínica fenólicos</b>: <b>hipertermia</b>, taquicardia y disnea, letargo, tambaleo o incoordinación, sed, oliguria y debilidad, cianosis, colapso y <b>convulsiones finales</b>; <b>abortos</b> en gestantes.</li>
<li><b>Tratamiento fenólicos</b>: dérmica → lavados con agua y jabón; ingestión → purgantes salinos o lavado gástrico con <b>bicarbonato sódico 5 %</b>. <b>Oxígeno en abundancia</b> (al revés que en los bipiridilos), bajar la temperatura (agua fría, hielo o alcohol), <b>tranquilizantes fenotiazínicos</b> (facilitan el manejo, bajan la demanda de O₂ y ayudan a enfriar) y, si sobrevive, antibióticos, corticoides y complejos vitamínicos.</li></ul>`],
["Pregunta corta: mecanismo de acción de los herbicidas cloratos",`<p class="muted">«Pregunta corta de la recopilación: ¿En qué consiste el mecanismo de acción de los herbicidas cloratos?»</p>
<p>Los cloratos (clorato sódico y potásico) son <b>herbicidas inorgánicos</b> (apuntes, p. 35), poco tóxicos pero muy apetecibles, de absorción intestinal fácil y rápida y eliminación por orina casi sin metabolizar (apuntes, p. 36).</p>
<p><b>Mecanismo de acción (apuntes, p. 36) — tres acciones que confluyen en ANOXIA:</b></p>
<ul>
<li><b>Irritación del tubo digestivo.</b></li>
<li><b>Acción metahemoglobinizante.</b></li>
<li><b>Acción hemolítica.</b></li>
</ul>
<p>Esa anoxia explica el cuadro: periodo de latencia de 30 min a 4 h, vómito, diarrea y cólico, micción frecuente con hematuria, insuficiencia respiratoria (disnea y cianosis), temblores, colapso, coma y muerte en unas 24 h (apuntes, p. 36). En las lesiones destaca la <b>sangre oscura «color chocolate»</b> con los tejidos del mismo tono y las mucosas cianóticas (apuntes, p. 37).</p>
<p><b>Apoyo para el tratamiento:</b> azul de metileno al 1 % en suero salino isotónico i.v. (vacuno y ovino 8,5-9 mg/kg; resto de especies 4,5-5 mg/kg), repitiendo a los 15-20 min si hace falta, porque <b>reduce la metahemoglobina a hemoglobina</b>; además purgantes salinos y aceites minerales (apuntes, p. 37).</p>`],
["Pregunta corta: factores que modifican la toxicidad de los rodenticidas anticoagulantes",`<p class="muted">«Pregunta corta de la recopilación: Enumere al menos tres factores que puedan modificar la toxicidad de los rodenticidas anticoagulantes.»</p>
<p><b>Los tres factores de los apuntes (p. 24), todos aumentan la toxicidad:</b></p>
<ul>
<li><b>Dieta rica en grasa</b> &rarr; deficiencia de vitamina K.</li>
<li><b>Tratamiento oral prolongado con antibióticos</b> &rarr; deficiencia de vitamina K (destruyen la flora que la sintetiza).</li>
<li><b>Enfermedades hepáticas</b> &rarr; menor producción de protrombina.</li>
</ul>
<p>Los dos primeros se resumen como «aumenta la susceptibilidad de los animales a la warfarina» (apuntes, p. 24). Encaja con el mecanismo: los factores de coagulación dependientes de vitamina K son la <b>protrombina (II) y los factores VII, IX y X</b>; se inhibe el complejo protrombina, aumenta el tiempo de coagulación y además aumenta la permeabilidad capilar (apuntes, p. 24).</p>
<p><b>Si piden más factores</b>, los apuntes añaden en los riesgos específicos del grupo (p. 23): la <b>especie</b> (a veces la toxicidad es similar para roedores, animales domésticos y personas), la aparición de <b>resistencias</b> y el uso de compuestos de segunda generación con potencial tóxico más elevado (difenacoum, brodifacoum, difetialona, bromadiolona, flocumafén). La dosis también cuenta: no es lo mismo dosis única que repetida (warfarina en perro, 50 mg/kg en dosis única frente a 5 mg/kg durante 5-15 días; apuntes, p. 24).</p>`],
["Pregunta corta: tratamiento de la intoxicación por clorpirifós",`<p class="muted">«Pregunta corta de la recopilación: Ante un intoxicado por clorpirifós, ¿cuáles serían las pautas de tratamiento a seguir?»</p>
<p>El clorpirifós es un <b>organofosforado</b> (fosforotioato; apuntes, p. 16), así que se aplica el tratamiento de los OP.</p>
<p><b>Tratamiento genérico (apuntes, p. 20):</b></p>
<ul>
<li><b>Sulfato de atropina</b>: inicio con 0,2-1 mg/kg (¼ por vía intravenosa y el resto subcutánea); se repite a las 6 h si recidivan los signos (0,1-0,5 mg/kg) y después se evalúa la evolución clínica.</li>
<li><b>Descontaminación digestiva</b>: inducir el vómito si han pasado menos de 2 h, o lavado gástrico con carbón activado (2-4 g/kg) y sulfato sódico o magnésico (0,25-0,5 g/kg de carbón).</li>
<li><b>Exposición dérmica</b>: lavar al animal con agua jabonosa, a ser posible alcalina (por ejemplo carbonato sódico al 2 %).</li>
<li><b>Diazepam</b> o barbitúricos de acción corta para los espasmos y convulsiones.</li>
<li><b>Vigilancia intensiva del aparato respiratorio</b> y rehidratación para mantener la volemia.</li>
<li><b>Furosemida</b> para prevenir el edema pulmonar y favorecer la eliminación renal del tóxico.</li>
</ul>
<p><b>Tratamiento específico (apuntes, p. 20):</b> <b>pralidoxima</b> 20 mg/kg por vía intramuscular o intravenosa, repitiendo si es necesario a las 12 h (dos veces); es más efectiva junto con la atropina. La recuperación suele llevar de 2-4 días hasta una semana.</p>
<p><b>Ojo con el gato:</b> el clorpirifós es justo el ejemplo del <b>síndrome intermedio</b> de los apuntes (p. 19), que aparece a las 24-96 h en gatos tras exposiciones únicas o repetidas a dosis bajas, con anorexia, diarrea, debilidad, temblores, posturas anómalas, depresión y muerte por parálisis respiratoria brusca: hay que mantener la vigilancia aunque el animal parezca estable.</p>`],
["Pregunta corta: hallazgos postmortem en la intoxicación por metaldehído",`<p class="muted">«Pregunta corta de la recopilación: Describa brevemente los principales hallazgos postmortem en un intoxicado o envenenado por metaldehído.»</p>
<p><b>Lesiones y hallazgos postmortem (apuntes, p. 34):</b></p>
<ul>
<li><b>Olor estomacal a formaldehído</b> (el dato más característico).</li>
<li><b>Intensa congestión</b> hepática, renal, pulmonar y encefálica.</li>
<li><b>Petequias y hemorragias equimóticas en la mucosa gastrointestinal.</b></li>
<li><b>Edema agudo y hemorragias pulmonares.</b></li>
<li><b>Degeneración hepática y de las células ganglionares del cerebro.</b></li>
</ul>
<p><b>Para situarlo:</b> el metaldehído es el molusquicida de los cebos contra caracoles y babosas, un polímero cíclico del acetaldehído al 3-8 %; en el estómago se hidroliza a acetaldehído, de ahí el olor (apuntes, p. 33). En vida el cuadro es nervioso (hiperestesia, espasmos, opistótonos, convulsiones tónico-clónicas), con hipertermia severa, taquicardia, taquipnea, hipersalivación espumosa y diarrea verdosa o azulada; puede evolucionar a acidosis, CID, ceguera temporal, fallo respiratorio y muerte en las primeras 24 h (apuntes, pp. 33-34).</p>`],
["Pregunta corta: mecanismo de acción del DDT",`<p class="muted">«Pregunta corta de la recopilación: ¿Por qué se caracteriza el mecanismo de acción del DDT?»</p>
<p>El DDT es un insecticida <b>organoclorado difenilalifático</b> (DL50 113-450 mg/kg; apuntes, p. 11) y, como todos los organoclorados, se caracteriza por ser un <b>estimulante del SNC sin receptores específicos</b> (apuntes, p. 13).</p>
<p><b>Secuencia del mecanismo (apuntes, p. 13):</b></p>
<ul>
<li>Penetra en las neuronas &rarr; <b>desequilibrio electrolítico</b> de la neurona.</li>
<li>&rarr; Desciende el <b>umbral de excitabilidad neuronal</b>.</li>
<li>&rarr; <b>Hiperexcitabilidad permanente</b>.</li>
<li>&rarr; <b>Agotamiento de neurotransmisores</b> &rarr; anomalías en el comportamiento.</li>
<li>En ocasiones se produce bloqueo de las neuronas &rarr; depresión.</li>
<li>Aumento de amoniaco y glutamina &rarr; <b>convulsiones y temblores</b>.</li>
</ul>
<p>De ahí la sintomatología: agitación y comportamiento «enloquecido», hipersalivación, fasciculaciones y temblores, blefarospasmo, alteraciones locomotoras, convulsiones tónico-clónicas prolongadas, hipertermia, coma y muerte (apuntes, p. 13). <b>No hay antídoto</b>: tratamiento sintomático con barbitúricos y metocarbamol, y están contraindicados los tranquilizantes fenotiazínicos (bajan el umbral convulsivo) y la epinefrina (apuntes, p. 14).</p>`],
["Pregunta de desarrollo: elegir entre dos insecticidas con la misma DL50",`<p>Enunciado del 3er parcial (15/5/25): un ganadero busca un insecticida para insectos voladores; dan dos productos con su dosis y sus componentes, con la misma DL50, y hay que elegir el mejor y razonarlo. Con lo que recoge el tema 26 (pp. 1-4) el razonamiento es:</p>
<ul>
<li><b>La DL50 que importa es la del preparado, no la del activo.</b> Para un preparado con una sola sustancia activa: <b>DL50 preparado = (L × 100) / C</b>, con L la DL50 oral en rata del activo y C su porcentaje (p. 2). Si los dos productos llevan el mismo activo con la misma L, el <b>menos concentrado</b> tiene mayor DL50 y es el menos peligroso.</li>
<li><b>Si el producto lleva varios activos</b>, se aplica la fórmula de mezclas (p. 3): Ca/Ta + Cb/Tb + … + Cz/Tz = 100/Tm, de donde se despeja la DL50 oral de la mezcla (Tm) y se compara entre productos. Alternativas que admite el tema: pedir al fabricante los datos de toxicidad aguda oral y dérmica en rata de la mezcla real, o clasificarla por su <b>componente más peligroso</b>.</li>
<li><b>Traducir la DL50 obtenida a categoría.</b> Con el cuadro del GHS (p. 2) y el de la OMS (p. 3). Cuidado: en la OMS los límites cambian según sea <b>sólido o líquido</b> y según la vía <b>oral o dérmica</b>, de modo que dos preparados con la misma DL50 pueden caer en clases distintas si uno es sólido y otro líquido.</li>
<li><b>Vía de exposición y presentación.</b> La OMS valora la toxicidad por vía dérmica y oral, y si el activo es <b>volátil</b>, acumulativo, alergénico, particularmente peligroso o induce daño irreversible a órganos vitales (p. 2). Para insectos voladores la presentación suele ser fumigante o aerosol (p. 3), lo que aumenta la exposición respiratoria y dérmica del aplicador y de los animales: conviene el que exija menos manipulación del concentrado y menor riesgo por esa vía.</li>
<li><b>Otros componentes.</b> Inertes, coadyuvantes y aditivos (p. 1) modifican dosificación, aplicación y propiedades físico-químicas, pero quien marca la clasificación es el activo o el componente más peligroso de la mezcla.</li>
<li><b>Residuos.</b> Si el tratamiento se hace sobre animales o en el entorno de alimentos o piensos, hay que contar con el límite máximo de residuos, con el valor por defecto de <b>0,01 mg/kg</b> (p. 5).</li>
</ul>
<p class="muted">Lo que las pp. 1-10 no dan: no hay datos de persistencia, de periodo de seguridad ni de toxicidad comparada por especie animal, así que esos argumentos no se pueden apoyar en este tema. Los fumigantes en forma de gas o volátiles, además, quedan fuera de la clasificación de peligrosidad de la OMS (p. 4).</p>`],
["Pregunta de desarrollo: mecanismo de acción en una frase",`<p class="muted">Cayó en el 3er parcial (15/5/25): pedía el mecanismo de acción en una palabra o frase muy corta de diquat, carbamato, organofosforado y lindano. </p>
<ul>
  <li><b>Diquat (bipiridilo):</b> magnífico aceptor de electrones que genera <b>radicales libres</b>, responsables de su acción herbicida y de su toxicidad (peroxidación lipídica) <i>(p. 40)</i>.</li>
  <li><b>Carbamato:</b> inhibe la acetilcolinesterasa de forma <b>reversible y sin envejecimiento</b> de la enzima, acumulándose ACh en la sinapsis <i>(p. 21)</i>.</li>
  <li><b>Organofosforado:</b> sustituye a la ACh en el sitio activo de las colinesterasas e <b>inhibe la AChE de forma irreversible</b> (con envejecimiento de la enzima), por lo que la ACh sigue despolarizando la membrana postsináptica <i>(pp. 17-18)</i>.</li>
  <li><b>Lindano (organoclorado):</b> <b>estimulante del SNC sin receptores específicos</b>: altera el equilibrio electrolítico de la neurona y <b>baja el umbral de excitabilidad</b>, con hiperexcitabilidad permanente <i>(p. 13)</i>.</li>
</ul>
<p class="muted">Si además te piden piretroides o neonicotinoides: piretroide = alarga el potencial de acción actuando sobre los canales de sodio del nervio (p. 21); neonicotinoide = agonista selectivo e irreversible de los receptores nicotínicos de la ACh del insecto (p. 22).</p>`],
["Pregunta de desarrollo: plaga de topillos en España",`<p class="muted">Pregunta de desarrollo de la recopilación: «Con qué fueron tratados la plaga de topillos en España» (reco p. 46, n.º 4).</p>
<p>Con <b>rodenticidas anticoagulantes</b>. Lo que sí está en tus apuntes sobre ellos:</p>
<ul>
<li>Son derivados de la <b>4-hidroxicumarina</b> y de la <b>indano-1,3-diona</b> (apuntes, p. 23).</li>
<li><b>1.ª generación:</b> warfarina, coumatetralilo, coumafurilo, coumaclor (cumarinas) y clorofacinona, difacinona, pindona, valona (indandionas). <b>2.ª generación:</b> difenacoum, brodifacoum, difetialona, bromadiolona y flocumafén (apuntes, p. 23).</li>
<li>Riesgos específicos: toxicidad parecida para roedores y animales domésticos, contacto accidental, aparición de resistencias y rodenticidas nuevos más tóxicos (apuntes, p. 23).</li>
<li>Fuentes: consumo de cebos y <b>ingestión de ratas envenenadas</b> (intoxicación secundaria) (apuntes, p. 23).</li>
</ul>
<p class="muted">El episodio concreto de los topillos (Castilla y León) no aparece en tus apuntes.</p>`],
["Pregunta de desarrollo: tratamiento del metaldehído",`<p class="muted">Pregunta de desarrollo de la recopilación: «Tratamiento metaldehído» (reco p. 48, n.º 25).</p>
<p>Molusquicida en cebos (pellets) contra caracoles y babosas; polímero cíclico del acetaldehído. Cursa con convulsiones e hipertermia severa, sin antídoto específico (apuntes, p. 33-34).</p>
<ul>
<li><b>Descontaminación digestiva:</b> lavado gástrico bajo anestesia y carbón activado con catárticos. <b>No inducir el vómito</b> en animales sintomáticos (apuntes, p. 34).</li>
<li><b>Bajar la temperatura</b> por medios físicos: baños y enemas de agua fría (apuntes, p. 34).</li>
<li><b>Barbitúricos de acción corta:</b> <b>pentobarbital</b> (controla los signos nerviosos y minimiza la acidosis, por competición con la enzima que metaboliza el acetaldehído) y <b>fenobarbital</b> (favorece la metabolización del metaldehído induciendo el citocromo P450) (apuntes, p. 34).</li>
<li><b>Seguimiento:</b> monitorizar gases en sangre (anión gap) y pH de la orina para controlar la acidosis metabólica. Pronóstico bueno si el animal supera las 24 horas con tratamiento adecuado (apuntes, p. 35).</li>
</ul>`],
["Pregunta de desarrollo: síntomas de la estricnina",`<p class="muted">Pregunta de desarrollo de la recopilación: «Síntomas de la estricnina» (reco p. 48, n.º 26).</p>
<p>Periodo de latencia de <b>10 minutos a 2 horas</b> (apuntes, p. 26). Actúa como antagonista competitivo y reversible de los receptores de la <b>glicina</b> en el SNC, con estimulación incontrolada del músculo esquelético.</p>
<ul>
<li>Temor, nerviosismo, tensión y rigidez.</li>
<li><b>Contracciones tetánicas violentas</b>, desencadenadas por estímulos sensoriales.</li>
<li>Hiperexcitabilidad y <b>postura en caballete</b>; extremidades y cuerpo rígidos, cuello arqueado y orejas erguidas.</li>
<li>Labios dirigidos hacia atrás: <b>risa sardónica</b>.</li>
<li>Anoxia y <b>muerte por parálisis medular</b> (entre 10 minutos y 24 horas), con rigidez cadavérica rápida y sin lesiones macro ni microscópicas características (apuntes, p. 26).</li>
</ul>`],
["Pregunta de desarrollo: mecanismo de acción de los organofosforados",`<p class="muted">Pregunta de desarrollo de la recopilación: «Mecanismo de acción de organofosforados» (reco p. 48, n.º 28).</p>
<ul>
<li>Los OP son <b>análogos de la acetilcolina</b>: sustituyen a esta en el sitio activo de las colinesterasas y producen una <b>inhibición de la acetilcolinesterasa</b> de forma competitiva e irreversible (apuntes, p. 18).</li>
<li>Secuencia: formación de complejos de micelas → <b>fosforilación de la enzima</b> → posible reacción de <b>reactivación</b> → <b>envejecimiento</b> de la enzima (apuntes, p. 17).</li>
<li>Si pasa tiempo se produce el <b>envejecimiento</b>: la enzima fosforilada se convierte en una molécula estable que ya no se puede romper, por eso las <b>oximas (pralidoxima, 20 mg/kg IM o IV)</b> deben administrarse cuanto antes (apuntes, p. 17 y 20). En los carbamatos la inhibición es reversible, no hay envejecimiento y no se usa pralidoxima (apuntes, p. 21).</li>
<li>Consecuencia: la ACh sigue despolarizando la membrana postsináptica → <b>estimulación continua de receptores muscarínicos, nicotínicos y centrales</b> → fase muscarínica (secreciones, salivación, vómitos, diarrea, miosis, broncoconstricción, bradicardia), fase nicotínica (temblores, fasciculaciones, convulsiones, debilidad muscular, midriasis) y alteración del SNC (apuntes, p. 18-19).</li>
<li>Tratamiento genérico: <b>sulfato de atropina</b> 0,2-1 mg/kg (1/4 IV y el resto SC), repetible a las 6 h (apuntes, p. 20).</li>
</ul>`],
["Pregunta de desarrollo: diagnóstico diferencial de los organoclorados",`<p class="muted">Pregunta de desarrollo de la recopilación: «Diagnóstico diferencial organoclorados» (reco p. 48, n.º 29; la recopilación anota: encefalopatía infecciosa, rabia, estricnina).</p>
<p>Los OC dan un cuadro de <b>estimulación del SNC</b> (agitación, hipersalivación, temblores, convulsiones tónico-clónicas, hipertermia), así que hay que diferenciarlos de (apuntes, p. 14):</p>
<ul>
<li><b>Procesos no tóxicos:</b> encefalopatía, <b>rabia</b> y eclampsia.</li>
<li><b>Otros tóxicos convulsivantes:</b> estricnina, metaldehído, cafeína, teobromina, nicotina, organofosforados, carbamatos, <b>plomo</b>, monofluoroacetato sódico (1080) y micotoxinas tremorgénicas (penitrem A, roquefortina).</li>
</ul>
<p>Recuerda que no hay antídoto: tratamiento sintomático con barbitúricos y metocarbamol, y están <b>contraindicados</b> los tranquilizantes fenotiazínicos (bajan el umbral convulsivo) y la epinefrina (apuntes, p. 14).</p>`],
["Pregunta de desarrollo: diagnóstico diferencial del paraquat",`<p class="muted">Pregunta de desarrollo de la recopilación: «Diagnóstico diferencial paraquat» (reco p. 48, n.º 30; la recopilación responde: con otros de clase II moderadamente peligrosos, oliquat, lindano…).</p>
<p class="muted">Tus apuntes no recogen un listado de diagnósticos diferenciales del paraquat.</p>
<p>Lo que sí dan para orientar el diagnóstico (apuntes, p. 40-41):</p>
<ul>
<li>Es un <b>bipiridílico</b> cáustico, aceptor de electrones, que genera <b>radicales libres</b>; se acumula selectivamente en el <b>pulmón</b> (deficitario en SOD).</li>
<li>Cuadro característico: vómitos y anorexia, úlceras en lengua, ictericia y <b>disnea intensa</b>, uremia, y en radiografía <b>edema y fibrosis pulmonar</b> (enfisema), con temperatura corporal normal.</li>
<li>El diquat se absorbe mal en el digestivo y el paraquat se absorbe por vía cutánea, respiratoria y digestiva (&lt;20 %).</li>
</ul>`],
["Pregunta de desarrollo: brodifacoum, bromadiolona y difenacoum",`<p class="muted">Pregunta de desarrollo de la recopilación: «Brodifacoum, bromadiolona y difenacoum» (reco p. 48, n.º 31).</p>
<ul>
<li>Son <b>rodenticidas anticoagulantes de 2.ª generación</b> («superwarfarinas»), junto con la difetialona y el flocumafén (apuntes, p. 23).</li>
<li>Mucho más tóxicos que los de 1.ª generación: <b>DL50 brodifacoum 0,26 mg/kg</b>, <b>bromadiolona 1,12</b> y <b>difenacoum 1,8</b>, frente a <b>warfarina 58</b> o pindona 50 (apuntes, p. 24). Una sola dosis puede matar.</li>
<li>Mecanismo: inhibición del complejo de la protrombina (factores dependientes de la vitamina K: protrombina, VII, IX y X), aumento del tiempo de coagulación y de la permeabilidad capilar, con menor agregación plaquetaria (apuntes, p. 24).</li>
<li>Los signos tardan <b>días</b> en aparecer: hemorragia nasal, encías sangrantes, hematuria, melena, equimosis, anemia, fatiga y disnea de esfuerzo (apuntes, p. 25).</li>
<li>Diagnóstico por <b>tiempo de protrombina</b> (elevado entre 24-48 h y 1-3 semanas); tratamiento de soporte y <b>vitamina K</b> (apuntes, p. 25).</li>
</ul>`],
["Pregunta de desarrollo: mecanismo de los derivados fenólicos",`<p class="muted">Pregunta de desarrollo de la recopilación: «Mecanismo de acción de derivados fenólicos» (reco p. 49, n.º 44; la recopilación responde: desacoplan la fosforilación oxidativa hepática, disminuyen el ATP y aumentan los procesos oxidativos, con liberación de energía térmica y mecánica).</p>
<p>Los derivados fenólicos (pentaclorofenol PCP, dinitrofenol DNP, dinitro-orto-cresol DNOC) son herbicidas y fungicidas de <b>1.ª categoría</b> (DL50 &lt; 200 mg/kg) (apuntes, p. 35-36 y 43).</p>
<ul>
<li><b>Desacoplamiento de la fosforilación oxidativa</b> en la cadena respiratoria mitocondrial: se inhibe la formación de ATP, aumentan los procesos oxidativos y la producción de energía (apuntes, p. 39).</li>
<li>Esa energía se libera como: <b>térmica</b> → hipertermia intensa; y <b>mecánica</b> → hipermotilidad, taquicardia y taquipnea (apuntes, p. 39).</li>
<li>Después se inhibe la <b>creatín-fosfoquinasa (CPK)</b>, con lo que el ATP baja todavía más (apuntes, p. 39).</li>
<li>Tienen además acción <b>metahemoglobinizante</b>, menor que la de los cloratos (apuntes, p. 39).</li>
<li>Clínica asociada: hipertermia, sed intensa y sudoración, deshidratación progresiva, anorexia, taquipnea, oliguria, cólico, orina y heces amarillentas, coma y muerte. Tratamiento: oxigenoterapia, fenotiazínicos, bajar la temperatura y rehidratar (apuntes, p. 39-40).</li>
</ul>`],
["Pregunta de desarrollo: cronopatía (neuropatía) retardada",`<p class="muted">Pregunta de desarrollo de la recopilación: «Compuestos asociados a cronopatía retardada» (reco p. 49, n.º 45; respuesta: organofosforados).</p>
<p>En tus apuntes aparece como <b>toxicidad retardada (OPIDN)</b>, una de las formas particulares de intoxicación por <b>organofosforados</b> (apuntes, p. 19):</p>
<ul>
<li>Compuestos implicados: por ejemplo el <b>triclorfón</b> y el <b>malatión</b>.</li>
<li>Produce <b>paresia progresiva e irreversible del tren posterior</b>, que evoluciona a parálisis, con degeneración axonal y desmielinización por inhibición de la <b>esterasa neurotóxica</b>.</li>
<li><b>No hay antídoto.</b></li>
<li>No confundir con el <b>síndrome intermedio</b> (24-96 h, descrito en gatos expuestos a clorpirifós): anorexia, diarrea, debilidad, temblores, posturas anómalas, depresión y muerte por parálisis respiratoria brusca (apuntes, p. 19).</li>
</ul>`],
["Pregunta de desarrollo: endosulfán (y oxidación de grasas)",`<p class="muted">Pregunta de desarrollo de la recopilación: «Derivados peligrosos de la oxidación de grasas / Síntomas de la intoxicación por endosulfán» (reco p. 49, n.º 47; la recopilación responde que en fauna silvestre provoca conducta agresiva y menor aprendizaje, que se acumula en tejidos grasos con biomagnificación y que en exposición crónica da tumores, aberraciones cromosómicas y trastornos reproductivos y endocrinos).</p>
<p class="muted">Ni los derivados de la oxidación de grasas ni los efectos concretos del endosulfán aparecen en tus apuntes.</p>
<p>Lo que sí dicen tus apuntes del endosulfán, como <b>organoclorado ciclodiénico</b> (apuntes, p. 11-13):</p>
<ul>
<li>DL50 en rata: <b>43 mg/kg por vía oral</b> y 130 mg/kg por vía dérmica (de los OC más tóxicos, tras el endrín con 7,5) (apuntes, p. 12).</li>
<li>Como todos los OC: muy persistente y poco biodegradable, insoluble en agua y muy soluble en grasas, con <b>bioacumulación y biomagnificación</b>; atraviesa BHE y BFP, y se acumula en hígado y grasa con eliminación muy lenta (apuntes, p. 12-13).</li>
<li>Clínica: estimulación del SNC — agitación y comportamiento anómalo, hipersalivación, fasciculaciones y temblores, blefarospasmo, alteraciones locomotoras, convulsiones tónico-clónicas, hipertermia, coma y muerte; en intoxicación crónica, falta de apetito y alteraciones del sistema reproductor (apuntes, p. 13).</li>
</ul>`],
["Pregunta de desarrollo: síntomas de la intoxicación por paraquat",`<p class="muted">Pregunta de desarrollo de la recopilación: «Síntomas de la intoxicación por paraquat» (reco p. 49, n.º 48; la recopilación enumera: neurotóxicos crónicos, sistema inmunitario, inductores enzimáticos y sistema reproductor).</p>
<p>Según tus apuntes, el cuadro de los bipiridílicos es sobre todo <b>pulmonar</b>, porque el paraquat se acumula selectivamente en el pulmón (deficitario en SOD) y genera radicales libres (apuntes, p. 40-41):</p>
<ul>
<li>Vómitos y anorexia, dolor abdominal y <b>temperatura corporal normal</b>.</li>
<li>Depresión del SNC, deshidratación, cianosis o palidez de mucosas.</li>
<li><b>Ictericia y disnea intensas</b>, taquicardia y taquipnea, uremia.</li>
<li>Radiografía: <b>edema y fibrosis pulmonar</b> (enfisema).</li>
<li>Lesiones: congestión, edema y hemorragias pulmonares, úlceras en lengua e hígado, riñón y bazo congestivos y aumentados (apuntes, p. 41).</li>
<li>Tratamiento: no específico; oxígeno contraindicado, superóxido-dismutasa, glutatión o precursores, catárticos y diuresis forzada con manitol 24 h. <b>Pronóstico malo pasadas las 24 horas</b> (apuntes, p. 41).</li>
</ul>
<p class="muted">Los efectos crónicos que enumera la recopilación (inmunitarios, reproductores, inducción enzimática) no figuran en tus apuntes.</p>`],
["Pregunta de desarrollo: efectos de la warfarina",`<p class="muted">Pregunta de desarrollo de la recopilación: «Efectos de la warfarina» (reco p. 49, n.º 51; respuesta: síntomas relacionados con hemorragias).</p>
<ul>
<li><b>Mecanismo:</b> inhibe el complejo de la protrombina, de modo que faltan los factores de coagulación dependientes de la <b>vitamina K</b> (protrombina, VII, IX y X); aumenta el tiempo de coagulación y la permeabilidad capilar y disminuye la agregación plaquetaria (apuntes, p. 24).</li>
<li><b>Síntomas:</b> hemorragia nasal, encías sangrantes, hematuria, melena y equimosis severas; anemia, fatiga y disnea de esfuerzo. Empiezan tras varios días (apuntes, p. 25).</li>
<li><b>Lesiones:</b> hemorragia generalizada, corazón redondeado y flácido con hemorragias subepicárdicas y subendocárdicas, y necrosis hepática centrolobulillar (apuntes, p. 25).</li>
<li><b>Toxicidad:</b> dosis única de 50-100 mg/kg en rata, 50 en perro, 5-50 en gato y 3 en cerdo; en dosis repetida basta 1 mg/kg durante 5 días en perro (apuntes, p. 24). DL50 de 58 mg/kg (apuntes, p. 24).</li>
<li><b>Factores que aumentan la susceptibilidad:</b> dieta rica en grasa y tratamiento oral prolongado con antibióticos (déficit de vitamina K) y las hepatopatías (menor producción de protrombina) (apuntes, p. 24).</li>
<li><b>Diagnóstico y tratamiento:</b> tiempo de protrombina elevado; soporte vital y <b>vitamina K</b> (apuntes, p. 25).</li>
</ul>`],
["Pregunta de desarrollo: herbicidas orgánicos",`<p class="muted">Pregunta de desarrollo de la recopilación: «Herbicidas orgánicos» (reco p. 50, n.º 65; respuesta: paraquat, diquat, clorofenoles o nitrofenoles).</p>
<p>Tus apuntes dividen los herbicidas en <b>inorgánicos</b> (arsenicales, boratos, cianamida cálcica, cloratos…) y <b>orgánicos</b>, con 12 grupos (apuntes, p. 35-36):</p>
<ul>
<li><b>Clorofenoxiderivados:</b> 2,4-D, 2,4,5-T, MCPA y DALAPON.</li>
<li><b>Derivados fenólicos:</b> pentaclorofenol (PCP), dinitrofenol (DNP) y dinitro-orto-cresol (DNOC).</li>
<li><b>Bipiridílicos:</b> <b>paraquat</b>, <b>diquat</b> y morfamquat.</li>
<li><b>Derivados de la fenilurea:</b> monurón, menurón, diurón y linurón.</li>
<li><b>Triazinas</b> (atrazina, propazina, simazina, prometrina) y <b>triazoles</b> (aminotriazol).</li>
<li><b>Arsenicales orgánicos</b> (ácido cacodílico, MSMA), <b>derivados del uracilo</b> (bromacil, isocil), <b>cloroacetatos</b>, <b>derivados benzoicos</b> (clorambén, dicamba) y <b>carbámicos</b> (dialato, trialato, vernam, barbano, profam, clorprofam).</li>
</ul>
<p>Por toxicidad: <b>1.ª categoría</b> (DL50 &lt; 200 mg/kg) los dinitrofenoles y los bipiridílicos; <b>2.ª categoría</b> (poco tóxicos) los clorofenoxiderivados, las ureas y las triazinas (apuntes, p. 35).</p>`]
]},
2: {
intro: "Temas 30-33: toxicocinética de los metales y terapia quelante; mercurio, cadmio y plomo; cobre, molibdeno, selenio y flúor; arsénico, cinc y talio. Al final, las preguntas de desarrollo (del examen y de la recopilación) con su respuesta.",
sections: [
["Tema 30 · Metales: formas, toxicidad y toxicocinética",`<p>Un <b>metal</b> es un elemento que en condiciones biológicas puede reaccionar <b>perdiendo uno o más electrones para formar un catión</b>. Se encuentra de <b>tres formas</b>: compuestos <b>inorgánicos</b> (óxidos, sulfuros, cloruros y acetatos), compuestos <b>organometálicos</b> (metal unido a un grupo orgánico por el átomo de carbono) y <b>complejos metálicos</b> (unido a quelantes por el grupo sulfidrilo, p. ej. penicilamina o BAL, o a otros compuestos como los gosipolatos).</p>
<ul>
<li><b>Toxicidad</b>: dosis; forma química (<b>organometálicos &gt; formas iónicas &gt; forma elemental o metálica</b>); <b>pH</b> (en solución ácida aumenta la absorción); presencia concomitante de otros iones; <b>edad</b> (fetos, lactantes y ancianos más sensibles); estado fisiológico; alteraciones previas de órganos diana (hígado, encéfalo, riñón).</li>
<li><b>Fuentes antropogénicas concretas</b>: <b>Sb, Cu, Zn y Ba</b> en ambiente urbano (abrasión de ruedas y frenos); <b>V y Ni</b> en combustión de fuel y coque de petróleo (incluidos barcos); <b>As, Se y Hg</b> en combustión de carbón; <b>Pb, Cd, Cr, Co y Mn</b> en emisiones industriales.</li>
<li><b>Absorción digestiva</b>: la <b>más frecuente</b>. Baja en formas inorgánicas (<b>Hg 2-4 %, Cd 6 %, Pb no más del 10 %</b>), prácticamente <b>nula</b> en formas elementales o metálicas y <b>alta</b> en las orgánicas.</li>
<li><b>Absorción inhalatoria</b>: la <b>más efectiva</b>. En forma de gas o vapor; la forma elemental en vapor llega a <b>casi el 80 %</b> en mercurio y plomo.</li>
<li><b>Distribución</b>: unidos a proteínas plasmáticas y/o glóbulos rojos; <b>no se metabolizan</b>; atraviesan la barrera fetoplacentaria y la hematomamaria; vida media larga. <b>Pb</b> en tejidos calcificados (similitud con el calcio); <b>Cd</b> y <b>Hg</b> en riñón, unidos a <b>metalotioneínas</b>.</li>
<li><b>Eliminación</b>: orina (ojo a la reabsorción tubular); heces (lo no absorbido y lo biliar, con <b>círculo enterohepático</b> en Pb, As y Hg); vías menores (leche, pelo, faneras, saliva, aire exhalado, sudor y lágrimas).</li>
<li><b>Efectos tóxicos</b> (acaban en muerte celular): estrés oxidativo, inhibición de la comunicación celular, inhibición de enzimas y proteínas, inhibición sobre el ADN (<b>cáncer</b>) e inhibición de genes.</li>
</ul>
<p class="muted">p. 46-47</p>`],
["Tema 30 · Terapia quelante: tabla de quelantes",`<p>La terapia quelante es el <b>tratamiento primario</b> de la intoxicación por metales pesados: el <b>ligando</b> (ion o molécula con dos o más átomos capaces de donar un par de electrones) se une al metal por un <b>enlace de coordinación</b> en estructura <b>cíclica o anular</b>. Tipos de ligando: <b>no identificado</b> (un átomo donante: Cl-, NH3, H2O), <b>bidentado</b> (dos: C2O4 2-) y <b>polidentado</b> (más de dos: <b>EDTA</b>).</p>
<table>
<tr><th>Quelante</th><th>Indicaciones</th><th>Mecanismo</th><th>Dosis / cuidados</th></tr>
<tr><td><b>Dimercaprol (BAL)</b><br>anti-Lewisita británica; dos -SH y un hidroxilo</td><td><b>As y Hg inorgánico</b>; también Pb y oro.<br><b>Contraindicado en Cd y Hg orgánico</b></td><td>Une el metal por el grupo <b>tiol</b> formando un complejo metal-ligando estable que se <b>excreta por vía renal</b></td><td>2,5-5 mg/kg en solución al 10 % de aceite vegetal, <b>6 veces al día, 48 h, vía IM</b>. Puede ser tóxico: no hacer tratamientos prolongados</td></tr>
<tr><td><b>DMPS</b><br>análogo <b>hidrosoluble</b> del BAL; un grupo sulfónico y dos tioles</td><td>As, Pb y <b>Hg (orgánico e inorgánico)</b></td><td>Por hidrosoluble <b>no atraviesa la BHE</b> y no redistribuye Hg ni Pb del encéfalo; <b>elimina el Hg depositado en riñón</b></td><td><b>Menos efectos colaterales que el BAL</b></td></tr>
<tr><td><b>DMSA</b> (succímero)<br>análogo del BAL; dos carboxilos y dos tioles</td><td><b>Pb, Hg y As</b></td><td>Los <b>grupos tiol</b> participan en la reacción metal-ligando</td><td><b>10 mg/kg/8 h los 5 primeros días</b> y después 2 tratamientos diarios durante 2 semanas. Hay <b>tres análogos</b> con mayor eficacia excretora</td></tr>
<tr><td><b>CaNa2-EDTA</b><br>EDTA calcio-sodio</td><td><b>Pb y Zn</b></td><td>El <b>calcio del EDTA es reemplazado</b> por el metal y forma un complejo hidrosoluble que se elimina por orina (con Pb forma <b>PbNa2EDTA</b>)</td><td><b>25 mg/kg/6 h, 5 días, vía IV</b>. En animales <b>no reduce bien el Pb total del cerebro</b>; aumenta la excreción de Zn, Cu y Fe; <b>toxicidad renal</b> (se recomienda DMSA)</td></tr>
<tr><td><b>D-penicilamina</b></td><td><b>Cobre</b>; <b>tercera opción</b> frente a Pb y As; también usada en Hg y Zn</td><td>Elimina el <b>cobre acumulado en hígado</b> y resto de tejidos</td><td><b>10-100 mg/kg/día, 1-2 semanas, vía oral</b></td></tr>
</table>
<ul>
<li><b>Efectos adversos comunes</b>: fiebre, náuseas, cefalea, vómitos, presión arterial alta o baja, trastornos gastrointestinales, angustia, dolor muscular, dolor en el lugar de la inyección y sensación de ardor.</li>
<li><b>Efectos adversos graves</b>: insuficiencia cardíaca, dificultad para respirar, insuficiencia respiratoria, presión arterial baja, <b>daño renal permanente</b>, temblores o convulsiones y <b>calcio bajo en sangre</b>.</li>
<li><b>Precauciones</b>: ajustar la <b>dosis</b> a la concentración del metal y a intervalos regulares, para no bajar los metales esenciales (una dosis alta puede <b>subir de golpe</b> el metal tóxico en un fluido corporal y <b>empeorar</b> al paciente); elegir el fármaco según la <b>afinidad del metal y el ligando</b>.</li>
</ul>
<p class="muted">p. 48-50</p>`],
["Tema 30 · Valores legislados para los metales",`<table>
<tr><th>Contaminante</th><th>Valor objetivo</th><th>Nivel</th><th>Período</th></tr>
<tr><td><b>Plomo (Pb)</b></td><td>Valor límite anual (VLA) para la protección de la salud humana (cumplimiento: 1 de enero de 2005)</td><td><b>0,5 μg/m³</b></td><td><b>Año civil</b></td></tr>
<tr><td><b>Arsénico (As)</b></td><td>Valor objetivo para la protección de la salud humana y el medio ambiente (cumplimiento: 2013)</td><td><b>6 ng/m³</b></td><td>Año natural</td></tr>
<tr><td><b>Cadmio (Cd)</b></td><td>Valor objetivo para la protección de la salud humana y el medio ambiente (cumplimiento: 2013)</td><td><b>5 ng/m³</b></td><td>Año natural</td></tr>
<tr><td><b>Níquel (Ni)</b></td><td>Valor objetivo para la protección de la salud humana y el medio ambiente (cumplimiento: 2013)</td><td><b>20 ng/m³</b></td><td>Año natural</td></tr>
</table>
<p>El <b>Reglamento (CE) n.º 1881/2006</b>, de 19 de diciembre de 2006, fija el contenido máximo de determinados contaminantes en los productos alimenticios. En su <b>sección 3</b> (metales):</p>
<ul>
<li><b>Plomo</b>: leche, carne, despojos, crustáceos, moluscos, cefalópodos, leguminosas, hortalizas, frutas, grasas y aceites, zumos, vinos y complementos alimenticios.</li>
<li><b>Cadmio</b>: hortalizas y frutas, setas, cereales, productos de cacao, carne, despojos, pescado, moluscos, crustáceos, cefalópodos, preparados para lactantes y complementos alimenticios.</li>
<li><b>Mercurio</b>: pescado, productos de la pesca y complementos alimenticios.</li>
<li><b>Estaño inorgánico</b>: <b>alimentos enlatados</b>.</li>
</ul>
<p class="muted">p. 50-51</p>`],
["Tema 31 · Mercurio",`<ul>
<li><b>Formas</b>: <b>elemental o metálico</b> (termómetros, altísima presión de vapor); <b>inorgánico</b> (mercuriosa y mercúrica: Hg+1 y Hg+2); <b>orgánico</b> (alquilmercurio).</li>
<li><b>Usos y cifras</b> (ojo, le gustan los números): extracción de oro a pequeña escala o artesanal <b>650-1000</b>; monómeros de cloruro de vinilo <b>600-800</b>; cloro alcalino <b>450-550</b>; pilas <b>300-600</b>; uso dental <b>240-300</b>; eléctrico y electrónico y medida y control <b>150-350</b>; iluminación <b>100-150</b>; otros <b>30-60</b>.</li>
<li><b>Minamata (Kumamoto)</b>: ciudad de <b>Japón</b>. Junto con <b>Irak</b>, ejemplo de <b>neurotoxicidad clínica por exposición accidental muy elevada</b>.</li>
<li><b>Afecciones · adultos</b>: irritabilidad, timidez, temblores, déficit de memoria, alteraciones de audición (sordera) y de vista (ceguera).</li>
<li><b>Afecciones · niños por exposición fetal</b>: daño cerebral, retardo mental, incoordinación, ceguera, sordera, convulsiones y dificultades para hablar (<b>disartria</b>). <b>Niños expuestos directamente</b>: alteraciones nerviosas, digestivas y renales.</li>
<li><b>Interés médico-social</b>: el <b>MeHg+</b> pasa a <b>placenta y leche</b> y causa anormalidades del desarrollo neuronal tras exposición gestacional a muy altas dosis; a niveles bajos de exposición <b>sí debe haber déficits subclínicos</b> del neurodesarrollo. En <b>adultos</b> ocasiona <b>enfermedad cardiovascular y alteraciones neurológicas</b> (1-2 piezas de pescado diarias durante 10 años de especies con alto Hg; síntomas <b>sensorimotores</b>, parestesia). A más concentración de Hg: <b>menos</b> puntos en el test de memoria visual y <b>más</b> en el de destreza motora y manual.</li>
<li><b>PTW</b> (ingesta semanal tolerable provisional, decreto del <b>21 de abril de 2008</b>, a revisar a la baja): <b>1,6 μg/kg p.c.</b> Grupos de riesgo: <b>gestantes, lactantes, niños en crecimiento y grandes consumidores de pescado</b>.</li>
<li><b>Consejo al consumidor</b>: las mujeres con intención de gestar, gestantes y lactantes, <b>no más de una porción pequeña por semana</b> de grandes predadores (<b>pez espada, tiburón, aguja y lucio</b>) y, si la comen, ningún otro pescado esa semana; <b>atún no más de dos veces por semana</b>. Los consejos deben pasar de padres a hijos.</li>
</ul>
<p class="muted">p. 52-53</p>`],
["Tema 31 · Plomo (incluido el plomo en aves)",`<ul>
<li>Es el <b>metal tóxico más extendido y abundante</b> del planeta; <b>Orfila, en 1817</b>, señaló que era el <b>tóxico más estudiado</b>.</li>
<li><b>Usos</b>: cañerías (agua, gas), <b>perdigones</b>, baterías recargables, pintura, vidrio, barnices, esmaltes y plásticos (sales y óxidos), <b>antidetonante en gasolinas</b> (plomo tetraetilo y tetrametilo), insecticidas (<b>arseniato de plomo</b>) e industria farmacéutica y cosmética (plomo orgánico).</li>
<li><b>Origen en animales</b>: pinturas con plomo, masilla de cristalería, aceite y lubricantes de automóviles, vegetales próximos a vías de circulación, agua de tuberías de plomo, <b>aves al ingerir perdigones</b> y <b>leche de las hembras intoxicadas</b>.</li>
<li><b>Especies afectadas</b>: ovino, bovino y equino, <b>aves silvestres acuáticas</b> y perros. <b>Más resistentes</b>: caprino, porcino y gallinas. Atraviesa la <b>BHE</b>, la fetoplacentaria y la hematomamaria.</li>
<li><b>Toxicidad de las sales</b>: <b>nitrato &gt; acetato &gt; cloruro &gt; sulfato &gt; sulfuro &gt; fosfatos</b>.</li>
<li><b>Dosis única oral</b>: terneros 400-600 mg/kg; vacuno adulto 400; caprino 400; ovino 600-800; cerdo y perro 10-15 g/animal; aves más resistentes 500-600 mg/kg (<b>patos silvestres 1 g/kg</b>) y más sensibles <b>150 mg/kg</b>.<br><b>Dosis letal crónica oral</b>: vacuno 6-7 mg/kg/día (8 semanas); equino 2-7 (8 semanas); porcino 33-66 (14 semanas); ovino no gestante 8-10 y <b>gestante 1 mg/kg/día, con abortos</b>; <b>perro muy sensible 0,3-0,4 mg/kg/día</b>; aves 300-400 mg/kg/día, pero como <b>acetato 12-13 mg/kg/día</b>.</li>
<li><b>Mecanismo</b>: tejido hematopoyético (<b>interfiere en la síntesis del grupo hemo</b>); sistema nervioso (mecanismos sinápticos de liberación de NT); músculo liso (<b>contracción mantenida</b>); hueso (<b>osteocondensación</b>); riñón (hipertensión, tubulopatías, fibrosis, atrofia glomerular); sistema inmune (baja la globulina sérica, la síntesis de Ac y la lisozima, e interfiere en la fagocitosis); <b>embriotóxico</b>; tiroides, encías e inhibidor enzimático.</li>
</ul>
<table>
<tr><th>Nivel</th><th>Efecto sobre el grupo hemo y clínica</th></tr>
<tr><td><b>&gt;100</b></td><td>Signos clínicos <b>neurológicos</b>, pérdida de peso, anemia y <b>diarrea verde</b></td></tr>
<tr><td><b>50-100</b></td><td><b>Depresión severa</b>, anemia y diarrea</td></tr>
<tr><td><b>20-50</b></td><td>Disminución de <b>ALAD en adultos</b>, menor respuesta a la huida y leve depresión</td></tr>
<tr><td><b>5-15</b></td><td>Disminución de <b>ALAD en pollos</b></td></tr>
</table>
<ul>
<li><b>Diagnóstico</b>: clínico (entorno) y analítica. <b>Diferenciales</b>: organoclorados, urea, organofosforados, carbamatos y otros (EET, hipovitaminosis A, rabia, tetania hipomagnesémica, abscesos cerebrales).</li>
<li><b>Tratamiento</b>: eliminar la fuente (<b>quirúrgicamente si hace falta</b>), sintomático, <b>barbitúricos</b> (sedantes del SNC) y fluidoterapia. Quelantes: <b>CaNa2 EDTA</b> (<b>no usar NaEDTA</b>: unión a Ca e <b>hipocalcemia</b>); <b>combinación CaNa2 EDTA/BAL</b> (el EDTA quela y moviliza el Pb del hueso y sube el Pb en sangre y órganos, donde el <b>BAL</b> lo quela); <b>DMSA</b> (menos tóxico que el CaNa2 EDTA); <b>D-penicilamina</b>.</li>
<li><b>Plumbismo en aves · digestivo</b>: <b>diarrea verdosa que mancha las plumas pericloacales</b> y anorexia con pérdida de peso. <b>Nervioso</b>: parálisis y alteraciones de la locomoción (<b>24 horas</b>), postración, ausencia de reflejos, letargia y ataxia e incapacidad para el vuelo y la huida.</li>
<li><b>Órganos en aves</b>: renal (neurotoxicidad aguda por degeneración tubular proximal, glomerulonefritis y hemosiderina intracitoplasmática); digestivo (<b>implantación del plomo en la molleja</b>); nervioso (neurotóxico periférico y central, <b>microhemorragias focales en cerebelo</b>); hematológico (anemia con eritrocitos <b>microcíticos e hipocrómicos</b>); hígado (<b>gran tamaño de la vesícula biliar</b>, degeneración y necrosis).</li>
<li>Lo consumen sobre todo <b>pato cuchara, ánade real</b> (cloaca) y <b>flamenco común</b>. El esquema señala <b>varios millones de muertes al año</b> (incluidas especies en peligro o amenazadas) y a las aves como <b>centinelas</b> de riesgo (ej. <b>buitre leonado</b>), con riesgo para grandes rapaces, lobos, zorros y, por las piezas de caza, para el ser humano.</li>
</ul>
<p class="muted">p. 53-58</p>`],
["Tema 31 · Cadmio",`<ul>
<li><b>Fuentes</b>: pilas, pintura, químicos, contacto con animales infectados, humo y empresas que lo llevan al suelo; del suelo pasa a animales y plantas y de ahí a la alimentación humana (ingesta diaria total en torno a <b>10-40 μg</b>). El <b>humo del cigarrillo</b> suelta <b>1-2 μg/cigarrillo</b> (se inhala el <b>10 %</b>).</li>
<li><b>Toxicocinética</b>: absorción <b>principalmente respiratoria</b>, también digestiva (aumenta con dietas deficientes en <b>calcio, hierro y proteínas</b> y con <b>poco cinc</b>). Distribución unida a glóbulos rojos, linfocitos y proteínas (sobre todo albúmina), con una pequeña fracción a <b>metalotioneínas</b>. Atraviesa la BFP en alta exposición; <b>carga corporal 50-75 % en hígado y riñón</b>; <b>vida media unos 30 años</b>; acumulación renal hasta los <b>50-60 años</b>; eliminación por orina muy lenta y baja por leche.</li>
<li><b>Mecanismo</b>: digestivo (<b>gastroenteritis por precipitación de proteínas</b>); inhibición enzimática por sustitución de oligoelementos como cofactores y unión a grupos tiol (<b>desacopla la fosforilación oxidativa</b>, inhibe la síntesis de ADN, ARN y proteínas, induce anormalidades cromosómicas y tumores); riñón (acumulación con necrosis celular y disfunción renal, e <b>inhibición de la hidroxilación de la vitamina D</b>, que no se activa).</li>
<li><b>Hueso</b>: inhibe las enzimas de formación del <b>colágeno óseo</b>, inhibe la absorción de <b>Ca y P</b> e interfiere en el metabolismo de la <b>vitamina D</b>. <b>Reproductor</b>: inhibe la actividad enzimática y baja la <b>motilidad espermática</b>. <b>Circulatorio</b>: inhibe la absorción de hierro y baja la hemoglobina (<b>anemia</b>) y retiene sodio (<b>hipertensión</b>).</li>
<li><b>Efectos por especie</b>: <b>bovino</b> (inapetencia, debilidad, pérdida de peso, baja libido, <b>mala queratinización de pezuñas</b>, cuernos secos y quebradizos, palidez de mucosas, pelo áspero, descamación epidérmica y <b>anemia hemolítica</b>); <b>ovino y bovino</b> con <b>50-100 ppm durante 49 semanas</b> (abortos, fetos muertos, los nacidos vivos mueren y anomalías congénitas); <b>ovino</b> con <b>&gt;2,5 mg/kg p.v./día dos meses en agua</b> (anemia, nefropatía, desmineralización ósea, baja fosfatasa alcalina, alta AST, proteinuria y aumento de peso de bazo, timo, tiroides y adrenales); <b>porcino</b> (anemia microcítica e hipocrómica y menos consumo de pienso); <b>aves</b> (peor índice de conversión, menos peso, más mortalidad, descalcificación ósea, <b>hiperqueratosis de la molleja</b>, nefritis y enteritis, hidropericardio y proventriculitis, pero <b>sin afectar a la producción de huevos ni a su calidad</b>).</li>
<li><b>Tratamiento</b>: eliminar las condiciones de exposición e <b>inducir la síntesis de metalotioneínas con Zn, Se o Co en la dieta</b>. <b>No usar BAL</b> (2,3-dimercaptopropanol). <b>Indicadores biológicos</b>: cadmio en orina (AAS, ASV), MT en orina (radioinmunoensayo), cadmio en vísceras (hígado y riñón) y <b>cadmio en sangre normal &lt; 0,5 μg/dl</b> (INSHT).</li>
</ul>
<p class="muted">p. 58-59</p>`],
["Tema 32 · Cobre y molibdeno: interacciones, fuentes y dosis",`<p class="muted">Págs. 60-61. La relación Cu-Mo y el cociente de la oveja cayeron en el 3er parcial (15/5/25).</p>
<table><tr><th>Interacción</th><th>Qué hace</th></tr>
<tr><td><b>Cu-Mo-sulfato</b> en rumiantes</td><td>Controlan el acúmulo de Cu en hígado y facilitan su eliminación biliar y renal. Complejo in vivo Cu/Mo: <b>cociente molar 4/3</b></td></tr>
<tr><td>Cu-Mo-sulfato en no rumiantes</td><td>Aislados <b>no</b> afectan al Cu; <b>combinados</b> previenen su acúmulo</td></tr>
<tr><td><b>Cu-Zn-Fe</b> (monogástricos)</td><td>Fe y Zn protegen; su deficiencia aumenta la toxicidad del Cu</td></tr>
<tr><td>Cu-otros</td><td>Origen y calidad de las proteínas; el <b>Se mejora la absorción del Cu</b>; vitamina A (?)</td></tr></table>
<ul>
<li><b>¿Cuándo?</b> Dosis elevadas de Cu o <b>desequilibrio Cu/Mo → ovino: 6-10/1</b> (recuadro de la p. 60).</li>
<li>Primarias: agudas o crónicas. Secundarias: <b>crónica fitógena</b> (<i>Trifolium subterraneum</i>) y <b>crónica hepatógena</b> por alcaloides pirrolizidínicos (<i>Senecio</i> «hierba de Santiago», <i>Heliotropium europaeum</i> «verrucaria», <i>Echium</i> «viborera o lechuga de vaca»).</li>
<li>Fuentes: desequilibrio Cu/Mo; pastos cerca de minas o fumigados y abonados con Cu; agua con alguicidas; mezclas minerales con exceso de Cu o carencia de Mo; antihelmínticos con sulfato de cobre; <i>Trifolium</i> y plantas con pirrolizidínicos; carencias mal tratadas y errores en suplementos; <b>estiércol de aves como fuente de nitrógeno no proteico</b>.</li>
<li>Factores: dosis y relación Cu/Mo; especie, edad y raza (?); forma química (cloruro, acetato, óxido, carbonato, gluconato, ioduro &gt; sulfato); hepatotóxicos (pirrolizidínicos); penuria, estrés, ejercicio; <b>carencia de Se y Mo</b>. <b>Morbilidad 5 %, mortalidad 75-80 %</b>.</li>
</ul>
<table><tr><th>Especie</th><th>Dosis de Cu</th></tr>
<tr><td><b>Ovino</b> (el más sensible)</td><td>Única letal <b>20-30 mg/kg p.v.</b> Corderos: crónica tóxica 15-20 ppm m.s. en pastos o 20 ppm en pienso (&gt; 6-10/1); crónica letal <b>50 ppm</b></td></tr>
<tr><td>Vacuno</td><td>Única letal <b>200 mg/kg p.v.</b> Terneros: crónica tóxica &gt; 125 ppm m.s.; crónica letal <b>250 ppm</b></td></tr>
<tr><td>Cerdo, pollo, pavipollo</td><td>Más resistentes (250 y 100 ppm mejoran el crecimiento). Tóxica: cerdo &gt; 300, pollo &gt; 350, pavipollo &gt; 1500 ppm</td></tr>
<tr><td>Équidos</td><td>Toleran 790 ppm</td></tr>
<tr><td>Peces</td><td>Trucha arco iris: CL50/48 h 0,67-0,84 ppm; alevines de salmón &gt; 0,04 ppm</td></tr></table>
<ul><li>Toxicocinética: absorción oral fácil (<b>30 %</b>), según dieta, acidez intestinal y forma química; viaja con <b>albúmina y ceruloplasmina</b>; atraviesa la BFP; se acumula y metaboliza en el hígado; <b>eliminación por bilis</b> (orina), que favorecen el Mo y el sulfato.</li></ul>`],
["Tema 32 · Cobre: mecanismo, clínica, diagnóstico y tratamiento",`<p class="muted">Págs. 62-65.</p>
<ul>
<li>En el hepatocito: cofactor de enzimas (tirosinasa, citocromo oxidasa, SOD, amina oxidasa, uricasa), reserva, <b>metalotioneínas (secuestro)</b>, <b>ceruloplasmina (transporte)</b> y eliminación biliar.</li>
<li>Bases: acumulación hepática del Cu sobrante (hasta un límite), interacción Cu/Mo/sulfato y <b>exceso de Cu en sangre → crisis hemolítica</b>.</li>
<li>Insuficiencia hepática → ↓ eliminación biliar → ↑ Cu hepático y ↑ AST, LDH, arginasa y bilirrubina → daño de membranas y orgánulos → <b>salida masiva de Cu</b> a sangre y orina.</li>
<li>Crisis hemolítica: <b>Cu²⁺ → Cu⁺ (↓ GSH, ↑ peróxidos) y Fe²⁺ → Fe³⁺ (metahemoglobina 35 %)</b>; lisis por peróxidos y alteraciones osmóticas. Riñón: túbulos obstruidos por Hb y necrosis por Cu; músculo: anoxia, ↑ CPK; encéfalo: ↑ urea y nitrógeno amoniacal.</li>
<li>Esquema de la p. 63: ↓ hemoglobina, metahemoglobinemia, ↑ hematocrito (así en los apuntes), ↑ leucocitos, ↑ AST, LDH, arginasa y bilirrubina, ↓ GSH, ↑ CPK.</li>
</ul>
<table><tr><th>Cuadro</th><th>Signos clave</th></tr>
<tr><td>Agudo (oral)</td><td>Gastroenteritis con <b>heces y vómitos con moco de color azul intenso</b>; shock; ictericia (?)</td></tr>
<tr><td>Crónico: oveja</td><td>Debilidad y temblores bruscos, hemoglobinuria, ictericia, <b>descarga nasal sanguinolenta</b>, disnea, shock; <b>muerte en 1-4 días «por goteo»</b></td></tr>
<tr><td>Crónico: ternero</td><td>Desinterés por la lactación, <b>sed intensa aunque deshidratado</b>, pelo erizado; muerte en <b>1-12 días</b></td></tr>
<tr><td>Crónico: cerdo</td><td>Embotamiento, melena, hiperestesia, temblores e ictericia</td></tr></table>
<ul>
<li>Lesiones: ictericia; hepato-, nefro- y esplenomegalia; <b>vesícula repleta de bilis espesa verde intenso</b>; <b>hígado amarillento y friable</b>; <b>riñón oscuro metálico sin diferencia corteza-médula</b>; pulmón edematoso; orina y músculo oscuros. Histología: Hb en túbulos, fibrosis portal, degeneración de la sustancia blanca y <b>bazo repleto de eritrocitos fragmentados</b>.</li>
<li>Sospecha: <b>brusca hemoglobinuria, ictericia y shock con alteración respiratoria</b>; muerte en 24-48 h.</li>
<li>Diferencial: leptospirosis, pasteurelosis aguda, hemoglobinuria bacilar; babesiosis, anaplasmosis; colza, cebolla y metales (As, Hg, Pb, Tl); hemoglobinemia posparto.</li>
</ul>
<table><tr><th>Especie</th><th>Muestra</th><th>Nivel fisiológico de Cu</th></tr>
<tr><td><b>Ovino</b></td><td>Sangre / hígado / riñón</td><td><b>75-135 μg/dL</b> / &lt; 150 mg/kg p.h. (&lt; 500 ppm p.s.) / &lt; 15 mg/kg p.h.</td></tr>
<tr><td>Porcino</td><td>Sangre / hígado / riñón</td><td>120-190 μg/dL / 6-51 mg/kg p.h. / 6-13 mg/kg p.h.</td></tr>
<tr><td>Equino</td><td>Hígado</td><td>10 mg/kg p.h.</td></tr>
<tr><td>Vacuno</td><td>Hígado / riñón / plasma</td><td>550 mg/kg p.s. / 39 mg/kg p.s. / 100-320 μg/dL</td></tr></table>
<ul>
<li>Quelantes: <b>BAL</b> (2,3-dimercaptopropanol), <b>EDTA</b>, <b>DMPS</b>, <b>penicilamina</b> (dimetilcisteína) y <b>TRIEN</b> (trietilentetramina).</li>
<li>Preventivo: glutatión y precursores (cisteína, metionina, glicina, glutamina), glucosa o NaCl isotónico y <b>50-500 mg de molibdato amónico + 0,1-2 g de sulfato sódico durante 3 semanas</b>.</li>
<li>Prevención: <b>superfosfato molibdenizado (246 g Mo/ha)</b>; piedras o mezclas molibdenizadas (<b>80 kg de sal, 63 kg de yeso y 0,45 kg de molibdato sódico</b>); Mo en piensos; Fe y Zn en porcino y aves.</li>
</ul>`],
["Tema 32 · Molibdeno (molibdenosis)",`<p class="muted">Pág. 65. El exceso de Mo produce una carencia de Cu.</p>
<ul>
<li>Mo en suelo de zonas problema: 10-100 ppm; forrajes peligrosos: <b>3-10 ppm</b> (con &lt; 1 ppm también, si llevan muchos sulfatos y hay poca reserva de Cu); agua &gt; 10 ppm; bovinos: ingesta de 120-250 mg.</li>
<li>Mortalidad baja, pero <b>caída de las producciones</b>. Afecta a ovino y bovino. Más Mo en el forraje en <b>primavera y otoño</b>; <b>leguminosas (tréboles)</b> y <b>suelos de turba</b>; cuidado con las ingestas bajas de Cu.</li>
<li>Patogenia: <b>obstaculiza el almacenamiento hepático de Cu (carencia)</b>; empeora con mucho S y poco Cu.</li>
<li>Signos: a los 8-10 días diarrea, adelgazamiento, pelo seco y ↓ leche; <b>despigmentación del pelo alrededor de los ojos</b>; en jóvenes, rigidez de extremidades y lomo y dificultad para levantarse.</li>
<li>Lesiones: adelgazamiento, deshidratación, anemia y exostosis o hemorragia de huesos largos.</li>
<li>Diagnóstico: <b>2 g/día de sulfato de Cu oral → cesa la diarrea</b>, y coprológico para descartar parásitos. Tratamiento: <b>Cu en la dieta (5 ppm)</b>.</li>
</ul>`],
["Tema 32 · Selenio",`<p class="muted">Págs. 66-68. La enfermedad del álcali cayó en el 3er parcial (15/5/25).</p>
<ul>
<li>Metaloide <b>esencial y terapéutico</b>; intoxica a ovino, vacuno, porcino, caballos, aves y perros. En terrenos seleníferos: seleniatos, Se elemental y Se orgánico. Produce una <b>enfermedad alcalina (crónica)</b>.</li>
<li>Fuentes: terrenos seleníferos y plantas indicadoras; rocas sedimentarias de eyecciones volcánicas y vetas de sulfuros (Cu, Ag, Bi, Hg); <b>selenito y seleniato sódico</b> como aditivo (cerdos, pollos, pavos, corderos, vacuno); uso parenteral.</li>
</ul>
<table><tr><th>Plantas obligadas</th><th>Plantas facultativas</th></tr>
<tr><td>Xylorhiza, Oonopsis, Stanleya, <b>Astragalus</b></td><td>Aster, Atriplex, Sideranthus, Machaeranthera</td></tr>
<tr><td>Acumulan Se (<b>cientos de ppm</b>)</td><td>Causan <b>la mayor parte de las intoxicaciones</b></td></tr></table>
<ul><li>Más frecuente en consumidores de forraje; cerdos y pollos, por granos seleníferos; en el caballo, menos que en vacuno y ovino; raro en humanos. <b>La dieta rica en proteínas protege</b>. IMP: idiosincrasia individual.</li></ul>
<table><tr><th>Especie</th><th>Requerimiento</th><th>No tóxico</th><th>Tóxico (ppm)</th></tr>
<tr><td>Vacuno</td><td>0,1</td><td>2</td><td>8</td></tr>
<tr><td>Ovino</td><td>0,1</td><td>?</td><td>10</td></tr>
<tr><td><b>Porcino</b></td><td><b>0,3</b></td><td>2,5</td><td><b>7</b></td></tr>
<tr><td>Pollos</td><td>0,15</td><td>5</td><td>15</td></tr>
<tr><td>Pavos</td><td>0,20</td><td>?</td><td>?</td></tr></table>
<ul>
<li>Interacciones: protege de la <b>hipertensión por Cd</b> (sobre la acumulación de Cd hay dos efectos contrarios con «?») y <b>reduce la toxicidad del metil-Hg</b>.</li>
<li>Mecanismo: Se (reduce la peroxidación) + vitamina E (antioxidante); <b>sustitución de S por Se</b>, ↓ ácido ascórbico y GSH, ↓ ATP y ↓ metionina hepática (oxidación de grupos SH).</li>
<li>Aguda: vómitos, jadeos y estertores con moco y espuma, depresión del SNC, abdomen hinchado y doloroso, poliuria, mucosas pálidas o cianóticas, pupilas dilatadas, marcha errante, postración (cabeza y orejas caídas) y <b>muerte por fallo respiratorio</b> (de horas a días).</li>
</ul>
<table><tr><th>Subaguda y crónica</th><th>Enfermedad del álcali («de la cola cortada»)</th><th>Seleniosis experimental</th></tr>
<tr><td>Fuente</td><td>Granos y pastos seleníferos</td><td>Seleniato o selenito</td></tr>
<tr><td>Consumo</td><td>Raramente afectado</td><td>Disminuido (anorexia)</td></tr>
<tr><td>Signos</td><td><b>Cojera, pérdida de vitalidad, alargamiento de pezuñas y cascos, caída del pelo (melena y cola)</b></td><td>Emaciación y signos neuromusculares (vacuno)</td></tr>
<tr><td>Reproducción</td><td>Raramente afectada</td><td>No estudiada</td></tr>
<tr><td>Acumulación de Se</td><td>Vaca: pezuñas 5-8 y pelo 5-10 ppm. Caballo: casco 11, pelo 11-45 y otros tejidos 4-15 ppm</td><td>Vaca: pelo 3-10, cuerno 0,25 y otros tejidos 10-25 ppm</td></tr>
<tr><td>Hígado / riñón</td><td>Atrofia y cirrosis / nefritis crónica</td><td>Necrosis con cirrosis ocasional / nefritis aguda</td></tr>
<tr><td>Vesícula / corazón / intestino</td><td>Agrandada / blando y flácido / no afectado</td><td>– / – / ulceración y gangrena</td></tr></table>
<ul>
<li>Cambios: hígado congestionado con necrosis y cirrosis; necrosis tubular y fibrosis renal; enteritis hemorrágica; úlcera de abomaso; hemorragias y necrosis cardiacas; edema cerebral; <b>erosiones articulares</b>; <b>pezuñas o cascos deformados</b>; edema pulmonar moderado.</li>
<li>Diagnóstico. Dieta: <b>aguda 10-25 ppm, crónica &gt; 5 ppm</b>. Tejidos en la crónica: sangre 1-4 ppm, <b>pezuñas y cascos 8-20 ppm</b>; hígado y riñón 4-25 ppm y orina 0,1-8 ppm (igual en la aguda).</li>
<li>Tratamiento: <b>sales o ración de arsénico</b> en la dieta; en caballos y vacas, <b>4-5 g de naftaleno/5 días</b>; retirar la fuente de Se.</li>
</ul>`],
["Tema 32 · Flúor",`<p class="muted">Págs. 68-70.</p>
<ul>
<li>Crónica: forrajes de zonas contaminadas (industria), aguas, suplementos de piensos y mezclas minerales, plantas de suelos ricos en F (granos y frutos).</li>
<li>Aguda: <b>fluoroacetato sódico (1080, rodenticida)</b>, <b>fluorosilicato sódico (rodenticida)</b>, <b>fluoruro sódico (ascaricida en porcino)</b> y aguas con fluoruros.</li>
<li>Toxicocinética: absorción digestiva e inhalatoria (con más Ca, Mg y Al se elimina por heces); eliminación por orina (50 %, rápida) y heces; <b>se acumula en huesos y dientes</b>; <b>no atraviesa la BHM pero sí la BFP</b> y llega al huevo (incubabilidad).</li>
<li>Factores: especie (caprino, ovino, bovino, conejo, équidos, aves; cerdo), dosis, duración, solubilidad del fluoruro, edad, estado nutricional, estrés y respuesta individual.</li>
</ul>
<table><tr><th>Especie</th><th>Tolerancia (ppm de fluoruros/día)</th></tr>
<tr><td><b>Terneros</b> (carne, leche)</td><td><b>30-40</b></td></tr>
<tr><td>Vacuno de leche</td><td>40</td></tr>
<tr><td>Vacuno de carne</td><td>40-50</td></tr>
<tr><td>Corderos</td><td>60</td></tr>
<tr><td>Oveja de cría</td><td>40-60</td></tr>
<tr><td>Caballos, porcino y pavos</td><td>150</td></tr>
<tr><td><b>Pollos</b></td><td><b>200</b></td></tr></table>
<ul>
<li>Mecanismo: inhibe citocromo-oxidasas, esterasas, fosfatasas y colinesterasas; <b>capta Ca, Mg y Fe</b>. Dientes: fluorosis dental (si el diente está en desarrollo); huesos: mineralización irregular, exóstosis, esclerosis y osteoporosis.</li>
<li>Aguda (≈ 30 min): excitación, <b>convulsiones clónicas</b>, incontinencia fecal y urinaria, envaramiento, salivación, vómitos, fallo circulatorio y muerte.</li>
<li>Crónica: <b>hipoplasia dental y moteado marrón</b>, desgaste irregular; <b>hiperostosis de metatarsos, metacarpos, mandíbula y costillas</b>; cojera, espalda arqueada y envaramiento; pelo seco y rugoso.</li>
<li>Diagnóstico en la vaca: hueso normal 400-1200 ppm frente a <b>3000-5000 ppm</b> en la intoxicada; orina normal 2-6 ppm frente a <b>15-20 ppm</b>; además, radiografías, microscopía ósea y F en alimento y agua.</li>
<li>Tratamiento: <b>sulfato o cloruro de aluminio, aluminato cálcico, carbonato cálcico o fosfatos desfluorados</b>.</li>
</ul>`],
["Tema 33 · Arsénico (I): formas, cinética y mecanismo",`<p>Está <b>ampliamente distribuido en la naturaleza</b>, en formas <b>trivalentes y pentavalentes</b>.</p>
<table>
<tr><th>Grupo</th><th>Compuestos más comunes</th></tr>
<tr><td><b>Inorgánicos trivalentes</b> (los más tóxicos)</td><td>Trióxido de As, arsenito sódico y tricloruro de As</td></tr>
<tr><td><b>Inorgánicos pentavalentes</b></td><td>Pentóxido de As, ácido arsénico y arsenatos (Pb y Ca)</td></tr>
<tr><td><b>Orgánicos</b> (tri- o pentavalentes)</td><td>Ácido arsanílico; se metilan en tierra, agua dulce o marina</td></tr>
</table>
<p><b>Fuentes:</b> producción primaria de Cu, Zn y Pb; fabricación de vidrio; alimentos vegetales y animales; insecticidas, herbicidas y conservantes de la madera; pigmento en pinturas (<b>verde esmeralda</b>), detergentes y medicamentos. Ingesta total diaria en humanos: <b>menos de 0,3 mg/día</b>.</p>
<p><b>Toxicocinética:</b></p>
<ul>
<li><b>Absorción:</b> vía pulmonar (trióxido de As); las formas solubles por todas las vías, las poco solubles se absorben peor en el GI.</li>
<li><b>Acumulación:</b> hígado y riñón, y también <b>uñas y pelo</b>; atraviesa la <b>BFP</b>.</li>
<li><b>Metabolismo:</b> las formas inorgánicas se metilan (dimetil As); las dosis pequeñas se degradan rápidamente.</li>
<li><b>Eliminación:</b> por todas las vías, principalmente <b>orina</b> (en los apuntes, «prevalente»), <b>bilis</b> (trivalente) y <b>piel</b>.</li>
</ul>
<p><b>Factores de toxicidad:</b> especie (vacuno y gatos, ovino y caballos, y perro, cerdo y aves); naturaleza del compuesto (<b>trivalentes más tóxicos</b>); dosis de <b>1-25 mg/kg p.v. de arsenito sódico</b> (la del trióxido, 3-10 veces menor); exposición aguda; y estado de salud (deshidratados, enfermos, desnutridos).</p>
<p><b>Mecanismo de acción:</b> altera proteínas y sistemas enzimáticos con <b>grupos sulfhidrilo</b> y en las mitocondrias <b>paraliza la respiración celular</b>; altera el metabolismo de grasas y carbohidratos y es <b>inductor de metalotioneínas in vivo</b>. Afecta a tejidos ricos en sistemas oxidativos y es <b>tóxico a nivel capilar</b>: trasudación de plasma, reducción del volumen sanguíneo y <b>shock</b>. En el riñón: dilatación de capilares glomerulares, degeneración tubular y <b>oliguria (anuria)</b>, con orina con proteínas, glóbulos rojos y células descamadas. En piel (vía percutánea): dilatación y degeneración de capilares con edema, piel áspera, seca, apergaminada y con grietas.</p>
<p class="muted">Ojo con el «orina (prevalente)» de los apuntes: por el paralelismo con «bilis (trivalente)» parece una errata de <b>pentavalente</b>.</p>`],
["Tema 33 · Arsénico (II): signos, lesiones, diagnóstico y tratamiento",`<p><b>Intoxicación aguda:</b> dolor abdominal agudo, marcha vacilante, debilidad extrema y postración, temblores, salivación, <b>diarrea líquida</b>, vómito (según especie), <b>atonía ruminal</b> y shock (temperatura baja, pulso rápido y débil, colapso y muerte).</p>
<p><b>Subaguda:</b> depresión y anorexia, diarrea acuosa con moco y sangre, <b>poliuria (anuria)</b>, deshidratación y sed, parálisis parcial de extremidades (frías), <b>temblor</b> con contracciones convulsivas, <b>temperatura baja</b> y muerte. <b>Crónica:</b> agotamiento general, pelo áspero y mucosas rojizas.</p>
<p><b>Lesiones:</b></p>
<ul>
<li><b>Macroscopía:</b> enrojecimiento de la mucosa gástrica e intestinal, contenido GI líquido con <b>olor fétido</b> (sangre, moco), <b>hígado amarillento y blando</b>, pulmones edematosos y rojos y hemorragias en corazón y peritoneo.</li>
<li><b>Histopatología:</b> edema de mucosa y submucosa GI, necrosis y desprendimiento de epitelio, degeneración de túbulos renales, necrosis e inflamación de la grasa hepática y degeneración capilar de los vasos del GI y de la piel.</li>
</ul>
<p><b>Diagnóstico:</b> aparición súbita de animales con gastroenteritis y signos leves de SNC (debilidad, postración y muerte rápida).</p>
<table>
<tr><th>Muestra</th><th>Nivel</th></tr>
<tr><td>Orina (intoxicados)</td><td>2-100 ppm</td></tr>
<tr><td>Contenido GI (intoxicados)</td><td>2-100 ppm</td></tr>
<tr><td>Hígado y riñón (normal)</td><td>menos de 0,5 ppm</td></tr>
<tr><td>Hígado y riñón (intoxicados)</td><td>más de 8-10 ppm (2-100 ppm)</td></tr>
</table>
<p><b>Tratamiento en rumiantes y équidos:</b> purgantes salinos abundantes, protectores de mucosa gástrica e intestinal y <b>tiosulfato sódico</b> (20-30 g en 300 ml de agua vía oral, u 8-10 g en solución al 10-20 % IV). Antídoto específico: <b>BAL</b> (2,3-dimercaptopropanol) y <b>DMPS</b>, a 2 mg/kg p.v. en solución al 5 %, cada 2 horas dos días, cada 6 horas tres días o cada 12 horas diez días.</p>
<p><b>En pequeños animales:</b> lavado gástrico con agua o bicarbonato sódico al 1 % (eméticos con cuidado) y <b>BAL o DMPS a 6-7 mg/kg p.v. IM, 3 veces al día</b> hasta la recuperación. Otras medidas: ringer lactato con vitamina B, diuresis con dextrosa al 20 % (20 ml/kg p.v.), control de orina, uremia y acidosis, y transfusión si hay anemia o shock.</p>`],
["Tema 33 · Cinc, talio y cromo",`<p><b>CINC.</b> Fuentes: vapores industriales (ZnO, Cl2Zn y SZn), plantas y forrajes de zonas contaminadas, piensos sobredosificados o mal formulados y <b>envases recubiertos de Zn</b> (reacción ácida). En el organismo tiene afinidad por el N y el S y forma parte de la anhidrasa carbónica, la fosfatasa alcalina y la aldolasa.</p>
<ul>
<li><b>Cinética:</b> absorción digestiva (10 %) e inhalatoria; eliminación por heces (jugo pancreático y bilis), orina y leche; <b>no se acumula</b>; antagonizado o inhibido por el <b>Cd</b>.</li>
<li><b>Dosis:</b> 0,1-0,2 % (cerdos, rumiantes y aves) baja el crecimiento; <b>0,8 % da hemorragia intestinal y en ganglios linfáticos</b>; en vacuno es agudo-letal el <b>2 % durante 3-4 días o 150 g/animal/día</b>. Los jóvenes son más sensibles.</li>
<li><b>Mecanismo:</b> inhibe enzimas con SH (AChE, catalasa, PAc, pepsina, tripsina y amilasas), precipita proteínas (gastroenteritis) y actúa sobre el metabolismo de Cu y Fe (anemia).</li>
<li><b>Signos:</b> irritación y corrosión (dolor de boca, esófago, estómago e intestino, vómitos y diarrea sanguinolentos), descenso del P sanguíneo, ictericia y bajada de la producción láctea; con ingestión continua, fatiga, cojeras o parálisis y anemia. <b>La muerte llega a los 20 días</b>.</li>
<li><b>Lesiones:</b> cerdo, artritis degenerativa, osteoporosis, gastroenteritis y hemorragias subcutáneas, en nódulos linfáticos, bazo y ventrículos cerebrales; vacuno, enfisema pulmonar, miocardio pálido y blando, moteado hemorrágico en riñón y degeneración hepática.</li>
<li><b>Niveles normales:</b> vacuno-ovino, suero 80-120 µg/dL y leche 2-6 mg/L; carnívoros, <b>retina 1000, iris 6000 y coroides 30000 µg/g</b>; vegetales, 10-100 ppm.</li>
<li><b>Tratamiento:</b> impedir la absorción con carbonato sódico al 1 %, ácido tánico, albúmina de huevo o eméticos y laxantes (perro, gato y cerdo), más tratamiento sintomático.</li>
</ul>
<p><b>TALIO.</b> Procede de minerales de tierras raras (euxenita, gadolinita, monacita y bastnaesita); no es esencial y se usa en enfermedades infecciosas, como <b>depilatorio</b> y como <b>rodenticida</b>. Frecuente en perros y gatos; sales más empleadas, <b>sulfato y acetato</b>; más susceptibles los jóvenes. <b>Solo el metilmercurio es más tóxico</b>, y es el catión metálico acumulativo más tóxico. Se absorbe en intestino y piel, se acumula en <b>riñón</b>, se elimina por orina, leche, heces y pelos y atraviesa la barrera fetoplacentaria.</p>
<ul>
<li><b>Bases moleculares (procesos K+ dependientes):</b> similitud química de Tl+ y K+, comparten receptores similares y tiene afinidad por proteínas K+ dependientes. <b>Inhibe</b> aldehído deshidrogenasa de levaduras, piruvato kinasa, ATPasa Na+-K+ dependiente, piruvato deshidrogenasa y succinato deshidrogenasa; <b>induce</b> fosfatasas, diol-deshidrogenasa vit. B12 dependiente, treonina deshidratasa y AMP-deaminasa.</li>
<li><b>Mecanismo:</b> altera el metabolismo del azufre e interfiere en la fosforilación oxidativa (unión a enzimas mitocondriales); <b>antagoniza al K</b> sustituyéndolo en músculo y nervios; es antimitótico, da peroxidación lipídica y destrucción de neurotransmisores, y es <b>teratógeno</b>.</li>
<li><b>Signos:</b> aguda (<b>1-4 días post-ingesta</b>), cólicos, vómitos, diarrea a veces sanguinolenta (cuando es sulfato), salivación, anorexia, depresión, somnolencia, parálisis motoras, alteraciones respiratorias, anoxia y muerte; en <b>gato, úlceras linguales</b>. Subaguda: paresia, prurito, mialgias, artralgias y polineuritis; pústulas y caída del pelo; conjuntivitis. Crónica: cuadros intestinales, temblores, parálisis y convulsiones, piel agrietada e hiperqueratosis y neumonías secundarias.</li>
<li><b>Lesiones:</b> gastroenteritis hemorrágica, estomatitis, úlceras, degeneración de hígado y miocardio, nefritis, bronquitis, queratitis, hiperqueratosis y paraqueratosis, y <b>degeneración de encéfalo con desmielinización de ganglios basales y corteza temporal</b>.</li>
<li><b>Diagnóstico y tratamiento:</b> identificación del talio en <b>orina</b>; quelante <b>difeniltiocarbazona (DITIZONA)</b> a 70 mg/kg vía oral, 3 veces al día una semana; cloruro potásico 5-7 g/día parenteral y diluido; ferrocianuro potásico férrico (<b>AZUL PRUSIA</b>) y eméticos antes de las 3-4 horas (apomorfina); además glucosa, solución salina y antibióticos de amplio espectro.</li>
</ul>
<p><b>CROMO.</b> Fuente: contaminación de aguas con <b>dicromato potásico</b>. Especies: bovino, equino y aves; alteraciones digestivas y nerviosas. <b>Forma más común, la trivalente; más tóxica, la hexavalente.</b> Entrada inhalatoria u oral (metalurgia, cementos, pinturas y galvanizados); se acumula en hueso, bazo, testículo y epidídimo; eliminación renal y biliar; atraviesa membranas y reacciona con sustancias de bajo peso molecular; es <b>carcinógeno</b>. En ratas, necrosis y descamación del epitelio de los túbulos contorneados; en conejos, lesiones cerebrales; además úlceras gástricas, alteraciones hepáticas y dermatitis.</p>`],
["Pregunta corta: mercurio inorgánico (Hg2+): órgano acumulador y sistemas afectados",`<p class="muted">«Preguntas cortas de la recopilación: Cite el principal órgano acumulador de mercurio inorgánico (Hg2+). / Cite los dos principales sistemas afectados ante una intoxicación aguda por mercurio inorgánico (Hg2+).»</p>
<p><b>Órgano acumulador: el RIÑÓN.</b> Los apuntes lo dicen expresamente al hablar de la distribución de los metales: «Hg: acumulación renal (mediado por su unión a metalotioneínas)» (apuntes, p. 47), igual que el cadmio.</p>
<p><b>Sistemas afectados: digestivo y renal.</b> Es la respuesta que se da por buena en los exámenes y encaja con los apuntes, aunque <b>no aparece esa frase literal</b>: lo que sí consta es que en niños expuestos directamente al mercurio hay «alteraciones nerviosas, <b>digestivas y renales</b>» (apuntes, p. 52) y que el órgano de acumulación es el riñón (p. 47).</p>
<p><b>Datos de apoyo (apuntes, p. 47):</b></p>
<ul>
<li>Absorción digestiva <b>baja</b> en las formas inorgánicas: 2-4 % para el mercurio (frente a una absorción alta en las formas orgánicas y casi nula en las elementales).</li>
<li>La vía inhalatoria es la más efectiva: el <b>vapor</b> de mercurio se absorbe en proporciones próximas al 80 %.</li>
<li>Eliminación renal (ojo con la reabsorción tubular) y fecal por vía biliar, con posible círculo enterohepático (el Hg es uno de los ejemplos citados).</li>
</ul>
<p><b>Tratamiento quelante:</b> el BAL está indicado frente al arsénico y el <b>mercurio inorgánico</b> (apuntes, p. 49); también sirven DMPS y DMSA.</p>`],
["Pregunta corta: mecanismo de acción del cobre y sus tres fases",`<p class="muted">«Preguntas cortas de la recopilación: Mecanismo de acción del cobre. / Enumere en una línea las tres fases del mecanismo de acción tóxica del cobre.»</p>
<p><b>Las tres fases (apuntes, p. 62):</b></p>
<ul>
<li><b>1. Acumulación hepática</b> del cobre excedentario, hasta alcanzar el límite.</li>
<li><b>2. Interacción metabólica Cu/Mo/sulfato</b>, que condiciona biodisponibilidad, acumulación y eliminación.</li>
<li><b>3. Exceso de Cu en sangre &rarr; crisis hemolítica</b> (y, tras ella, fallo renal).</li>
</ul>
<p><b>Cómo se libera el cobre hepático (apuntes, p. 62):</b> se alteran las actividades enzimáticas y aparece insuficiencia hepática &rarr; disminuye la eliminación biliar y aumenta el Cu hepático (con subida de AST, LDH, arginasa y bilirrubina) &rarr; se dañan membranas celulares, mitocondrias, retículo y aparato de Golgi &rarr; <b>salida masiva de cobre al torrente circulatorio</b>, con aumento de Cu en sangre y orina.</p>
<p><b>Cómo se produce la crisis hemolítica (apuntes, p. 62):</b> paso de Cu2+ a Cu+ (baja el glutatión y suben los peróxidos) y de Fe2+ a Fe3+ (metahemoglobina del 35 %) &rarr; hemoconcentración con aumento del hematocrito y lisis de células y proteínas por el peróxido &rarr; alteraciones osmóticas. Después, <b>fallo renal</b> por obstrucción de los túbulos con hemoglobina y necrosis tubular y glomerular; en músculo, anoxia con aumento de CPK, y en encéfalo, aumento de urea y nitrógeno amoniacal en sangre.</p>
<p><b>Recuerda el papel del hepatocito (apuntes, p. 62):</b> cofactor esencial de enzimas (tirosinasa, citocromo oxidasa, superóxido dismutasa, amina oxidasa, uricasa), almacenamiento como reserva, inducción de <b>metalotioneínas</b> (secuestro), inducción de <b>ceruloplasmina</b> (transporte) y <b>eliminación biliar</b>.</p>`],
["Pregunta corta: mercurio orgánico (CH3Hg+): cuadro clínico y tejidos de acumulación",`<p class="muted">«Preguntas cortas de la recopilación: Intoxicación aguda o crónica por mercurio orgánico. / Cite cuál es el cuadro clínico característico (o principal sistema afectado) ante una intoxicación aguda o crónica por mercurio orgánico (CH3Hg+). / Enumere en qué tres tejidos se acumula principalmente el mercurio orgánico (CH3Hg+).»</p>
<p><b>Sistema afectado: el SISTEMA NERVIOSO.</b> El metilmercurio es un neurotóxico (apuntes, pp. 52-53):</p>
<ul>
<li><b>Adultos:</b> irritabilidad, timidez, temblores, déficit de memoria, alteraciones de la audición (sordera) y de la vista (ceguera); en exposiciones mantenidas, alteraciones neurológicas sensorimotoras (parestesias) y enfermedad cardiovascular, con peores puntuaciones en memoria visual y destreza motora y manual.</li>
<li><b>Niños por exposición fetal:</b> daño cerebral, retardo mental, incoordinación, ceguera, sordera, convulsiones y dificultades para hablar (disartria); el CH3Hg+ pasa a <b>placenta y leche</b> y altera el neurodesarrollo.</li>
<li><b>Niños expuestos directamente:</b> alteraciones nerviosas, digestivas y renales.</li>
</ul>
<p>Es el cuadro de <b>Minamata</b> (Kumamoto, Japón; apuntes, p. 52). Por eso existe una ingesta semanal tolerable (PTWI) de 1,6 µg/kg p.c. y recomendaciones de consumo de pescado para gestantes, lactantes y niños (pez espada, tiburón, aguja y lucio; atún como máximo dos veces por semana) (apuntes, p. 53).</p>
<p><b>Tejidos de acumulación: encéfalo, riñón e hígado</b> (es la respuesta que se da por válida en los exámenes). Aviso: ese trío <b>no aparece literal en tus apuntes</b>; lo que sí consta es que el mercurio se acumula en el riñón unido a metalotioneínas (p. 47), que el metilmercurio atraviesa las barreras y se deposita en el tejido nervioso y pasa al feto y a la leche (p. 53) y que se biomagnifica por la cadena trófica.</p>
<p><b>Si la pregunta va por especies</b> (fungicidas organomercuriales, apuntes, p. 44): las más sensibles son <b>cerdos y aves</b>, por ingestión de semillas tratadas; cursan con trastornos de visión, anorexia, temperatura normal o baja, alteraciones locomotoras, hematuria, intensa diarrea hemorrágica, temblores, parálisis y muerte en una semana; en aves, inflamación necrótica del buche y el estómago, diarrea hemorrágica y lesiones del SNC con incoordinación y temblores. El tratamiento: acelerar la eliminación con soluciones salinas, inactivar con tiosulfato sódico, quelar con BAL (aquí sí, al tratarse del uso clásico en estas intoxicaciones), antibióticos y dieta rica en proteínas (apuntes, p. 44).</p>`],
["Pregunta corta: elemento que controla el cobre en rumiantes",`<p class="muted">«Pregunta corta de la recopilación: Cite el elemento que controla la absorción, acumulación y eliminación de cobre en rumiantes.»</p>
<p><b>El MOLIBDENO</b> (junto con el sulfato).</p>
<p><b>En rumiantes (apuntes, p. 60), la interacción Cu-Mo-sulfato:</b></p>
<ul>
<li><b>Controla la acumulación de Cu en el hígado.</b></li>
<li><b>Facilita la eliminación biliar y renal del Cu.</b></li>
<li>Forma un <b>complejo in vivo Cu/Mo</b> con cociente molar 4/3.</li>
</ul>
<p>En <b>no rumiantes</b>, el Mo y el sulfato por separado no afectan al cobre; combinados, previenen su acúmulo excesivo (apuntes, p. 60). En monogástricos los que protegen frente al exceso de cobre son el <b>hierro y el zinc</b> (su deficiencia aumenta la toxicidad del Cu).</p>
<p><b>Aplicación práctica:</b> entre los factores que aumentan la toxicidad por cobre está la <b>carencia de selenio y molibdeno</b> y una mala relación Cu/Mo (apuntes, p. 61). Por eso el tratamiento preventivo son 50-500 mg de <b>molibdato amónico</b> y 0,1-2 g de <b>sulfato sódico</b> durante 3 semanas, para facilitar la eliminación del cobre y prevenir su acumulación (apuntes, p. 64), y la prevención en pastos se hace abonando con superfosfato molibdenizado (246 g Mo/ha) o con piedras de sal y mezclas minerales molibdenizadas (apuntes, p. 65).</p>
<p><b>El reverso:</b> un exceso de molibdeno provoca <b>molibdenosis</b>, porque obstaculiza el almacenamiento hepático de Cu (carencia), agravada por ingestas altas de azufre y bajas de cobre: diarrea, adelgazamiento, pelo seco, caída de la producción de leche, despigmentación del pelo alrededor de los ojos y trastornos de locomoción en jóvenes (apuntes, p. 65).</p>`],
["Pregunta corta: metalotioneínas: cómo se unen los metales y cuáles",`<p class="muted">«Preguntas cortas de la recopilación: Indique en una línea cómo se unen los metales a las metalotioneínas. / Cite los tres principales metales no esenciales capaces de desplazar a los esenciales y unirse a las metalotioneínas.»</p>
<p><b>Cómo se unen: por los grupos tiol o sulfhidrilo (-SH).</b> Los apuntes, al clasificar las formas en que se encuentran los metales, definen los <b>complejos metálicos</b> como el metal «unido a quelantes por el <b>grupo sulfidrilo</b>» (por ejemplo penicilamina o BAL) o a otros compuestos (apuntes, p. 46). En la metalotioneína esos grupos -SH los aportan sus cisteínas, aunque <b>la palabra «cisteína» no aparece literal en tus apuntes</b>.</p>
<p><b>Qué metales:</b> la respuesta de los exámenes es <b>cadmio, plomo y mercurio</b>; tampoco figura ese trío como tal en los apuntes, pero sí todo lo que lo sostiene:</p>
<ul>
<li><b>Cadmio:</b> acumulación renal «mediada por su unión a metalotioneínas» (apuntes, p. 47); una pequeña fracción circula unida a MT (p. 58) y el tratamiento consiste en inducir su síntesis con Zn, Se o Co en la dieta (p. 59).</li>
<li><b>Mercurio:</b> acumulación renal también mediada por su unión a metalotioneínas (apuntes, p. 47).</li>
<li><b>Plomo:</b> los apuntes no lo citan expresamente unido a MT; sí que se acumula en tejidos calcificados por similitud con el calcio (p. 47) y que interfiere con enzimas y con el grupo hemo (p. 55).</li>
<li>Añadido útil: el <b>arsénico</b> es «inductor de metalotioneínas in vivo» (apuntes, p. 72).</li>
</ul>
<p><b>Para qué sirve saberlo:</b> esa unión explica la enorme permanencia intracelular del cadmio (vida media de unos 30 años y acumulación renal progresiva hasta los 50-60 años; apuntes, p. 58) y que el hepatocito secuestre el cobre induciendo metalotioneínas (p. 62).</p>`],
["Pregunta corta: quelante contraindicado en cadmio, selenio y mercurio orgánico",`<p class="muted">«Pregunta corta de la recopilación: Cite el quelante contraindicado para el tratamiento de intoxicación por Cd, Se y Hg orgánico.»</p>
<p><b>El BAL</b> (2,3-dimercaptopropanol, dimercaprol o anti-lewisita británica).</p>
<p><b>Apuntes, p. 49:</b> el BAL contiene dos grupos -SH y un hidroxilo; está <b>indicado</b> frente a <b>arsénico y mercurio inorgánico</b> (también plomo y oro) y <b>contraindicado en la intoxicación por cadmio y por mercurio orgánico</b>. Su mecanismo es unir el metal por un grupo tiol formando un complejo metal-ligando estable que se excreta por vía renal; puede ser tóxico, por lo que no se recomiendan tratamientos prolongados (2,5-5 mg/kg en solución al 10 % en aceite vegetal, seis veces al día durante 48 h, vía intramuscular).</p>
<p><b>En el cadmio</b> se repite el aviso: «No debemos usar BAL (2,3-dimercaptopropanol)»; lo que se hace es retirar la exposición e inducir la síntesis de metalotioneínas con Zn, Se o Co en la dieta (apuntes, p. 59).</p>
<p><b>Alternativas (apuntes, pp. 49-50):</b></p>
<table>
<tr><th>Quelante</th><th>Indicación en tus apuntes</th></tr>
<tr><td>DMPS</td><td>Arsénico, plomo y mercurio (orgánico e inorgánico); hidrosoluble, no atraviesa la BHE, elimina el Hg depositado en riñón; menos efectos colaterales que el BAL</td></tr>
<tr><td>DMSA</td><td>Plomo, mercurio y arsénico; menos tóxico que el CaNa2EDTA</td></tr>
<tr><td>CaNa2EDTA</td><td>Plomo y zinc</td></tr>
<tr><td>D-penicilamina</td><td>Cobre (y como tercera opción en plomo y arsénico)</td></tr>
</table>
<p><b>Matiz sobre el selenio:</b> tus apuntes <b>no recogen</b> la contraindicación del BAL en el selenio. El tratamiento del selenio que aparece es administrar sales de arsénico o arsénico en la ración y, en caballos y vacas, 4-5 g de naftaleno durante 5 días, además de retirar la fuente (apuntes, p. 68).</p>`],
["Pregunta corta: enzima biomarcador del plomo",`<p class="muted">«Pregunta corta de la recopilación: El plomo afecta a la síntesis del grupo hemo. Cite la enzima principalmente afectada que puede ser utilizada como biomarcador.»</p>
<p><b>La ALAD</b> (ácido delta-aminolevulínico deshidratasa).</p>
<p>El primer mecanismo de acción del plomo que citan los apuntes es que, en el tejido hematopoyético, <b>interfiere en la síntesis del grupo hemo</b> (apuntes, p. 55). Y en la escala de efectos por niveles (apuntes, p. 56) la ALAD es lo primero que se altera:</p>
<table>
<tr><th>Nivel</th><th>Efecto</th></tr>
<tr><td>5-15</td><td><b>Disminución de ALAD en pollos</b></td></tr>
<tr><td>20-50</td><td><b>Disminución de ALAD en adultos</b>, menor respuesta de huida y leve depresión</td></tr>
<tr><td>50-100</td><td>Depresión severa, anemia y diarrea</td></tr>
<tr><td>&gt;100</td><td>Signos neurológicos, pérdida de peso, anemia y diarrea verde</td></tr>
</table>
<p>Por eso, en un ave acuática viva con sospecha de plumbismo, el diagnóstico se hace con <b>plomo en sangre entera + ALAD + radiografía</b>: los perdigones quedan implantados en la molleja (apuntes, pp. 56 y 58). Otros efectos hematológicos: anemia con eritrocitos microcíticos e hipocrómicos (apuntes, p. 58).</p>
<p><b>Tratamiento del plomo (apuntes, p. 56):</b> eliminar la fuente (incluso quirúrgicamente), tratamiento sintomático, barbitúricos y fluidoterapia, con <b>CaNa2EDTA</b> (nunca NaEDTA, por el riesgo de hipocalcemia) o la combinación <b>CaNa2EDTA + BAL</b>, en la que el CaNa2EDTA quela y moviliza el plomo del hueso y el BAL quela el de los órganos; también DMSA y D-penicilamina.</p>`],
["Pregunta de desarrollo: el quelante ideal (4 características)",`<p>Cayó como pregunta de desarrollo en el 3er parcial (15/5/25): <b>quelante ideal, 4 características</b>. Los apuntes dan <b>nueve</b> (p. 48); estas cuatro son las más completas para responder:</p>
<ul>
<li><b>Forma complejos químicamente inertes y no tóxicos</b> con los átomos o iones metálicos, y esos complejos <b>se excretan fácilmente del cuerpo sin interaccionar con órganos vitales</b>.</li>
<li><b>Mayor afinidad por los metales que por los ligandos corporales normales</b> y, en especial, <b>afinidad relativamente mayor por los metales tóxicos que por los metales necesarios</b> para el organismo, compitiendo con los ligandos endógenos.</li>
<li><b>Atraviesa la membrana celular</b> para eliminar los metales tóxicos <b>intracelulares</b>, y su <b>distribución en el cuerpo es la misma que la de los metales tóxicos</b>.</li>
<li><b>Conserva sus propiedades quelantes al pH de los fluidos corporales</b> y puede administrarse por <b>vía oral, intravenosa o intramuscular</b>.</li>
</ul>
<p>Si pide más, quedan por citar: que el complejo sea estable, y que <b>en caso de neurotoxicidad</b> se prefiera un quelante con <b>alta lipofilicidad y bajo peso molecular</b> para que atraviese la <b>barrera hematoencefálica</b> (este matiz vale mucho como cierre de la respuesta).</p>
<p class="muted">p. 48</p>`],
["Pregunta de desarrollo: mecanismos de acción del plomo",`<p class="muted">Pregunta de desarrollo de la recopilación: «Mecanismos de acción del plomo» (reco p. 47, n.º 8).</p>
<ul>
<li><b>Tejido hematopoyético:</b> interfiere en la <b>síntesis del grupo hemo</b> (inhibe la ALAD), alterando la morfología de los precursores de los glóbulos rojos en médula ósea → anemia (apuntes, p. 55).</li>
<li><b>Sistema nervioso:</b> interfiere con los mecanismos sinápticos de liberación de neurotransmisores; es neurotóxico central y periférico (apuntes, p. 55).</li>
<li><b>Metabolismo del calcio:</b> inhibe la bomba Na-K-ATPasa, aumenta el Ca intracelular (actúa como segundo mensajero) y altera la neurotransmisión y el tono vascular (apuntes, p. 55).</li>
<li><b>Músculo liso:</b> estimula una contracción mantenida. <b>Hueso:</b> osteocondensación y acumulación en tejidos calcificados por su similitud con el calcio (apuntes, p. 47 y 55).</li>
<li><b>Riñón:</b> hipertensión, tubulopatías, fibrosis y atrofia glomerular; interfiere además en la conversión de la <b>vitamina D</b> a su forma activa (apuntes, p. 55 y 58).</li>
<li><b>Sistema inmune:</b> disminuye la globulina sérica, la síntesis de anticuerpos y la lisozima, e interfiere en la fagocitosis de los leucocitos. Es además <b>embriotóxico</b> y actúa sobre tiroides y encías (apuntes, p. 55).</li>
</ul>`],
["Pregunta de desarrollo: cadmio y zinc (eliminación y mecanismo)",`<p class="muted">Pregunta de desarrollo de la recopilación: «Cadmio y zinc: vías de eliminación y mecanismo de acción» (reco p. 47, n.º 14).</p>
<table>
<tr><th></th><th>Cadmio</th><th>Zinc</th></tr>
<tr><td><b>Eliminación</b></td><td>Por <b>orina, muy lenta</b> (vida media ~30 años, carga corporal 50-75 % en hígado y riñón); por leche es baja (apuntes, p. 58)</td><td>Por <b>heces</b> (jugo pancreático y bilis), <b>orina y leche</b>; <b>no se acumula</b> (apuntes, p. 74)</td></tr>
<tr><td><b>Mecanismo</b></td><td>Gastroenteritis por precipitación de proteínas; inhibición enzimática por sustitución de oligoelementos y unión a grupos tiol; desacopla la fosforilación oxidativa; inhibe la síntesis de ADN, ARN y proteínas; induce anomalías cromosómicas y tumores; acumulación renal con necrosis y disfunción, e inhibición de la hidroxilación de la vitamina D (apuntes, p. 58)</td><td>Inhibe enzimas con grupos SH (AChE, catalasa, pepsina, tripsina, amilasas), precipita proteínas (gastroenteritis) y actúa sobre el metabolismo del <b>Cu y Fe</b> provocando anemia (apuntes, p. 74)</td></tr>
</table>
<p>Interacción entre ambos: el zinc está <b>antagonizado o inhibido por el cadmio</b> (apuntes, p. 74) y, al revés, la absorción digestiva de Cd aumenta cuando disminuye la presencia de Zn (apuntes, p. 58). El tratamiento del cadmio consiste precisamente en inducir metalotioneínas con <b>Zn, Se o Co</b> (apuntes, p. 59).</p>`],
["Pregunta de desarrollo: síntomas del mercurio elemental",`<p class="muted">Pregunta de desarrollo de la recopilación: «Síntomas de Hg elemental» (reco p. 48, n.º 27).</p>
<p>El mercurio elemental tiene una <b>altísima presión de vapor</b> (termómetros) y se absorbe por vía inhalatoria en proporciones próximas al <b>80 %</b>, mientras que su absorción digestiva es prácticamente nula (apuntes, p. 47 y 52).</p>
<ul>
<li><b>En adultos:</b> irritabilidad, timidez, temblores, déficit de memoria y alteraciones de la audición (sordera) y de la vista (ceguera) (apuntes, p. 52).</li>
<li><b>En niños por exposición fetal:</b> daño cerebral, retardo mental, incoordinación, ceguera, sordera, convulsiones y disartria (apuntes, p. 52).</li>
<li><b>En niños expuestos directamente:</b> alteraciones nerviosas, digestivas y renales (apuntes, p. 52).</li>
</ul>
<p class="muted">La recopilación añade que los vapores mercuriales irritan los conductos aéreos y provocan insuficiencia pulmonar con edema agudo de pulmón («pulmonares y nerviosos»); ese cuadro respiratorio no aparece en tus apuntes.</p>`],
["Pregunta de desarrollo: acumulación del cadmio",`<p class="muted">Pregunta de desarrollo de la recopilación: «Acumulación del cadmio» (reco p. 48, n.º 34; la recopilación responde con el orden en alimentos: plantas &lt; pescado &lt; cereales &lt; tubérculos).</p>
<ul>
<li><b>En el organismo:</b> carga corporal del <b>50-75 % en hígado y riñón</b>, unido a metalotioneínas; vida media de unos <b>30 años</b> y acumulación renal progresiva hasta los 50-60 años, con eliminación urinaria muy lenta (apuntes, p. 58). Atraviesa la barrera fetoplacentaria en exposiciones altas.</li>
<li>Por eso, <b>alto en hígado y bajo en riñón = exposición reciente</b>, y lo contrario indica exposición antigua.</li>
<li><b>En alimentos:</b> tus apuntes no dan ese orden concreto; sí recogen que el Reglamento (CE) 1881/2006 fija contenidos máximos de cadmio en hortalizas y frutas, setas, cereales, productos de cacao, carne, despojos, pescado, moluscos, crustáceos, cefalópodos, preparados para lactantes y complementos alimenticios (apuntes, p. 51).</li>
<li>Fuentes: pilas, pinturas, químicos, humo (1-2 µg/cigarrillo) y suelos contaminados, de donde pasa a plantas y animales; ingesta diaria humana de 10-40 µg (apuntes, p. 58).</li>
</ul>`],
["Pregunta de desarrollo: síntomas del plomo en bovinos",`<p class="muted">Pregunta de desarrollo de la recopilación: «Síntomas por Pb en bovinos» (reco p. 49, n.º 37; la recopilación responde: agudos a los 2-3 días, digestivos y nerviosos, con sed, salivación, anorexia, descenso de la motilidad ruminal, estreñimiento y luego diarrea y dolor abdominal).</p>
<p>El bovino (junto con ovino, equino, aves acuáticas y perro) es de las especies más afectadas; dosis única letal de 400 mg/kg en adulto y 400-600 mg/kg en terneros, y dosis letal crónica de 6-7 mg/kg/día durante 8 semanas (apuntes, p. 54-55).</p>
<p>Tus apuntes describen los signos por <b>niveles de plomo en sangre (µg/dL)</b> (apuntes, p. 56):</p>
<table>
<tr><th>Nivel</th><th>Efectos</th></tr>
<tr><td>&gt;100</td><td>Signos clínicos <b>neurológicos</b>, pérdida de peso, anemia y <b>diarrea verde</b></td></tr>
<tr><td>50-100</td><td>Depresión severa, anemia y diarrea</td></tr>
<tr><td>20-50</td><td>Disminución de la ALAD en adultos, menor respuesta de huida y depresión leve</td></tr>
<tr><td>5-15</td><td>Disminución de la ALAD en pollos</td></tr>
</table>
<p class="muted">El detalle digestivo de la recopilación (sed, salivación, atonía ruminal, estreñimiento) no figura como tal en tus apuntes.</p>`],
["Pregunta de desarrollo: diagnóstico diferencial del plomo",`<p class="muted">Pregunta de desarrollo de la recopilación: «Diagnóstico diferencial del plomo» (reco p. 50, n.º 57; la recopilación responde: OC, OF, EEF, rabia, HG, urea, carbamatos, hipovitaminosis A…).</p>
<p>El diagnóstico clínico se hace por el entorno y la analítica, y hay que diferenciarlo de (apuntes, p. 56):</p>
<ul>
<li><b>Otros tóxicos:</b> organoclorados, organofosforados, carbamatos y <b>urea</b>.</li>
<li><b>Otros procesos:</b> encefalopatías espongiformes transmisibles (EET), hipovitaminosis A, <b>rabia</b>, tetania hipomagnesémica y abscesos cerebrales.</li>
</ul>
<p>Apoyo diagnóstico: plomo en sangre entera, actividad de la <b>ALAD</b> y, en aves, radiografía de molleja y aparato intestinal (apuntes, p. 56-58).</p>`],
["Pregunta de desarrollo: biotransformación del cadmio",`<p class="muted">Pregunta de desarrollo de la recopilación: «Biotransformación del cadmio» (reco p. 50, n.º 60; respuesta: NO se biotransforma).</p>
<ul>
<li>Los metales <b>no son susceptibles de metabolización</b>: se distribuyen unidos a proteínas plasmáticas y glóbulos rojos y se acumulan en los tejidos (apuntes, p. 47). El cadmio, por tanto, <b>no se biotransforma</b>.</li>
<li>Lo que sí hace es unirse a <b>metalotioneínas</b>, lo que explica su acumulación renal y su vida media de unos 30 años (apuntes, p. 47 y 58).</li>
<li>Se elimina sin cambios, muy lentamente, por orina (apuntes, p. 58).</li>
</ul>`],
["Pregunta de desarrollo: forma tóxica del mercurio",`<p class="muted">Pregunta de desarrollo de la recopilación: «Forma tóxica del mercurio» (reco p. 50, n.º 61; respuesta: la orgánica).</p>
<ul>
<li>El mercurio se presenta como <b>elemental o metálico</b>, <b>inorgánico</b> (mercurioso Hg+ y mercúrico Hg2+) y <b>orgánico</b> (alquilmercurio, metilmercurio) (apuntes, p. 52).</li>
<li>El orden de toxicidad de los metales es <b>organometálicos &gt; formas iónicas &gt; forma elemental o metálica</b> (apuntes, p. 46), y la absorción digestiva es alta en las formas orgánicas, baja en las inorgánicas (2-4 % para el Hg) y prácticamente nula en la elemental (apuntes, p. 47).</li>
<li>El <b>metilmercurio</b> es el responsable del interés médico-social: biomagnifica en la cadena trófica (pescado), pasa a placenta y leche y afecta al <b>neurodesarrollo</b>; en adultos da enfermedad cardiovascular y alteraciones neurológicas (parestesias) (apuntes, p. 53). Caso Minamata.</li>
<li>Ingesta semanal tolerable provisional revisada a la baja: <b>1,6 µg/kg p.c.</b>; grupos de riesgo: gestantes, lactantes, niños en crecimiento y grandes consumidores de pescado (apuntes, p. 53).</li>
</ul>`],
["Pregunta de desarrollo: metales carcinogénicos",`<p class="muted">Pregunta de desarrollo de la recopilación: «Compuestos carcinogénicos» (reco p. 50, n.º 63; respuesta: cadmio, nitritos y nitratos).</p>
<ul>
<li><b>Cadmio:</b> inhibe la síntesis de ADN, ARN y proteínas e <b>induce anomalías cromosómicas y tumores</b> (apuntes, p. 58). La propia recopilación lo da como <b>carcinógeno humano según la IARC</b>, con tumores de pulmón, testículo, próstata y riñón (reco p. 42, n.º 95), y como ejemplo de teratógeno junto con la ocratoxina A (reco p. 47, n.º 16); esa clasificación de la IARC no está en tus apuntes.</li>
<li>De forma general, los metales producen <b>inhibición sobre el ADN y cáncer por alteración de su replicación</b>, además de estrés oxidativo, inhibición de enzimas y de la comunicación celular (apuntes, p. 47).</li>
<li class="muted">Los nitritos y nitratos no pertenecen al bloque de metales de tus apuntes.</li>
</ul>`],
["Pregunta de desarrollo: tres tóxicos y sus antídotos",`<p class="muted">Pregunta de desarrollo de la recopilación: «Tres tóxicos y sus antídotos» (reco p. 50, n.º 64; respuesta: mercurio → BAL, cadmio → DTPA, plomo → EDTA-Ca).</p>
<table>
<tr><th>Tóxico</th><th>Quelante según tus apuntes</th></tr>
<tr><td><b>Mercurio inorgánico</b> y arsénico</td><td><b>BAL (dimercaprol)</b>, 2,5-5 mg/kg IM; <b>contraindicado</b> en mercurio orgánico y en cadmio (apuntes, p. 49)</td></tr>
<tr><td><b>Mercurio orgánico</b></td><td><b>DMPS</b> (elimina el Hg depositado en riñón) y <b>DMSA</b> (apuntes, p. 49)</td></tr>
<tr><td><b>Plomo</b></td><td><b>CaNa2-EDTA</b> 25 mg/kg/6 h IV (nunca NaEDTA: hipocalcemia), combinado con <b>BAL</b>; también DMSA y D-penicilamina (apuntes, p. 49 y 56)</td></tr>
<tr><td><b>Cobre</b></td><td><b>D-penicilamina</b> 10-100 mg/kg/día oral; también BAL, EDTA, DMPS y TRIEN, con molibdato amónico y sulfato sódico como preventivos (apuntes, p. 50 y 64)</td></tr>
<tr><td><b>Cadmio</b></td><td>Retirar la exposición e <b>inducir metalotioneínas con Zn, Se o Co</b>; <b>no usar BAL</b> (apuntes, p. 59)</td></tr>
<tr><td><b>Selenio</b></td><td>Sales de arsénico en la dieta y naftaleno 4-5 g/5 días en caballo y vaca (apuntes, p. 68)</td></tr>
</table>
<p class="muted">El DTPA que cita la recopilación para el cadmio no aparece en tus apuntes.</p>`],
["Pregunta de desarrollo: intoxicación aguda por cobre en ovejas",`<p class="muted">Pregunta de desarrollo de la recopilación: «Síntomas agudos en ovejas por cobre» (reco p. 50, n.º 70; respuesta: enteritis, convulsiones, necrosis hepática, renal e irritación respiratoria).</p>
<p>El ovino es la especie más sensible: dosis única letal de <b>20-30 mg/kg</b> frente a 200 mg/kg en vacuno; morbilidad del 5 % y mortalidad del 75-80 % (apuntes, p. 61).</p>
<ul>
<li><b>Intoxicación aguda</b> (apuntes, p. 62): <b>gastroenteritis</b> por vía oral (dolor abdominal, salivación, diarrea líquida, vómito en las especies que vomitan, heces y vómitos con moco de color <b>azul intenso</b>); <b>shock</b> (descenso de la temperatura, aumento de la frecuencia cardiaca, colapso y muerte) y alteraciones hepáticas con ictericia.</li>
<li><b>Crisis hemolítica</b> (la clave del cuadro ovino): la liberación brusca del cobre hepático a la sangre produce hemólisis, <b>hemoglobinuria</b> (orina oscura), ictericia, palidez de mucosas, debilidad y temblores de aparición brusca, descarga nasal sanguinolenta, disnea y shock vascular; muerte en 1-4 días (apuntes, p. 62-63).</li>
<li><b>Lesiones:</b> ictericia generalizada, hepatomegalia y nefromegalia, hígado amarillento y friable, <b>riñón oscuro metálico</b>, vesícula biliar repleta de bilis verde espesa y orina oscura (apuntes, p. 63).</li>
<li><b>Tratamiento:</b> quelantes (BAL, EDTA, DMPS, penicilamina, TRIEN) y, como prevención, <b>molibdato amónico y sulfato sódico</b> durante 3 semanas (apuntes, p. 64).</li>
</ul>`]
]},
3: {
intro: "Temas 34-35 (lo menos importante del parcial): retardantes de llama bromados, bisfenol A y radiaciones ionizantes.",
sections: [
["Tema 34 · Retardantes de llama bromados y bisfenol A",`<p><b>BFR: ¿qué son?</b> Mezclas de productos químicos artificiales que se añaden a muchos productos para <b>hacerlos menos inflamables</b>. Se encuentran en <b>plásticos, textiles y equipos eléctricos y electrónicos</b>. Clases: PBDE (éteres difenilos polibromados), HBCDD (hexabromociclododecanos), TBBPA (tetrabromobisfenol A) y otros fenoles, y PBB (bifenilos polibromados).</p>
<p><b>¿Cómo llegan al medioambiente?</b> Su uso está restringido o prohibido en la UE, pero se liberan sobre todo desde los <b>productos tratados</b>, por <b>fugas de equipos eléctricos</b> y por el <b>desecho inapropiado de equipos obsoletos</b>.</p>
<table>
<tr><th>BFR aditivos (PBDE, PBB, HBCD)</th><th>BFR reactivos (TBBPA)</th></tr>
<tr><td>Mezclados con el polímero o incorporados al producto</td><td>Menos lipofílicos</td></tr>
<tr><td><b>Muy lipofílicos</b></td><td>Menos tóxicos</td></tr>
<tr><td>Tóxicos (sistema nervioso endocrino)</td><td>Metabolismo más rápido por los organismos vivos</td></tr>
<tr><td>Se liberan gradualmente al medio</td><td>No se liberan fácilmente al medio</td></tr>
</table>
<ul>
<li>Comunes a los dos: <b>se acumulan en las grasas pasando a la cadena alimentaria</b> (pescado, carne, leche y derivados), <b>no hay evidencias de carcinogenicidad</b> y producen <b>daños en DNA</b>.</li>
<li><b>Órganos diana:</b> hígado, sistema nervioso, endocrino y reproductor. Niveles de ingesta tolerables: faltan datos.</li>
<li>Medidas: Convenio de Estocolmo, Reglamento (UE) 2019-1021 y control en alimentos del Reglamento (UE) 589/2014.</li>
</ul>
<p><b>BISFENOL A (BPA).</b> Se usa en la fabricación de <b>plásticos y resinas epoxi</b>: envases de alimentos y bebidas, vajillas, <b>papel térmico</b>, material dental y dispositivos médicos. Se obtiene por <b>condensación de dos moléculas de fenol con una de acetona</b> en presencia de ácido clorhídrico.</p>
<ul>
<li><b>Exposición:</b> vía oral, inhalatoria y cutánea; fuentes de dieta, agua, polvo, papel térmico, material dental y dispositivos médicos. Es <b>crónica</b> y el mayor riesgo está en <b>fetos, bebés y niños</b>.</li>
<li><b>IDT:</b> 50 µg/kg pc/día (2015), luego 4 µg/kg pc/día y <b>0,2 ng/kg pc/día (2023)</b>. La EFSA y la European Medicines Agency no están de acuerdo sobre la evidencia ni sobre el método para cuantificar el riesgo.</li>
<li><b>Cinética:</b> detectado en sangre, orina, calostro, fluido folicular, fluido amniótico, cordón umbilical, tejido placentario e hígados de fetos. Metabolización <b>hepática y rápida</b> a BPA-glucurónido (muy soluble) y una fracción a BPA-sulfato; el <b>BPA conjugado no tiene actividad estrogénica</b>.</li>
<li><b>Mecanismo:</b> <b>disruptor endocrino</b>, sustancia exógena que interfiere con la biosíntesis, el metabolismo y las acciones de las hormonas y altera la homeostasia del individuo expuesto <b>o la de sus descendientes</b>.</li>
<li><b>Efectos:</b> cáncer, alteraciones en el desarrollo y a nivel neuronal, especies reactivas de oxígeno con daño en el material genético, enfermedades metabólicas y cardiovasculares y <b>alteraciones del sistema reproductor</b> (afectación de la fertilidad). En 2023 la EFSA concluye que la exposición alimentaria es un problema de salud en <b>todos los grupos de edad</b>, con efectos sobre el sistema inmunitario.</li>
</ul>
<p class="muted">Los apuntes escriben «20 veces menos» al hablar del cambio de IDT, pero los números que dan (de 50 µg a 0,2 ng/kg pc/día) son una bajada mucho mayor: quédate con las cifras.</p>`],
["Tema 35 · Radiaciones ionizantes",`<p><b>Efectos:</b></p>
<ul>
<li><b>Genéticos o hereditarios:</b> afectan a la <b>descendencia</b> de los irradiados (efecto sobre ovarios o testículos).</li>
<li><b>Somáticos:</b> solo al individuo irradiado. <b>Inmediatos</b> (trastornos digestivos, anemia, esterilidad, muerte) o <b>transcurrido un tiempo</b> (cáncer, leucemia, envejecimiento prematuro, retraso mental, cataratas).</li>
</ul>
<p><b>Mecanismo:</b> las lesiones sobre el ADN se traducen en <b>aberraciones cromosómicas</b> (pérdida genética o mala interpretación de la información) y <b>mutaciones</b> (cambios en la estructura química del ADN que pueden llevar a la muerte celular). Daño morfológico: tumefacción nuclear, rotura del cromosoma, aumento de la viscosidad del citoplasma, alteración de la permeabilidad por rotura de membranas y muerte celular; la alteración funcional aparece cuando hay muchas células afectadas.</p>
<p><b>Respuesta del organismo:</b> si hay mecanismo de reparación, sin efecto; con acumulación de lesiones (bajas dosis), cáncer, desarrollo embrionario anormal y enfermedades hereditarias. Son más susceptibles los <b>viejos, jóvenes y enfermos</b> que los maduros y sanos. La dosis depende del individuo y del tejido, y la <b>primera acción es sobre las células en división</b>.</p>
<p><b>Radiosensibilidad por tejidos</b> (de más a menos): tejido linfoide y médula ósea; tejido epitelial (testículos, ovarios y piel); células endoteliales de vasos sanguíneos; células serosas del peritoneo y la pleura; fibroblastos; osteocitos; fibra muscular lisa; fibra muscular estriada; células nerviosas (el embrión y los muy jóvenes, los más susceptibles).</p>
<table>
<tr><th>Tejido</th><th>Efectos</th></tr>
<tr><td>Sangre</td><td>Hemorragias, anemias y riesgo de infecciones</td></tr>
<tr><td>Genitales</td><td>Reducción de la espermatogénesis, esterilidad y efectos genéticos</td></tr>
<tr><td>Piel</td><td>Pigmentación y depilación, úlceras, cáncer y lesiones</td></tr>
<tr><td>Embriones</td><td>Malformaciones y aumento de la tasa de tumores</td></tr>
<tr><td>Hueso</td><td>Interrupción del crecimiento, esclerosis, necrosis y tumores</td></tr>
<tr><td>Nervioso</td><td>Parálisis parcial</td></tr>
<tr><td>Intestino</td><td>Alteración de la motilidad, úlceras en la mucosa, hemorragias y petequias</td></tr>
</table>
<p><b>Síndrome de radiación:</b> a las pocas horas, malestar general con náuseas, vómitos, vértigo, anorexia, fatiga y postración; hasta la 2ª semana no hay otros síntomas externos. Entre la <b>2ª y la 4ª semana</b>, pérdida de peso, caída del cabello, hipersensibilidad, diarrea, sangre por boca, nariz y heces y alteraciones sanguíneas. A la <b>4ª semana, colapso cardiovascular</b>: la recuperación empieza entre la 6ª y la 8ª semana y termina meses después; si no la hay, muerte a partir de la 4ª semana.</p>
<p><b>Protección:</b> <b>distancia</b> entre la fuente y el organismo, control de la <b>duración y el espaciado</b> de la exposición y <b>barreras</b> entre la fuente y el organismo.</p>`]
]}
};
