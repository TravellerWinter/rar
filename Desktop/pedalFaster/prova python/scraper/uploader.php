
<?php
try {
    $pdo = new PDO("mysql:host=89.46.111.180;dbname=Sql1418987_1;charset=utf8", "Sql1418987", "10vbm3z51o");

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



    $contents = file_get_contents("databaseOdierno.txt");

    $arr = explode("\n", $contents);
    $n = count($arr);

    if ($arr != []) {

        for ($i = 0; $i < $n; ++$i) {
            if ($arr[$i] == ""){
                break;
            }
            $sql = "INSERT INTO articles SET text = :text, date = CURDATE()";
            $stmn = $pdo->prepare($sql);
            $stmn->bindValue(":text", $arr[$i]);
            $stmn->execute();
        }

        
    }

    file_put_contents("databaseOdierno.txt", "");

} catch (PDOException $e) {
    echo $e->getMessage();
}


?>