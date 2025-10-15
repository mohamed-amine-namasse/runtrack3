function jourtravaille(date) {
  const joursFeries2020 = [
    "2020-01-01",
    "2020-04-13",
    "2020-05-01",
    "2020-05-08",
    "2020-05-21",
    "2020-06-01",
    "2020-07-14",
    "2020-08-15",
    "2020-11-01",
    "2020-11-11",
    "2020-12-25",
  ];

  const annee = date.getFullYear();
  const mois = date.getMonth() + 1; // Mois de 1 à 12
  const jour = date.getDate();

  // Format YYYY-MM-DD pour comparer
  const dateISO = date.toISOString().split("T")[0];

  if (annee !== 2020) {
    console.log("Cette fonction ne gère que l'année 2020.");
    return;
  }

  // Vérifie si c'est un jour férié
  if (joursFeries2020.includes(dateISO)) {
    console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
  }
  // Vérifie si samedi (6) ou dimanche (0)
  else if (date.getDay() === 0 || date.getDay() === 6) {
    console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
  } else {
    console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
  }
}

// Exemple d'utilisation
jourtravaille(new Date("2020-01-01")); // Jour férié
jourtravaille(new Date("2020-07-18")); // Samedi
jourtravaille(new Date("2020-07-20")); // Jour travaillé
jourtravaille(new Date("2019-01-01")); // Année non gérée
