document.getElementById("filterButton").addEventListener("click", filterData);

function filterData() {
  // Récupérer les valeurs des champs du formulaire
  const idVal = document.getElementById("idFilter").value.trim();
  // On récupère la valeur saisie pour le nom
  const nomSaisi = document
    .getElementById("nomFilter")
    .value.trim()
    .toLowerCase();
  const typeVal = document.getElementById("typeFilter").value;
  const resultsContainer = document.getElementById("results");

  resultsContainer.innerHTML = "Chargement des données Pokémon...";

  fetch("pokemon.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // 3. Filtrer les données
      const filteredData = data.filter((item) => {
        let matches = true;

        // IMPORTANT : Vérifier que l'objet 'name' et 'french' existent pour éviter les erreurs.
        const pokemonName =
          item.name && item.name.french ? item.name.french.toLowerCase() : "";

        // Critère ID
        if (idVal && item.id !== parseInt(idVal, 10)) {
          matches = false;
        }

        // Critère Nom (recherche basée sur le nom en français)
        // 💡 Changement ici pour utiliser pokemonName
        if (matches && nomSaisi && !pokemonName.includes(nomSaisi)) {
          matches = false;
        }

        // Critère Type (si votre clé de type est "type" dans le JSON)
        if (matches && typeVal && item.type !== typeVal) {
          matches = false;
        }

        return matches;
      });

      // Afficher les résultats
      displayResults(filteredData, resultsContainer);
    })
    .catch((error) => {
      console.error(
        "Erreur lors de la récupération ou du traitement des données:",
        error
      );
      resultsContainer.innerHTML = `<p style="color: red;">Erreur de chargement ou de traitement des données. (Détails: ${error.message})</p>`;
    });
}

function displayResults(data, container) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML =
      "<p>Aucun Pokémon ne correspond aux critères de recherche.</p>";
    return;
  }

  const ul = document.createElement("ul");

  data.forEach((item) => {
    const li = document.createElement("li");
    li.className = "result-item";

    // Accéder à la sous-propriété 'french' de l'objet 'name'
    const pokemonFrenchName =
      item.name && item.name.french ? item.name.french : "Nom non disponible";

    li.innerHTML = `
            <p style="margin: 0;">
                <strong>ID:</strong> ${item.id} - 
                <strong>Nom (FR):</strong> ${pokemonFrenchName} - 
                <strong>Type:</strong> ${item.type}
            </p>
        `;
    ul.appendChild(li);
  });

  container.appendChild(ul);
}
