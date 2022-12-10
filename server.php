<?php
$message = file_get_contents("php://input");

$file = fopen("messages.txt", "a");
fwrite($file, "$message\n");
fclose($file);

echo "$message";
?>
