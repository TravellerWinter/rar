<?php
   
if(isset($_POST["joketext"])){

try{
    $pdo = new PDO("mysql:host=89.46.111.123;dbname=Sql1357157_1;charset=utf8", "Sql1357157", "8b0640k42a");

	$sql = "INSERT INTO joke SET
            joketext = :joketext,
            jokedate =  CURDATE();";
    
    $prepared = $pdo->prepare($sql);


	$prepared->bindvalue( ":joketext" , $_POST["joketext"]);


	$prepared->execute();
	header("location: indexShow.php");


}catch(PDOException $e){

  echo "unable to connect to the server";
}


}







?>