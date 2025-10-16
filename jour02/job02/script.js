function showhide() {
  const existingArticle = document.getElementById("citation");

  if (existingArticle) {
    // Si l'article existe déjà, on le supprime
    existingArticle.remove();
  } else {
    // Sinon, on le crée et on l'ajoute au body
    const article = document.createElement("article");
    article.id = "citation";
    article.textContent =
      "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(article);
  }
}
