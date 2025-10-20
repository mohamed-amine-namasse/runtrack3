/**
 * Extrait la valeur associée à une clé spécifique d'une chaîne de caractères au format JSON.
 *
 * @param {string} jsonString La chaîne de caractères au format JSON.
 * @param {string} key La clé dont on souhaite récupérer la valeur.
 * @returns {any | undefined} La valeur associée à la clé, ou undefined si la clé n'existe pas ou si
 *  l'entrée est invalide.
 */
function jsonValueKey(jsonString, key) {
  try {
    // 1. Parser la chaîne JSON en un objet JavaScript

    const jsonObject = JSON.parse(jsonString);

    // 2. Retourner la valeur associée à la clé
    // L'utilisation de jsonObject[key] permet d'accéder à la propriété de l'objet de manière dynamique.
    return jsonObject[key];
  } catch (error) {
    // 3. Gérer les erreurs (par exemple, si la chaîne n'est pas un JSON valide)
    console.error("Erreur de parsing JSON:", error);
    return undefined; // Retourne undefined en cas d'échec
  }
}

// ---------------------------
// Exemples d'utilisation
// ---------------------------

// L'exemple de chaîne JSON
const jsonExample = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

// Cas 1: Clé "city"
const cityValue = jsonValueKey(jsonExample, "city");
console.log(`Clé "city": ${cityValue}`); // Résultat attendu : Marseille

// Cas 2: Clé "nb_staff"
const staffValue = jsonValueKey(jsonExample, "nb_staff");
console.log(`Clé "nb_staff": ${staffValue}`); // Résultat attendu : 11

// Cas 3: Clé inexistante
const countryValue = jsonValueKey(jsonExample, "country");
console.log(`Clé "country": ${countryValue}`); // Résultat attendu : undefined
