// Récupère l'élément textarea
const keyloggerArea = document.getElementById("keylogger");

// Fonction exécutée à chaque pression de touche sur le document entier
document.addEventListener("keydown", function (event) {
  // Récupère la touche pressée et la convertit en minuscule
  const key = event.key.toLowerCase();

  // Vérifie si la touche est une lettre de a à z
  if (key.length === 1 && key.match(/[a-z]/)) {
    // Détermine si le focus est dans le textarea
    // document.activeElement est l'élément HTML qui a le focus
    const isFocused = document.activeElement === keyloggerArea;

    // Contenu à ajouter
    let contentToAdd = key;

    // Si le focus est dans le textarea, la lettre doit être ajoutée deux fois
    if (isFocused) {
      contentToAdd += key; // Ajoute la lettre une seconde fois

      // Empêche la lettre d'être ajoutée normalement par le navigateur
      // dans le textarea (sinon elle apparaîtrait 3 fois : 2 par le script + 1 par défaut)
      event.preventDefault();
    }

    // Ajoute le contenu (une ou deux lettres) à la fin du textarea
    keyloggerArea.value += contentToAdd;

    // Défile vers le bas pour toujours voir les dernières lettres
    keyloggerArea.scrollTop = keyloggerArea.scrollHeight;
  }
  // Pour les autres touches (espace, chiffres, etc.), le comportement par défaut est maintenu.
});
