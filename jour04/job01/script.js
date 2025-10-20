document.getElementById("button").addEventListener("click", () => {
  // Utilisation de Fetch pour récupérer le contenu de expression.txt
  fetch("expression.txt")
    .then((response) => {
      // Vérifier si la requête a réussi (statut 200-299)
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
      // Extrait le contenu du corps de la réponse en tant que texte
      return response.text();
    })
    .then((data) => {
      // Créer un nouvel élément paragraphe
      const paragraph = document.createElement("p");
      // Placer le contenu récupéré dans le paragraphe
      paragraph.textContent = data;
      // Insèrer le paragraphe dans le corps de la page
      document.body.appendChild(paragraph);
    })
    .catch((error) => {
      // Gèrer les erreurs (réseau, fichier introuvable, etc.)
      console.error("Erreur lors de la récupération du fichier:", error);
      alert(
        "Impossible de charger l'expression. Voir la console pour les détails."
      );
    });
});
