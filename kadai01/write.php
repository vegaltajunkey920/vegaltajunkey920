<?php
$name = $_POST["name"];
$mail = $_POST["mail"];
$person = $_POST["person"];
$place = $_POST["place"];
$cost = $_POST["cost"];


$str = date("Y-m-d H:i:s").",".$name.",".$mail.",".$person.",".$place.",".$cost;

$file = fopen("data/data.txt","a");	
fwrite($file, $str."\n");
fclose($file);
?>


<html>
<head>
<meta charset="utf-8">
<title>File書き込み</title>
</head>
<body>
<h1>書き込みしました。</h1>
<p><a href="read.php">結果発表！</a></p>
</body>
</html>