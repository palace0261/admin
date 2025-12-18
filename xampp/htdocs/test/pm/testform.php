<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'pmm/src/Exception.php';
require 'pmm/src/PHPMailer.php';
require 'pmm/src/SMTP.php';


// ex) mailer("kOO", "zzxp@naver.com", "zzxp@naver.com", "제목 테스트", "내용 테스트", 1);
//function mailer($fname, $fmail, $to, $subject, $content, $type=0, $file="", $cc="", $bcc="")

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.naver.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'palace0261';                 // SMTP username
    $mail->Password = 'Sic790!@#';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                           
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('palace0261@naver.com');
    $mail->addAddress($_POST['mail']);     // Add a recipient



    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $_POST['subject'];
    $mail->Body    = $_POST['text'];
    $mail->file    = $_POST['file'];

    if ($file != "") {
        foreach ($file as $f) {
            $mail->addAttachment($f['path'], $f['name']);
        }
    }
    

    return $mail->send();
    
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}


function attach_file($filename, $tmp_name)
{
    // 서버에 업로드 되는 파일은 확장자를 주지 않는다. (보안 취약점)
    $dest_file = '경로지정/tmp/'.str_replace('/', '_', $tmp_name);
    move_uploaded_file($tmp_name, $dest_file);
    $tmpfile = array("name" => $filename, "path" => $dest_file);
    return $tmpfile;
}
?>