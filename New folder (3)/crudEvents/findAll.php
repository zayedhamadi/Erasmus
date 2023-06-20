<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET");

header("Content-Type: application/json; charset=UTF-8");

require_once "crud.php";    
$crud = new crud();
$events = $crud->findAll();
echo json_encode($events);

?>


