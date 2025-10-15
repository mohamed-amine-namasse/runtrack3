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
