<?php

/**
 * PHPMailer simple file upload and send example.
 */

//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'pmm/src/Exception.php';
require 'pmm/src/PHPMailer.php';
require 'pmm/src/SMTP.php';

$msg = '';
if (array_key_exists('userfile', $_FILES)) {
    //First handle the upload
    //Don't trust provided filename - same goes for MIME types
    //See https://www.php.net/manual/en/features.file-upload.php#114004 for more thorough upload validation
    //Extract an extension from the provided filename
    $ext = PHPMailer::mb_pathinfo($_FILES['userfile']['name'], PATHINFO_EXTENSION);
    //Define a safe location to move the uploaded file to, preserving the extension
    $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['userfile']['name'])) . '.' . $ext;

    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
        //Upload handled successfully
        //Now create a message






 $mail = new PHPMailer();

        
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.naver.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'palace0261';                 // SMTP username
    $mail->Password = 'Sic790!@#';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                           
    $mail->Port = 465;  

    
        $mail->setFrom('palace0261@naver.com', 'First Last');
        $mail->addAddress('palace0261@naver.com', 'John Doe');
        $mail->Subject = 'PHPMailer file sender';
        $mail->Body = 'My message body';
        //Attach the uploaded file
        if (!$mail->addAttachment($uploadfile, $_FILES['userfile']['name'])) {
            //If we can't attach the file, we should delete it
            $msg .= 'Failed to attach file ' . $_FILES['userfile']['name'];
        }
        if (!$mail->send()) {
            $msg .= 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            $msg .= 'Message sent!';
        }
    } else {
        $msg .= 'Failed to move file to ' . $uploadfile;
    }
}
?>