document.getElementById("updateButton").addEventListener("click", fetchUsers);

/**
 * Récupère les données des utilisateurs via fetch et met à jour le tableau.
 */
function fetchUsers() {
  const tableBody = document.getElementById("usersTableBody");
  const statusMessage = document.getElementById("statusMessage");

  tableBody.innerHTML = '<tr><td colspan="4">Chargement...</td></tr>';
  statusMessage.textContent = "Connexion à la base de données...";

  // 1. Appel de l'API PHP
  fetch("users.php")
    .then((response) => {
      // Vérifie le statut HTTP avant de tenter de lire le JSON
      if (!response.ok) {
        throw new Error(
          `Erreur HTTP: ${response.status} - Le fichier users.php n'est pas accessible ou une erreur serveur s'est produite.`
        );
      }
      return response.json();
    })
    .then((result) => {
      // Vérifie si le PHP a renvoyé un succès
      if (result.success && Array.isArray(result.data)) {
        displayUsers(result.data, tableBody);
        statusMessage.textContent = `✅ ${result.data.length} utilisateurs chargés avec succès.`;
      } else {
        // Gère l'erreur renvoyée par le PHP
        throw new Error(
          `Erreur dans les données : ${
            result.error || "Format de données inattendu."
          }`
        );
      }
    })
    .catch((error) => {
      // Gère les erreurs de réseau ou de parsing
      tableBody.innerHTML = `<tr><td colspan="4" style="color: red;">Erreur de chargement des données.</td></tr>`;
      statusMessage.textContent = `❌ Erreur : ${error.message}`;
      console.error("Erreur:", error);
    });
}

/**
 * Construit les lignes du tableau à partir des données des utilisateurs.
 * @param {Array<Object>} users - Le tableau d'objets utilisateur.
 * @param {HTMLElement} tableBody - Le <tbody> du tableau.
 */
function displayUsers(users, tableBody) {
  tableBody.innerHTML = ""; // Nettoyer le contenu actuel

  if (users.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="4">Aucun utilisateur trouvé dans la base de données.</td></tr>';
    return;
  }

  users.forEach((user) => {
    const row = tableBody.insertRow();

    // Insérer les cellules et leurs contenus
    row.insertCell().textContent = user.id;
    row.insertCell().textContent = user.nom;
    row.insertCell().textContent = user.prenom;
    row.insertCell().textContent = user.email;
  });
}
