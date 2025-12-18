<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once(dirname(__FILE__)."\PHPMailer-master/src/Exception.php");
require_once(dirname(__FILE__)."\PHPMailer-master/src/PHPMailer.php");
require_once(dirname(__FILE__)."\PHPMailer-master/src/SMTP.php");

// 네이버 SMTP 이용한 메일발송 함수 //
function mailer_naver($fname, $fmail, $tomail, $subject, $content, $file="", $cc="", $bcc="")
{
	$mail = new PHPMailer(true);
    $mail->IsSMTP();
    $mail->SMTPDebug = 1;	// 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true;	// SMTP 인증 사용함
    $mail->SMTPSecure = "ssl";	// SSL을 사용함
    $mail->Host = "smtp.naver.com";	// 보낼때 사용할 서버를 지정
    $mail->Port = "465";	// 보낼때 사용할 포트지정
    $mail->IsHTML(true);	// HTML 사용
    $mail->Username = "palace0261@naver.com";
    $mail->Password = "Sic790!@#";
    $mail->CharSet = "UTF-8";
    $mail->From = $fmail;	// 보내는 네이버메일주소
    $mail->FromName = $fname;	// 보내는이
    $mail->Subject = $subject;	// 메일 제목
    $mail->AltBody = "";	// optional, comment out and test
    $mail->msgHTML($content);	// 메일 내용
    $mail->addAddress($tomail, $toname);	// 받는사람 메일, 받는이
    if($cc) $mail->addCC($cc);
    if($bcc) $mail->addBCC($bcc);
    // 첨부파일 //
    if($file != "") {
    	foreach($file as $f) {
        	$mail->addAttachment($f['path'], $f['name']);
        }
    }
    
    return $mail->send();
}
?>
