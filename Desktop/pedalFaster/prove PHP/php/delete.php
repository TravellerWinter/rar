<?php
$pdo = new PDO("mysql:host=89.46.111.123;dbname=Sql1357157_1;charset=utf8", "Sql1357157", "8b0640k42a");

$sql = "DELETE FROM joke WHERE id = :id";
$result = $pdo->prepare($sql);
$result->bindValue(":id", $_POST["id"]);
$result->execute();
header("location: ../indexShow.php");

?>