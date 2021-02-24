<?php
 $pdo = new PDO("mysql:host=89.46.111.180;dbname=Sql1418987_1;charset=utf8", "Sql1418987", "10vbm3z51o");

 $sql= ' DELETE FROM jokes WHERE id = :id';

 $result = $pdo->prepare($sql);
 $result->bindValue(':id', $_POST["id"]);
 $result->execute();

 header("location: ../index.php");

?>