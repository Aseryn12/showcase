<?php
    include '../DBconnect/connect.php';

    $rawInput = file_get_contents('php://input');
    $request = json_decode($rawInput, true);
    
    $sql = $pdo->prepare("UPDATE `applications` SET `status` = 'Обрабатывается' WHERE `id` = :id");
    
    try{   
        $sql->execute([
            ':id' => $request['id']
        ]);
        echo "All good";
    }
    catch(PDOException $e){
        echo "Select error", $e->getMessage();
    }
?>