<?php
$hostname = "localhost";
$username = "globalmarket";
$password = "globalmarket123";
$database = "globalmarket";
$conn = new mysqli($hostname, $username, $password, $database);
if ($conn ->connect_error) {
die('Error de Conexión (' . $conn->connect_errno . ') ' . $conn->connect_error);
} /*else {
    echo $conn ->host_info;
    }*/
?>