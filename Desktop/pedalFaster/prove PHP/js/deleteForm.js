// JavaScript source code



var $p = $("p");

var form = '<form action="php/delete.php" method="post"><?php echo \'<input type="hidden" name="id" value="\' . $outputId . \'" />\'; ?><input type="submit" value="delete" /></form >';

$p.after(form);




 