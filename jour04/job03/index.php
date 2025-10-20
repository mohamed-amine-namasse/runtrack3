<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./script.js" defer></script>

</head>


<body>

    <body>
        <h1>Filtre de Données</h1>

        <form id="filterForm">
            <label for="idFilter">ID :</label>
            <input type="text" id="idFilter" name="id" placeholder="Ex: 1 ou 4">

            <label for="nomFilter">Nom :</label>
            <input type="text" id="nomFilter" name="nom" placeholder="Ex: Pikachu">

            <label for="typeFilter">Type :</label>
            <select id="typeFilter" name="type">
                <option value="">-- Tous les types --</option>
                <option value="Electrique">Electrique</option>
                <option value="Plante">Plante</option>
                <option value="Eau">Eau</option>
                <option value="Feu">Feu</option>
                <option value="Normal">Normal</option>
            </select>

            <input type="button" id="filterButton" value="Filtrer">
        </form>
        <br>
        <hr>

        <h2>Résultats</h2>
        <div id="results">
            <p>Cliquez sur "Filtrer" pour voir les résultats.</p>
        </div>
    </body>




</body>

</html>