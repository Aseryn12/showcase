<?php

try{
    $pdo = new PDO('mysql:host=localhost;port=3306; dbname=testapplication', 'root', '');
    $pdo->exec('SET NAMES "utf8"');
}
catch(ODOException $e){
    echo "Невозможно установить соединение с базой данных";
    exit();
}
?>