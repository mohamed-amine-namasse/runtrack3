// Le Code Konami officiel : Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A
// On utilise les codes KeyCode traditionnels ou les noms de touches (Key)
const konamiCode = ["p", "l", "a", "t", "e", "f", "o", "r", "m", "e"];

// Tableau pour stocker les dernières touches pressées par l'utilisateur
let enteredKeys = [];

// Index de la séquence attendue
let konamiIndex = 0;

// Référence au body pour appliquer le style
const body = document.body;

/**
 * Fonction de gestion des événements clavier
 * @param {KeyboardEvent} event
 */
function checkKonamiCode(event) {
  // Récupère la touche pressée. On la convertit en minuscule si ce n'est pas une flèche.
  const key = event.key;
  const expectedKey = konamiCode[konamiIndex];

  // 1. Vérifie si la touche pressée correspond à la touche attendue dans la séquence
  if (key.toLowerCase() === expectedKey || key === expectedKey) {
    // La touche est correcte, on passe à la touche suivante
    konamiIndex++;

    // 2. Vérifie si toute la séquence a été complétée
    if (konamiIndex === konamiCode.length) {
      // Code Konami réussi ! 🎉

      // Ajoute la classe de stylisation au body
      body.classList.add("konami-mode");

      // Optionnel : change le contenu
      document.getElementById("content").innerHTML =
        "<h1>Bienvenue à La Plateforme_!</h1><p>Le style a été appliqué !</p>";

      // Désactive l'écouteur pour ne pas réagir à d'autres séquences (facultatif)
      document.removeEventListener("keydown", checkKonamiCode);

      console.log("Konami Code réussi! Mode stylisé activé.");
    }
  } else {
    // La touche est incorrecte, réinitialise la séquence
    konamiIndex = 0;
  }
}

// Attache l'écouteur d'événement 'keydown' au document entier
document.addEventListener("keydown", checkKonamiCode);
