<?php
    $servername = "localhost";
    $username = "eduardo";
    $password = "";
    $database = "angular";

    $pdo = new PDO(sprintf("mysql:host=%s;dbname=%s", $servername, $database), $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_AUTOCOMMIT, FALSE);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES,TRUE);

    $query = "SELECT id, name FROM products";

    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $products = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    echo json_encode($products);