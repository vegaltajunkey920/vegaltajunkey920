<?php

$stadium = $_POST['stadium'];
$url = $_POST['url'];
$comment = $_POST['comment'];

try {
  // $pdo = new PDO('mysql:dbname=soccer_db;charset=utf8;host=localhost','root','');
  $pdo = new PDO();
} catch (PDOException $e) {
  exit('DBConnection Error:'.$e->getMessage());
}


$stmt = $pdo->prepare("INSERT INTO stadium_table ( stadium, url, comment, indate ) VALUES( :stadium, :url, :comment, sysdate())");
$stmt->bindValue(':stadium', $stadium, PDO::PARAM_STR);  
$stmt->bindValue(':url', $url, PDO::PARAM_STR);  
$stmt->bindValue(':comment', $comment, PDO::PARAM_STR);  
$status = $stmt->execute();


if($status==false){
  $error = $stmt->errorInfo();
  exit("SQL_ERROR:".$error[2]);
}else{
  header("Location: index.php");
  exit();
}
?>


















