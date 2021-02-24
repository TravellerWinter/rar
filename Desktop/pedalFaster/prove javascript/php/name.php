<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title></title>
</head>
<body>
    <div>
        <?php

        $firtsname = $_POST["name"];
        $secondname = $_POST["password"];

        echo "hi " . htmlspecialchars($firstname, ENT_QUOTES, "utf-8") . htmlspecialchars($secondname, ENT_QUOTES, "utf-8") ;

        ?>
    </div>
</body>
</html>