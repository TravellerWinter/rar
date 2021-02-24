
<?php
try {
    $PDO = new PDO("mysql:host=89.46.111.123;dbname=Sql1357157_1;charset=utf8", "Sql1357157", "8b0640k42a");
	

	$sql = "INSERT INTO joke SET joketext='!false it\'s funny because it\'true.', jokedate='2019-10-12'";
	$exec = $PDO->exec($sql);
	$output = "Updated " . $exec . " rows";
}catch (PDOexception $e){
	$output = "Unable to connect to the server" . $e->getMessage() . "in" . $e.getFile() . ":" . $e.getLine();
}

?>