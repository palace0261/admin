<?php
$servername = "localhost/phpmyadmin";
$username = "root";
$password = "palace0261";
$database = "es_testtable";

// 연결 생성
$conn = mysqli_connect($servername, $username, $password, $database);

// 연결 확인
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>