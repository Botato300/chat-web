<?php
$file = fopen("messages.txt", "r");
$fileSize = filesize("messages.txt");

if($fileSize > 0){
    $content = fread($file, $fileSize);
    echo "$content";
}

fclose($file);

?>