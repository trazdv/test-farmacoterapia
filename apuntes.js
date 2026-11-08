"use strict";
/* Apuntes del usuario: sus resúmenes en PDF, tal cual (cada página es una imagen en apuntes/<id>/p1.webp…).
   Para añadir un documento: carpeta apuntes/<id>/ con las páginas pN.webp y apuntes.pdf, y una entrada en APUNTES.
   APQ = preguntas de «Repasar apuntes»: solo salen en la pestaña Apuntes (no en el Test ni en Repaso).
   doc = id del documento, p = página, cita = texto literal de los apuntes que se enseña en la respuesta, n = nota breve opcional. */
const APUNTES = [
{id:"t2-autacoides",t:2,title:"Tema 2: Autacoides o mediadores celulares",sub:"Tema completo con tus anotaciones (lo tachado no entra en el examen)",dir:"apuntes/t2-autacoides/",pdf:"apuntes/t2-autacoides/apuntes.pdf",pages:33,w:2000,h:2829},
{id:"t2-eicosanoides",t:[2,3],from:{2:1,3:5},title:"Mediadores eicosanoides e inicio del Tema 3 (AINEs)",sub:"Prostaglandinas, tromboxanos, leucotrienos e introducción a los AINEs",dir:"apuntes/t2-eicosanoides/",pdf:"apuntes/t2-eicosanoides/apuntes.pdf",pages:6,w:2000,h:2826},
{id:"t3-aines",t:3,title:"Farmacología de los Antiinflamatorios No Esteroideos (AINEs)",sub:"Continuación, mecanismos, farmacocinética y seguridad",dir:"apuntes/t3-aines/",pdf:"apuntes/t3-aines/apuntes.pdf",pages:8,w:2000,h:2826},
{id:"t4-esteroideos",t:4,title:"Tema 4: Antiinflamatorios esteroideos",sub:"Tema completo con tus anotaciones",dir:"apuntes/t4-esteroideos/",pdf:"apuntes/t4-esteroideos/apuntes.pdf",pages:20,w:2000,h:2829},
/* el Tema 5 va en dos documentos separados, cada uno con sus preguntas; «short» es el nombre que sale en las etiquetas y en el repaso */
{id:"t5a-cardio",t:5,short:"Tema 5 A",title:"Tema 5 A: Terapéutica cardiovascular",sub:"El corazón: digitálicos, otros inotropos y antiarrítmicos (lo tachado y lo que pone «no lo pregunta» no entran)",dir:"apuntes/t5a-cardio/",pdf:"apuntes/t5a-cardio/apuntes.pdf",pages:21,w:2000,h:2829},
{id:"t5b-cardio",t:5,short:"Tema 5 B",title:"Tema 5 B: Terapéutica cardiovascular",sub:"Insuficiencia cardiaca y vasodilatadores, lo más importante según tu nota (la clasificación tachada no entra)",dir:"apuntes/t5b-cardio/",pdf:"apuntes/t5b-cardio/apuntes.pdf",pages:15,w:2000,h:2829}
];

const APQ = [
/* ---------- 1. Ciclooxigenasa: COX-1, COX-2 y COX-3 ---------- */
{doc:"t3-aines",p:1,q:"Los AINEs inhiben la ciclooxigenasa (COX), la enzima que transforma el ácido araquidónico en:",o:[
 "Endoperóxidos cíclicos (PGG₂ y PGH₂), precursores de prostaglandinas, tromboxanos y prostaciclinas",
 "Leucotrienos (LTA₄ y LTB₄), precursores de la sustancia de reacción lenta de la anafilaxia",
 "Ácido araquidónico libre, que se libera de los fosfolípidos de la membrana celular",
 "Lipoxinas y resolvinas, los mediadores que cierran la respuesta inflamatoria"],a:0,
 cita:"Los Antiinflamatorios No Esteroideos (AINEs) constituyen un grupo heterogéneo de fármacos cuya diana primaria es la inhibición de la enzima ciclooxigenasa (COX) o prostaglandina endoperóxido sintasa, responsable de la transformación del ácido araquidónico en endoperóxidos cíclicos (PGG₂ y PGH₂), precursores directos de las prostaglandinas, tromboxanos y prostaciclinas."},
{doc:"t3-aines",p:1,q:"Funciones de la COX-1 (isoforma constitutiva). Señala la opción CORRECTA:",o:[
 "Protege la mucosa gástrica, mantiene la vasodilatación de la arteriola aferente renal y sintetiza TXA₂ en las plaquetas",
 "Protege la mucosa gástrica, contrae la arteriola aferente renal y sintetiza prostaciclina (PGI₂) en las plaquetas",
 "Forma las prostaglandinas proinflamatorias del foco, mantiene el flujo renal y sintetiza TXA₂ en las plaquetas",
 "Estimula la secreción ácida gástrica, mantiene la filtración glomerular e inhibe la agregación de las plaquetas"],a:0,
 cita:"COX-1 (Isoforma Constitutiva): Se expresa de forma continua en la mayoría de los tejidos fisiológicos. Cumple funciones esenciales de homeostasis celular:\n• Protección de la mucosa gástrica: Mediada por PGE₂ y PGI₂, que estimulan la secreción de moco protector y bicarbonato e inhiben la secreción ácida parietal.\n• Homeostasis hemodinámica renal: Garantiza la vasodilatación de la arteriola aferente renal para mantener una tasa de filtración glomerular adecuada en situaciones de hipoperfusión.\n• Función hemostática plaquetaria: Cataliza la síntesis de Tromboxano A₂ (TXA₂) en las plaquetas, promoviendo la agregación plaquetaria y la vasoconstricción."},
{doc:"t3-aines",p:1,q:"La inhibición no selectiva de la COX-1 es la responsable directa de:",o:[
 "Las principales reacciones adversas: ulcerogénesis gástrica, deterioro de la función renal y diátesis hemorrágica",
 "La acción antiinflamatoria en el foco tisular, por la caída de las prostaglandinas proinflamatorias",
 "La acción antipirética, por la caída de la PGE₂ en el área preóptica del hipotálamo anterior",
 "El efecto uricosúrico de los salicilatos y de la fenilbutazona en el túbulo renal"],a:0,
 cita:"Implicación clínica: La inhibición no selectiva de la COX-1 es la responsable directa de las principales reacciones adversas asociadas a los AINEs (ulcerogénesis gástrica, deterioro de la función renal y diátesis hemorrágica)."},
{doc:"t3-aines",p:1,q:"COX-2 en condiciones basales y ante una inflamación:",o:[
 "Casi indetectable en la mayoría de tejidos; ante un estímulo inflamatorio aumenta su expresión entre 10 y 80 veces",
 "Se expresa siempre al mismo nivel en todos los tejidos; la inflamación aumenta su actividad, pero no su cantidad",
 "Muy abundante en la mucosa gástrica y las plaquetas; la inflamación la reduce para proteger el foco",
 "Solo existe en el SNC; la inflamación la induce en el estómago y por eso aparecen las úlceras"],a:0,
 cita:"Carácter Inducible: En condiciones fisiológicas basales sus niveles son casi indetectables en la mayoría de los tejidos. Sin embargo, ante un estímulo inflamatorio o lesión tisular, es inducida de forma masiva (incrementando su expresión entre 10 y 80 veces) por la acción de citoquinas proinflamatorias (IL-1, TNF-α) y lipopolisacáridos bacterianos (LPS). Cataliza la formación masiva de prostaglandinas proinflamatorias a nivel local."},
{doc:"t3-aines",p:1,q:"¿Qué induce la expresión de la COX-2 en el foco inflamatorio?",o:[
 "Las citoquinas IL-1 y TNF-α y los lipopolisacáridos bacterianos (LPS)",
 "Los glucocorticoides y la IL-10 que se liberan para frenar la inflamación",
 "La PGE₂ y el bicarbonato que segrega la mucosa del estómago",
 "El tromboxano A₂ y la serotonina que liberan las plaquetas activadas"],a:0,
 cita:"…ante un estímulo inflamatorio o lesión tisular, es inducida de forma masiva (incrementando su expresión entre 10 y 80 veces) por la acción de citoquinas proinflamatorias (IL-1, TNF-α) y lipopolisacáridos bacterianos (LPS)."},
{doc:"t3-aines",p:2,q:"¿Dónde se expresa la COX-2 de forma constitutiva?",o:[
 "En áreas del SNC, el riñón y el endotelio vascular, donde sintetiza PGI₂ (prostaciclina)",
 "En la mucosa gástrica y en las plaquetas, donde sintetiza PGE₂ y tromboxano A₂",
 "En los eritrocitos y en el hígado, donde sintetiza leucotrienos y lipoxinas",
 "En ningún tejido sano: solo aparece en el foco inflamatorio tras un estímulo"],a:0,
 cita:"Carácter Constitutivo: Se expresa constitutivamente en áreas específicas del Sistema Nervioso Central (SNC), el riñón y el endotelio vascular (donde sintetiza PGI₂ o prostaciclina, de acción vasodilatadora y antiagregante)."},
{doc:"t3-aines",p:2,q:"La prostaciclina (PGI₂) que sintetiza la COX-2 en el endotelio vascular tiene acción:",o:[
 "Vasodilatadora y antiagregante","Vasoconstrictora y proagregante","Vasodilatadora y proagregante","Vasoconstrictora y antiagregante"],a:0,
 cita:"…el endotelio vascular (donde sintetiza PGI₂ o prostaciclina, de acción vasodilatadora y antiagregante)."},
{doc:"t3-aines",p:2,q:"¿En qué se basa el diseño de los inhibidores selectivos de la COX-2 (coxibs)?",o:[
 "En un bolsillo lateral hidrófobo del sitio activo de la COX-2 que acomoda moléculas voluminosas",
 "En que acetilan de forma irreversible la serina 530 de la COX-2, igual que la aspirina",
 "En un bolsillo lateral de la COX-1 que solo deja pasar a las moléculas más pequeñas",
 "En que bloquean a la vez la COX-2 y la 5-lipoxigenasa del foco inflamatorio"],a:0,
 cita:"Selectividad estructural: La COX-2 posee un bolsillo lateral hidrófobo en su sitio activo que permite el acomodamiento estérico de moléculas voluminosas, base del diseño de los inhibidores selectivos de la COX-2 o Coxibs (como celecoxib), así como de AINEs con selectividad preferencial (meloxicam, nimesulida, nabumetona)."},
{doc:"t3-aines",p:2,q:"AINEs con selectividad preferencial por la COX-2 (sin ser coxibs):",o:[
 "Meloxicam, nimesulida y nabumetona","Ibuprofeno, naproxeno y ketoprofeno","Ácido acetilsalicílico, fenilbutazona y flunixino","Paracetamol, metamizol y tepoxalina"],a:0,
 cita:"…base del diseño de los inhibidores selectivos de la COX-2 o Coxibs (como celecoxib), así como de AINEs con selectividad preferencial (meloxicam, nimesulida, nabumetona)."},
{doc:"t3-aines",p:2,q:"Según tus apuntes (actualización 2025/2026 que destaca la profesora), la COX-3 en humanos:",o:[
 "No tiene gen propio: es una proteína truncada sin actividad, y se descarta que el paracetamol actúe a través de ella",
 "Es la isoforma del sistema nervioso central que inhibe el paracetamol, y por eso es tan buen analgésico y antipirético",
 "Es una isoforma inducible en el foco inflamatorio, igual que la COX-2, y también la inhiben los coxibs selectivos",
 "Está en las plaquetas y sintetiza el TXA₂; por eso la aspirina antiagrega de forma irreversible y duradera"],a:0,
 cita:"Hallazgo clave de examen: La evidencia proteómica y genómica actual ha demostrado fehacientemente que en humanos NO existe un gen independiente que codifique la COX-3. La COX-3 humana es una proteína truncada no funcional desprovista de actividad enzimática. Por lo tanto, la hipótesis de que el paracetamol actúa mediante inhibición de la COX-3 ha sido oficialmente descartada en medicina humana.",
 n:"Ojo: en exámenes de años anteriores (y en algunas preguntas del Test) la COX-3 aparece como responsable de la analgesia y la antipiresis. Según tus apuntes, la profesora lo ha actualizado y hoy se considera descartado."},
{doc:"t3-aines",p:2,q:"¿Cómo actúa realmente el paracetamol a nivel central, según tus apuntes?",o:[
 "Por su metabolito AM404 (receptores CB₁), potenciando las vías serotoninérgicas y frenando la peroxidasa de la COX donde hay pocos peróxidos",
 "Inhibiendo la COX-3 del hipotálamo, una isoforma propia del sistema nervioso central que no existe en el resto del cuerpo",
 "Inhibiendo la COX-2 del foco inflamatorio, donde hay muchos peróxidos; por eso es un antiinflamatorio tan potente",
 "Bloqueando los receptores opioides μ de la médula espinal, igual que la morfina, pero sin producir tolerancia"],a:0,
 cita:"¿Cómo actúa realmente el paracetamol a nivel central?\n1. Formación en el cerebro de un metabolito activo (AM404) que interactúa con los receptores cannabinoides (CB₁) y modula las vías analgésicas descendentes.\n2. Modulación y potenciación de las vías serotoninérgicas centralizadoras del dolor.\n3. Inhibición de la actividad peroxidasa del complejo COX en entornos con bajas concentraciones de peróxidos (como el cerebro)."},
{doc:"t3-aines",p:2,q:"El AM404, metabolito del paracetamol que se forma en el cerebro, actúa sobre:",o:[
 "Los receptores cannabinoides CB₁, y modula las vías analgésicas descendentes",
 "Los receptores opioides μ, y bloquea la transmisión del dolor en la médula",
 "Los receptores H1 centrales, y produce sedación además de analgesia",
 "Los receptores 5-HT3 de la zona gatillo, y por eso también es antiemético"],a:0,
 cita:"1. Formación en el cerebro de un metabolito activo (AM404) que interactúa con los receptores cannabinoides (CB₁) y modula las vías analgésicas descendentes."},

/* ---------- 2. Mecanismos enzimáticos ---------- */
{doc:"t3-aines",p:3,q:"Mecanismo del ácido acetilsalicílico (AAS) sobre la COX-1:",o:[
 "Acetilación covalente e irreversible de la serina 530",
 "Inhibición reversible y competitiva con el ácido araquidónico",
 "Inhibición dual de la COX y de la 5-lipoxigenasa",
 "Neutralización de las prostaglandinas ya formadas en el foco"],a:0,
 cita:"El Ácido Acetilsalicílico (AAS) transfiere de forma irreversible su grupo acetilo al residuo de serina 530 de la COX-1."},
{doc:"t3-aines",p:3,q:"¿Por qué la aspirina a dosis bajas mantiene la antiagregación sin necesitar niveles continuos en sangre?",o:[
 "Porque las plaquetas no tienen núcleo ni pueden fabricar COX nueva: la inhibición dura toda su vida (7-10 días)",
 "Porque se acumula dentro de las plaquetas y se va liberando poco a poco durante 7-10 días",
 "Porque frena la médula ósea y durante 7-10 días no se liberan plaquetas nuevas a la sangre",
 "Porque inhibe de forma irreversible la PGI₂ del endotelio, que es la que permite la agregación"],a:0,
 cita:"Debido a que las plaquetas son elementos anucleados carentes de maquinaria para la síntesis proteica, la inhibición de la COX-1 por el ácido acetilsalicílico es irreversible durante toda la vida media de la plaqueta (7 a 10 días).\nHasta que no se liberan nuevas plaquetas a la circulación por la médula ósea, la capacidad de sintetizar Tromboxano A₂ (TXA₂) queda completamente anulada. Por esta razón, la aspirina a dosis muy bajas (antiagregantes) es el único AINE que mantiene una inhibición prolongada de la agregación plaquetaria sin requerir niveles plasmáticos continuos del fármaco."},
{doc:"t3-aines",p:3,q:"¿Cómo inhiben la COX los AINEs convencionales como el ibuprofeno y el naproxeno?",o:[
 "De forma reversible y competitiva con el ácido araquidónico en el centro activo",
 "De forma irreversible, acetilando la serina 530 igual que la aspirina",
 "De forma dual, bloqueando también la 5-lipoxigenasa y los leucotrienos",
 "Neutralizando las prostaglandinas ya formadas, sin tocar la enzima"],a:0,
 cita:"AINEs Convencionales (Ibuprofeno, Naproxeno) — Reversible y competitivo — Competición con el ácido araquidónico en el centro activo."},
{doc:"t3-aines",p:3,q:"Fenamatos (flunixino, ácido meclofenámico):",o:[
 "Inhiben la COX de forma reversible y además neutralizan las PGs ya formadas; muy eficaces en el dolor visceral o cólico",
 "Acetilan de forma irreversible la COX-1 de las plaquetas y son los antiagregantes de elección en veterinaria",
 "Inhiben a la vez la COX y la 5-lipoxigenasa, así que bloquean las prostaglandinas y los leucotrienos",
 "Son inhibidores selectivos de la COX-2: casi no dan gastroenteropatía, pero exigen vigilancia cardiovascular"],a:0,
 cita:"Fenamatos (Flunixino, Ácido Meclofenámico) — Reversible + Neutralización de PGs tisulares — Neutralizan PGs preformadas en el foco; altamente eficaces en dolor visceral/cólico."},
{doc:"t3-aines",p:3,q:"La tepoxalina se caracteriza por:",o:[
 "Inhibición dual de COX y 5-lipoxigenasa: bloquea a la vez prostaglandinas y leucotrienos",
 "Inhibición selectiva de la COX-2 gracias al bolsillo lateral, como los coxibs",
 "Acetilación irreversible de la COX-1, con un efecto antiagregante prolongado",
 "Neutralización de las PGs ya formadas en el foco, muy útil en el dolor cólico"],a:0,
 cita:"Tepoxalina — Inhibición Dual (COX y 5-Lipoxigenasa) — Bloquea la síntesis de prostaglandinas y leucotrienos simultáneamente."},
{doc:"t3-aines",p:3,q:"Coxibs (celecoxib, robenacoxib):",o:[
 "Inhiben de forma reversible y selectiva la COX-2; reducen la gastroenteropatía, pero requieren vigilancia cardiovascular",
 "Inhiben de forma irreversible la COX-1; son los AINEs más gastrolesivos y los mejores antiagregantes",
 "Inhiben la COX-2 y la 5-lipoxigenasa; no necesitan ningún control porque no tienen efectos adversos",
 "Neutralizan las prostaglandinas ya formadas; por eso son los de elección en el cólico del caballo"],a:0,
 cita:"Coxibs (Celecoxib, Robenacoxib) — Reversible selectivo de COX-2 — Ajuste en el bolsillo lateral estérico; reducen la gastroenteropatía pero requieren vigilancia cardiovascular."},
{doc:"t3-aines",p:3,q:"Derivados del ácido arilpropiónico (ibuprofeno, ketoprofeno, naproxeno). Señala la CORRECTA:",o:[
 "El enantiómero S es el activo; el R no inhibe la COX, pero puede convertirse en S por inversión quiral",
 "El enantiómero R es el activo; el S no inhibe la COX, pero puede convertirse en R por inversión quiral",
 "Los dos enantiómeros inhiben la COX con la misma potencia, así que no hay estereoespecificidad",
 "El enantiómero R es tóxico y el organismo no puede transformarlo, por eso solo se vende el S"],a:0,
 cita:"• Enantiómero S (Eutómero): Es la forma farmacológicamente activa encargada de la inhibición de la COX.\n• Enantiómero R (Distómero): Carece de actividad inhibidora COX directa. Sin embargo, en el organismo existen enzimas isomerasas capaces de realizar una conversión metabólica unidireccional (inversión quiral) de la forma R inactiva a la forma S activa."},

/* ---------- 3. Acción antiinflamatoria, analgésica y antipirética ---------- */
{doc:"t3-aines",p:4,q:"Para conseguir una reducción significativa de la inflamación, los AINEs necesitan:",o:[
 "Concentraciones sustancialmente superiores a las que inhiben la COX, porque intervienen mecanismos accesorios",
 "Concentraciones inferiores a las que inhiben la COX, porque la inflamación es muy sensible a ellos",
 "Las mismas concentraciones que para la antiagregación, porque el mecanismo es idéntico",
 "Dosis bajas mantenidas, porque su efecto antiinflamatorio depende solo de la COX-3 central"],a:0,
 cita:"Para lograr una reducción significativa de la inflamación tisular se requieren concentraciones de AINE sustancialmente superiores a las necesarias para inhibir la ciclooxigenasa. Esto evidencia la intervención de mecanismos accesorios no dependientes exclusivamente de COX."},
{doc:"t3-aines",p:4,q:"Mecanismos accesorios (no dependientes de la COX) de la acción antiinflamatoria. Señala la opción CORRECTA:",o:[
 "Menos adherencia y quimiotaxis de neutrófilos, menos degranulación de mastocitos y basófilos e inhibición indirecta de la fosfolipasa A₂",
 "Más adherencia y quimiotaxis de neutrófilos, menos degranulación de mastocitos e inhibición directa de la 5-lipoxigenasa",
 "Menos adherencia de neutrófilos, más degranulación de mastocitos y basófilos y activación de la fosfolipasa A₂",
 "Bloqueo de los receptores H1 y H2, menos síntesis de leucotrienos y activación de la fosfolipasa A₂"],a:0,
 cita:"• Disminución de la adherencia y quimiotaxis de neutrófilos.\n• Inhibición de la degranulación de mastocitos y basófilos.\n• Inhibición indirecta de la actividad de la fosfolipasa A₂."},
{doc:"t3-aines",p:4,q:"Paracetamol y metamizol (dipirona):",o:[
 "Son excelentes analgésicos y antipiréticos, con actividad antiinflamatoria prácticamente nula",
 "Son potentes antiinflamatorios, pero apenas tienen efecto analgésico ni antipirético",
 "Son buenos antiinflamatorios y antipiréticos, pero no sirven como analgésicos",
 "Son los AINEs más gastrolesivos, por eso se reservan para el dolor intenso"],a:0,
 cita:"Excepciones: El paracetamol y el metamizol (dipirona) son excelentes analgésicos y antipiréticos, pero poseen una actividad antiinflamatoria prácticamente nula."},
{doc:"t3-aines",p:4,q:"¿Por qué se dice que los AINEs son «antiálgicos» más que analgésicos puros?",o:[
 "Porque impiden que las PGs sensibilicen los nociceptores; si el dolor ya está en su pico, lo revierten mal",
 "Porque bloquean directamente la transmisión del dolor en la médula espinal, como los opioides",
 "Porque son eficaces en cualquier dolor, incluido un cólico masivo que ya está instaurado",
 "Porque solo alivian el dolor de origen visceral y nunca el somático o periférico"],a:0,
 cita:"Los AINEs son fármacos ANTIÁLGICOS más que analgésicos puros: Actúan impidiendo la sensibilización de los nociceptores periféricos por las prostaglandinas. Una vez que las prostaglandinas ya se han liberado masivamente y el dolor se encuentra plenamente establecido en su pico máximo (cefaleas severas instauradas o dolor cólico masivo), la capacidad de los AINEs para revertir el dolor es muy reducida."},
{doc:"t3-aines",p:4,q:"Los AINEs son eficaces sobre todo en el dolor:",o:[
 "Leve a moderado, somático o periférico (artralgias, mialgias, cefaleas, dolor dental o posoperatorio)",
 "Intenso de cualquier origen, incluido el cólico visceral masivo, porque no tienen techo de dosis",
 "Neuropático de origen central, porque actúan sobre todo en la médula espinal y el tálamo",
 "Exclusivamente visceral, como el del cólico, porque relajan el músculo liso del intestino"],a:0,
 cita:"Los AINEs son eficaces en el tratamiento del dolor de intensidad leve a moderada, de origen predominantemente somático o periférico (artralgias, mialgias, cefaleas, dolor dental, dolor postoperatorio somático)."},
{doc:"t3-aines",p:4,q:"¿Qué es el efecto techo (dosis techo) de los AINEs?",o:[
 "Pasada cierta dosis no aumentan la analgesia ni la antiinflamación, solo la toxicidad",
 "Con el uso prolongado pierden eficacia, y hay que ir subiendo la dosis (tolerancia)",
 "A más dosis, siempre más analgesia, hasta llegar a igualar a los opioides más potentes",
 "Es la dosis mínima por debajo de la cual ya no tienen ningún efecto antipirético"],a:0,
 cita:"Dosis Techo (Efecto Techo): Existe un límite terapéutico a partir del cual el incremento de la dosis NO produce mayor analgesia ni antiinflamación, sino que únicamente multiplica de forma exponencial la toxicidad y las reacciones adversas."},
{doc:"t3-aines",p:4,q:"Tratamiento crónico con AINEs:",o:[
 "No produce tolerancia ni dependencia física, a diferencia de los opioides",
 "Produce tolerancia a los pocos meses, por eso hay que ir subiendo la dosis",
 "Produce dependencia física y un síndrome de abstinencia al retirarlo",
 "Produce tolerancia al efecto antiinflamatorio, pero no al analgésico"],a:0,
 cita:"Ausencia de tolerancia: A diferencia de los analgésicos opioides, el tratamiento crónico con AINEs no produce tolerancia ni dependencia física."},
{doc:"t3-aines",p:5,q:"Según tu profesora, ¿qué asociaciones quedan estrictamente prohibidas en la clínica?",o:[
 "Dos o más AINEs entre sí, y un AINE con un glucocorticoide",
 "Un AINE con omeprazol, y un AINE con misoprostol",
 "Un AINE con un opioide, y un AINE con fluidoterapia",
 "Dos o más AINEs entre sí, y un AINE con omeprazol"],a:0,
 cita:"Queda estrictamente prohibido en la práctica clínica:\n• Asociar dos o más AINEs entre sí: No aporta ningún beneficio terapéutico y multiplica exponencialmente la toxicidad renal y la lesión erosiva gastrointestinal.\n• Asociar un AINE con un Glucocorticoide: Al actuar sobre la misma cascada de mediadores lipídicos, la combinación desencadena ulceración gástrica severa y perforación intestinal."},
{doc:"t3-aines",p:5,q:"Caso clínico citado por la profesora: un perro operado recibe ibuprofeno y un glucocorticoide a la vez. ¿Qué ocurrió?",o:[
 "Murió a los pocos días por hemorragia digestiva masiva y perforación intestinal; se consideró mala praxis",
 "Desarrolló un Cushing iatrogénico a los pocos días, que se corrigió al retirar el glucocorticoide",
 "Hizo una insuficiencia renal aguda, que se recuperó por completo con fluidoterapia",
 "No pasó nada: la asociación es segura en el posoperatorio si se da junto con la comida"],a:0,
 cita:"Caso clínico de examen citado por la profesora: Administración concomitante de ibuprofeno y glucocorticoides en un paciente canino tras una intervención quirúrgica. El paciente falleció a los pocos días por hemorragia digestiva masiva y perforación intestinal, derivando en responsabilidad legal por mala praxis veterinaria."},
{doc:"t3-aines",p:5,q:"Mecanismo de la fiebre que bloquean los AINEs:",o:[
 "IL-1, TNF-α e IL-6 actúan sobre el OVLT del área preóptica e inducen PGE₂, que sube el «termostato» hipotalámico",
 "Las bacterias liberan PGE₂ directamente en la sangre y esta actúa sobre las glándulas sudoríparas",
 "La histamina de los mastocitos actúa sobre receptores H1 del hipotálamo posterior y sube la temperatura",
 "Los leucotrienos del foco activan el centro del calor del bulbo raquídeo a través de la 5-lipoxigenasa"],a:0,
 cita:"Mecanismo: Los pirógenos exógenos (bacterias, virus) estimulan a los leucocitos para liberar citoquinas pirógenas endógenas (IL-1, TNF-α, IL-6). Éstas actúan sobre el órgano vascular de la lámina terminal (OVLT) en el área preóptica del hipotálamo anterior, induciendo la síntesis de PGE₂. La PGE₂ reajusta el \"termostato\" hipotalámico a un nivel superior. Los AINEs bloquean esta síntesis, desencadenando vasodilatación cutánea y sudoración para disipar calor."},
{doc:"t3-aines",p:5,q:"¿Bajan los AINEs la temperatura corporal normal?",o:[
 "No: reducen la fiebre sin alterar la temperatura normal ni dar hipotermia (salvo en el modelo murino de laboratorio)",
 "Sí: a dosis altas producen hipotermia en todas las especies, por eso hay que vigilar la temperatura",
 "Sí, pero solo el paracetamol, porque actúa sobre la COX-3 del hipotálamo anterior",
 "No en perros y gatos, pero sí en caballos y rumiantes, que tienen el termostato más bajo"],a:0,
 cita:"Los AINEs reducen la temperatura corporal en cuadros de fiebre o pirexia, sin alterar la temperatura corporal fisiológica normal ni provocar hipotermia (salvo en el modelo de laboratorio murino)."},
{doc:"t3-aines",p:5,q:"Hipertermia no febril (golpe de calor, estatus epiléptico, hipertermia maligna o metabólica):",o:[
 "Los AINEs son ineficaces: no bajan la temperatura y además agravan el daño renal",
 "Los AINEs son el tratamiento de elección, igual que en la fiebre por infección",
 "Solo el paracetamol es eficaz, porque actúa en el centro termorregulador",
 "Los AINEs funcionan si se dan por vía intravenosa y a dosis altas"],a:0,
 cita:"Los AINEs son completamente INEFICACES para tratar la hipertermia no febril, es decir, elevaciones de la temperatura corporal no mediadas por citoquinas ni prostaglandinas centralizadas.\n• Ejemplos de hipertermia no febril refractaria a AINEs: Golpe de calor (ejercicio físico intenso o temperatura ambiental extrema), estatus epiléptico, hipertermia maligna o hipertermia metabólica. En estos casos, la administración de AINEs no reduce la temperatura y agrava el daño renal."},
{doc:"t3-aines",p:5,q:"Actividad uricosúrica de algunos AINEs:",o:[
 "Salicilatos, fenilbutazona y sulfinpirazona favorecen la excreción de ácido úrico; útiles en la gota (dálmata, aves)",
 "Todos los AINEs retienen ácido úrico y están contraindicados en los dálmatas por el riesgo de gota",
 "Solo los coxibs aumentan la excreción de ácido úrico, y por eso se usan en la gota de las aves",
 "El paracetamol y el metamizol son los uricosúricos de elección en la gota del perro dálmata"],a:0,
 cita:"Ciertos AINEs a dosis específicas (salicilatos, fenilbutazona, sulfinpirazona) inhiben el transporte de urato en el túbulo renal, favoreciendo la excreción de ácido úrico por la orina. Presenta indicación en patologías hiperuricémicas como la gota (frecuente en razas caninas como el Dálmata o en patología aviar)."},

/* ---------- 4. Farmacocinética ---------- */
{doc:"t3-aines",p:6,q:"Absorción de los AINEs. Señala la opción CORRECTA:",o:[
 "Son ácidos débiles (pKa 3,5-5,5); se absorben rápido en el estómago y sobre todo en el intestino delgado, y las sales sódicas o meglumínicas la aceleran",
 "Son bases débiles (pKa 8-10); se absorben sobre todo en el colon, y las sales sódicas o meglumínicas retrasan su absorción oral",
 "Son ácidos débiles (pKa 3,5-5,5); solo se absorben en el estómago, porque en el intestino delgado están ionizados",
 "Son ácidos fuertes (pKa menor de 2); casi no se absorben por boca y por eso se dan sobre todo inyectados"],a:0,
 cita:"La mayoría de los AINEs son ácidos orgánicos débiles (pKa entre 3.5 y 5.5). Se absorben con rapidez en el estómago y, fundamentalmente por mayor superficie, en el intestino delgado. La formulación en forma de sales sódicas o meglumínicas incrementa la solubilidad hidrofílica y acelera la absorción oral."},
{doc:"t3-aines",p:6,q:"Volumen de distribución de los AINEs:",o:[
 "Muy bajo (unos 0,1-0,2 L/kg), por su elevada unión a la albúmina (más del 95-99 %)",
 "Muy alto (más de 5 L/kg), porque se acumulan en la grasa y en el músculo",
 "Intermedio (unos 0,6 L/kg), igual al agua corporal, porque apenas se unen a proteínas",
 "Muy bajo, porque se eliminan casi enteros por el riñón antes de distribuirse"],a:0,
 cita:"Los AINEs presentan un Volumen de Distribución (Vd) extremadamente bajo (aproximadamente 0.1 – 0.2 L/kg), debido a su elevada fijación a las proteínas plasmáticas (albúmina > 95 - 99%). En condiciones normales, esto restringiría su presencia al espacio intravascular."},
{doc:"t3-aines",p:6,q:"¿Por qué los AINEs alcanzan concentraciones altas y prolongadas en el tejido inflamado?",o:[
 "Por la salida de albúmina con el AINE al aumentar la permeabilidad, y por el atrapamiento iónico en el foco ácido",
 "Por la alcalosis local del foco, que los ioniza nada más llegar y los deja atrapados en el intersticio",
 "Porque en el foco hay menos albúmina, así que se unen menos a las proteínas y difunden mucho mejor",
 "Porque la COX-2 inducida los transporta de forma activa al interior de las células inflamatorias"],a:0,
 cita:"1. Trasudación de proteínas: En el foco inflamatorio aumenta drásticamente la permeabilidad vascular, permitiendo la salida masiva de albúmina unida al AINE hacia el intersticio.\n2. Atrapamiento Iónico (Ion Trapping): El microambiente del tejido inflamado presenta una acidosis local (pH bajo). Al ingresar el AINE (ácido débil) en este medio ácido, se protona a su forma no ionizada lipofílica. Dentro de las células o matriz inflamatoria, se ioniza nuevamente y queda atrapado irreversiblemente, alcanzando concentraciones terapéuticas elevadas y prolongadas en el sitio de la lesión."},
{doc:"t3-aines",p:6,q:"Un AINE junto a un anticoagulante cumarínico (warfarina):",o:[
 "Lo desplaza de la albúmina: su fracción libre puede duplicarse o triplicarse y causar diátesis hemorrágica",
 "Acelera su metabolismo en el hígado y reduce su efecto, así que aumenta el riesgo de trombosis",
 "No interacciona, porque el AINE se une a la albúmina y la warfarina solo a las globulinas",
 "Lo desplaza de la albúmina, pero la fracción libre se elimina enseguida y no tiene consecuencias"],a:0,
 cita:"Debido a su altísima afinidad por la albúmina plasmática, la administración de AINEs junto a otros fármacos con elevada unión proteica (como los anticoagulantes cumarínicos / warfarina) provoca un desplazamiento competitivo.\nAl desplazar al anticoagulante, la fracción libre activa del anticoagulante puede duplicarse o triplicarse, desencadenando cuadros graves de diátesis hemorrágica e intoxicación incoagulable."},
{doc:"t3-aines",p:7,q:"La vida media de los AINEs suele ser independiente de la dosis. ¿Cuáles son las dos excepciones de examen?",o:[
 "La fenilbutazona en el caballo y el perro, y el ácido acetilsalicílico (y salicilatos) en el gato",
 "El paracetamol en el perro por saturación hepática, y el meloxicam en el caballo",
 "El flunixino en la vaca por su ciclo enterohepático, y el ibuprofeno en el gato",
 "Los coxibs en todas las especies, y el metamizol en el caballo y en el burro"],a:0,
 cita:"Por regla general, la vida media de eliminación de un AINE es independiente de la dosis administrada. Sin embargo, existen dos excepciones fundamentales de examen:\n1. Fenilbutazona en el caballo y en el perro (cinética dosis-dependiente por saturación metabólica).\n2. Ácido Acetilsalicílico (y salicilatos) en el GATO: Los felinos presentan una deficiencia congénita en las enzimas glucuroniltransferasas (incapacidad para la glucuronoconjugación hepática)."},
{doc:"t3-aines",p:7,q:"Vida media del ácido acetilsalicílico en el gato:",o:[
 "22-45 horas (frente a 4-8 h en otras especies), por su déficit de glucuroniltransferasas",
 "1-2 horas, porque el gato glucuronida muy deprisa los salicilatos en el hígado",
 "4-8 horas, igual que en el perro, porque su eliminación no depende de la glucuronidación",
 "Más de una semana, y por eso está prohibida a cualquier dosis en todos los gatos"],a:0,
 cita:"La vida media de la aspirina en el gato se prolonga a 22 – 45 horas (frente a 4-8 horas en otras especies)."},
{doc:"t3-aines",p:7,q:"Aspirina y paracetamol en el gato:",o:[
 "La aspirina puede usarse con la dosis reducida y cada 48 h; el paracetamol está contraindicado a cualquier dosis",
 "Los dos están prohibidos a cualquier dosis, porque el gato no glucuronida ninguno de los dos",
 "El paracetamol puede usarse cada 48 h a dosis bajas; la aspirina está prohibida a cualquier dosis",
 "Los dos pueden usarse a la misma dosis que en el perro, siempre que se den con comida"],a:0,
 cita:"Aspirina vs. Paracetamol en gatos: La aspirina NO está absolutamente prohibida en el gato, siempre que se reduzca la dosis y se espacie la pauta de administración a una vez cada 48 horas.\nPor el contrario, el PARACETAMOL es infinitamente más tóxico y mortal en la especie felina, estando estrictamente contraindicado a cualquier dosis."},

/* ---------- 5. Toxicología y reacciones adversas ---------- */
{doc:"t3-aines",p:7,q:"Toxicidad renal de los AINEs. Señala la opción CORRECTA:",o:[
 "Bajan el flujo renal y la filtración, sobre todo con hipovolemia o ICC, y causan hipertensión e hiperpotasemia",
 "Aumentan el flujo renal y la filtración, con hipotensión e hipopotasemia por la pérdida de sodio",
 "Bajan el flujo renal solo en animales sanos; en los pacientes con ICC o hipovolemia lo protegen",
 "Producen hipertensión e hipopotasemia, porque estimulan la liberación de renina y aldosterona"],a:0,
 cita:"Las prostaglandinas PGE₂ y PGI₂ sintetizadas en el riñón mantienen la vasodilatación de la arteriola aferente. Su bloqueo por AINEs produce:\n• Reducción del flujo sanguíneo renal (FSR) y de la tasa de filtración glomerular (TFG), especialmente crítica en pacientes con hipotensión, hipovolemia, insuficiencia cardíaca congestiva o nefropatía previa.\n• Hipertensión arterial e Hiperpotasemia: Derivadas de la retención de sodio y agua y de la inhibición indirecta de la liberación de renina y aldosterona."},
{doc:"t3-aines",p:7,q:"Interacciones de los AINEs con diuréticos y antihipertensivos:",o:[
 "Reducen o anulan el efecto de la furosemida y de los antihipertensivos (IECA, β-bloqueantes)",
 "Potencian el efecto de la furosemida y de los IECA, con riesgo de hipotensión grave",
 "No interaccionan con ellos, porque actúan sobre mecanismos completamente distintos",
 "Solo reducen el efecto de los β-bloqueantes; con la furosemida y los IECA no interaccionan"],a:0,
 cita:"Interacciones: Los AINEs reducen o anulan el efecto de los diuréticos (furosemida) y de los antifármacos antihipertensivos (IECAs, betabloqueantes)."},
{doc:"t3-aines",p:7,q:"Cuadros renales por AINEs:",o:[
 "Nefropatía aguda (necrosis papilar reversible con fluidoterapia) y nefropatía intersticial crónica (irreversible)",
 "Nefropatía aguda irreversible y nefropatía intersticial crónica, que se revierte con fluidoterapia",
 "Solo litiasis renal por cristales de ácido úrico, que desaparece al retirar el AINE",
 "Síndrome nefrótico con pérdida masiva de proteínas, que se cura con glucocorticoides"],a:0,
 cita:"Cuadros clínicos: Nephropatía aguda (necrosis papilar reversible con fluidoterapia) y Nephropatía intersticial crónica (irreversible)."},
{doc:"t3-aines",p:7,q:"El efecto adverso más frecuente de los AINEs es:",o:[
 "La gastrolesividad: sin PGE₂ la mucosa pierde moco y bicarbonato y aumenta el HCl",
 "La toxicidad renal, que aparece en casi todos los pacientes desde la primera dosis",
 "La hepatotoxicidad, por la formación de NAPQI en el hígado de todas las especies",
 "Las reacciones alérgicas graves, sobre todo en los perros y en los caballos"],a:0,
 cita:"Es el efecto adverso más frecuente. La supresión de PGE₂ priva a la mucosa de su barrera citoprotectora de moco y bicarbonato, incrementando la secreción de HCl y produciendo agresión directa sobre la microcirculación gástrica."},
{doc:"t3-aines",p:8,q:"Protocolo de gastroprotección con AINEs según tu profesora. Señala la opción CORRECTA:",o:[
 "IBP (omeprazol) de elección para prevenir; misoprostol si ya hubo úlcera; antiH2 si la forma entérica lesiona el duodeno",
 "Misoprostol de elección para prevenir; IBP si ya hubo úlcera; antiH2 si el AINE se da por vía intravenosa",
 "AntiH2 de elección para prevenir; IBP si la forma entérica lesiona el duodeno; misoprostol solo en gatos",
 "No hace falta gastroprotección en los tratamientos largos si el AINE se da siempre junto con la comida"],a:0,
 cita:"En tratamientos prolongados con AINEs o en pacientes con riesgo ulcerogénico, es obligatorio pautar gastroprotección específica:\n1. Inhibidores de la Bomba de Protones (IBP — Omeprazol): De elección para la prevención de erosiones y úlceras gástricas y duodenales.\n2. Análogos sintéticos de PGE₁ (Misoprostol): Específicamente indicados para restituir la protección de la mucosa gástrica y tratar úlceras inducidas por AINEs en pacientes con historial previo.\n3. Antagonistas H₂ (Ranitidina, Cimetidina): Especialmente útiles cuando se emplean formulaciones galénicas de liberación entérica que producen lesión en el duodeno."},
{doc:"t3-aines",p:8,q:"El misoprostol es:",o:[
 "Un análogo sintético de la PGE₁ que restituye la protección de la mucosa gástrica",
 "Un análogo luteolítico de la PGF2α que se usa para sincronizar los celos en vacas",
 "Un inhibidor de la bomba de protones, el de elección para prevenir las úlceras",
 "Un antagonista H₂ que se usa cuando las formas entéricas dañan el duodeno"],a:0,
 cita:"Análogos sintéticos de PGE₁ (Misoprostol): Específicamente indicados para restituir la protección de la mucosa gástrica y tratar úlceras inducidas por AINEs en pacientes con historial previo."},
{doc:"t3-aines",p:8,q:"Intoxicación por salicilatos (sobredosis de ácido acetilsalicílico):",o:[
 "Desacoplan la fosforilación oxidativa: primero alcalosis respiratoria por hiperventilación y después acidosis mixta",
 "Producen solo alcalosis metabólica, porque el ácido acetilsalicílico se elimina neutralizando el bicarbonato",
 "Deprimen el centro respiratorio desde el principio y producen hipotermia por la falta de ATP muscular",
 "Producen metahemoglobinemia por la formación de NAPQI, igual que el paracetamol en el gato"],a:0,
 cita:"En sobredosificaciones por ácido acetilsalicílico se produce un desacoplamiento de la fosforilación oxidativa en el músculo esquelético e hígado. Esto genera déficit de ATP, aumento del catabolismo e hipertermia. A nivel central, estimula en una primera fase el centro respiratorio (hiperventilación y alcalosis respiratoria), seguida de una depresión respiratoria profunda que desemboca en una acidosis mixta (metabólica y respiratoria) severa."},
{doc:"t3-aines",p:8,q:"¿Por qué el paracetamol es tan tóxico en el gato?",o:[
 "Sin glucuronoconjugación se desvía al citocromo P-450 y forma NAPQI, que agota el glutatión del hígado",
 "Porque el gato lo transforma en AM404 en el hígado, que bloquea los receptores CB₁ del corazón",
 "Porque se une con fuerza a la hemoglobina felina y la destruye directamente dentro de los vasos",
 "Porque el gato no tiene COX-1 en el estómago y el paracetamol le produce úlceras perforadas"],a:0,
 cita:"Fisiopatología de la toxicidad: Debido al déficit felino de glucuronoconjugación, el paracetamol se desvía masivamente hacia la vía del citocromo P-450, generando un metabolito reactivo altamente hepatotóxico y oxidante: N-acetil-p-benzoquinona imina (NAPQI). Al agotarse las reservas hepáticas de glutatión, el NAPQI libre causa oxidación lipídica y celular masiva."},
{doc:"t3-aines",p:8,q:"Cuadro clínico de la intoxicación por paracetamol en el gato:",o:[
 "Metahemoglobinemia (sangre color chocolate), anemia con cuerpos de Heinz, edema facial, ictericia y necrosis hepática",
 "Hipertermia, hiperventilación y acidosis mixta, sin cambios en la sangre ni en el hígado, como con la aspirina",
 "Úlcera gástrica sangrante con melena y anemia por pérdida de sangre, sin cianosis ni ictericia",
 "Hipoglucemia, bradicardia y convulsiones, con la sangre de color rojo brillante por exceso de oxígeno"],a:0,
 cita:"Cuadro Clínico Característico:\n1. Methemoglobinemia: El Fe²⁺ de la hemoglobina se oxida a Fe³⁺ (incapaz de transportar oxígeno). Clínicamente se aprecia cianosis severa y sangre de color marrón oscuro / chocolate.\n2. Anemia hemolítica y presencia de cuerpos de Heinz en los hematíes.\n3. Edema facial cianótico y edema en pabellones auriculares.\n4. Ictericia, hemoglobinuria y necrosis hepática fulminante."},
{doc:"t3-aines",p:8,q:"En la metahemoglobinemia por paracetamol, el hierro de la hemoglobina:",o:[
 "Pasa de Fe²⁺ a Fe³⁺ y ya no puede transportar oxígeno",
 "Pasa de Fe³⁺ a Fe²⁺ y se une al oxígeno con más fuerza",
 "Se une al NAPQI y se elimina por la orina",
 "No cambia: lo que se altera es la globina"],a:0,
 cita:"Methemoglobinemia: El Fe²⁺ de la hemoglobina se oxida a Fe³⁺ (incapaz de transportar oxígeno)."},
{doc:"t3-aines",p:8,q:"Tratamiento antidotal de la intoxicación por paracetamol en el gato:",o:[
 "N-acetilcisteína IV u oral, mejor en las primeras 8 h: es precursora del glutatión y neutraliza el NAPQI",
 "Vitamina K₁ por vía oral durante semanas, porque el paracetamol bloquea la coagulación",
 "Atropina por vía intravenosa, porque el paracetamol produce un cuadro muscarínico grave",
 "Naloxona por vía intravenosa, porque el AM404 actúa como un opioide en el gato"],a:0,
 cita:"Tratamiento Antidotal de Elección:\n• Administración inmediata de N-ACETILCISTEÍNA por vía intravenosa u oral (idealmente dentro de las primeras 8 horas post-ingestión).\n• Mecanismo del antídoto: La N-acetilcisteína actúa como precursor directo en la síntesis de glutatión endógeno y aporta grupos sulfhidrilo que neutralizan el metabolito tóxico NAPQI, salvando la vida del animal."},
{doc:"t3-aines",p:8,q:"Fenilbutazona en el caballo. Vía de administración:",o:[
 "Solo oral o intravenosa estricta: por vía IM o SC produce necrosis tisular y miositis graves",
 "Preferiblemente intramuscular, porque la vía intravenosa produce convulsiones y ceguera",
 "Subcutánea, porque así se absorbe más despacio y se evita la toxicidad renal y gástrica",
 "Cualquier vía, porque la fenilbutazona no irrita los tejidos ni produce necrosis"],a:0,
 cita:"Fenilbutazona en Caballos: Su administración vía intramuscular o subcutánea está estrictamente contraindicada al producir necrosis tisular y miositis severa. Debe ser por vía oral o intravenosa estricta."},
{doc:"t3-aines",p:8,q:"Inyección intracarotídea accidental de fenilbutazona en el caballo:",o:[
 "Convulsiones, ceguera irreversible y muerte súbita",
 "Solo una cojera pasajera por irritación local",
 "Una úlcera gástrica a las pocas horas",
 "Hipotermia y bradicardia que ceden en minutos"],a:0,
 cita:"Peligro de administración intracarotídea accidental: La inyección accidental de fenilbutazona en la arteria carótida del caballo desencadena convulsiones del SNC, ceguera irreversible y muerte súbita."},
/* ---------- Mediadores eicosanoides e inicio del Tema 3 (doc t2-eicosanoides) ---------- */
{doc:"t2-eicosanoides",t:2,p:1,q:"Según tus apuntes, los eicosanoides:",o:[
 "Son autacoides de vida media muy corta (unos 8 minutos) derivados de ácidos grasos de 20 carbonos, sobre todo el ácido araquidónico",
 "Son hormonas de vida media larga (unas 8 horas) que se almacenan en los gránulos de los mastocitos y basófilos",
 "Derivan de aminoácidos como la histidina y el triptófano, y se liberan por exocitosis desde las plaquetas",
 "Se forman a partir del colesterol por la fosfolipasa C y circulan unidos a la albúmina durante varios días"],a:0,
 cita:"Los eicosanoides son autóctonos de vida media muy corta (aproximadamente 8 minutos) derivados de ácidos grasos poliinsaturados de 20 carbonos, principalmente el ácido araquidónico liberado de los fosfolípidos de membrana por acción de la fosfolipasa A2 (PLA2)."},
{doc:"t2-eicosanoides",t:2,p:1,q:"¿Qué enzima libera el ácido araquidónico de los fosfolípidos de membrana?",o:[
 "La fosfolipasa A₂ (PLA₂)","La ciclooxigenasa 1 (COX-1)","La 5-lipoxigenasa (5-LOX)","La enzima conversora de angiotensina"],a:0,
 cita:"…principalmente el ácido araquidónico liberado de los fosfolípidos de membrana por acción de la fosfolipasa A2 (PLA2)."},
{doc:"t2-eicosanoides",t:2,p:1,q:"Según tus apuntes, la COX-2 se induce por:",o:[
 "Estímulos inflamatorios, citocinas (IL-1, TNF-α), hipoxemia o traumatismos tisulares",
 "La PGE₂ y el moco protector que segrega la mucosa gástrica",
 "Los glucocorticoides y la lipocortina (anexina-1) que estos inducen",
 "La agregación plaquetaria y el tromboxano A₂ que liberan las plaquetas"],a:0,
 cita:"Ciclooxigenasa 2 (COX-2): Enzima inducible por estímulos inflamatorios, citocinas (como IL-1 y TNF-α), hipoxemia o traumatismos tisulares. Su expresión aumenta significativamente en procesos patológicos provocando la cascada proinflamatoria."},
{doc:"t2-eicosanoides",t:2,p:1,q:"Según la profesora, el uso prolongado de AINEs o glucocorticoides:",o:[
 "Reduce la PGE₂ protectora del estómago (menos moco y bicarbonato) y obliga a asociar un protector gástrico o un IBP",
 "Aumenta la PGE₂ gástrica, así que no hace falta ningún protector salvo en los gatos de edad avanzada",
 "Solo daña el estómago si se da por vía oral; si se inyecta, no hace falta añadir ningún protector",
 "Reduce la secreción ácida del estómago, así que protege frente a la úlcera y la peritonitis séptica"],a:0,
 cita:"La inhibición de la isoforma constitutiva COX-1 mediante el uso prolongado de AINEs o glucocorticoides reduce la síntesis protectora de PGE2 en el estómago. Esto compromete la secreción de moco e hidrogenocarbonato, favoreciendo la aparición de gastritis y úlceras perforadas (con riesgo de peritonitis séptica). Ante tratamientos continuados, es imprescindible asociar un protector gástrico o un inhibidor de la bomba de protones (IBP)."},
{doc:"t2-eicosanoides",t:2,p:1,q:"Los cisteinil-leucotrienos (LTC₄, LTD₄, LTE₄):",o:[
 "Contienen cisteína y forman la sustancia de reacción lenta de la anafilaxia (SRS-A)",
 "Son los leucotrienos A₄ y B₄, y forman la sustancia de reacción lenta de la anafilaxia",
 "Se forman por la COX-2 y son potentes vasodilatadores y antiagregantes plaquetarios",
 "Son quimiotácticos de eosinófilos y regulan la adhesión endotelial, como las lipoxinas"],a:0,
 cita:"Cisteinil-Leucotrienos (LTC4, LTD4, LTE4): Contienen el aminoácido cisteína en su estructura. Constituyen la denominada Sustancia de Reacción Lenta de la Anafilaxia (SRS-A)."},
{doc:"t2-eicosanoides",t:2,p:1,q:"Según tus apuntes, el leucotrieno B₄ (LTB₄) actúa como:",o:[
 "Potente factor quimiotáctico para macrófagos y neutrófilos",
 "Componente de la sustancia de reacción lenta de la anafilaxia",
 "Regulador de la adhesión endotelial y de la quimiotaxis de eosinófilos",
 "Potente broncodilatador, mil veces más que la adrenalina"],a:0,
 cita:"Leucotrieno LTB4: Actúa como un potente factor quimiotáctico para macrófagos y neutrófilos."},
{doc:"t2-eicosanoides",t:2,p:1,q:"Lipoxinas (LXA₄, LXB₄):",o:[
 "Se sintetizan por la 12-LOX y regulan la adhesión endotelial y la quimiotaxis de eosinófilos",
 "Se sintetizan por la COX-1 y protegen la mucosa gástrica junto con la PGE₂ y la PGI₂",
 "Forman, junto con el LTB₄, la sustancia de reacción lenta de la anafilaxia (SRS-A)",
 "Se sintetizan por la 5-LOX y son los broncoconstrictores más potentes que se conocen"],a:0,
 cita:"Lipoxinas (LXA4, LXB4): Sintetizadas por acción de la 12-LOX, regulan la adhesión endotelial y la quimiotaxis de eosinófilos."},
{doc:"t2-eicosanoides",t:2,p:1,q:"Según la profesora, la capacidad broncoconstrictora del LTC₄ y el LTD₄ es:",o:[
 "Unas 1.000 veces superior a la de la histamina; son clave en el asma y el shock anafiláctico",
 "Unas 10 veces inferior a la de la histamina; por eso apenas intervienen en el asma",
 "Igual a la de la histamina, porque actúan sobre el mismo receptor H1 de los bronquios",
 "Nula: los leucotrienos son broncodilatadores y protegen frente a la crisis asmática"],a:0,
 cita:"Los cisteinil-leucotrienos LTC4 y LTD4 poseen una capacidad broncoconstrictora 1.000 veces superior a la de la histamina. Tienen un protagonismo crítico en el desencadenamiento del asma bronquial y en las reacciones de shock anafiláctico (\"¡Ojito con esto!\")."},
{doc:"t2-eicosanoides",t:2,p:2,q:"Según la tabla de tus apuntes, la PGE₂ y la prostaciclina (PGI₂) producen en los bronquios y en las plaquetas:",o:[
 "Broncodilatación y disminución de la agregación","Broncoconstricción y aumento de la agregación","Broncodilatación y aumento de la agregación","Broncoconstricción y disminución de la agregación"],a:0,
 cita:"Prostaglandina E2 (PGE2): Relajación (Broncodilatación) · Contracción (Especialmente en útero grávido) · Disminuye secreción ácida; aumenta moco y peristaltismo · Vasodilatación arteriolar · Disminuye agregación.\nProstaciclina (PGI2): Relajación (Broncodilatación) · Relajación muscular · Disminuye secreción ácida; citoprotección · Vasodilatación potente · Disminuye agregación."},
{doc:"t2-eicosanoides",t:2,p:2,q:"Según la tabla de tus apuntes, el tromboxano A₂ produce:",o:[
 "Broncoconstricción, vasoconstricción potente y aumento de la agregación plaquetaria",
 "Broncodilatación, vasodilatación potente y disminución de la agregación plaquetaria",
 "Broncoconstricción, vasodilatación arteriolar y disminución de la agregación plaquetaria",
 "Relajación uterina, vasoconstricción potente y efecto neutro sobre las plaquetas"],a:0,
 cita:"Tromboxano A2 (TXA2): Contracción (Broncoconstricción) · Contracción · Contracción · Vasoconstricción potente · Aumenta agregación."},
{doc:"t2-eicosanoides",t:2,p:2,q:"Según la tabla de tus apuntes, la PGF₂α:",o:[
 "Contrae bronquios y útero (luteólisis, parto) y aumenta el peristaltismo; su efecto vascular es variable",
 "Relaja bronquios y útero, disminuye el peristaltismo y produce una vasodilatación arteriolar potente",
 "Contrae los bronquios pero relaja el útero, y aumenta mucho la agregación de las plaquetas",
 "Produce una vasodilatación potente, relaja los bronquios y disminuye la agregación plaquetaria"],a:0,
 cita:"Prostaglandina F2α (PGF2α): Contracción (Broncoconstricción) · Contracción potente (Luteólisis / Parto) · Aumenta contracción y peristaltismo · Variable · Neutral / Variable."},
{doc:"t2-eicosanoides",t:2,p:2,q:"Según la tabla de tus apuntes, la PGE₂ en el tubo digestivo y en el útero:",o:[
 "Disminuye la secreción ácida, aumenta el moco y el peristaltismo, y contrae el útero (sobre todo el grávido)",
 "Aumenta la secreción ácida, reduce el moco y relaja el útero grávido para mantener la gestación",
 "Disminuye el peristaltismo y la secreción de moco, y no tiene ninguna acción sobre el útero",
 "Aumenta la secreción ácida y el peristaltismo, y relaja el útero tanto grávido como no grávido"],a:0,
 cita:"Prostaglandina E2 (PGE2): Relajación (Broncodilatación) · Contracción (Especialmente en útero grávido) · Disminuye secreción ácida; aumenta moco y peristaltismo · Vasodilatación arteriolar · Disminuye agregación."},
{doc:"t2-eicosanoides",t:2,p:2,q:"Metabolismo de las prostaglandinas. Señala la CORRECTA:",o:[
 "La mayoría sale de la célula por el transportador PGT; la PGI₂ no lo usa y se inactiva sola en la sangre",
 "Todas usan el transportador PGT y se inactivan sobre todo en el riñón, con vidas medias de horas",
 "La PGI₂ es la única que se inactiva en el pulmón, y por eso su efecto dura varias horas",
 "No necesitan ningún transportador y tienen vidas medias largas, de varias horas o días"],a:0,
 cita:"• Transporte Facilitado: La mayoría de prostaglandinas se liberan mediante un transportador específico de eicosanoides (PGT).\n• Excepción de la Prostaciclina (PGI2): No utiliza el transportador PGT, no sufre biotransformación pulmonar y se inactiva de forma espontánea a nivel sanguíneo.\n• Biotransformación: Tienen vidas medias muy cortas (menores a 10 minutos) y sufren inactivación enzimática principalmente en el pulmón e hígado.",
 n:"En el Tema 2 completo (p. 29) la vida media es «inferior a 8 minutos» (tu anotación: «muy baja»)."},
{doc:"t2-eicosanoides",t:2,p:2,q:"¿Dónde se inactivan sobre todo las prostaglandinas y cuánto dura su vida media?",o:[
 "En el pulmón y el hígado; vida media menor de 10 minutos",
 "En el riñón; vida media de unas 8 horas",
 "En la sangre, por la PLA₂; vida media de varios días",
 "En el estómago; vida media de unos 30 minutos"],a:0,
 cita:"Biotransformación: Tienen vidas medias muy cortas (menores a 10 minutos) y sufren inactivación enzimática principalmente en el pulmón e hígado.",
 n:"En el Tema 2 completo (p. 29) la vida media es «inferior a 8 minutos» (tu anotación: «muy baja»)."},
{doc:"t2-eicosanoides",t:2,p:2,q:"Misoprostol, según tus apuntes:",o:[
 "Análogo de PGE₁/PGE₂ que previene lesiones gastroduodenales en tratamientos crónicos con AINEs o corticoides",
 "Análogo de PGF₂α que baja la presión intraocular y es el tratamiento de elección del glaucoma canino",
 "Análogo de PGI₂ que se usa como antiagregante en la hemodiálisis para evitar trombos en el circuito",
 "Análogo de PGE₁ que mantiene abierto el ductus arteriosus en neonatos con cardiopatías congénitas"],a:0,
 cita:"Misoprostol (análogo sintético de PGE1 / PGE2): Indicado para prevenir lesiones gastroduodenales en pacientes sometidos a tratamientos crónicos con AINEs o corticoides."},
{doc:"t2-eicosanoides",t:2,p:2,q:"Alprostadil (análogo de PGE₁):",o:[
 "Mantiene abierto el ductus arteriosus en neonatos con cardiopatías; puede darse a la madre antes del parto",
 "Cierra el ductus arteriosus persistente en los neonatos prematuros, igual que hacen los AINEs",
 "Es un antiagregante que se usa en la hemodiálisis para evitar los trombos en el circuito extracorpóreo",
 "Reduce la presión intraocular estimulando el drenaje del humor acuoso por la vía uveoescleral"],a:0,
 cita:"Alprostadil (análogo de PGE1): Utilizado para mantener la permeabilidad del ductus arteriosus en neonatos con cardiopatías congénitas ducto-dependientes.\nEl Alprostadil puede administrarse a la madre durante la etapa gestacional previa al parto cuando se detectan malformaciones congénitas fetales, asegurando así que el conducto arterioso permanezca abierto hasta la cirugía."},
{doc:"t2-eicosanoides",t:2,p:3,q:"Epoprostenol (análogo de PGI₂):",o:[
 "Antiagregante plaquetario en la hemodiálisis, para evitar trombos en el circuito extracorpóreo",
 "Inductor de la maduración del cuello uterino y del parto, asociado a la mifepristona",
 "Gastroprotector en los tratamientos crónicos con AINEs o con glucocorticoides",
 "Luteolítico que se usa para sincronizar los celos en las vacas y las yeguas"],a:0,
 cita:"Epoprostenol (análogo de PGI2): Utilizado como antiagregante plaquetario durante procedimientos de hemodiálisis para evitar la formación de trombos en el circuito extracorpóreo."},
{doc:"t2-eicosanoides",t:2,p:3,q:"Latanoprost (análogo de PGF₂α):",o:[
 "Baja la presión intraocular estimulando el drenaje del humor acuoso por la vía uveoescleral; de elección en el glaucoma canino",
 "Baja la presión intraocular reduciendo la producción de humor acuoso, igual que un β-bloqueante en colirio",
 "Es un luteolítico de larga duración que se usa para sincronizar los celos en las yeguas y las vacas",
 "Mantiene abierto el ductus arteriosus en los cachorros con cardiopatías congénitas hasta la cirugía"],a:0,
 cita:"Latanoprost (análogo de PGF2α): Indicado en el glaucoma de ángulo cerrado para reducir la presión intraocular (PIO) mediante el estímulo del drenaje del humor acuoso por la vía uveoescleral.\n…\nLatanoprost en perros: Tratamiento de elección en el glaucoma canino.",
 n:"En el Tema 2 completo (p. 31-32) pone otra cosa sobre el tipo de glaucoma: en humana, «glaucoma de ángulo abierto, cuando otros fármacos están contraindicados»; en el perro, glaucoma agudo, como uno de los primeros fármacos a utilizar."},
{doc:"t2-eicosanoides",t:2,p:3,q:"Según la profesora, la hipertensión intraocular no controlada:",o:[
 "Lesiona el nervio óptico de forma irreversible y reduce el campo visual («visión en ojo de cerradura»)",
 "Produce cataratas reversibles, que desaparecen en cuanto se normaliza la presión del ojo con colirios",
 "Solo causa dolor ocular, sin pérdida de visión, así que basta con un analgésico para controlarla",
 "Provoca una miosis permanente y ceguera nocturna, pero el campo visual se mantiene intacto"],a:0,
 cita:"La hipertensión intraocular no controlada genera lesión irreversible del nervio óptico, reduciendo el campo visual progresivamente hasta provocar una \"visión en ojo de cerradura\" (visión tubular). El uso de Latanoprost frena este deterioro."},
{doc:"t2-eicosanoides",t:2,p:3,q:"Uso de las prostaglandinas en obstetricia (medicina humana), según tus apuntes:",o:[
 "Dinoprostona y misoprostol maduran el cuello e inducen el parto o el aborto (con mifepristona); los análogos de PGF₂α tratan la atonía uterina",
 "Dinoprostona y misoprostol relajan el útero y frenan los partos prematuros; los análogos de PGF₂α mantienen la gestación",
 "El misoprostol solo se usa como gastroprotector y está contraindicado en obstetricia; la dinoprostona es un tocolítico",
 "Los análogos de PGF₂α se usan para mantener la gestación, y la dinoprostona para cortar la hemorragia posparto"],a:0,
 cita:"Dinoprostona y Misoprostol: Inductores de la maduración cervical y del parto, o como fármacos abortivos (asociados a mifepristona).\nAnálogos de PGF2α: Tratamiento de la atonia uterina y hemorragias posparto."},
{doc:"t2-eicosanoides",t:2,p:3,q:"Cloprostenol en veterinaria. Señala la opción CORRECTA:",o:[
 "Luteólisis, celos, parto, expulsión de placentas o fetos momificados, metritis, piometra y libido del verraco",
 "Mantener la gestación, tratar el glaucoma canino, prevenir úlceras por AINEs y reducir la libido de los verracos",
 "Gastroprotección en tratamientos con AINEs, antiagregación en la hemodiálisis y apertura del ductus arteriosus",
 "Solo sincronización de celos en las vacas; en cerdas, yeguas, ovejas y cabras está prohibido por su toxicidad"],a:0,
 cita:"Cloprostenol (análogo sintético de PGF2α):\n○ Reproducción en hembras (vaca, cerda, yegua, oveja, cabra): Inducción de la luteólisis, sincronización de celos, inducción del parto a término y expulsión de placentas retenidas o fetos momificados.\n○ Tratamiento de patologías uterinas: Metritis y piometra, al estimular las contracciones uterinas para la evacuación de exudados.\n○ Andrología: Administración en berracos para estimular la libido reducida y optimizar el rendimiento de eyaculados en centros de inseminación."},
{doc:"t2-eicosanoides",t:2,p:3,q:"Efectos adversos más frecuentes de los análogos de prostaglandinas:",o:[
 "Diarrea, cólico, náuseas, vómitos, fiebre, cefalea, hipotensión transitoria y sangrado vaginal",
 "Estreñimiento, hipertensión, bradicardia y somnolencia intensa durante varios días",
 "Hiperglucemia, poliuria, polidipsia y alopecia, como con los glucocorticoides",
 "Úlceras gástricas, hiperpotasemia y fallo renal agudo, como con los AINEs"],a:0,
 cita:"Los efectos secundarios más frecuentes tras la administración de análogos de prostaglandinas derivan de su acción sobre la musculatura lisa digestiva y vascular:\n• Diarrea, heces blandas y dolor cólico abdominal.\n• Náuseas, vómitos y episodios febriles.\n• Cefaleas, hipotensión transitoria y sangrado vaginal."},
{doc:"t2-eicosanoides",t:2,p:3,q:"Efectos adversos raros pero graves de las prostaglandinas:",o:[
 "Rotura uterina por sobredosis oxitócica, hipotensión grave o espasmos coronarios",
 "Agranulocitosis, aplasia medular y anemia hemolítica con cuerpos de Heinz",
 "Hipoglucemia grave, convulsiones y coma por exceso de insulina",
 "Necrosis hepática fulminante por la formación de un metabolito tóxico"],a:0,
 cita:"Efectos raros pero graves: Rotura uterina por sobredosificación oxitócica, hipotensión severa o espasmos coronarios."},
{doc:"t2-eicosanoides",t:2,p:4,q:"Contraindicaciones de las prostaglandinas según la profesora. Señala la opción CORRECTA:",o:[
 "Hembras gestantes que deban seguir preñadas y animales con obstrucción intestinal; evitar el bolo IV rápido",
 "Hembras en celo y animales con diarrea; evitar la vía intramuscular, que es muy dolorosa",
 "Animales con glaucoma y hembras recién paridas; evitar la vía subcutánea por la necrosis",
 "Machos reproductores y animales con estreñimiento; evitar la vía oral por el riesgo de rotura"],a:0,
 cita:"1. Hembras Gestantes: Prohibida su administración si se desea mantener la gestación, debido al riesgo inminente de aborto por luteólisis y contracción uterina.\n2. Obstrucción / Impactación Gastrointestinal: No administrar en animales con obstrucción intestinal; el incremento del peristaltismo puede provocar la rotura del tubo digestivo.\n3. Vía de Administración: Queda totalmente desaconsejada la vía intravenosa rápida (bolus IV).",
 n:"En el Tema 2 completo (p. 32) no se matiza «rápida»: «No administrar por vía intravenosa (se alcanzarían dosis demasiado elevadas)»."},
{doc:"t2-eicosanoides",t:2,p:4,q:"Riesgo profesional al manipular prostaglandinas:",o:[
 "Se absorben con facilidad por la piel: embarazadas y personas asmáticas deben usar guantes (riesgo de aborto o broncoespasmo)",
 "No se absorben por la piel, así que no hace falta ninguna precaución especial al manipularlas en la granja",
 "Solo son peligrosas si se inhalan en forma de polvo, por eso basta con llevar una mascarilla al prepararlas",
 "El único riesgo es una sensibilización alérgica en personas con dermatitis, sin peligro para las embarazadas"],a:0,
 cita:"Riesgo Profesional en la Manipulación: Las prostaglandinas se absorben con extrema facilidad a través de la piel (vía percutánea). Mujeres embarazadas o personal asmático deben manipular estos fármacos con guantes obligatoriamente, para evitar abortos inducidos o crisis broncococonstrictoras accidentales."},
{doc:"t2-eicosanoides",t:2,p:4,q:"Tiempo de supresión de las prostaglandinas en animales de consumo:",o:[
 "Hay que respetarlo; según tus apuntes suele ser como mínimo de 24 horas",
 "No tienen tiempo de espera porque se inactivan en pocos minutos",
 "Siempre es de 30 días, tanto en la carne como en la leche",
 "Solo hay tiempo de espera en la leche, nunca en la carne"],a:0,
 cita:"Tiempos de Supresión: Respetar los periodos de espera en animales destinados al consumo humano (habitualmente un mínimo de 24 horas).",
 n:"En el Tema 2 completo (p. 32), los tiempos de espera del cloprostenol son: en vacas, 0 días en carne y 0 horas en leche; en cerdas, 1 día en carne («debe transcurrir 1 día antes del sacrificio»). Es decir, dependen del producto y de la especie: las 24 horas de este resumen coinciden con las de la cerda."},
{doc:"t2-eicosanoides",t:2,p:4,q:"Glucocorticoides frente a AINEs en la cascada del ácido araquidónico:",o:[
 "Los GC bloquean la PLA₂ (inducen lipocortina) e impiden PGs y leucotrienos; los AINEs solo inhiben la COX",
 "Los AINEs bloquean la PLA₂ y frenan toda la cascada; los glucocorticoides solo inhiben la COX-2",
 "Los dos inhiben la 5-lipoxigenasa, y por eso ambos bloquean la formación de leucotrienos",
 "Los GC inhiben la COX-1 de forma irreversible, como la aspirina, y los AINEs la PLA₂"],a:0,
 cita:"1. Glucocorticoides: Bloquean la enzima PLA2 mediante la inducción de lipocortina (anexina-1). Inhiben la cascada completa (impiden la formación tanto de prostaglandinas como de leucotrienos).\n2. AINEs (Antiinflamatorios No Esteroideos): Inhiben específicamente las isoformas de la Ciclooxigenasa (COX-1 y COX-2), bloqueando la síntesis de prostaglandinas, prostaciclina y tromboxanos."},
{doc:"t2-eicosanoides",t:2,p:4,q:"Antileucotrienos. Señala la opción CORRECTA:",o:[
 "Montelukast, zafirlukast y pranlukast antagonizan el receptor CysLT₁; el zileutón inhibe la 5-LOX",
 "Montelukast y zafirlukast inhiben la 5-LOX; el zileutón antagoniza el receptor CysLT₁",
 "Todos inhiben a la vez la COX-2 y la 5-LOX, como la tepoxalina",
 "Antagonizan los receptores H1 y se usan sobre todo en la urticaria"],a:0,
 cita:"Antagonistas de Receptores de Leucotrienos (Antileucotrienos):\n○ Fármacos: Montelukast, Zafirlukast y Pranlukast.\n○ Mecanismo: Antagonistas competitivos selectivos del receptor CysLT1 de leucotrienos.\n○ Inhibidores directos de 5-LOX: Zileutón."},
{doc:"t2-eicosanoides",t:2,p:4,q:"¿Para qué sirven los antileucotrienos (montelukast, zafirlukast) según la profesora?",o:[
 "Son preventivos: por vía oral reducen la frecuencia y la gravedad del asma (gatos, humana), pero no cortan la crisis",
 "Son de elección para cortar una crisis asmática o anafiláctica aguda, porque actúan en pocos segundos",
 "Solo se usan por vía intravenosa en el shock anafiláctico, junto con la adrenalina y los corticoides",
 "Sustituyen a la adrenalina en la anafilaxia, porque son más rápidos y tienen menos efectos adversos"],a:0,
 cita:"Los antileucotrienos (Montelukast, Zafirlukast) actúan de manera profiláctica o preventiva. No sirven para yugular una crisis asmática o anafiláctica aguda en curso. Su administración oral continuada reduce la frecuencia y severidad de los cuadros asmáticos en felinos y humana."},
{doc:"t2-eicosanoides",t:3,p:5,q:"Tríada farmacológica de los AINEs según tus apuntes:",o:[
 "Antiinflamatoria (↓ vasodilatación y permeabilidad), analgésica sobre todo periférica y antipirética (↓ PGE₂ hipotalámica)",
 "Antiinflamatoria, analgésica central como la de los opioides y antiagregante en todos los AINEs por igual",
 "Inmunosupresora, analgésica y antipirética, porque todos los AINEs inhiben la fosfolipasa A₂",
 "Antiinflamatoria, sedante y antipirética, por bloqueo de los receptores opioides de la médula"],a:0,
 cita:"1. Efecto Antiinflamatorio: Por disminución de la vasodilatación y permeabilidad vascular mediada por eicosanoides.\n2. Efecto Analgésico: Principalmente periférico, por bloqueo de la sensibilización nociceptiva.\n3. Efecto Antipirético: Por inhibición de la síntesis de PGE2 a nivel del centro termorregulador hipotalámico."},
{doc:"t2-eicosanoides",t:3,p:5,q:"Comparativa AINEs, glucocorticoides y opiáceos. Señala la opción CORRECTA:",o:[
 "AINEs: COX, acción periférica, dolor leve-moderado, sin narcosis; opiáceos: receptores μ, κ, δ, acción central, dolor intenso y dependencia",
 "AINEs: receptores μ, acción central, dolor intenso y dependencia; opiáceos: COX, acción periférica, dolor leve y sin narcosis",
 "AINEs: PLA₂, acción indirecta, inflamación inmunomediada; glucocorticoides: COX, acción periférica, dolor leve y sin efectos centrales",
 "Los tres actúan sobre la COX: solo cambia la potencia, y ninguno de ellos produce tolerancia ni dependencia"],a:0,
 cita:"Diana mecanística: AINEs → Inhibición de COX-1 / COX-2 · Glucocorticoides → Inhibición de la Fosfolipasa A2 (PLA2) · Opiáceos → Agonistas de receptores opioides (µ, κ, δ).\nSitio de acción analgésica: AINEs → Principalmente Periférico · Glucocorticoides → Indirecto (Antiinflamatorio potente) · Opiáceos → Central (Sustancia gris periaqueductual / Médula).\nIndicación del dolor: AINEs → Dolor leve a moderado (somático, articular, cólicos) · Glucocorticoides → Inflamación severa o inmunomediada · Opiáceos → Dolor intenso, visceral o neoplásico grave.\nEfectos sobre el SNC: AINEs → Sin narcosis ni somnolencia · Glucocorticoides → Alteraciones del estado de ánimo / Eje HPA · Opiáceos → Narcosis, sedación, tolerancia y dependencia."},
{doc:"t2-eicosanoides",t:3,p:5,q:"Según la tabla de tus apuntes, los glucocorticoides:",o:[
 "Inhiben la fosfolipasa A₂; su efecto analgésico es indirecto, por su potente acción antiinflamatoria",
 "Inhiben la COX-1 y la COX-2 igual que los AINEs, y por eso son analgésicos periféricos directos",
 "Son agonistas de los receptores opioides μ de la sustancia gris periacueductal y de la médula",
 "Inhiben solo la 5-lipoxigenasa, por eso bloquean los leucotrienos pero no las prostaglandinas"],a:0,
 cita:"Glucocorticoides: Diana mecanística → Inhibición de la Fosfolipasa A2 (PLA2) · Sitio de acción analgésica → Indirecto (Antiinflamatorio potente) · Indicación → Inflamación severa o inmunomediada · Efectos sobre el SNC → Alteraciones del estado de ánimo / Eje HPA."},
{doc:"t2-eicosanoides",t:3,p:5,q:"Ácido acetilsalicílico (aspirina), según tus apuntes:",o:[
 "Procede del sauce, reúne la tríada completa, antiagrega a dosis bajas y su uso continuado reduce el cáncer de colon",
 "Procede de la adormidera como la morfina, no es antipirético y a dosis bajas aumenta la agregación plaquetaria",
 "Es un coxib selectivo que no inhibe la COX-1 plaquetaria, por eso no es gastrolesivo ni antiagregante",
 "Solo es analgésico: su acción antiinflamatoria es prácticamente nula, igual que la del paracetamol"],a:0,
 cita:"• Descubrimiento: Extraído históricamente de la corteza del sauce (Salix alba) y caracterizado por Sir John Vane (Premio Nobel).\n• Propiedades Terapéuticas: Es el AINE prototípico que reúne de forma completa la tríada antiinflamatoria, analgésica y antipirética.\n• Acción Antiagregante: A dosis bajas inhibe de forma irreversible la COX-1 plaquetaria, reduciendo la síntesis de TXA2.\n• Acción Antineoplásica: Estudios epidemiológicos han demostrado que la administración continuada de ácido acetilsalicílico reduce significativamente la incidencia y mortalidad por cáncer de colon."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Clasificación química de los AINEs según tus apuntes. Señala la CORRECTA:",o:[
 "Carboxílicos (salicilatos, indolacéticos, arilacéticos, propiónicos, fenamatos), enólicos (pirazolonas, oxicams) y no ácidos (paracetamol, coxibs)",
 "Enólicos (salicilatos, fenamatos, propiónicos), carboxílicos (oxicams, pirazolonas, coxibs) y no ácidos (indolacéticos, arilacéticos)",
 "Carboxílicos (pirazolonas, oxicams, coxibs), enólicos (salicilatos, propiónicos, indolacéticos) y no ácidos (fenamatos, arilacéticos)",
 "Todos los AINEs son ácidos carboxílicos, salvo el paracetamol, que es un ácido enólico del grupo de los oxicams"],a:0,
 cita:"Los AINEs se dividen fundamentalmente en compuestos acídicos (carboxílicos y enólicos) y no acídicos.\n7.1. Ácidos Carboxílicos: Salicilatos · Derivados del Ácido Indolacético · Derivados del Ácido Arilacético · Derivados del Ácido Propiónico · Fenamatos (Derivados Antranílicos y Nicotínicos).\n7.2. Ácidos Enólicos: Pirazolonas · Oxicams.\n7.3. Fármacos No Acídicos e Inhibidores Selectivos de COX-2 (COXIBs): Paraminofenoles (Paracetamol) · COXIBs."},
{doc:"t2-eicosanoides",t:3,p:6,q:"¿Qué fármacos son salicilatos, según tus apuntes?",o:[
 "Ácido acetilsalicílico, lisina salicilato, benorilato (éster de aspirina y paracetamol) y diflunisal",
 "Ácido acetilsalicílico, indometacina, diclofenaco y etodolaco, todos del mismo grupo químico",
 "Ácido acetilsalicílico, meloxicam, piroxicam y fenilbutazona, todos ácidos enólicos",
 "Ácido acetilsalicílico, paracetamol, celecoxib y robenacoxib, todos ellos no ácidos"],a:0,
 cita:"Salicilatos: Ácido acetilsalicílico, Lisina salicilato, Benorilato (éster de aspirina y paracetamol) y Diflunisal."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Indometacina, según tus apuntes:",o:[
 "Derivado del ácido indolacético, en desuso en pequeños animales por su elevada hepatotoxicidad",
 "Oxicam preferencial COX-2, muy potente y ampliamente utilizado en la clínica veterinaria",
 "Coxib diseñado para preservar la mucosa gástrica al no inhibir la COX-1 constitutiva",
 "Pirazolona muy irritante por vía intramuscular, de elección en el cólico del caballo"],a:0,
 cita:"Derivados del Ácido Indolacético: Indometacina (en desuso en pequeños animales por elevada hepatotoxicidad)."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Derivados del ácido propiónico, según tus apuntes:",o:[
 "Ibuprofeno (muy lesivo y tóxico en el perro), naproxeno, ketoprofeno y carprofeno (muy seguro en pequeños animales)",
 "Ibuprofeno (el más seguro en el perro), naproxeno, ketoprofeno y carprofeno (muy tóxico en pequeños animales)",
 "Diclofenaco y etodolaco, que son los más utilizados en clínica veterinaria de pequeños animales",
 "Meloxicam y piroxicam, muy potentes y preferenciales COX-2, activos a dosis muy bajas"],a:0,
 cita:"Derivados del Ácido Propiónico: Ibuprofeno (muy lesivo y tóxico en perro), Naproxeno, Ketoprofeno y Carprofeno (de elevada seguridad en clínica veterinaria de pequeños animales)."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Fenamatos (flunixin meglumine, ácido mefenámico), según tus apuntes:",o:[
 "Derivados antranílicos y nicotínicos con gran eficacia analgésica en el dolor visceral y el cólico equino",
 "Ácidos enólicos muy irritantes por vía intramuscular, que se dan por vía IV lenta o IM profunda",
 "Inhibidores selectivos de la COX-2 diseñados para preservar la mucosa gástrica de los perros",
 "Paraminofenoles con acción analgésica y antipirética central, sin efecto antiinflamatorio"],a:0,
 cita:"Fenamatos (Derivados Antranílicos y Nicotínicos): Flunixin meglumine y Ácido mefenámico. Presentan una gran eficacia analgésica en el tratamiento del dolor visceral y del cólico equino."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Pirazolonas (metamizol, fenilbutazona), según tus apuntes:",o:[
 "Son ácidos enólicos muy irritantes por vía intramuscular; se dan por vía IV lenta o IM profunda",
 "Son ácidos carboxílicos que no irritan los tejidos, así que se pueden dar por cualquier vía",
 "Son coxibs selectivos que se dan siempre por vía oral para proteger la mucosa gástrica",
 "Son paraminofenoles no ácidos, profármacos con acción analgésica y antipirética central"],a:0,
 cita:"Pirazolonas: Metamizol (Dipirona / Nolotil) y Fenilbutazona.\nVía de administración: Muy irritantes por vía intramuscular; deben administrarse por vía IV lenta o intramuscular profunda.",
 n:"Ojo: en tus apuntes de la continuación del Tema 3 se precisa que, en el caballo, la fenilbutazona por vía intramuscular o subcutánea está estrictamente contraindicada (solo oral o IV)."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Oxicams (meloxicam, piroxicam), según tus apuntes:",o:[
 "Ácidos enólicos muy potentes y preferenciales COX-2, ampliamente utilizados en clínica veterinaria",
 "Derivados del ácido propiónico, poco potentes y no selectivos, casi en desuso en veterinaria",
 "Coxibs muy selectivos que no se usan en veterinaria por su riesgo cardiovascular",
 "Fenamatos que neutralizan las PGs ya formadas en el foco inflamatorio del cólico"],a:0,
 cita:"Oxicams: Meloxicam y Piroxicam.\nPotencia: Altamente potentes (activos a dosis de microgramos, ej. 10-20 mg), preferenciales COX-2, ampliamente utilizados en clínica veterinaria."},
{doc:"t2-eicosanoides",t:3,p:6,q:"El paracetamol, según la clasificación de tus apuntes, es:",o:[
 "Un paraminofenol no ácido: profármaco con acción analgésica y antipirética central",
 "Un salicilato del grupo de los ácidos carboxílicos y un potente antiinflamatorio",
 "Una pirazolona del grupo de los ácidos enólicos, muy irritante por vía intramuscular",
 "Un coxib selectivo diseñado para preservar la mucosa gástrica del perro y del gato"],a:0,
 cita:"Paraminofenoles: Paracetamol (Acetaminofén). Profármaco con acción analgésica y antipirética central."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Coxibs (celecoxib, firocoxib, robenacoxib), según tus apuntes:",o:[
 "Inhibidores selectivos de la COX-2, diseñados para preservar la mucosa gástrica al no inhibir la COX-1",
 "Inhibidores irreversibles de la COX-1 plaquetaria, usados como antiagregantes a dosis bajas",
 "Inhibidores duales de la COX y la 5-LOX, que bloquean prostaglandinas y leucotrienos a la vez",
 "Derivados del ácido indolacético, en desuso en pequeños animales por su hepatotoxicidad"],a:0,
 cita:"Inhibidores Selectivos de COX-2 (COXIBs): Celecoxib, Firocoxib, Robenacoxib. Diseñados para preservar la mucosa gástrica al no inhibir la COX-1 constitutiva."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Diflunisal, según la profesora:",o:[
 "Es antiinflamatorio y analgésico eficaz, pero carece de actividad antipirética",
 "Es antipirético y analgésico, pero su efecto antiinflamatorio es prácticamente nulo",
 "No es analgésico ni antiinflamatorio: solo se usa como antiagregante plaquetario",
 "Es el salicilato más antipirético, por eso se usa en el golpe de calor"],a:0,
 cita:"Diflunisal: Es antiinflamatorio y analgésico eficaz, pero carece de actividad antipirética."},
{doc:"t2-eicosanoides",t:3,p:6,q:"Ketorolaco, según la profesora:",o:[
 "Su capacidad analgésica es muy elevada y predomina ampliamente sobre la antiinflamatoria",
 "Es sobre todo antiinflamatorio, y su efecto analgésico es leve y de corta duración",
 "No tiene efecto analgésico: solo es antipirético y se usa para bajar la fiebre",
 "Es un opioide débil, y por eso es tan analgésico y produce algo de dependencia"],a:0,
 cita:"Ketorolaco: Destaca por una capacidad analgésica muy elevada que predomina ampliamente sobre su acción antiinflamatoria."},
/* ===== Tema 2 completo (t2-autacoides): págs. 1-11, histamina, antihistamínicos, cromoglicato e inicio de la serotonina ===== */
/* ---------- Histamina: estructura, metabolismo y receptores (p. 1-3) ---------- */
{doc:"t2-autacoides",t:2,p:1,q:"Histamina. Señala la opción CORRECTA:",o:[
 "Amina biógena (anillo imidazólico) y base débil; se almacena sobre todo en gránulos con matriz compleja",
 "Amina biógena con anillo indólico y ácido débil; se almacena sobre todo en forma agranular, libre",
 "Péptido con anillo imidazólico y base fuerte; la síntesis por bacterias intestinales es la principal",
 "Lípido derivado del ácido araquidónico; no se almacena y se sintetiza a demanda en casi todas las células"],a:0,
 cita:"Es una amina biógena compuesta por un anillo imidazólico y una cadena lateral etilenamino. Es una base débil.\n…Su síntesis extracelular (bacterias intestinales) no tiene importancia práctica.\nSíntesis se da a partir de L-histidin-decarboxilasa en la célula, en dos formas distintas:\n-En su mayoría se crea en forma de gránulos con una matriz compleja de proteínas y heparina.\n-En menor medida se crea histamina agranular."},
{doc:"t2-autacoides",t:2,p:2,q:"Biotransformación de la histamina (marcada IMP). Señala la opción CORRECTA:",o:[
 "Sobre todo en el hígado, aunque todos los tejidos pueden metabolizarla, por metilación o desaminación",
 "Solo en el hígado, porque el resto de tejidos no pueden metabolizarla, por metilación o desaminación",
 "Sobre todo en el riñón, que la excreta casi toda sin biotransformar; el hígado apenas interviene",
 "Sobre todo en el pulmón, por hidroxilación con el citocromo P450 y conjugación con glucurónico"],a:0,
 cita:"Biotransformación (IMP): la histamina es capaz de llegar a numerosos tejidos. El hígado es el lugar de biotransformación más importante, pero todos los tejidos son capaces de metabolizar histamina. Existen 2 vías de biotransformación:\nMETILACIÓN\nHistamina-N-metiltransferasa\nDESAMINACIÓN\nDAO o histaminasa",
 n:"Las dos vías del esquema: metilación (histamina-N-metiltransferasa) y desaminación (DAO o histaminasa)."},
{doc:"t2-autacoides",t:2,p:2,q:"Eliminación de la histamina (marcada IMP):",o:[
 "Renal, sobre todo como metabolitos no activos y en escasa proporción sin biotransformar",
 "Renal, sobre todo sin biotransformar y en escasa proporción como metabolitos activos",
 "Biliar, sobre todo como metabolitos no activos y en escasa proporción sin biotransformar",
 "Pulmonar, tras su desaminación completa por la histaminasa circulante en el plasma"],a:0,
 cita:"Eliminación (IMP): Es renal, fundamentalmente como metabolitos NO activos, y en una escasa proporción sin biotransformar."},
{doc:"t2-autacoides",t:2,p:2,q:"¿A qué vía de señalización están acoplados los receptores histamínicos H1 y H2?",o:[
 "H1: fosfolipasa C (↑ IP3, DAG y Ca²⁺ intracelular); H2: adenil ciclasa (↑ AMP cíclico)",
 "H1: adenil ciclasa (↑ AMP cíclico); H2: fosfolipasa C (↑ IP3, DAG y Ca²⁺ intracelular)",
 "H1: fosfolipasa C (↓ IP3, DAG y Ca²⁺ intracelular); H2: adenil ciclasa (↓ AMP cíclico)",
 "H1: guanilato ciclasa (↑ GMP cíclico); H2: fosfolipasa A₂ (↑ ácido araquidónico)"],a:0,
 cita:"H1:\n…\nAcoplados a Fosfolipasa C →activación→ ↑ Inositol trifosfato (IP3), Diacilglicerol (DAG) y Ca2+ intcel.\n…\nH2:\n…\nLa activación: ↑ AMP cíclico. Están acoplados a la adenil ciclasa.",
 n:"Anotación a mano junto a H2: «se pueden utilizar sin tanto problema como los H1»."},
{doc:"t2-autacoides",t:2,p:3,q:"Receptores H3 y H4 de la histamina. Señala la opción CORRECTA:",o:[
 "H3: autorreceptor presináptico que reduce la liberación de neurotransmisores; H4: regulación inmune",
 "H3: autorreceptor presináptico que aumenta la liberación de neurotransmisores; H4: secreción de HCl",
 "H3: receptor de las células parietales que estimula el HCl; H4: autorreceptor presináptico del SNC",
 "H3: receptor del músculo liso bronquial (broncoconstricción); H4: ya muy usado en la clínica diaria"],a:0,
 cita:"H3: autorreceptor neuronal presináptico → modula síntesis y liberación de histamina en el SNC. Su activación se ha asociado con una reducción en la liberación de neurotransmisores (la propia histamina, norepinefrina, serotonina y aceticolina).\nLa activación: ↓ entrada de Calcio a la célula en las terminaciones nerviosas → reducción liberación de neurotransmisores en el espacio sináptico.\nH4:\n- Médula ósea\n- Timo\n- Células inmunocompetentes (linfocitos T, neutrófilos y eosinófilos).\n- Bazo, hígado y colon\n- Sugieren una función importante en la regulación del sistema inmune.\nLa activación se ha visto similitud con H3 (anotación a mano junto a H4: Todavía no muy claro ni muy usados por riesgo)"},
/* ---------- Efectos farmacológicos de la histamina (p. 3-4) ---------- */
{doc:"t2-autacoides",t:2,p:3,q:"Según tus apuntes (pregunta general, no por especie), la respuesta a los efectos farmacológicos de la histamina depende de:",o:[
 "La distribución y densidad de receptores en cada tejido, y de la especie animal y la dosis",
 "Solo de la dosis, porque los receptores se distribuyen por igual en todos los tejidos y órganos",
 "Solo de la vía de administración, porque la histamina actúa igual en todas las especies",
 "La cantidad de heparina de los gránulos y el pH del tejido en el que se libera la histamina"],a:0,
 cita:"EFECTOS FARMACOLÓGICOS: la respuesta depende de (PREGUNTA EN GENERAL, NO ESPECÍFICO ESPECIE):\n- La distribución y densidad de receptores en los diversos tejidos y órganos\n- Respuesta variable según la especie animal y la dosis."},
{doc:"t2-autacoides",t:2,p:3,q:"¿Cómo aumenta la histamina la permeabilidad capilar?",o:[
 "Contrae las células endoteliales de las vénulas postcapilares y produce edema, sobre todo vía H1",
 "Contrae las células endoteliales de las arteriolas terminales y produce edema, sobre todo vía H2",
 "Relaja las células endoteliales de las vénulas postcapilares y reduce el edema, sobre todo vía H1",
 "Contrae el músculo liso de las arterias de gran calibre y produce edema, sobre todo vía H3"],a:0,
 cita:"En general aumentan la permeabilidad capilar por contracción de células endoteliales de vénulas postcapilares (ensancha poros intercelulares) que produce la salida de líquido, proteínas y plaquetas y extravasación plasmática (edema) por acción H1 principalmente. (anotación a mano: + nº receptores)",
 n:"Aparte, la vasodilatación de vénulas y arteriolas terminales produce hiperemia, ↓ resistencia periférica e hipotensión (a mano: «→ produce edema»)."},
{doc:"t2-autacoides",t:2,p:4,q:"Respuesta cardiovascular a la histamina según la dosis. Señala la opción CORRECTA:",o:[
 "Dosis bajas: hipotensión breve seguida de hipertensión 2ª a la liberación de catecolaminas",
 "Dosis bajas: hipertensión mantenida por vasoconstricción de vénulas y arteriolas terminales",
 "Dosis altas: hipertensión intensa con aumento de la volemia, sin riesgo de colapso circulatorio",
 "Dosis altas: bradicardia e hipotensión leve que ceden solas, sin riesgo de colapso circulatorio"],a:0,
 cita:"La respuesta es variable según la dosis:\n- Bajas dosis: se comporta de forma normal y ↓ resistencia periférica e hipotensión breve→ hipertensión 2ª a liberación de catecolaminas de la médula adrenal.\n- Altas dosis: hipotensión intensa, edemas, disminución de la volemia y posibilidad de colapso circulatorio. (anotación a mano: ↳ reacción alérgica)"},
{doc:"t2-autacoides",t:2,p:4,q:"Efectos cardiacos de la histamina. Señala la opción CORRECTA:",o:[
 "Crono e inotropa positiva (H2), reduce la conducción AV (H1) y aplana la onda T del ECG",
 "Crono e inotropa negativa (H2), reduce la conducción AV (H1) y aplana la onda T del ECG",
 "Crono e inotropa positiva (H2), acelera la conducción AV (H1) y eleva la onda T del ECG",
 "Crono e inotropa negativa (H1), acelera la conducción AV (H2) y eleva la onda T del ECG"],a:0,
 cita:"2. Corazón:\n- Efecto cronotropo e inotropo positivo (H2).\n- Reducción de la conducción auriculoventricular (H1).\n- Puede existir estimulación secundaria a liberación de noradrenalina.\n- ECG: aplanamiento de onda T (puede incluso, invertirse).",
 n:"Ojo: la tabla de la p. 3 pone inotropismo y cronotropismo (+) también en la columna H1; el texto de la p. 4 los atribuye a H2."},
{doc:"t2-autacoides",t:2,p:4,q:"Broncoconstricción por histamina (marcada imp y con «!»). Señala la opción CORRECTA:",o:[
 "Intensa en asmáticos y leve en animales sanos; muy común en el gato, y la cobaya es muy sensible",
 "Solo aparece en pacientes asmáticos: en animales sanos la histamina no contrae nunca los bronquios",
 "Intensa en animales sanos y leve en asmáticos; el gato es la especie más resistente a ella",
 "Leve en todas las especies por igual; en la cobaya la histamina produce siempre broncodilatación"],a:0,
 cita:"- Broncoconstricción (imp): intensa en pacientes con asma bronquial u otras enfermedades pulmonares y leve en animales sanos. Muy común en gato y la cobaya es muy sensible (broncoconstricción mortal). (anotación a mano: ASMA FELINA)"},
{doc:"t2-autacoides",t:2,p:4,q:"Histamina en glándulas y SNC. Señala la opción CORRECTA:",o:[
 "Estimula la secreción gástrica de ClH y pepsina vía H2, y no atraviesa la barrera hematoencefálica",
 "Estimula la secreción gástrica de ClH y pepsina vía H1, y atraviesa bien la barrera hematoencefálica",
 "Inhibe la secreción gástrica de ClH vía H2 y reduce las secreciones lagrimales y salivares",
 "Inhibe la secreción gástrica vía H1 y, como atraviesa la BHE, produce somnolencia y sedación"],a:0,
 cita:"4. Glándulas (H2):\n-↑ secreciones mucosas, lagrimales, salivares, pépticas y pancreáticas.\n-Estimulación de la secreción gástrica (ClH y pepsina) de células parietales.\n5. SNC:\n-No atraviesa BHE."},
/* ---------- Acciones contra la histamina y antihistamínicos H1 (p. 5-8) ---------- */
{doc:"t2-autacoides",t:2,p:5,q:"Acciones contra la histamina (marcadas con «¡!»). Señala la asociación CORRECTA:",o:[
 "Acelerar su biotransformación: histaminasa; antagonismo funcional: adrenalina",
 "Acelerar su biotransformación: decarboxilasas; antagonismo funcional: cimetidina",
 "Inhibir su síntesis: histaminasa; antagonismo competitivo: adrenalina y aminofilina",
 "Inhibir su liberación: antihistamínicos H1; antagonismo funcional: cromoglicato"],a:0,
 cita:"ACCIONES CONTRA LA HISTAMINA:\n- Acelerar su biotransformación: aplicar histaminasa\n- Inhibición de su síntesis: inhibición de decarboxilasas.\n- INHIBICIÓN DE LIBERACIÓN (imp): ↓ degranulación mastocitaria que proviene de la interacción Antígeno-IgE. Esa liberación tendría que ser de forma profiláctica y administrar CROMOGLICATO SÓDICO…\n- ANTAGONISMO FUNCIONAL: antagonistas de efecto, con acciones sobre el músculo liso opuestas a las de la histamina, aunque actúan sobre otros receptores. Por ejemplo: ADRENALINA, AMINOFILINA, GLUCOCORTICOIDES,...\n- ANTAGONISMO COMPETITIVO: son los antagonistas de los receptores histaminérgicos antihistamínicos H1 y antihistamínicos H2.",
 n:"A mano, junto al antagonismo funcional: «efecto activo»."},
{doc:"t2-autacoides",t:2,p:5,q:"Antihistamínicos H1 de 1ª frente a 2ª generación (tabla marcada IMP). Señala la opción CORRECTA:",o:[
 "1ª gen.: más sedación (50 %) y metabolismo por enzimas microsomales; 2ª gen.: menos sedación (7 %) y CYP3A4",
 "1ª gen.: menos sedación (7 %) y metabolismo por CYP3A4; 2ª gen.: más sedación (50 %) y enzimas microsomales",
 "1ª gen.: más sedación (50 %) y pocos efectos autonómicos; 2ª gen.: menos sedación (7 %) y bloqueo α y ACh",
 "1ª gen.: menor paso al SNC y pocos efectos autonómicos; 2ª gen.: mayor paso al SNC y más bloqueo α y ACh"],a:0,
 cita:"•Fármacos de 1ª y 2ª generación: Primera Generación | Segunda Generación\nSNC: Mayor penetración | Menor penetración\nEfecto Sedante: Mayor efecto sedante (50%) | Menor posibilidad de sedación (7%)\nEfectos autonómicos: Mayor probabilidad de bloqueo de receptores autonómicos (alfa, Ach), serotonina | Pocos efectos autonómicos\nMetabolismo: Metabolismo por enzimas microsomales | Metabolismo por Citocromo CYP3A4\nVida Media: Más cortas | Más prolongadas"},
{doc:"t2-autacoides",t:2,p:6,q:"Farmacocinética de los antihistamínicos H1 de 1ª generación. Señala la opción CORRECTA:",o:[
 "Buena absorción oral con elevado efecto de 1er paso, efecto corto (3-6 h) y eliminación sobre todo biliar",
 "Buena absorción oral con elevado efecto de 1er paso, efecto corto (3-6 h) y eliminación sobre todo renal",
 "Mala absorción oral y sin efecto de 1er paso, efecto largo (12-24 h) y eliminación sobre todo biliar",
 "Absorción rápida (tmax 1-2 h), no atraviesan la BHE y se eliminan sobre todo por vía renal"],a:0,
 cita:"FARMACOCINÉTICA ANTHISTAMÍNICOS H1 (1ª generación)\n- Presentan buena absorción oral pero elevado efecto de 1er paso (hay que administrarlos a dosis altas). Pueden usarse iv, im, id.\n- Distribución amplia, pueden atravesar BHE → depresores del SNC\n- Biotransformación rápida (1ª generación) por lo que su efecto es corto 3-6 h, en preparaciones farmacéuticas especiales se consiguen niveles terapéuticos 8-12 h.\n- Eliminación fundamentalmente biliar",
 n:"No confundir con la 2ª generación, cuya excreción es renal."},
{doc:"t2-autacoides",t:2,p:6,q:"Farmacocinética de los antihistamínicos H1 de 2ª generación. Señala la opción CORRECTA:",o:[
 "Alta unión a proteínas (posible desplazamiento de otro fármaco), vida media de 12-24 h y excreción renal",
 "Baja unión a proteínas (sin desplazamientos), vida media de 12-24 h e inicio de acción inmediato",
 "Alta unión a proteínas (posible desplazamiento de otro fármaco), vida media de 3-6 h e inicio inmediato",
 "Baja unión a proteínas, gran paso al SNC y vida media de 3-6 h, por lo que se dan cada pocas horas"],a:0,
 cita:"FARMACOCINÉTICA ANTIHISTAMÍNICOS H1 (2ª generación)\n- Absorción rápida vía oral (tmax 1 - 2 horas).\n- Distribución amplia con menor capacidad de penetrar al SNC\n- Unión elevada a proteínas plasmáticas\n- Vida media prolongada (12-24 h)\n- Retardo en inicio de la acción farmacológica\n…\n- Excreción renal (anotación a mano junto a la unión a proteínas: desplazamiento otro fármaco)",
 n:"A mano: aunque penetran menos en el SNC, pueden afectar a su capacidad de precisión al saltar (cuidado con sitios altos)."},
{doc:"t2-autacoides",t:2,p:6,q:"Metabolitos activos de los antihistamínicos H1. Señala la opción CORRECTA:",o:[
 "Hidroxicina → cetirizina, que se comporta como un antiH1 de 2ª generación",
 "Cetirizina → hidroxicina, que se comporta como un antiH1 de 1ª generación",
 "Loratadina → fexofenadina, que se comporta como un antiH1 de 2ª generación",
 "Terfenadina → desloratadina, que se comporta como un antiH1 de 2ª generación"],a:0,
 cita:"- Algunos antihistamínicos tienen metabolitos activos:\n- Hidroxicina: Cetirizina\n- Tripolidina: Activastina\n…\n- Algunos con metabolitos activos:\n- Loratadina: desloratadina\n- Terfenadina: Fexofenadina\n- Ebastina: Carebastina (anotación a mano junto a «Hidroxicina: Cetirizina»: es su metabolito y se comporta como de segunda generación)"},
{doc:"t2-autacoides",t:2,p:7,q:"Efectos de los antihistamínicos H1 independientes del antagonismo H1. Señala la opción CORRECTA:",o:[
 "Depresión del SNC a dosis bajas, convulsiones a dosis altas y anestesia local por bloqueo de canales de Na⁺",
 "Estimulación del SNC a dosis bajas, sedación a dosis altas y anestesia local por bloqueo de canales de K⁺",
 "Depresión del SNC a dosis bajas, convulsiones a dosis altas y acortamiento del periodo refractario cardiaco",
 "Aumento de la liberación de catecolaminas, depresión del SNC y aceleración de la conducción cardiaca"],a:0,
 cita:"…aunque tienen otros efectos independientes de dicho antagonismo:\n- Pueden inhibir parcialmente la liberación de catecolaminas.\n…\n- Sobre SNC:\n1. Dosis bajas y terapéuticas producen efecto depresor (algunos antieméticos, inductores del sueño).\n2. Dosis altas pueden producir convulsiones.\n- Nervios periféricos: efecto anestésico local por bloqueo de canales de Na+ en membranas excitables.\n- Corazón: ↑ periodo refractario al reducir la velocidad de conducción cardiaca. (anotación a mano junto a las catecolaminas: Adrenalina y Nora)"},
{doc:"t2-autacoides",t:2,p:8,q:"Según tus apuntes (marcado IMPPP), los antihistamínicos H1 son útiles en:",o:[
 "Tos irritativa no productiva y tos alérgica (difenhidramina)",
 "Tos productiva con expectoración abundante (difenhidramina)",
 "Broncoespasmo y bronquitis asmática, en los que son muy eficaces",
 "Rinitis infecciosa, siempre asociados a un antibiótico"],a:0,
 cita:"- Rinitis alérgicas (con adrenalina). No efectivas en rinitis infecciosa.\n…\n- Eficacia escasa en broncoespasmos y bronquitis asmática.\n- Útiles en tos irritativa no productiva y tos alérgica (difenhidramina) IMPPP"},
/* ---------- Antihistamínicos H2 y H3 (p. 8-9) ---------- */
{doc:"t2-autacoides",t:2,p:8,q:"Farmacocinética de los antihistamínicos H2. Señala la opción CORRECTA:",o:[
 "Buena absorción oral, pero con efecto de primer paso (leve en nizatidina); si hay urgencia, mejor IV",
 "Mala absorción oral y sin efecto de primer paso, por lo que en la práctica solo se usan por vía IV",
 "Buena absorción oral y sin efecto de primer paso; atraviesan la BHE y producen efectos centrales",
 "Mala absorción oral y primer paso intenso en la nizatidina, que está contraindicada por vía IV"],a:0,
 cita:"FARMACOCINÉTICA ANTIHISTAMÍNICOS H2:\n- Absorción: Buena absorción oral, iv y im.\n- Distribución: Efecto de primer paso (leve en nizatidina) que disminuye su biodisponibilidad.\n- No atraviesan BHE: no efectos centrales (anotación a mano junto al efecto de primer paso: menos que H1 pero tmb, si hay urgencia mejor IV)",
 n:"Lo que reduce su biodisponibilidad oral es el efecto de primer paso, no una mala absorción."},
{doc:"t2-autacoides",t:2,p:9,q:"Efectos de la cimetidina independientes del antagonismo H2. Señala la opción CORRECTA:",o:[
 "↑ prolactina, efecto antiandrogénico e inhibición del sistema microsomal hepático",
 "↓ prolactina, efecto androgénico e inducción del sistema microsomal hepático",
 "↑ prolactina, efecto androgénico e inducción del sistema microsomal hepático",
 "↓ prolactina, efecto antiandrogénico e inhibición del sistema microsomal hepático"],a:0,
 cita:"- Independientemente del antagonismo H2 : Cimetidina\n○ Estímulo secreción de prolactina (ginecomastia, galactorrea), no ranitidina.\n○ Efecto antiandrogénico: ginecomastia e impotencia (no ranitidina, oximetidina y famotidina)\n○ Inhibición sistema microsomal hepático\n○ Afectación de la función tubular renal (anotaciones a mano: «los que usamos ahora no lo producen», bajo el paréntesis; «cuidado que esté bien», junto a la función renal)",
 n:"Además, con todos los antiH2, en ancianos: confusión mental e insuficiencia renal."},
{doc:"t2-autacoides",t:2,p:9,q:"Usos de los antihistamínicos H2 según tus apuntes. Señala la opción CORRECTA:",o:[
 "Úlcera péptica no maligna, gastritis urémica y reflujo esofágico en el perro",
 "Úlcera péptica maligna, vómitos por cinetosis y reflujo esofágico en el perro",
 "Gastritis urémica, retención de placenta y secuelas post-moquillo en el perro",
 "Síndrome del intestino corto, asma bronquial y conjuntivitis alérgica"],a:0,
 cita:"USOS ANTIHISTAMÍNICOS H2:\n- Úlcera péptica (gástrica y duodenal) no maligna. Su uso prolongado disminuye las exacerbaciones periódicas.\n- Gastritis “renal” crónica: desequilibrios electrolíticos que generan gastritis urémica.\n- Síndrome acido- péptico.\n- Síndrome del intestino corto.\n- Reflujo esofágico en el perro (esofagitis. por acción ácida) y reflujo gástrico-duodenal.\n- Hemorragias gastrointestinales superiores cuando no se deben a la erosión de los vasos sanguíneos principales.\n- En insuficiencia pancreática exocrina: administrado 30’ antes evitan la hidrólisis ácida y enzimática de las enzimas pancreáticas de reemplazo en el estómago. (anotaciones a mano: «→ seguros de forma crónica», junto a la úlcera; «por UREMIA», junto a la gastritis)",
 n:"Vómitos por cinetosis, retención de placenta y secuelas post-moquillo son usos de los antiH1, no de los antiH2."},
{doc:"t2-autacoides",t:2,p:9,q:"Antihistamínicos H3. Señala la opción CORRECTA:",o:[
 "Son agonistas inversos (p. ej., tioperamida), diana en ensayos para narcolepsia, Alzheimer o esquizofrenia",
 "Son agonistas puros (p. ej., tioperamida) y ya se usan de rutina en la úlcera péptica y en el reflujo",
 "Son agonistas inversos (p. ej., cimetidina) y se usan sobre todo en rinitis y conjuntivitis alérgicas",
 "Son antagonistas solo periféricos, sin acción en el SNC, y se usan en la artritis reumatoide y el prurito"],a:0,
 cita:"Los antihistamínicos H3 son agonistas inversos. (Ej: broncoconstricción de H1 es antagonizada por broncodilatación de H3). Derivados Imidazólicos: Tioperamida, Benpropita, Ciproxifano, Proxifano.\n…\nDiana terapéutica para alteraciones del SNC, en pruebas clínicas para:\n- Narcolepsia. Se promueve la vigilia.\n- Deterioro cognitivo asociado a la enfermedad de Alzheimer y de Parkinson\n- Esquizofrenia\n- desórdenes de déficit de atención e hiperactividad (ADHD)\nReceptor H3→ alto grado de actividad constitutiva in vivo, por lo que su inhibición tiene importantes implicaciones clínicas (anotación a mano: → todavía en estudio)"},
/* ---------- Cromoglicato sódico y serotonina (p. 10-11) ---------- */
{doc:"t2-autacoides",t:2,p:10,q:"Cromoglicato sódico. Señala la opción CORRECTA:",o:[
 "Es profiláctico (antes del contacto con el agente): impide la entrada de Ca²⁺ e inhibe la fosfodiesterasa",
 "Es terapéutico (cuando la reacción ya se ha producido): impide la entrada de Ca²⁺ e inhibe la fosfodiesterasa",
 "Es profiláctico (antes del contacto con el agente): facilita la entrada de Ca²⁺ y activa la fosfodiesterasa",
 "Es terapéutico (cuando la reacción ya se ha producido): bloquea los receptores H1 y H2 y activa la fosfodiesterasa"],a:0,
 cita:"Es un inhibidor de la liberación de histamina ya que inhibe el aumento de permeabilidad al Ca2+ que provocan los antígenos al formar complejos con estos iones en la superficie externa de la membrana, fijándose a los canales de Ca2+ e impidiendo su entrada.\nTambién inhibe la fosfodiesterasa, produciendo un aumento de AMPc intracelular que favorece estabilidad a nivel de membrana.\n…\n- En rinitis y conjuntivitis alérgica, aunque si ya se ha producido no tiene efecto porque la histamina ya se ha liberado.\n- Por este motivo su valor es principalmente profiláctico, no terapéutico. (anotación a mano junto al título: ES PROFILÁCTICO, PARA PREVENIR)",
 n:"Ejemplo anotado a mano en la p. 5: al caballo, darlo preventivo antes de una carrera."},
{doc:"t2-autacoides",t:2,p:10,q:"Almacenamiento de la serotonina (marcado IMPPPP). Señala la opción CORRECTA:",o:[
 "Más del 90 % en células enterocromafines digestivas; también en plaquetas, mastocitos (roedores) y rafe",
 "Más del 90 % en las plaquetas; también en células enterocromafines, mastocitos (rumiantes) y rafe",
 "Más del 90 % en los mastocitos de todas las especies, almacenada junto a la histamina y la heparina",
 "Más del 90 % en los núcleos del rafe; también en las células parietales gástricas y en los basófilos"],a:0,
 cita:"Almacenamiento (IMPPPP): Se produce fundamentalmente en:\n• Células enterocromafines del aparato digestivo (> 90%): almacenada junto a gránulos formando complejos con ATP y otras sustancias\n• Plaquetas (Sangre)\n• Mastocitos (en roedores) junto a histamina y heparina\n• Núcleos del rafé del tallo (neurotransmisor)"},
{doc:"t2-autacoides",t:2,p:11,q:"Serotonina: biotransformación y excreción (marcadas con «!»). Señala la opción CORRECTA:",o:[
 "Hígado (MAO) y endotelio vascular; en la pineal, acetilasa + O-metil-transferasa → melatonina; excreción renal",
 "Solo en el hígado (MAO); en la pineal, MAO + aldehído-deshidrogenasa → melatonina; excreción sobre todo biliar",
 "Hígado (MAO) y endotelio vascular; en la pineal, ceruloplasmina + oxidasas → melatonina; excreción biliar",
 "Riñón (DAO o histaminasa) y pulmón; en la pineal, acetilasa + O-metil-transferasa → 5-HIAA; excreción renal"],a:0,
 cita:"Biotransformación: en hígado (MAO) principalmente y endotelio vascular:\nMAO + alcohol-deshidrogenasa→5-hidroxitriptofol\nMAO + aldehído-deshidrogenasa → 5HIAA+ sulfocinasa → Sulfoconjugado.\nCeruloplasmina + oxidasas → Adenocromo\nConjugación a glucurónico→ Glucuroconjugado.\nAcetilasa + O-metil-transferasa →Melatonina (glándula pineal).\n…\nExcreción: Renal"},
/* ===== Tema 2 completo (t2-autacoides): págs. 12-22, serotonina, antieméticos, angiotensina e IECA ===== */
/* ---------- Serotonina: efectos y receptores (pp. 12-13) ---------- */
{doc:"t2-autacoides",t:2,p:12,q:"Según tus apuntes, ¿qué efecto tiene la serotonina sobre las plaquetas en el hombre?",o:[
 "Actividad agregante plaquetaria reversible",
 "Actividad antiagregante plaquetaria reversible",
 "Actividad agregante plaquetaria irreversible",
 "Ninguno: las plaquetas solo la captan y la almacenan"],a:0,
 cita:"• Actividad agregante plaquetaria reversible (hombre).",
 n:"Lo marcaste con «!». Ojo: alguna clave de examen da por buena la «actividad antiagregante»; tus apuntes dicen agregante. El antiagregante es la ketanserina, por bloqueo 5-HT₂ (p. 16)."},
{doc:"t2-autacoides",t:2,p:12,q:"Efectos cardiovasculares de la serotonina. Señala la opción CORRECTA:",o:[
 "Crono e inotropa positiva; dilata las arteriolas del músculo esquelético, del corazón y de la piel",
 "Crono e inotropa negativa; dilata las arteriolas del músculo esquelético, del corazón y de la piel",
 "Crono e inotropa positiva; dilata las arteriolas y las venas del cerebro y de las vísceras",
 "Crono e inotropa negativa; contrae las arteriolas del músculo esquelético, del corazón y de la piel"],a:0,
 cita:"• Vasoconstricción arteriolar y venosa: cerebro, vísceras y algunos territorios orgánicos\n• Vasodilatación arteriolar: músculo esquelético y cardiaco (no dañado) y piel.\n• Corazón: efecto cronotropo e inotropo positivo (IMMPPP)",
 n:"El «(IMMPPP)» está en tus apuntes. La bradicardia solo aparece como reflejo de Bezold-Jarisch (primera fase de la respuesta trifásica de la presión arterial)."},
{doc:"t2-autacoides",t:2,p:12,q:"Receptor 5-HT₄. Señala la opción CORRECTA:",o:[
 "Está en el sistema nervioso entérico, SNC, vejiga y corazón; ↑ AMPc y aumenta la motilidad digestiva",
 "Está en vasos, plaquetas y neuronas autónomas; activa la fosfolipasa C (↑ IP₃) y contrae el músculo liso",
 "Es un canal iónico de las neuronas aferentes nociceptivas y entéricas, con efectos excitadores",
 "Está en el SNC y en algunos vasos; inhibe la adenilatociclasa (↓ AMPc) y produce vasoconstricción"],a:0,
 cita:"Receptores 5-HT4 : en sistema nervioso entérico, SNC, vejiga y corazón. Efectos excitadores y causan incremento de motilidad digestiva. Actúan estimulando adenilatociclasa (↑AMPc). (anotación a mano en la tabla: entérico, ↑ peristaltismo)",
 n:"Las otras opciones describen el 5-HT₂ (fosfolipasa C/IP₃), el 5-HT₃ (el único que es un canal iónico) y el 5-HT₁ (↓ AMPc)."},
{doc:"t2-autacoides",t:2,p:13,q:"Efecto de la serotonina sobre la liberación de hormonas hipofisarias:",o:[
 "Estimula la de ACTH, LTH y TSH e inhibe la de FSH y LH",
 "Inhibe la de ACTH, LTH y TSH y estimula la de FSH y LH",
 "Estimula la de ACTH, FSH y LH e inhibe la de LTH y TSH",
 "Estimula la de FSH, LH y TSH e inhibe la de ACTH y LTH"],a:0,
 cita:"- Estimula la liberación de ACTH, LTH y TSH\n- Inhibe la liberación de FSH y LH",
 n:"Lo marcaste con «!»."},
{doc:"t2-autacoides",t:2,p:13,q:"Efecto de la serotonina sobre el SNC según la dosis:",o:[
 "A dosis bajas estimula el SNC y a dosis altas lo deprime",
 "A dosis bajas deprime el SNC y a dosis altas lo estimula",
 "Lo estimula a cualquier dosis, y más cuanto mayor es esta",
 "Lo deprime a cualquier dosis, y más cuanto mayor es esta"],a:0,
 cita:"En general ↑ dosis producen efectos depresores centrales\n↓ dosis producen efectos estimulantes del SNC",
 n:"Está recuadrado en azul en tus apuntes."},
/* ---------- Serotoninérgicos y metoclopramida (pp. 14-15) ---------- */
{doc:"t2-autacoides",t:2,p:14,q:"Usos terapéuticos de los serotoninérgicos. Señala la opción CORRECTA:",o:[
 "Vómito: metoclopramida y zacoprida; automutilación y granuloma por lamido: buspirona y fluoxetina",
 "Vómito: buspirona y fluoxetina; automutilación y granuloma por lamido: metoclopramida y zacoprida",
 "Vómito: cisaprida y sumatriptán; automutilación y granuloma por lamido: buspirona y fluoxetina",
 "Vómito: metoclopramida y zacoprida; automutilación y granuloma por lamido: ketanserina y pizolifeno"],a:0,
 cita:"- Trastornos del comportamiento (ansiedad, depresión, comportamiento compulsivo, automutilación y granuloma por lamido, alopecia psicogénica en gato, estereotipias y agresividad): Buspirona, fluoxetina, etc. (anotación a mano: ↳ Acral)\n- Control del vómito: Metoclopramida y Zacoprida (otra Benzamida). Se utilizan además los anti 5-HT3 selectivos (ondansetrón, granisetrón, tropisetrón).",
 n:"Según tus apuntes, el control del vómito sí figura entre los usos de los serotoninérgicos: metoclopramida y zacoprida (benzamidas agonistas 5-HT₄), y además los anti 5-HT₃. Anotaste «acral»: granuloma acral por lamido."},
{doc:"t2-autacoides",t:2,p:14,q:"Doble acción de la metoclopramida según la dosis:",o:[
 "Dosis bajas: agonista 5-HT₄ y antagonista D₂ (ZQD); dosis altas: bloquea los 5-HT₃ centrales",
 "Dosis bajas: bloquea los 5-HT₃ centrales; dosis altas: agonista 5-HT₄ y antagonista D₂ (ZQD)",
 "Dosis bajas: antagonista 5-HT₄ y agonista D₂ (ZQD); dosis altas: bloquea los 5-HT₃ centrales",
 "Dosis bajas: agonista 5-HT₄ y antagonista D₂ (ZQD); dosis altas: bloquea los 5-HT₂ periféricos"],a:0,
 cita:"Doble acción:\n1. A ↓ dosis es agonista del receptor 5-HT4 (responsable de la actividad procinética) y antagonista de receptores dopaminérgicos D2 y actúa en la ZQD, por lo que tiene poder antiemético.\n2. A ↑ dosis bloquean receptores 5-HT3 centrales (ZQD del área postrema y centro del vómito en el suelo del cuarto ventrículo). (anotación a mano: lo que nos interesa)",
 n:"Marcado con «!» y «lo que nos interesa». El agonismo 5-HT₄ da la acción procinética; el bloqueo D₂ en la ZQD, la antiemética."},
{doc:"t2-autacoides",t:2,p:14,q:"Reacciones adversas de la metoclopramida. Señala la opción CORRECTA:",o:[
 "Extrapiramidales por bloqueo D₂ central; sobre todo en animales jóvenes y frecuentes en el caballo",
 "Extrapiramidales por bloqueo D₂ central; sobre todo en animales viejos y raras en el caballo",
 "Extrapiramidales por agonismo 5-HT₄ central; sobre todo en jóvenes y frecuentes en el caballo",
 "Estreñimiento por bloqueo D₂ periférico; sobre todo en animales jóvenes y frecuentes en el caballo"],a:0,
 cita:"Aparecen sobre todo en animales jóvenes. Efectos adversos relacionados con bloqueo de receptores dopaminérgicos del SNC (extrapiramidales): excitación (especialmente en perro y gato), trastornos del movimiento, somnolencia y fatiga, inquietud motora, tortícolis espasmódica y crisis oculógiras.\nEn perro y gato no es muy grave pero en caballo son frecuentes: nerviosismo, cambios de comportamiento, insomnio, temblores y dolor abdominal, que puede ser peligroso por el peso.\n•Diarrea por su acción periférica sobre motilidad intestinal.",
 n:"Además estimula la producción de prolactina (galactorrea). Da diarrea, no estreñimiento (anotaste «cuidado con diarreas»)."},
{doc:"t2-autacoides",t:2,p:15,q:"Ciproheptadina. Señala la opción CORRECTA:",o:[
 "Antagonista H₁ y 5-HT₂ con efecto anticolinérgico; orexígena y útil en el asma felino",
 "Antagonista H₁ y 5-HT₃ con efecto anticolinérgico; anorexígena y útil en el asma felino",
 "Agonista 5-HT₁A con efecto anticolinérgico; orexígena y útil en la ansiedad felina",
 "Antagonista H₂ y 5-HT₂ sin efecto anticolinérgico; orexígena y útil en la úlcera gástrica"],a:0,
 cita:"1. Trastornos respiratorios en gatos (alta sensibilidad de esta especie a la 5-HT): Ciproheptadina, junto con broncodilatadores o glucocorticoides.\nCIPROHEPTADINA (5-HT2):\nPosee características anticolinérgicas, antihistamínicas (H1 ) y antiserotonínicas 5-HT2.\n- Aumenta el apetito (orexígeno) inhibiendo neuronas glucosensibles del hipotálamo ventromedial y estimulando ciertas neuronas del hipotálamo lateral. (anotaciones a mano: Antihistamínico 5 HT…; Asma gatos; ↑ apetito)",
 n:"En el gato se da junto con broncodilatadores o glucocorticoides. Por su acción anti-H₁ también se usa como sedante y antiemético en carnívoros domésticos (p. 16)."},
/* ---------- Antagonistas de la serotonina (pp. 16-17) ---------- */
{doc:"t2-autacoides",t:2,p:16,q:"Ketanserina. Señala la opción CORRECTA:",o:[
 "Bloquea 5-HT₂, H₁ y α₁: vasodilatación, hipotensión y actividad antiagregante plaquetaria",
 "Bloquea 5-HT₂, H₁ y α₁: vasoconstricción, hipertensión y actividad agregante plaquetaria",
 "Bloquea 5-HT₃, H₂ y β₁: vasodilatación, hipotensión y actividad antiagregante plaquetaria",
 "Bloquea 5-HT₂, H₁ y α₁: vasodilatación, hipotensión y broncoconstricción por la 5-HT"],a:0,
 cita:"Es un derivado quinazolidínico que bloquea receptores 5-HT2 , H1 y α1 . Por todo ello, produce:\n- Vasodilatación e hipotensión.\n- Tiene actividad antiagregante plaquetaria (bloqueo 5-HT2 )\n- Inhibe la broncoconstricción debida a la acción 5-HT. (anotación a mano: efecto mixto)",
 n:"Se usa en la hipertensión arterial junto a otros hipotensores."},
{doc:"t2-autacoides",t:2,p:16,q:"Alcaloides del cornezuelo del centeno (grupo de antagonistas de la serotonina). Señala la opción CORRECTA:",o:[
 "Todos estimulan la fibra lisa; la ergometrina corta hemorragias posparto y la cabergolina induce el estro",
 "Todos relajan la fibra lisa; la ergometrina corta hemorragias posparto y la cabergolina induce el estro",
 "Todos estimulan la fibra lisa; la cabergolina corta hemorragias posparto y la ergometrina induce el estro",
 "Todos estimulan la fibra lisa; la bromocriptina corta hemorragias posparto y la cabergolina induce el estro"],a:0,
 cita:"Todos producen estimulación de fibra lisa, algunos con relativa selectividad sobre la vascular y otros sobre la uterina.\n- Ergometrina: útil en obstetricia para evitar y cortar hemorragias postparto al estimular las fibras lisas uterinas.\n- Cabergolina: mejor inductor del estro que el anterior. Mayor efectividad y rapidez, cuanto más tarde se administre en el anestro. Anestro prolongado.",
 n:"La bromocriptina también induce el estro en perra y gata, pero la cabergolina es mejor inductor. Por la vasoconstricción, estos alcaloides están contraindicados en enfermedades vasculares periféricas como la infosura (p. 17)."},
{doc:"t2-autacoides",t:2,p:17,q:"Mecanismo de los antagonistas 5-HT₃ (setrones). Señala la opción CORRECTA:",o:[
 "Bloquean el efecto emético periférico (aferentes vagales) y central (ZQD) y no son procinéticos",
 "Bloquean solo el efecto emético central (ZQD) y son procinéticos, como la metoclopramida",
 "Bloquean el efecto emético periférico y central y también los D₂, con efectos extrapiramidales",
 "Bloquean solo el efecto emético periférico (aferentes vagales), por eso no actúan sobre la ZQD"],a:0,
 cita:"Antagonizan los efectos eméticos de la serotonina tanto periférico (aferentes del nervio vago desde vísceras al SNC) como central (zona quimiorreceptora gatillo en el área postrema). No antagonizan los receptores D2 (no son procinéticos), no tienen los efectos adversos extrapiramidales de la metoclopramida.",
 n:"Ondansetrón, granisetrón, tropisetrón y palonosetrón. Según tus apuntes también pueden usarse como ansiolíticos."},
{doc:"t2-autacoides",t:2,p:17,q:"Setrones: indicaciones y vía de administración. Señala la opción CORRECTA:",o:[
 "Útiles en el vómito por quimioterapia, no en la cinetosis; la vía i.v. es útil si el animal vomita",
 "Útiles en el vómito por cinetosis, no en la quimioterapia; la vía i.v. es útil si el animal vomita",
 "Útiles en el vómito por quimioterapia, no en la cinetosis; la vía i.v. está contraindicada",
 "Útiles tanto en la quimioterapia como en la cinetosis; se absorben muy mal por vía oral"],a:0,
 cita:"- Prevención y tratamiento de náusea y vómito por quimioterapia y postoperatorio. Es conveniente aplicarlos antes del comienzo de la quimioterapia o radioterapia (i.v. inmediatamente antes; oral 1-2 h antes).\n- No son eficaces en vómitos de origen cinético (causados por movimiento).\nCINÉTICA (ondansetrón): Buena absorción oral (F = 60%). En ocasiones se administra por vía i.v.. (anotación a mano: si vomitan es útil)",
 n:"El ondansetrón se absorbe bien por vía oral (F = 60 %). Para la cinetosis se usan los antihistamínicos H₁ (p. 17)."},
/* ---------- Eje renina-angiotensina-aldosterona (pp. 18-20) ---------- */
{doc:"t2-autacoides",t:2,p:18,q:"Sistema renina-angiotensina. Señala la opción CORRECTA:",o:[
 "La renina (células granulares) actúa sobre el angiotensinógeno hepático; la ECA pulmonar forma la angiotensina II",
 "La renina (mácula densa) actúa sobre la angiotensina I hepática; la ECA renal forma la angiotensina II",
 "La ECA (células granulares) actúa sobre el angiotensinógeno hepático; la renina pulmonar forma la angiotensina II",
 "La renina (células granulares) actúa sobre el angiotensinógeno renal; la ECA hepática forma la angiotensina I"],a:0,
 cita:"Las células mioepiteliales granulares contienen el precursor de la renina.\nrenina ⇒ angiotensinógeno (sintetizado en el hígado) ⇒ Angiotensina I. ⇒ enzima conversora de angiotensina (Pulmón) ⇒ Angiotensina II (anotación a mano: la que nos preocupa !)",
 n:"La cascada es un esquema de tus apuntes. La angiotensina II es el metabolito activo."},
{doc:"t2-autacoides",t:2,p:19,q:"Liberación de renina. Señala la opción CORRECTA:",o:[
 "La estimulan la ↓ de la presión de perfusión renal y los nervios simpáticos; la angiotensina II la inhibe",
 "La estimulan la ↑ de la presión de perfusión renal y los nervios simpáticos; la angiotensina II la inhibe",
 "La estimulan la ↓ de la presión de perfusión renal y la vasopresina; los nervios simpáticos la inhiben",
 "La estimulan la ↓ de la presión de perfusión renal y la angiotensina II; los nervios simpáticos la inhiben"],a:0,
 cita:"La Renina se produce ante los siguientes estímulos:\n1.↓ presión perfusión renal detectada por barorreceptores\n2. Cambios volumen/composición líquido tubular que llega a mácula densa\n3. Estimulación de los nervios simpáticos\nLa propia angiotensina es capaz, por un mecanismo de retroalimentación, de inhibir la secreción de renina al actuar sobre las células yuxtaglomerulares. La vasopresina también inhibe la liberación de renina en el perro. (anotación a mano: ↑AII → cél. yuxt → ↓renina)",
 n:"La vasopresina también inhibe la liberación de renina (en el perro)."},
{doc:"t2-autacoides",t:2,p:19,q:"Según tus apuntes, la renina actúa como «prohormona» porque, indirectamente:",o:[
 "Aumenta la liberación de aldosterona y la reabsorción de Na⁺ en el túbulo contorneado distal",
 "Disminuye la liberación de aldosterona y la reabsorción de Na⁺ en el túbulo contorneado distal",
 "Aumenta la liberación de aldosterona y la excreción de Na⁺ en el túbulo contorneado proximal",
 "Aumenta el péptido natriurético auricular y la excreción de Na⁺ en el túbulo contorneado distal"],a:0,
 cita:"La renina actúa como PROHORMONA→ indirectamente ↑ liberación de aldosterona → ↑ reabsorción de sodio en túbulo contorneado distal. Esto se controla por la retroalimentación del volumen de líquido extracelular y de la tasa de filtración glomerular. (anotación a mano: para reabsorber agua y no perder tanto)",
 n:"«PROHORMONA» está recuadrado en tus apuntes."},
{doc:"t2-autacoides",t:2,p:20,q:"Receptores de las angiotensinas según tus apuntes. Señala la opción CORRECTA:",o:[
 "AT1B en cápsula adrenal e hipófisis; el AT3 es hipotético y en el AT4 se ha demostrado funcionalidad",
 "AT1B en riñón, corazón y vasos; el AT3 es hipotético y en el AT4 se ha demostrado funcionalidad",
 "AT1B en cápsula adrenal e hipófisis; el AT4 es hipotético y en el AT3 se ha demostrado funcionalidad",
 "AT1B en tejidos fetales; el AT3 y el AT4 son hipotéticos y en ninguno se ha demostrado funcionalidad"],a:0,
 cita:"• AT1A en riñón, corazón, pulmón, vasos, hígado, testículos, SNC y SNA\n• AT1B en cápsula adrenal e hipófisis (va a potenciar la secreción de otros autacoides). (anotación a mano: Aldosterona, ADH↑)\nReceptor AT3 y AT4 de los que se sabe poco aún. (anotación a mano: AT3 → hipotético (no existe); AT4 → si se ha demostrado funcionalidad)",
 n:"Lo del AT3 y el AT4 sale de tus anotaciones a mano; el texto solo dice que se sabe poco aún. El AT2 está en tejidos fetales y, en el adulto, solo en riñón, glándulas adrenales, ovario y miometrio."},
{doc:"t2-autacoides",t:2,p:20,q:"Respuestas lentas tras la activación del receptor AT₁:",o:[
 "Crecimiento y proliferación celular y ↑ matriz extracelular: hipertrofia y remodelación",
 "Activación de la fosfolipasa C, ↑ Ca²⁺ citoplasmático y contracción muscular inmediata",
 "Activación de fosfatasas, apertura de canales de K⁺ e inhibición de la vía MAP-cinasa",
 "Inhibición de la adenilciclasa y ↓ del AMPc, que actúa como segundo mensajero inhibidor"],a:0,
 cita:"Respuestas lentas: provocan estímulo del crecimiento y proliferación celular y ↑ síntesis de proteínas de la matriz extracelular → interviene en la hipertrofia, la hiperplasia y otras formas de remodelación cardiovascular y renal. (anotación a mano: actúan en el núcleo (genes))",
 n:"La fosfolipasa C (↑ Ca²⁺) y la inhibición de la adenilciclasa son respuestas rápidas del AT₁; la activación de fosfatasas es la vía del AT₂."},
/* ---------- Acciones de la angiotensina II e IECA (pp. 21-22) ---------- */
{doc:"t2-autacoides",t:2,p:21,q:"Efecto de la angiotensina II sobre el corazón según tus apuntes:",o:[
 "Débil actividad inotrópica positiva; es más probable una bradicardia refleja a la hipertensión",
 "Potente actividad inotrópica positiva y taquicardia directa, sin ninguna bradicardia refleja",
 "Débil actividad inotrópica negativa; es más probable una taquicardia refleja a la hipotensión",
 "Ningún efecto cardiaco directo; solo una taquicardia refleja por la vasodilatación periférica"],a:0,
 cita:"2. En corazón una débil actividad inotrópica positiva, aunque es más probable una bradicardia refleja a la HPT.",
 n:"La figura de la p. 20 habla de «aumento de la fuerza y de la frecuencia de contracción», pero el texto resaltado de la p. 21 matiza: inotropismo débil y bradicardia refleja a la hipertensión (HPT)."},
{doc:"t2-autacoides",t:2,p:21,q:"Acciones de la angiotensina II. Señala la opción CORRECTA:",o:[
 "Libera adrenalina (médula adrenal) y aldosterona (corteza) y estimula la secreción de vasopresina y ACTH",
 "Libera adrenalina (médula adrenal) y aldosterona (corteza) e inhibe la secreción de vasopresina y ACTH",
 "Libera aldosterona (médula adrenal) y adrenalina (corteza) y estimula la secreción de vasopresina y ACTH",
 "Inhibe la adrenalina (médula adrenal) y la aldosterona (corteza) y estimula la vasopresina y la ACTH"],a:0,
 cita:"3. Sobre glándula adrenal:\n1. estímulo de médula adrenal →liberación de adrenalina.\n2. estímulo de corteza adrenal→ síntesis y liberación de aldosterona (↑ lento PA).\n5. Sobre SNC:\n2. También estimula la secreción de vasopresina y de ACTH.",
 n:"Sobre el SNP también estimula la secreción de adrenalina y la liberación de NA (anotaste «catecolaminas»)."},
{doc:"t2-autacoides",t:2,p:21,q:"Fármacos que actúan sobre el eje renina-angiotensina-aldosterona. Señala la opción CORRECTA:",o:[
 "Los IECA impiden la formación de angiotensina II y los ARA II bloquean el receptor AT₁",
 "Los IECA bloquean el receptor AT₁ y los ARA II impiden la formación de angiotensina II",
 "Los IECA impiden la formación de angiotensina II y los ARA II bloquean el receptor AT₂",
 "Los IECA inhiben la liberación de renina y los ARA II impiden la formación de angiotensina I"],a:0,
 cita:"- Inhibidores de la enzima conversora de angiotensina (iECA)\n- Antagonistas de los receptores de angiotensina II (ARA II).\n- Impiden la formación de angiotensina II: evitan sus efectos presores y la retención de Na+ y H2O. (anotación a mano: ARA II inhiben AT1)",
 n:"Las dos primeras líneas son de la p. 19 (resaltadas en rojo); la tercera y la anotación, de la p. 21."},
{doc:"t2-autacoides",t:2,p:21,q:"IECA. Señala la opción CORRECTA:",o:[
 "Actúan sobre vasos de capacidad y resistencia, sin activación simpática refleja, sobre todo en riñón, corazón y cerebro",
 "Actúan solo sobre vasos de resistencia y producen activación simpática refleja, sobre todo en riñón, corazón y cerebro",
 "Actúan sobre vasos de capacidad y resistencia, sin activación simpática refleja, sobre todo en el hígado y el intestino",
 "Actúan sobre vasos de capacidad y resistencia y aumentan la contractilidad cardiaca, sobre todo en riñón, corazón y cerebro"],a:0,
 cita:"- Actúan sobre vasos de capacidad y resistencia→ reducen carga cardíaca y presión arterial.\n- No modifican la contractilidad cardíaca ni producen activación simpática refleja.\nActúan preferentemente sobre lechos vasculares sensibles a angiotensina: riñón, corazón, cerebro: son ÚTILES PARA MANTENER LA PERFUSIÓN ADECUADA DE ESTOS ÓRGANOS (p.e. insuficiencia renal, especialmente con proteinuria). (anotación a mano: mantiene perfusión adecuada de los tejidos)",
 n:"Lo marcaste con «!» y escribiste «IECAS» en grande en esa página."},
{doc:"t2-autacoides",t:2,p:22,q:"Farmacocinética de los IECA. Señala la opción CORRECTA:",o:[
 "El enalapril es un profármaco que el hígado transforma en enalaprilato; se excretan sobre todo por vía renal",
 "El enalaprilato es un profármaco que el riñón transforma en enalapril; se excretan sobre todo por vía biliar",
 "El enalapril es un profármaco que el hígado transforma en enalaprilato; se excretan sobre todo por vía biliar",
 "El enalapril ya es activo y tiene menor biodisponibilidad que el enalaprilato; se excretan por vía renal"],a:0,
 cita:"Los profármacos (enalapril) tienen mayor biodisponibilidad. (anotación a mano: → benazepril tmb)\nSe biotransforman a nivel hepático, en el caso del enalapril en enalaprilato que es el metabolito activo, altamente específico y de acción prolongada. Se excretan principalmente por vía renal.",
 n:"Anotaste que el benazepril también es un profármaco. Se dan por vía oral y los alimentos no afectan a la absorción de algunos (enalapril)."},
{doc:"t2-autacoides",t:2,p:22,q:"Reacciones adversas de los IECA (sobre todo si se sobredosifican):",o:[
 "Hipotensión, azotemia, tos seca por bradicinina (en humanos) e hiperpotasemia",
 "Hipertensión, azotemia, tos seca por bradicinina (en humanos) e hiperpotasemia",
 "Hipotensión, azotemia, tos seca por histamina (en el perro) e hiperpotasemia",
 "Hipotensión, azotemia, tos seca por bradicinina (en humanos) e hipopotasemia"],a:0,
 cita:"1. Hipotensión. Puede ser exagerada con las primeras dosis (dosificar aumentando la dosis poco a poco), especialmente en pacientes con dietas hiposódicas o medicados previamente con diuréticos.\n2. Azotemia\n3. Tos seca por aumento de los niveles de bradicinina (en humanos)→ ↑ niveles de bradicinina al evitar su hidrólisis →produce vasodilatación por estímulo de la síntesis de NO y prostaglandinas.\n4. Otros: mareos, vómito, somnolencia, desorientación/incoordinación, diarrea e hiperpotasemia (por una menor producción de aldosterona).",
 n:"La hiperpotasemia se debe a la menor producción de aldosterona. Además, los AINEs disminuyen su eficacia antihipertensiva."},
{doc:"t2-autacoides",t:2,p:22,q:"¿Por qué los IECA pueden deteriorar la función renal si hay estenosis de la arteria renal?",o:[
 "Porque evitan la vasoconstricción de la arteriola eferente y la filtración glomerular cae o se anula",
 "Porque contraen la arteriola aferente y la filtración glomerular cae o incluso se anula del todo",
 "Porque evitan la vasoconstricción de la arteriola aferente y la filtración glomerular aumenta mucho",
 "Porque producen una nefritis intersticial alérgica con proteinuria masiva y oliguria persistente"],a:0,
 cita:"Pueden provocar un deterioro de la función renal en casos de estenosis de la arteria renal al evitar mayor vasoconstricción en la arteriola glomerular eferente → se reduce, o incluso se anula, la filtración glomerular y aumenta el nitrógeno ureico sanguíneo (BUN) o de la creatinina sérica (controlar durante el tto).",
 n:"Por eso hay que vigilar el BUN y la creatinina: evaluar la función renal antes y a los 2-7 días de tratamiento."},
/* ===== Tema 2 completo (t2-autacoides): págs. 23-33, IECA y ARA II, cininas, péptidos natriuréticos, NO y eicosanoides ===== */
/* ---------- Pág. 23 · resumen manuscrito de los IECAs ---------- */
{doc:"t2-autacoides",t:2,p:23,q:"Según tu resumen de los IECAs, son vasodilatadores, antiproliferativos y antitrombóticos porque aumentan:",o:[
 "Las cininas, el óxido nítrico y las prostaciclinas",
 "La angiotensina II, la aldosterona y la vasopresina",
 "Las catecolaminas, el tromboxano A₂ y la endotelina",
 "Los leucotrienos, la histamina y la serotonina"],a:0,
 cita:"(anotación a mano: VASODILATADORES ANTIPROLIFERATIVOS Y ANTITROMBÓTICOS · ↑ Cininas, Óxido Nítrico y prostaciclinas)"},
/* ---------- Pág. 24 · IECAs en la ICC y ARA II ---------- */
{doc:"t2-autacoides",t:2,p:24,q:"Usos de los IECA que resaltaste en tus apuntes. Señala la CORRECTA:",o:[
 "Disfunción ventricular, tras un infarto, nefropatía diabética e insuficiencia renal progresiva",
 "Disfunción ventricular, tras un infarto, nefropatía diabética y estenosis de la arteria renal",
 "Hipotensión arterial, tras un infarto, nefropatía diabética e insuficiencia renal progresiva",
 "Disfunción ventricular, shock hipovolémico, nefropatía diabética e insuficiencia renal progresiva"],a:0,
 cita:"- DISFUNCIÓN VENTRICULAR, aunque no curse con IC grave. Actividad beneficiosa ya que produce vasodilatación, disminución del tono simpático y menor retención de Na+ y H2O. Todo ello mejora la hemodinámica.\n- TRAS INFARTO Y EN PACIENTES CON ALTO RIESGO DE CARDIOPATÍA ISQUÉMICA (en la especie humana).\n- NEFROPATÍA DIABÉTICA\n- INSUFICIENCIA RENAL PROGRESIVA/NEFROPATÍA CRÓNICA PROGRESIVA",
 n:"En tu resumen manuscrito (pág. 23) la estenosis de la arteria renal va con «!» como precaución (↑ NU y creatinina), no como uso; y la hipotensión es una reacción adversa."},
{doc:"t2-autacoides",t:2,p:24,q:"IECAs en la insuficiencia cardíaca congestiva (ICC). Señala la CORRECTA:",o:[
 "Se empieza con dosis bajas y se sube según los síntomas; pueden asociarse a furosemida o digoxina",
 "Se empieza con la dosis máxima y se baja según los síntomas; pueden asociarse a furosemida o digoxina",
 "Se empieza con dosis bajas y se sube según los síntomas; nunca se asocian a diuréticos ni digitálicos",
 "Se empieza con la dosis máxima y se baja según los síntomas; nunca se asocian a diuréticos ni digitálicos"],a:0,
 cita:"- En ICC, asociados a diuréticos (furosemida) o cardiotónicos (digoxina en caballo, gato y perro, digitoxina en perro).\nPUEDEN ASOCIARSE A DIGITÁLICOS Y FUROSEMIDA. MEDICAMENTOS VETERINARIOS: ENACARD® (ENALAPRIL); PERRO. FORTEKOR (BENAZEPRIL) (anotación a mano: Se empieza con dosis bajas y se van subiendo hasta la óptima viendo síntomas.)",
 n:"IECA veterinarios de tus apuntes: Enacard® (enalapril) y Fortekor® (benazepril, perro)."},
{doc:"t2-autacoides",t:2,p:24,q:"Antagonistas de los receptores de la angiotensina II (ARA II). Señala la CORRECTA:",o:[
 "La saralasina es agonista parcial y parenteral; los sartanes, antagonistas puros del AT1 por vía oral",
 "La saralasina es antagonista pura y oral; los sartanes, agonistas parciales del AT1 por vía parenteral",
 "La saralasina es agonista parcial y parenteral; los sartanes, antagonistas puros del AT2 por vía oral",
 "Ambos son antagonistas puros del AT1 por vía oral y su uso en veterinaria ya está consolidado"],a:0,
 cita:"La saralasina es un péptido análogo a la angiotensina II con actividad agonista parcial. No se utiliza ya que requiere administración parenteral.\nLos “sartanes” son antagonistas puros del receptor AT1 que se pueden administrar por vía oral. SU USO EN VETERINARIA ESTÁ EN ESTUDIO Y NO ESTÁ CONSOLIDADO. (anotación a mano: ARA II inhiben AT1)"},
{doc:"t2-autacoides",t:2,p:24,q:"Sartanes frente a IECA según tus apuntes. Señala la CORRECTA:",o:[
 "No favorecen la formación de bradicinina (sin tos seca) y eliminan mejor la proteinuria renal",
 "Aumentan la bradicinina, con lo que suman su vasodilatación, y eliminan mejor la proteinuria renal",
 "No favorecen la formación de bradicinina (sin tos seca), pero empeoran la proteinuria renal",
 "Aumentan la bradicinina, con lo que suman su vasodilatación, pero empeoran la proteinuria renal"],a:0,
 cita:"NO FAVORECEN LA FORMACIÓN DE BRADICININA, pueden sustituir a los IECA cuando existan RRAA relacionadas con dicha cinina (tos seca en el hombre, sobre todo en paciente hipertensos que toleran mal los golpes de tos). Un inconveniente es que se pierde el efecto vasodilatador de la misma.\nSe utiliza en el diagnóstico de la hipertensión renina dependiente y en pacientes con hipertensión que no toleran los IECA debido a la tos seca. (anotación a mano: Los sartanes funcionan mejor que los IECAS para eliminar la proteinuria en orina en animales con Inf. Renal)",
 n:"Inconveniente: al no aumentar la bradicinina se pierde su efecto vasodilatador."},
/* ---------- Pág. 25 · bradicinina, atriopeptinas y sustancia P ---------- */
{doc:"t2-autacoides",t:2,p:25,q:"Según tus apuntes, la calidina y la bradicinina son importantes en:",o:[
 "Coagulación, fibrinólisis y complemento, ↑ permeabilidad capilar, vasodilatación y dolor",
 "Coagulación, fibrinólisis y complemento, ↓ permeabilidad capilar, vasoconstricción y analgesia",
 "Agregación plaquetaria, ↓ permeabilidad capilar, broncodilatación, sedación y analgesia",
 "Coagulación, fibrinólisis y complemento, ↑ permeabilidad capilar, vasoconstricción y dolor"],a:0,
 cita:"Es una cinina plasmática con un potente efecto vasodilatador.\nEs uno de los mediadores fisiológicos liberados por el mastocito en la anafilaxia. La calidina y la bradicinina son importantes en:\n- Coagulación sanguínea\n- Fibrinólisis y actividad del complemento\n- ↑ permeabilidad capilar\n- Vasodilatación, edema, dolor y contracciones repetidas en músculo liso"},
{doc:"t2-autacoides",t:2,p:25,q:"Factor natriurético auricular (FNA). Señala la CORRECTA:",o:[
 "Se libera al distenderse la aurícula derecha y, como no hace perder K⁺, sirve si hay hipopotasemia",
 "Se libera al distenderse el ventrículo izquierdo y, como no hace perder K⁺, sirve si hay hipopotasemia",
 "Se libera al distenderse la aurícula derecha, pero como hace perder K⁺ se evita si hay hipopotasemia",
 "Se libera cuando hay hipovolemia y, como hace perder K⁺, se evita si hay hipopotasemia"],a:0,
 cita:"•se libera principalmente cuando se distiende la aurícula derecha por sobrecarga de volumen.\nPotentes diuréticos, natriuréticos y vasodilatadores, e inhibidores de la secreción de aldosterona.\nActúan principalmente sobre el glomérulo y podría ser útil en situaciones donde los diuréticos no son efectivos crónicamente, como en la injuria renal isquémica.\nEstas hormonas no producen pérdida de potasio como ocurre con los diuréticos convencionales. (anotación a mano: Como en caso de que haya hipopotasemia)"},
{doc:"t2-autacoides",t:2,p:25,q:"Sustancia P. Señala la CORRECTA:",o:[
 "Hipotensora potente no bloqueada por la atropina; estimula la motilidad intestinal y transmite el dolor",
 "Hipotensora potente bloqueada por la atropina; estimula la motilidad intestinal y transmite el dolor",
 "Hipotensora potente no bloqueada por la atropina; relaja el músculo liso intestinal y es analgésica",
 "Hipertensora potente no bloqueada por la atropina; estimula la motilidad intestinal y transmite el dolor"],a:0,
 cita:"- Presenta propiedades hipotensoras potentes no bloqueada por atropina.\n- Provoca: estimulación del músculo liso intestinal, estimulación de la secreción salival, diuresis y otras acciones centrales. (anotación a mano: ↳ movimiento gástrico)\nEs abundante en neuronas aferentes sensitivas primarias no mielinizadas y se asocia con la transmisión del dolor. (anotación a mano: ↓ dolor !)",
 n:"En tus apuntes, «no bloqueada por atropina» se dice de la sustancia P, no de la bradicinina."},
/* ---------- Págs. 26-27 · óxido nítrico ---------- */
{doc:"t2-autacoides",t:2,p:26,q:"Formas de la óxido nítrico sintasa (NOS). Señala la CORRECTA:",o:[
 "La endotelial y la neuronal son constitutivas y dependen del calcio; la inducible (iNOS), no",
 "La endotelial y la neuronal son constitutivas e independientes del calcio; la inducible sí depende",
 "La endotelial y la inducible son constitutivas y dependen del calcio; la neuronal, no",
 "Las tres son inducibles y dependen del calcio; solo sintetizan NO cuando hay inflamación"],a:0,
 cita:"Existen tres formas de NOS:\n1. Dos denominadas constitutivas y dependientes de calcio (cNOS): endotelial y neuronal, sintetizan NO en condiciones normales\n2. Una inducible e independiente del calcio (iNOS), que no se expresa o lo hace muy débilmente en condiciones fisiológicas."},
{doc:"t2-autacoides",t:2,p:27,q:"Función del NO marcada «imp»: en la defensa cerebral frente a infecciones, la microglía expresa grandes cantidades de:",o:[
 "La isoforma inducible de la NO sintasa (iNOS)",
 "La isoforma endotelial de la NO sintasa (cNOS)",
 "La isoforma neuronal de la NO sintasa (cNOS)",
 "La ciclooxigenasa inducible del foco (COX-2)"],a:0,
 cita:"4. Participación en mecanismos de defensa cerebral ante infecciones mediante la microglía, que en estas situaciones expresa grandes cantidades de la isoforma iNOS (inducible) (anotación a mano: imp)"},
/* ---------- Pág. 28 · COX-1 ---------- */
{doc:"t2-autacoides",t:2,p:28,q:"Junto a la COX-1 anotaste «Riesgo úlceras si tomas AINEs (pastillas)». ¿Qué lo explica según tus apuntes?",o:[
 "La COX-1 es constitutiva y sintetiza, entre otras, la PGE₂ del estómago",
 "La COX-2 es constitutiva y sintetiza, entre otras, la PGE₂ del estómago",
 "La COX-1 es inducible y solo sintetiza el TXA₂ de plaquetas y macrófagos",
 "La COX-1 es inducible y sintetiza los leucotrienos de la mucosa gástrica"],a:0,
 cita:"La COX-1 es la enzima constitutiva que interviene en la síntesis de:\n-TXA2 en plaquetas y macrófagos\n-PGI2 en plaquetas y célula endotelial\n-PGE2 en útero, ovario, osteoclastos, riñón y estómago entre otros tejidos. (anotación a mano: → Riesgo úlceras si tomas Aines Pastillas)"},
/* ---------- Pág. 29 · metabolismo y leucotrienos ---------- */
{doc:"t2-autacoides",t:2,p:29,q:"Metabolismo de las prostaglandinas (anotaste «muy baja» y «+ imp»). Señala la CORRECTA:",o:[
 "Vida media inferior a 8 minutos; lo que pasa a la sangre se biotransforma en hígado y pulmón",
 "Vida media de unas 8 horas; lo que pasa a la sangre se biotransforma en hígado y pulmón",
 "Vida media inferior a 8 minutos; lo que pasa a la sangre se elimina sin cambios por el riñón",
 "Vida media de unas 8 horas; lo que pasa a la sangre se elimina sin cambios por el riñón"],a:0,
 cita:"- El tiempo de vida media de PGs es inferior a 8 minutos por lo que actúan en el lugar de su síntesis. (anotación a mano: muy baja)\n- El resto: rápida biotransformación en numerosos tejidos como pulmón, hígado, riñón, bazo, tejido adiposo, intestino, etc. (anotación a mano: + imp, con una flecha hasta «nivel hepático y pulmonar»)\nLa biotransformación ocurre parcialmente en el tejido donde se sintetizan y la parte que pasa a circulación sistémica se biotransforma a nivel hepático y pulmonar."},
{doc:"t2-autacoides",t:2,p:29,q:"Leucotrienos (lo marcaste con «!»). Señala la CORRECTA:",o:[
 "La 5-LOX de las células inflamatorias forma LTC₄ y LTD₄, broncoconstrictores 1.000 veces más potentes que la histamina",
 "La 5-LOX de las células inflamatorias forma LTA₄ y LTB₄, broncoconstrictores 1.000 veces más potentes que la histamina",
 "La 5-LOX de las plaquetas forma LTC₄ y LTD₄, broncodilatadores 1.000 veces más potentes que la histamina",
 "La COX-2 de las células inflamatorias forma LTC₄ y LTD₄, broncoconstrictores 10 veces menos potentes que la histamina"],a:0,
 cita:"La 5-Lipooxigenasa está presente en las células inflamatorias (PMN, mastocitos, basófilos, macrófagos y eosinófilos) y está involucrada en la fisiopatología del asma y el shock anafiláctico\nLos leucotrienos C4, D4 y E4 poseen un radical cisteína y, por ello, se denominan conjuntamente: cisteinil-leucotrienos (CysLT). Los LTC4 y LTD4 son potentes broncoconstrictores hoy se reconocen como componentes 1º de: sustancia de reacción lenta en la anafilaxia (SRS-A,) un broncoconstrictor 1,000 más potente que la histamina. Tiene interés clínico  contrarrestar sus acciones.",
 n:"La SRS-A la forman los cisteinil-leucotrienos (C₄, D₄ y E₄), los que llevan un radical cisteína."},
/* ---------- Pág. 30 · efectos de los prostanoides ---------- */
{doc:"t2-autacoides",t:2,p:30,q:"Tabla de efectos de los prostanoides: ¿qué hacen la PGE₂ y la PGI₂ (las celdas que rodeaste y tu nota sobre los bronquios)?",o:[
 "Relajan los bronquios; bajan la PA con taquicardia y aumentan el flujo renal y la natriuresis",
 "Contraen los bronquios; bajan la PA con taquicardia y aumentan el flujo renal y la natriuresis",
 "Relajan los bronquios; suben la PA con bradicardia y aumentan el flujo renal y la natriuresis",
 "Relajan los bronquios; bajan la PA con taquicardia y reducen el flujo renal y la diuresis"],a:0,
 cita:"Músculo liso · Bronquial: PGE2 Relaja · PGF2α Contrae · PGI2 Relaja · TXA2 Contrae (anotación a mano: Broncoconstricción vs Broncodilatación)\nSistemas · Cardiovasc.: PGE2 Vasodilatador, ↓ PA, Taquicardia, ↑ Gasto cardiaco · PGI2 Vasodilatador, ↓↓ PA, Taquicardia (celdas rodeadas a mano)\nRenal: PGE2 ↑ Flujo sanguíneo, Diuresis, natriuresis, ↑ Secreción renina · PGI2 ↑ Flujo sanguíneo, ↑ Diuresis, natriuresis, ↑ Secreción renina (celdas rodeadas a mano)",
 n:"La PGF₂α y el TXA₂, en cambio, contraen el bronquio."},
{doc:"t2-autacoides",t:2,p:30,q:"PGF₂α según tus apuntes. Señala la CORRECTA:",o:[
 "Es luteolítica (aborto en gestación temprana) y en el semen ↑ la motilidad uterina",
 "Mantiene el cuerpo lúteo (protege la gestación) y en el semen ↑ la motilidad uterina",
 "Es luteolítica (aborto en gestación temprana) y en el semen ↓ la motilidad uterina",
 "Mantiene el cuerpo lúteo (protege la gestación) y en el semen ↓ la motilidad uterina"],a:0,
 cita:"1. PGF2α :\n- Luteolisis → gestación →regresión del cuerpo lúteo→ aborto en gestación temprana.\n- Efecto oxitócico: en semen → ↑ motilidad uterina para favorecer progresión del esperma."},
{doc:"t2-autacoides",t:2,p:30,q:"PGE₂ según tus apuntes. Señala la CORRECTA:",o:[
 "Inhibe la secreción de ácido gástrico y, si se libera en el cerebro, produce fiebre",
 "Estimula la secreción de ácido gástrico y, si se libera en el cerebro, produce fiebre",
 "Inhibe la secreción de ácido gástrico y, si se libera en el cerebro, es antipirética",
 "Estimula la secreción de ácido gástrico y, si se libera en el cerebro, es antipirética"],a:0,
 cita:"- Inhibición de la secreción de ácido gástrico, aumento de la secreción de moco gástrico.\n- Es mediadora de la fiebre. (anotación a mano: → si se libera en cerebro produce fiebre)"},
{doc:"t2-autacoides",t:2,p:30,q:"Efectos inflamatorios de las prostaglandinas (sobre todo PGE y PGF). Señala la CORRECTA:",o:[
 "Vasodilatación sostenida, ↑ permeabilidad e hiperalgesia; potencian la bradicinina y la histamina",
 "Vasoconstricción sostenida, ↑ permeabilidad e hiperalgesia; potencian la bradicinina y la histamina",
 "Vasodilatación sostenida, ↑ permeabilidad y analgesia; antagonizan la bradicinina y la histamina",
 "Vasodilatación sostenida, ↓ permeabilidad e hiperalgesia; potencian la adrenalina y la angiotensina"],a:0,
 cita:"Efectos inflamatorios (fundamentalmente PGE y PGF):\n- Vasodilatación sostenida.\n- Contrarresta la acción de adrenalina y angiotensina.\n- Aumenta la permeabilidad vascular.\n- Potencian otros autacoides (bradicinina e histamina).\n- Hiperalgia.\n- Combinadas con histamina producen prurito.\n- Intermediarios en la fiebre",
 n:"La bradicinina estimula la secreción de prostaglandinas (pág. 28) y estas potencian su dolor: por eso la aspirina reduce el dolor por bradicinina."},
/* ---------- Pág. 31 · PGD2, PGI2, TXA2, leucotrienos e indicaciones ---------- */
{doc:"t2-autacoides",t:2,p:31,q:"Prostanoides y agregación plaquetaria (junto al TXA₂ anotaste «asma»). Señala la CORRECTA:",o:[
 "El TXA₂ es vasoconstrictor e induce la agregación; la PGD₂ y la PGI₂ la inhiben",
 "El TXA₂ es vasodilatador e inhibe la agregación; la PGD₂ y la PGI₂ la inducen",
 "El TXA₂ es vasoconstrictor e induce la agregación; la PGD₂ y la PGI₂ también la inducen",
 "El TXA₂ es vasodilatador e induce la agregación; la PGD₂ y la PGI₂ la inhiben"],a:0,
 cita:"3. PGD2 : Vasodilatación e inhibición de la agregación plaquetaria (liberado especialmente por mastocitos).\n4. Efectos de PGI2 : Vasodilatador potente, inhibe la agregación plaquetaria, interviene en el dolor, en la migración plaquetaria y en ↑ permeabilidad vascular.\n5. Efectos TXA2: vasoconstrictor e inductor de la agregación plaquetaria. (anotación a mano: ← ASMA)"},
{doc:"t2-autacoides",t:2,p:31,q:"Efectos de los leucotrienos según tus apuntes. Señala la CORRECTA:",o:[
 "Son quimiotácticos de neutrófilos y eosinófilos; el LTC₄ dilata casi todos los vasos salvo los coronarios",
 "Son quimiotácticos de linfocitos y plaquetas; el LTC₄ dilata casi todos los vasos salvo los coronarios",
 "Son quimiotácticos de neutrófilos y eosinófilos; el LTC₄ contrae casi todos los vasos salvo los coronarios",
 "Son quimiotácticos de linfocitos y plaquetas; el LTC₄ contrae casi todos los vasos salvo los coronarios"],a:0,
 cita:"6. En general todos los leucotrienos:\n•Efecto quimiotáctico potente sobre neutrófilos y eosinófilos.\n•Mediadores de la inflamación (sobre todo LTB4 ).\nLos Cis-LT: •Broncoconstricción (importantes en asma),\n•vasodilatación (LTC4 →vasodilatación en la mayoría de tejidos, pero vasoconstricción coronaria)\n•aumento de permeabilidad.",
 n:"Coincide con la clave de clase de «Los leucotrienos NO ocasionan…»: sí dan vasodilatación, ↑ permeabilidad y quimiotaxis de neutrófilos; los linfocitos no aparecen."},
{doc:"t2-autacoides",t:2,p:31,q:"Cloprostenol (análogo de PGF₂α) en veterinaria. ¿Qué indicaciones recogen tus apuntes?",o:[
 "Inducción del parto en cerda y vaca, sincronización del celo y cuerpo lúteo persistente en la cerda",
 "Inducción del parto en yegua y perra, sincronización del celo y cuerpo lúteo persistente en la cerda",
 "Inducción del parto en cerda y vaca, mantenimiento de la gestación y cuerpo lúteo persistente",
 "Inducción del parto en cerda y vaca, sincronización del celo y retraso de la involución uterina"],a:0,
 cita:"GINECOLÓGICAS/OBSTÉTRICAS: CLOPROSTENOL (análogo de PGF2α )\n1. Inducción al parto (cerda y vaca)\n2. Para provocar aborto/expulsión fetos muertos/abortos incompletos (vaca, cerda y yegua)\n3. Sincronización del celo/salida en celo (vaca, oveja, cabra, cerda y yegua)\n4. Uso en el postparto temprano para mejorar la eficiencia reproductiva: Provocan una aceleración de la involución uterina.\n5. En patología ovárica:\na. CERDA:\ni. Degeneración ovárica quística: a partir del día 12 del ciclo.\nii. Cuerpo lúteo persistente-pseudogestación"},
/* ---------- Pág. 32 · cloprostenol, latanoprost y contraindicaciones ---------- */
{doc:"t2-autacoides",t:2,p:32,q:"Cloprostenol: mecanismo y uso en el verraco. Señala la CORRECTA:",o:[
 "↓ receptores de LH del ovario → regresión del cuerpo lúteo y ↓ progesterona; en el verraco ↑ la producción seminal",
 "↑ receptores de LH del ovario → persistencia del cuerpo lúteo y ↑ progesterona; en el verraco ↑ la producción seminal",
 "↓ receptores de LH del ovario → regresión del cuerpo lúteo y ↓ progesterona; en el verraco ↓ la producción seminal",
 "↑ receptores de LH del ovario → persistencia del cuerpo lúteo y ↑ progesterona; en el verraco ↓ la libido"],a:0,
 cita:"7. En el verraco:\na. Tratamiento de la libido reducida\nb. Incremento de la producción seminal\nCLOPROSTENOL:\nInduce una caída en el número de receptores de hormona luteinizante (LH) en el ovario, lo que conduce a una rápida regresión del cuerpo lúteo y un descenso en los niveles de progesterona. En la adenohipófisis aumentan los niveles de hormona estimulante del folículo (FSH). Esto permite la maduración de un nuevo folículo, aparición del estro y la ovulación."},
{doc:"t2-autacoides",t:2,p:32,q:"Contraindicaciones de los eicosanoides (junto a «alteraciones gastrointestinales» anotaste «Rotura!»). Señala la CORRECTA:",o:[
 "No en preñadas (salvo para abortar), ni con alteraciones digestivas, ni por vía intravenosa",
 "Sí en preñadas y con alteraciones digestivas, pero nunca por vía intravenosa",
 "No en preñadas (salvo para abortar); la vía intravenosa es la de elección por su rapidez",
 "No con alteraciones digestivas; en équidos de abasto se pueden usar sin ninguna restricción"],a:0,
 cita:"No utilizar en animales preñados donde el aborto no está indicado, o animales con alteraciones gastrointestinales o del aparato respiratorio. No administrar por vía intravenosa (se alcanzarían dosis demasiado elevadas). No aplicar en ganado equino destinado al consumo humano. (anotación a mano: Rotura !, con una flecha hacia «alteraciones gastrointestinales»)",
 n:"Advertencia para quien lo manipula: mujeres, niños y asmáticos, con extrema precaución (aborto o broncoconstricción aguda); se absorbe por la piel."},
{doc:"t2-autacoides",t:2,p:32,q:"Latanoprost en el perro según tus apuntes:",o:[
 "Reduce la PIO en el glaucoma agudo y es de los primeros fármacos a utilizar",
 "Aumenta la PIO, por lo que está contraindicado en el glaucoma agudo canino",
 "Reduce la PIO, pero se reserva para cuando fallan todos los demás fármacos",
 "Previene las úlceras gástricas en perros que reciben AINEs de forma crónica"],a:0,
 cita:"Para ↓ presión intraocular en perros con glaucoma agudo se utiliza latanoprost, ha demostrado ser, junto con otras PG las sustancias hipotensoras más eficaces en el perro, lográndose marcadas reducciones de la PIO. La experiencia clínica indica que es uno de los primeros fármacos a utilizar en glaucoma agudo."},
/* ---------- Pág. 33 · acciones contra los eicosanoides y antileucotrienos ---------- */
{doc:"t2-autacoides",t:2,p:33,q:"Antileucotrienos (zafirlukast, montelukast, pranlukast), marcado «imp». Señala la CORRECTA:",o:[
 "Son profilácticos: se dan si sabemos que tiene asma (gatos), pero en pleno brote sirven poco",
 "Son de rescate: muy eficaces en pleno brote asmático, pero no sirven como tratamiento preventivo",
 "Son profilácticos, pero solo por vía inhalada o intravenosa, porque no se absorben por vía oral",
 "Inhiben la COX y la síntesis de leucotrienos; son de elección en la crisis asmática grave"],a:0,
 cita:"Nueva familia terapéutica que ofrece la ventaja de su administración oral: ZAFIRLUKAST y MONTELUKAST, PRANLUKAST.\nFármacos antiinflamatorios a través de un antagonismo eficaz con los receptores de los Leucotrienos (mediadores del proceso inflamatorio en el asma).\nEstán indicados en el tratamiento de mantenimiento en casos de asma persistente leve y persistente moderada, profiláctico. (anotación a mano: imp · Profilácticos en casos que sepamos que tiene algo (ASMA GATOS) → Previene. Si ya tiene el brote no sirve mucho)"},
{doc:"t2-autacoides",t:2,p:33,q:"Acciones contra los eicosanoides. Relaciona cada fármaco con su diana:",o:[
 "Glucocorticoides: fosfolipasa A₂; dazoxiben: TX sintetasa; daltroban: receptor del TXA₂",
 "Glucocorticoides: COX-2; dazoxiben: receptor del TXA₂; daltroban: fosfolipasa A₂",
 "Glucocorticoides: fosfolipasa A₂; dazoxiben: receptor del TXA₂; daltroban: TX sintetasa",
 "Glucocorticoides: TX sintetasa; dazoxiben: fosfolipasa A₂; daltroban: receptor del TXA₂"],a:0,
 cita:"•Inhibidores de la síntesis de eicosanoides: glucocorticoides (AIE)→ inhiben las fosfolipasa A2 (1).\n·Inhibidores de la síntesis de PGs y TXs:\n• AINE (COX) (2).\n• Derivados imidaxólicos (dazoxiben) indólicos y oxipiridazininas (inhibe TX sintetasa)(3).\n•Antagonistas de receptores de eicosanoides:\n• Daltroban (inhibe receptor TXA2)(4).\n• Antileucotrienos (inhiben receptores de leucotrienos)(5)."},
/* ===== Tema 4 completo (t4-esteroideos): págs. 1-10, ACTH y glucocorticoides ===== */
/* ---------- p. 1 · ACTH: estructura ---------- */
{doc:"t4-esteroideos",t:4,p:1,q:"Según tus apuntes, el tetracosáctido es:",o:[
 "El fragmento 1-24 de la ACTH, que tiene la actividad biológica y no produce reacciones alérgicas",
 "El fragmento 25-33 de la ACTH, que da la especificidad de especie y no produce reacciones alérgicas",
 "La proopiomelanocortina, el precursor que libera la ACTH y la β-lipotropina sin dar alergias",
 "Un análogo sintético de la CRH que estimula la adenohipófisis y produce a menudo reacciones alérgicas"],a:0,
 cita:"39 aa: 1-24 actividad biológica → tetracosáctido\n25-33 confieren especificidad especie. (anotación a mano: junto a tetracosáctido «→ no produce reacciones alérgicas»; junto a 25-33 «→ puede dar alergia»)",
 n:"Por eso, en las RRAA de la ACTH: «Reacciones alérgicas, menos frecuentes si se administra tetracosáctido»."},

/* ---------- p. 2 · ACTH: farmacocinética, usos y dosis ---------- */
{doc:"t4-esteroideos",t:4,p:2,q:"Farmacocinética de la ACTH según tus apuntes:",o:[
 "Solo parenteral (sobre todo IV) por ser un péptido; la degradan proteasas plasmáticas, hepáticas y renales",
 "Buena absorción oral por ser muy liposoluble; la metabolizan sobre todo las enzimas microsomales del hígado",
 "Solo vía parenteral (sobre todo SC); no se metaboliza y se elimina intacta por la bilis en unas pocas horas",
 "Vía oral o IV indistintamente; la inactivan las proteasas digestivas y se elimina sobre todo por las heces"],a:0,
 cita:"Administración: sólo por vía parenteral por su estructura peptídica.\nIV, sobre todo.\nIM y SC: sufren biotransformación por enzimas tisulares en el punto de inoculación pero accede en cantidad suficiente.\nMetabolismo por proteasas plasmáticas, hepáticas y renales. t½ ≅ 20 min.",
 n:"Eliminación renal (escasa por la «recuperación» de aminoácidos). Hay preparaciones depot (12-24 h)."},

{doc:"t4-esteroideos",t:4,p:2,q:"Usos y dosificación de la ACTH. Señala la opción CORRECTA según tus apuntes:",o:[
 "Sirve para diferenciar la insuficiencia adrenal 1ª de la 2ª, y su uso prolongado exige suplementar K⁺ a diario",
 "Sirve para diferenciar la insuficiencia adrenal 1ª de la 2ª, y su uso prolongado exige suplementar Na⁺ a diario",
 "Duplica el cortisol plasmático en la neoplasia adrenocortical 1ª, y su uso prolongado exige suplementar K⁺",
 "Su uso principal es la cetosis bovina, y a dosis excesivas produce atrofia de la corteza adrenal"],a:0,
 cita:"Diagnóstico diferencial de hiperplasia adrenocortical 2ª y neoplasia adrenocortical 1ª: la aplicación de ACTH, en el primer caso, da lugar a que se dupliquen los niveles de cortisol plasmático; en la neoplasia este incremento es menos acusado.\nDiagnóstico diferencial de insuficiencia adrenal 1ª y 2ª.\nCetosis bovina: poco frecuente. RRAA\nDosis excesivas: hipertrofia adrenocortical.\nDOSIS DE LA ACTH: Su uso prolongado debe acompañarse del suplemento diario de K+. (anotación a mano: Suplementar con potasio)",
 n:"El cortisol se duplica en la hiperplasia adrenocortical 2ª, no en la neoplasia 1ª. La cetosis bovina es un uso poco frecuente."},

/* ---------- p. 3 · Síntesis de glucocorticoides ---------- */
{doc:"t4-esteroideos",t:4,p:3,q:"Síntesis de glucocorticoides en la corteza adrenal, según tus apuntes:",o:[
 "Se forman en la zona fasciculada a partir del colesterol de las LDL, sin reserva de hormona preformada",
 "Se forman en la zona glomerular a partir del colesterol de las LDL y se almacenan en gránulos secretores",
 "Se forman en la zona fasciculada a partir de la tirosina y se almacenan unidos a la transcortina",
 "Se forman en la médula adrenal a partir del colesterol y se guardan como hormona ya preformada"],a:0,
 cita:"SÍNTESIS DE GLUCOCORTICOIDES: Sintetizados en zona fasciculada de corteza adrenal (Cortisol o hidrocortisona, Corticosterona)\nPrecursor es colesterol → LDL interactúan con receptores específicos de membrana de células adrenales, el complejo es internado por endocitosis y sufre hidrólisis liberando colesterol\nCorteza no contiene reserva de hormonas preformadas (anotación a mano: → sólo sintetiza cuando se active por ACTH)",
 n:"Por especies: cerdo, perro, hombre y primates → cortisol > corticosterona; roedores y conejo → corticosterona > cortisol; rumiantes → cantidades similares."},

/* ---------- p. 4 · Estructura y clasificación ---------- */
{doc:"t4-esteroideos",t:4,p:4,q:"Modificaciones estructurales de los corticoides. Señala la CORRECTA según tus apuntes:",o:[
 "El doble enlace C1-C2 (prednisolona) baja la acción mineralocorticoide; un OH o metilo en C16 la minimiza",
 "El doble enlace C1-C2 (prednisolona) sube la acción mineralocorticoide; un OH o metilo en C16 la minimiza",
 "El doble enlace C1-C2 (prednisolona) baja la acción mineralocorticoide; un OH o metilo en C16 la anula del todo",
 "El flúor en C9 (2ª generación) baja la acción mineralocorticoide; un OH o metilo en C16 la aumenta"],a:0,
 cita:"Corticoides de 1ª generación: se ha introducido un doble enlace entre C1 y C2. Tienen menor actividad mineralocorticoide y más actividad glucocorticoide. Se incluyen aquí la prednisona y prednisolona.\nCorticoides de 2ª generación: derivados halogenados, se introduce un átomo de flúor en el C9 . Incremento de su actividad gluco y mineralocorticoide.\n*Se suprime la actividad mineralocorticoide si se introduce en C16 un grupo OH en posición α (triamcinolona). un metilo en posición α (dexametasona) o ß (betametasona). (anotación a mano: «suprime» tachado y corregido por «minimiza»; al margen: «se pueden regular añadiendo y tal… pero siempre queda algo!»)",
 n:"Ojo a tu corrección: en triamcinolona, dexametasona y betametasona la acción mineralocorticoide se minimiza, pero no desaparece del todo."},

{doc:"t4-esteroideos",t:4,p:4,q:"Corticoides de 3ª generación (deflazacort, budesonida). Según tus apuntes:",o:[
 "Son menos antiinflamatorios que la prednisona, carecen de acción mineralocorticoide y afectan menos al hueso",
 "Son más antiinflamatorios que la prednisona, carecen de acción mineralocorticoide y afectan menos al hueso",
 "Son menos antiinflamatorios que la prednisona, conservan acción mineralocorticoide y afectan menos al hueso",
 "Son más antiinflamatorios que la prednisona, conservan acción mineralocorticoide y afectan mucho más al hueso"],a:0,
 cita:"Se ha introducido un anillo de condensación en C16-C17 (deflazacort, budesonida).\nMenor potencia antiinflamatoria que la prednisona.\nCarecen de actividad mineralocorticoide .\nMenos actividad glucocorticoide (metabolismo de glúcidos y del Ca2+). (anotación a mano: mejor en niños, no afecta tanto a huesos)"},

/* ---------- p. 5 · Mecanismo: efectos genómicos ---------- */
{doc:"t4-esteroideos",t:4,p:5,q:"Efectos genómicos y no genómicos de los glucocorticoides. Señala la CORRECTA:",o:[
 "Genómicos: por receptores nucleares y lentos (horas); no genómicos: por receptores de membrana y rápidos",
 "Genómicos: por receptores de membrana y rápidos (segundos); no genómicos: por receptores nucleares y lentos",
 "Genómicos: por receptores nucleares y rápidos (segundos); no genómicos: por receptores de membrana y lentos",
 "Genómicos y no genómicos van por receptores nucleares y tardan horas; solo cambia el gen que activan"],a:0,
 cita:"Los receptores esteroides (GR, miembros de una superfamilia de proteínas estructuralmente relacionadas entre sí), son receptores nucleares que regulan la transcripción genética. … → Efectos genómicos lentos (requieren horas para iniciarse) (con signos de exclamación a mano a ambos lados)\nEsquema: «Efectos no genómicos ←—— rápidos» (anotación a mano: rápidos, señalando los receptores de membrana)",
 n:"P. 6: los efectos rápidos no genómicos se deben a receptores de membrana específicos asociados a proteínas G (excitabilidad neuronal, comportamiento, secreción hormonal…)."},

{doc:"t4-esteroideos",t:4,p:5,q:"Efectos genómicos de los glucocorticoides: acción directa e indirecta. Señala la CORRECTA:",o:[
 "Directa: se unen a los GRE y sintetizan lipocortina 1 e IL-10; indirecta: inhiben NF-κB y AP-1",
 "Directa: inhiben NF-κB y AP-1; indirecta: se unen a los GRE y sintetizan lipocortina 1 e IL-10",
 "Directa: se unen a los GRE y sintetizan IL-1 y TNF; indirecta: activan los factores NF-κB y AP-1",
 "Directa: activan receptores de membrana con proteína G; indirecta: inhiben NF-κB y AP-1"],a:0,
 cita:"1. Acción directa: interacción con secuencias de ADN específicas, localizadas en zonas de regulación de genes (GRE) que ocasiona la formación de ARNm que originan la síntesis y liberación de proteínas “antiinflamatorias”:\na. lipocortina 1 (inhibe síntesis de eicosanoides por antagonizar la fosfolipasa A2 y PAF)…\nb. IL-10, antagonistas del receptor IL-1 y endopeptidasas neutras.\n2. Acción indirecta: inhibe la transcripción del factor nuclear Kappa (FN-κB) y proteína activadora 1 (AP-1) uniéndose a ellos→ Inhibición de expresión múltiples genes “inflamatorios” que codifican:\na. citoquinas (reguladoras de la inmunidad e inflamación)\nb. enzimas destructoras articulares (colagenasa y estromelisina)\nc. receptores de adhesión.",
 n:"La lipocortina 1 inhibe la síntesis de eicosanoides porque antagoniza la fosfolipasa A₂ y el PAF."},

/* ---------- p. 6 · 11β-HSD ---------- */
{doc:"t4-esteroideos",t:4,p:6,q:"Isoformas de la 11β-hidroxiesteroide-dehidrogenasa (11β-HSD). Señala la CORRECTA:",o:[
 "La tipo 2 inactiva el cortisol en riñón, colon y glándulas salivares; la tipo 1 lo regenera en hígado y tejido adiposo",
 "La tipo 1 inactiva el cortisol en riñón, colon y glándulas salivares; la tipo 2 lo regenera en hígado y tejido adiposo",
 "La tipo 2 inactiva la aldosterona en riñón, colon y glándulas salivares; la tipo 1 la regenera en hígado y pulmón",
 "La tipo 2 activa la cortisona en riñón, colon y glándulas salivares; la tipo 1 la inactiva en hígado y tejido adiposo"],a:0,
 cita:"Existe un mecanismo que permite la activación específica del RMC por la aldosterona: por la isoforma 2 de la enzima 11β-hidroxiesteroide-dehidrogenasa (11β-HSD).\nEsta enzima cataliza la conversión de cortisol y corticosterona a formas 11-ceto inactivas (cortisona y 11-dehidrocorticosterona) en tejidos con capacidad de reacción a mineralcorticoides como son riñón, colon y glándulas salivares. (anotación a mano: donde nos interesa que se active)\nLa isoforma 1 de la 11β-HSD actúa como 11β-reductasa regenerando los 11-ceto esteroides en hígado, tejido adiposo, cerebro, pulmón y otros tejidos, amplificando así la acción de los glucocorticoides.",
 n:"Hace falta porque aldosterona y cortisol se unen con igual afinidad al RMC y el cortisol circula a concentraciones 100-1000 veces mayores. La aldosterona resiste a la enzima por ser un derivado hemiacetal."},

/* ---------- p. 7 (marcada «imp!») · Efectos metabólicos ---------- */
{doc:"t4-esteroideos",t:4,p:7,q:"Efectos de los glucocorticoides sobre los glúcidos (página marcada «imp!» en tus apuntes):",o:[
 "Inducen en el hígado la glucogénesis y la gluconeogénesis, e inhiben la utilización periférica de glucosa",
 "Inducen en el hígado la glucogenólisis y la gluconeogénesis, e inhiben la utilización periférica de glucosa",
 "Inducen en el hígado la glucogénesis y la gluconeogénesis, y aumentan la utilización periférica de glucosa",
 "Inducen en el hígado la glucogenólisis, inhiben la gluconeogénesis y aumentan la utilización periférica"],a:0,
 cita:"A nivel hepático estimulan la síntesis de enzimas que intervienen en:\nGlucogénesis (triptófano 2,3 dioxigenasa y tirosina transferasa)\nGluconeogénesis (aa→glucosa; ↑ eliminación urinaria de N y ácido úrico) (fructosa 1, 6 difosfatasa y glucosa-6-fosfatasa)\nInhiben la utilización periférica de glucosa: ↑ glucemia y glucógeno (anotación a mano: HIPERGLUCEMIANTES; ¡Cuidado! Diabéticos)",
 n:"Resultado: ↑ glucemia y ↑ glucógeno. Son hiperglucemiantes: cuidado en diabéticos."},

{doc:"t4-esteroideos",t:4,p:7,q:"Glucocorticoides y grasas, según tus apuntes:",o:[
 "Apenas son lipolíticos, pero permiten que catecolaminas, glucagón y STH activen la lipasa",
 "Son muy lipolíticos por sí mismos y activan la lipasa sin necesidad de ninguna otra hormona",
 "Apenas son lipolíticos y además bloquean la lipasa que activan las catecolaminas y la STH",
 "Son lipogénicos: inhiben la lipasa y acumulan la grasa sobre todo en las extremidades"],a:0,
 cita:"Sobre las grasas tienen poca o ninguna actividad lipolítica, pero ejercen un papel permisivo a hormonas como el glucagón, STH (somatostatina), y catecolaminas: activan la lipasa mediante una cinasa dependiente de AMPc, cuya síntesis requiere la presencia de glucocorticoides.\n↑ dosis de glucocorticoides durante periodos prolongados → redistribución peculiar de la grasa corporal: cuello, hombros, mejillas y no en extremidades. (anotación a mano: Similar a Cushing)",
 n:"STH es la somatotropina u hormona del crecimiento (así aparece en la p. 6); en esta línea pone «somatostatina» por error."},

{doc:"t4-esteroideos",t:4,p:7,q:"Efectos hidroelectrolíticos de los glucocorticoides (según el compuesto):",o:[
 "Reabsorben Na⁺ y agua en el túbulo a cambio de K⁺, y aumentan la filtración glomerular",
 "Reabsorben Na⁺ y agua en el túbulo a cambio de K⁺, y disminuyen la filtración glomerular",
 "Eliminan Na⁺ y agua por el túbulo y retienen K⁺, y aumentan la filtración glomerular",
 "Eliminan Na⁺ y agua por el túbulo y retienen K⁺, y disminuyen la filtración glomerular"],a:0,
 cita:"Dependiendo del compuesto favorecen:\nReabsorción de agua por reabsorción tubular de Na+ (se intercambia por K+ que se pierde).\nFiltración glomerular: por aumento del flujo renal",
 n:"La retención de agua en los tejidos (acción mineralcorticoide) produce un «engorde fraudulento» y una mejora aparente del animal."},

{doc:"t4-esteroideos",t:4,p:7,q:"¿Por qué los glucocorticoides son hipertensores? Según tus apuntes:",o:[
 "Aumentan la reactividad a catecolaminas, inhiben la NO sintetasa y aumentan la volemia",
 "Disminuyen la reactividad a catecolaminas, activan la NO sintetasa y aumentan la volemia",
 "Aumentan la reactividad a catecolaminas, activan la NO sintetasa y disminuyen la volemia",
 "Bloquean los receptores β del corazón, inhiben la NO sintetasa y disminuyen la volemia"],a:0,
 cita:"Son hipertensores por:\n1. Acciones cardiacas: efecto inotropo positivo directo. Efecto inotropo y cronotropo positivos indirecto (liberación de catecolaminas).\n2. Acciones vasculares:\na. Aumentan la reactividad a catecolaminas: vasoconstricción.\nb. Inhiben NO sintetasa: inhibición de la vasodilatación. (anotación a mano: no se sintetiza Óxido Nítrico → no vasodilata → vasoconstricción)\n3. Aumentan la volemia por retención de agua."},

{doc:"t4-esteroideos",t:4,p:7,q:"Efectos de los glucocorticoides sobre la sangre, según tus apuntes:",o:[
 "↓ eosinófilos, basófilos y linfocitos; ↑ neutrófilos, eritrocitos y plaquetas (efecto trombótico)",
 "↑ eosinófilos, basófilos y linfocitos; ↓ neutrófilos, eritrocitos y plaquetas (efecto hemorrágico)",
 "↓ eosinófilos, basófilos y linfocitos; ↓ neutrófilos, eritrocitos y plaquetas (efecto hemorrágico)",
 "↓ neutrófilos, eritrocitos y linfocitos; ↑ eosinófilos, basófilos y plaquetas (efecto trombótico)"],a:0,
 cita:"Disminuyen eosinófilos, basófilos y linfocitos: inmunosupresores.\nAumentan los neutrófilos, eritrocitos y plaquetas: favorecen los fenómenos trombóticos. (anotación a mano: se usan en caso de linfomas)"},

/* ---------- p. 8 («¡EFECTOS ADVERSOS GLUCOCORTICOIDES!») ---------- */
{doc:"t4-esteroideos",t:4,p:8,q:"Glucocorticoides, calcio y hueso. Señala la CORRECTA según tus apuntes:",o:[
 "Reducen la absorción intestinal de Ca²⁺, aumentan la actividad paratiroidea y la eliminación de Ca, P y N",
 "Aumentan la absorción intestinal de Ca²⁺, aumentan la actividad paratiroidea y la eliminación de Ca, P y N",
 "Reducen la absorción intestinal de Ca²⁺, disminuyen la actividad paratiroidea y la eliminación de Ca, P y N",
 "Aumentan la absorción intestinal de Ca²⁺, disminuyen la actividad paratiroidea y la eliminación de Ca, P y N"],a:0,
 cita:"↑ catabolismo de la matriz ósea e inhiben la actividad osteoblástica y con ello la producción de osteocalcina.\nAlteran la absorción intestinal de Ca2+ al inhibir la actividad vitamina D, y ↑ actividad paratiroidea (estimulación osteoclástica): Aumentan la eliminación Ca, P y N (anotación a mano: ↓ delante de Ca2+; al margen: para intentar compensar ↓Ca2+)",
 n:"En la p. 7 (imp): «Interfieren la absorción de calcio a nivel gastrointestinal (inhibición de la vitamina D)» y «A dosis elevadas→ aumenta la excreción renal de Ca2+». Además inhiben los osteoblastos → osteoporosis."},

{doc:"t4-esteroideos",t:4,p:8,q:"Efectos de los glucocorticoides sobre el músculo según la dosis (tus apuntes):",o:[
 "Dosis altas: catabolismo proteico y atrofia muscular; dosis bajas: debilidad y fatiga por mala adecuación circulatoria",
 "Dosis altas: hipertrofia muscular por mejor perfusión vascular; dosis bajas: atrofia muscular por catabolismo proteico",
 "Dosis altas: debilidad sin pérdida de masa muscular; dosis bajas: atrofia muscular por un catabolismo proteico intenso",
 "Dosis altas: catabolismo proteico y atrofia muscular; dosis bajas: hipertrofia muscular por su efecto permisivo"],a:0,
 cita:"A dosis altas:\nInducen catabolismo proteico, reducción de masa muscular debilidad y fatiga: atrofia muscular.\nMenor perfusión vascular del músculo que contribuye a una menor nutrición y desarrollo del mismo.\nDosis bajas (permisiva): falta de adecuación del sistema circulatorio, que ocasiona→ menor función del músculo estriado→ debilidad y fatiga."},

{doc:"t4-esteroideos",t:4,p:8,q:"Efectos de los glucocorticoides sobre otras hormonas. Señala la CORRECTA:",o:[
 "↓ ACTH y CRH (atrofia de la corteza adrenal), bloquean la STH y facilitan la síntesis de adrenalina",
 "↑ ACTH y CRH (hipertrofia de la corteza adrenal), bloquean la STH y facilitan la síntesis de adrenalina",
 "↓ ACTH y CRH (atrofia de la corteza adrenal), estimulan la STH y facilitan la síntesis de adrenalina",
 "↓ ACTH y CRH (atrofia de la corteza adrenal), bloquean la STH e inhiben la síntesis de adrenalina"],a:0,
 cita:"Administración exógena de GC (retroalimentación negativa): ↓ secreción de ACTH y CRH → inhibe secreción GC endógenos → atrofia de corteza adrenal\nAnimales en crecimiento, dosis ↑ →Inhibe el crecimiento\nBloquean liberación de STH\nInhiben directamente condrocitos\n…\nFacilitan la síntesis de adrenalina a partir de la noradrenalina en la médula adrenal.",
 n:"Por esta retroalimentación negativa hay que retirarlos poco a poco (anotación a mano de la p. 1). Además inhiben la TSH (respuesta a TRH) y las gonadotropinas (respuesta a GnRH)."},

{doc:"t4-esteroideos",t:4,p:8,q:"Efectos de los glucocorticoides sobre el SNC (dosis terapéuticas), según tus apuntes:",o:[
 "Euforia, insomnio y más actividad motora; estimulan el apetito, salvo la triamcinolona",
 "Sedación, somnolencia y menos actividad motora; estimulan el apetito, salvo la dexametasona",
 "Euforia, insomnio y más actividad motora; quitan el apetito (anorexígenos), salvo la triamcinolona",
 "Sedación, somnolencia y menos actividad motora; quitan el apetito y hacen adelgazar al animal"],a:0,
 cita:"Dosis terapéuticas→ sensación de bienestar→ euforia, insomnio, inquietud e incremento de la actividad motora. A veces ansiedad y depresión (común en gatos).\nEn hipotálamo (excepto triamcinolona)→ estimulan el apetito (orexígenos: polifagia y aumento de peso), que suele interpretarse como mejoría.",
 n:"En gatos suele aparecer depresión (buscan lugares tranquilos y aislados)."},

{doc:"t4-esteroideos",t:4,p:8,q:"Actividad ulcerógena («ulcógena») de los glucocorticoides, según tus apuntes:",o:[
 "↑ secreción clorhídrica y péptica e inhibición de las PG (PGE): hay que dar protector gástrico",
 "↓ secreción clorhídrica y péptica e inhibición de las PG (PGE): no necesitan protector gástrico",
 "↑ secreción clorhídrica y péptica y ↑ síntesis de PG (PGE): el daño es solo por contacto local",
 "↓ secreción de moco y bicarbonato por bloqueo H₂: hay que darlos con un antihistamínico H₁"],a:0,
 cita:"↑ secreción clorhídrica y péptica (aumento de la actividad lesiva)\nInhiben secreción de PGs (PGE) (pérdida de protección de la mucosa)\nActividad ulcógena\n¡Recordar dar protector gástrico junto con los glucocorticoides!"},

/* ---------- p. 9 ---------- */
{doc:"t4-esteroideos",t:4,p:9,q:"Glucocorticoides y vacunación, según tus apuntes:",o:[
 "No darlos junto con una vacuna (15 días-1 mes): el animal no genera anticuerpos",
 "Darlos junto con la vacuna mejora la respuesta, porque evitan las reacciones locales",
 "Solo hay que evitarlos en adultos; en cachorros no alteran la respuesta a la vacuna",
 "No interfieren con la vacunación si se administran por vía oral en lugar de inyectable"],a:0,
 cita:"…tanto de los linfocitos B (a dosis altas ↓ producción de anticuerpos) como de los T…\nCuidado en cachorros y adultos que vayan a ser vacunados. (anotación a mano: No dar corticos junto con vacuna (15d-1 mes) no generan Anticuerpos)"},

{doc:"t4-esteroideos",t:4,p:9,q:"Actividad inmunodepresora de los glucocorticoides (anotada «Principal uso»). Señala la CORRECTA:",o:[
 "Actúan en las fases de reconocimiento y proliferativa, frenan linfocitos B y T y evitan el rechazo de trasplantes",
 "Actúan solo en la fase efectora, frenan únicamente los linfocitos T y no sirven para evitar el rechazo de trasplantes",
 "Actúan en las fases de reconocimiento y proliferativa, pero solo frenan los linfocitos B (la inmunidad humoral)",
 "Aumentan la síntesis de IL-1, IL-2 y TNF y la actividad de los macrófagos, y así frenan el rechazo de trasplantes"],a:0,
 cita:"Actividad INMUNODEPRESORA: afectan a la respuesta inmunitaria (anotación a mano: «Principal uso», al margen)\n…\nActúan a nivel de la fase de reconocimiento de la respuesta inmune y en la fase proliferativa. Quedan suprimidas las respuestas a los antígenos, tanto de los linfocitos B (a dosis altas ↓ producción de anticuerpos) como de los T; por lo que queda perturbada la inmunidad humoral y celular.\nClínicamente utilizados para evitar el rechazo de injertos o transplantes ya que suprimen el comienzo y la generación de la respuesta inmune.",
 n:"Además ↓ la actividad de los macrófagos y la generación de citocinas (IL-1, IL-2… TNF)."},

{doc:"t4-esteroideos",t:4,p:9,q:"Efecto antiinflamatorio y cicatrización. Señala la CORRECTA según tus apuntes:",o:[
 "Inhiben la inflamación sea cual sea su causa, aumentan el tono capilar y retrasan la cicatrización",
 "Solo inhiben la inflamación de causa inmunológica, aumentan el tono capilar y retrasan la cicatrización",
 "Inhiben la inflamación sea cual sea su causa, disminuyen el tono capilar y retrasan la cicatrización",
 "Inhiben la inflamación sea cual sea su causa, aumentan el tono capilar y aceleran la cicatrización"],a:0,
 cita:"Independiente de la causa (infecciosa, inmunológica, física o química)\nInhibe manifestaciones inmediatas (rubor, dolor,..) y tardías (cicatrización y proliferación)\nAumentan tono capilar\nRetraso en la cicatrización: sólo útil para prevenir fibrosis excesiva en procesos crónicos.",
 n:"Además favorecen la diseminación de la infección: frenan la proliferación fibroblástica y el acceso de neutrófilos y monocitos."},

/* ---------- p. 10 ---------- */
{doc:"t4-esteroideos",t:4,p:10,q:"Actividades antipirética y analgésica de los glucocorticoides, según tus apuntes:",o:[
 "La antipirética no se usa (demasiados efectos adversos); la analgésica sí es útil en terapéutica",
 "La antipirética es muy útil en terapéutica; la analgésica no, porque no inhiben la síntesis de PGE",
 "Ninguna de las dos se usa, porque los glucocorticoides no inhiben la PGE, la histamina ni las cininas",
 "Las dos son muy útiles en terapéutica y son su indicación principal en los pequeños animales"],a:0,
 cita:"Actividad ANTIPIRÉTICA: no es útil en terapéutica porque produce demasiados efectos adversos. (anotación a mano: tiene pero no merece la pena)\nActividad ANALGÉSICA: inhiben la síntesis y liberación de mediadores del dolor: PGE, histamina y cininas. Útil en terapéutica. (anotación a mano: ayuda a dolor neurológico (AINE no hace nada porque no inflamatorio))"},

{doc:"t4-esteroideos",t:4,p:10,q:"Administración tópica (cutánea) de glucocorticoides, según tus apuntes:",o:[
 "Absorción escasa, pero con vendaje oclusivo o áreas grandes puede suprimir el eje hipotálamo-hipófisis-adrenal",
 "Absorción nula aunque se use vendaje oclusivo o se trate gran parte de la piel, así que nunca da efectos sistémicos",
 "Absorción escasa, y por eso se recomienda tapar siempre la zona con vendaje oclusivo para que se absorba más",
 "Absorción muy alta en cualquier caso, por lo que da más efectos adversos sistémicos que las vías oral y parenteral"],a:0,
 cita:"Cutánea (vía tópica): absorción escasa, aunque varía dependiendo del:\n…\nLa vía tópica (piel y mucosas) permite alcanzar altas concentraciones de fármaco en el lugar de administración y ↓ riesgos de efectos adversos sistémicos.\nCuando la administración es prolongada, el lugar de aplicación se cubre con vendaje oclusivo o cuando hay áreas grandes de piel afectadas, la absorción puede ser muy importante y puede originar efectos sistémicos, incluso supresión del eje hipotalámico-hipofisario-adrenal. (anotación a mano: nunca vendajes oclusivos)"},

{doc:"t4-esteroideos",t:4,p:10,q:"Farmacocinética de los glucocorticoides. Señala la CORRECTA según tus apuntes:",o:[
 "El cortisol va ≥ 75 % unido a transcortina, atraviesan BHE y placenta y se excretan sobre todo en orina",
 "El cortisol va ≥ 75 % unido a albúmina, atraviesan BHE y placenta y se excretan sobre todo en orina",
 "El cortisol va ≥ 75 % unido a transcortina, no atraviesan la BHE y se excretan sobre todo en orina",
 "El cortisol va ≥ 75 % unido a transcortina, atraviesan BHE y placenta y se excretan sobre todo en heces"],a:0,
 cita:"El cortisol y la corticosterona: ≥ 75 % a transcortina, un 10 % a albúmina y un 10-15 % libre. (anotación a mano: se unen bastante a proteínas)\nDistribución rápida a músculo, hígado, piel, intestino y riñón. Atraviesan BHE y BFP.\nSe excretan fundamentalmente en orina (75 %) o heces (25 %) y pueden eliminarse en leche.",
 n:"Otros GC sintéticos se unen menos o nada (la prednisolona sí, y compite con el cortisol). El riñón reabsorbe el 80-90 % del cortisol libre (no conjugado), pero no el conjugado."},
/* ===== Tema 4 completo (t4-esteroideos): págs. 11-20, toxicidad, terapia, Addison, Cushing y mineralocorticoides ===== */
/* ---------- p. 11 · Toxicidad / RRAA («SUELE PREGUNTARLOS EN EL EXAMEN») ---------- */
{doc:"t4-esteroideos",t:4,p:11,q:"Según la tabla de efectos secundarios de los GC (anotada: «suele preguntarlos en el examen»), a nivel inmunológico producen:",o:[
 "Más infecciones, ↓ hipersensibilidad retardada, neutrofilia y linfocitopenia",
 "Menos infecciones, ↑ hipersensibilidad retardada, neutrofilia y linfocitosis",
 "Más infecciones, ↓ hipersensibilidad retardada, neutropenia y linfocitosis",
 "Más infecciones, ↑ hipersensibilidad retardada, neutropenia y linfocitopenia"],a:0,
 cita:"Inmunológicos: Aumento, susceptibilidad infecciones. ↓ respuesta inflamatoria ↓hipersensibilidad retardada Neutrofilia, linfocitopenia (anotación a mano junto a la tabla: «SUELE PREGUNTARLOS EN EL EXAMEN»)",
 n:"Es el leucograma de estrés: neutrofilia con linfocitopenia."},
{doc:"t4-esteroideos",t:4,p:11,q:"Efectos adversos oculares de los GC según tus apuntes:",o:[
 "↑ presión intraocular y glaucoma, y catarata subcapsular posterior",
 "↓ presión intraocular y miosis, y catarata subcapsular anterior",
 "↑ presión intraocular y glaucoma, y catarata nuclear del cristalino",
 "↓ presión intraocular, y queratitis seca por menor producción de lágrima"],a:0,
 cita:"En ojo, pueden ↑ presión intraocular y glaucoma, catarata subcapsular posterior y úlcera corneal.\nOftalmológicos: Cataratas posteriores subcapsulares Glaucoma (anotación a mano junto a la tabla: «SUELE PREGUNTARLOS EN EL EXAMEN»)"},
{doc:"t4-esteroideos",t:4,p:11,q:"Toxicidad aguda (a altas dosis) de los GC según tus apuntes. Señala la CORRECTA:",o:[
 "Son ulcerógenos y diabetógenos, y aumentan la pancreatitis por ↑ viscosidad de la secreción",
 "Son ulcerógenos e hipoglucemiantes, y aumentan la pancreatitis por ↑ viscosidad de la secreción",
 "Son ulcerógenos y diabetógenos, y reducen la pancreatitis por ↓ viscosidad de la secreción",
 "Protegen la mucosa gástrica, son diabetógenos y aumentan la pancreatitis por hipercalcemia"],a:0,
 cita:"Actividad ulcógena\nIncrementa la incidencia de pancreatitis por aumento de la viscosidad de la secreción.\nActividad diabetógena, desenmascaran la diabetes latente o agravan la ya existente; tratarla corrigiendo la dieta o con insulina. (anotación a mano junto a «Actividad ulcógena»: «úlceras estómago»)",
 n:"También son hiperlipemiantes (no usar en cardiópatas) y retienen agua y sodio, con hipertensión."},
{doc:"t4-esteroideos",t:4,p:11,q:"Retirada brusca de un GC tras un tratamiento prolongado, según tus apuntes:",o:[
 "Insuficiencia adrenal aguda; la función adrenal tarda 2-18 meses en recuperarse",
 "Síndrome de Cushing de rebote; la función adrenal se recupera en 2-18 días",
 "Insuficiencia adrenal aguda; la función adrenal se recupera en 24-48 horas",
 "Hiperadrenocorticismo transitorio; el eje adrenal se normaliza en 1-2 semanas"],a:0,
 cita:"Retirada brusca tras tratamiento prolongado → insuficiencia adrenal aguda (efecto dosis y tiempo dependiente). La recuperación de la función adrenal tarda de 2-18 meses."},
{doc:"t4-esteroideos",t:4,p:11,q:"Toxicidad crónica de los GC según tus apuntes. Señala la CORRECTA:",o:[
 "Perro: hepatomegalia y ↑ transaminasas, reversible al suspender; crean dependencia psicológica",
 "Perro: hepatomegalia y ↑ transaminasas, siempre irreversible; crean dependencia psicológica",
 "Perro: hepatomegalia y ↑ transaminasas, reversible al suspender; sedan sin crear dependencia",
 "Perro: atrofia hepática sin cambios enzimáticos; sedan y no crean dependencia psicológica"],a:0,
 cita:"Canidos: pueden inducir hepatopatías (hepatomegalia) y ↑ en plasma de transaminasas hepáticas. La degeneración hepática en algunos individuos es severa, pero sorprendentemente reversible al suspender el tratamiento.\nLas alteraciones de la conducta pueden ser de intensidad variable desde euforia, nerviosismo, insomnio, depresión, psicosis, etc.. crean dependencia psicológica."},

/* ---------- p. 12 · Seguridad, interacciones y principios de la terapia («GRABAR A FUEGO») ---------- */
{doc:"t4-esteroideos",t:4,p:12,q:"Contraindicaciones o uso con precaución de los GC según tus apuntes:",o:[
 "Diabetes mellitus, hipertensión, cardiopatías, insuficiencia renal y última fase de la gestación",
 "Diabetes mellitus, hipertensión, anemia hemolítica autoinmune, cetosis bovina y colitis canina",
 "Cetosis bovina, choque circulatorio, cardiopatías, insuficiencia renal y miopatías",
 "Anemia hemolítica, lupus eritematoso, pénfigo, hepatopatías y última fase de la gestación"],a:0,
 cita:"SEGURIDAD: CONTRAINDICACIONES/USO CON PRECAUCIONES:\nÚltima fase de la gestación\nÚlcera corneal\nDiabetes mellitus (son hiperglucemiantes)\nHipertensión\nInsuficiencia renal\nCardiopatías\nHepatopatías\nMiopatías",
 n:"Cetosis bovina, choque, anemia hemolítica, lupus, pénfigo y colitis canina son indicaciones de los GC (páginas 12-13), no contraindicaciones."},
{doc:"t4-esteroideos",t:4,p:12,q:"Interacciones de los GC según tus apuntes. Señala la CORRECTA:",o:[
 "Son inductores enzimáticos, ↑ la glucemia con tiacidas y antagonizan a la insulina",
 "Son inhibidores enzimáticos, ↑ la glucemia con tiacidas y antagonizan a la insulina",
 "Son inductores enzimáticos, ↓ la glucemia con tiacidas y potencian a la insulina",
 "Son inhibidores enzimáticos, ↓ la glucemia con tiacidas y potencian a la insulina"],a:0,
 cita:"No en vacunaciones.\nSon inductores enzimáticos: reducen su actividad terapéutica, inducen metabolismo de AINE y su eliminación.\nAumentan la glucemia con tiacidas (sinergia potenciativa).\nAntagonismo con hipoglucemiantes orales e insulina.",
 n:"Como inductores enzimáticos reducen su propia actividad y aceleran el metabolismo y la eliminación de los AINE."},
{doc:"t4-esteroideos",t:4,p:12,q:"Principios de la terapia con GC (anotado: «grabar a fuego»). En los tratamientos crónicos:",o:[
 "Dosis mínima efectiva, a renovar por la inducción enzimática; retirada progresiva (≥ 2 semanas)",
 "Dosis máxima tolerada, a renovar por la inhibición enzimática; retirada progresiva (≥ 2 días)",
 "Dosis mínima efectiva, fija todo el tratamiento; retirada brusca en cuanto ceden los síntomas",
 "Dosis de choque mantenida, a renovar por la inducción enzimática; retirada en 24-48 horas"],a:0,
 cita:"Tratamientos crónicos→ individualizada y dar la dosis mínima efectiva → renovarse (inducción enzimática)\nTerapia prolongada → atrofia adrenal y supresión de la secreción endógena.\nInterrupción tto.→ disminuyendo las dosis de forma progresiva (2 o más semanas) (anotación a mano: «GRABAR A FUEGO»)"},
{doc:"t4-esteroideos",t:4,p:12,q:"Principios de la terapia con GC («grabar a fuego»). Señala la CORRECTA:",o:[
 "Mejoran los síntomas sin erradicar la causa, y se prefiere la vía local siempre que sea posible",
 "Erradican la causa de la enfermedad, y se prefiere la vía sistémica siempre que sea posible",
 "Mejoran los síntomas sin erradicar la causa, y pueden usarse en infecciones víricas no tratadas",
 "Erradican la causa de la enfermedad, y frenan la diseminación de las infecciones fúngicas"],a:0,
 cita:"Los CG producen mejora del animal al desaparecer los síntomas, pero no erradican la causa de la enfermedad.\nNo se deben usar en infecciones bacterianas, víricas o fúngicas, no específicamente tratadas porque favorecen su diseminación.\nEl tratamiento, siempre que sea posible, vía local (tópica, inhalatoria u oftálmica) para conseguir concentraciones altas en la zona de lesión y mínimas a nivel sistémico. (anotación a mano: «GRABAR A FUEGO»)"},
{doc:"t4-esteroideos",t:4,p:12,q:"Uso oftálmico de los GC en las úlceras corneales, según tus apuntes:",o:[
 "Contraindicados al inicio; solo una vez controlada la infección y cicatrizada la 1ª parte",
 "De elección al inicio, porque aceleran la cicatrización y previenen la perforación",
 "Indicados desde el inicio si se asocian a un antibiótico tópico, sin esperar a cicatrizar",
 "Contraindicados siempre, aunque la infección esté controlada y la úlcera ya cicatrizada"],a:0,
 cita:"La aplicación oftálmica está contraindicada en el tratamiento inicial de úlceras corneales. Sólo deben usarse una vez controlada la infección. (anotación a mano: «una vez cicatrizada la 1ª parte»)"},
{doc:"t4-esteroideos",t:4,p:12,q:"Antiinflamatorios esteroideos disponibles en España para animales de producción:",o:[
 "Dexametasona, prednisolona y triamcinolona",
 "Betametasona, hidrocortisona y mometasona",
 "Metilprednisolona, mometasona y dexametasona",
 "Hidrocortisona, betametasona y prednisolona"],a:0,
 cita:"AIE DISPONIBLES EN ESPAÑA:\nEn animales de producción: Dexametasona, Prednisolona, Triamcinolona.\nEn animales de compañía, además: Betametasona, Hidrocortisona, Metilprednisolona, Mometasona.",
 n:"Betametasona, hidrocortisona, metilprednisolona y mometasona solo están disponibles, además, para animales de compañía."},
{doc:"t4-esteroideos",t:4,p:12,q:"GC en las enfermedades respiratorias (EPOC, síndrome asmático), según tu anotación de clase:",o:[
 "En la crisis, vía sistémica; después inhalatoria: primero el broncodilatador y luego el corticoide",
 "En la crisis, vía inhalatoria; después sistémica: primero el corticoide y luego el broncodilatador",
 "En la crisis, vía sistémica; después inhalatoria: primero el corticoide y luego el broncodilatador",
 "Solo vía inhalatoria, también en la crisis: primero el corticoide y luego el broncodilatador"],a:0,
 cita:"Enfermedades respiratorias (EPOC y el síndrome asmático). (anotación a mano: «1º … sistémico en crisis, luego inhalatorio (1º broncodilatador 2º córtico)»)",
 n:"Lo dice la anotación manuscrita; el texto mecanografiado solo cita las enfermedades respiratorias entre las indicaciones."},

/* ---------- p. 13 · Indicaciones, Addison y Cushing ---------- */
{doc:"t4-esteroideos",t:4,p:13,q:"Uso de los GC en la cetosis bovina, según tus apuntes:",o:[
 "Revierten los síntomas en 3-5 días por su efecto hiperglucemiante (gluconeogénesis)",
 "Revierten los síntomas en 3-5 horas por su efecto lipolítico directo sobre la grasa",
 "Están contraindicados, porque agotan el glucógeno hepático y agravan la cetosis",
 "Revierten los síntomas en 3-5 días al aumentar la utilización periférica de glucosa"],a:0,
 cita:"Cetosis bovina, revierten los síntomas en 3-5 días al inducir gluconeogénesis a partir de aminoácidos, aumenta los niveles de glucógeno hepático y disminuye la utilización periférica de glucosa. (anotación a mano: «por efecto hiperglucemiante»)"},
{doc:"t4-esteroideos",t:4,p:13,q:"Hipoadrenocorticismo primario (enfermedad de Addison), según tus apuntes:",o:[
 "Faltan GC y MC, pero hay que tratar sobre todo el déficit de MC, que puede ser letal",
 "Solo faltan GC, y hay que tratar sobre todo ese déficit, que puede ser letal",
 "Faltan GC y MC, pero hay que tratar sobre todo el déficit de GC, que puede ser letal",
 "Solo faltan MC, y basta con suplementar sal de por vida, sin dar hormonas"],a:0,
 cita:"Hipoadrenocorticalismo 1ª (enfermedad de Addison; en perro y gato, más raramente en caballo): déficit de GC y MC, pero debe tratarse sobre todo la deficiencia de MC (es más importante y puede ser letal).",
 n:"Afecta al perro y al gato y, más raramente, al caballo."},
{doc:"t4-esteroideos",t:4,p:13,q:"Tratamiento de la insuficiencia adrenal según tus apuntes. Señala la CORRECTA:",o:[
 "Crisis: GC, glucosa y NaCl 0,9 % IV; forma crónica: MC de por vida; secundaria: solo GC",
 "Crisis: MC orales y restricción de sal; forma crónica: solo GC; secundaria: solo MC",
 "Crisis: GC, glucosa y NaCl 0,9 % IV; forma crónica: GC hasta curar; secundaria: solo MC",
 "Crisis: KCl y glucosa IV; forma crónica: MC de por vida; secundaria: MC y GC de por vida"],a:0,
 cita:"Infusión IV de GC, glucosa, cloruro sódico al 0’9% y tratamiento apropiado de las causas precipitantes.\nEl tratamiento de la forma crónica, requiere de administración de MC durante toda la vida y por lo general también de GC (fludrocortisona + prednisolona o hidrocortisona).\nEn insuficiencia adrenal secundaria sólo se requiere administración GC (prednisona o prednisolona), en periodos de estrés será necesario incrementar la dosis.",
 n:"La sal solo se suplementa al comienzo, para corregir la hiponatremia. En la secundaria hay que subir la dosis de GC en periodos de estrés."},
{doc:"t4-esteroideos",t:4,p:13,q:"Tratamiento del hipercorticalismo (Cushing) según su causa, en tus apuntes:",o:[
 "Yatrogénico: suprimir los GC; hiperplasia adrenal por exceso de ACTH: GC a altas dosis",
 "Yatrogénico: subir la dosis de GC; tumor adrenal: GC a altas dosis por retroalimentación",
 "Yatrogénico: suprimir los GC; hiperplasia adrenal por exceso de ACTH: mineralocorticoides",
 "Yatrogénico: mitotano de por vida; tumor adrenal: GC a altas dosis por retroalimentación"],a:0,
 cita:"Yatrogénico: por exceso de GCs. Se debe suprimir su administración.\nPor procesos tumorales en glándula adrenal: Tratamiento quirúrgico o medicamentoso con inhibidores de los glucocorticoides.\nPor hiperplasia adrenal bilateral por exceso de ACTH: Glucocorticoides a altas dosis para ocasionar retroalimentación negativa.",
 n:"El tumor adrenal se trata con cirugía o con inhibidores de los glucocorticoides. La hiperplasia por exceso de ACTH está al principio de la página 14."},

/* ---------- p. 14 · Inhibición de la secreción de cortisol ---------- */
{doc:"t4-esteroideos",t:4,p:14,q:"Inhibidores de la secreción de cortisol adrenal y su diana, según tus apuntes:",o:[
 "Aminoglutetimida: P450scc; metopirona: P450c11; trilostano: 3βHSD",
 "Aminoglutetimida: 3βHSD; metopirona: P450scc; trilostano: P450c11",
 "Aminoglutetimida: P450c11; metopirona: 3βHSD; trilostano: P450scc",
 "Aminoglutetimida: P450scc; metopirona: 3βHSD; trilostano: P450c11"],a:0,
 cita:"2.2.2. Inhibición de la secreción cortisol adrenal:\n1. Adrenocorticolíticos: Mitotano.\n2. Inhibidores de la P450scc: Aminoglutetimida.\n3. Inhibidores de la P450c11: Metopirona.\n4. Inhibidores de la 3ßHSD: Trilostano, Cianocetona.\n5. Inhibidores múltiples: Ketoconazol y Etomidato. 6. Bloqueadores de receptores de cortisol: Mifepristone (RU 486) (anotación a mano junto al título: «tenemos adenoma...»)",
 n:"El mitotano es adrenocorticolítico; el ketoconazol y el etomidato son inhibidores múltiples, y la mifepristona bloquea el receptor de cortisol."},

/* ---------- p. 16-18 · Mitotano, trilostano, ketoconazol, etomidato ---------- */
{doc:"t4-esteroideos",t:4,p:16,q:"Mitotano según tus apuntes. Señala la CORRECTA:",o:[
 "Se usa en el carcinoma adrenal y, como destruye la glándula, después hay que dar GC",
 "Se usa en el carcinoma adrenal y, como su efecto es reversible, no hace falta dar GC",
 "Destruye sobre todo la zona glomerulosa, por lo que siempre hay que dar MC de por vida",
 "Es un antagonista del receptor GC útil solo en urgencias, sin efectos sobre la glándula"],a:0,
 cita:"Como tratamiento médico después de la cirugía en el carcinoma adrenal o en carcinomas inoperables. También se ha empleado para el control de la hipersecreción de cortisol en pacientes con síndrome de Cushing causado por carcinoma adrenal.\nTras su aplicación tendrán que suministrarse GCs. (anotación a mano: «se destruye glándula y ya no será capaz de producirlo nunca»)",
 n:"Actúa más sobre las zonas reticular y fasciculada que sobre la glomerulosa, por eso la aldosterona suele conservarse. Su uso lo limita la toxicidad gastrointestinal y neurológica."},
{doc:"t4-esteroideos",t:4,p:17,q:"Trilostano según tus apuntes. Señala la CORRECTA:",o:[
 "Reduce cortisol y aldosterona: riesgo de hiperpotasemia con IECA o ahorradores de K⁺",
 "Reduce solo el cortisol: riesgo de hipopotasemia con IECA o ahorradores de K⁺",
 "Reduce cortisol y aldosterona: riesgo de hipopotasemia con tiacidas o furosemida",
 "Destruye la corteza adrenal: riesgo de hiperpotasemia con tiacidas o furosemida"],a:0,
 cita:"MECANISMO DE ACCIÓN: reduce la síntesis de cortisol y aldosterona y aumenta la eliminación de 17- ceto esteroides.\nINTERACCIONES: Riesgo de hiperpotasemia cuando se asocia a un diurético ahorrador de potasio o un IECA. Supone una contraindicación.",
 n:"Disponible en veterinaria en España. Se usa en el Cushing pituitario o adrenal y en general se tolera bien. No usar en hepatopatía primaria, insuficiencia renal, animales de menos de 3 kg, gestantes, lactantes ni animales de producción."},
{doc:"t4-esteroideos",t:4,p:17,q:"Ketoconazol como inhibidor de la esteroidogénesis, según tus apuntes:",o:[
 "Inhibe sobre todo la C17,20-liasa, de forma reversible; no es la 1ª opción",
 "Inhibe sobre todo la 3βHSD, de forma irreversible; es el de 1ª elección",
 "Destruye la corteza adrenal como el mitotano; es el de 1ª elección en perros",
 "Inhibe sobre todo la 11β-hidroxilasa, de forma irreversible; no es la 1ª opción"],a:0,
 cita:"Inhibe predominantemente la actividad de la C17,20-liasa dependiente de citocromo P450, lo que explica el efecto inhibidor de la producción de testosterona en el hombre.\nLa acción es reversible y ha permitido el empleo de este fármaco en algunas situaciones en las que es necesario disminuir la producción de testosterona, tales como el cáncer de próstata, la pubertad precoz masculina y los síndromes virilizantes. (anotación a mano en la página 18: «no es la 1ª opción, solo si los anteriores no funcionan»)",
 n:"Precisa dosis 4 veces superiores a las antimicóticas. Reacciones adversas destacadas: impotencia y ginecomastia, y toxicidad hepatocelular (vigilancia continua)."},
{doc:"t4-esteroideos",t:4,p:18,q:"Etomidato como inhibidor de los glucocorticoides, según tus apuntes:",o:[
 "Anestésico IV para el control rápido del Cushing en hospitalizados; no a largo plazo",
 "Anestésico oral para el control crónico del Cushing en casa; de elección a largo plazo",
 "Antifúngico IV para el control rápido del Cushing; es de elección a largo plazo",
 "Antagonista oral del receptor GC para el Cushing crónico; carece de efecto sedante"],a:0,
 cita:"Empleado para el control del hipercortisolismo en pacientes hospitalizados con síndrome de Cushing en infusión IV a dosis bajas que no causan un efecto hipnótico (0,3 mg/kg/h). Es útil para control rápido en estados de hipercortisolismo grave. Inconvenientes: necesidad de administración IV y sus efectos sedantes. (anotación a mano: «NO A LARGO PLAZO»)"},

/* ---------- p. 19-20 · Mineralocorticoides ---------- */
{doc:"t4-esteroideos",t:4,p:19,q:"Mineralocorticoides en clínica (DOCA y fludrocortisona), según tus apuntes:",o:[
 "DOCA por vía parenteral y fludrocortisona oral; en la sobredosis, diuréticos y potasio",
 "DOCA por vía oral y fludrocortisona parenteral; en la sobredosis, diuréticos y potasio",
 "DOCA por vía parenteral y fludrocortisona oral; en la sobredosis, suero salino y GC",
 "Aldosterona oral y DOCA por vía parenteral; en la sobredosis, suero salino y GC"],a:0,
 cita:"Aldosterona: No se utiliza clínicamente.\nDOCA. Se administra por vía parenteral (PO su biodisponibilidad es escasa), con una semivida de 70 minutos.\nFludrocortisona. Derivado sintético con un índice mineralcorticoide/glucocorticoide muy elevado. Se administra por vía oral y tiene una semivida que permite administrarla cada 24 horas.\nSobredosificación: interrumpir el tratamiento y administrar diuréticos y potasio. (anotación a mano junto a DOCA: «oral no se absorbe»)",
 n:"La sobredosificación está en la página 20: además se interrumpe el tratamiento. Sus RRAA son edemas, hipertensión y alcalosis hipopotasémica."},
{doc:"t4-esteroideos",t:4,p:19,q:"Síndrome de Conn (hipersecreción de mineralocorticoides), según tus apuntes:",o:[
 "Adenoma adrenocortical no descrito en animales: hipopotasemia, alcalosis e hipertensión",
 "Adenoma adrenocortical frecuente en el perro: hipopotasemia, alcalosis e hipertensión",
 "Adenoma adrenocortical no descrito en animales: hiperpotasemia, acidosis e hipotensión",
 "Adenoma hipofisario frecuente en el gato: hiperpotasemia, acidosis e hipotensión"],a:0,
 cita:"HIPERSECRECIÓN (Síndrome (Síndrome de Conn): adenoma adrenocortical, (no descrito en animales), que produce:\nUna marcada retención de sodio y agua (aumento del volumen extracelular, edemas)\nHipopotasemia, alcalosis, hipertensión y debilidad muscular. (anotación a mano: «Características del síndrome de Conn (no visto en perros, solo humano)»)",
 n:"Ojo: en la bibliografía veterinaria actual el hiperaldosteronismo primario sí se describe, sobre todo en gatos; en el examen, responde según tus apuntes."},
{doc:"t4-esteroideos",t:4,p:19,q:"Hiposecreción de mineralocorticoides (Addison), marcada «+ imp» en tus apuntes:",o:[
 "Se pierde más sodio que agua, cae el volumen extracelular y hay hiperpotasemia (arritmias)",
 "Se pierde más agua que sodio, sube el volumen extracelular y hay hipopotasemia (arritmias)",
 "Se pierde más sodio que agua, sube el volumen extracelular y hay hipopotasemia (parálisis)",
 "Se retiene más sodio que agua, aparecen edemas y hay hiperpotasemia con alcalosis"],a:0,
 cita:"HIPOSECRECIÓN (Síndrome de Addison): que produce:\nUna pérdida más pronunciada de sodio que de agua (disminución de la presión osmótica del líquido extracelular, que origina un movimiento de líquido hacia el compartimento intracelular y un descenso marcado del volumen extracelular).\nConcomitantemente menor excreción de K+ (hiperpotasemia) y, de forma moderada, disminución del bicarbonato plasmático . (anotaciones a mano: «+ imp» y «Arritmias»)"},
{doc:"t4-esteroideos",t:4,p:19,q:"Aldosterona y receptor mineralocorticoide (RMC), según tus apuntes. Señala la CORRECTA:",o:[
 "Depende sobre todo de electrolitos y renina-angiotensina; el RMC cerebral prefiere el cortisol",
 "Depende sobre todo de la ACTH, más que el cortisol; el RMC cerebral prefiere el cortisol",
 "Depende sobre todo de electrolitos y renina-angiotensina; el RMC cerebral solo une aldosterona",
 "Depende sobre todo de la ACTH, más que el cortisol; el RMC cerebral solo une aldosterona"],a:0,
 cita:"REGULACIÓN DE LA SÍNTESIS Y LIBERACIÓN DE ALDOSTERONA: Menor dependencia de la secreción de ACTH que el cortisol, aunque la actividad hipofisaria puede facilitar su secreción. Principalmente depende de la composición de electrolitos del plasma y del sistema renina- angiotensina II.\nEl RMC en cerebro es más afín por glucocorticoides endógenos, al contrario que en tejidos periféricos. (anotación a mano: «Receptor se une más al CORTISOL»)",
 n:"El RMC tiene la misma estructura primaria que el receptor glucocorticoide y es el único que pueden activar dos tipos de hormonas esteroideas."},
/* ===== Tema 2 completo (t2-autacoides): lo enmarcado con corchete rojo (importante), págs. 24-27 ===== */
{doc:"t2-autacoides",t:2,p:24,q:"Usos de los ARA II (apartado que marcaste como importante). Señala la CORRECTA:",o:[
 "Diagnóstico de la hipertensión renina-dependiente e hipertensos que no toleran los IECA por la tos seca",
 "Tratamiento de elección de la hipertensión en el perro, porque su uso veterinario está muy consolidado",
 "Diagnóstico del feocromocitoma y tratamiento de la hipotensión en el shock anafiláctico",
 "Sustituir a los IECA cuando estos dan hiperpotasemia, porque los sartanes favorecen la bradicinina"],a:0,
 cita:"Los “sartanes” son antagonistas puros del receptor AT1 que se pueden administrar por vía oral. SU USO EN VETERINARIA ESTÁ EN ESTUDIO Y NO ESTÁ CONSOLIDADO.\n…\nSe utiliza en el diagnóstico de la hipertensión renina dependiente y en pacientes con hipertensión que no toleran los IECA debido a la tos seca.",
 n:"Todo el apartado de los ARA II lo enmarcaste con un corchete rojo: importante."},
{doc:"t2-autacoides",t:2,p:24,q:"IECA: asociaciones y medicamentos veterinarios (lo marcaste como importante). Señala la CORRECTA:",o:[
 "Pueden asociarse a digitálicos y furosemida; Enacard® (enalapril) en el perro y Fortekor (benazepril)",
 "No deben asociarse nunca a la furosemida; Enacard® es benazepril y Fortekor es enalapril, para gatos",
 "Solo se pueden usar solos; los únicos IECA veterinarios son el captopril y el lisinopril, en caballos",
 "Están contraindicados con la digoxina; en veterinaria solo se usa el telmisartán, que es un IECA"],a:0,
 cita:"PUEDEN ASOCIARSE A DIGITÁLICOS Y FUROSEMIDA. MEDICAMENTOS VETERINARIOS: ENACARD® (ENALAPRIL); PERRO. FORTEKOR (BENAZEPRIL)",
 n:"Desde «tras infarto» hasta «Fortekor (benazepril)» lo marcaste con una línea roja al margen: importante. El telmisartán es un sartán (ARA II), no un IECA."},
{doc:"t2-autacoides",t:2,p:26,q:"Óxido nítrico (lo marcaste como importante). ¿Cómo produce la vasodilatación?",o:[
 "Difunde a la célula muscular lisa, activa la guanilato ciclasa y ↑ el GMPc, que la relaja",
 "Se une a un receptor de membrana acoplado a una proteína Gs y ↑ el AMPc del endotelio",
 "Necesita un transportador de membrana para entrar en la célula y bloquear sus canales de Ca²⁺",
 "Inhibe la guanilato ciclasa y ↓ el GMPc, con lo que el músculo liso vascular se contrae menos"],a:0,
 cita:"Actúa intercelularmente sin requerir ningún tipo de transportador de membrana.\nEn la célula muscular lisa de la pared vascular, estimula, tras difundir a través de las membranas celulares, la guanilato ciclasa → ↑ GMPc: Induce relajación muscular →vasodilatación→ regulando el flujo y PA.",
 n:"El óxido nítrico hasta el punto 4 de sus funciones lo enmarcaste con un corchete rojo: importante."},
{doc:"t2-autacoides",t:2,p:26,q:"Características del óxido nítrico según tus apuntes. Señala la CORRECTA:",o:[
 "Gas radical libre, muy inestable y de vida corta; se sintetiza a partir de la L-arginina por la NOS",
 "Péptido estable de vida media larga que se almacena en gránulos de las células endoteliales",
 "Lípido derivado del ácido araquidónico que se sintetiza a partir de la L-citrulina por la COX",
 "Gas estable que viaja unido a la albúmina y actúa sobre todo como una hormona a distancia"],a:0,
 cita:"Regulador del tono vasomotor y neuromodulador del SNC y SNP. Es un gas con propiedades de radical libre, actúa como molécula mensajera muy inestable y de vida corta difundiendo por cualquier punto de la membrana de la célula productora.\n(Esquema) La síntesis de NO se realiza por acción: óxido nítrico sintetasa (NOS): L-arginina ⇒ NO + L-citrulina."},
{doc:"t2-autacoides",t:2,p:26,q:"Óxido nítrico: ¿qué células lo producen y qué efecto tiene sobre el músculo liso?",o:[
 "Epiteliales, nerviosas, endoteliales e inflamatorias; relaja el músculo liso: vaso y broncodilatación",
 "Solo las endoteliales; contrae el músculo liso: vasoconstricción y broncoconstricción",
 "Solo las plaquetas y los mastocitos; relaja el músculo liso vascular, pero contrae el bronquial",
 "Los hepatocitos; no actúa sobre el músculo liso, solo sobre la coagulación sanguínea"],a:0,
 cita:"Producido por una gran variedad de células: células epiteliales, nerviosas, endoteliales e inflamatorias.\nTiene un mecanismo de acción paracrino sobre la célula que actúa induciendo la síntesis de guanosin monofosfato cíclico (GMPc) que produce entre otros efectos, relajación de músculo liso: vaso y broncodilatación."},
{doc:"t2-autacoides",t:2,p:26,q:"Funciones del óxido nítrico en el sistema nervioso según tus apuntes. Señala la CORRECTA:",o:[
 "Autorregula el flujo vascular, activa las fibras parasimpáticas de los vasos cerebrales y ↑ el flujo en la hipercapnia",
 "Reduce el flujo sanguíneo cerebral en la hipercapnia y activa las fibras simpáticas de los vasos cerebrales",
 "Bloquea la plasticidad neuronal, el aprendizaje y la memoria, y suprime la defensa de la microglía",
 "Solo actúa en el SNP como neurotransmisor de la placa motora; en el SNC no tiene funciones conocidas"],a:0,
 cita:"Entre las funciones del NO en el Sistema Nervioso:\n1. Autorregulación del flujo vascular tanto periférico como central\n2. Activación de las fibras parasimpáticas que inervan los vasos cerebrales\n3. Incremento del flujo sanguíneo durante la hipercapnia",
 n:"Además (p. 27): 4. defensa cerebral frente a infecciones mediante la microglía, que expresa mucha iNOS (lo marcaste «imp»); 5. plasticidad neuronal, aprendizaje y memoria."},
/* ===== Tema 5 A (t5a-cardio): págs. 1-11, propiedades del miocardio, inotropos y digitálicos ===== */
/* ---------- p. 1 · Propiedades del miocardio ---------- */
{doc:"t5a-cardio",t:5,p:1,q:"Según tus apuntes, ¿qué propiedad del miocardio es la «capacidad de transmitir potenciales de acción siguiendo la ley del todo o nada mediante un sistema de células especializadas»?",o:[
 "Dromotropismo o conductividad",
 "Batmotropismo o excitabilidad",
 "Cronotropismo o automatismo",
 "Inotropismo o contractilidad"],a:0,
 cita:"Dromotropismo o conductividad: capacidad de transmitir potenciales de acción siguiendo la ley del todo o el nada y coordinadamente mediante un sistema de células especializadas.",
 n:"Batmotropismo = despolarizarse ante un estímulo eléctrico; cronotropismo = excitarse a sí misma de forma rítmica y automática (nodo sinusal y AV); inotropismo = desarrollar fuerza o tensión."},

/* ---------- p. 2 · Arritmias e inotropos positivos ---------- */
{doc:"t5a-cardio",t:5,p:2,q:"Según tus apuntes, ¿qué diferencia el aleteo atrial (flutter) de la fibrilación?",o:[
 "Flutter: ritmo rápido (≈300 lpm) pero regular, con ondas P en diente de sierra; fibrilación: rápido e irregular o caótico",
 "Flutter: ritmo rápido e irregular o caótico; fibrilación: rápido (≈300 lpm) pero regular, con ondas P en diente de sierra",
 "Flutter: ritmo lento (<100 lpm) y regular, originado en el ventrículo; fibrilación: rápido pero con contracción coordinada",
 "Flutter: reentrada en la aurícula izquierda con ritmo caótico; fibrilación: un solo foco ventricular con ritmo regular"],a:0,
 cita:"FIBRILACIÓN: las células miocárdicas se contraen de forma desorganizada. Ritmo rápido (>300lpm) e irregular o caótico.\nALETEO ATRIAL (FLUTTER): ritmo cardiaco anormal que ocurre en la aurícula cardiaca. Arritmia auricular de alta frecuencia (300 lpm) pero regular.\n- Circuito de reentrada localizado en aurícula derecha\n- Clásicas ondas P en diente de sierra\n- Ritmo rápido pero regular",
 n:"Fibrilación atrial: 350-500 lpm, ondas múltiples de reentrada y frecuencia ventricular irregular y rápida por bloqueo AV variable."},

{doc:"t5a-cardio",t:5,p:2,q:"Según tus apuntes, ¿en qué cardiomiopatía están indicados los inotropos positivos y por qué?",o:[
 "En la dilatada, por el adelgazamiento de las fibras musculares (quedan pocas fibras)",
 "En la hipertrófica, porque el ventrículo engrosado necesita contraerse con más fuerza",
 "En la restrictiva, porque mejoran el llenado diastólico de un ventrículo muy rígido",
 "En la arritmogénica, porque normalizan el ritmo y suprimen los focos ectópicos"],a:0,
 cita:"INOTROPOS POSITIVOS (estimulantes cardiacos): destinados a mejorar/normalizar el gasto cardiaco y la contracción cardiaca. Indicados en cardiomiopatía dilatada debido al adelgazamiento de las fibras musculares. (anotación a mano en la p. 3: inotropos cuando nos quedan pocas fibras (en cardiomiop dilatada))"},

/* ---------- p. 3 · Regulación del trabajo cardiaco ---------- */
{doc:"t5a-cardio",t:5,p:3,q:"Según tus apuntes, ¿qué efectos tiene sobre el corazón la estimulación β1 (simpática) frente a la M2 (parasimpática)?",o:[
 "β1: inotropo, clinotropo, crono, dromo y batmotropo positivos y ↑ demanda de O₂; M2: cronotropo negativo e inhibe la conducción AV",
 "β1: inotropo y cronotropo positivos, dromotropo negativo y ↓ demanda de O₂; M2: cronotropo positivo y acelera la conducción AV",
 "β1: cronotropo negativo, ↓ contracción auricular e inhibe la conducción AV; M2: inotropo, cronotropo y dromotropo positivos",
 "β1: inotropo positivo y batmotropo negativo, sin cambios en la demanda de O₂; M2: inotropo positivo sobre las aurículas"],a:0,
 cita:"Simpático (adrenérgico):\n− β1 :\n- Inotropo positivo (fuerza)\n- Clonotropo positivo (acortamiento fibra muscular)\n- Cronotropo positivo (frecuencia)\n- Dromotropo positivo (v de conducción)\n- Batmotropo positivo (excitabilidad)\n- Aumento de la demanda de o2\n- Parasimpático (colinérgico) m2: cronotropo negativo, reducción contracción aurículas, inhibe conducción A-V.",
 n:"En «Clonotropo» hay una «i» negra escrita sobre la «o»: es el efecto clinotropo (acortamiento de la fibra). M2 también reduce la contracción de las aurículas."},

{doc:"t5a-cardio",t:5,p:3,q:"Según tus apuntes, ¿de qué depende la demanda de O₂ del corazón?",o:[
 "De la frecuencia cardiaca, el estado inotropo, la tensión de la pared y el estiramiento del músculo",
 "De la frecuencia cardiaca, la presión venosa central, el hematocrito y el tono vagal del nodo AV",
 "Solo del estado inotropo: ni la frecuencia ni la tensión de la pared modifican el consumo de O₂",
 "De la velocidad de conducción AV, la excitabilidad, la volemia y la concentración de K⁺ en plasma"],a:0,
 cita:"La demanda de O2 depende de:\n- Frecuencia cardiaca\n- Estado inotropo\n- Tensión de la pared cardiaca\n- Alargamiento-estiramiento del músculo cardiaco"},

/* ---------- p. 4 · Digitálicos: visión general ---------- */
{doc:"t5a-cardio",t:5,p:4,q:"Digitálicos (glucósidos cardiotónicos). Según tus apuntes, ¿qué afirmación es CORRECTA?",o:[
 "Son los únicos inotropos positivos adecuados para la ICC y no aumentan de forma significativa el consumo de O₂",
 "Son los únicos inotropos positivos adecuados para la ICC, aunque a cambio aumentan mucho el consumo de O₂",
 "Son inotropos negativos que reducen el consumo de O₂ y carecen de actividad vagotónica sobre el corazón",
 "Son útiles en el flúter auricular por su efecto cronotropo positivo y por su acción vagolítica sobre el nodo"],a:0,
 cita:"Se eleva la fuerza contráctil y la eficacia mecánica sin aumento significativo del consumo de o2.\nLos digitálicos son los únicos agentes inotropos positivos adecuados para el tratamiento de la ICC, pero a veces la respuesta es insuficiente. (anotación a mano: cronotropos ⊖)\nTienen además actividad vagotónica y efectos directos sobre las membranas cardiacas.\n- Aleteo (flutter). Por el efecto cronotropo -",
 n:"La p. 6 explica por qué no sube el consumo: «El aumento de la demanda de O2 se contrarresta por: ↓ la longitud de la fibra, la tensión parietal ventricular y la frecuencia»."},

/* ---------- p. 5 · Digitálicos: farmacocinética ---------- */
{doc:"t5a-cardio",t:5,p:5,q:"Absorción y distribución de los digitálicos según tus apuntes:",o:[
 "Oral salvo en rumiantes (se inactivan en el rumen); se dosifican por peso magro porque no se acumulan en la grasa",
 "Oral también en los rumiantes; se dosifican por peso total porque se acumulan sobre todo en el tejido adiposo",
 "Oral salvo en rumiantes (se inactivan en el rumen); se dosifican por peso total porque se acumulan en la grasa",
 "Solo parenteral en todas las especies; se dosifican por peso magro porque no atraviesan la barrera hematoencefálica"],a:0,
 cita:"Absorción: ORAL (excepto rumiantes porque son inactivados a nivel ruminal).\nDistribución amplia (BHE) y acumulo en corazón, riñón e hígado, no en tejido adiposo (dosificar según peso magro)",
 n:"Las formas líquidas se absorben mejor y antes que las sólidas (pico a los 45-60 min frente a 90 min). En rumiantes, vía parenteral; en el gato se recomienda el elixir."},

{doc:"t5a-cardio",t:5,p:5,q:"Biotransformación y eliminación de la digoxina frente a la digitoxina, según la tabla de tus apuntes:",o:[
 "Digoxina: biotransformación escasa y eliminación renal en forma activa (75-80 %); digitoxina: biotransformación pronunciada y sobre todo biliar",
 "Digitoxina: biotransformación escasa y eliminación renal en forma activa (75-80 %); digoxina: biotransformación pronunciada y sobre todo biliar",
 "Las dos: biotransformación hepática pronunciada y eliminación sobre todo biliar en forma de metabolitos, con un ciclo enterohepático intenso",
 "Las dos: biotransformación escasa y eliminación renal sin metabolizar (filtración y secreción tubular), sin ningún ciclo enterohepático"],a:0,
 cita:"Biotransformación hepática (escasa en el caso de digoxina)\nEliminación: biliar y renal (Digoxina 75-80% inalterada) (ciclo enterohepático y reabsorción tubular).\nDigoxina — Escasa — Renal : 75-80% en forma activa (filtración y secreción tubular) Escasa vía biliar (ciclo enterohepático)\nDigitoxina — Pronunciada — Escasa renal en forma de metabolitos, mayoritariamente eliminación vía biliar. Ciclo enterohepático",
 n:"Por eso: «Reducir dosis en insuficiencia renal y animales viejos» (en la diapositiva de dosis de la p. 8, un 50 % por cada 50 % de aumento del BUN)."},

{doc:"t5a-cardio",t:5,p:5,q:"Vida media de los digitálicos según tus apuntes. Señala la opción CORRECTA:",o:[
 "En el perro, digoxina 20-55 h y digitoxina 8-12 h: la digoxina se elimina más despacio (riesgo de sobredosificación)",
 "En el perro, digoxina 8-12 h y digitoxina 20-55 h: la digitoxina se elimina más despacio (riesgo de sobredosificación)",
 "Con digoxina, la vida media es de 35 h en el caballo y de 16-23 h en el gato, más larga en ambos que en el perro",
 "En el perro, digoxina y digitoxina tienen la misma vida media (unas 35 h), por eso son totalmente intercambiables"],a:0,
 cita:"- En perro menor reabsorción que en otras especies (t½ menor): digoxina (20-55 h) se elimina más lentamente que digitoxina (8-12 h)→ peligro sobredosificación (anotación a mano: perro digitoxina porque digoxina V. media ↑ larga)\n- En caballo (digoxina) t1/2 de 16-23 h\n- En gato (digoxina) 35 h",
 n:"Con digoxina: 16-23 h en el caballo y 35 h en el gato."},

/* ---------- p. 5 · Digitálicos: mecanismo y efectos ---------- */
{doc:"t5a-cardio",t:5,p:5,q:"Mecanismo de acción de los glucósidos cardiotónicos según tus apuntes:",o:[
 "Inhiben la bomba Na⁺/K⁺ → ↑ Na⁺ intracelular → el intercambio Na⁺/Ca²⁺ ↑ el Ca²⁺ intracelular y la contracción",
 "Activan la bomba Na⁺/K⁺ → ↓ Na⁺ intracelular → el intercambio Na⁺/Ca²⁺ saca Ca²⁺ y relaja la fibra cardiaca",
 "Inhiben la fosfodiesterasa III → ↑ AMPc intracelular → ↑ la entrada de Ca²⁺ por los canales lentos del miocito",
 "Bloquean los canales de K⁺ → retrasan la repolarización → ↑ el Ca²⁺ guardado en el retículo sarcoplásmico"],a:0,
 cita:"1. Los glucósidos inhiben la bomba Na+/k+\n2. El aumento de Na+ en músculo cardíaco estimula un mecanismo de intercambio, las células se deshacen del exceso de iones Na+ al intercambiarlos por iones Ca2+, los niveles de calcio se incrementan en el interior del músculo cardiaco y aumenta la formación de actinomiosina, lo cual produce una mayor contracción del miocardio.\n3. La concentración de Ca2+ aumentada se almacena en el retículo sarcoplásmico, con lo que se eleva la cantidad de Ca2+ liberada en cada potencial de acción."},

{doc:"t5a-cardio",t:5,p:5,q:"Efectos cronotropo y batmotropo de los digitálicos según tus apuntes:",o:[
 "Cronotropo negativo, por sensibilizar el vago y, de forma secundaria, por ↓ la presión venosa; batmotropo positivo solo con sobredosis",
 "Cronotropo negativo, por bloqueo directo de los receptores β1 del nodo sinusal; batmotropo positivo ya a las dosis terapéuticas",
 "Cronotropo positivo, por su acción vagolítica sobre el nodo sinusal; batmotropo negativo, que solo aparece con la sobredosificación",
 "Cronotropo negativo, por ↑ de la presión venosa y activación del reflejo barorreceptor; batmotropo negativo a cualquier dosis"],a:0,
 cita:"- Efecto cronotropo negativo: Disminuyen la capacidad del miocardio para producir su propio impulso. Tiene lugar por acción directa, sensibilizando el vago (vagotónico), y secundariamente a la acción inotropa por disminución de la presión venosa\n- Efecto batmotropo positivo: Aumenta la excitabilidad. A dosis terapéuticas esto no tiene lugar, y es en realidad un efecto de sobredosificación.",
 n:"En la p. 6: «Aumentan la formación de impulsos ectópicos (exceso dosis)»."},

/* ---------- p. 6 · Efectos sobre la frecuencia y la conducción ---------- */
{doc:"t5a-cardio",t:5,p:6,q:"Según tus apuntes, ¿qué hacen los digitálicos sobre el nodo AV?",o:[
 "Aumentan su periodo refractario y reducen su velocidad de conducción (↑ PR): baja la frecuencia ventricular",
 "Acortan su periodo refractario y aceleran su velocidad de conducción (↓ PR): sube la frecuencia ventricular",
 "Aumentan su periodo refractario pero aceleran su conducción (↓ PR), sin cambiar la frecuencia ventricular",
 "Nada: solo deprimen el nodo sinusal, por eso no sirven para frenar la frecuencia en la fibrilación auricular"],a:0,
 cita:"- Disminución de impulsos en nodo s-a (cronotropo negativo). Aumento del periodo refractario (S-T) del nodo a-v y ↓ velocidad de conducción a través del nodo a-v (reduce nº de impulsos y ↑ PR).\n- Deprimen velocidad conducción aurículo-ventricular (bloqueo)",
 n:"Es lo que muestra el esquema D de la página: en la fibrilación auricular el glucósido produce «Disminución de la frecuencia ventricular». En exceso, bloqueo AV."},

/* ---------- p. 7 · Efecto diurético e indicaciones ---------- */
{doc:"t5a-cardio",t:5,p:7,q:"Según tus apuntes, ¿cómo producen diuresis y movilización de los edemas los digitálicos?",o:[
 "Indirecta: al ↑ el gasto cardiaco ↓ la vasoconstricción renal y la activación del eje renina-angiotensina-aldosterona",
 "Directa: inhiben la Na⁺/K⁺-ATPasa del túbulo renal como un diurético del asa, sin depender del gasto cardiaco",
 "Indirecta: al ↓ el gasto cardiaco se activa el eje renina-angiotensina-aldosterona, que elimina Na⁺ y agua por la orina",
 "Directa: bloquean los receptores de aldosterona del túbulo colector renal, igual que hace la espironolactona"],a:0,
 cita:"EFECTO DIURÉTICO DE LOS DIGITÁLICOS\nLOS DIGITÁLICOS, COMO EFECTO INDIRECTO, OCASIONAN:\n-DIURESIS\n-MOVILIZACIÓN DE LOS EDEMAS PERIFÉRICOS (anotación a mano: Por no activar eje R-A-Aldost.)\nEL AUMENTO DEL GASTO CARDIACO DISMINUYE: VASOCONSTRICCIÓN RENAL Y LA ACTIVACIÓN DEL SISTEMA RENINA-ANGIOTENSINA-ALDOSTERONA\nAUMENTO DEL FLUJO RENAL Y LA FILTRACIÓN GLOMERULAR\nEFECTO NATRIURÉTICO (MENOR REABSORCIÓN DE Na+ y H2O)\nDISMINUCIÓN DE LA PRESIÓN VENOSA Y MEJORA CIRCULATORIA (anotación a mano: Para esto se utilizan los inotrópicos)"},

{doc:"t5a-cardio",t:5,p:7,q:"PREGUNTA DE EXAMEN según tu nota: ¿por qué no se usan los digitálicos en las miocardiopatías hipertróficas?",o:[
 "Porque en ellas ya hay un aumento del Ca²⁺ intracelular, que los digitálicos elevarían todavía más",
 "Porque en ellas hay hipopotasemia crónica, que potencia mucho los efectos tóxicos de los digitálicos",
 "Porque el ventrículo hipertrófico carece de bombas Na⁺/K⁺ sobre las que los digitálicos puedan actuar",
 "Porque su efecto vagotónico acelera la conducción AV y desencadena taquicardias ventriculares graves"],a:0,
 cita:"- No en aumento de Ca2+ intracelular: miocardiopatías hipertróficas (anotación a mano: ¡ ! PREGUNTA EXAMEN)",
 n:"En la p. 8, con un «!» al margen: contraindicados en «Miocardiopatía hipertrófica (↑ Ca2+ intracelular) y estenosis dinámica (excepto en taquidisrritmias supraventriculares que no respondan al propanolol y al verapamilo)»."},

{doc:"t5a-cardio",t:5,p:7,q:"Según tus apuntes («NO, cuidado!»), ¿en cuál de estas insuficiencias cardiacas NO se usan los digitálicos?",o:[
 "IC asociada a hipertiroidismo, anemia o fístulas arteriovenosas",
 "IC crónica asociada a fibrilación auricular (digoxina de elección)",
 "IC sistólica en ritmo sinusal, asociados a diuréticos e IECA",
 "IC grave con hipotensión si los diuréticos y vasodilatadores fallan"],a:0,
 cita:"- No en I.C. asociada a:\n- Hipertiroidismo\n- Anemia\n- Fístulas arteriovenosas\n- Glomerulonefritis\n- Pericarditis constrictiva o deformante\n- Estenosis mitral (a menos que haya insuficiencia ventricular derecha o fibrilación auricular), e insuficiencia valvular\n- Enfermedad de Paget (hombre). (anotación a mano: NO cuidado!)",
 n:"Las otras tres son indicaciones en la ICC: digoxina de elección si hay fibrilación auricular; asociada a diuréticos e IECAs en ritmo sinusal con IC sistólica; IC grave con hipotensión cuando diuréticos y vasodilatadores están contraindicados o son ineficaces."},

{doc:"t5a-cardio",t:5,p:7,q:"Indicaciones de los digitálicos por especie según tus apuntes:",o:[
 "Perro y gato: sobre todo arritmias supraventriculares; caballo: fibrilación auricular con ICC, junto a furosemida",
 "Perro y gato: sobre todo arritmias ventriculares; caballo: fibrilación auricular sin ICC, siempre en monoterapia",
 "Perro y gato: sobre todo la miocardiopatía hipertrófica; caballo: taquicardia ventricular, junto a furosemida",
 "Perro y gato: sobre todo los bloqueos AV avanzados; caballo: de uso diario en cualquier arritmia sin ICC"],a:0,
 cita:"- En perro y gato, la indicación más frecuente: arritmias supraventriculares\n- En el caballo útiles en control de fibrilación auricular junto a furosemida cuando existe icc (anotación a mano: se usan poco y asociado a, con una flecha hacia «furosemida»)",
 n:"En la taquicardia supraventricular paroxística son mejores otros antiarrítmicos (flecainida, sotalol, amiodarona) y hay que «Descartar intoxicación digitálica»."},

{doc:"t5a-cardio",t:5,p:7,q:"Según tus apuntes, ¿en qué cuadros NO son eficaces los digitálicos, salvo que coexista flúter o fibrilación auricular rápida?",o:[
 "Estenosis mitral aislada, miocardiopatía restrictiva y taponamiento pericárdico",
 "ICC secundaria a una cardiopatía hipertensiva, valvular, isquémica o congénita",
 "ICC con fibrilación auricular o flúter con una respuesta ventricular rápida",
 "ICC secundaria a miocarditis, a cor pulmonale o a una miocardiopatía congestiva"],a:0,
 cita:"- Extraordinariamente eficaces en ICC y fibrilación auricular (flutter) con respuesta ventricular rápida\n- Eficaces en ICC secundaria a cardiopatía hipertensiva, valvular, isquémica y congénita.\n- Útiles, pero probablemente menos eficaces, en ICC secundaria a miocarditis, cuadros de volumen minuto elevado, cor pulmonale y miocardiopatía congestiva.\n- No eficaces en estenosis mitral aislada, miocardiopatía restrictiva y constricción o taponamiento pericárdico, excepto cuando coexisten con flútter o fibrilación auricular con respuesta ventricular rápida.",
 n:"Ojo con la miocarditis: son «útiles, pero probablemente menos eficaces», no ineficaces."},

/* ---------- p. 8 · Contraindicaciones, especies y margen de seguridad ---------- */
{doc:"t5a-cardio",t:5,p:8,q:"Según tus apuntes, ¿en qué casos están CONTRAINDICADOS los digitálicos?",o:[
 "Bloqueo AV de 2º grado sin marcapasos, intoxicación digitálica y contractilidad cardiaca normal",
 "Bloqueo AV de 2º grado sin marcapasos, intoxicación digitálica y fibrilación auricular con ICC crónica",
 "Estenosis aórtica grave, síndrome de Wolff-Parkinson-White e ICC por cardiopatía hipertensiva",
 "Contractilidad normal, estenosis subaórtica hipertrófica y flúter auricular con ICC congestiva"],a:0,
 cita:"CONTRAINDICADO EN:\n- Bloqueo AV de 2º grado o superior en ausencia de marcapasos electrónico.\n- Intoxicación digitálica\n- Pacientes con contractilidad cardiaca normal, aunque los síntomas de insuficiencia sean importantes (edema de pulmón, hpt arterial).\n- En estenosis subaórtica hipertrófica y en estenosis aórtica grave.",
 n:"También el síndrome de Wolff-Parkinson-White con conducción anterógrada por vías anómalas. Contraindicación solo relativa: bloqueo AV avanzado, extrasístoles y taquicardias ventriculares, bradicardias marcadas e hipopotasemias crónicas no controladas."},

{doc:"t5a-cardio",t:5,p:8,q:"Según tus apuntes, ¿qué glucósidos cardiotónicos NO están recomendados en el gato?",o:[
 "La digitoxina (tampoco en el caballo) y la ouabaína",
 "La digoxina (tampoco en el caballo) y la ouabaína",
 "La digoxina en elixir y la digitoxina en comprimidos",
 "Ninguno: en el gato se usan todos a la misma dosis"],a:0,
 cita:"La digitoxina no está recomendada en el gato y el caballo.\nLa ouabaína no está recomendada en el gato.",
 n:"En el gato se usa la digoxina (7-15 µg/kg/48 h p.o., mejor en formas líquidas: elixir). Esquema de la p. 3: «DIGOXINA: +++ en gato y caballo» y «DIGITOXINA: + en perro»."},

{doc:"t5a-cardio",t:5,p:8,q:"Digoxina en el perro: según tus apuntes, ¿qué concentraciones plasmáticas estacionarias se buscan?",o:[
 "Entre 0,8 y 2,3 ng/ml; por encima de 2,5-3 ng/ml la toxicidad es muy probable",
 "Entre 2,5 y 3 ng/ml; por debajo de 0,8 ng/ml no hay ningún efecto inotropo",
 "Entre 8 y 23 ng/ml, porque el margen de seguridad de la digoxina es amplio",
 "Entre 0,8 y 2,3 ng/ml, pero en gato y caballo ya son tóxicas desde 1 ng/ml"],a:0,
 cita:"Margen de seguridad estrecho: valorar estrictamente las dosis a aplicar en cada paciente.\nDigoxina: en perro se buscan concentraciones plasmáticas estacionarias entre 0’8 y 2’3 ng/ml:\n- Concentraciones> 2’5-3 ng/ml→ una gran probabilidad de toxicidad.\nConcentraciones plasmáticas de digoxina de hasta 2’3 ng/ml resultan también atóxicas en el gato y en el caballo hasta 2 ng/ml. (anotación a mano: MARGEN DE SEGURIDAD ESTRECHO)",
 n:"Con una dosis inicial doble de la de mantenimiento se llega rápido al estado estacionario con mínimo riesgo tóxico. Tu nota junto a la tabla de dosis: «Rango de dosis muy pequeños»."},

/* ---------- p. 9 · Toxicidad y su tratamiento ---------- */
{doc:"t5a-cardio",t:5,p:9,q:"Según la diapositiva de tus apuntes, ¿qué factores aumentan la acción o la toxicidad de los digitálicos?",o:[
 "Hipopotasemia (diarreas, diuréticos), hipercalcemia, hipotiroidismo y miocarditis activa",
 "Hipopotasemia (diarreas, diuréticos), hipocalcemia, hipertiroidismo y miocarditis activa",
 "Hipercalcemia, hipotiroidismo, edad avanzada y ↑ de la velocidad de eliminación renal",
 "Hipocalcemia, hipertiroidismo, animales jóvenes y ↑ de la velocidad de eliminación"],a:0,
 cita:"Factores que afectan a la dosificación:\n•La miocarditis activa ↑ sensibilidad a efectos tóxicos de digitálicos.\n•Disminución de la velocidad de eliminación.\n•Edad avanzada (↑ vida media)\n•Hipotiroidismo.\n•Hipopotasemia (diarreas, diuréticos,…) potencian efectos tóxicos de digitálicos\n•Hipercalcemia (promueve la acción de los glucósidos y puede dar lugar a arritmias)",
 n:"La misma diapositiva pone también «Hiperpotasemia (↑↑ acción de glucósidos)». En los libros (y en la app) es al revés: el K⁺ alto compite con el digitálico por la Na⁺/K⁺-ATPasa y reduce su efecto; lo que lo potencia es la HIPOpotasemia. Si en clase lo explicaron de otra forma, haz caso a tu profesora."},

{doc:"t5a-cardio",t:5,p:9,q:"Toxicidad digestiva y nerviosa de los digitálicos según tus apuntes:",o:[
 "Vómito por estímulo de la ZQD, dolor abdominal por vasoconstricción mesentérica y discromatopsia del amarillo y el verde",
 "Vómito por irritación gástrica directa, dolor abdominal por vasodilatación mesentérica y discromatopsia del rojo y el azul",
 "Vómito por estímulo de la ZQD, dolor abdominal por vasodilatación mesentérica y discromatopsia del rojo y el azul",
 "Vómito por irritación gástrica directa, dolor abdominal por vasoconstricción mesentérica y ceguera nocturna completa"],a:0,
 cita:"2. DIGESTIVA: Náuseas, vómitos, diarrea, dolor abdominal (vasoconstricción arterial mesentérica)\n3. NERVIOSA: Vómito (estímulo ZQD), fatiga, neuralgias, paresias, delirio, desorientación, confusión, psicosis y alucinaciones, cefalea. Visión borrosa, halos, alteraciones percepción del color con discromatopsia del amarillo y el verde"},

{doc:"t5a-cardio",t:5,p:9,q:"Signos de intoxicación digitálica en el ECG y endocrinos según tus apuntes:",o:[
 "QT acortado, onda T aplanada o invertida y ST deprimido; hiperestrogenismo por ↓ del metabolismo del estradiol",
 "QT alargado, ondas T picudas y ST elevado; hipoestrogenismo por ↑ del metabolismo del estradiol en el hígado",
 "PR acortado, QT alargado y ondas P en diente de sierra; hipotiroidismo con galactorrea y ginecomastia",
 "QT acortado y onda T invertida; hiperestrogenismo por ↑ de la síntesis ovárica de estradiol y progesterona"],a:0,
 cita:"1. CARDIACA: Arritmias, bloqueo sinusal (paro cardiaco), bloqueo A-V, extrasístoles, taquicardias paroxísticas, prolongación intervalo PR, acortamiento intervalo QT, aplanamiento o inversión onda T, depresión del segmento ST.\n4. ENDOCRINA: Inhibición metabolismo de estradiol (hiperestrogenismo): ginecomastia, galactorrea, cornificaciones vaginales (post-menopausia)",
 n:"El PR se alarga (no se acorta)."},

{doc:"t5a-cardio",t:5,p:9,q:"Tratamiento de la intoxicación digitálica según tus apuntes. Señala la opción CORRECTA:",o:[
 "Atropina para frenar el tono vagal y, si hace falta, lidocaína, propranolol o fenitoína; con bloqueo AV, ni sales de K⁺ ni antiarrítmicos",
 "Atropina para frenar el tono vagal y, si hace falta, lidocaína, propranolol o fenitoína; con bloqueo AV, las sales de K⁺ IV son de elección",
 "Sales de calcio IV para frenar el tono vagal y, si hace falta, quinidina; con bloqueo AV, sales de K⁺ y antiarrítmicos a dosis plenas",
 "Neostigmina para aumentar el tono vagal y seguir con el digitálico a mitad de dosis; con bloqueo AV, ClK por vía oral de elección"],a:0,
 cita:"1. Interrumpir la administración y vigilar recuperación (ECG), junto a descanso (suficiente en intoxicaciones leves).\n3. Además, puede aplicarse atropina para frenar el tono vagal\n4. Si es preciso, antiarrítmicos: lidocaína, propanolol, fenitoína\nSi existe bloqueo A-V, están contraindicadas las sales de K y los antiarrítmicos.",
 n:"Si las disritmias no mejoran (sin bloqueo AV): ClK (cloruro potásico) en el perro, p.o. 0,6-1 g de inicio y después 0,3-0,5 g cada 1-2 h; la vía IV, con mucho cuidado. También sales de Mg (no estudiado en animales) y, en medicina humana, anticuerpos específicos."},

/* ---------- p. 10 · Interacciones, metilxantinas e ionodilatadores ---------- */
{doc:"t5a-cardio",t:5,p:10,q:"Interacciones de los digitálicos según tus apuntes. Señala la opción CORRECTA:",o:[
 "Antiácidos, laxantes y colestiramina reducen su absorción; la quinidina aumenta sus niveles plasmáticos",
 "Antiácidos, laxantes y colestiramina aumentan su absorción; la quinidina reduce sus niveles plasmáticos",
 "Antiácidos, laxantes y colestiramina reducen su absorción; la quinidina reduce sus niveles plasmáticos",
 "La quinidina y la colestiramina aumentan su absorción; los antiácidos aceleran su eliminación renal"],a:0,
 cita:"Reducen la absorción de:\n- Glucósidos del conducto GI\n- Antiácidos\n- Laxantes\n- Caolín-Pectina\n- Colestiramina\nAumenta los niveles plasmáticos de cardiotónicos: Quinidína (antiarrítmico).",
 n:"Las listas de «↑ / ↓ niveles plasmáticos» que siguen están marcadas a mano con «NO LO PREGUNTA»."},

{doc:"t5a-cardio",t:5,p:10,q:"Metilxantinas (teofilina, aminofilina…) según tus apuntes. Señala la opción CORRECTA:",o:[
 "Broncodilatadores y diuréticos; alivian la tos de la ICC del perro y a dosis bajas pueden dar bradicardia",
 "Broncodilatadores y diuréticos; alivian la tos de la ICC del perro y están indicadas en la cardiopatía aguda",
 "Inotropos de elección en la ICC grave; a dosis bajas producen taquicardia refleja por bloqueo del vago",
 "Agonistas de los receptores A2 que activan la PDE III; asociadas a digitálicos son útiles en la insuficiencia"],a:0,
 cita:"Uso preferente como: broncodilatadores y diuréticos, aunque también poseen efectos cronotropo e inotropo positivos.\nSe han utilizado para aliviar la tos en insuficiencia cardíaca congestiva en perro. (anotación a mano: si no es muy grave)\nEstimulantes cardíacos, pero dosis ↓ pueden producir bradicardia por estímulación vagal.\n- Asociadas a digitálicos producen estimulación cardiaca (no usar en insuficiencias).\n- Contraindicadas en enfermedad cardiaca aguda.",
 n:"Antagonizan los receptores A2 e inhiben las PDE sin especificidad por la PDE III (↑ AMPc)."},

{doc:"t5a-cardio",t:5,p:10,q:"Ionodilatadores (inodilatadores) según tus apuntes. Señala la opción CORRECTA:",o:[
 "Inotropos y vasodilatadores mixtos: ↑ AMPc cardiaco y, en el músculo liso vascular, ↑ captación de Ca²⁺ por el retículo",
 "Inotropos negativos y vasoconstrictores: ↓ AMPc en el corazón y ↑ entrada de Ca²⁺ en el músculo liso de arterias y venas",
 "Inotropos positivos sin efecto vascular: inhiben la Na⁺/K⁺-ATPasa y ↑ el Ca²⁺ almacenado en el retículo del miocito",
 "Vasodilatadores puros: bloquean los canales lentos de Ca²⁺ y no modifican en nada la fuerza de contracción del corazón"],a:0,
 cita:"- Estos fármacos presentan actividad inotropa positiva y vasodilatadora mixta en arterias y venas.\n- En el corazón producen un ↑ AMPc intracelular, que induce el incremento de la frecuencia y la fuerza contráctil.\n- En fibra lisa vascular estimulan la captación de Ca2+ por el retículo sarcoplásmico, lo que genera relajación.",
 n:"Incluyen adrenérgicos β (dobutamina —y dopamina, según tu nota— y prenalterol), inhibidores de la PDE III (amrinona y milrinona) y los de doble mecanismo (ibopamina y pimobendan)."},

/* ---------- p. 11 · Dopamina y dobutamina ---------- */
{doc:"t5a-cardio",t:5,p:11,q:"Dopamina en la ICC: según tus apuntes, ¿a qué dosis y cómo se administra?",o:[
 "A 2-5 µg/kg/min (β1), en infusión IV continua y durante no más de 48-72 h",
 "A más de 20 µg/kg/min (α), en bolos IV cada 8 h durante varias semanas",
 "A menos de 2 µg/kg/min (D1), por vía oral en casa como tratamiento crónico",
 "A 2-5 µg/kg/min (β1), por vía oral cada 12 h durante meses, sin desensibilizar"],a:0,
 cita:"Dosis intermedias, entre 2 y 5 μg/kg/min:\n- Esta es la dosis recomendada en insuficiencia cardiaca. (anotación a mano: congestiva)\n(p. 10) Semivida muy corta (1 a 3 min)→ debe ser administrada en infusión intravenosa continua, incrementando la velocidad hasta conseguir el efecto deseado. Inconveniente no puede usarse durante más de 48-72 h, porque provoca desensibilización y disminución de la densidad de receptores β1 . (anotación a mano: no es útil como tto en casa)",
 n:"< 2 µg/kg/min: receptores D1 (vasodilatación renal, mesentérica, cerebral y coronaria). > 5 µg/kg/min: α, «efecto contrario» (↑ resistencia vascular y presión); en el shock hacen falta unos 20 µg/kg/min o más."},

{doc:"t5a-cardio",t:5,p:11,q:"Dopamina a dosis bajas (< 2 µg/kg/min). Según tus apuntes, ¿qué efecto tiene a través de los receptores D2?",o:[
 "Inhibe la liberación de noradrenalina: hipotensión y bradicardia, efecto usado para controlar la HTA o aliviar la ICC",
 "Estimula la liberación de noradrenalina: hipertensión y taquicardia, efecto usado para tratar el shock cardiogénico",
 "Estimula la liberación de aldosterona: retención de Na⁺ y agua, efecto usado en los animales con hipovolemia grave",
 "Inhibe la liberación de noradrenalina: hipotensión y bradicardia, por eso está contraindicada en la HTA y en la ICC"],a:0,
 cita:"Dosis< 2 μg/kg/min→ receptores D1 (dopaminérgicos) vasculares y renales:\n- Por efecto sobre receptores D2 , inhibe la liberación de noradrenalina y puede ocasionar hipotensión y bradicardia, efecto usado para controlar la hipertensión arterial o aliviar la ICC.",
 n:"Por D2 también se inhibe la liberación de aldosterona en la corteza adrenal (más excreción de sodio)."},

{doc:"t5a-cardio",t:5,p:11,q:"Dobutamina según tus apuntes. Señala la opción CORRECTA:",o:[
 "Agonista β1, β2 y α1, más inotropa que cronotropa: ↑ fuerza y gasto sin cambiar mucho la frecuencia ni la presión",
 "Agonista D1 y D2, más cronotropa que inotropa: ↑ mucho la frecuencia cardiaca y la presión arterial del paciente",
 "Agonista β1, β2 y α1, más vasodilatadora que inotropa: se usa por vía oral, de forma crónica, en la ICC leve",
 "Agonista α1 puro y vasoconstrictor potente: es de elección en el shock a dosis superiores a 20 µg/kg/min"],a:0,
 cita:"ADRENÉRGICOS BETA: DOBUTAMINA\n- Agonista β1 , β2 y α1\n- Mayor actividad inotropa que cronotropa, cierta actividad vasodilatadora (↓ postcarga y facilita trabajo cardíaco).\n- ↑ fuerza contráctil y gasto cardiaco sin modificación significativa de la frecuencia y la presión sanguínea.\nIndicaciones: En ICC grave mediante infusión continua.",
 n:"Indicada en infusión continua en: cardiopatía isquémica, infarto, shock cardiogénico, embolia pulmonar y cirugía cardiaca. Ojo: en tus apuntes la dosis viene en «mg/kg/minuto»; debería ser µg/kg/min."},
/* ===== Tema 5 A (t5a-cardio): págs. 12-21, otros inotropos, potencial de acción y antiarrítmicos ===== */
/* ---------- p. 12 · Dobutamina (final) ---------- */
{doc:"t5a-cardio",t:5,p:12,q:"Reacciones adversas e interacciones de la dobutamina que resaltaste en tus apuntes:",o:[
 "Taquicardia y ↑ marcado de la presión sistólica; los β-bloqueantes (propranolol) antagonizan su acción",
 "Bradicardia e hipotensión sistólica muy marcada; los β-bloqueantes (propranolol) antagonizan su acción",
 "Taquicardia y ↑ marcado de la presión sistólica; los β-bloqueantes (propranolol) potencian su acción",
 "Hipotensión por vasodilatación potente; los β-bloqueantes (propranolol) potencian su acción"],a:0,
 cita:"RRAA: taquicardia y ↑ marcado de la presión sistólica.\nInteracciones: los beta-bloqueantes antagonizan su acción (p.e., propranolol).",
 n:"Tus apuntes añaden «Similares a las anteriores»: el resto de RRAA son como las de la dopamina de la página anterior."},

{doc:"t5a-cardio",t:5,p:12,q:"¿Por qué tus apuntes mandan dar digoxina (o digitoxina) antes de la dobutamina si hay fibrilación atrial?",o:[
 "Porque la dobutamina incrementa la velocidad de conducción por el nodo AV",
 "Porque la dobutamina enlentece la conducción por el nodo AV y causa bloqueo",
 "Porque la digoxina evita la hipotensión intensa que produce la dobutamina",
 "Porque la dobutamina sola no aumenta la fuerza de contracción del corazón"],a:0,
 cita:"En fibrilación atrial, administrar digoxina ó digitoxina antes de la dobutamina.\nIncrementa la velocidad de conducción por el nodo AV, por lo que debe asociarse a digoxina en animales enfermos con IC que presentan taquicardias supraventriculares rápidas, para controlar la frecuencia ventricular.",
 n:"La digoxina frena el nodo AV y así controla la frecuencia ventricular."},

/* ---------- p. 12 · Inhibidores de la PDE III ---------- */
{doc:"t5a-cardio",t:5,p:12,q:"Inhibidores de la PDE III (amrinona, milrinona). Señala la CORRECTA según tus apuntes:",o:[
 "Más vasodilatadores que inotropos; solo a corto plazo en la ICC (son proarrítmicos); dan trombocitopenia",
 "Más inotropos que vasodilatadores; solo a corto plazo en la ICC (son proarrítmicos); dan trombocitopenia",
 "Más vasodilatadores que inotropos; de uso crónico en la ICC (no son proarrítmicos); dan trombocitopenia",
 "Más vasodilatadores que inotropos; solo a corto plazo en la ICC (son proarrítmicos); dan trombocitosis"],a:0,
 cita:"INHIBIDORES PDE III: BIPIRIDINAS: AMRINONA,MILRINONA, enoximona, vesnarinona\nEscasa actividad sobre frecuencia cardiaca y presión sanguínea.\nMayor acción sobre vasos (vasodilatación) que corazón (inotropo +)\nReducen la precarga y la poscarga: menor necesidad de O2\nIndicaciones: tratamiento a corto plazo de la ICC (son proarritmicos). Puede ser una alternativa en la IC resistente a los digitálicos.\nRRAA: disrritmias (ventriculares más frecuentes), trombocitopenia (realizar recuentos frecuentes de plaquetas durante el tto ,amrinona>milrinona,) e hipotensión.",
 n:"La trombocitopenia es mayor con amrinona que con milrinona. Al reducir la precarga y la poscarga disminuyen la necesidad de O₂."},

/* ---------- p. 12 · Pimobendan ---------- */
{doc:"t5a-cardio",t:5,p:12,q:"Mecanismo de acción dual del pimobendan según tus apuntes:",o:[
 "↑ la sensibilidad de los miofilamentos al Ca²⁺ e inhibe la PDE III y V en vasos (en el corazón, a dosis mayores)",
 "↑ la entrada de Ca²⁺ por canales lentos e inhibe la PDE III y V en vasos (en el corazón, a dosis mayores)",
 "↑ la sensibilidad de los miofilamentos al Ca²⁺ y activa la PDE III y V en vasos, lo que produce vasoconstricción",
 "Inhibe la Na⁺/K⁺-ATPasa del miocardio e inhibe la PDE III y V en vasos (en el corazón, a dosis mayores)"],a:0,
 cita:"IONODILATADORES DE ACCIÓN DUAL: PIMOBENDAN\n1. ↑ sensibilidad de los filamento miocárdicos al Ca2+ ( ↑ contractilidad cardíaca).\n2. Inhibe la PDE III y V en vasos (vasodilatación), y a dosis mayores en corazón ( ↑ AMPc y del flujo de Ca2+).",
 n:"En los vasos la inhibición de la PDE da vasodilatación; en el corazón, a dosis mayores, ↑ el AMPc y el flujo de Ca²⁺."},

{doc:"t5a-cardio",t:5,p:12,q:"Efectos del pimobendan que resaltaste. Señala la CORRECTA:",o:[
 "No aumenta la necesidad de O₂, ↓ la hipertrofia cardiaca no fisiológica e inhibe la agregación plaquetaria",
 "Aumenta la necesidad de O₂, ↓ la hipertrofia cardiaca no fisiológica e inhibe la agregación plaquetaria",
 "No aumenta la necesidad de O₂, ↑ la hipertrofia cardiaca no fisiológica e inhibe la agregación plaquetaria",
 "No aumenta la necesidad de O₂, ↓ la hipertrofia cardiaca no fisiológica y favorece la agregación plaquetaria"],a:0,
 cita:"Actividad inotropa + y vasodilatadora potente (venosa y arterial): ↑ gasto y ↓ precarga y poscarga →reduce la resistencia vascular sistémica.\nNo hay aumento de la necesidad de O2\nNo efecto cronotropo + (sólo a dosis ↑ ↑ ) ni arritmogénico\n↓ la hipertrofia cardíaca no fisiológica.\nInhibe de forma potente la agregación plaquetaria.",
 n:"Al inhibir la PDE V de las arterias pulmonares también mejora la hipertensión pulmonar que acompaña al ↑ de presión en la aurícula izquierda."},

{doc:"t5a-cardio",t:5,p:12,q:"Indicaciones y contraindicaciones del pimobendan (con tu nota en rojo):",o:[
 "Indicado en la ICC canina por CMD o por insuficiencia valvular; nunca en la cardiomiopatía hipertrófica",
 "Indicado en la cardiomiopatía hipertrófica; contraindicado en la ICC canina por la insuficiencia valvular",
 "Indicado en la ICC canina por CMD o por estenosis aórtica; contraindicado en la insuficiencia valvular",
 "Indicado en la ICC canina por CMD; contraindicado en la regurgitación mitral y/o tricúspide del perro"],a:0,
 cita:"Indicaciones: ICC canina originada por cardiomiopatía dilatada (CMD) o por insuficiencia valvular (regurgitación mitral y/o tricúspide).\nContraindicaciones: cardiomiopatías hipertróficas o cuando no sea posible un aumento del gasto debido a condiciones funcionales o anatómicas (p.e. estenosis aórtica, lesión valvular). (anotación a mano, en rojo: «Inotrópicos NO, NUNCA cuando hay hipertrófica»)",
 n:"Dosis que marcaste: 0,5 mg/kg/día por vía oral, dividida en 2 (0,25 mg/kg/12 h), 1 h antes de la comida."},

/* ---------- p. 13 · Pimobendan (final) y glucagón ---------- */
{doc:"t5a-cardio",t:5,p:13,q:"Reacciones adversas e interacciones del pimobendan según tus apuntes:",o:[
 "Muy bien tolerado; a dosis elevadas, vómitos, arritmia y taquicardias; antagonistas del Ca²⁺ y β-bloqueantes lo atenúan",
 "Muy bien tolerado; a dosis elevadas, vómitos, arritmia y taquicardias; antagonistas del Ca²⁺ y β-bloqueantes lo potencian",
 "Mal tolerado; a dosis terapéuticas, bradicardia y bloqueo AV; antagonistas del Ca²⁺ y β-bloqueantes lo atenúan",
 "Muy bien tolerado; a dosis elevadas, hipertensión y bradicardia; los IECA y los diuréticos atenúan su efecto"],a:0,
 cita:"RRAA: muy bien tolerado. En dosis elevadas: vómitos y arritmia, hipotensión sistémica, taquicardias dosis dependientes, incoordinación, convulsiones, polidipsia y poliuria.\nInteracciones: antagonistas del calcio y β -antagonistas atenúan su efecto.",
 n:"A dosis elevadas también: hipotensión sistémica, incoordinación, convulsiones, polidipsia y poliuria."},

{doc:"t5a-cardio",t:5,p:13,q:"Según tu anotación a mano, ¿en qué se usa el pimobendan en gatos?",o:[
 "En la disfunción sistólica ventricular y otras patologías con insuficiencia sistólica",
 "En la cardiomiopatía hipertrófica felina con obstrucción dinámica del tracto de salida",
 "En la disfunción diastólica por cardiomiopatía restrictiva o hipertrófica felina",
 "En la hipertensión sistémica del gato con enfermedad renal crónica avanzada"],a:0,
 cita:"(anotación a mano en la p. 13, bajo las interacciones del pimobendan: «✱ Pimobendan en gatos: Disfunción sistólica ventricular y algunas patologías con insuficiencia Sistólica»)",
 n:"Recuerda tu nota en rojo de la p. 12: nunca inotrópicos si hay cardiomiopatía hipertrófica."},

{doc:"t5a-cardio",t:5,p:13,q:"El glucagón como inotropo, según tus apuntes:",o:[
 "↑ la síntesis de AMPc; se ha usado en la IC aguda por un uso imprudente de β-bloqueantes",
 "Inhibe la PDE III cardiaca; se ha usado en la IC aguda por un uso imprudente de β-bloqueantes",
 "↑ la síntesis de AMPc; se usa en la IC crónica por cardiomiopatía hipertrófica felina",
 "Bloquea los canales lentos de Ca²⁺; se usa en la intoxicación por agonistas β"],a:0,
 cita:"GLUCAGÓN:\nAumenta la contractilidad miocárdica al ↑ la síntesis de AMPc.\nPor su efecto inotropo positivo se ha empleado para el tratamiento de insuficiencia cardiaca aguda provocada por un uso imprudente de β -bloqueantes.",
 n:"Lógica: no actúa a través de los receptores β, así que sigue subiendo el AMPc aunque estén bloqueados."},

/* ---------- p. 13-14 · Potencial de acción cardiaco ---------- */
{doc:"t5a-cardio",t:5,p:13,q:"Potencial de acción cardiaco: iones y correspondencia con el ECG según tus apuntes:",o:[
 "Fase 0: entra Na⁺ (con la fase 1, ondas R y S); fase 3: sale K⁺ por canales que siguen abiertos (onda T)",
 "Fase 0: entra Ca²⁺ (con la fase 1, onda P); fase 3: sale K⁺ por canales que siguen abiertos (onda T)",
 "Fase 0: entra Na⁺ (con la fase 1, ondas R y S); fase 3: entra K⁺ por canales que siguen abiertos (segmento ST)",
 "Fase 0: sale K⁺ (con la fase 1, ondas R y S); fase 3: entra Na⁺ por los canales rápidos (onda T)"],a:0,
 cita:"Fase 0 – apertura de canales rápidos de Na y despolarización rápida:\nConduce Na+ dentro de la célula , cambiando el potencial de membrana\nFase 1 – Repolarización inicial rápida\nCierre de los canales rápidos de Na+\nFase 0 y 1 juntas corresponden a las ondas R y S del ECG\nFase 3 – repolarización\nLos canales de K+ se mantienen abiertos\nPermite al K+ aumentar fuera de la célula, causando repolarización celular\nCorresponde a la onda T del ECG",
 n:"Fase 4: reposo (−85 mV), asociada a la diástole. Ojo: tus apuntes ponen en la fase 0 la «corriente transitoria hacia afuera (Cl⁻ y K⁺)», que en realidad es de la fase 1."},

{doc:"t5a-cardio",t:5,p:14,q:"Fase 2 (meseta) del potencial de acción cardiaco, junto a la que anotaste «Periodo refractario»:",o:[
 "Balance entre la entrada de Ca²⁺ y la salida de K⁺; bloquea cualquier señal prematura de estimulación",
 "Balance entre la entrada de Na⁺ y la salida de Ca²⁺; admite estímulos extra y suma así las contracciones",
 "Balance entre la entrada de Ca²⁺ y la salida de K⁺; es más breve que en nervios y otros músculos",
 "Despolarización lenta y continua, típica de las células marcapaso; equivale a la diástole"],a:0,
 cita:"Fase 2 – fase de meseta\nSostenida mediante balance entre la corriente de entrada de Ca+ y la corriente de salida de K +.\nPosee una duración prolongada comparada con otros nervios y tejidos musculares.\nNormalmente bloquea cualquier señal prematura de estimulación (otros tejidos musculares pueden aceptar estimulación adicional e incrementar su contractilidad con un efecto sumatorio) (anotación a mano con flecha a esta línea: «Periodo Refractario»)\nCorresponde al segmento ST del ECG.",
 n:"Corresponde al segmento ST. Tus apuntes escriben «Ca+»: es Ca²⁺."},

{doc:"t5a-cardio",t:5,p:14,q:"Estados del canal de Na⁺ cardiaco y unión de los antiarrítmicos (resaltado en tus apuntes):",o:[
 "Activado en la fase 0, inactivado en las fases 2-3; los fármacos se unen sobre todo a estos dos estados",
 "Activado en la fase 0, inactivado en las fases 2-3; los fármacos se unen sobre todo al estado de reposo",
 "Activado en las fases 2-3, inactivado en la fase 0; los fármacos se unen sobre todo a estos dos estados",
 "Activado en la fase 4, inactivado en la fase 0; los fármacos se unen sobre todo al estado de reposo"],a:0,
 cita:"Estado reposo: cuando hay potenciales electronegativos\nEstado activado o abierto: fase 0 del potencial de acción (al despolarizarse la mb)\nEstado inactivado: fase 2,3 y comienzo de fase 4 (mientras se mantienen la despolarización)\nA concentraciones terapéuticas los fármacos antiarrítmicos tienen preferencia de unión por los estados activado e inactivado más que por el estado de reposo"},

/* ---------- p. 15 · Cronotropos y tabla de Vaughan Williams ---------- */
{doc:"t5a-cardio",t:5,p:15,q:"Cronotropos positivos según tus apuntes. Señala la CORRECTA:",o:[
 "Atropina e ipratropio: bradicardia sinusal y bloqueo AV incompleto; en el paro cardiaco, adrenalina",
 "Atropina e ipratropio: taquicardia sinusal y fibrilación auricular; en el paro cardiaco, adrenalina",
 "Atropina e ipratropio: bradicardia sinusal y bloqueo AV incompleto; en el paro cardiaco, lidocaína",
 "Atropina e ipratropio: bloqueo AV completo y asistolia; en el paro cardiaco, propranolol i.v."],a:0,
 cita:"A.1. Anticolinérgicos o parasimpaticolíticos:\nIPRATROPIO y ATROPINA (antimuscarinicos) Pueden ser útiles en bradicardia sinusal y bloqueo incompleto AV.\nA.2. Adrenérgicos o simpaticomiméticos:\nPueden ser utilizados en bradicardia sinusal y bloqueo AV. Su desventaja principal: aumentan, en general, la excitabilidad cardiaca, y pueden aparecer extrasístoles por la emisión de impulsos adicionales.\nEn caso de paro cardiaco, el fármaco de elección es la adrenalina, que inicia nuevas contracciones cardiacas. Se debe utilizar por vía i.v. (si existe todavía retorno venoso) o intracardiaca.",
 n:"Los simpaticomiméticos también sirven en bradicardia y bloqueo AV, pero pueden dar extrasístoles. La dosis de atropina está tachada en tus apuntes: no entra."},

{doc:"t5a-cardio",t:5,p:15,q:"En la tabla de Vaughan Williams anotaste «los más utilizados» y «los que suele preguntar». Señala la CORRECTA:",o:[
 "Clase II: bloqueantes β-adrenérgicos (propranolol); clase IV: bloqueantes de canales de Ca²⁺ (verapamilo)",
 "Clase II: bloqueantes de canales de K⁺ (amiodarona); clase IV: bloqueantes β-adrenérgicos (propranolol)",
 "Clase II: bloqueantes β-adrenérgicos (propranolol); clase IV: bloqueantes de canales de Na⁺ (lidocaína)",
 "Clase II: bloqueantes de canales de Ca²⁺ (diltiazem); clase IV: bloqueantes de los canales de K⁺ (sotalol)"],a:0,
 cita:"Clasificación de los fármacos Antiarrítmicos de Vaughan Williams\nClase II · Bloqueantes de los receptores betaadrenérgicos · Propranolol, Esmolol, Atenolol, Metoprolol\nClase IV · Bloqueantes de los canales de calcio · Verapamilo, Diltiazem\n(anotaciones a mano junto a la tabla: «Los más utilizados en arritmias», con flecha junto a la clase II; «los más utilizados», con flecha a la clase IV; «Los que suele preguntar !»)",
 n:"Clase I: bloqueantes de Na⁺ (IA procainamida, quinidina; IB lidocaína, mexiletina; IC flecainida, propafenona). Clase III: bloquean canales de K⁺ y prolongan el PA y el periodo refractario (amiodarona, sotalol, bretilio, ibutilide)."},

/* ---------- p. 16 · Antiarrítmicos de clase I ---------- */
{doc:"t5a-cardio",t:5,p:16,q:"Antiarrítmicos de clase I (bloqueantes de los canales rápidos de Na⁺) según tus apuntes:",o:[
 "↓ la velocidad de despolarización, prolongan el periodo refractario y tienen un margen de seguridad estrecho",
 "↑ la velocidad de despolarización, prolongan el periodo refractario y tienen un margen de seguridad estrecho",
 "↓ la velocidad de despolarización, acortan el periodo refractario y tienen un margen de seguridad amplio",
 "↓ la velocidad de despolarización, prolongan el periodo refractario y se usan en cualquier arritmia leve"],a:0,
 cita:"Clase I- Bloqueantes de los canales rápidos de Na+\n↓ velocidad de despolarización y expansión del estímulo en miocardio\nReducen la formación de potenciales de acción ectópicos\nProlongan el periodo refractario (PR)\nBloqueo del canal Na dependiente del “estado”\nMARGEN DE SEGURIDAD ESTRECHO: sólo se utilizan cuando las alteraciones del ritmo son tan intensas que alteran la función de bombeo cardiaco o cuando existe el peligro de que aparezcan otras complicaciones.",
 n:"Ojo: en los «efectos diferenciales» de tus apuntes, la Ib acorta el periodo refractario y la Ic no lo afecta."},

{doc:"t5a-cardio",t:5,p:16,q:"Preferencia de cada subclase de clase I por el estado del canal de Na⁺ (resaltado en tus apuntes):",o:[
 "Ia y Ic: canal activado o abierto (frecuencias altas, supraventriculares); Ib: inactivado (ventriculares)",
 "Ia y Ic: canal inactivado (arritmias ventriculares); Ib: activado o abierto (frecuencias altas, supraventriculares)",
 "Ia y Ic: canal en reposo (frecuencias bajas, bradiarritmias); Ib: inactivado (arritmias ventriculares)",
 "Ia y Ic: canal activado o abierto (arritmias ventriculares); Ib: en reposo (arritmias supraventriculares)"],a:0,
 cita:"Ia y Ic →preferencia por los canales activados o abiertos → más eficaces con frecuencias cardiacas elevadas (arritmias supraventriculares)\nIb →preferencia por el canal en estado inactivado →más eficaces arritmias ventriculares (periodos más prolongados de despolarización)",
 n:"Por eso la lidocaína (Ib) es un antiarrítmico ventricular."},

{doc:"t5a-cardio",t:5,p:16,q:"Quinidina (clase IA) según tus apuntes:",o:[
 "Inotropo negativo y vasodilatador periférico (bloqueo α); se usa en la fibrilación auricular del caballo",
 "Inotropo positivo y vasoconstrictor periférico (agonista α); se usa en la fibrilación auricular del caballo",
 "Inotropo negativo y vasodilatador periférico (bloqueo α); de elección en arritmias ventriculares del perro",
 "Inotropo negativo y vasodilatador periférico (bloqueo β); se usa en la fibrilación ventricular del cerdo"],a:0,
 cita:"QUINIDINA (CLASE 1A)\nEfecto inotropo negativo, propiedades curarizantes (junto a fenitoína en espasmos musculares y calambres), antipiréticas, oxitotocicas, vagolíticas y antipalúdicas. Vasodilatación periférica (bloqueo α).\nPK: Absorción oral, ↑ UPP, 90% biotransformación hepática y excreción renal (acidificación acelera) -Usos: fibrilación auricular en el caballo y menos frecuentemente en el perro",
 n:"En el caballo la fibrilación auricular a menudo no se debe a una cardiopatía y se resuelve con el tratamiento; en perros y gatos suele ser irreversible (p. 13)."},

/* ---------- p. 17 · Quinidina (toxicidad) y procainamida ---------- */
{doc:"t5a-cardio",t:5,p:17,q:"Toxicidad de la quinidina según tus apuntes:",o:[
 "Cinconismo (acúfenos, dolor de cabeza), hipotensión grave y bloqueo A-V; contraindicada en hepatopatías",
 "Cinconismo (visión amarilla, discromatopsia), hipertensión y bloqueo A-V; contraindicada en hepatopatías",
 "Cinconismo (acúfenos, dolor de cabeza), hipotensión grave y bloqueo A-V; contraindicada en el caballo",
 "Cinconismo (convulsiones, depresión respiratoria) y taquicardia sinusal; contraindicada en el asma"],a:0,
 cita:"Toxicidad:\nDigestiva: anorexia, vómitos, cólicos y diarrea\nHemática: descenso de factores de la coagulación\nNerviosa: cinconismo (acúfenos, dolor de cabeza), ataxia\nCardiovascular: hipotensión grave, bloqueo A-V, fibrilación ventricular\nReacciones de hipersensibilidad: fiebre urticaria, anemia hemolítica, laminitis.\nCongestión mucosa nasal\nContraindicaciones: hepatopatías.\nPrecaución: insuficiencia renal, hipoalbuminemia.",
 n:"Las interacciones de la quinidina están tachadas en tus apuntes (anotaste «muchas»): no entran."},

{doc:"t5a-cardio",t:5,p:17,q:"Procainamida (clase IA) según tus apuntes:",o:[
 "De elección en el perro en arritmias ventriculares; menos vagolítica que la quinidina; contraindicada en la intoxicación digitálica",
 "De elección en el caballo en fibrilación auricular; más vagolítica que la quinidina; indicada en la intoxicación digitálica",
 "De elección en el perro en arritmias supraventriculares; menos vagolítica que la quinidina; indicada en la intoxicación digitálica",
 "De elección en el perro en arritmias ventriculares; más vagolítica que la quinidina; de primera elección en la intoxicación digitálica"],a:0,
 cita:"PROCAINAMIDA (CLASE 1A):\nPropiedades estabilizantes de membrana semejantes a quinidina, pero menor actividad vagolítica.\nDe elección en perro en arritmias ventriculares (acción más selectiva). También actividad bloqueante ganglionar y vasodilatadora moderada.\nToxicidad:\nCardiovascular: hipotensión, bloqueo AV, extrasístoles, taquicardia, fibrilación ventricular, ↓ contractilidad, etc.\nContraindicada en intoxicación digitálica",
 n:"Toxicidad cardiovascular que resaltaste: hipotensión y bloqueo AV. En insuficiencia renal, reducir un 50 % la dosis por cada 50 % de ↑ del BUN."},

/* ---------- p. 17-18 · Subclase IB y lidocaína ---------- */
{doc:"t5a-cardio",t:5,p:18,q:"Subclase IB (lidocaína, mexiletina, fenitoína) frente a IA e IC, según tus apuntes:",o:[
 "Débil depresión de la fase 0, acortan la duración del PA y se asocian y disocian muy rápido (<1 s)",
 "Fuerte depresión de la fase 0, no modifican el PA y se asocian y disocian lentamente (>10 s)",
 "Moderada depresión de la fase 0, alargan la duración del PA y se disocian a velocidad intermedia",
 "Débil depresión de la fase 0, alargan la duración del PA y se asocian y disocian lentamente (>10 s)"],a:0,
 cita:"Subclase IB\nDébil depresión de fase 0\nDisminuyen la duración del potencial de acción\nAfinidad máxima por el estado inactivo del canal de Na+→ + efectivos donde los PA prolongados →arritmias ventriculares.\nAsociación y disociación muy rápida (<1s)□Discriminan latidos prematuros\nIncluyen\nLidocaína\nMexiletina: derivado de lidocaína, administración oral, actividad similar\nFenitoina: anticonvulsivante, como antiarritmico similar a lidocaína\nTocainida (retirada ren USA→aplasia medular y fibrosis pulmonar en humana)",
 n:"Por su cinética tan rápida, los IB discriminan los latidos prematuros; los IC (lentos, >10 s) ↓ la excitabilidad sin discriminar. La opción de «fuerte depresión» describe a la IC, y la de «moderada», a la IA."},

{doc:"t5a-cardio",t:5,p:18,q:"Lidocaína (clase IB) según tus apuntes. Señala la CORRECTA:",o:[
 "Acción selectiva sobre el ventrículo, no altera la conducción AV y por vía oral no es efectiva",
 "Acción selectiva sobre aurícula y nodos SA y AV, enlentece la conducción AV y es efectiva por vía oral",
 "Acción selectiva sobre el ventrículo, no altera la conducción AV y es útil por vía oral a largo plazo",
 "Acción selectiva sobre el ventrículo, enlentece mucho la conducción AV y por vía oral no es efectiva"],a:0,
 cita:"LIDOCAÍNA (CLASE 1B):\nTratamiento y prevención de taquicardia y fibrilación ventriculares durante e inmediatamente después de un infarto de miocardio\nAcción selectiva sobre ventrículo, afecta poco a aurícula y nodos SA y AV.\nReduce automatismo en células de Purkinje ( ↓ PR y duración de PA).\nNo altera la conducción AV o intraventricular.\nI.V. amplia distribución\nP.O. no efectiva (efecto 1er paso)→no útil para tratamiento a largo plazo\nSemivida breve→ mejor infusión continua",
 n:"Por eso se da por vía i.v., en bolo lento seguido de infusión continua. Su derivado oral es la mexiletina."},

{doc:"t5a-cardio",t:5,p:18,q:"Lidocaína: ¿cuándo no es efectiva y qué reacción adversa cardiaca marcaste con «!»?",o:[
 "No es efectiva con hipopotasemia; puede producir bloqueo AV (además de ↓ contractilidad y bradicardia)",
 "No es efectiva con hiperpotasemia; puede producir taquicardia sinusal (además de ↑ contractilidad)",
 "No es efectiva con hipopotasemia; puede producir fibrilación auricular (además de hipertensión)",
 "No es efectiva con hipocalcemia; puede producir bloqueo AV (además de ↑ contractilidad y de taquicardia)"],a:0,
 cita:"No efectiva en presencia de hipocaliemia (HIPOPOTASEMIA).\nReacciones adversas:\nNerviosas: sedación, náuseas, alt. visuales, parestesias, obnubilación, depresión respiratoria, convulsiones.\nCardiacas: ↓ contractilidad, bradicardia, bloqueo AV. (anotación a mano: «!» junto a «bloqueo AV»)\nVasculares: vasodilatación → hipotensión.\nContraindicaciones: fibrilación auricular o flutter",
 n:"Ojo con las dosis de tus apuntes: la infusión de lidocaína se da en µg/kg/min, no en mg/kg/min."},

/* ---------- p. 19 · Fenitoína y clase II ---------- */
{doc:"t5a-cardio",t:5,p:19,q:"Fenitoína como antiarrítmico (clase IB) según tus apuntes:",o:[
 "Indicada en arritmias por digitálicos: ↓ el automatismo ectópico sin reducir el ritmo sinusal y mejora la conducción AV",
 "Indicada en arritmias por digitálicos: ↓ el ritmo sinusal y enlentece de forma marcada la conducción AV e intraventricular",
 "Indicada en la fibrilación auricular del caballo: ↓ el automatismo ectópico y mejora la conducción AV",
 "Poco útil en arritmias por digitálicos: ↑ la salida de K⁺ intracelular que estos provocan y ↓ el umbral de fibrilación"],a:0,
 cita:"FENITOÍNA (CLASE 1B)\nActividad central (SNC): ↓ activación simpática del corazón\nLa fenitoína:\n↓ automatismo de marcapasos ectópicos (p.e. en intoxicación digitálica), pero no reduce el ritmo sinusal.\nMejora la conducción AV e intraventricular\n↑ umbral de fibrilación auricular y ventricular\nDisminuye la salida de K+ intracelular ocasionada por digitálicos\nIndicaciones: arritmias por digitálicos (revierte la arritmia sin alterar la capacidad contráctil); poca utilidad en otras arritmias.",
 n:"Sus reacciones adversas están tachadas en tus apuntes: no entran."},

{doc:"t5a-cardio",t:5,p:19,q:"Antiarrítmicos de clase II (β-bloqueantes), que marcaste con «!» en rojo. Señala la CORRECTA:",o:[
 "Enlentecen la conducción A-V, previenen la taquicardia refleja y ↓ las despolarizaciones prematuras",
 "Aceleran la conducción A-V, previenen la taquicardia refleja y ↓ las despolarizaciones prematuras",
 "Enlentecen la conducción A-V, producen taquicardia refleja y ↑ las despolarizaciones prematuras",
 "Enlentecen la conducción A-V, previenen la taquicardia refleja y agravan la hipertrofia ventricular"],a:0,
 cita:"Clase II – Bloqueantes β -adrenérgicos (anotación a mano, lectura probable: «les interesa más», con «!» en rojo y flecha a este título)\nBasan su efecto en dos acciones:\nBloqueo de receptores β -adrenérgicos miocárdicos\nEfectos directos de estabilización de membranas relacionados con el bloqueo del canal de Na+\nEnlentecen la conducción A-V\nPrevienen la taquicardia refleja y ↓ despolarizaciones prematuras\nPueden reducir la presión sanguínea en hipertensión\nReducen los efectos nocivos de la hipertrofia ventricular (cardiopatía , hipertrófica, hipertiroidismo, estenosis aórtica , etc.)"},

/* ---------- p. 20 · Clase II (indicaciones, carvedilol) y clase III ---------- */
{doc:"t5a-cardio",t:5,p:20,q:"β-bloqueantes como antiarrítmicos: indicaciones y reacciones adversas según tus apuntes:",o:[
 "Arritmias supraventriculares e intoxicación digitálica; pueden dar broncoespasmo y agravar una ICC",
 "Arritmias supraventriculares e intoxicación digitálica; producen broncodilatación y mejoran la ICC",
 "Bradicardia sinusal y bloqueo AV incompleto; pueden dar broncoespasmo y agravar una ICC",
 "Arritmias supraventriculares y bloqueo AV; pueden dar hipertensión y agravar una ICC"],a:0,
 cita:"Indicados en:\nArritmias supraventriculares (anotación a mano: «cánidos»)\nIntoxicación digitálica\nPrevención de recurrencia de taquicardias t por ↑ actividad simpática\nRRAA: Broncoespasmo, depresión cardíaca (inotropismo negativo) e hipotensión□Pueden agravar una ICC",
 n:"Propranolol: el más utilizado. Selectivos β1, sin broncoconstricción: atenolol (en la cardiomiopatía hipertrófica felina), metoprolol y acebutolol."},

{doc:"t5a-cardio",t:5,p:20,q:"Carvedilol según tus apuntes (y tu nota a mano). Señala la CORRECTA:",o:[
 "Útil en la estenosis aórtica o subaórtica canina; contraindicado en asma y bloqueo AV; iniciar y retirar de forma progresiva",
 "Útil en la estenosis aórtica o subaórtica canina; contraindicado en asma y bloqueo AV; se puede suspender bruscamente sin riesgo",
 "Contraindicado en la estenosis aórtica o subaórtica; útil en asma y bloqueo AV; iniciar y retirar de forma progresiva",
 "Útil en la estenosis aórtica o subaórtica canina; de elección en el asma felina; iniciar a dosis plena desde el principio"],a:0,
 cita:"CARVEDILOL:\nEn estenosis aórtica o subaórtica canina: puede limitar la hipertrofia y mejorar la disfunción diastólica.\nEn estenosis pulmonar severa (sólo o con bloqueantes de canales del Ca2+).\nEn hipertensión esencial. (solo o combinado con fármacos antihipertensivos, especialmente diuréticos tiazidicos).\nEn ICC sintomática, en pacientes sometidos a tratamiento estándar con diuréticos, IECAs, digoxina y/o vasodilatadores.\nContraindicados:\nAlteraciones hepáticas con descenso del flujo sanguíneo\nAsma, alteraciones de vías respiratorias bajas\nBloqueo AV (anotación a mano junto a las contraindicaciones: «INICIAR Y RETIRAR TTO DE FORMA PROGRESIVA»)",
 n:"Reducir dosis en alteraciones renales y digestivas e hipoglucemia."},

{doc:"t5a-cardio",t:5,p:20,q:"Antiarrítmicos de clase III (bloqueantes de los canales de K⁺) según tus apuntes:",o:[
 "Retrasan la repolarización; la amiodarona sirve en taquiarritmias SV y ventriculares, pero es de reserva por su toxicidad",
 "Aceleran la repolarización; la amiodarona sirve en taquiarritmias SV y ventriculares, pero es de reserva por su toxicidad",
 "Retrasan la repolarización; la amiodarona es de primera elección por su baja toxicidad, incluso en la tirotoxicosis",
 "Retrasan la repolarización; el sotalol es de reserva por su toxicidad y está contraindicado en la taquicardia ventricular"],a:0,
 cita:"Clase III – Bloqueantes de los canales K+:\nCausan retraso en la repolarización y prolongan PA y PR\nAMIODARONA, en taquiarritmias supraventriculares y ventriculares. Fármaco de reserva por su toxicidad. NO en tirotoxicosis ni bradicardia. (anotación a mano: «pero» antes de «Fármaco de reserva»)\nSOTALOL, en arritmias supraventriculares paroxísticas y suprime extrasístoles ventriculares y rachas breves de taquicardia ventricular.",
 n:"Bretilio: suprime la fibrilación ventricular asociada al infarto (vía i.v.) y se usa como profilaxis de taquidisritmias ventriculares en cerdos durante la anestesia general."},

/* ---------- p. 21 · Clase IV (verapamilo y diltiazem) ---------- */
{doc:"t5a-cardio",t:5,p:21,q:"Bloqueantes de los canales lentos de Ca²⁺ (clase IV). Señala la CORRECTA según tus apuntes:",o:[
 "Deprimen intensamente la conducción A-V, dilatan las arteriolas coronarias y son inotropos negativos",
 "Aceleran la conducción A-V, dilatan las arteriolas coronarias y son inotropos negativos",
 "Deprimen intensamente la conducción A-V, contraen las arteriolas coronarias y son inotropos negativos",
 "Deprimen intensamente la conducción A-V, dilatan las arteriolas coronarias y son inotropos positivos"],a:0,
 cita:"Clase IV – Bloqueantes de los canales lentos de Ca2+\nIntensa actividad depresora de la velocidad de conducción A-V en individuos con fibrilación atrial, también en células de Purkinje.\nVasodilatación arteriolar (CORONARIAS) y venosa. (anotación a mano con flecha a esta línea: «mejoran nutrición del corazón»)\nActividad inotrópica negativa."},

{doc:"t5a-cardio",t:5,p:21,q:"Según tus apuntes, verapamilo y diltiazem:",o:[
 "Son de elección en taquicardias supraventriculares severas y agudas y se usan en la cardiomiopatía hipertrófica",
 "Son de elección en taquicardias ventriculares severas y agudas y se usan además en la cardiomiopatía hipertrófica",
 "Son de elección en taquicardias supraventriculares severas y agudas, pero están contraindicados en la CMH",
 "Son de elección en la fibrilación ventricular y se usan en la cardiomiopatía dilatada con ICC grave"],a:0,
 cita:"DE ELECCIÓN TAQUICARDIAS SUPRAVENTRICULARES SEVERAS Y AGUDAS (aunque adenosina es más segura).\nIncluye a: VERAPAMILO Y DILTIAZEM\nUsos: desórdenes por hipertrofia ventricular (hipertiroidismo, cardiomiopatía hipertrófica y estenosis aórtica). Angina de pecho, hipertensión arterial, arritmias supraventriculares, migraña, etc. (anotación a mano: «!» en rojo y un corazón dibujado sobre «cardiomiopatía hipertrófica»)",
 n:"Tus apuntes matizan que en la taquicardia supraventricular la adenosina es más segura."},

{doc:"t5a-cardio",t:5,p:21,q:"Contraindicaciones e interacción de verapamilo y diltiazem (marcadas en rojo):",o:[
 "Contraindicados en intoxicación digitálica, bloqueo AV e ICC severa; con β-bloqueantes → bloqueo AV",
 "Indicados en la intoxicación digitálica y en el bloqueo AV; con β-bloqueantes → bloqueo AV",
 "Contraindicados en intoxicación digitálica, bloqueo AV e ICC severa; con β-bloqueantes → taquicardia refleja",
 "Contraindicados en hipertiroidismo y estenosis aórtica; con β-bloqueantes se asocian con seguridad"],a:0,
 cita:"CONTRAINDICADOS: intoxicación digitálica, bloqueo AV, insuficiencia cardiaca congestiva severa. En hepatopatías reducir dosis hasta un 70% (anotación a mano en rojo: «lo potenciaría»)\nInteracciones: verapamilo + β -bloqueantes → bloqueo AV (anotaciones a mano en rojo: «2 potentes antiarrítmicos» y «! BLOQUEO x2»)",
 n:"En hepatopatías, reducir la dosis hasta un 70 %."},
/* ===== Tema 5 B (t5b-cardio): págs. 1-8, insuficiencia cardiaca, activación neurohormonal, tratamiento e infarto ===== */
/* ---------- p. 1 · Etiología de la IC y disfunción ventricular ---------- */
{doc:"t5b-cardio",t:5,p:1,q:"Etiología de la insuficiencia cardiaca (frases resaltadas y en negrita en tus apuntes). Señala la CORRECTA:",o:[
 "Las más importantes: enfermedad coronaria, hipertensión y CMD; el 30 % de las CMD es de origen genético",
 "Las más importantes: enfermedad coronaria, hipertensión y CMD; el 70 % de las CMD es de origen genético",
 "Las más importantes: infecciones, toxinas y CMD; el 30 % de las CMD es de origen genético",
 "Las más importantes: anemia, hipertiroidismo e hipertensión; el 30 % de las CMD es de origen genético"],a:0,
 cita:"La enfermedad coronaria, HPT y CMD son las causas más importantes.\n30% de los pacientes CMD tienen etiología genética.\nEnfermedad valvular cardiaca es otra causa importante de IC. (anotación a mano: «Cardiomiopatía dilatada», unida con flechas rojas a «Hipertensión» y a la frase de las causas más importantes)",
 n:"CMD = cardiomiopatía dilatada; HPT = hipertensión. La anemia y el hipertiroidismo están entre las causas precipitantes; las infecciones y las toxinas, en la lista general de causas."},

{doc:"t5b-cardio",t:5,p:1,q:"Disfunción ventricular izquierda sistólica y diastólica (resaltadas en tus apuntes). Señala la CORRECTA:",o:[
 "Sistólica: contractilidad o eyección alterada (≈ 2/3 de los pacientes con IC); diastólica: llenado o relajación alterados",
 "Sistólica: llenado o relajación alterados (≈ 2/3 de los pacientes con IC); diastólica: contractilidad o eyección alterada",
 "Sistólica: contractilidad o eyección alterada (≈ 1/3 de los pacientes con IC); diastólica: llenado o relajación alterados",
 "Sistólica: contractilidad o eyección alterada (≈ 2/3 de los pacientes con IC); diastólica: eyección y frecuencia alteradas"],a:0,
 cita:"DISFUNCIÓN VENTRICULAR IZQUIERDA\nSistólica: contractilidad o eyección alterada. Aproximadamente dos terceras partes de pacientes con IC tienen disfunción sistólica.\nDiastólica: llenado o relajación alterados."},

/* ---------- p. 2 · Disfunción del VI y semiología ---------- */
{doc:"t5b-cardio",t:5,p:2,q:"Según el esquema «Disfunción Ventricular Izquierda» (FE < 40 %), ¿cómo se llega a la congestión pulmonar?",o:[
 "↑ volumen telesistólico → ↑ volumen telediastólico → congestión pulmonar",
 "↓ volumen telediastólico → ↓ gasto cardiaco → congestión pulmonar",
 "↓ volumen telesistólico → ↑ volumen telediastólico → congestión pulmonar",
 "↑ volumen telediastólico → ↓ volumen telesistólico → congestión pulmonar"],a:0,
 cita:"Disfunción Ventricular Izquierda (esquema de la p. 2: Sobrecarga De Volumen, Sobrecarga De Presión, Pérdida de Miocardio y Contractilidad Alterada → Disfunción VI FE < 40% → ↓Gasto Cardiaco → Hipoperfusión; Disfunción VI → ↑ Volumen Telesistólico → ↑ Volumen Telediastólico → Congestión Pulmonar)",
 n:"La otra rama del esquema es ↓ gasto cardiaco → hipoperfusión. Causas de la disfunción: sobrecarga de volumen o de presión, pérdida de miocardio y contractilidad alterada."},

{doc:"t5b-cardio",t:5,p:2,q:"Semiología de la IC: ¿qué grupo de signos aparece SOLO en la lista de la IC derecha de tus apuntes?",o:[
 "Estasis yugular, hepatomegalia con dolor pulsátil y reflujo hepatoyugular",
 "Confusión, dificultad de concentración y cefalea con insomnio y ansiedad",
 "Oliguria, cardiomegalia y taquicardia con pulso alternante y arritmias",
 "Estasis yugular, hepatomegalia y oliguria con cefalea, insomnio y ansiedad"],a:0,
 cita:"SEMIOLOGÍA IC IZQUIERDA:\nConfusión\nDificultad de concentración\nCefalea, insomnio y ansiedad\nCardiomegalia\nTaquicardia, pulso\nAlternante, arritmias\nOliguria\nSEMIOLOGÍA IC DERECHA:\nConfusión\nDificultad de concentración\nCefalea, insomnio y ansiedad\nEstasis yugular\nHepatomegalia, dolor pulsátil y esplenomegalia -(Reflujo hepatoyugular)\nCardiomegalia\nTaquicardia, Pulso",
 n:"Confusión, dificultad de concentración, cefalea, cardiomegalia y taquicardia están en las dos listas; la oliguria, solo en la izquierda. Las listas siguen, sin encabezado, al pie de la p. 2 y en la p. 3: por el orden, parece que disnea, ortopnea, disnea paroxística, respiración de Cheyne-Stokes y edema agudo son de la izquierda, y derrames cavitarios, edema y ascitis, de la derecha."},

/* ---------- p. 3 · Activación neurohormonal: SNS y SRAA ---------- */
{doc:"t5b-cardio",t:5,p:3,q:"Esquema del sistema nervioso simpático en la IC: la ↑ actividad simpática hacia los riñones y la vasculatura periférica…",o:[
 "Actúa por α1 y β1 (el β1 activa el SRAA): vasoconstricción y retención de sodio",
 "Actúa por β1, β2 y α1 cardiacos: toxicidad miocárdica y aumento de arritmias",
 "Actúa por α1 y β2 (el β2 activa el SRAA): vasodilatación y retención de sodio",
 "Actúa por α2 y β1 (el β1 inhibe el SRAA): vasoconstricción y pérdida de sodio"],a:0,
 cita:"2.1. Sistema Nervioso Simpático (SNS) (esquema de la p. 3: ↑ Estímulo simpático del SNC → ↑Actividad simpática cardiaca → receptores β1-, receptores β2-, receptores α1- → Toxicidad Miocárdica, Aumento de arritmias; ↑ Actividad Simpática hacia riñones + vasculatura periférica → α1-, β1- → Activación del SRAA → Vasoconstricción, Retención Sodio; las dos ramas → Progreso De la Enfermedad)",
 n:"La rama cardiaca (β1, β2 y α1) lleva a toxicidad miocárdica y más arritmias. Las dos ramas acaban en «Progreso de la enfermedad»."},

{doc:"t5b-cardio",t:5,p:3,q:"Según el esquema del SRAA de tus apuntes, ¿qué produce la angiotensina II a través del receptor AT1?",o:[
 "Vasoconstricción, estrés oxidativo, crecimiento celular, proteinuria y remodelado del VI y vascular",
 "Vasodilatación, efecto antiproliferativo y apoptosis, que frenan el remodelado del VI y vascular",
 "Natriuresis, diuresis e inhibición de la secreción de renina, aldosterona y vasopresina",
 "Vasoconstricción, pero con menos estrés oxidativo y regresión del remodelado del VI"],a:0,
 cita:"2.2. Sistema Renina-Angiotensina-Aldosterona (SRAA) (esquema de la p. 3: Angiotensinógeno → [Renina] → Angiotensina I → [Enzima Convertidora de Angiotensina (IECA)] → Angiotensina II → Receptor AT I → Vasoconstricción, Estrés Oxidativo, Crecimiento Celular, Proteinuria, Remodelado VI, Remodelado Vascular)",
 n:"P. 4: el SRAA se activa por el descenso de la presión arterial media (↓ perfusión renal) y produce retención de sodio-agua y sed, aumento simpático y vasoconstricción. Ojo: la enzima es la ECA; IECA es el nombre de sus inhibidores."},

/* ---------- p. 4 · Vasopresina y resumen de la estimulación neurohormonal ---------- */
{doc:"t5b-cardio",t:5,p:4,q:"Vasopresina (hormona antidiurética, HAD) en la IC, según el esquema de tus apuntes:",o:[
 "La ↓ PAM estimula los barorreceptores centrales → hipotálamo → secreción hipofisaria → vasoconstricción y retención de H₂O",
 "La ↑ PAM estimula los barorreceptores centrales → hipotálamo → secreción hipofisaria → vasodilatación y diuresis",
 "La ↓ PAM estimula los barorreceptores renales → corteza suprarrenal → secreción de vasopresina → retención de Na⁺",
 "La ↓ PAM estimula los barorreceptores centrales → hipófisis → secreción hipotalámica → vasoconstricción y diuresis"],a:0,
 cita:"2.3. Vasopresina (hormona antidiurética, HAD) (esquema de la p. 4: Presión Arterial Media Disminuida → Baroreceptores Centrales → Estimulación del hipotálamo, que produce vasopresina secretada por hipófisis → Secreción de vasopresina por la hipófisis → Vasoconstricción; Retención de H2O (riñón) → Aumento de la presión arterial media → Retroalimentación negativa)",
 n:"Al subir la presión arterial media, el circuito se frena por retroalimentación negativa sobre los barorreceptores."},

{doc:"t5b-cardio",t:5,p:4,q:"Esquema «Estimulación compensadora neurohormonal: resumen». La vasoconstricción arteriolar:",o:[
 "Ayuda a mantener la presión arterial, pero actúa en contra (−) del gasto cardiaco",
 "Aumenta el retorno venoso y la precarga, y con ello (+) el volumen latido",
 "Aumenta (+) el gasto cardiaco y causa el edema periférico y la congestión pulmonar",
 "Hace bajar la presión arterial, pero actúa a favor (+) del gasto cardiaco"],a:0,
 cita:"ESTIMULACIÓN COMPENSADORA NEUROHORMONAL: RESUMEN (esquema de la p. 4: Gasto Cardiaco Disminuido → ↑Sistema Nervioso Simpático: ↑ Contractilidad, ↑ Frec. Cardiaca, Vasoconstricción; ↑ Sistema Renina-angiotensina: Vasoconstricción, ↑ Volumen circulante; ↑ Hormona Antidiurética (vasopresina): ↑ Volumen circulante. Vasoconstricción Anteriolar → Mantener presión arterial, y línea discontinua con (-) hacia Gasto Cardiaco; Venosa y ↑ Volumen circulante → ↑ Retorno Venoso al corazón (↑ precarga) → ↑ Volumen Latido (+) y Edema Periférico y congestión pulmonar)",
 n:"Lo que sube la precarga es la vasoconstricción venosa, junto con el ↑ volumen circulante (SRAA y ADH): más volumen latido, pero también edema periférico y congestión pulmonar. «Anteriolar» es una errata por arteriolar."},

/* ---------- p. 5 · Péptidos natriuréticos, endotelio, remodelado y clase funcional ---------- */
{doc:"t5b-cardio",t:5,p:5,q:"Péptidos natriuréticos (resaltados en tus apuntes): ¿dónde se encuentra cada uno?",o:[
 "ANP (tipo A) en las aurículas; BNP (tipo B) en los ventrículos; CNP en el SNC",
 "ANP (tipo A) en los ventrículos; BNP (tipo B) en las aurículas; CNP en el SNC",
 "ANP (tipo A) en las aurículas; BNP (tipo B) en el SNC; CNP en los ventrículos",
 "ANP (tipo A) en las aurículas; BNP (tipo B) en los ventrículos; CNP en el riñón"],a:0,
 cita:"1.- Péptido Natriurético Atrial (ANP) en aurículas (sobrecarga y distension).\n2.- Péptido Natriurético Cerebral (hBNP) Encontrado en los ventrículos (dilatación).\n3.- Péptido Natriurético tipo C (CNP) Encontrado en el SNC. Propiedades limitadas. (anotación a mano: «Tipo A» junto al ANP y «Tipo B» junto al BNP)",
 n:"Ojo a la trampa: el BNP se llama «cerebral», pero está en los ventrículos (se libera con su dilatación); el ANP responde a la sobrecarga y distensión de las aurículas. El CNP tiene propiedades limitadas."},

{doc:"t5b-cardio",t:5,p:5,q:"Propiedades que enumeran tus apuntes para los péptidos natriuréticos (al lado anotaste «Diana terapéutica»):",o:[
 "Vasodilatadoras, natriuréticas y diuréticas; inhiben la secreción de renina, aldosterona y vasopresina",
 "Vasoconstrictoras, natriuréticas y diuréticas; inhiben la secreción de renina, aldosterona y vasopresina",
 "Vasodilatadoras, natriuréticas y diuréticas; estimulan la secreción de renina, aldosterona y vasopresina",
 "Vasodilatadoras, antinatriuréticas y antidiuréticas; inhiben la secreción de renina y de aldosterona"],a:0,
 cita:"Vasodilatadoras\nEfectos natriuréticos (excreción de sal) y diuréticos (excreción de agua).\nInhiben la secreción de renina, aldosterona y vasopresina (vasoconstrictivas). (anotación a mano: «Diana terapéutica»; con un corchete al lado: «+ info en sus diapos»)",
 n:"Hacen lo contrario que el SRAA y la vasopresina. Tu nota «+ info en sus diapos» remite a las diapositivas de clase."},

{doc:"t5b-cardio",t:5,p:5,q:"Sustancias vasoactivas liberadas por el endotelio (resaltadas en tus apuntes). Señala la CORRECTA:",o:[
 "Relajantes: óxido nítrico, bradicinina y prostaciclina; constrictora: endotelina I",
 "Relajantes: óxido nítrico, endotelina I y prostaciclina; constrictora: bradicinina",
 "Relajantes: óxido nítrico, bradicinina y tromboxano; constrictora: prostaciclina",
 "Relajantes: endotelina I, bradicinina y prostaciclina; constrictor: óxido nítrico"],a:0,
 cita:"2.5. Sustancias vasoactivas liberadas por el endotelio: Producidas por las células que recubren las arterias y venas denominado endotelio.\nFactores relajantes derivados del endotelio – Vasodilatadores:\nÓxido Nítrico (NO)\nBradicinina\nProstaciclina\nFactores constrictores derivados del endotelio – Vasoconstrictores:\nEndotelina I\nActúan: en el mismo endotelio, células de músculo liso y paredes de vasos sanguíneos."},

{doc:"t5b-cardio",t:5,p:5,q:"Remodelado ventricular en la IC, según el esquema y tus anotaciones:",o:[
 "Hipertrofia → IC diastólica (cavidad más pequeña); dilatación → IC sistólica (faltan cardiomiocitos para contraer)",
 "Hipertrofia → IC sistólica (faltan cardiomiocitos para contraer); dilatación → IC diastólica (cavidad más pequeña)",
 "Hipertrofia → IC diastólica (cavidad más grande); dilatación → IC sistólica (pared más gruesa y rígida)",
 "Hipertrofia → IC sistólica (cavidad más pequeña); dilatación → IC diastólica (faltan cardiomiocitos para relajarse)"],a:0,
 cita:"3. REMODELADO VENTRICULAR EN INSUFICIENCIA CARDIACA DIASTÓLICA Y SISTÓLICA (esquema de la p. 5: Corazón normal; Hipertrofia ventricular (insuficiencia cardiaca diastólica); Dilatación ventricular (insuficiencia cardiaca sistólica)) (anotación a mano: junto a la hipertrofia, «cavidad + pequeña»; junto a la dilatación, «no hay suf. cardiomiocitos para contraer»)",
 n:"En la p. 7 dibujaste también un corazón dilatado con el rótulo «remodelación»."},

{doc:"t5b-cardio",t:5,p:5,q:"Clasificación funcional de la IC (resaltada en tus apuntes): sin problemas en reposo, pero la actividad física LIGERA causa fatiga, taquicardia, disnea o angina. Es la:",o:[
 "Clase III: limitación importante de la actividad física",
 "Clase II: pequeña limitación de la actividad física",
 "Clase IV: incapaz de hacer actividad física sin molestias",
 "Clase I: sin síntomas con la actividad física normal"],a:0,
 cita:"Clase I: sin síntomas con actividad normal.\nClase II: pequeña limitación de la actividad física. Sin problemas en reposo pero la actividad física normal causa fatiga, taquicardia, disnea o angina.\nClase III: limitación importante a la actividad física. Sin problemas en reposo pero la actividad física ligera causa fatiga, taquicardia, disnea o angina.\nClase IV: incapaz de realizar cualquier actividad física sin molestias. Los síntomas de IC pueden estar presentes en el reposo",
 n:"La clave es el tipo de esfuerzo: actividad normal → clase II; actividad ligera → clase III; síntomas incluso en reposo → clase IV."},

/* ---------- p. 6 · Estadios clínicos, objetivos y factores agravantes ---------- */
{doc:"t5b-cardio",t:5,p:6,q:"Según el esquema «Evolución de estadios clínicos» de tus apuntes, señala la CORRECTA:",o:[
 "ICC compensada: sin síntomas y ↓ ejercicio; ICC refractaria: síntomas no controlados con tratamiento",
 "ICC compensada: síntomas y ↓↓ ejercicio; ICC refractaria: síntomas no controlados con tratamiento",
 "ICC compensada: sin síntomas y ↓ ejercicio; ICC refractaria: síntomas que ceden con el tratamiento",
 "ICC compensada: sin síntomas y ejercicio normal; ICC refractaria: Fx VI alterada sin síntomas"],a:0,
 cita:"EVOLUCION DE ESTADIOS CLINICOS (esquema de la p. 6: NORMAL: No síntomas, Ejercicio normal, Fx VI normal → Disfunción VI asintomática: No síntomas, Ejercicio normal, Fx VI alterada → ICC compensada: No síntomas, ⇩ ejercicio, Fx VI alterada → ICC descompensada: Síntomas, ⇩⇩ ejercicio, Fx VI alterada → ICC refractaria: Síntomas no controlados con tratamiento; «refractaria» y «Síntomas no controlados con tratamiento», resaltados)",
 n:"Lo que separa la ICC compensada de la descompensada es la aparición de síntomas (y ↓↓ ejercicio). Sin síntomas, con ejercicio normal y Fx VI alterada = disfunción VI asintomática."},

{doc:"t5b-cardio",t:5,p:6,q:"Objetivos del tratamiento de la IC (los resaltados en tus apuntes):",o:[
 "↑ supervivencia, ↓ morbilidad, ↑ capacidad de ejercicio y ↓ cambios neurohormonales",
 "↑ supervivencia, ↓ morbilidad, ↑ capacidad de ejercicio y ↑ activación neurohormonal",
 "↑ supervivencia, ↑ precarga, ↑ frecuencia cardiaca y ↓ cambios neurohormonales",
 "↓ morbilidad, ↑ volumen circulante, ↑ contractilidad y ↓ capacidad de ejercicio"],a:0,
 cita:"OBJETIVOS DEL TRATAMIENTO:\n↑ Supervivencia\n↓ Morbilidad\n↑ Capacidad ejercicio ↑ Calidad de vida\n↓ Cambios neurohormonales\n↓ Progresión de ICC\n↓ Síntomas",
 n:"En la misma línea resaltada está «↑ Calidad de vida»; sin resaltar: ↓ progresión de la ICC y ↓ síntomas."},

{doc:"t5b-cardio",t:5,p:6,q:"Corrección de factores agravantes en el tratamiento de la IC (lista marcada en tus apuntes). ¿Qué grupo aparece completo en ella?",o:[
 "Gestación, arritmias (FA), hipertiroidismo, obesidad, actividad física y excesos en dieta",
 "Gestación, bradicardia, hipotiroidismo, obesidad, reposo prolongado y excesos en dieta",
 "Infecciones, arritmias (FA), hipotiroidismo, delgadez, actividad física y dieta hiposódica",
 "Endocarditis, tromboembolismo, hipotensión, obesidad, actividad física y excesos en dieta"],a:0,
 cita:"CORRECCIÓN DE FACTORES AGRAVANTES:\nGestación\nArritmias (FA)\nInfecciones\nHipertiroidismo\nTromboembolismo\nEndocarditis\nObesidad\nHipertensión\nActividad física\nExcesos en dieta",
 n:"Justo debajo, la terapia farmacológica (resaltada): diuréticos, inotrópicos, vasodilatadores y antagonistas neurohormonales; otros: anticoagulantes y antiarrítmicos. Ojo: aquí la actividad física es un factor agravante, pero en el estadio A (p. 7) se recomienda «Promover ejercicio regular»."},

/* ---------- p. 7 · Enfoque por estadios, infarto agudo y fármacos vasoactivos ---------- */
{doc:"t5b-cardio",t:5,p:7,q:"«Enfoque terapéutico hacia el paciente con IC»: el estadio A (resaltado en tus apuntes) es:",o:[
 "Alto riesgo de sufrirla, pero sin daño estructural: tratar la HTA, promover ejercicio regular e IECA",
 "Daño estructural asintomático: medidas del estadio A, IECA y β-bloqueantes en pacientes seleccionados",
 "Daño estructural con síntomas: diuréticos, IECA, β-bloqueantes, digital y restricción de sodio",
 "IC refractaria: asistencia mecánica, trasplante cardiaco y medicación endovenosa continua"],a:0,
 cita:"Enfoque terapéutico hacia el paciente con Insuficiencia Cardiaca (esquema de la p. 7: Estadio A: Alto riesgo, sin daño estructural. Terapia: Tratar Hipertensión; Tratar dislipidemia; Promover ejercicio regular; Inhibición ECA) (anotación a mano: «de que la sufra pero», intercalado: alto riesgo de que la sufra pero sin daño estructural; debajo de «Inhibición ECA», «IECAs»)",
 n:"También en el estadio A, sin resaltar: tratar la dislipidemia."},

{doc:"t5b-cardio",t:5,p:7,q:"En el enfoque terapéutico por estadios, ¿en cuál se añaden por primera vez diuréticos, digital, dieta con restricción de sodio y antagonistas de la aldosterona?",o:[
 "Estadio C: daño estructural con síntomas previos o actuales",
 "Estadio B: daño estructural cardiaco, todavía asintomático",
 "Estadio A: alto riesgo de sufrirla, sin daño estructural",
 "Estadio D: IC refractaria con tratamiento especializado"],a:0,
 cita:"Estadio C: Daño estructural cardiaco con síntomas previos o actuales de IC. Terapia: Todas las medidas para el Estadio A. Medicamentos: Diuréticos, IECA, Beta-bloqueadores, Digital, Dieta y restricción de sodio, Antagonistas Aldosterona (esquema de la p. 7)",
 n:"Estadio B: medidas del A + IECA y β-bloqueantes en pacientes seleccionados. Estadio D: medidas de A, B y C + asistencia mecánica, trasplante cardiaco y uso continuo de medicación endovenosa para mejoría sintomática."},

{doc:"t5b-cardio",t:5,p:7,q:"Tratamiento del infarto agudo (resaltado en tus apuntes). Señala la CORRECTA:",o:[
 "Trombolítica solo en la terapia aguda (<12 h); β-bloqueantes e IECAs, en la aguda y en el mantenimiento",
 "Trombolítica solo en la terapia aguda (<24 h); β-bloqueantes e IECAs, solo en el mantenimiento",
 "Trombolítica en el mantenimiento; nitrodilatadores e IECAs, en la aguda y en el mantenimiento",
 "Trombolítica solo en la terapia aguda (<12 h); bloqueantes del Ca²⁺ e hipolipemiantes, solo en la aguda"],a:0,
 cita:"TRATAMIENTO INFARTO AGUDO\nTerapia Aguda\nOxigeno, reposo, analgesia monitorización ECG\nNitrodilatadores\nb-bloqueantes\nIECAs\nTerapia antiagregante\nTerapia trombolítica (<12h)\nTerapia de Mantenimiento\nb-bloqueantes\nBloqueantes de canales de Ca2+\nIECAs\nAgentes hipolipemiantes (anotación a mano junto a los β-bloqueantes y los bloqueantes de canales de Ca2+ del mantenimiento: «→ mantener a raya las arritmias»)",
 n:"Las IECAs están resaltadas en azul en las dos fases. Oxígeno, reposo, analgesia y ECG, nitrodilatadores y terapia antiagregante son de la fase aguda; bloqueantes del Ca²⁺ e hipolipemiantes, del mantenimiento."},

{doc:"t5b-cardio",t:5,p:7,q:"Fármacos vasoactivos («lo más importante del tema son los vasodilatadores»). Según tus apuntes:",o:[
 "La amplitud venosa determina la oferta de sangre al corazón; el diámetro arterial, la resistencia periférica",
 "La amplitud arterial determina la oferta de sangre al corazón; el diámetro venoso, la resistencia periférica",
 "La amplitud venosa determina la resistencia periférica; el diámetro arterial, la oferta de sangre al corazón",
 "La frecuencia cardiaca determina la oferta de sangre al corazón; la volemia, la resistencia periférica"],a:0,
 cita:"FÁRMACOS VASOACTIVOS (lo más importante del tema son los vasodilatadores)\nLa amplitud de la zona circulatoria venosa determina la oferta de sangre al corazón:\nVolumen de pulsación\nVolumen minuto cardíaco (vmc)\nEl diámetro de los vasos arteriales determina la resistencia periférica\nEl vmc y la resistencia periférica son los factores decisivos en la presión arterial (anotación a mano: «← oferta de sangre que llega al corazón»)",
 n:"El vmc y la resistencia periférica son los factores decisivos de la presión arterial. En la p. 1 escribiste en rojo «Vasodilatadores ! + lo imp»."},

/* ---------- p. 8 · Usos de vasoconstrictores y vasodilatadores ---------- */
{doc:"t5b-cardio",t:5,p:8,q:"Usos clínicos de los vasoconstrictores de tus apuntes (aminas adrenérgicas, tromboxanos, angiotensina, endotelina, ergaloides, ADH):",o:[
 "Sobre todo locales; en estados hipotensivos, solo la adrenalina (choque anafiláctico y parada cardiaca)",
 "Sobre todo sistémicos: su utilidad en cualquier estado hipotensivo está bien demostrada",
 "Sobre todo locales; en estados hipotensivos, solo la ADH (choque anafiláctico y parada cardiaca)",
 "Sobre todo locales; en estados hipotensivos, solo la angiotensina (choque séptico y parada cardiaca)"],a:0,
 cita:"Usos clínicos:\nLimitada a aplicaciones locales (descongestión nasal, administración con anestésicos locales, hemorragias en sábana, etc.)\nUtilidad en estados hipotensivos no demostrada, excepto la adrenalina en el choque anafiláctico y la parada cardiaca.",
 n:"Aplicaciones locales: descongestión nasal, junto con anestésicos locales y hemorragias en sábana. La lista de vasoconstrictores está al final de la p. 7, sin encabezado propio."},

{doc:"t5b-cardio",t:5,p:8,q:"Según tus apuntes, ¿qué vasoconstrictor puede utilizarse para detener hemorragias esofágicas en pacientes con hipertensión portal secundaria a una hepatopatía?",o:[
 "La ADH (hormona antidiurética)",
 "La adrenalina (amina adrenérgica)",
 "La endotelina I (péptido endotelial)",
 "El tromboxano A₂ (eicosanoide)"],a:0,
 cita:"La ADH puede utilizarse para detener hemorragias esofágicas en pacientes con hipertensión portal secundaria a una hepatopatía",
 n:"La ADH (vasopresina) figura en la lista de la p. 7 como «OTROS: ERGALOIDES, ADH, ETC.»."},

{doc:"t5b-cardio",t:5,p:8,q:"Indicaciones de los vasodilatadores según el tipo de vaso (resaltadas en tus apuntes). Señala la CORRECTA:",o:[
 "Arteriodilatadores: HTA e IC, no angina (estimulación cardiaca refleja); venodilatadores: angina y a veces IC",
 "Arteriodilatadores: angina e IC, no HTA (estimulación cardiaca refleja); venodilatadores: sobre todo HTA",
 "Arteriodilatadores: HTA, IC y angina, sin efectos reflejos; venodilatadores: solo HTA, nunca angina ni IC",
 "Venodilatadores: HTA e IC, no angina (estimulación cardiaca refleja); arteriodilatadores: angina y a veces IC"],a:0,
 cita:"Utilizan en HTP, IC y angina; algunos vasodilatadores se ajustan más que otros a estas indicaciones.\nLos que actúan en vasos de resistencia (arteriodilatadores) HPT e IC, no en angina por provocar estimulación cardiaca refleja\nLos venodilatadores muy efectivos en angina y algunas veces útiles para IC, no se utilizan primariamente para tratar la HPT.",
 n:"Al margen de estas líneas anotaste «Cuidado Riñón en algo de esto» (sin decir a qué fármaco se refiere)."},

{doc:"t5b-cardio",t:5,p:8,q:"Según tus apuntes, ¿qué beneficio adicional tienen el verapamilo y el diltiazem frente a otros vasodilatadores?",o:[
 "Disminuyen la función mecánica y eléctrica cardiaca: más acción antihipertensiva y bloquean arritmias",
 "Aumentan la función mecánica y eléctrica cardiaca: más gasto cardiaco y menos edema pulmonar",
 "Son venodilatadores puros: reducen la precarga y son muy efectivos en la angina sin otros efectos",
 "Provocan estimulación cardiaca refleja: útiles en la bradicardia y en los estados hipotensivos"],a:0,
 cita:"Algunos por su mecanismo de acción tienen otras importantes acciones que incrementar su utilidad terapéutica o proporcionar un beneficio terapéutico adicional.\nEj. bloqueantes de los canales de Ca2+ (veramapilo y diltiazem): vasodilatadores y disminuyen función mecánica y eléctrica cardiacas con lo que se incrementa su acción antiHTP y adicionalmente son capaces de bloquear arritmias.",
 n:"«Veramapilo» es una errata por verapamilo. En la clasificación de la misma página, verapamilo y diltiazem son «cationes anfófilos» y el nifedipino, un «derivado de la dihidropirina» (dihidropiridina)."},

{doc:"t5b-cardio",t:5,p:8,q:"Arteriodilatadores y venodilatadores (resaltados en tus apuntes). Señala la CORRECTA:",o:[
 "Arteriodilatadores: ↓ presión arterial, resistencia periférica y postcarga; venodilatadores: ↓ oferta de sangre al corazón y precarga",
 "Arteriodilatadores: ↓ oferta de sangre al corazón y precarga; venodilatadores: ↓ presión arterial, resistencia periférica y postcarga",
 "Arteriodilatadores: ↓ presión arterial, resistencia periférica y precarga; venodilatadores: ↓ oferta de sangre al corazón y postcarga",
 "Arteriodilatadores: ↑ trabajo cardiaco y postcarga; venodilatadores: ↑ oferta de sangre al corazón y precarga"],a:0,
 cita:"ARTERIODILATADORES:\nDisminuyen la presión arterial (en hipertensión)\nDisminuyen el trabajo cardiaco (en angina) disminuyen la presión de postcarga\nDisminuyen la resistencia periférica (en icc)\nVENODILATADORES: Reducen la oferta de sangre al corazón (en infarto e icc) Reducen la presión de precarga",
 n:"Los arteriodilatadores también disminuyen el trabajo cardiaco. Los venodilatadores se usan en el infarto y la ICC."},
/* ===== Tema 5 B (t5b-cardio): págs. 9-15, vasodilatadores, IECA, bloqueantes α₁, nitratos e inhibidores de la PDE ===== */
/* ---------- p. 10 · Antagonistas del calcio ---------- */
{doc:"t5b-cardio",t:5,p:10,q:"Antagonistas del calcio. Junto a los dos grupos escribiste a mano «ambos son…». Señala la opción CORRECTA:",o:[
 "Ambos son arteriodilatadores; las dihidropiridinas son vasoselectivas y los anfófilos, crono, ino y dromotropos negativos",
 "Ambos son venodilatadores; las dihidropiridinas son vasoselectivas y los anfófilos, crono, ino y dromotropos negativos",
 "Ambos son arteriodilatadores; los anfófilos son vasoselectivos y las dihidropiridinas, crono, ino y dromotropas negativas",
 "Ambos son arteriodilatadores; las dihidropiridinas son vasoselectivas y los anfófilos, crono, ino y dromotropos positivos"],a:0,
 cita:"1. DERIV. DE DIHIDROPIRINA: NIFEDIPINO, NITRENDIPINO, FELODIPINO, AMLODIPINO, ISRADIPINO, NIMODIPINO, NICARDIPINO.\nPRÁCTICAMENTE SIN EFECTOS CARDIACOS (VASOSELECTIVOS)\n• 2. CATIONES ANFÓFILOS: VERAPAMILO, GALOPAMIL Y DILTIAZEM\n• NO VASOSELECTIVOS\n• (cronotropo, inotropo y dromotropo negativo)\n(anotación a mano: «ambos son», con una flecha hacia «Arteriodilatadores»)",
 n:"Por ser vasoselectivas, las dihidropiridinas dan taquicardia refleja; los anfófilos no, y además tienen actividad antiarrítmica."},
{doc:"t5b-cardio",t:5,p:10,q:"Usos de las dihidropiridinas (nifedipino, nimodipino…) que resaltaste. Señala la CORRECTA:",o:[
 "HPT, profilaxis y crisis agudas de infarto y vasoespasmo en la hemorragia subaracnoidea; no en la angina",
 "HPT, profilaxis y crisis agudas de infarto y angina; no en el vasoespasmo de la hemorragia subaracnoidea",
 "HPT, angina y vasoespasmo en la hemorragia subaracnoidea; no en la profilaxis ni en las crisis de infarto",
 "Cardiomiopatía hipertrófica felina, arritmias y vasoespasmo en la hemorragia subaracnoidea; no en la HPT"],a:0,
 cita:"Usos:\n- HPT\n- Profilaxis y crisis agudas de infarto de miocardio (evitan espasmos coronarios y ¯ requerimientos de o2)\n- Espasmo vascular en hemorragia subaracnoidea\n- No en angina pues pueden provocar taquicardia refleja.",
 n:"No se usan en la angina porque pueden provocar taquicardia refleja. El «¯» de tus apuntes es una flecha «↓» que se perdió al convertir el documento: ↓ requerimientos de O₂."},
{doc:"t5b-cardio",t:5,p:10,q:"Usos de los cationes anfófilos (verapamilo, galopamil, diltiazem) según tus apuntes:",o:[
 "HPT, profilaxis del infarto, limitar el daño cerebral en traumatismos y cardiomiopatía hipertrófica felina",
 "HPT, profilaxis del infarto, limitar el daño cerebral en traumatismos y cardiomiopatía dilatada canina",
 "HPT, profilaxis del infarto, espasmo en la hemorragia subaracnoidea y cardiomiopatía hipertrófica felina",
 "HPT, tratamiento crónico de la ICC, limitar el daño cerebral en traumatismos y cardiomiopatía hipertrófica felina"],a:0,
 cita:"Usos:\n- HPT\n- Profilaxis del infarto de miocardio y para limitar daño cerebral en traumatismos.\n- Cardiomiopatía hipertrófica felina (anotación a mano: ! → únicos indicados)",
 n:"Junto a la cardiomiopatía hipertrófica felina pusiste «!» y «→ únicos indicados»: de los antagonistas del calcio, son estos (no las dihidropiridinas) los que se usan en ella."},
{doc:"t5b-cardio",t:5,p:10,q:"Cationes anfófilos: contraindicaciones (las resaltaste) e interacciones. Señala la CORRECTA:",o:[
 "Contraindicados en bloqueo cardiaco e hipotensión; interaccionan con digitálicos, β-bloqueantes y metilxantinas",
 "Contraindicados en bloqueo cardiaco e hipertensión; interaccionan con digitálicos, β-bloqueantes y metilxantinas",
 "Contraindicados en taquicardias supraventriculares; interaccionan con digitálicos, β-bloqueantes y metilxantinas",
 "Contraindicados en bloqueo cardiaco e hipotensión; se pueden asociar con seguridad a digitálicos y β-bloqueantes"],a:0,
 cita:"Contraindicados: bloqueo cardíaco, hipotensión, síndrome del nodo sinusal y disfunción severa vi\nInteracciones:\n- digitálicos, anticoagulantes orales,\n- β -bloqueantes\n- metilxantinas/potenciación",
 n:"También están contraindicados en el síndrome del nodo sinusal y en la disfunción severa del VI, e interaccionan con los anticoagulantes orales."},
{doc:"t5b-cardio",t:5,p:10,q:"Activadores de los canales de K⁺ (rodeaste MINOXIDIL y pusiste «!»). Respuesta refleja y asociación según tus apuntes:",o:[
 "↑ tono simpático (taquicardia) y ↑ renina con retención de Na⁺ y H₂O; se administran con diuréticos del asa",
 "↓ tono simpático (bradicardia) y ↓ renina con pérdida de Na⁺ y H₂O; se administran con suplementos de sodio",
 "↑ tono simpático (taquicardia) y ↑ renina con retención de Na⁺ y H₂O; se administran con digitálicos en la ICC",
 "↑ tono vagal (bradicardia) y ↑ aldosterona con retención de K⁺; se administran con ahorradores de potasio"],a:0,
 cita:"ACTIVADORES DE LOS CANALES DE K+: MINOXIDIL, CROMOKALIM, LEMAKALIM, NICORANDIL (+NO):\nArteriodilatadores con acción potente y prolongada\nRespuesta refleja:\n- Tono simpático (taquicardia, - gasto cardíaco, - consumo de o2)\n- Aumento de liberación de renina (retención de na+ y h2o)\nNo en ICC.\nAdministrar con diuréticos del asa\nDe reserva en casos de hpt arterial grave refractaria a otros fármacos",
 n:"Los «-» del paréntesis son flechas «↑» que se perdieron al convertir el documento (↑ gasto cardiaco, ↑ consumo de O₂). No se usan en la ICC y son de reserva en la HPT arterial grave refractaria."},
/* ---------- p. 11 · Hidralacina e IECAs ---------- */
{doc:"t5b-cardio",t:5,p:11,q:"Hidralacina según tus apuntes. Señala la CORRECTA:",o:[
 "Arteriodilatador; abre canales de K⁺ y estimula la liberación de NO endotelial; la vía oral es una ventaja",
 "Venodilatador; abre canales de K⁺ y estimula la liberación de NO endotelial; la vía oral es una ventaja",
 "Arteriodilatador; bloquea canales de Ca²⁺ e inhibe la liberación de NO endotelial; solo se da por vía IV",
 "Arteriodilatador; abre canales de K⁺ y estimula la liberación de NO endotelial; su ventaja es la vida media larga"],a:0,
 cita:"VASODILATADORES DE ACCIÓN DIRECTA: HIDRALACINA\nArteriodilatador semejante a los anteriores, mecanismo no claramente determinado, pero más selectivo, parece que interviene:\n- Apertura de canales de k+, inhibe la liberación de ca2+ dependiente de ip3 y estimula la liberación de no desde el endotelio\n(anotación a mano: oral → ventaja frente a otros)\n…\nDesventajas: vida media corta y la posibilidad de generar tsuicardia -> no útil en HPT crónica",
 n:"El título y el principio de la frase están al final de la p. 10. También inhibe la liberación de Ca²⁺ dependiente de IP₃. «tsuicardia» = taquicardia."},
{doc:"t5b-cardio",t:5,p:11,q:"Usos de la hidralacina que resaltaste. Señala la CORRECTA:",o:[
 "Tratamiento a corto plazo de la HPT en la gestación y HPT grave que no responde a otros fármacos",
 "Tratamiento crónico de la HPT en la gestación y HPT leve como fármaco de primera elección",
 "Tratamiento a corto plazo de la HPT en la gestación y angina estable por su efecto bradicardizante",
 "Tratamiento de la ICC con disfunción diastólica y de la hipotensión grave que no responde a otros"],a:0,
 cita:"Usos:\n- Tratamiento a corto plazo de hpt durante la gestación;\n- HPT grave que no responde a otros, si cursa con ir grave, icc y reflujo mitral.\n- Amenudo utilizada junto:\n- a b-bloqueantes para atenuar la taquicardia refleja\n- a diuréticos para atenuar la retención de sodio,.",
 n:"Se asocia a β-bloqueantes (por la taquicardia refleja) y a diuréticos (por la retención de sodio)."},
{doc:"t5b-cardio",t:5,p:11,q:"Reacciones adversas de la hidralacina (las marcaste con un «!» rojo muy grande). Señala la CORRECTA:",o:[
 "Taquicardia refleja, hipotensión y lesiones degenerativas en tratamientos crónicos en el perro",
 "Bradicardia refleja, hipertensión de rebote y lesiones degenerativas en tratamientos crónicos en el perro",
 "Taquicardia refleja, hipotensión e hiperpotasemia grave en tratamientos crónicos en el gato",
 "Taquicardia refleja, tos seca por bradicinina y angioedema en tratamientos crónicos en el perro"],a:0,
 cita:"RRAA: taquicardia refleja, hipotensión, alteraciones gastrointestinales, depresión, anorexia, lesiones degenerativas ad en tratamientos crónicos en perro.",
 n:"El «!» rojo abarca también las interacciones: riesgo de hipotensión con IECAs, anestésicos, β-bloqueantes, bloqueantes de los canales de Ca²⁺ y diuréticos."},
{doc:"t5b-cardio",t:5,p:11,q:"IECAs (título resaltado y con un corchete de fluorescente en el margen). ¿Qué opción contiene SOLO IECAs?",o:[
 "Enalapril, lisinopril, ramipril y benazepril",
 "Enalapril, losartán, ramipril y benazepril",
 "Captopril, telmisartán, fosinopril y quinapril",
 "Lisinopril, saralasina, perindopril y trandolapril"],a:0,
 cita:"INHIBIDORES DE LA ENZIMA CONVERSORA ANGIOTENSINA (IECAS): ENALAPRIL, LISINOPRIL, RAMIPRIL, BENAZEPRIL, PERINDOPRIL, CAPTOPRIL, FOSINOPRIL, MOEXIPRIL, QUINAPRIL Y TRANDOLAPRIL",
 n:"Losartán y telmisartán son sartanes (ARA II); la saralasina es el agonista parcial del grupo de los ARA II (p. 12)."},
/* ---------- p. 12 · IECAs ---------- */
{doc:"t5b-cardio",t:5,p:12,q:"Diferencias entre los IECAs según tus apuntes. Señala la CORRECTA:",o:[
 "Mismo efecto y distinta farmacocinética; el grupo radical se une al zinc de la ECA; más liposolubles, más penetración tisular",
 "Distinto efecto y misma farmacocinética; el grupo radical se une al zinc de la ECA; más liposolubles, más penetración tisular",
 "Mismo efecto y distinta farmacocinética; el grupo radical se une al calcio de la ECA; más liposolubles, más penetración tisular",
 "Mismo efecto y distinta farmacocinética; el grupo radical se une al zinc de la ECA; más hidrosolubles, más penetración tisular"],a:0,
 cita:"Todos tienen el mismo efecto farmacológico pero distinta farmacocinética, solubilidad y metabolismo. El grupo radical es el que se une al sitio activo de unión Zinc de la enzima convertasa. A mayr liposolubilidad mayor capacidad de penetración tisular y fijación a la enzima.",
 n:"Cuanto más liposolubles, además de penetrar más en los tejidos, más se fijan a la enzima."},
{doc:"t5b-cardio",t:5,p:12,q:"Efectos de los IECAs que resaltaste en este tema. Señala la CORRECTA:",o:[
 "↓ resistencia periférica sin apenas cambiar la FC; ↑ flujo renal sin apenas afectar la FG; retrasan la aterosclerosis",
 "↓ resistencia periférica con taquicardia refleja; ↑ flujo renal sin apenas afectar la FG; retrasan la aterosclerosis",
 "↓ resistencia periférica sin apenas cambiar la FC; ↓ flujo renal y caída de la FG; retrasan la aterosclerosis",
 "↓ resistencia periférica sin apenas cambiar la FC; ↑ flujo renal sin apenas afectar la FG; aceleran la aterosclerosis"],a:0,
 cita:"Hemodinámicos:\n- Resistencia vascular periférica total sin apenas cambios en la frecuencia cardiaca.\n…\nRenal:\n…\n- Flujo renal sin afectar apenas a la tasa de filtración glomerular\n…\nOtros: Retrasan desarrollo aterosclerosis, modulan el equilibrio fibrinolítico,…",
 n:"En tus apuntes faltan las flechas (↓ resistencia, ↑ flujo renal): se perdieron al convertir el documento. También modulan el equilibrio fibrinolítico."},
{doc:"t5b-cardio",t:5,p:12,q:"Según tus apuntes, el aumento de cininas, NO y prostaciclina que producen los IECAs explicaría sus efectos:",o:[
 "Vasodilatadores, antiproliferativos y antitrombóticos",
 "Vasoconstrictores, proliferativos y protrombóticos",
 "Inotrópicos positivos, cronotrópicos y antiarrítmicos",
 "Broncodilatadores, antitusígenos y analgésicos"],a:0,
 cita:"IECAS: los IECAs aumentan la concentración de cininas, NO y prostaciclina que explicaría sus efectos vasodilatadores, antiproliferativos y antitrombóticos.",
 n:"Lo resaltaste aquí y también lo resumiste a mano en el Tema 2 (allí se pregunta al revés)."},
{doc:"t5b-cardio",t:5,p:12,q:"IECAs: reacciones adversas y contraindicaciones de este tema. Señala la CORRECTA:",o:[
 "Hiperpotasemia en diabetes o IR, hiponatremia y edema angioneurótico; contraindicados en gestantes",
 "Hipopotasemia en diabetes o IR, hipernatremia y edema angioneurótico; contraindicados en gestantes",
 "Hiperpotasemia en diabetes o IR, hiponatremia y edema angioneurótico; seguros en gestantes",
 "Hiperpotasemia en diabetes o IR, hiponatremia y taquicardia refleja; contraindicados en gestantes"],a:0,
 cita:"RRAA: Hipotensión, hiperpotasemia en casos de diabetes o IR (+ si asociados a diuréticos), alteraciones gastrointestinales, hiponatremia, ↑ enzimas hepáticas y bilirrubina, reacciones de hipersensibilidad (edema angioneurótico).\nContraindicaciones: en IR, hipotensión e IC en tratamiento con potasio y diuréticos, en gestantes (teratógenos).\nPrecauciones: en deshidratación riesgo de colapso.",
 n:"Resaltaste la hiperpotasemia en diabetes o IR. En gestantes están contraindicados por ser teratógenos, y en la deshidratación hay riesgo de colapso."},
{doc:"t5b-cardio",t:5,p:12,q:"Interacciones de los IECAs (resaltaste el título y la primera). Señala la CORRECTA:",o:[
 "Con AINEs o ahorradores de K⁺, hiperpotasemia; con diuréticos y vasodilatadores, hipotensión que corrige el suero salino",
 "Con AINEs o ahorradores de K⁺, hipopotasemia; con diuréticos y vasodilatadores, hipotensión que corrige el suero salino",
 "Con AINEs o ahorradores de K⁺, hiperpotasemia; con diuréticos y vasodilatadores, hipertensión que corrige el suero salino",
 "Con AINEs o ahorradores de K⁺, hiperpotasemia; con diuréticos y vasodilatadores, hipotensión que corrige la dobutamina"],a:0,
 cita:"Interacciones:\n- Con aines, diuréticos ahorradores de potasio y suplementos de potasio, aumento riesgo de hiperpotasemia.\n- Con diuréticos y vasodilatadores: hipotensión que se corrige con infusión de solución salina.\n- El uso frecuente de AINEs reduce la eficacia del captopril.",
 n:"También los suplementos de potasio aumentan el riesgo de hiperpotasemia. Además, el uso frecuente de AINEs reduce la eficacia del captopril."},
/* ---------- p. 12 · ARA II (enmarcados con un corchete rojo) ---------- */
{doc:"t5b-cardio",t:5,p:12,q:"ARA II (bloque enmarcado en rojo): acciones similares a las de los IECAs. Señala la CORRECTA:",o:[
 "↓ PA, precarga y poscarga; natriuréticos y diuréticos; inhiben la remodelación cardiaca y vascular",
 "↓ PA, precarga y poscarga; antidiuréticos y retenedores de Na⁺; inhiben la remodelación cardiaca y vascular",
 "↓ PA y poscarga, pero ↑ precarga; natriuréticos y diuréticos; favorecen la remodelación cardiaca y vascular",
 "↓ PA, precarga y poscarga; natriuréticos y diuréticos; inotrópicos positivos con taquicardia refleja"],a:0,
 cita:"Similares acciones a IECAs:\n- Disminución PA, precarga y poscarga cardiaca,\n- natriuréticos y diuréticos, (anotación a mano en rojo: → ↑ orina ↓ inflamación renal)\n- Inhiben la remodelación cardiaca y vascular asociada a HTP, fallo cardiaco e infarto de miocardio.",
 n:"Tu nota en rojo: al ser natriuréticos y diuréticos, ↑ la orina y ↓ la inflamación renal."},
{doc:"t5b-cardio",t:5,p:12,q:"ARA II: receptor que bloquean (dentro del bloque que enmarcaste en rojo) y usos. Señala la CORRECTA:",o:[
 "Bloquean el receptor AT1 en vasos y corazón; se usan en IC, HPT y diagnóstico de hipertensión renina-dependiente",
 "Bloquean el receptor AT2 en vasos y corazón; se usan en IC, HPT y diagnóstico de hipertensión renina-dependiente",
 "Bloquean el receptor AT1 solo en el riñón; se usan en IC, HPT y diagnóstico de hipertensión renina-dependiente",
 "Inhiben la ECA en vasos y corazón; se usan en IC, HPT y diagnóstico de hipertensión renina-dependiente"],a:0,
 cita:"Antagonistas: Candesartan, Eprosartan, Irbesartan, Losartan, Olmesarta,Telmisartan y Valsartan Bloquean los receptores tipo1 de angiotensina II en vasos y otros tejidos como el cardiaco.\n…\nSe utilizan en:\n- Diagnóstico de hipertensión renina-dependiente\n- IC\n- HPT",
 n:"Resaltaste candesartán, losartán y telmisartán. Están indicados si no se toleran los IECAs (tos seca por acúmulo de bradicinina) y en la proteinuria."},
/* ---------- p. 13 · Bloqueantes α1, isoxsuprina y nitratos ---------- */
{doc:"t5b-cardio",t:5,p:13,q:"Bloqueantes α1 (prazosín, terazosina, doxazosina, trimazosina; los resaltaste). Señala la CORRECTA:",o:[
 "Útiles en la ICC de origen valvular; presentan tolerancia y dan hipotensión ortostática y síncope",
 "Útiles en la ICC de origen valvular; no presentan tolerancia y dan hipertensión de rebote",
 "Útiles en la angina por vasoespasmo; presentan tolerancia y dan hipotensión ortostática y síncope",
 "Útiles en la ICC de origen valvular; aumentan la liberación de noradrenalina y dan taquicardia"],a:0,
 cita:"BLOQUEANTES ALFA 1: PRAZOSIN, TERAZOSINA, DOXAZOSIN, TRIMAZOSIN:\nNo aumentan liberación de norepinefrina\nCaída intensa de presión sanguínea colapso vascular\nUsos\n- ICC de origen valvular (controla edemas, congestión pulmonar, mejora perfusión sanguínea, ascitis y estado general) y en icc descompensada con tratamiento diurético/digitálico\n- HPT asociada a cardiomiopatía o nefropatía\n- Útil en hiperplasia prostática benigna\nPresentan tolerancia\nRRAA: hipotensión ortostática, síncope, congestión nasal.",
 n:"También se usan en la HPT asociada a cardiomiopatía o nefropatía y en la hiperplasia prostática benigna. Otra reacción adversa: congestión nasal."},
{doc:"t5b-cardio",t:5,p:13,q:"Isoxsuprina (agonista β-adrenérgico); sus usos y su contraindicación los enmarcaste con un corchete rojo. Señala la CORRECTA:",o:[
 "Arteriodilatador local del músculo esquelético; laminitis y navicular; contraindicada en gestantes y hemorragias",
 "Venodilatador general del territorio esplácnico; laminitis y navicular; contraindicada en gestantes y hemorragias",
 "Arteriodilatador local del músculo esquelético; laminitis y navicular; indicada en gestantes para frenar el parto",
 "Arteriodilatador local del músculo esquelético; hipertensión pulmonar; contraindicada en gestantes y hemorragias"],a:0,
 cita:"AGONISTAS b-ADRENÉRGICOS: ISOXUPRINA Y NILIDRINA\n- Arteriodilatadores locales, principalmente en vasos de músculo esquelético\n- Relajante de músculo uterino, por lo que retarda partos prematuros.\n- Actividad inotrópica positiva (desventaja).\nUsos en:\n- Enfermedad del navicular: 0’6 mg/kg cada 12h durante 6-14 semanas\n- Infosura o laminitis\nContraindicado en hembras gestantes y durante las 2 semanas tras el parto, o en animales con hemorragias.",
 n:"También está contraindicada durante las 2 semanas tras el parto. Navicular: 0,6 mg/kg cada 12 h durante 6-14 semanas. Su actividad inotrópica positiva es una desventaja."},
{doc:"t5b-cardio",t:5,p:13,q:"Nitratos orgánicos: acciones sistémicas y cardiacas según tus apuntes. Señala la CORRECTA:",o:[
 "Mixtos de predominio venoso: ↓ presión venosa, efecto débil sobre la PA y ↓ demanda de O₂",
 "Mixtos de predominio arterial: ↓ poscarga, efecto intenso sobre la PA y ↓ demanda de O₂",
 "Venodilatadores puros: ↑ presión venosa, efecto débil sobre la PA y ↑ demanda de O₂",
 "Mixtos de predominio venoso: ↓ presión venosa, efecto débil sobre la PA y ↑ demanda de O₂"],a:0,
 cita:"Vascularización sistémica:\n- Vasodilatación (venodilatadores > arteriodilatadores)\n- Disminuyen presión venosa (anotación a mano en rojo: mixtos)\n- Disminuyen presión arterial (efecto débil)\nCardiaco:\n- Reduce precarga y poscarga (disminuye el stress de la pared)\n- Demanda oxígeno (anotación a mano en rojo: ↓)",
 n:"Reducen la precarga y la poscarga (↓ estrés de la pared) y con ello la demanda de O₂. En la p. 14 volviste a anotar en rojo «Vasodilatadores mixtos» y «↓ demanda de O₂», y en la p. 8 rodeaste «Totales» en «VENODILATADORES: Totales no se disponen» con tu nota «solo hay mixtos»."},
/* ---------- p. 14 · Nitrovasodilatadores e inhibidores de la renina ---------- */
{doc:"t5b-cardio",t:5,p:14,q:"Usos de los nitratos orgánicos (los resaltaste y los repetiste a mano en rojo):",o:[
 "Infarto de miocardio, ICC y crisis agudas hipertensivas",
 "Infarto de miocardio, ICC e hipotensión grave refractaria",
 "Hipertensión crónica, ICC e hiperplasia prostática benigna",
 "Infarto de miocardio, cardiomiopatía hipertrófica y glaucoma"],a:0,
 cita:"Usos:\n- Infarto de miocardio\n- ICC\n- Crisis agudas hipertensivas\n(anotación a mano en rojo junto a «NITRATOS ORGÁNICOS»: útiles en crisis agudas hipertensivas, ICC e infarto)"},
{doc:"t5b-cardio",t:5,p:14,q:"Nitroprusiato sódico frente a nitratos orgánicos (los «dos tipos» de tus apuntes). Señala la CORRECTA:",o:[
 "El nitroprusiato libera NO (y cianuro); a los nitratos los reducen a NO grupos sulfhidrilo intracelulares",
 "Los nitratos liberan NO directamente; al nitroprusiato lo reducen a NO los grupos sulfhidrilo intracelulares",
 "El nitroprusiato es un éster que libera NO; los nitratos actúan sin formar NO, abriendo canales de K⁺",
 "El nitroprusiato libera NO (y cianuro); a los nitratos los reducen a NO las esterasas del plasma"],a:0,
 cita:"Dos tipos:\n1. Liberan NO → nitroprusiato sódico\n2. Grupos nitrato interactuan con enzimas y grupos sulfhidrilo intracelulares que los reducen a NOo a s-nitrotiol posteriormente reducido a NO:\n- Mononitrato y dinitrato de isosorbida\n- Compuestos tetranitratos\n…\nNITROPRUSIATO SÓDICO:\nNo es un éster, LIBERA NO y GRUPOS CIANURO (tiosulfato Na)\nAsociada a dobutamina para mitigar la hipotensión que ocasiona.\nEn infusión controlada → a veces para controlar hpt",
 n:"El NO activa la guanilciclasa. El nitroprusiato se da en infusión controlada y se asocia a dobutamina para mitigar la hipotensión; el «(tiosulfato Na)» se refiere al antídoto del cianuro."},
{doc:"t5b-cardio",t:5,p:14,q:"Nitroglicerina (gliceril trinitrato) según tus apuntes. Señala la CORRECTA:",o:[
 "Ungüento al 2 % (no oral, por su baja estabilidad); contraindicada en el choque cardiogénico; usar guantes",
 "Comprimidos orales (por su alta estabilidad); contraindicada en el choque cardiogénico; aplicar con guantes",
 "Ungüento al 2 % (no oral, por su baja estabilidad); de elección en el choque cardiogénico; no requiere guantes",
 "Ungüento al 2 % (no oral, por su baja estabilidad); contraindicada en la congestión pulmonar cardiógena"],a:0,
 cita:"GLICERIL TRINITRATO (NITROGLICERINA)\nDe elección en crisis de infarto y congestión pulmonar severa cardíogena.\n- Alta capacidad de atravesar membranas\n- Baja estabilidad: no oral\n- Acción en 30-60 minutos y duración 12-24 h\n- Parches transdérmicos (humana) ungüento (veterinaria)\nContraindicada en choque cardiogénico\nDosis: 0.5-2 cm ungüento al 2% (depilar zona no accesible al animal) perro y gato\nUsar guantes y prevenir al dueño, ya que como se aplica en forma de ungüento puede absorberse a través de la piel de las manos.",
 n:"Es de elección en las crisis de infarto y en la congestión pulmonar severa cardiógena. Dosis: 0,5-2 cm de ungüento en una zona depilada que el animal no alcance."},
{doc:"t5b-cardio",t:5,p:14,q:"Nitratos orgánicos: farmacocinética (resaltaste la primera frase). Señala la CORRECTA:",o:[
 "Los de acción más larga, para la profilaxis; F oral ↓ por primer paso salvo el mononitrato de isosorbida",
 "Los de acción más corta, para la profilaxis; F oral ↓ por primer paso salvo el mononitrato de isosorbida",
 "Los de acción más larga, para la profilaxis; F oral ↓ por primer paso salvo la nitroglicerina",
 "Los de acción más larga, para la profilaxis; sus metabolitos son inactivos y de vida media más corta"],a:0,
 cita:"NITRATOS ORGÁNICOS:\n- La duración de acción superior son más útiles para la profilaxis y tratamiento a largo plazo de la enfermedad coronaria.\n- F oral disminuye por efecto de 1º paso (excepto mononitrato de isosorbida 100%), por ello las dosis son superiores.\n- Metabolitos biológicamente activos y con vidas medias más prolongadas que el compuesto original, lo que contribuyen significativamente a su actividad terapéutica.",
 n:"El mononitrato de isosorbida tiene una F oral del 100 %; en los demás, las dosis orales son más altas. Sus metabolitos son activos y duran más que el compuesto original."},
{doc:"t5b-cardio",t:5,p:14,q:"Inhibidores de la renina: efectos cardiorrenales (lo resaltaste). Señala la CORRECTA:",o:[
 "Vasodilatación arterial y venosa, natriuresis y diuresis, ↓ actividad simpática e ↓ hipertrofia cardiaca",
 "Vasodilatación solo arterial, natriuresis y diuresis, ↓ actividad simpática e ↓ hipertrofia cardiaca",
 "Vasodilatación arterial y venosa, retención de Na⁺ y agua, ↑ actividad simpática e ↓ hipertrofia cardiaca",
 "Venodilatación pura, ↑ volumen sanguíneo, ↓ actividad simpática e ↑ hipertrofia cardiaca y vascular"],a:0,
 cita:"INHIBIDORES DE LA RENINA: EFECTOS CARDIORENALES:\n- Vasodilatación (arterial y venosa)\n- Baja presión arterial y venosa\n- Baja precarga y postcarga ventricular\n- Disminuye el volumen sanguíneo:\n- Natriurético\n- Diurético\n- Deprime la actividad simpática\n- Inhibe la hipertrofia cardiaca y vascular"},
/* ---------- p. 15 · Inhibidores de PDE y bosentán ---------- */
{doc:"t5b-cardio",t:5,p:15,q:"Inhibidores de la PDE3 (milrinona, inamrinona). Señala la CORRECTA según tus apuntes:",o:[
 "Solo para el fallo cardiaco agudo o descompensado; ↑ contractilidad y volumen sistólico; RRAA: trombocitopenia",
 "Para el tratamiento crónico de la insuficiencia cardiaca; ↑ contractilidad y volumen sistólico; RRAA: trombocitopenia",
 "Solo para el fallo cardiaco agudo o descompensado; ↓ contractilidad y volumen sistólico; RRAA: trombocitopenia",
 "Solo para el fallo cardiaco agudo o descompensado; ↑ contractilidad y volumen sistólico; RRAA: tos seca"],a:0,
 cita:"Inhibidores PDE3 (tratamiento agudo de fallo cardiaco o descompensación de insuficiencia crónica. No para tratamientos crónicos).\n- Milrinona\n- Inamrinona (amrinona)\n- Cilostazol\n…\n- Cardiopulmonar:\n- ↑ contractilidad y frecuencia cardiaca\n- ↑ volumen sistólico y la fracción de eyección\n…\n- ↓ presión en AI\nRRAA: trombocitopenia y arritmias",
 n:"Además: vasodilatación, ↑ perfusión orgánica, ↓ resistencia vascular sistémica y ↓ PA; tus apuntes incluyen el cilostazol en la lista. Ojo con la frecuencia: aquí pone «↑ contractilidad y frecuencia», pero en el Tema 5 A (p. 12) escribiste «Escasa actividad sobre frecuencia cardiaca», que es lo que sigue el test de la app."},
{doc:"t5b-cardio",t:5,p:15,q:"Inhibidores de la PDE5 (marcados IMP y resaltados). Señala la CORRECTA:",o:[
 "Sildenafilo y tadalafilo: disfunción eréctil y, en carnívoros, reducir la hipertensión pulmonar",
 "Sildenafilo y tadalafilo: disfunción eréctil y, en carnívoros, el tratamiento agudo del fallo cardiaco",
 "Milrinona y amrinona: disfunción eréctil y, en carnívoros, reducir la hipertensión pulmonar",
 "Sildenafilo y tadalafilo: disfunción eréctil y, en carnívoros, reducir la hipertensión sistémica"],a:0,
 cita:"Inhibidores PDE5 (IMP) (disfunción eréctil): sildenafilo, tadalafilo. En carnívoros se utiliza para reducir la hipertensión pulmonar."},
{doc:"t5b-cardio",t:5,p:15,q:"Endotelina-1 y bosentán según tus apuntes. Señala la CORRECTA:",o:[
 "La ET-1 es un vasoconstrictor potente; el bosentán bloquea ETA y ETB y se usa en la hipertensión pulmonar humana",
 "La ET-1 es un vasodilatador potente; el bosentán bloquea ETA y ETB y se usa en la hipertensión pulmonar humana",
 "La ET-1 es un vasoconstrictor potente; el bosentán bloquea solo ETA y se usa en la hipertensión sistémica felina",
 "La ET-1 es un vasoconstrictor potente; el bosentán estimula ETA y ETB y se usa en la hipertensión pulmonar humana"],a:0,
 cita:"Endotelina-1 (ET-1): péptido producido por el endotelio . Es un vasoconstrictor potente que se une a receptores del músculo liso vascular, de los que hay dos subtipos: ETA y ETB .\nPor bloqueo de los efectos vasoconstrictor y cardiotónico de ET-1→ vasodilatación e inhibición cardiaca.\n…\nBosentan, es un antagonista no selectivo del receptor ET-1 (bloquea ambos subtipos ETA y ETB ) se utiliza actualmente para el tratamiento en humana de la hipertensión pulmonar.",
 n:"Al bloquear la ET-1 produce vasodilatación e inhibición cardiaca. Es un antagonista del receptor, aunque el título diga «inhibidores de la endotelina»."}
];
APQ.forEach((q, i) => { q.id = i; if (!q.t) { const d = APUNTES.find(x => x.id === q.doc); q.t = d ? (Array.isArray(d.t) ? d.t[0] : d.t) : 0; } });
