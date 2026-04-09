/* ============================================
   Kinderanästhesie Quiz – Logik & Daten
   ============================================ */

// ─── Quiz-Daten ────────────────────────────────
const quizData = [
  // ============================================
  // KATEGORIE 1: Atemwegssicherung bei Säuglingen
  // ============================================
  {
    category: "Atemwegssicherung bei Säuglingen",
    icon: "🫁",
    questions: [
      {
        type: "single",
        question: "Welche Besonderheiten betreffen Neugeborene und Säuglinge bezüglich der Atemwege?",
        options: [
          "Ausschließlich reflexbedingte Atempausen",
          "Erhöhte atemmechanische Reserven und damit bessere Apnoetoleranz",
          "Verringertes Risiko für Laryngospasmus im Vergleich zu Erwachsenen",
          "Reflexbedingte Atempausen, Laryngospasmus und geringe atemmechanische Reserven"
        ],
        correct: 3,
        explanation: "Neugeborene und Säuglinge weisen reflexbedingte Atempausen, ein erhöhtes Laryngospasmusrisiko und geringe atemmechanische Reserven auf, was zu einer deutlich geringeren Apnoetoleranz führt."
      },
      {
        type: "truefalse",
        question: "Bisherige Leitlinien zur Atemwegssicherung haben Kinder unter einem Jahr explizit eingeschlossen.",
        correct: false,
        explanation: "Alle bisherigen Leitlinien haben Kinder unter einem Jahr explizit ausgeschlossen. Die aktuelle internationale Leitlinie (British Journal of Anaesthesia) ist die erste, die diese besonders vulnerable Altersgruppe gezielt einschließt."
      },
      {
        type: "single",
        question: "Welches ist KEIN klinisches Schlüsselthema der Atemwegssicherung bei Säuglingen laut Leitlinie?",
        options: [
          "Atemwegsbeurteilung zur Erkennung des schwierigen Atemwegs",
          "Postoperative Schmerztherapie",
          "Strategien zur erfolgreichen Extubation",
          "Human Factors und personelle Kompetenzen"
        ],
        correct: 1,
        explanation: "Die Leitlinie definiert 7 Schlüsselthemen: Atemwegsbeurteilung, optimale Vorbereitung, Intubationsstrategien, Management des schwierigen Atemwegs, Lagekontrolle, Extubation und Human Factors. Postoperative Schmerztherapie gehört nicht dazu."
      }
    ]
  },

  // ============================================
  // KATEGORIE 2: Schwieriger Atemweg & Syndrome
  // ============================================
  {
    category: "Schwieriger Atemweg & Syndrome",
    icon: "⚠️",
    questions: [
      {
        type: "single",
        question: "Welches Syndrom ist charakteristisch für einen erwartet schwierigen Atemweg bei Kindern?",
        options: [
          "Marfan-Syndrom",
          "Pierre-Robin-Syndrom",
          "Turner-Syndrom",
          "Prader-Willi-Syndrom"
        ],
        correct: 1,
        explanation: "Das Pierre-Robin-Syndrom, gekennzeichnet durch Mikrognathie (Unterkieferhypoplasie), Glossoptose und häufig eine Gaumenspalte, ist ein klassisches Beispiel für einen erwartet schwierigen Atemweg bei Kindern."
      },
      {
        type: "single",
        question: "Welches Syndrom betrifft die Halswirbelsäule und kann zu einem schwierigen Atemweg führen?",
        options: [
          "Pierre-Robin-Syndrom",
          "Ehlers-Danlos-Syndrom",
          "Klippel-Feil-Syndrom",
          "Down-Syndrom"
        ],
        correct: 2,
        explanation: "Das Klippel-Feil-Syndrom ist durch eine angeborene Fusion von Halswirbeln gekennzeichnet, was die Beweglichkeit der HWS einschränkt und die Atemwegssicherung erheblich erschweren kann."
      },
      {
        type: "truefalse",
        question: "Das Pierre-Robin-Syndrom ist durch eine Mikrognathie (Unterkieferhypoplasie) gekennzeichnet.",
        correct: true,
        explanation: "Das Pierre-Robin-Syndrom (auch Pierre-Robin-Sequenz) ist gekennzeichnet durch Mikrognathie, Glossoptose und häufig eine Gaumenspalte, was zu einer relevanten Atemwegsobstruktion führen kann."
      }
    ]
  },

  // ============================================
  // KATEGORIE 3: Vorbereitung & Intubation
  // ============================================
  {
    category: "Vorbereitung & Intubation",
    icon: "🔧",
    questions: [
      {
        type: "truefalse",
        question: "Muskelrelaxierung wird bei der Intubation von Säuglingen empfohlen, da sie zu weniger Komplikationen und einer höheren Erfolgsrate im ersten Versuch führt.",
        correct: true,
        explanation: "Die Leitlinie empfiehlt Muskelrelaxierung bei der Intubation von Säuglingen. Sie führt nachweislich zu weniger Komplikationen und Verletzungen sowie zu einer höheren Erfolgsrate bereits im ersten Intubationsversuch."
      },
      {
        type: "single",
        question: "Welche Intubationsmethode wird laut aktueller Leitlinie empfohlen?",
        options: [
          "Konventionelle direkte Laryngoskopie",
          "Videolaryngoskopie mit altersangepasstem Spatel",
          "Blinde nasale Intubation als Standardverfahren",
          "Ausschließlich fiberoptische Intubation"
        ],
        correct: 1,
        explanation: "Die Leitlinie empfiehlt die Videolaryngoskopie mit altersangepasstem Spatel. In Kombination mit apnoischer Oxygenierung zeigt sie eine signifikant höhere Erfolgsrate im ersten Versuch ohne Entsättigung im Vergleich zur konventionellen Laryngoskopie."
      },
      {
        type: "single",
        question: "Ab welchem Körpergewicht können sowohl gecuffte als auch ungecuffte Tuben sicher angewendet werden?",
        options: [
          "> 1 kg Körpergewicht",
          "> 2 kg Körpergewicht",
          "> 3 kg Körpergewicht",
          "> 5 kg Körpergewicht"
        ],
        correct: 2,
        explanation: "Laut Leitlinie können bei Kindern mit einem Körpergewicht über 3 kg sowohl gecuffte als auch ungecuffte Tuben sicher angewendet werden."
      },
      {
        type: "single",
        question: "In welcher Situation ist die orale Intubation der nasalen vorzuziehen?",
        options: [
          "Grundsätzlich bei allen Kindern unter 1 Jahr",
          "Im Notfall und bei unerfahrenem Team",
          "Bei elektiven HNO-Eingriffen",
          "Immer auf der Intensivstation"
        ],
        correct: 1,
        explanation: "Im Notfall und bei unerfahrenem Team ist die orale Intubation vorzuziehen. Die nasale Intubation bietet zwar Vorteile bei Fixierung und Mundpflege auf der ITS, birgt aber ein Blutungsrisiko (Cave: HNO-Kinder)."
      }
    ]
  },

  // ============================================
  // KATEGORIE 4: Apnoische Oxygenierung
  // ============================================
  {
    category: "Apnoische Oxygenierung",
    icon: "💨",
    questions: [
      {
        type: "single",
        question: "Was beschreibt die apnoische Oxygenierung (ApOx)?",
        options: [
          "Beatmung mit 100 % Sauerstoff vor der Intubation",
          "Konstanter Sauerstofffluss bei einem apnoischen Patienten ohne Ventilation",
          "Manuelle Beutelbeatmung während der Laryngoskopie",
          "High-Flow-Sauerstofftherapie nach der Extubation"
        ],
        correct: 1,
        explanation: "Apnoische Oxygenierung beschreibt einen Prozess, bei dem ein apnoischer Patient einen konstanten Sauerstofffluss erhält, ohne dabei ventiliert zu werden. Ziel ist es, die sichere Apnoezeit zu verlängern und genügend Zeitreserve bei der Intubation zu haben."
      },
      {
        type: "single",
        question: "Wie viel CO₂ gelangt während der Apnoezeit vom Blut in die Alveolen (im Vergleich zur O₂-Aufnahme von 250 ml/min)?",
        options: [
          "250 ml/min",
          "100 ml/min",
          "10 ml/min",
          "50 ml/min"
        ],
        correct: 2,
        explanation: "Während der Apnoezeit gelangen nur ca. 10 ml/min CO₂ vom Blut in die Alveolen, während 250 ml/min O₂ aufgenommen werden. Dieser negative Partialdruckgradient ›saugt‹ den Sauerstoff vom Pharynx in die Lungen, wo er ins Blut aufgenommen werden kann."
      },
      {
        type: "single",
        question: "Wie lange blieb die Sauerstoffsättigung in der Studie von Frumin et al. (1959) bei apnoischen Patienten stabil?",
        options: [
          "10 Minuten",
          "30 Minuten",
          "Über 50 Minuten",
          "90 Minuten"
        ],
        correct: 2,
        explanation: "In der bahnbrechenden Studie von Frumin et al. (1959) blieb die O₂-Sättigung bei 8 intubierten und relaxierten Patienten über 50 Minuten stabil – durch konstanten O₂-Fluss über den Endotrachealtubus, trotz fehlender Ventilation."
      },
      {
        type: "truefalse",
        question: "In der Studie von Frumin et al. (1959) trat trotz stabiler Sauerstoffsättigung eine massive respiratorische Azidose auf (niedrigster pH 6,72 bei paCO₂ von 250 mmHg).",
        correct: true,
        explanation: "Obwohl die Sauerstoffsättigung über 50 Minuten stabil blieb, entwickelte sich eine massive respiratorische Azidose. Der niedrigste gemessene pH lag bei 6,72 bei einem paCO₂ von 250 mmHg – ein wichtiger Hinweis, dass ApOx allein das CO₂-Problem nicht löst."
      }
    ]
  },

  // ============================================
  // KATEGORIE 5: Atemwegsmanagement
  // ============================================
  {
    category: "Atemwegsmanagement",
    icon: "🏥",
    questions: [
      {
        type: "single",
        question: "Was empfiehlt die Leitlinie zur supraglottischen Atemwegshilfe bei Säuglingen?",
        options: [
          "Nur als Notfallmaßnahme bei Erwachsenen geeignet",
          "Ein effizientes Mittel zur Oxygenierung und Ventilation",
          "Kontraindiziert bei Säuglingen unter 6 Monaten",
          "Nur bei schwierigem Atemweg als letzter Ausweg"
        ],
        correct: 1,
        explanation: "Die Leitlinie empfiehlt die supraglottische Atemwegshilfe als effizientes Mittel zur Oxygenierung und Ventilation – auch als Alternative zur endotrachealen Intubation bei Säuglingen."
      },
      {
        type: "single",
        question: "Warum ist die Koniotomie bei Neugeborenen und Säuglingen ungeeignet?",
        options: [
          "Das Ligamentum cricothyroideum ist bei Säuglingen nicht vorhanden",
          "Die chirurgische Tracheotomie bietet ein größeres Lumen, ist besser zu tasten und hat eine höhere Erfolgsrate",
          "Es gibt kein geeignetes Material in der passenden Größe",
          "Die Blutungsgefahr ist grundsätzlich zu hoch"
        ],
        correct: 1,
        explanation: "Die chirurgische Tracheotomie wird bei Neugeborenen und Säuglingen der Koniotomie vorgezogen, da sie ein größeres Lumen bietet, die Trachea besser zu tasten ist und die Erfolgsrate deutlich höher liegt."
      },
      {
        type: "single",
        question: "Was empfiehlt die Leitlinie nach einem fehlgeschlagenen Intubationsversuch?",
        options: [
          "Sofort den gleichen Versuch mit derselben Technik wiederholen",
          "Direkt zur chirurgischen Tracheotomie übergehen",
          "Umstände prüfen und verbessern, Anzahl der Versuche limitieren",
          "Ausschließlich auf konventionelle Laryngoskopie wechseln"
        ],
        correct: 2,
        explanation: "Je mehr Intubationsversuche mit derselben Technik unternommen werden, desto höher ist die Komplikationswahrscheinlichkeit. Die Leitlinie empfiehlt, nach jedem Versuch die Umstände zu prüfen, zu verbessern und die Gesamtzahl der Versuche zu limitieren. Flexible und rigide Optiken sollten vor Ort sein."
      }
    ]
  },

  // ============================================
  // KATEGORIE 6: Extubation & Lagekontrolle
  // ============================================
  {
    category: "Extubation & Lagekontrolle",
    icon: "✅",
    questions: [
      {
        type: "multiple",
        question: "Welche Methoden werden zur Lagekontrolle des trachealen Tubus empfohlen? (Mehrere Antworten möglich)",
        options: [
          "Videolaryngoskopie",
          "Röntgen-Thorax",
          "Ultraschall",
          "Ausschließlich Auskultation"
        ],
        correct: [0, 1, 2],
        explanation: "Zur Lagekontrolle des trachealen Tubus werden drei Methoden empfohlen: Videolaryngoskopie, Röntgen-Thorax und Ultraschall. Auskultation allein ist nicht ausreichend zuverlässig."
      },
      {
        type: "single",
        question: "Welches Medikament senkt die Reintubationswahrscheinlichkeit bei erwartetem Postextubationsstridor?",
        options: [
          "Atropin",
          "Epinephrin",
          "Salbutamol",
          "Midazolam"
        ],
        correct: 1,
        explanation: "Epinephrin senkt die Reintubationswahrscheinlichkeit, wenn ein Postextubationsstridor wahrscheinlich ist – es verhindert ihn jedoch nicht vollständig. Ergänzend können Kortikosteroide zur Vermeidung eines Postextubationsstridors beitragen."
      },
      {
        type: "truefalse",
        question: "Es gibt klare Evidenz dafür, dass die Wachextubation der Schlafextubation bei Kindern überlegen ist.",
        correct: false,
        explanation: "Es gibt derzeit keine Evidenz für die Überlegenheit der Schlaf- oder Wachextubation bei Kindern. Entscheidend ist vielmehr, dass alles für eine sofortige Reintubation bereit steht und eine medikamentöse Vorbehandlung abgeschätzt wird."
      }
    ]
  },

  // ============================================
  // KATEGORIE 7: Human Factors & Teamarbeit
  // ============================================
  {
    category: "Human Factors & Teamarbeit",
    icon: "👥",
    questions: [
      {
        type: "multiple",
        question: "Welche Faktoren sind laut Leitlinie für das pädiatrische Atemwegsmanagement wichtig? (Mehrere Antworten möglich)",
        options: [
          "Bidirektionale Kommunikation",
          "Strikte hierarchische Strukturen",
          "Simulationsgestützte Team-Trainings",
          "Einzelarbeit ohne Absprache",
          "Algorithmen und Checklisten"
        ],
        correct: [0, 2, 4],
        explanation: "Die Leitlinie betont Teamarbeit, bidirektionale Kommunikation, flache Hierarchien (nicht strikt!), Situationsbewusstsein sowie den Einsatz von Algorithmen, Checklisten und simulationsgestützten Team-Trainings. Strikte Hierarchien und Einzelarbeit werden explizit nicht empfohlen."
      },
      {
        type: "truefalse",
        question: "Komplikationen im pädiatrischen Atemwegsmanagement entstehen häufig durch die Kombination aus menschlichem und organisatorischem Versagen.",
        correct: true,
        explanation: "Komplikationen entstehen häufig nicht durch einzelne Fehler, sondern durch die Kombination aus menschlichen und organisatorischen Faktoren. Deshalb sind systematische Ansätze wie Teamtraining, Checklisten und flache Hierarchien entscheidend."
      }
    ]
  },

  // ============================================
  // KATEGORIE 8: Perioperative Hypothermie
  // ============================================
  {
    category: "Perioperative Hypothermie",
    icon: "🌡️",
    questions: [
      {
        type: "single",
        question: "Welcher Bereich gilt als normale Körperkerntemperatur bei Kindern unter 5 Jahren?",
        options: [
          "35,5–37,0 °C",
          "36,5–38,0 °C",
          "37,0–38,5 °C",
          "36,0–37,5 °C"
        ],
        correct: 1,
        explanation: "Die normale Körperkerntemperatur bei Kindern unter 5 Jahren liegt bei 36,5–38,0 °C. Dieser Bereich ist etwas weiter als bei Erwachsenen."
      },
      {
        type: "truefalse",
        question: "Ein unbekleidetes Neugeborenes bei 23 °C Raumtemperatur hat den gleichen Wärmeverlust wie ein unbekleideter Erwachsener bei 0 °C.",
        correct: true,
        explanation: "Neugeborene haben ein deutlich ungünstigeres Verhältnis von Körperoberfläche zu Gewicht und verlieren besonders über den großen Kopf sehr viel Wärme. Dies erklärt den dramatischen Unterschied im Wärmeverlust im Vergleich zu Erwachsenen."
      },
      {
        type: "single",
        question: "Welcher Faktor begünstigt NICHT die perioperative Hypothermie bei Kindern?",
        options: [
          "Niedrige Raumtemperatur im OP",
          "Junges Alter mit großem Oberfläche-zu-Gewicht-Verhältnis",
          "Allgemeinanästhesie mit gestörter autonomer Thermoregulation",
          "Hoher Anteil an braunem Fettgewebe"
        ],
        correct: 3,
        explanation: "Braunes Fettgewebe dient der zitterfreien Wärmeproduktion (Non-shivering Thermogenesis) und ist eher ein Schutzmechanismus gegen Auskühlung. Risikofaktoren für perioperative Hypothermie sind niedrige Raumtemperatur, junges Alter (ungünstiges Oberfläche-Gewicht-Verhältnis, hoher Wärmeverlust über den Kopf) und Allgemeinanästhesie mit erheblich gestörter Thermoregulation."
      }
    ]
  },

  // ============================================
  // KATEGORIE 9: Transfusionen bei Kindern
  // ============================================
  {
    category: "Transfusionen bei Kindern",
    icon: "🩸",
    questions: [
      {
        type: "multiple",
        question: "Welche Parameter sollten neben dem Hb-Wert in die Transfusionsentscheidung einfließen? (Mehrere Antworten möglich)",
        options: [
          "Laktatwert",
          "Körpergewicht allein",
          "Regionale Sauerstoffsättigung",
          "Hämodynamischer und respiratorischer Zustand"
        ],
        correct: [0, 2, 3],
        explanation: "Die Transfusionsentscheidung sollte nie allein vom Hb-Wert abhängen. Wichtige zusätzliche Parameter sind der Laktatwert, Sauerstoffangebot und -verbrauch, die regionale Sauerstoffsättigung sowie der hämodynamische und respiratorische Zustand des Kindes."
      },
      {
        type: "truefalse",
        question: "Bei kritisch kranken Kindern werden über 50 % der Thrombozytenkonzentrate prophylaktisch bei nicht blutenden Kindern verabreicht.",
        correct: true,
        explanation: "Studien zeigen, dass über 50 % der TK-Gaben bei kritisch kranken Kindern prophylaktisch bei nicht blutenden Kindern erfolgen. Bei 34 % der Transfusionen lag die Thrombozytenzahl sogar oberhalb der Indikation von 50.000/µL. Die Gesamtrate an TK-Gaben war unabhängig mit erhöhter Mortalität assoziiert."
      },
      {
        type: "single",
        question: "Welche Aussage zur neonatalen Thrombozytopenie ist korrekt?",
        options: [
          "Die Mortalität steigt proportional mit der Schwere der Thrombozytopenie",
          "Die Mortalität korreliert mit der Anzahl der gegebenen Thrombozytenkonzentrate",
          "Thrombozytenkonzentrate senken die Mortalität bei Neonaten zuverlässig",
          "Die Thrombozytenzahl ist der wichtigste prognostische Faktor"
        ],
        correct: 1,
        explanation: "Die Mortalität bei neonataler Thrombozytopenie hing nicht von der Schwere der Thrombozytopenie ab, sondern korrelierte mit der Anzahl der gegebenen Thrombozytenkonzentrate. Dies unterstreicht die Bedeutung einer restriktiven Transfusionsstrategie."
      }
    ]
  },

  // ============================================
  // KATEGORIE 10: Medikamentensicherheit
  // ============================================
  {
    category: "Medikamentensicherheit",
    icon: "💊",
    questions: [
      {
        type: "single",
        question: "Welches Thema hat die WHO an Platz 1 der fünf bedeutsamsten sicherheitsrelevanten Themen der Medizin gesetzt?",
        options: [
          "Hygiene im Krankenhaus",
          "Medikationsfehler durch injizierbare Medikamente",
          "Falsche Seitenlagerung bei Operationen",
          "Kommunikationsfehler bei der Patientenübergabe"
        ],
        correct: 1,
        explanation: "Die WHO hat Medikationsfehler durch injizierbare Medikamente auf Platz 1 der fünf bedeutsamsten sicherheitsrelevanten Themen der Medizin gesetzt. Kinder sind hierbei besonders gefährdet. Hilfsmittel wie Kinderlineal, pädiatrische Notfallkarte und die pedihelp-App können Fehler reduzieren."
      },
      {
        type: "single",
        question: "Was beschreibt das Prinzip der Closed-loop-Kommunikation bei der Medikamentengabe?",
        options: [
          "Der Arzt ordnet an und die Pflegekraft verabreicht sofort",
          "Die Medikamentengabe erfolgt erst, wenn alle Teammitglieder die Korrektheit bestätigt haben",
          "Die Kommunikation erfolgt ausschließlich über das Patientenaktensystem",
          "Nur der verantwortliche Arzt kontrolliert die Medikamentengabe"
        ],
        correct: 1,
        explanation: "Bei der Closed-loop-Kommunikation soll die Medikamentengabe erst erfolgen, wenn alle Teammitglieder signalisiert haben, dass alles korrekt ist. Dieses Prinzip minimiert Medikationsfehler durch gegenseitige Kontrolle und klare Rückmeldung."
      }
    ]
  }
];


// ─── State ─────────────────────────────────────
let flatQuestions = [];
let currentIndex = 0;
let score = 0;
let answers = [];
let categoryScores = {};
let currentCategoryIndex = -1;
let selectedMultiple = new Set();


// ─── Initialisierung ──────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  addSVGDefs();
  buildFlatQuestions();
  renderCategoryGrid();
});


function addSVGDefs() {
  // SVG-Gradient für den Score-Ring
  const svg = document.getElementById("score-ring-fill");
  if (!svg) return;
  const svgNS = "http://www.w3.org/2000/svg";
  const parent = svg.closest("svg");

  const defs = document.createElementNS(svgNS, "defs");
  const gradient = document.createElementNS(svgNS, "linearGradient");
  gradient.setAttribute("id", "scoreGradient");
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%");
  gradient.setAttribute("y2", "0%");

  const stop1 = document.createElementNS(svgNS, "stop");
  stop1.setAttribute("offset", "0%");
  stop1.setAttribute("stop-color", "#6D28D9");

  const stop2 = document.createElementNS(svgNS, "stop");
  stop2.setAttribute("offset", "100%");
  stop2.setAttribute("stop-color", "#A78BFA");

  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  defs.appendChild(gradient);
  parent.insertBefore(defs, parent.firstChild);
}


function buildFlatQuestions() {
  flatQuestions = [];
  quizData.forEach((cat, catIdx) => {
    categoryScores[catIdx] = { correct: 0, total: cat.questions.length };
    cat.questions.forEach((q) => {
      flatQuestions.push({ ...q, categoryIndex: catIdx });
    });
  });
}


function renderCategoryGrid() {
  const grid = document.getElementById("category-grid");
  grid.innerHTML = quizData.map((cat, i) => `
    <div class="category-card">
      <div class="category-card-icon">${cat.icon}</div>
      <div class="category-card-name">${cat.category}</div>
      <div class="category-card-count">${cat.questions.length} Frage${cat.questions.length > 1 ? "n" : ""}</div>
    </div>
  `).join("");
}


// ─── Screen-Übergänge ─────────────────────────
function switchScreen(fromId, toId) {
  const from = document.getElementById(fromId);
  const to = document.getElementById(toId);

  from.classList.add("leaving");
  setTimeout(() => {
    from.classList.remove("active", "leaving");
    to.classList.add("active");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 280);
}


// ─── Quiz starten ─────────────────────────────
function startQuiz() {
  currentIndex = 0;
  score = 0;
  answers = [];
  currentCategoryIndex = -1;
  selectedMultiple = new Set();
  buildFlatQuestions();
  showCategoryIntro();
}


function showCategoryIntro() {
  const q = flatQuestions[currentIndex];
  const cat = quizData[q.categoryIndex];

  if (q.categoryIndex !== currentCategoryIndex) {
    currentCategoryIndex = q.categoryIndex;

    document.getElementById("category-icon").textContent = cat.icon;
    document.getElementById("category-label").textContent = `Kategorie ${q.categoryIndex + 1} von ${quizData.length}`;
    document.getElementById("category-title").textContent = cat.category;
    document.getElementById("category-count").textContent = `${cat.questions.length} Frage${cat.questions.length > 1 ? "n" : ""}`;

    const currentScreen = document.querySelector(".screen.active");
    switchScreen(currentScreen.id, "category-screen");
  } else {
    showQuestion();
  }
}


// ─── Frage anzeigen ───────────────────────────
function showQuestion() {
  const currentScreen = document.querySelector(".screen.active");
  if (currentScreen.id !== "quiz-screen") {
    switchScreen(currentScreen.id, "quiz-screen");
    setTimeout(() => renderQuestion(), 300);
  } else {
    renderQuestion();
  }
}


function renderQuestion() {
  const q = flatQuestions[currentIndex];
  const cat = quizData[q.categoryIndex];
  selectedMultiple = new Set();

  // Fortschritt
  const pct = ((currentIndex) / flatQuestions.length) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-category").textContent = cat.icon + " " + cat.category;
  document.getElementById("progress-text").textContent = `${currentIndex + 1} / ${flatQuestions.length}`;

  // Frage-Metadaten
  const typeBadge = document.getElementById("question-type-badge");
  typeBadge.className = "type-badge " + q.type;
  if (q.type === "single") typeBadge.textContent = "Einzelauswahl";
  else if (q.type === "truefalse") typeBadge.textContent = "Richtig / Falsch";
  else if (q.type === "multiple") typeBadge.textContent = "Mehrfachauswahl";

  document.getElementById("question-number").textContent = `Frage ${currentIndex + 1}`;
  document.getElementById("question-text").textContent = q.question;

  // Optionen
  const container = document.getElementById("options-container");
  if (q.type === "truefalse") {
    container.innerHTML = buildTrueFalseOptions();
  } else {
    const options = q.options || [];
    const labels = ["A", "B", "C", "D", "E", "F"];
    const isMultiple = q.type === "multiple";
    container.innerHTML = options.map((opt, i) => `
      <button class="option-btn" data-index="${i}" onclick="${isMultiple ? `toggleMultiple(${i})` : `checkAnswer(${i})`}">
        <span class="option-indicator ${isMultiple ? "checkbox" : ""}">${labels[i]}</span>
        <span>${opt}</span>
      </button>
    `).join("") + (isMultiple ? `
      <div class="confirm-btn-wrapper">
        <button class="btn-confirm" id="confirm-multiple-btn" onclick="checkMultipleAnswer()" disabled>
          Antwort bestätigen
        </button>
      </div>
    ` : "");
  }

  // Reset
  document.getElementById("explanation-box").classList.add("hidden");
  document.getElementById("explanation-box").classList.remove("correct", "wrong");
  document.getElementById("next-btn").classList.add("hidden");

  // Animation
  const card = document.getElementById("question-card");
  card.style.animation = "none";
  card.offsetHeight; // reflow
  card.style.animation = "cardIn 0.4s var(--ease)";
}


function buildTrueFalseOptions() {
  return `
    <button class="option-btn" data-index="true" onclick="checkAnswer(true)">
      <span class="option-indicator">R</span>
      <span>Richtig</span>
    </button>
    <button class="option-btn" data-index="false" onclick="checkAnswer(false)">
      <span class="option-indicator">F</span>
      <span>Falsch</span>
    </button>
  `;
}


// ─── Mehrfachauswahl ──────────────────────────
function toggleMultiple(index) {
  if (selectedMultiple.has(index)) {
    selectedMultiple.delete(index);
  } else {
    selectedMultiple.add(index);
  }

  // Visuelles Update
  const buttons = document.querySelectorAll("#options-container .option-btn");
  buttons.forEach((btn) => {
    const idx = parseInt(btn.dataset.index);
    btn.classList.toggle("selected", selectedMultiple.has(idx));
  });

  const confirmBtn = document.getElementById("confirm-multiple-btn");
  if (confirmBtn) {
    confirmBtn.disabled = selectedMultiple.size === 0;
  }
}


function checkMultipleAnswer() {
  const q = flatQuestions[currentIndex];
  const correctSet = new Set(q.correct);
  const isCorrect = selectedMultiple.size === correctSet.size &&
                    [...selectedMultiple].every(i => correctSet.has(i));

  if (isCorrect) {
    score++;
    categoryScores[q.categoryIndex].correct++;
  }
  answers.push({ index: currentIndex, correct: isCorrect });

  // Alle Buttons deaktivieren + markieren
  const buttons = document.querySelectorAll("#options-container .option-btn");
  buttons.forEach((btn) => {
    const idx = parseInt(btn.dataset.index);
    btn.classList.add("disabled");
    btn.onclick = null;

    if (correctSet.has(idx)) {
      btn.classList.add("correct");
      btn.querySelector(".option-indicator").innerHTML = "✓";
    }
    if (selectedMultiple.has(idx) && !correctSet.has(idx)) {
      btn.classList.add("wrong");
      btn.querySelector(".option-indicator").innerHTML = "✗";
    }
  });

  // Bestätigungsbutton ausblenden
  const confirmWrapper = document.querySelector(".confirm-btn-wrapper");
  if (confirmWrapper) confirmWrapper.style.display = "none";

  showExplanation(isCorrect, q.explanation);
}


// ─── Antwort prüfen (Single / TrueFalse) ─────
function checkAnswer(selected) {
  const q = flatQuestions[currentIndex];
  let isCorrect = false;

  if (q.type === "truefalse") {
    isCorrect = selected === q.correct;
    markTrueFalseButtons(selected, q.correct);
  } else {
    isCorrect = selected === q.correct;
    markSingleButtons(selected, q.correct);
  }

  if (isCorrect) {
    score++;
    categoryScores[q.categoryIndex].correct++;
  }
  answers.push({ index: currentIndex, correct: isCorrect });
  showExplanation(isCorrect, q.explanation);
}


function markSingleButtons(selected, correct) {
  const buttons = document.querySelectorAll("#options-container .option-btn");
  buttons.forEach((btn) => {
    const idx = parseInt(btn.dataset.index);
    btn.classList.add("disabled");
    btn.onclick = null;

    if (idx === correct) {
      btn.classList.add("correct");
      btn.querySelector(".option-indicator").innerHTML = "✓";
    }
    if (idx === selected && selected !== correct) {
      btn.classList.add("wrong");
      btn.querySelector(".option-indicator").innerHTML = "✗";
    }
  });
}


function markTrueFalseButtons(selected, correct) {
  const buttons = document.querySelectorAll("#options-container .option-btn");
  buttons.forEach((btn) => {
    const val = btn.dataset.index === "true";
    btn.classList.add("disabled");
    btn.onclick = null;

    if (val === correct) {
      btn.classList.add("correct");
      btn.querySelector(".option-indicator").innerHTML = "✓";
    }
    if (val === selected && selected !== correct) {
      btn.classList.add("wrong");
      btn.querySelector(".option-indicator").innerHTML = "✗";
    }
  });
}


// ─── Erklärung anzeigen ───────────────────────
function showExplanation(isCorrect, text) {
  const box = document.getElementById("explanation-box");
  box.classList.remove("hidden", "correct", "wrong");
  box.classList.add(isCorrect ? "correct" : "wrong");

  document.getElementById("explanation-icon").textContent = isCorrect ? "✅" : "❌";
  document.getElementById("explanation-title").textContent = isCorrect ? "Richtig!" : "Leider falsch";
  document.getElementById("explanation-text").textContent = text;

  const nextBtn = document.getElementById("next-btn");
  nextBtn.classList.remove("hidden");

  const isLast = currentIndex === flatQuestions.length - 1;
  document.getElementById("next-btn-text").textContent = isLast ? "Ergebnis anzeigen" : "Nächste Frage";

  // Sanft zum Erklärungsbereich scrollen
  setTimeout(() => {
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 100);
}


// ─── Nächste Frage ────────────────────────────
function nextQuestion() {
  currentIndex++;

  if (currentIndex >= flatQuestions.length) {
    showResults();
    return;
  }

  const q = flatQuestions[currentIndex];
  if (q.categoryIndex !== currentCategoryIndex) {
    showCategoryIntro();
  } else {
    showQuestion();
  }
}


// ─── Ergebnis anzeigen ────────────────────────
function showResults() {
  switchScreen("quiz-screen", "results-screen");

  const percent = Math.round((score / flatQuestions.length) * 100);

  // Score-Ring animieren
  setTimeout(() => {
    const circumference = 2 * Math.PI * 85; // ~534.07
    const offset = circumference - (percent / 100) * circumference;
    document.getElementById("score-ring-fill").style.strokeDashoffset = offset;

    // Prozentzahl hochzählen
    animateCounter("score-percent", 0, percent, 1200);
  }, 400);

  // Zusammenfassung
  let summary = "";
  if (percent >= 90) summary = "Hervorragend! Du beherrschst die Kinderanästhesie ausgezeichnet.";
  else if (percent >= 75) summary = "Sehr gut! Du hast ein solides Wissen in der Kinderanästhesie.";
  else if (percent >= 60) summary = "Gut! Einige Themen könntest du noch vertiefen.";
  else if (percent >= 40) summary = "Es gibt noch Verbesserungspotenzial. Wiederhole die Schwachstellen gezielt.";
  else summary = "Hier besteht Lernbedarf. Gehe die Themen nochmals systematisch durch.";

  document.getElementById("score-summary").textContent =
    `${score} von ${flatQuestions.length} Fragen richtig beantwortet. ${summary}`;

  // Kategorie-Aufschlüsselung
  const breakdown = document.getElementById("category-breakdown");
  breakdown.innerHTML = quizData.map((cat, i) => {
    const cs = categoryScores[i];
    const catPct = Math.round((cs.correct / cs.total) * 100);
    let level = "poor";
    if (catPct >= 80) level = "excellent";
    else if (catPct >= 60) level = "good";
    else if (catPct >= 40) level = "fair";

    return `
      <div class="breakdown-item">
        <span class="breakdown-icon">${cat.icon}</span>
        <div class="breakdown-info">
          <div class="breakdown-name">${cat.category}</div>
          <div class="breakdown-bar-track">
            <div class="breakdown-bar-fill ${level}" data-width="${catPct}"></div>
          </div>
        </div>
        <span class="breakdown-score">${cs.correct}/${cs.total}</span>
      </div>
    `;
  }).join("");

  // Balken animieren
  setTimeout(() => {
    document.querySelectorAll(".breakdown-bar-fill").forEach(bar => {
      bar.style.width = bar.dataset.width + "%";
    });
  }, 600);
}


function animateCounter(elementId, start, end, duration) {
  const el = document.getElementById(elementId);
  const range = end - start;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + range * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}


// ─── Quiz wiederholen ─────────────────────────
function restartQuiz() {
  // Score-Ring zurücksetzen
  const circumference = 2 * Math.PI * 85;
  document.getElementById("score-ring-fill").style.strokeDashoffset = circumference;
  document.getElementById("score-percent").textContent = "0";

  switchScreen("results-screen", "start-screen");
}
