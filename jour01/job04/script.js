function bisextile(annee) {
  // Une année est bissextile si elle est divisible par 4
  // sauf si elle est divisible par 100, sauf si elle est aussi divisible par 400
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Exemple d'utilisation dans la console
console.log("2024 est-elle bissextile ? " + bisextile(2024)); // true
console.log("1900 est-elle bissextile ? " + bisextile(1900)); // false
console.log("2000 est-elle bissextile ? " + bisextile(2000)); // true
