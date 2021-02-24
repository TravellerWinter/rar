<?php

   try{

       $pdo = new PDO("mysql:host=89.46.111.123;dbname=Sql1357157_1;charset=utf8", "Sql1357157", "8b0640k42a");
       $sql = 'SELECT joketext FROM joke';
       $result = $pdo->query($sql);
       

       foreach($result as $row){     // foreach estrae tutti gli elementi dell'array $result, siccome $result contiene come elemnti altri array, $row ciene salvato nell'array $jokes
         $jokes[] = $row["joketext"];

             
       }
       foreach($jokes as $joke){                            // vengono estratti gli elementi da $jokes e messi nella variabile $row che si aggiorna ad ogni ciclo
                echo "<p>" . htmlspecialchars($joke, ENT_QUOTES, 'UTF-8') . "</p>" . "<br />";
            }   
   }catch(PDOexception $e){
    echo "unable to access to the server";
   }
    


?>