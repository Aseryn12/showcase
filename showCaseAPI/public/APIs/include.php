<?php
    include '../DBconnect/connect.php';

    $rawInput = file_get_contents('php://input');
    $request = json_decode($rawInput, true);
    
    $sql = $pdo->prepare("INSERT INTO `applications`(`text`, `status`, `timestamp`) VALUES (:text,:status,:timestamp)");
    
    try{   
        $sql->execute([
            ':text' => $request['text'],
            ':status' => $request['status'],
            ':timestamp' => $request['timestamp']
        ]);
        echo $pdo->lastInsertId();
    }
    catch(PDOException $e){
        echo "Select error", $e->getMessage();
    }
?>