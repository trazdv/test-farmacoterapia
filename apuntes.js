"use strict";
/* Apuntes del usuario: sus resúmenes en PDF, tal cual (cada página es una imagen en apuntes/<id>/p1.webp…).
   Para añadir un documento: carpeta apuntes/<id>/ con las páginas pN.webp y apuntes.pdf, y una entrada en APUNTES.
   APQ = preguntas de «Repasar apuntes»: solo salen en la pestaña Apuntes (no en el Test ni en Repaso).
   doc = id del documento, p = página, cita = texto literal de los apuntes que se enseña en la respuesta, n = nota breve opcional. */
const APUNTES = [
{id:"t2-eicosanoides",t:[2,3],from:{2:1,3:5},title:"Mediadores eicosanoides e inicio del Tema 3 (AINEs)",sub:"Prostaglandinas, tromboxanos, leucotrienos e introducción a los AINEs",dir:"apuntes/t2-eicosanoides/",pdf:"apuntes/t2-eicosanoides/apuntes.pdf",pages:6,w:2000,h:2826},
{id:"t3-aines",t:3,title:"Farmacología de los Antiinflamatorios No Esteroideos (AINEs)",sub:"Continuación, mecanismos, farmacocinética y seguridad",dir:"apuntes/t3-aines/",pdf:"apuntes/t3-aines/apuntes.pdf",pages:8,w:2000,h:2826}
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
 cita:"• Transporte Facilitado: La mayoría de prostaglandinas se liberan mediante un transportador específico de eicosanoides (PGT).\n• Excepción de la Prostaciclina (PGI2): No utiliza el transportador PGT, no sufre biotransformación pulmonar y se inactiva de forma espontánea a nivel sanguíneo.\n• Biotransformación: Tienen vidas medias muy cortas (menores a 10 minutos) y sufren inactivación enzimática principalmente en el pulmón e hígado."},
{doc:"t2-eicosanoides",t:2,p:2,q:"¿Dónde se inactivan sobre todo las prostaglandinas y cuánto dura su vida media?",o:[
 "En el pulmón y el hígado; vida media menor de 10 minutos",
 "En el riñón; vida media de unas 8 horas",
 "En la sangre, por la PLA₂; vida media de varios días",
 "En el estómago; vida media de unos 30 minutos"],a:0,
 cita:"Biotransformación: Tienen vidas medias muy cortas (menores a 10 minutos) y sufren inactivación enzimática principalmente en el pulmón e hígado."},
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
 cita:"Latanoprost (análogo de PGF2α): Indicado en el glaucoma de ángulo cerrado para reducir la presión intraocular (PIO) mediante el estímulo del drenaje del humor acuoso por la vía uveoescleral.\n…\nLatanoprost en perros: Tratamiento de elección en el glaucoma canino."},
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
 cita:"1. Hembras Gestantes: Prohibida su administración si se desea mantener la gestación, debido al riesgo inminente de aborto por luteólisis y contracción uterina.\n2. Obstrucción / Impactación Gastrointestinal: No administrar en animales con obstrucción intestinal; el incremento del peristaltismo puede provocar la rotura del tubo digestivo.\n3. Vía de Administración: Queda totalmente desaconsejada la vía intravenosa rápida (bolus IV)."},
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
 cita:"Tiempos de Supresión: Respetar los periodos de espera en animales destinados al consumo humano (habitualmente un mínimo de 24 horas)."},
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
 cita:"Ketorolaco: Destaca por una capacidad analgésica muy elevada que predomina ampliamente sobre su acción antiinflamatoria."}
];
APQ.forEach((q, i) => { q.id = i; if (!q.t) { const d = APUNTES.find(x => x.id === q.doc); q.t = d ? (Array.isArray(d.t) ? d.t[0] : d.t) : 0; } });
