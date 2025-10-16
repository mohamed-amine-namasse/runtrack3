// Fonction pour mettre à jour la couleur du footer en fonction du défilement
function updateFooterColor() {
  const footer = document.querySelector("footer");

  // 1. Calculer la hauteur totale de défilement possible (scrollableHeight)
  // document.documentElement.scrollHeight = Hauteur totale du contenu du document
  // document.documentElement.clientHeight = Hauteur visible de la fenêtre (viewport)
  const scrollableHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // 2. Récupérer la position actuelle du défilement vertical (scrollTop)
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  // 3. Calculer le pourcentage de progression (0 à 1)
  // Si scrollableHeight est 0 (pas de défilement possible), on évite la division par zéro
  let scrollProgress = 0;
  if (scrollableHeight > 0) {
    scrollProgress = scrollTop / scrollableHeight;
  }

  // 4. Convertir la progression en valeurs de couleur (par exemple, du bleu au rouge)
  // On utilise HSL (Hue, Saturation, Lightness) car c'est facile de faire varier la Tonalité (Hue)
  // Tonalité (Hue) : 240 (Bleu) à 0 (Rouge)
  // On inverse 1 - scrollProgress pour commencer en bas (bleu) et finir en haut (rouge)
  const hue = (1 - scrollProgress) * 240; // Commence à 240 (bleu) et va vers 0 (rouge)

  // Saturation: 100%, Luminosité: 50%
  const newColor = `hsl(${hue}, 100%, 50%)`;

  // 5. Appliquer la nouvelle couleur au style du footer
  footer.style.backgroundColor = newColor;

  // Optionnel : Afficher la progression dans la console
  // console.log(`Progression: ${(scrollProgress * 100).toFixed(2)}% | Couleur: ${newColor}`);
}

// Écoute l'événement de défilement (scroll) sur la fenêtre
window.addEventListener("scroll", updateFooterColor);

// Appelle la fonction une fois au chargement pour définir la couleur initiale
updateFooterColor();
