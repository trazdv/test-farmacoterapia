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
<li>Se forma por descarboxilación de la histidina. Se almacena en <b>mastocitos y basófilos</b> (también en células enterocromafines y neuronas).</li>
<li><b>H1</b> (baja afinidad): contracción de músculo liso (bronquios, intestino), vasodilatación de vasos pequeños y aumento de permeabilidad (habón), prurito y dolor, liberación de catecolaminas de la médula adrenal, enlentecimiento de la conducción AV.</li>
<li><b>H2</b> (baja afinidad): secreción gástrica de HCl, efecto <b>crono e inotropo positivo</b>, parte de la vasodilatación. En los <b>rumiantes</b>, relajación del retículo-rumen.</li>
<li><b>H3</b> (alta afinidad): presináptico, en el SNC (sueño y vigilia, cognición; frena la liberación de neurotransmisores). <b>H4</b> (alta afinidad): células inmunes (quimiotaxis).</li>
<li>Vasos grandes → constricción; vasos pequeños → dilatación → ↓RVP e hipotensión. En el <b>perro</b> contrae las venas hepáticas.</li>
<li>La broncoconstricción varía mucho entre especies (intensa en el cobaya, casi nula en la rata); los asmáticos son más sensibles, pero no los únicos.</li></ul>`],
["Antihistamínicos H1",`<table><tr><th></th><th>1ª generación</th><th>2ª generación</th></tr>
<tr><td>Ejemplos</td><td>difenhidramina, clorfeniramina, dimenhidrinato, hidroxicina, ciproheptadina</td><td>loratadina, cetirizina, fexofenadina, terfenadina, astemizol</td></tr>
<tr><td>Selectividad</td><td>poco selectivos (bloqueo colinérgico y α)</td><td>muy selectivos</td></tr>
<tr><td>SNC</td><td>atraviesan la BHE → sedación</td><td>poco paso → apenas sedan</td></tr>
<tr><td>Cinética</td><td>vida media corta</td><td>vida media larga (1 vez al día), metabolitos activos, <b>alta unión a proteínas</b>, metabolismo importante por <b>CYP3A4</b>, excreción sobre todo <b>renal</b></td></tr></table>
<ul><li>Usos: urticaria, prurito, rinitis y conjuntivitis alérgica, cinetosis y vértigo (1ª gen.), coadyuvantes de la adrenalina y los corticoides en la anafilaxia, retención de placenta. <b>Poco eficaces en el broncoespasmo</b>.</li>
<li>Otros efectos: <b>anestesia local</b> (difenhidramina, prometazina), efecto tipo quinidina a dosis altas (enlentecen la conducción), inhiben la liberación de catecolaminas mediada por H1.</li>
<li>Reacciones adversas: <b>depresión del SNC</b> (sedación, ataxia, fatiga), anticolinérgicas (sequedad de boca, retención urinaria, <b>taquicardia</b>), arritmias por QT largo (terfenadina, astemizol), raramente discrasias sanguíneas.</li>
<li>Interacciones: potencian anticolinérgicos y depresores del SNC (opiáceos); terfenadina o astemizol + macrólidos o imidazoles → arritmias.</li>
<li><b>Ciproheptadina</b>: antiH1 y antagonista 5-HT2; asma felino y estimulante del apetito.</li></ul>`],
["Antihistamínicos H2",`<ul>
<li>Cimetidina, ranitidina, famotidina, nizatidina. Inhiben la secreción gástrica: úlcera péptica, gastritis urémica, esofagitis por reflujo.</li>
<li>Buena absorción oral <b>con efecto de primer paso</b>. Se biotransforman menos que los antiH1 y ~50 % se elimina activo por el riñón. Nizatidina: casi sin biotransformación → útil en insuficiencia hepática. Sin efectos centrales.</li>
<li>Bloquean el efecto crono e inotropo positivo de la histamina y la vasodilatación mediada por H2.</li>
<li><b>Cimetidina</b>: <b>inhibe</b> el citocromo P450 (interacciones), ↑ prolactina (ginecomastia, galactorrea) y efecto antiandrogénico. La ranitidina apenas tiene estos efectos.</li></ul>`],
["Cromoglicato sódico",`<ul>
<li><b>Estabiliza los mastocitos</b>: impide su desgranulación y la liberación de histamina y otros mediadores. No es antihistamínico ni broncodilatador.</li>
<li>Valor <b>profiláctico, no terapéutico</b>: se inhala antes de la exposición (asma alérgica, EPOC o asma equina). No sirve en plena crisis.</li>
<li>Reduce la reactividad bronquial y es muy seguro (amplio margen terapéutico).</li></ul>`],
["Serotonina (5-HT)",`<ul>
<li>Se forma a partir del triptófano. ~90 % en <b>células enterocromafines</b>; también en plaquetas y neuronas. En la glándula pineal es precursora de la <b>melatonina</b>.</li>
<li>La degrada la MAO (→ 5-HIAA) en hígado, pulmón y otros tejidos; se excreta por vía renal.</li>
<li>Efectos: contrae vasos grandes y venas (cerebro, vísceras), pero <b>dilata las arteriolas</b> del músculo esquelético y del corazón; crono e inotropo positivo directo (posible bradicardia refleja por Bezold-Jarisch); <b>proagregante</b>; contrae bronquios, vejiga, útero e intestino (↑ motilidad); estimula las terminaciones del dolor; estimula la liberación de ACTH.</li>
<li>SNC: control del sueño, reduce la agresividad; estimulante a concentraciones bajas y depresora a altas.</li>
<li><b>Agonistas 5-HT1A</b> (buspirona): ansiedad. <b>5-HT1B/1D</b> (sumatriptán): migraña. <b>ISRS</b> (fluoxetina, clomipramina): conductas compulsivas y automutilación. <b>Agonistas 5-HT4</b> (cisaprida, mosaprida): procinéticos (atonía ruminal, reflujo, megacolon).</li>
<li><b>Antagonistas 5-HT3</b> (ondansetrón, granisetrón; «setrones»): antieméticos muy eficaces en quimioterapia, poco en la cinetosis; actúan a nivel central y periférico; <b>no son procinéticos</b>. Pueden darse por vía IV. Metabolismo hepático. Raramente hipotensión, bradicardia o broncoespasmo.</li>
<li><b>Antagonistas 5-HT2</b> (ketanserina, ciproheptadina): bloquean la contracción vascular y uterina.</li>
<li><b>Cabergolina</b>: agonista dopaminérgico (ergótico) que inhibe la prolactina (pseudogestación, cortar la lactancia); <b>no</b> se usa en hemorragias posparto (oxitocina, ergometrina).</li></ul>`],
["Antieméticos y eméticos",`<ul>
<li><b>Metoclopramida</b>: antagonista D2 (y 5-HT3 a dosis altas) y agonista 5-HT4 → procinética (5-HT4 + D2) y antiemética central y periférica. Se usa en infusión IV. Efectos adversos: extrapiramidales (excitación, ataxia, temblores), galactorrea, somnolencia, <b>diarrea</b>.</li>
<li><b>Maropitant</b>: antagonista NK1, de amplio espectro (incluida la cinetosis).</li>
<li><b>Fenotiazinas</b> (clorpromazina, acepromazina): antagonistas D2, H1 y muscarínicos.</li>
<li>AntiH1 de 1ª generación (dimenhidrinato): cinetosis.</li>
<li><b>Eméticos</b>: <b>apomorfina</b> (agonista dopaminérgico en la zona gatillo; perro), xilacina o dexmedetomidina (gato).</li></ul>`],
["Péptidos: angiotensina, péptidos natriuréticos y bradicinina",`<ul>
<li><b>Sistema renina-angiotensina</b>: renina (aparato yuxtaglomerular) → angiotensina I → (ECA, sobre todo en el pulmón) → <b>angiotensina II</b>.</li>
<li><b>AT1</b>: vasoconstricción muy potente (respuesta hipertensora marcada), ↑ tono simpático central, liberación de aldosterona (es su <b>principal estímulo</b>), adrenalina, ADH y ACTH, sed, retención de Na⁺ y agua (antidiuresis), efecto crono e inotropo positivo (moderado), hipertrofia, fibrosis, superóxidos y agregación plaquetaria.</li>
<li><b>AT2</b>: lo contrario: vasodilatación (NO), antiproliferativo, apoptosis.</li>
<li><b>Péptidos natriuréticos</b>: ANP (aurículas, al distenderse), BNP (ventrículos). Natriuresis y diuresis <b>sin apenas pérdida de K⁺</b>, ↑ filtración glomerular, vasodilatación arterial y venosa, ↑ tono vagal y ↓ simpático, antiproliferativos y antifibróticos. Inhiben la renina, la aldosterona, la endotelina-1 y la <b>vasopresina</b>. El NT-proBNP indica la gravedad de la IC.</li>
<li><b>Bradicinina</b> (B2): vasodilatación vía NO y PGI2 (la <b>atropina no la bloquea</b>), ↑ permeabilidad, broncoconstricción, dolor intenso. La degrada la ECA → tos por IECA.</li></ul>`],
["Eicosanoides",`<ul>
<li>Derivados del <b>ácido araquidónico</b> (20 C): estructura lipídica. <b>No se almacenan</b>, se sintetizan a demanda en casi todas las células <b>excepto los eritrocitos</b>. Son muy potentes y de acción local.</li>
<li><b>COX-1</b>: constitutiva (homeostasis: mucosa gástrica, riñón, plaquetas). <b>COX-2</b>: inducible (inflamación). <b>COX-3</b>: central (fiebre y dolor).</li>
<li><b>5-LOX</b> → leucotrienos. LTB4: quimiotaxis (neutrófilos sobre todo). <b>LTC4, LTD4 y LTE4</b> (con cisteína) = sustancia de reacción lenta de la anafilaxia: broncoconstricción, ↑ permeabilidad vascular, vasoconstricción (coronaria).</li>
<li><b>TXA2</b> (plaquetas): vasoconstrictor y proagregante, broncoconstrictor. <b>PGI2</b> (endotelio): vasodilatadora y antiagregante.</li>
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
<li>Inhibición de la <b>COX-2</b> → efecto <b>antiinflamatorio</b>; de la <b>COX-1</b> → la mayoría de los <b>efectos adversos</b>; de la <b>COX-3</b> (central) → analgesia y antipiresis.</li>
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
<li><b>Anticuerpos monoclonales</b> (-mab): proteínas, vía <b>parenteral</b>. En veterinaria, bedinvetmab (perro) y frunevetmab (gato): anti-NGF para el dolor de la artrosis.</li></ul>`]
]},
4: {
intro: "Glucocorticoides (GC): antiinflamatorios e inmunosupresores potentes. Mineralocorticoides y fármacos del eje adrenal.",
sections: [
["Receptor y mecanismo",`<ul>
<li>Receptor <b>citoplasmático</b> unido a HSP90. Dominios: <b>C-terminal</b> = unión al esteroide y dimerización; <b>central</b> = unión al ADN (dedos de cinc); <b>N-terminal</b> = transactivación.</li>
<li><b>Transactivación</b>: el dímero se une a los <b>GRE</b> → síntesis de proteínas antiinflamatorias (lipocortina/anexina-1).</li>
<li><b>Transrepresión</b>: el receptor <b>inhibe</b> AP-1 y NF-κB → bloquea genes proinflamatorios (citocinas, COX-2).</li>
<li>Efectos rápidos <b>no genómicos</b> (excitabilidad neural, conducta): receptores de membrana acoplados a proteínas G.</li></ul>`],
["Receptor mineralocorticoide y 11β-HSD",`<ul>
<li>Cortisol y aldosterona tienen <b>igual afinidad</b> por el receptor MC.</li>
<li><b>11β-HSD2</b> (riñón, colon, glándulas salivares) inactiva el cortisol a cortisona → protege al receptor MC. La aldosterona resiste por su estructura hemiacetal.</li>
<li><b>11β-HSD1</b> (hígado, tejido adiposo, cerebro, pulmón): reactiva la cortisona a cortisol.</li></ul>`],
["Efectos",`<ul>
<li>Metabolismo: ↑ <b>gluconeogénesis</b> y depósito de glucógeno (no glucogenólisis), ↓ utilización periférica de glucosa → hiperglucemia; catabolismo proteico (atrofia muscular); lipólisis sobre todo <b>permisiva</b> (potencian a catecolaminas y GH); hiperlipidemia y redistribución de la grasa.</li>
<li>Agua y electrolitos: retención de Na⁺ y agua → <b>↑ volemia</b> e HTA; ↑ excreción de K⁺ y de <b>ácido úrico</b>; <b>↑ filtración glomerular</b> e inhibición de la ADH (poliuria).</li>
<li>Calcio: ↓ absorción intestinal y ↑ excreción renal → <b>↑ PTH</b> (hiperparatiroidismo secundario).</li>
<li>Sangre: <b>neutrofilia</b>, ↑ eritrocitos y plaquetas; linfopenia, eosinopenia, monocitopenia («leucograma de estrés»). Acción <b>linfolítica</b> (linfomas, leucemias).</li>
<li>Vasos: <b>hipertensores</b>; potencian la vasoconstricción por catecolaminas (efecto permisivo) y ↑ el tono capilar.</li>
<li>Antiinflamatorios: ↓ permeabilidad, edema y depósito de fibrina; estabilizan los lisosomas; inhiben el complemento, los eicosanoides y los macrófagos; retrasan la cicatrización.</li>
<li>Hueso: inhiben los osteoblastos y estimulan los osteoclastos → osteoporosis.</li>
<li>Otros: euforia y ↑ actividad (atraviesan la BHE); inducen la <b>PNMT</b> (síntesis de adrenalina); ↓ temporal de la producción de leche en vacas; antipiréticos, pero no se usan para eso.</li></ul>`],
["Farmacocinética",`<ul>
<li>Buena absorción oral. Alta unión a transcortina y albúmina. Atraviesan la BHE y la placenta.</li>
<li>Biotransformación sobre todo hepática, pero <b>no exclusiva</b> (también riñón y otros tejidos).</li>
<li>Eliminación mayoritariamente <b>renal</b>; también en heces y leche.</li>
<li>Intraarticular: ésteres o suspensiones depot. Tópica: altas concentraciones locales con menos riesgo sistémico.</li></ul>`],
["Reacciones adversas e indicaciones",`<ul>
<li>Cushing iatrogénico y supresión del eje (retirada gradual), inmunosupresión e infecciones, diabetes.</li>
<li>Poliuria y polidipsia, polifagia, pancreatitis, úlceras gastrointestinales, hepatomegalia (perro).</li>
<li>Atrofia muscular, piel fina, alopecia, comedones, retraso de la cicatrización, cataratas y ↑ presión intraocular.</li>
<li>No causan diátesis hemorrágica (más bien hipercoagulabilidad).</li>
<li>Indicados en procesos inflamatorios agudos y crónicos, alergias, enfermedades inmunomediadas, algunas neoplasias. <b>Contraindicados</b> en micosis, úlceras corneales y diabetes.</li></ul>`],
["Hipoadrenocorticismo (Addison)",`<ul>
<li>No se cura: tratamiento de por vida y <b>monitorizado</b> (clínica y electrolitos).</li>
<li>GC (prednisolona a dosis fisiológicas) + <b>mineralocorticoides</b>: DOCP inyectable o fludrocortisona oral.</li>
<li>Crisis addisoniana: fluidos y GC IV (hidrocortisona o dexametasona).</li>
<li><b>ACTH</b> (tetracosactida): péptido, vía <b>parenteral</b>; prueba de estimulación (Addison, Cushing); cetosis bovina.</li></ul>`],
["Mineralocorticoides",`<ul>
<li>Efectos <b>genómicos</b>: precoces (↑ actividad de los canales de Na⁺, ENaC) y tardíos (↑ síntesis de <b>Na⁺/K⁺-ATPasa</b> basolateral).</li>
<li>Efectos <b>no genómicos</b>: rápidos, por receptores de membrana.</li>
<li>Exceso: retención de Na⁺ y agua, <b>hipopotasemia</b>, alcalosis, debilidad o parálisis muscular, arritmias.</li>
<li>La aldosterona no se usa clínicamente: DOCA/DOCP por vía parenteral y fludrocortisona oral.</li></ul>`],
["Hiperadrenocorticismo (Cushing) en el perro",`<ul>
<li><b>Trilostano</b>: inhibe la 3β-hidroxiesteroide deshidrogenasa → tratamiento de elección.</li>
<li>Mitotano: adrenolítico; uso limitado por su toxicidad digestiva y neurológica.</li>
<li><b>Selegilina</b> (IMAO-B): ↑ dopamina → frena la ACTH hipofisaria (Cushing de origen hipofisario).</li>
<li>Metopirona (inhibe la 11β-hidroxilasa; sobre todo en el gato), ketoconazol y aminoglutetimida (puede dar hipotiroidismo): menos usados.</li></ul>`]
]},
5: {
intro: "Fármacos inotrópicos, vasodilatadores y antiarrítmicos.",
sections: [
["Digitálicos (digoxina, digitoxina)",`<ul>
<li>Inhiben la Na⁺/K⁺-ATPasa → ↑ Ca²⁺ intracelular → <b>inotropo positivo</b>; batmotropo positivo. Efecto vagal: <b>cronotropo y dromotropo negativos</b> (↓ nodo SA, ↑ periodo refractario del nodo AV). A dosis altas ↑ automatismo (ectópicos). En el corazón insuficiente ↑ el gasto <b>sin ↑ el consumo de O₂</b>.</li>
<li>En el <b>perro</b>, vida media de la digoxina (≈20–55 h) mayor que la de la digitoxina (≈8–12 h). La digoxina se elimina por vía <b>renal</b> sin metabolizar. Se acumulan en corazón, riñón, hígado y músculo, poco en grasa.</li>
<li>Indicados en la ICC con <b>fibrilación auricular</b> o flúter y en taquicardias supraventriculares. <b>Contraindicados</b> en estenosis aórtica/subaórtica, CMH, arritmias ventriculares y bloqueo AV. No útiles en IC por hipertiroidismo; precaución en miocarditis.</li>
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
<li>Usos: ICC (dilatada, hipertrófica y restrictiva), HTA, proteinuria, nefropatía diabética, insuficiencia renal progresiva, cardiopatía isquémica.</li>
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
["Cardiomiopatía hipertrófica",`<ul><li>Disfunción diastólica. Se tratan con β-bloqueantes (atenolol), diltiazem o verapamilo, e IECA si hay ICC. <b>Evitar inotropos positivos</b> (dobutamina, digoxina, pimobendan) y vasodilatadores potentes.</li></ul>`]
]}
};
