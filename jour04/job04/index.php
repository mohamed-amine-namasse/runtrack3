<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
    <script src="./script.js" defer></script>

</head>


<body>


    <h1>Liste des Utilisateurs</h1>

    <button id="updateButton" onclick=citation()><b>Mettre à jour les données</b></button>

    <table id=" usersTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom </th>
                <th>Prénom </th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody id="usersTableBody">
            <tr>
                <td colspan="4">Cliquez sur "Mettre à jour" pour charger les utilisateurs.</td>
            </tr>
        </tbody>
    </table>

    <p id="statusMessage"></p>







</body>

</html>