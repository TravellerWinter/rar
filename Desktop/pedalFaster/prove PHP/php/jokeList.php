<?php
try{
  include __DIR__ . "/../includes/databaseConnection.php";

$sql = "SELECT id, joketext FROM joke";

$result = $pdo->query($sql);

while($row = $result->fetch()){
  $jokes[] = array("joketext" => $row["joketext"], "id" => $row["id"]);
}

if(isset($jokes)){
    foreach($jokes as $joke){
	$outputText .= "<p>" . htmlspecialchars($joke["joketext"], ENT_QUOTES, "UTF-8") . "</p>" . '<form action="php/delete.php" method="post"><input type="hidden" name="id" value="' . $joke["id"] . '" />' . '<input type="submit" value="delete" /></form >';  
  }  
}else{
  echo "There are not jokes in the database :(";
}


} catch(PDOException $e) {
   echo "There are not jokes in the database :(";
}


?>

