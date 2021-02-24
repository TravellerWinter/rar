

<div id="dice">
    
    
    <?php 
    $dice = rand(1, 6);
    $respond = '<p>you have rolled a ' . $dice . '</p>';
    echo $respond;

    if($dice == 6){
    
    echo '<p>You win!!</p>';
    
    }

    ?>




</div>