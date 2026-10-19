<?php
    include '../DBConnect/connect.php';

    $rawInput = file_get_contents('php://input');
    $request = json_decode($rawInput, true);

    $sql = "SELECT * FROM `applications` WHERE `status` = '" . $request['status'] . "' ORDER BY `id` DESC";

    try{
        $result = $pdo->query($sql);
        $forReturn = $result->fetchAll();
        echo json_encode($forReturn);
    }
    catch(PDOException $e){
        echo "Select error", $e->getMessage();
    }
?>