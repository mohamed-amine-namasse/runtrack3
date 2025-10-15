// Fonction qui vérifie si un nombre est premier
function estPremier(n) {
  if (n < 2) return false; // Les nombres < 2 ne sont pas premiers
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // Si n est divisible par i, ce n'est pas un nombre premier
  }
  return true; // Sinon, c'est un nombre premier
}
// Fonction qui retourne la somme si les deux nombres sont premiers, sinon false
function sommenombrespremiers(a, b) {
  if (estPremier(a) && estPremier(b)) {
    return a + b;
  } else {
    return false;
  }
}

// Tests
console.log(sommenombrespremiers(3, 7)); // 10
console.log(sommenombrespremiers(4, 7)); // false
console.log(sommenombrespremiers(11, 13)); // 24
console.log(sommenombrespremiers(9, 17)); // false
