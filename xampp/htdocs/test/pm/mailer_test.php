<html>
test
</html>

<?php
include_once('mailer.lib.php');

// mailer("보내는 사람 이름", "보내는 사람 메일주소", "받는 사람 메일주소", "제목", "내용", "1");
mailer("PHPMailer", "palace0261@naver.com", "palace0261@naver.com", "제목", "내용", 1);
?>
