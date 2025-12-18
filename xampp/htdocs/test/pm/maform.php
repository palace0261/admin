<?php
include_once('mailer.lib.php');

// mailer("보내는 사람 이름", "보내는 사람 메일주소", "받는 사람 메일주소", "제목", "내용", "1");
mailer("PHPMailer", "palace0261@naver.com", "palace0261@naver.com", "제sa목", "내용", 1);
?>



<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail</title>

</head>
<body>

<form action="maform.php" method="post">

<input type="text">

</form>
    
</body>
</html>