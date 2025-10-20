<?php
$db_server = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "utilisateurs";
$conn = "";


try {
    $conn = new PDO("mysql:host=$db_server;dbname=$db_name;", $db_user, $db_password);
    // Active le mode exception pour les erreurs SQL
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion PDO : " . $e->getMessage());
}

try {
    //on établit la connexion avec la base de donnée utilisateurs
    $stmt = $conn->prepare("SELECT * FROM utilisateurs");
    $stmt->execute();
    $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // Envoi de l'en-tête JSON
    header('Content-Type: application/json');

    // Affichage des données au format JSON
    echo json_encode(['success' => true, 'data' => $user]);
} catch (\PDOException $e) {
    // Gestion des erreurs
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'success' => false,
        'error' => 'Erreur de base de données : ' . $e->getMessage()
    ]);
}
