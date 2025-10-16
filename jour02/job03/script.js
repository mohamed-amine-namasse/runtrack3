// Fonction pour incrémenter le compteur
function addone() {
  // 1. Récupérer l'élément du compteur
  const compteurElement = document.getElementById("compteur");

  // 2. Récupérer la valeur actuelle (qui est une chaîne de caractères)
  let valeurActuelle = compteurElement.textContent;

  // 3. Convertir la valeur en nombre, l'incrémenter
  let nouvelleValeur = parseInt(valeurActuelle) + 1;

  // 4. Mettre à jour le contenu de l'élément <p>
  compteurElement.textContent = nouvelleValeur;
}

// 1. Récupérer l'élément du bouton
const bouton = document.getElementById("button");

// 2. Attacher l'écouteur d'événement 'click' au bouton
// La fonction "addone" sera appelée à chaque événement click
bouton.addEventListener("click", addone);
