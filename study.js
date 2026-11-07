"use strict";
/* Apuntes de estudio por tema. Cada sección: [título, html] */
const STUDY = {
1: {
intro: "Conceptos generales de terapéutica veterinaria. Del parcial solo hay una pregunta de este tema (tipos de tratamiento).",
sections: [
["Conceptos básicos",`<ul>
<li><b>Terapéutica</b>: uso racional de fármacos para prevenir, diagnosticar o tratar enfermedades.</li>
<li><b>Índice terapéutico</b> = DL50/DE50: cuanto mayor, más seguro es el fármaco.</li>
<li><b>Posología</b>: dosis, intervalo, vía y duración. Hay que ajustarla por especie, edad, peso y función renal y hepática.</li></ul>`],
["Tipos de tratamiento",`<table><tr><th>Tipo</th><th>Qué hace</th><th>Ejemplo</th></tr>
<tr><td><b>Etiológico</b> o curativo</td><td>Elimina la causa</td><td>Antibiótico en una infección bacteriana</td></tr>
<tr><td><b>Patogénico</b> o correctivo</td><td>Corrige el mecanismo de la enfermedad sin quitar la causa</td><td><b>Insulina en la diabetes</b> (también llamado sustitutivo)</td></tr>
<tr><td><b>Sintomático</b></td><td>Alivia los síntomas</td><td>Analgésicos, antipiréticos, antitusígenos</td></tr>
<tr><td><b>Supresivo</b> o paliativo</td><td>Alivio pasajero sin eliminar la enfermedad</td><td>Cuidados paliativos</td></tr>
<tr><td><b>Profiláctico</b> o preventivo</td><td>Evita que aparezca la enfermedad</td><td>Vacunas, antiparasitarios</td></tr></table>`],
["Diferencias entre especies",`<ul>
<li><b>Gato</b>: déficit de glucuronidación → paracetamol tóxico y vida media muy larga de salicilatos.</li>
<li><b>Rumiantes</b>: el rumen retrasa y altera la absorción oral; aparece el problema de los <b>residuos</b> en leche y carne.</li>
<li><b>Caballo</b>: muy sensible a alteraciones de la flora del colon (antibióticos) y a las úlceras por AINEs.</li>
<li>Collies y razas relacionadas (mutación MDR1): sensibles a la ivermectina y la loperamida.</li></ul>`],
["Prescripción y normativa",`<ul>
<li><b>Cascada de prescripción</b>: si no hay un medicamento autorizado para esa especie e indicación, se usa por este orden: uno de otra especie o indicación → uno de uso humano → una fórmula magistral.</li>
<li><b>Tiempo de espera</b>: tiempo desde la última dosis hasta que la carne, la leche o los huevos son aptos para consumo (animales de abasto).</li>
<li><b>Farmacovigilancia</b>: notificación de reacciones adversas, falta de eficacia o residuos.</li></ul>`]
]},
2: {
intro: "Los autacoides son sustancias de acción local («hormonas locales») que se forman y actúan en el mismo tejido.",
sections: [
["Histamina",`<ul>
<li>Se forma por descarboxilación de la histidina. Se almacena sobre todo en gránulos (con heparina) de <b>mastocitos (células cebadas) y basófilos</b>; también en el SNC (hipotálamo) y en las células de la mucosa digestiva. Se biotransforma sobre todo en el hígado (metilación y desaminación) y se elimina por el riñón como metabolitos no activos.</li>
<li><b>H1</b> (baja afinidad): contracción de músculo liso (bronquios, intestino), vasodilatación de vasos pequeños y aumento de permeabilidad (habón), prurito y dolor, liberación de catecolaminas de la médula adrenal, enlentecimiento de la conducción AV.</li>
<li><b>H2</b> (baja afinidad): secreción gástrica de HCl, efecto <b>crono e inotropo positivo</b>, parte de la vasodilatación, relajación de la fibra lisa.</li>
<li><b>H3</b> (alta afinidad): presináptico, en el SNC (sueño y vigilia, cognición; frena la liberación de neurotransmisores). <b>H4</b> (alta afinidad): células inmunes (quimiotaxis).</li>
<li>Vasos grandes → constricción; vasos pequeños → dilatación → ↓RVP e hipotensión. En el <b>perro</b> contrae las venas hepáticas. A dosis bajas, tras una hipotensión breve, <b>hipertensión secundaria</b> a la liberación de catecolaminas de la médula adrenal (base del diagnóstico del feocromocitoma); a dosis altas, hipotensión intensa, edemas y posible colapso circulatorio.</li>
<li><b>Broncoconstricción</b> («imp» en tus apuntes): intensa en asmáticos (u otras enfermedades pulmonares) y leve en animales sanos; <b>muy común en el gato</b> (asma felina) y la cobaya es muy sensible.</li>
<li>✂ Tachado en tus apuntes (no entra): la respuesta arteriolar por especies, el útero por especies, el rumen y retículo, los no rumiantes y las excepciones de la oveja y el gato.</li></ul>`],
["Antihistamínicos H1",`<table><tr><th></th><th>1ª generación</th><th>2ª generación</th></tr>
<tr><td>Ejemplos</td><td>difenhidramina, clorfeniramina, dimenhidrinato, hidroxicina, ciproheptadina</td><td>loratadina, cetirizina, fexofenadina, terfenadina, astemizol</td></tr>
<tr><td>Selectividad</td><td>poco selectivos (bloqueo colinérgico y α)</td><td>muy selectivos</td></tr>
<tr><td>SNC</td><td>atraviesan la BHE → sedación</td><td>poco paso → apenas sedan</td></tr>
<tr><td>Cinética</td><td>buena absorción oral pero <b>elevado primer paso</b> (dosis altas); biotransformación rápida (efecto 3-6 h); eliminación <b>fundamentalmente biliar</b>; algunos con metabolitos activos (hidroxicina → cetirizina)</td><td>absorción oral rápida; vida media larga (12-24 h), metabolitos activos (loratadina → desloratadina), <b>alta unión a proteínas</b>, metabolismo por <b>CYP3A4</b>, excreción <b>renal</b></td></tr></table>
<ul><li>Usos: urticaria, prurito, rinitis y conjuntivitis alérgica, cinetosis y vértigo (1ª gen.), coadyuvantes de la adrenalina y los corticoides en la anafilaxia, retención de placenta. <b>Poco eficaces en el broncoespasmo</b>.</li>
<li>Otros efectos: <b>anestesia local</b> (difenhidramina, prometazina), efecto tipo quinidina a dosis altas (enlentecen la conducción), inhiben la liberación de catecolaminas mediada por H1.</li>
<li>Reacciones adversas: <b>depresión del SNC</b> (sedación, ataxia, fatiga), anticolinérgicas (sequedad de boca, dificultad de micción, <b>taquicardia</b>), discrasias sanguíneas (leucopenia, agranulocitosis, anemia hemolítica), anorexia (salvo la ciproheptadina, que es orexígena).</li>
<li>Interacciones: potencian anticolinérgicos y depresores del SNC (tranquilizantes, anestésicos, opiáceos); antagonizan a los esteroides; interfieren en la prueba de la tuberculina; <b>cardiotoxicidad</b> con eritromicina o ketoconazol (bloquean el citocromo P450), sobre todo el astemizol: QT largo y arritmias ventriculares (en perro y gato no hay constancia a dosis terapéuticas).</li>
<li><b>Ciproheptadina</b>: antiH1 y antagonista 5-HT2; asma felino y estimulante del apetito.</li></ul>`],
["Antihistamínicos H2",`<ul>
<li>Cimetidina, ranitidina, famotidina, nizatidina. Inhiben la secreción gástrica: úlcera péptica, gastritis urémica, esofagitis por reflujo.</li>
<li><b>Buena absorción oral</b> (también IV e IM); el <b>efecto de primer paso</b> (leve en la nizatidina; menor que en los antiH1) reduce su biodisponibilidad: si hay urgencia, mejor IV. (Una clave de clase decía «se absorben poco», al revés que tus apuntes.) Se biotransforman menos que los antiH1 y ~50 % se elimina activo por el riñón. Nizatidina: sin metabolismo hepático → útil en insuficiencia hepática. No atraviesan la BHE (sin efectos centrales), aunque en ancianos todos pueden dar confusión mental e insuficiencia renal.</li>
<li>Bloquean la vasodilatación e hipotensión mediadas por H2 y el efecto crono e inotropo positivo de la histamina (tu anotación: «en clínica no se van a ver»).</li>
<li><b>Cimetidina</b>: <b>inhibe</b> el citocromo P450 (interacciones), ↑ prolactina (ginecomastia, galactorrea), efecto antiandrogénico y afectación de la función tubular renal. La ranitidina no tiene estos efectos.</li></ul>`],
["Cromoglicato sódico",`<ul>
<li><b>Estabiliza los mastocitos</b>: impide su desgranulación y la liberación de histamina y otros mediadores (se fija a los canales de Ca²⁺ e impide su entrada, e inhibe la fosfodiesterasa → ↑ AMPc). No es antihistamínico ni broncodilatador.</li>
<li>Valor <b>profiláctico, no terapéutico</b>: se inhala antes de la exposición (asma alérgica, EPOC o asma equina). No sirve en plena crisis.</li>
<li>A dosis altas: broncoconstricción, irritación, reacciones alérgicas, sequedad de garganta y tos.</li></ul>`],
["Serotonina (5-HT)",`<ul>
<li>Se forma a partir del triptófano. Se almacena sobre todo en las <b>células enterocromafines</b> del aparato digestivo (> 90 %); también en plaquetas, mastocitos (en roedores, con histamina y heparina) y núcleos del rafe (neurotransmisor). En la glándula pineal, acetilasa + O-metil-transferasa → <b>melatonina</b>.</li>
<li>Se biotransforma en el <b>hígado (MAO), principalmente, y en el endotelio vascular</b> (→ 5-HIAA, que se sulfoconjuga); se excreta por vía renal.</li>
<li>Efectos: <b>vasoconstricción</b> arteriolar y venosa en cerebro, vísceras y algunos territorios, y <b>vasodilatación arteriolar</b> en músculo esquelético, corazón (no dañado) y piel; presión arterial con respuesta trifásica (hipotensión por el reflejo de Bezold-Jarisch → hipertensión → hipotensión); corazón: <b>crono e inotropo positivo</b> (IMMPPP en tus apuntes); <b>actividad agregante plaquetaria</b> reversible en el hombre (tus apuntes, con «!»; algunas claves antiguas marcaban «antiagregante», pero el antiagregante es la ketanserina); contrae bronquios, vejiga, iris y membrana nictitante; en el tubo digestivo, contracción y relajación; estimula la liberación de <b>ACTH, LTH y TSH</b> (e inhibe la de FSH y LH); media el dolor.</li>
<li>SNC: ↑ temperatura, sueño, ↓ agresividad, ↑ actividad motora, actividad extrapiramidal; a dosis bajas estimulante y a dosis altas depresora.</li>
<li><b>Agonistas 5-HT1A</b> (buspirona): ansiedad. <b>5-HT1B/1D</b> (sumatriptán): migraña. Trastornos del comportamiento (ansiedad, conducta compulsiva, automutilación, granuloma acral por lamido, estereotipias, agresividad): buspirona, fluoxetina; los inhibidores de la recaptación (todos los antidepresivos) son serotoninérgicos indirectos. <b>Agonistas 5-HT4</b> (metoclopramida, zacoprida, cisaprida): procinéticos (trastornos severos de la motilidad, atonía ruminal, reflujo); en tus apuntes la metoclopramida y la zacoprida también figuran para el control del vómito.</li>
<li><b>Antagonistas 5-HT3</b> (ondansetrón, granisetrón, tropisetrón; «setrones»): antieméticos potentes en el vómito por la ZQD, por citotóxicos (quimioterapia) y postoperatorio; <b>no son eficaces en la cinetosis</b>; actúan a nivel central y periférico; no bloquean D2 (<b>no son procinéticos</b> ni dan efectos extrapiramidales); también ansiolíticos. Vía oral o IV. Metabolismo hepático; se excretan por orina y leche. RRAA: <b>hipotensión y bradicardia</b>, broncoespasmo, convulsiones, estreñimiento, disfunción hepática, visión borrosa, hipopotasemia.</li>
<li><b>Antagonistas 5-HT2</b>: <b>ciproheptadina</b> (también antiH1 y anticolinérgica: orexígena, trastornos respiratorios del gato, alergias, sedante y antiemético), <b>ketanserina</b> (bloquea 5-HT2, H1 y α1: vasodilatación e hipotensión, <b>antiagregante</b>, inhibe la broncoconstricción; hipertensión) y metisergida (sus usos y RRAA están tachados en tus apuntes).</li>
<li>Con ellos se agrupan los <b>alcaloides del cornezuelo del centeno</b>, que <b>estimulan la fibra lisa</b> (unos más la vascular, otros más la uterina): ergotamina (migraña), <b>ergometrina</b> (hemorragias posparto), bromocriptina y <b>cabergolina</b> (inducción del estro en perra y gata; la cabergolina es mejor inductor). Contraindicados en enfermedad vascular periférica (infosura). Fuera de tus apuntes: la cabergolina inhibe la prolactina (pseudogestación, cortar la lactancia) y <b>no</b> se usa en hemorragias posparto.</li></ul>`],
["Antieméticos y eméticos",`<ul>
<li><b>Metoclopramida</b> (doble acción, «lo que nos interesa»): a <b>dosis bajas</b>, agonista 5-HT4 (<b>procinética</b>) y antagonista D2 en la ZQD (<b>antiemética</b>); a <b>dosis altas</b>, bloquea los 5-HT3 centrales. Antiemética central y periférica; no afecta a las secreciones. Usos: vómitos (gastritis, úlcera, uremia, radiación, citotóxicos…) y atonía ruminal, gástrica o intestinal y reflujo. RRAA (sobre todo en jóvenes): extrapiramidales por bloqueo D2 (excitación en perro y gato; frecuentes en el caballo), galactorrea, <b>diarrea</b>. Contraindicada en obstrucción o perforación digestiva. (Su farmacocinética está tachada en tus apuntes.)</li>
<li><b>Maropitant</b>: antagonista NK1, de amplio espectro (incluida la cinetosis).</li>
<li><b>Fenotiazinas</b> (clorpromazina, acepromazina): antagonistas D2, H1 y muscarínicos.</li>
<li>AntiH1 de 1ª generación (dimenhidrinato): cinetosis.</li>
<li><b>Eméticos</b>: <b>apomorfina</b> (agonista dopaminérgico en la zona gatillo; perro), xilacina o dexmedetomidina (gato).</li></ul>`],
["Péptidos: angiotensina, péptidos natriuréticos y bradicinina",`<ul>
<li><b>Sistema renina-angiotensina</b>: renina (aparato yuxtaglomerular) → angiotensina I → (ECA, sobre todo en el pulmón) → <b>angiotensina II</b>.</li>
<li><b>AT1</b>: vasoconstricción muy potente (respuesta hipertensora marcada), ↑ tono simpático central, liberación de aldosterona (es su <b>principal estímulo</b>), adrenalina, ADH y ACTH, sed, retención de Na⁺ y agua (antidiuresis), en el corazón, inotropismo positivo <b>débil</b> (lo más probable es una bradicardia refleja a la hipertensión), hipertrofia, fibrosis, superóxidos y agregación plaquetaria.</li>
<li><b>AT2</b>: lo contrario: vasodilatación (NO), antiproliferativo, apoptosis.</li>
<li><b>Péptidos natriuréticos</b>: ANP (aurículas, al distenderse), BNP (ventrículos). Natriuresis y diuresis <b>sin pérdida de K⁺</b> (al contrario que los diuréticos convencionales), ↑ filtración glomerular, vasodilatación arterial y venosa, ↑ tono vagal y ↓ simpático, antiproliferativos y antifibróticos. Inhiben la renina, la aldosterona, la endotelina-1 y la <b>vasopresina</b>. El NT-proBNP indica la gravedad de la IC.</li>
<li><b>Bradicinina</b> (B2): vasodilatación vía NO y PGI2 (la <b>atropina no la bloquea</b>; en tus apuntes esa frase se dice de la sustancia P), ↑ permeabilidad, broncoconstricción, dolor intenso (en parte por las prostaglandinas que libera, por eso la aspirina lo reduce). La degrada la ECA → tos por IECA.</li></ul>`],
["Eicosanoides",`<ul>
<li>Derivados del <b>ácido araquidónico</b> (20 C): estructura lipídica. <b>No se almacenan</b>, se sintetizan a demanda en casi todas las células <b>excepto los eritrocitos</b>. Son muy potentes y de acción local.</li>
<li><b>COX-1</b>: constitutiva (homeostasis: mucosa gástrica, riñón, plaquetas). <b>COX-2</b>: inducible (inflamación). <b>COX-3</b>: se propuso como isoforma central (fiebre y dolor), pero según tus apuntes (actualización 2025/2026) en humanos está descartada: es una proteína truncada sin actividad.</li>
<li><b>5-LOX</b> → leucotrienos. Todos son <b>quimiotácticos potentes de neutrófilos y eosinófilos</b> (sobre todo el LTB4, mediador de la inflamación; en tus apuntes de eicosanoides, de macrófagos y neutrófilos); de linfocitos, no. Las lipoxinas (12-LOX) regulan la adhesión endotelial y la quimiotaxis de eosinófilos. LTC4 y LTD4 son 1.000 veces más broncoconstrictores que la histamina. <b>LTC4, LTD4 y LTE4</b> (con cisteína) = sustancia de reacción lenta de la anafilaxia: broncoconstricción (asma), ↑ permeabilidad vascular y <b>vasodilatación en la mayoría de los tejidos</b> (el LTC4 contrae, en cambio, las coronarias).</li>
<li><b>TXA2</b> (plaquetas): vasoconstrictor y proagregante, broncoconstrictor. La clave de clase da también por buena que «su síntesis se inhibe por déficit de vitamina E». <b>PGI2</b> (endotelio): vasodilatadora y antiagregante.</li>
<li><b>PGE2</b>: vasodilatadora e hipotensora (taquicardia refleja), ↑ permeabilidad, ↑ flujo renal, citoprotectora gástrica (↓ ácido), acelera el tránsito.</li>
<li><b>PGF2α</b>: contrae bronquios, útero (oxitócica) e intestino (↑ peristaltismo); <b>luteolítica</b>.</li>
<li>Usos veterinarios: PGF2α (dinoprost, <b>cloprostenol</b>) para cuerpo lúteo persistente, sincronización del celo, inducción del parto y del aborto, piómetra y, en el verraco, <b>aumentar</b> la libido y la producción seminal; latanoprost para el glaucoma (↓ PIO); misoprostol para prevenir úlceras por AINEs. <b>No</b> se usan en la CID ni como procinéticos.</li></ul>`],
["Óxido nítrico (NO)",`<ul>
<li>Se forma a partir de la L-arginina por la <b>NO sintasa</b> (endotelial, neuronal e inducible).</li>
<li>Activa la guanilato ciclasa → ↑ GMPc → relajación del músculo liso (vasodilatación), inhibición de la agregación plaquetaria.</li>
<li>Fármacos relacionados: nitratos y nitroprusiato (donadores de NO), sildenafilo (inhibe la PDE5 → ↑ GMPc).</li></ul>`]
]},
3: {
intro: "AINEs: inhiben la ciclooxigenasa (COX) y la síntesis de prostaglandinas. Antiartríticos y modificadores de la artritis reumatoide.",
sections: [
["Mecanismo y acciones",`<ul>
<li>Inhibición de la <b>COX-2</b> → efecto <b>antiinflamatorio</b>; de la <b>COX-1</b> → la mayoría de los <b>efectos adversos</b>. Los exámenes antiguos atribuyen la analgesia y la antipiresis a la <b>COX-3</b> central; según tus apuntes, la profesora ya lo da por descartado: el paracetamol actúa por su metabolito AM404 (receptores CB₁), las vías serotoninérgicas y la inhibición de la peroxidasa de la COX donde hay pocos peróxidos.</li>
<li><b>Antiinflamatoria</b>: requiere concentraciones <b>superiores</b> a las que inhiben la COX. En los derivados del ácido propiónico es estereoespecífica (enantiómero S). Tepoxalina (y diflunisal) inhiben también la 5-LOX. Los fenamatos además antagonizan las PGs ya formadas.</li>
<li><b>Analgésica</b>: leve-moderada (son más «antiálgicos» que analgésicos), útil en el dolor inflamatorio; <b>no</b> en el dolor por estímulo mecánico o eléctrico. Gran variabilidad individual. <b>No dan tolerancia</b>.</li>
<li><b>Antipirética</b>: inhiben la PGE2 hipotalámica; el calor se pierde por vasodilatación periférica y sudoración. <b>No</b> sirven en la hipertermia por golpe de calor o ejercicio, ni en la producida por PGE2 exógena. No causan hipotermia. El diflunisal casi no es antipirético.</li>
<li><b>No asociar dos AINEs</b>: no suman eficacia y sí toxicidad.</li>
<li>Paracetamol y metamizol: analgésicos y antipiréticos, <b>antiinflamatorios muy débiles</b>. El paracetamol es tóxico en el gato. <b>Ketorolaco</b>: predomina la acción analgésica. <b>Oxicams</b>: potentes antiinflamatorios. <b>Flunixin</b>: dolor visceral (cólico) y musculoesquelético, endotoxemia.</li></ul>`],
["Farmacocinética",`<ul>
<li>Ácidos débiles, <b>alta unión a proteínas</b> → Vd <b>bajo</b>. Se acumulan en el foco inflamatorio (pH ácido, ↑ permeabilidad).</li>
<li>Se biotransforman en el hígado; algunos tienen <b>metabolitos activos</b> (fenilbutazona → oxifenbutazona; nabumetona es un profármaco). Su excreción renal depende del <b>pH urinario</b> y de la secreción tubular.</li>
<li>Gran <b>variación de la vida media entre especies e individuos</b> (aspirina: gato ≈ 38 h, perro ≈ 8 h, caballo ≈ 1 h). Pueden dejar residuos en la leche.</li></ul>`],
["Reacciones adversas",`<ul>
<li><b>Gastrointestinales</b> (COX-1): úlceras y retraso de la reepitelización. Prevención con misoprostol, IBP o antiH2. Nimesulida y nabumetona son poco ulcerógenas.</li>
<li><b>Renales</b>: ↓ flujo y FG, retención de Na⁺ (HTA), <b>↓ renina y aldosterona</b> → hiperpotasemia.</li>
<li>Hematológicas: ↓ agregación plaquetaria (irreversible con la aspirina) → diátesis hemorrágica.</li>
<li><b>Salicilismo</b> (aspirina): acúfenos, fiebre, <b>acidosis</b> mixta (no alcalosis), hiperuricemia a dosis bajas.</li></ul>`],
["Antiartríticos (condroprotectores)",`<ul>
<li><b>Glucosaminoglicanos</b> (GAGs polisulfatados, condroitín, glucosamina): de acción lenta. Útiles en artrosis, incluida la debida a sobrepeso o traumatismo.</li>
<li><b>Ácido hialurónico</b>: vía <b>intraarticular</b> (o IV). Mejora el líquido sinovial, reduce la infiltración de PMN, los radicales libres y la pérdida de GAGs.</li>
<li>Glucocorticoides intraarticulares: ésteres o suspensiones de absorción lenta.</li></ul>`],
["Antirreumatoides (FAME)",`<table><tr><th>Tipo</th><th>Ejemplos</th></tr>
<tr><td>Sintéticos convencionales</td><td>metotrexato, <b>leflunomida</b>, sulfasalazina</td></tr>
<tr><td>Sintéticos <b>dirigidos</b></td><td>inhibidores JAK: <b>tofacitinib</b>, baricitinib (oclacitinib en veterinaria)</td></tr>
<tr><td>Biológicos anti-TNF</td><td><b>etanercept</b> (receptor soluble), <b>infliximab</b> y adalimumab (anticuerpos)</td></tr>
<tr><td>Otros biológicos</td><td>rituximab (anti-CD20, elimina linfocitos B), abatacept (CTLA4-Ig, coestimulación T), tocilizumab (anti-IL-6), anakinra (anti-IL-1)</td></tr></table>
<ul><li><b>Metotrexato</b>: inhibe la <b>dihidrofolato reductasa</b> (la dihidropteroato sintetasa es de las sulfamidas). Inmunosupresor y antiinflamatorio; reduce los anticuerpos contra los biológicos. Toxicidad medular, hepática y <b>pulmonar</b>.</li>
<li><b>Leflunomida</b>: inhibe la síntesis de pirimidinas en los linfocitos; retrasa el daño articular.</li>
<li><b>Anticuerpos monoclonales</b> (-mab): proteínas, vía <b>parenteral</b>. En veterinaria, bedinvetmab (perro) y frunevetmab (gato): anti-NGF para el dolor de la artrosis.</li></ul>`],
["Pregunta corta de examen: reacciones adversas de los AINEs",`<p class="muted">Cayó en el parcial de julio de 2021 («Enumera las reacciones adversas de los AINEs»). Respuesta modelo:</p><ul>
<li><b>Gastrointestinales</b> (las más frecuentes, por inhibir la COX-1): erosiones, úlceras y hemorragia digestiva, retraso de la reepitelización. Prevención con IBP (omeprazol), misoprostol o antiH2.</li>
<li><b>Renales</b>: ↓ flujo renal y filtración glomerular (grave con hipovolemia, ICC o nefropatía), retención de Na⁺ y agua (hipertensión, edemas) e hiperpotasemia por ↓ renina y aldosterona; nefropatía aguda (necrosis papilar) y nefropatía intersticial crónica. Reducen el efecto de diuréticos e IECA.</li>
<li><b>Hematológicas</b>: ↓ agregación plaquetaria y diátesis hemorrágica (irreversible con la aspirina); discrasias sanguíneas (agranulocitosis por metamizol, aplasia medular por fenilbutazona).</li>
<li><b>Hepáticas</b>: hepatotoxicidad, sobre todo el paracetamol (NAPQI; letal en el gato).</li>
<li><b>Salicilismo</b> (sobredosis de aspirina): acúfenos, hipertermia, alcalosis respiratoria y después acidosis mixta.</li>
<li><b>Otras</b>: hipersensibilidad (broncoespasmo, urticaria), hiperuricemia con dosis bajas de salicilatos, necrosis por fenilbutazona IM o SC y accidentes por inyección intracarotídea en el caballo, interacciones por desplazamiento de la albúmina (warfarina).</li>
<li>No se deben asociar dos AINEs ni un AINE con un glucocorticoide (úlceras y perforación).</li></ul>`]
]},
4: {
intro: "Glucocorticoides (GC): antiinflamatorios e inmunosupresores potentes. Mineralocorticoides y fármacos del eje adrenal.",
sections: [
["Receptor y mecanismo",`<ul>
<li>Receptor <b>citoplasmático</b> unido a HSP90. Dominios: <b>C-terminal</b> = unión al esteroide, dimerización, traslocación nuclear y transcripción; <b>central</b> = unión al ADN (dedos de cinc que reconocen los GRE); <b>N-terminal</b> = dominio regulador (modula la interacción con la cromatina).</li>
<li><b>Transactivación</b>: el dímero se une a los <b>GRE</b> → síntesis de proteínas antiinflamatorias (lipocortina/anexina-1).</li>
<li><b>Transrepresión</b>: el receptor <b>inhibe</b> AP-1 y NF-κB → bloquea genes proinflamatorios (citocinas, COX-2).</li>
<li>Efectos rápidos <b>no genómicos</b> (excitabilidad neural, conducta): receptores de membrana acoplados a proteínas G.</li></ul>`],
["Receptor mineralocorticoide y 11β-HSD",`<ul>
<li>Cortisol y aldosterona tienen <b>igual afinidad</b> por el receptor MC (y el cortisol circula a concentraciones 100-1000 veces mayores). En el <b>cerebro</b>, el receptor MC es más afín por los GC endógenos (se une más al cortisol), al contrario que en los tejidos periféricos.</li>
<li><b>11β-HSD2</b> (riñón, colon, glándulas salivares) inactiva el cortisol a cortisona → protege al receptor MC. La aldosterona resiste por su estructura hemiacetal.</li>
<li><b>11β-HSD1</b> (hígado, tejido adiposo, cerebro, pulmón): reactiva la cortisona a cortisol.</li></ul>`],
["Efectos",`<ul>
<li>Metabolismo: ↑ <b>gluconeogénesis</b> y depósito de glucógeno (no glucogenólisis), ↓ utilización periférica de glucosa → hiperglucemia; catabolismo proteico (atrofia muscular); lipólisis sobre todo <b>permisiva</b> (glucagón, STH y catecolaminas); hiperlipidemia y redistribución de la grasa (cuello, hombros y mejillas, no en las extremidades).</li>
<li>Agua y electrolitos: retención de Na⁺ y agua → <b>↑ volemia</b> e HTA; ↑ excreción de K⁺ y de <b>ácido úrico</b>; <b>↑ filtración glomerular</b> (por ↑ flujo renal); según el compuesto, ↑ reabsorción de agua por reabsorción tubular de Na⁺ (con pérdida de K⁺); poliuria (fuera de tus apuntes: inhiben la ADH).</li>
<li>Calcio: ↓ absorción intestinal (inhiben la vitamina D) y, a dosis elevadas, ↑ excreción renal → <b>↑ actividad paratiroidea</b> (hiperparatiroidismo secundario).</li>
<li>Sangre: <b>neutrofilia</b>, ↑ eritrocitos y plaquetas; linfopenia, eosinopenia, monocitopenia («leucograma de estrés»). Acción <b>linfolítica</b> (linfomas, leucemias).</li>
<li>Cardiovascular: <b>hipertensores</b>: efecto inotropo positivo directo e inotropo y cronotropo positivo indirecto (liberación de catecolaminas); ↑ reactividad a las catecolaminas (vasoconstricción); <b>inhiben la NO sintetasa</b> (no vasodilatan); ↑ volemia; ↑ tono capilar.</li>
<li>Antiinflamatorios: ↓ permeabilidad, edema y depósito de fibrina; estabilizan los lisosomas; inhiben el complemento, los eicosanoides y los macrófagos; retrasan la cicatrización.</li>
<li>Hueso: inhiben los osteoblastos y estimulan los osteoclastos → osteoporosis.</li>
<li>Otros: euforia y ↑ actividad (atraviesan la BHE); inducen la <b>PNMT</b> (síntesis de adrenalina); ↓ temporal de la producción de leche en vacas; antipiréticos, pero no se usan para eso (demasiados efectos adversos).</li>
<li>Endocrino: <b>inhiben la liberación de STH</b> (frenan el crecimiento en animales jóvenes) <b>y de TSH</b>; son <b>orexígenos</b> (aumentan el apetito).</li></ul>`],
["Farmacocinética",`<ul>
<li>Absorción oral buena y rápida (son liposolubles). Cortisol y corticosterona: ≥ 75 % a transcortina, 10 % a albúmina y 10-15 % libre; la prednisolona compite con el cortisol por la transcortina; otros GC sintéticos se unen menos o nada (distribución más rápida). Atraviesan la BHE y la placenta.</li>
<li>Biotransformación en la mayoría de los tejidos, con el hígado como órgano principal (<b>no exclusiva</b>).</li>
<li>Eliminación fundamentalmente <b>renal</b> (75 %) y por heces (25 %); también en la leche.</li>
<li>Intraarticular: la absorción se reduce mucho; sales poco solubles o suspensiones (acción prolongada). Tópica: altas concentraciones locales con menos riesgo sistémico.</li></ul>`],
["Reacciones adversas e indicaciones",`<ul>
<li>Cushing iatrogénico y supresión del eje (retirada gradual), inmunosupresión e infecciones, diabetes.</li>
<li>Poliuria y polidipsia, polifagia, pancreatitis (↑ viscosidad de la secreción pancreática; ++ en el perro), úlceras gastrointestinales, hepatomegalia a dosis altas (glucógeno en los hepatocitos, ↑ transaminasas; en cánidos, reversible al suspender).</li>
<li>Atrofia muscular, piel fina, alopecia, comedones, retraso de la cicatrización, cataratas subcapsulares posteriores, ↑ presión intraocular (glaucoma) y úlcera corneal.</li>
<li>No causan diátesis hemorrágica (más bien hipercoagulabilidad).</li>
<li>Indicados en procesos inflamatorios agudos y crónicos, alergias, enfermedades inmunomediadas, algunas neoplasias. <b>Contraindicaciones o uso con precaución</b>: última fase de la gestación, úlcera corneal (en el tratamiento inicial), diabetes mellitus, hipertensión, insuficiencia renal, cardiopatías, hepatopatías y miopatías. No usar en infecciones bacterianas, víricas o fúngicas no tratadas específicamente.</li></ul>`],
["Principios de la terapia con GC («GRABAR A FUEGO») e interacciones",`<ul>
<li>Tratamientos crónicos: individualizados y con la <b>dosis mínima efectiva</b>, que hay que renovar (inducción enzimática).</li>
<li>La terapia prolongada produce atrofia adrenal y supresión de la secreción endógena: la interrupción se hace <b>bajando la dosis de forma progresiva (2 o más semanas)</b>. La función adrenal tarda 2-18 meses en recuperarse.</li>
<li>Mejoran al animal porque desaparecen los síntomas, pero <b>no erradican la causa</b>.</li>
<li>No usarlos en infecciones bacterianas, víricas o fúngicas no tratadas específicamente (favorecen su diseminación).</li>
<li>Siempre que se pueda, <b>vía local</b> (tópica, inhalatoria u oftálmica).</li>
<li>Pueden prevenir retracciones de heridas al retardar la cicatrización. En el ojo, contraindicados en el tratamiento inicial de las úlceras corneales.</li>
<li>Interacciones: no en vacunaciones; son inductores enzimáticos (aceleran el metabolismo de los AINEs); ↑ glucemia con tiacidas; antagonismo con la insulina y los hipoglucemiantes orales.</li>
<li>Disponibles en España: en producción, dexametasona, prednisolona y triamcinolona; en compañía, además, betametasona, hidrocortisona, metilprednisolona y mometasona.</li></ul>`],
["Hipoadrenocorticismo (Addison)",`<ul>
<li>No se cura: tratamiento de por vida y <b>monitorizado</b> (clínica y electrolitos).</li>
<li>Addison primario: faltan GC y MC, pero lo <b>más importante es tratar el déficit de MC</b> (puede ser letal): <b>MC de por vida</b> (fludrocortisona oral o DOCA IM) y, por lo general, también GC (prednisolona o hidrocortisona). Sal solo al principio. En el secundario solo faltan GC (prednisona o prednisolona; más dosis en periodos de estrés).</li>
<li>Crisis addisoniana: infusión IV de GC, glucosa y NaCl 0,9 % (y tratar la causa); cuando mejora, MC (DOCA IM o fludrocortisona oral).</li>
<li><b>ACTH</b> (tetracosactida o tetracosáctido): péptido, vía <b>parenteral</b> (sobre todo IV; también IM y SC; depot 12-24 h); diagnóstico diferencial de la insuficiencia adrenal 1ª y 2ª y de la hiperplasia frente a la neoplasia adrenal; cetosis bovina (uso poco frecuente). Uso prolongado: suplemento diario de K⁺.</li></ul>`],
["Mineralocorticoides",`<ul>
<li>Efectos <b>genómicos</b>: precoces (1-3 h: ↑ <b>número</b> de canales de Na⁺ sensibles a amilorida en la membrana apical) y tardíos (3-6 h: ↑ número de <b>Na⁺/K⁺-ATPasa</b> basolateral).</li>
<li>Efectos <b>no genómicos</b>: rápidos, por receptores de membrana.</li>
<li>Exceso: retención de Na⁺ y agua, <b>hipopotasemia</b>, alcalosis, debilidad o parálisis muscular, arritmias.</li>
<li>La aldosterona no se usa clínicamente: DOCA (desoxicorticosterona) por vía parenteral (IM o SC; por vía oral no se absorbe) y fludrocortisona oral. El DOCP que se usa en clínica es un éster depot de la desoxicorticosterona; tus apuntes solo citan la DOCA.</li></ul>`],
["Hiperadrenocorticismo (Cushing) en el perro",`<ul>
<li><b>Trilostano</b>: inhibe la 3β-hidroxiesteroide deshidrogenasa → ↓ cortisol y aldosterona (riesgo de hiperpotasemia con IECA o ahorradores de K⁺: contraindicación); tratamiento de elección.</li>
<li>Mitotano: adrenolítico; uso limitado por su toxicidad digestiva y neurológica.</li>
<li><b>Selegilina</b> (IMAO-B; en tus apuntes, entre los agonistas dopaminérgicos con la bromocriptina): ↑ dopamina → frena la ACTH hipofisaria (Cushing de origen hipofisario).</li>
<li>Metirapona o metopirona (inhibe la 11β-hidroxilasa; también como prueba de funcionalidad hipofisaria), ketoconazol y aminoglutetimida (puede dar hipotiroidismo): menos usados.</li></ul>`],
["Pregunta corta de examen: reacciones adversas de los glucocorticoides",`<p class="muted">Cayó en el parcial de 2019/2020. Respuesta modelo:</p><ul>
<li><b>Supresión del eje hipotálamo-hipófisis-adrenal</b>: atrofia adrenal y crisis addisoniana si se retiran de golpe (hay que retirarlos poco a poco); Cushing iatrogénico en tratamientos largos.</li>
<li><b>Metabólicas</b>: hiperglucemia y diabetes, catabolismo proteico (atrofia y debilidad muscular), redistribución de la grasa e hiperlipidemia, retraso del crecimiento en animales jóvenes (↓ STH).</li>
<li><b>Agua y electrolitos</b>: retención de Na⁺ y agua (hipertensión, edemas), hipopotasemia, poliuria y polidipsia.</li>
<li><b>Inmunosupresión</b>: más infecciones y peor cicatrización.</li>
<li><b>Digestivas</b>: úlceras gastrointestinales (más si se asocian a AINEs), pancreatitis, polifagia; hepatomegalia con ↑ transaminasas (hepatopatía esteroidea del perro, reversible al suspender).</li>
<li><b>Hueso y piel</b>: osteoporosis, piel fina, alopecia, comedones, calcinosis cutánea.</li>
<li><b>Ojos</b>: cataratas subcapsulares posteriores, ↑ presión intraocular (glaucoma) y úlcera corneal.</li>
<li><b>SNC y conducta</b>: euforia, inquietud, cambios de comportamiento. En vacas, ↓ temporal de la leche; al final de la gestación pueden desencadenar el parto o el aborto.</li></ul>`]
]},
5: {
intro: "Fármacos inotrópicos, vasodilatadores y antiarrítmicos.",
sections: [
["Digitálicos (digoxina, digitoxina)",`<ul>
<li>Inhiben la Na⁺/K⁺-ATPasa → ↑ Ca²⁺ intracelular → <b>inotropo positivo</b>; batmotropo positivo. Efecto vagal: <b>cronotropo y dromotropo negativos</b> (↓ nodo SA, ↑ periodo refractario del nodo AV). A dosis altas ↑ automatismo (ectópicos). En el corazón insuficiente ↑ el gasto <b>sin ↑ el consumo de O₂</b>.</li>
<li>En el <b>perro</b>, vida media de la digoxina (≈20–55 h) mayor que la de la digitoxina (≈8–12 h). La digoxina se elimina por vía <b>renal</b> sin metabolizar. Se acumulan en corazón, riñón, hígado y músculo, poco en grasa.</li>
<li>Indicados en la ICC con <b>fibrilación auricular</b> o flúter y en taquicardias supraventriculares. Eficaces en la ICC con disfunción sistólica (por ejemplo, secundaria a cardiopatía hipertensiva o valvular); poco eficaces si el problema es de llenado: estenosis mitral aislada, miocardiopatía restrictiva, pericarditis constrictiva. <b>Contraindicados</b> en estenosis aórtica/subaórtica, CMH, arritmias ventriculares y bloqueo AV. No útiles en IC por hipertiroidismo; precaución en miocarditis.</li>
<li>Toxicidad aumentada por <b>hipopotasemia</b>, hipercalcemia, hipomagnesemia, insuficiencia renal e hipotiroidismo; el verapamilo ↑ la digoxinemia. Intoxicación: vómitos, anorexia, diarrea, arritmias y bloqueo AV, visión borrosa y discromatopsia, vasoconstricción mesentérica, ginecomastia.</li></ul>`],
["Simpaticomiméticos e inhibidores de PDE",`<ul>
<li><b>Dobutamina</b>: β1 (algo β2 y α1), <b>más inotrópica que cronotrópica y que vasodilatadora</b>. Infusión IV continua. A dosis altas, taquiarritmias. Facilita la conducción AV: en la FA, <b>digitalizar antes</b>.</li>
<li><b>Dopamina</b>: dosis bajas D1 (vasodilatación renal; se describe hipotensión y bradicardia por D2), medias β1 (ICC), altas α1 (vasoconstricción, HTA, taquiarritmias; shock). En la ICC se usan dosis <b>más bajas</b> que en el shock. Vida media muy corta. Desensibilización β1 a las ~72 h.</li>
<li><b>Amrinona y milrinona</b> (PDE3): inodilatadores con más efecto vasodilatador que inotrópico y escaso efecto cronotropo. Solo a <b>corto plazo</b> (IV). Milrinona: eliminación renal sin cambios. Efectos adversos: arritmias ventriculares, hipotensión y trombocitopenia.</li>
<li><b>Pimobendan</b>: sensibilizador del Ca²⁺ (inotropo) + su metabolito inhibe PDE III/V (vasodilatador mixto). Inotropo <b>sin ↑ consumo de O₂</b>, apenas arritmogénico a dosis terapéuticas, antiagregante. Para la ICC por endocardiosis mitral y la CMD. Lo atenúan los β-bloqueantes y los antagonistas del Ca²⁺. <b>Contraindicado</b> en CMH y estenosis aórtica.</li>
<li><b>Sildenafilo</b> (PDE5): hipertensión <b>pulmonar</b> en el perro (no fallo cardiaco agudo).</li></ul>`],
["Metilxantinas",`<ul>
<li>Teofilina y aminofilina: broncodilatadoras (inhiben fosfodiesterasas, bloquean la adenosina). De <b>2ª elección</b> en el asma, tras los corticoides y los β2-agonistas.</li>
<li>Estimulan el SNC y el miocardio. <b>Margen de seguridad estrecho</b>: nerviosismo, vómitos, taquiarritmias, convulsiones.</li></ul>`],
["IECA y sartanes",`<ul>
<li><b>IECA</b> (enalapril, benazepril): ↓ angiotensina II y aldosterona → vasodilatación <b>mixta</b> (vasos de capacidad y de resistencia: ↓ pre y poscarga) <b>sin taquicardia ni activación simpática refleja</b>, natriuresis y diuresis, antiproliferativos (evitan la hipertrofia y la remodelación), mejoran la disfunción endotelial, ↑ flujo renal sin cambiar la FG, ↑ tolerancia al ejercicio. Actúan sobre los lechos renal, cerebral y coronario.</li>
<li>Efectos adversos: <b>hiperpotasemia</b> (más con AINEs, espironolactona, diabetes o insuficiencia renal), hipotensión, azotemia, tos seca (bradicinina), fallo renal si hay hipovolemia u <b>oliguria</b>.</li>
<li>Usos: ICC (dilatada, hipertrófica y restrictiva), HTA, proteinuria, nefropatía diabética, insuficiencia renal progresiva, cardiopatía isquémica. Son los <b>vasodilatadores de elección en la insuficiencia renal</b> (nefroprotectores), salvo si hay oliguria o anuria.</li>
<li><b>Sartanes</b> (ARA-II: losartán, telmisartán): antagonistas puros del <b>AT1</b>, orales; antihipertensivos, antiproliferativos y antiapoptóticos; favorecen la excreción de Na⁺ y agua; sin tos (sustituyen al IECA). Telmisartán: proteinuria en el gato.</li></ul>`],
["Otros vasodilatadores",`<ul>
<li>Arteriodilatadores → ↓ <b>poscarga</b>; venodilatadores → ↓ <b>precarga</b>; mixtos → ambas.</li>
<li><b>Nitratos</b>: mixtos con predominio <b>venoso</b> (↓ precarga y presión venosa), <b>↓ demanda de O₂</b>, dilatan coronarias y <b>colaterales</b> (↑ flujo a zonas isquémicas), previenen el vasoespasmo, algo antiagregantes; efecto débil sobre la presión arterial. Muy liposolubles. La nitroglicerina es de acción corta (sublingual, transdérmica, IV; gran primer paso oral); mononitrato y dinitrato de isosorbida son orales y de acción más larga.</li>
<li><b>Hidralazina</b>: arteriodilatador directo; da taquicardia refleja y retención de líquidos → se asocia a <b>β-bloqueantes y diuréticos</b>. Vida media corta. Riesgo de hipotensión con IECA, anestésicos y otros hipotensores.</li>
<li><b>Minoxidil</b> (abre canales de K⁺): arteriodilatador potente y prolongado; reserva en la HTA grave refractaria; no en la ICC.</li>
<li><b>Prazosina</b> (α1): vasodilatador mixto. <b>Isoxsuprina</b>: laminitis en el caballo. <b>Nicergolina</b>: vasodilatador cerebral (deterioro cognitivo del perro mayor). <b>Aliskiren</b>: inhibidor directo de la renina.</li></ul>`],
["Antagonistas del calcio",`<table><tr><th>Dihidropiridinas</th><th>Cationes anfófilos</th></tr>
<tr><td>nifedipino, <b>amlodipino</b>, nimodipino, felodipino</td><td><b>verapamilo</b>, diltiazem</td></tr>
<tr><td><b>Vasoselectivos</b>; taquicardia refleja; no antiarrítmicos</td><td>No vasoselectivos: corazón + vasos; crono, dromo e inotropos negativos; antiarrítmicos (clase IV)</td></tr>
<tr><td>HTA (amlodipino en el gato); vasoespasmo tras hemorragia subaracnoidea (nimodipino)</td><td>Taquicardias <b>supraventriculares</b> agudas; CMH felina (diltiazem); HTA</td></tr></table>
<ul><li>Verapamilo y diltiazem: contraindicados en el <b>bloqueo AV</b>, la ICC grave y la intoxicación digitálica, y <b>no se asocian a β-bloqueantes</b>. Metabolismo hepático.</li></ul>`],
["Antiarrítmicos (Vaughan-Williams)",`<ul>
<li><b>Clase I</b> (bloqueo de Na⁺): ↓ velocidad de la fase 0 y de la conducción, prolongan el periodo refractario; bloqueo <b>dependiente del estado</b> del canal; se reservan para arritmias graves que comprometen el gasto cardiaco.</li>
<li><b>Clase II</b> (β-bloqueantes): ↓ automatismo y ectópicos, <b>enlentecen el nodo AV</b>, previenen la taquicardia refleja; inotropos negativos e hipotensores (pueden agravar una ICC). Los no selectivos (propranolol, carvedilol) dan broncoconstricción. Indicados también en la estenosis aórtica, la CMH y las arritmias digitálicas. Retirada gradual (rebote).</li>
<li><b>Clase III</b> (bloqueo de K⁺: amiodarona, sotalol, bretilio): <b>retrasan la repolarización</b> y prolongan el PA y el periodo refractario. Bretilio: fibrilación ventricular.</li>
<li><b>Clase IV</b> (antagonistas del Ca²⁺): verapamilo y diltiazem.</li></ul>`],
["Cardiomiopatía hipertrófica",`<ul><li>Disfunción diastólica. Se tratan con β-bloqueantes (atenolol), diltiazem o verapamilo, e IECA si hay ICC. <b>Evitar inotropos positivos</b> (dobutamina, digoxina, pimobendan) y vasodilatadores potentes.</li></ul>`],
["Pregunta corta de examen: verapamilo y diltiazem",`<p class="muted">Cayó en el parcial de octubre de 2022 («Bloqueantes de los canales lentos de calcio: actividad, indicaciones y contraindicaciones»). Respuesta modelo:</p><ul>
<li><b>Actividad</b>: bloquean los canales lentos de Ca²⁺ (tipo L) del corazón y de los vasos; son cationes anfófilos <b>no vasoselectivos</b> (antiarrítmicos de clase IV). En el corazón son cronotropos, dromotropos e inotropos negativos (deprimen el nodo SA y sobre todo el AV); en los vasos producen vasodilatación arterial sin taquicardia refleja.</li>
<li><b>Indicaciones</b>: taquicardias supraventriculares agudas y control de la frecuencia en la fibrilación auricular (de elección), cardiomiopatía hipertrófica felina (diltiazem) e hipertensión arterial.</li>
<li><b>Contraindicaciones</b>: bloqueo AV y enfermedad del seno, ICC grave o disfunción sistólica (por su efecto inotropo negativo), hipotensión e intoxicación digitálica (además, el verapamilo sube la digoxinemia).</li>
<li><b>Interacciones</b>: no asociar a β-bloqueantes (bradicardia grave, bloqueo AV, insuficiencia cardiaca). Metabolismo hepático: reducir la dosis en la insuficiencia hepática.</li></ul>`]
]}
};
