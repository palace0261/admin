<?php
$conn = new mysqli("palace7901.godomall.com", "giangdb", "Giang0308!@#", "palace7901_godomall_com");
if ($conn->connect_error) {
    die("연결 실패: " . $conn->connect_error);
}
echo "연결 성공";
?>


