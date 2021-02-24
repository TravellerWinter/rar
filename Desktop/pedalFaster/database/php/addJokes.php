<?php

if(isset($_POST["joketext"])){


 $pdo = new PDO("mysql:host=89.46.111.180;dbname=Sql1418987_1;charset=utf8", "Sql1418987", "10vbm3z51o");

     $sql = 'INSERT INTO jokes SET 
             joketext = :joketext,
             jokedate = CURDATE()';

     $pdst = $pdo->prepare($sql);

     $pdst->bindValue(':joketext', $_POST["joketext"]);

     $pdst->execute();

     header("location: index.php");


   




}





























?>