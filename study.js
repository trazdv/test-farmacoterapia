"use strict";
/* Apuntes de estudio por tema. Cada sección: [título, html] */
const STUDY = {
1: {
intro: "En el PDF del parcial no hay preguntas de este tema. Estos son conceptos generales de terapéutica veterinaria para repasar.",
sections: [
["Conceptos básicos",`<ul>
<li><b>Terapéutica</b>: uso racional de fármacos para prevenir, diagnosticar o tratar enfermedades. Tipos: <b>etiológica</b> (elimina la causa), <b>sintomática</b> (alivia síntomas), <b>sustitutiva</b> (aporta lo que falta, p. ej. insulina) y <b>preventiva</b> (vacunas, antiparasitarios).</li>
<li><b>Índice terapéutico</b> = DL50/DE50: cuanto mayor, más seguro es el fármaco.</li>
<li><b>Posología</b>: dosis, intervalo, vía y duración. Hay que ajustarla por especie, edad, peso y función renal y hepática.</li></ul>`],
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
<li><b>H1</b>: contracción de músculo liso (bronquios, intestino), vasodilatación de vasos pequeños y aumento de permeabilidad (habón), prurito y dolor, liberación de catecolaminas de la médula adrenal, enlentecimiento de la conducción AV.</li>
<li><b>H2</b>: secreción gástrica de HCl, efecto <b>crono e inotropo positivo</b>, parte de la vasodilatación.</li>
<li><b>H3</b>: presináptico, en el SNC (sueño y vigilia, cognición). <b>H4</b>: células inmunes (quimiotaxis).</li>
<li>Vasos grandes → constricción; vasos pequeños → dilatación → ↓RVP e hipotensión. En el <b>perro</b> contrae las venas hepáticas.</li></ul>`],
["Antihistamínicos H1",`<table><tr><th></th><th>1ª generación</th><th>2ª generación</th></tr>
<tr><td>Ejemplos</td><td>difenhidramina, clorfeniramina, dimenhidrinato, hidroxicina</td><td>loratadina, cetirizina, fexofenadina, terfenadina, astemizol</td></tr>
<tr><td>Selectividad</td><td>poco selectivos (bloqueo colinérgico y α)</td><td>muy selectivos</td></tr>
<tr><td>SNC</td><td>atraviesan la BHE → sedación</td><td>poco paso → apenas sedan</td></tr>
<tr><td>Cinética</td><td>vida media corta</td><td>vida media larga (1 vez al día), metabolitos activos, alta unión a proteínas, metabolismo por CYP3A4, excreción sobre todo <b>renal</b></td></tr></table>
<ul><li>Usos: urticaria, prurito, rinitis y conjuntivitis alérgica, cinetosis y vértigo (1ª gen.), coadyuvante en retención de placenta. <b>Poco eficaces en el broncoespasmo</b>.</li>
<li>Interacciones: potencian anticolinérgicos y depresores del SNC (opiáceos); terfenadina o astemizol + macrólidos o imidazoles → arritmias.</li></ul>`],
["Antihistamínicos H2",`<ul>
<li>Cimetidina, ranitidina, famotidina, nizatidina. Usos: úlcera péptica, gastritis urémica, esofagitis por reflujo.</li>
<li>Buena absorción oral con efecto de primer paso. Nizatidina: casi sin biotransformación → útil en insuficiencia hepática.</li>
<li><b>Cimetidina</b>: inhibe el citocromo P450 (interacciones), ↑ prolactina y efecto antiandrogénico. La ranitidina apenas tiene estos efectos.</li></ul>`],
["Serotonina (5-HT)",`<ul>
<li>Se forma a partir del triptófano. ~90 % en <b>células enterocromafines</b>; también en plaquetas y neuronas. En la glándula pineal es precursora de la <b>melatonina</b>.</li>
<li>La degrada la MAO (→ 5-HIAA) en hígado, pulmón y otros tejidos; se excreta por vía renal.</li>
<li>Efectos: contrae vasos grandes y venas, pero <b>dilata las arteriolas</b> del músculo esquelético y del corazón; crono e inotropo positivo directo (posible bradicardia refleja por Bezold-Jarisch); broncoconstricción; aumenta la motilidad intestinal; a nivel central reduce la agresividad.</li>
<li><b>Agonistas 5-HT1A</b> (buspirona): ansiedad. <b>ISRS</b> (fluoxetina, clomipramina): conductas compulsivas y automutilación. <b>Agonistas 5-HT4</b> (cisaprida, mosaprida): procinéticos (atonía ruminal, reflujo).</li>
<li><b>Antagonistas 5-HT3</b> (ondansetrón, granisetrón; «setrones»): antieméticos muy eficaces en quimioterapia, poco en la cinetosis. Pueden darse por vía IV. Raramente broncoespasmo e hipotensión.</li>
<li><b>Antagonistas 5-HT2</b> (ketanserina): bloquean la contracción vascular y uterina.</li>
<li><b>Metoclopramida</b>: antagonista D2 y 5-HT3 y agonista 5-HT4 → procinético y antiemético. Efectos adversos: trastornos extrapiramidales, galactorrea, somnolencia, <b>diarrea</b>.</li></ul>`],
["Péptidos: angiotensina y péptidos natriuréticos",`<ul>
<li><b>Sistema renina-angiotensina</b>: renina → angiotensina I → (ECA) → <b>angiotensina II</b>.</li>
<li><b>AT1</b>: vasoconstricción, ↑ tono simpático central, liberación de aldosterona, adrenalina, ADH y ACTH, sed, retención de Na⁺ y agua (antidiuresis), efecto crono e inotropo positivo, hipertrofia, fibrosis, superóxidos y agregación plaquetaria.</li>
<li><b>AT2</b>: lo contrario: vasodilatación, antiproliferativo, apoptosis.</li>
<li><b>Péptidos natriuréticos</b> (ANP, BNP): natriuresis, diuresis, vasodilatación arterial y venosa, antiproliferativos y antifibróticos. Inhiben la renina, la aldosterona, la endotelina-1 y la <b>vasopresina</b>.</li></ul>`],
["Eicosanoides",`<ul>
<li>Derivados del <b>ácido araquidónico</b> (20 C): estructura lipídica. <b>No se almacenan</b>, se sintetizan a demanda en casi todas las células <b>excepto los eritrocitos</b>. Son muy potentes y de acción local.</li>
<li><b>COX-1</b>: constitutiva (homeostasis: mucosa gástrica, riñón, plaquetas). <b>COX-2</b>: inducible (inflamación). <b>COX-3</b>: central (fiebre y dolor).</li>
<li><b>5-LOX</b> → leucotrienos. LTB4: quimiotaxis. <b>LTC4, LTD4 y LTE4</b> (con cisteína) = sustancia de reacción lenta de la anafilaxia (asma, shock anafiláctico).</li>
<li>TXA2: agregación plaquetaria y vasoconstricción. PGI2: lo contrario.</li>
<li>Usos veterinarios: PGF2α (dinoprost, cloprostenol) para luteólisis, sincronización del celo, inducción del parto, piómetra y aumento de la producción seminal; latanoprost para el glaucoma; misoprostol para prevenir úlceras por AINEs. <b>No</b> se usan en la CID ni como procinéticos.</li></ul>`],
["Óxido nítrico (NO)",`<ul>
<li>Se forma a partir de la L-arginina por la <b>NO sintasa</b> (endotelial, neuronal e inducible).</li>
<li>Activa la guanilato ciclasa → ↑ GMPc → relajación del músculo liso (vasodilatación), inhibición de la agregación plaquetaria.</li>
<li>Fármacos relacionados: nitratos y nitroprusiato (donadores de NO), sildenafilo (inhibe la PDE5 → ↑ GMPc).</li></ul>`]
]},
3: {
intro: "AINEs: inhiben la ciclooxigenasa (COX) y la síntesis de prostaglandinas.",
sections: [
["Mecanismo y acciones",`<ul>
<li><b>Antiinflamatoria</b>: requiere concentraciones <b>superiores</b> a las que inhiben la COX. En los derivados del ácido propiónico es estereoespecífica (enantiómero S). Tepoxalina (y diflunisal) inhiben también la 5-LOX. Los fenamatos además antagonizan las PGs ya formadas.</li>
<li><b>Analgésica</b>: leve-moderada, útil en el dolor inflamatorio; <b>no</b> en el dolor por estímulo mecánico o eléctrico. Gran variabilidad individual. No dan tolerancia.</li>
<li><b>Antipirética</b>: inhiben la PGE2 hipotalámica (COX-3). <b>No</b> sirven en la hipertermia por golpe de calor o ejercicio, ni la producida por PGE2 exógena. No causan hipotermia. El diflunisal no es antipirético.</li>
<li>Paracetamol y metamizol: analgésicos y antipiréticos, <b>antiinflamatorios muy débiles</b>. El paracetamol es tóxico en el gato.</li></ul>`],
["Farmacocinética",`<ul>
<li>Ácidos débiles, <b>alta unión a proteínas</b> → Vd <b>bajo</b>. Se acumulan en el foco inflamatorio.</li>
<li>Se biotransforman en el hígado. Su excreción renal depende del <b>pH urinario</b> y de la secreción tubular.</li>
<li>Gran <b>variación de la vida media entre especies e individuos</b> (aspirina: gato ≈ 38 h, perro ≈ 8 h, caballo ≈ 1 h). Pueden dejar residuos en la leche.</li></ul>`],
["Reacciones adversas",`<ul>
<li><b>Gastrointestinales</b> (COX-1): úlceras y retraso de la reepitelización. Prevención con misoprostol, IBP o antiH2. Nimesulida y nabumetona son poco ulcerógenas.</li>
<li><b>Renales</b>: ↓ flujo y FG, retención de Na⁺ (HTA), <b>↓ renina y aldosterona</b> → hiperpotasemia.</li>
<li>Hematológicas: ↓ agregación plaquetaria.</li>
<li><b>Salicilismo</b> (aspirina): acúfenos, fiebre, acidosis mixta, hiperuricemia a dosis bajas.</li></ul>`],
["Antiartríticos (condroprotectores)",`<ul>
<li><b>Glucosaminoglicanos</b> (GAGs polisulfatados, condroitín, glucosamina): de acción lenta. Útiles en artrosis, incluida la debida a sobrepeso o traumatismo.</li>
<li><b>Ácido hialurónico</b>: vía <b>intraarticular</b> (o IV). Mejora el líquido sinovial, reduce la infiltración de PMN, los radicales libres y la pérdida de GAGs.</li>
<li>Glucocorticoides intraarticulares: ésteres o suspensiones de absorción lenta.</li></ul>`],
["Antirreumatoides (FAME)",`<table><tr><th>Tipo</th><th>Ejemplos</th></tr>
<tr><td>Sintéticos convencionales</td><td>metotrexato, leflunomida, sulfasalazina</td></tr>
<tr><td>Sintéticos <b>dirigidos</b></td><td>inhibidores JAK: <b>tofacitinib</b>, baricitinib (oclacitinib en veterinaria)</td></tr>
<tr><td>Biológicos anti-TNF</td><td><b>etanercept</b>, infliximab, adalimumab</td></tr>
<tr><td>Otros biológicos</td><td>rituximab (anti-CD20), abatacept (coestimulación T), tocilizumab (anti-IL-6)</td></tr></table>`]
]},
4: {
intro: "Glucocorticoides (GC): antiinflamatorios e inmunosupresores potentes.",
sections: [
["Receptor y mecanismo",`<ul>
<li>Receptor citoplasmático unido a HSP90. Dominios: <b>C-terminal</b> = unión al esteroide y dimerización; <b>central</b> = unión al ADN (dedos de cinc); <b>N-terminal</b> = transactivación.</li>
<li><b>Transactivación</b>: el dímero se une a los <b>GRE</b> → síntesis de proteínas antiinflamatorias (lipocortina/anexina-1).</li>
<li><b>Transrepresión</b>: interacción con <b>AP-1 y NF-κB</b> → inhibe genes proinflamatorios (citocinas, COX-2).</li>
<li>Efectos rápidos (excitabilidad neural, conducta): receptores de membrana acoplados a proteínas G.</li></ul>`],
["Receptor mineralocorticoide y 11β-HSD",`<ul>
<li>Cortisol y aldosterona tienen <b>igual afinidad</b> por el receptor MC.</li>
<li><b>11β-HSD2</b> (riñón, colon) inactiva el cortisol a cortisona → protege al receptor MC. La aldosterona resiste por su estructura hemiacetal.</li>
<li><b>11β-HSD1</b> (hígado, tejido adiposo): reactiva la cortisona a cortisol.</li></ul>`],
["Efectos",`<ul>
<li>Metabolismo: ↑ <b>gluconeogénesis</b>, hiperglucemia, catabolismo proteico (atrofia muscular), redistribución de la grasa.</li>
<li>Agua y electrolitos: retención de Na⁺ y agua → <b>↑ volemia</b> e HTA; ↑ excreción de K⁺ y de <b>ácido úrico</b>.</li>
<li>Sangre: <b>neutrofilia</b>, ↑ eritrocitos y plaquetas; linfopenia, eosinopenia, monocitopenia («leucograma de estrés»).</li>
<li>Vasos: potencian la vasoconstricción por catecolaminas (efecto permisivo).</li>
<li>Hueso: inhiben los osteoblastos y estimulan los osteoclastos → osteoporosis.</li></ul>`],
["Farmacocinética",`<ul>
<li>Biotransformación sobre todo hepática, pero <b>no exclusiva</b> (también riñón y otros tejidos).</li>
<li>Eliminación mayoritariamente renal; también en heces y leche.</li>
<li>Intraarticular: ésteres o suspensiones depot. Tópica: altas concentraciones locales con menos riesgo sistémico.</li></ul>`],
["Reacciones adversas",`<ul>
<li>Cushing iatrogénico y supresión del eje (retirada gradual), inmunosupresión e infecciones, diabetes.</li>
<li>Poliuria y polidipsia, polifagia, pancreatitis, úlceras gastrointestinales.</li>
<li>Atrofia muscular, piel fina, alopecia, comedones, retraso de la cicatrización.</li></ul>`],
["Hiperadrenocorticismo (Cushing) en el perro",`<ul>
<li><b>Trilostano</b>: inhibe la 3β-hidroxiesteroide deshidrogenasa → tratamiento de elección.</li>
<li>Mitotano: adrenolítico, alternativa con más efectos adversos.</li>
<li>Ketoconazol y aminoglutetimida: menos eficaces.</li></ul>`]
]},
5: {
intro: "Fármacos inotrópicos, vasodilatadores y antiarrítmicos.",
sections: [
["Digitálicos (digoxina, digitoxina)",`<ul>
<li>Inhiben la Na⁺/K⁺-ATPasa → ↑ Ca²⁺ intracelular → <b>inotropo positivo</b>. Efecto vagal: <b>cronotropo y dromotropo negativos</b> (↑ periodo refractario del nodo AV). A dosis altas ↑ automatismo (ectópicos).</li>
<li>En el <b>perro</b>, vida media de la digoxina (≈20–55 h) mayor que la de la digitoxina (≈8–12 h). La digoxina se elimina por vía <b>renal</b> sin metabolizar. Se acumulan en corazón, riñón, hígado y músculo, poco en grasa.</li>
<li>Indicados en fibrilación auricular y taquicardias supraventriculares con ICC. No en arritmias ventriculares ni en IC por hipertiroidismo.</li>
<li>La <b>hipopotasemia</b> aumenta su toxicidad. Intoxicación: vómitos, anorexia, diarrea, arritmias y bloqueo AV, visión borrosa y discromatopsia.</li></ul>`],
["Simpaticomiméticos e inhibidores de PDE",`<ul>
<li><b>Dobutamina</b>: β1 (algo β2 y α1), <b>más inotrópica que vasodilatadora</b>. Infusión IV continua. A dosis altas, taquiarritmias. En la FA, digitalizar antes.</li>
<li><b>Dopamina</b>: dosis bajas D1 (vasodilatación renal), medias β1 (ICC), altas α1 (shock). En la ICC se usan dosis <b>más bajas</b> que en el shock. Vida media muy corta. Desensibilización β1 a las ~72 h.</li>
<li><b>Amrinona y milrinona</b> (PDE3): inodilatadores con más efecto vasodilatador que inotrópico. Solo a <b>corto plazo</b>. Efectos adversos: arritmias ventriculares y trombocitopenia.</li>
<li><b>Pimobendan</b>: sensibilizador del Ca²⁺ + inhibidor de PDE3 (su metabolito inhibe PDE III/V). Para la ICC por endocardiosis mitral y la CMD. Se combina con IECA y diuréticos, no con β-bloqueantes.</li>
<li><b>Sildenafilo</b> (PDE5): hipertensión <b>pulmonar</b> en el perro.</li></ul>`],
["IECA y sartanes",`<ul>
<li><b>IECA</b> (enalapril, benazepril): ↓ angiotensina II y aldosterona → vasodilatación <b>sin taquicardia refleja</b>, natriuresis y diuresis, antiproliferativos (evitan la hipertrofia y la remodelación), mejoran la disfunción endotelial, ↑ flujo renal sin cambiar la FG.</li>
<li>Efectos adversos: <b>hiperpotasemia</b> (más con AINEs o espironolactona), tos seca (bradicinina), fallo renal si hay hipovolemia u <b>oliguria</b>.</li>
<li>Usos: ICC (dilatada, hipertrófica y restrictiva), HTA, proteinuria, nefropatía diabética, insuficiencia renal progresiva, cardiopatía isquémica.</li>
<li><b>Sartanes</b> (ARA-II: losartán, telmisartán): antagonistas puros del AT1, orales; favorecen la excreción de Na⁺ y agua; sin tos (sustituyen al IECA). Telmisartán: proteinuria en el gato.</li></ul>`],
["Otros vasodilatadores",`<ul>
<li><b>Nitratos</b>: mixtos con predominio <b>venoso</b> (↓ precarga), <b>↓ demanda de O₂</b>. La nitroglicerina es de acción corta; mononitrato y dinitrato de isosorbida son orales y de acción más larga.</li>
<li><b>Hidralazina</b>: arteriodilatador directo; da taquicardia refleja y retención de líquidos → se asocia a <b>β-bloqueantes y diuréticos</b>. Vida media corta.</li>
<li><b>Prazosina</b> (α1): vasodilatador mixto. <b>Isoxsuprina</b>: laminitis en el caballo. <b>Aliskiren</b>: inhibidor directo de la renina.</li></ul>`],
["Antagonistas del calcio",`<table><tr><th>Dihidropiridinas</th><th>Cationes anfófilos</th></tr>
<tr><td>nifedipino, <b>amlodipino</b>, nimodipino</td><td><b>verapamilo</b>, diltiazem</td></tr>
<tr><td><b>Vasoselectivos</b>; taquicardia refleja</td><td>No vasoselectivos: corazón + vasos; crono y dromotropo negativos</td></tr>
<tr><td>HTA (amlodipino en el gato); vasoespasmo tras hemorragia subaracnoidea (nimodipino)</td><td>Taquicardias <b>supraventriculares</b> agudas; CMH felina (diltiazem); HTA</td></tr></table>
<ul><li>Verapamilo: contraindicado en la intoxicación digitálica y con β-bloqueantes. Metabolismo hepático.</li></ul>`],
["Antiarrítmicos (Vaughan-Williams)",`<ul>
<li><b>Clase I</b> (bloqueo de Na⁺): ↓ velocidad de la fase 0 y de la conducción, prolongan el periodo refractario; bloqueo <b>dependiente del estado</b> del canal; se reservan para arritmias graves que comprometen el gasto cardiaco.</li>
<li><b>Clase II</b> (β-bloqueantes): ↓ automatismo y ectópicos, enlentecen el nodo AV. Los no selectivos (propranolol, carvedilol) dan broncoconstricción.</li>
<li><b>Clase III</b> (bloqueo de K⁺: amiodarona, sotalol, bretilio): <b>retrasan la repolarización</b> y prolongan el PA y el periodo refractario. Bretilio: fibrilación ventricular.</li>
<li><b>Clase IV</b> (antagonistas del Ca²⁺): verapamilo y diltiazem.</li></ul>`],
["Cardiomiopatía hipertrófica",`<ul><li>Disfunción diastólica. Se tratan con β-bloqueantes (atenolol), diltiazem o verapamilo, e IECA si hay ICC. <b>Evitar inotropos positivos</b> como la dobutamina.</li></ul>`]
]}
};
