<?php
/* Article FructCode.com */
if (isset($_POST["name"]) && isset($_POST["phonenumber"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    	'phonenumber' => $_POST["phonenumber"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}
if (isset($_POST["name-p"]) && isset($_POST["phonenumber-p"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name-p"],
    	'phonenumber' => $_POST["phonenumber-p"]
    ); 
}
?>
<?php
$name = $_POST["name"];
$phone = $_POST["phonenumber"];
mail("askona1995@gmail.com", "My letter", $name);
?>