<?php
try{
    include "php/connessioneServer.php";

$sql = "SELECT text FROM articles";

$res = $pdo->query($sql);

while($row = $res->fetch()){
    $text[] = $row;
    
}

foreach($text as $i){
    echo $i["text"];
}
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>
