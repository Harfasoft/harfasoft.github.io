<?php
$para ='harfasoft@harfasoft.com, ingenieria@harfasoft.com, harfasoft@gmail.com';

$asunto ='Mensaje desde harfasoft.com';

$mailheader = "From: ".$_POST["txtEmail"]."\r\n";
$mailheader .= "Reply-To: ".$_POST["txtEmail"]."\r\n";
$mailheader .= "Content-type: text/html; charset=utf8\r\n";

$MESSAGE_BODY = "Nombres: ".$_POST["txtFullName"]."\n";
$MESSAGE_BODY .= "\n<br>Email: ".$_POST["txtEmail"]."\n";
$MESSAGE_BODY .= "\n<br>Servicios: ".$_POST["selectServicio"]."\n";
$MESSAGE_BODY .= "\n<br>Mensaje: ".nl2br($_POST["textaMessages"])."\n";

mail($para, $asunto, $MESSAGE_BODY, $mailheader) or die("Error al enviar email");
header('Location: https://harfasoft.com/contacto')
?>