// ---- MATCHES ----
// Paste here the CORRECT matchesData we just built (the 30 matches,
// with Day 1 = final, Day 2 = in_progress, Days 3–4 = not_started)
export const matchesData = [
  // ---------- gyros 1 (Day 1 – final) ----------
  {
    id: 1,
    t1_id: 1, t2_id: 6,
    t1_name: "ΚΡΙΤΣΑΛΗΣ", t2_name: "ΚΑΡΑΜΑΝΛΗΣ",
    date_start: "2025-12-09 10:00:00",
    gyros: 1,
    status: "final",
    boards: 12,
    score: [10, 23],
    player_prediction: 0
  },
  {
    id: 2,
    t1_id: 2, t2_id: 5,
    t1_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ", t2_name: "ΚΟΝΤΟΜΗΤΡΟΣ",
    date_start: "2025-12-09 10:00:00",
    gyros: 1,
    status: "final",
    boards: 12,
    score: [23, 7],
    player_prediction: 0
  },
  {
    id: 3,
    t1_id: 3, t2_id: 4,
    t1_name: "ΔΟΞΙΑΔΗΣ", t2_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ",
    date_start: "2025-12-09 10:00:00",
    gyros: 1,
    status: "final",
    boards: 12,
    score: [17, 20],
    player_prediction: 0
  },

  // ---------- gyros 2 (Day 1 – final) ----------
  {
    id: 4,
    t1_id: 1, t2_id: 5,
    t1_name: "ΚΡΙΤΣΑΛΗΣ", t2_name: "ΚΟΝΤΟΜΗΤΡΟΣ",
    date_start: "2025-12-09 14:00:00",
    gyros: 2,
    status: "final",
    boards: 12,
    score: [16, 29],
    player_prediction: 0
  },
  {
    id: 5,
    t1_id: 6, t2_id: 4,
    t1_name: "ΚΑΡΑΜΑΝΛΗΣ", t2_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ",
    date_start: "2025-12-09 14:00:00",
    gyros: 2,
    status: "final",
    boards: 12,
    score: [21, 12],
    player_prediction: 0
  },
  {
    id: 6,
    t1_id: 2, t2_id: 3,
    t1_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ", t2_name: "ΔΟΞΙΑΔΗΣ",
    date_start: "2025-12-09 14:00:00",
    gyros: 2,
    status: "final",
    boards: 12,
    score: [5, 36],
    player_prediction: 0
  },

  // ---------- gyros 3 (Day 1 – final) ----------
  {
    id: 7,
    t1_id: 1, t2_id: 4,
    t1_name: "ΚΡΙΤΣΑΛΗΣ", t2_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ",
    date_start: "2025-12-09 18:00:00",
    gyros: 3,
    status: "final",
    boards: 12,
    score: [12, 42],
    player_prediction: 0
  },
  {
    id: 8,
    t1_id: 5, t2_id: 3,
    t1_name: "ΚΟΝΤΟΜΗΤΡΟΣ", t2_name: "ΔΟΞΙΑΔΗΣ",
    date_start: "2025-12-09 18:00:00",
    gyros: 3,
    status: "final",
    boards: 12,
    score: [24, 10],
    player_prediction: 0
  },
  {
    id: 9,
    t1_id: 6, t2_id: 2,
    t1_name: "ΚΑΡΑΜΑΝΛΗΣ", t2_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ",
    date_start: "2025-12-09 18:00:00",
    gyros: 3,
    status: "final",
    boards: 12,
    score: [10, 10],
    player_prediction: 0
  },

  // ---------- gyros 4 (Day 2 – LIVE / IN PROGRESS) ----------
  {
    id: 10,
    t1_id: 1, t2_id: 3,
    t1_name: "ΚΡΙΤΣΑΛΗΣ", t2_name: "ΔΟΞΙΑΔΗΣ",
    date_start: "2025-12-10 10:00:00",
    gyros: 4,
    status: "in_progress",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 11,
    t1_id: 4, t2_id: 2,
    t1_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ", t2_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ",
    date_start: "2025-12-10 10:00:00",
    gyros: 4,
    status: "in_progress",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 12,
    t1_id: 5, t2_id: 6,
    t1_name: "ΚΟΝΤΟΜΗΤΡΟΣ", t2_name: "ΚΑΡΑΜΑΝΛΗΣ",
    date_start: "2025-12-10 10:00:00",
    gyros: 4,
    status: "in_progress",
    boards: 12,
    score: null,
    player_prediction: 0
  },

  // ---------- gyros 5 (Day 2 – LIVE / IN PROGRESS) ----------
  {
    id: 13,
    t1_id: 1, t2_id: 2,
    t1_name: "ΚΡΙΤΣΑΛΗΣ", t2_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ",
    date_start: "2025-12-10 18:00:00",
    gyros: 5,
    status: "in_progress",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 14,
    t1_id: 3, t2_id: 6,
    t1_name: "ΔΟΞΙΑΔΗΣ", t2_name: "ΚΑΡΑΜΑΝΛΗΣ",
    date_start: "2025-12-10 18:00:00",
    gyros: 5,
    status: "in_progress",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 15,
    t1_id: 4, t2_id: 5,
    t1_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ", t2_name: "ΚΟΝΤΟΜΗΤΡΟΣ",
    date_start: "2025-12-10 18:00:00",
    gyros: 5,
    status: "in_progress",
    boards: 12,
    score: null,
    player_prediction: 0
  },

  // ---------- gyros 6 (Day 3 – PRE-LIVE) ----------
  {
    id: 16,
    t1_id: 6, t2_id: 1,
    t1_name: "ΚΑΡΑΜΑΝΛΗΣ", t2_name: "ΚΡΙΤΣΑΛΗΣ",
    date_start: "2025-12-11 10:00:00",
    gyros: 6,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 17,
    t1_id: 5, t2_id: 2,
    t1_name: "ΚΟΝΤΟΜΗΤΡΟΣ", t2_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ",
    date_start: "2025-12-11 10:00:00",
    gyros: 6,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 18,
    t1_id: 4, t2_id: 3,
    t1_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ", t2_name: "ΔΟΞΙΑΔΗΣ",
    date_start: "2025-12-11 10:00:00",
    gyros: 6,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },

  // ---------- gyros 7 (Day 3 – PRE-LIVE) ----------
  {
    id: 19,
    t1_id: 5, t2_id: 1,
    t1_name: "ΚΟΝΤΟΜΗΤΡΟΣ", t2_name: "ΚΡΙΤΣΑΛΗΣ",
    date_start: "2025-12-11 18:00:00",
    gyros: 7,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 20,
    t1_id: 4, t2_id: 6,
    t1_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ", t2_name: "ΚΑΡΑΜΑΝΛΗΣ",
    date_start: "2025-12-11 18:00:00",
    gyros: 7,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 21,
    t1_id: 3, t2_id: 2,
    t1_name: "ΔΟΞΙΑΔΗΣ", t2_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ",
    date_start: "2025-12-11 18:00:00",
    gyros: 7,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },

  // ---------- gyros 8 (Day 4 – PRE-LIVE) ----------
  {
    id: 22,
    t1_id: 4, t2_id: 1,
    t1_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ", t2_name: "ΚΡΙΤΣΑΛΗΣ",
    date_start: "2025-12-12 10:00:00",
    gyros: 8,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 23,
    t1_id: 3, t2_id: 5,
    t1_name: "ΔΟΞΙΑΔΗΣ", t2_name: "ΚΟΝΤΟΜΗΤΡΟΣ",
    date_start: "2025-12-12 10:00:00",
    gyros: 8,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 24,
    t1_id: 2, t2_id: 6,
    t1_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ", t2_name: "ΚΑΡΑΜΑΝΛΗΣ",
    date_start: "2025-12-12 10:00:00",
    gyros: 8,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },

  // ---------- gyros 9 (Day 4 – PRE-LIVE) ----------
  {
    id: 25,
    t1_id: 3, t2_id: 1,
    t1_name: "ΔΟΞΙΑΔΗΣ", t2_name: "ΚΡΙΤΣΑΛΗΣ",
    date_start: "2025-12-12 14:00:00",
    gyros: 9,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 26,
    t1_id: 2, t2_id: 4,
    t1_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ", t2_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ",
    date_start: "2025-12-12 14:00:00",
    gyros: 9,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 27,
    t1_id: 6, t2_id: 5,
    t1_name: "ΚΑΡΑΜΑΝΛΗΣ", t2_name: "ΚΟΝΤΟΜΗΤΡΟΣ",
    date_start: "2025-12-12 14:00:00",
    gyros: 9,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },

  // ---------- gyros 10 (Day 4 – PRE-LIVE) ----------
  {
    id: 28,
    t1_id: 2, t2_id: 1,
    t1_name: "ΑΓΓΕΛΟΠΟΥΛΟΣ", t2_name: "ΚΡΙΤΣΑΛΗΣ",
    date_start: "2025-12-12 18:00:00",
    gyros: 10,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 29,
    t1_id: 6, t2_id: 3,
    t1_name: "ΚΑΡΑΜΑΝΛΗΣ", t2_name: "ΔΟΞΙΑΔΗΣ",
    date_start: "2025-12-12 18:00:00",
    gyros: 10,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
  {
    id: 30,
    t1_id: 5, t2_id: 4,
    t1_name: "ΚΟΝΤΟΜΗΤΡΟΣ", t2_name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ",
    date_start: "2025-12-12 18:00:00",
    gyros: 10,
    status: "not_started",
    boards: 12,
    score: null,
    player_prediction: 0
  },
];


// ---- TEAMS ----
export const teams = [
  {
    id: 1,
    name: "ΚΡΙΤΣΑΛΗΣ",
    short: "KRIT",
    color: "#ffb74d",
    pairs: [
      { label: "Ζεύγος 1", players: ["ΚΡΙΤΣΑΛΗΣ Φ.", "ΣΚΟΡΔΑΣ Π."] },
      { label: "Ζεύγος 2", players: ["ΠΑΠΑΣΠΥΡΟΥ Ι.", "ΣΟΥΜΠΛΗΣ Μ."] }
    ]
  },
  {
    id: 2,
    name: "ΑΓΓΕΛΟΠΟΥΛΟΣ",
    short: "AGGE",
    color: "#4dd0e1",
    pairs: [
      { label: "Ζεύγος 1", players: ["ΑΓΓΕΛΟΠΟΥΛΟΣ Π.", "ΜΠΑΛΟΚΑΣ Δ."] },
      { label: "Ζεύγος 2", players: ["ΛΕΦΑΣ Μ.", "ΜΑΡΚΑΚΗΣ Ι."] }
    ]
  },
  {
    id: 3,
    name: "ΔΟΞΙΑΔΗΣ",
    short: "DOXI",
    color: "#ba68c8",
    pairs: [
      { label: "Ζεύγος 1", players: ["ΔΟΞΙΑΔΗΣ Κ.", "ΡΟΥΣΣΟΣ Π."] },
      { label: "Ζεύγος 2", players: ["ΦΙΛΙΟΣ Α.", "ΠΑΠΑΚΥΡΙΑΚΟΠΟΥΛΟΣ Γ."] }
    ]
  },
  {
    id: 4,
    name: "ΔΙΟΝΥΣΟΠΟΥΛΟΣ",
    short: "DION",
    color: "#ff8a65",
    pairs: [
      { label: "Ζεύγος 1", players: ["ΔΙΟΝΥΣΟΠΟΥΛΟΣ Δ.", "ΜΠΟΖΕΜΠΕΡΓΚ Κ."] },
      { label: "Ζεύγος 2", players: ["ΖΩΤΟΣ Λ.", "ΚΑΝΝΑΒΟΣ Π."] }
    ]
  },
  {
    id: 5,
    name: "ΚΟΝΤΟΜΗΤΡΟΣ",
    short: "KONT",
    color: "#81c784",
    pairs: [
      { label: "Ζεύγος 1", players: ["ΚΟΝΤΟΜΗΤΡΟΣ Κ.", "ΜΑΤΖΙΑΡΗΣ Α."] },
      { label: "Ζεύγος 2", players: ["ΜΠΑΝΙΚΑΣ Χ.", "ΠΑΠΑΓΙΑΝΝΗΣ Ι."] }
    ]
  },
  {
    id: 6,
    name: "ΚΑΡΑΜΑΝΛΗΣ",
    short: "KARA",
    color: "#64b5f6",
    pairs: [
      { label: "Ζεύγος 1", players: ["ΚΑΡΑΜΑΝΛΗΣ Φ.", "ΚΟΥΚΟΥΣΕΛΗΣ Α."] },
      { label: "Ζεύγος 2", players: ["ΠΡΩΤΟΝΟΤΑΡΙΟΣ Μ.", "ΣΑΠΟΥΝΑΚΗΣ Α."] }
    ]
  }
];

// ---- VP SCALES ----
export const WBF_12_WIN = [
  10.00, 10.36, 10.71, 11.05, 11.38, 11.70, 12.01, 12.31, 12.61,
  12.90, 13.18, 13.45, 13.71, 13.97, 14.22, 14.46, 14.70, 14.93,
  15.15, 15.37, 15.58, 15.79, 15.99, 16.18, 16.37, 16.55, 16.73,
  16.91, 17.08, 17.24, 17.40, 17.56, 17.71, 17.86, 18.00, 18.14,
  18.28, 18.41, 18.54, 18.66, 18.78, 18.90, 19.02, 19.13, 19.24,
  19.34, 19.44, 19.54, 19.64, 19.74, 19.83, 19.92, 20.00
];

export const WBF_12_LOSS = [
  10.00, 9.64, 9.29, 8.95, 8.62, 8.30, 7.99, 7.69, 7.39,
  7.10, 6.82, 6.55, 6.29, 6.03, 5.78, 5.54, 5.30, 5.07,
  4.85, 4.63, 4.42, 4.21, 4.01, 3.82, 3.63, 3.45, 3.27,
  3.09, 2.92, 2.76, 2.60, 2.44, 2.29, 2.14, 2.00, 1.86,
  1.72, 1.59, 1.46, 1.34, 1.22, 1.10, 0.98, 0.87, 0.76,
  0.66, 0.56, 0.46, 0.36, 0.26, 0.17, 0.08, 0.00
];
