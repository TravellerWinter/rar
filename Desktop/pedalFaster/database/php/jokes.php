<?php
 
   
 $pdo = new PDO("mysql:host=89.46.111.180;dbname=Sql1418987_1;charset=utf8", "Sql1418987", "10vbm3z51o");

 $sql = 'SELECT jokes.id, joketext, name FROM jokes INNER JOIN author on authorid = author.id';

 $result = $pdo->query($sql);

 while($row = $result->fetch()){
 
 $jokes[] = $row;

}

foreach($jokes as $joke){
  echo '<div class="jokes">' .'<p>' . $joke["joketext"] . '(by ' . $joke["name"]. ' )' .'<form method="post" action="php/delete.php"><input type="hidden" name="id" value="' . $joke["id"] . '" /><input type="submit" value="Delete" /></form>' .'</p>' . '</div>';
}




?>