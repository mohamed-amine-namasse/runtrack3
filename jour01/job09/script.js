function tri(numbers, order) {
  // Copie du tableau pour ne pas modifier l'original
  let arr = numbers.slice();

  // Bubble sort personnalisé
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (order === "asc") {
        if (arr[j] > arr[j + 1]) {
          // échange
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      } else if (order === "desc") {
        if (arr[j] < arr[j + 1]) {
          // échange
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      } else {
        throw new Error("Le paramètre 'order' doit être 'asc' ou 'desc'");
      }
    }
  }

  return arr;
}

// Tests
console.log(tri([5, 3, 8, 4, 2], "asc")); // [2, 3, 4, 5, 8]
console.log(tri([5, 3, 8, 4, 2], "desc")); // [8, 5, 4, 3, 2]
