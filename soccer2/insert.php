<?php

$stadium = $_POST['stadium'];
$url     = $_POST['url'];
$comment = $_POST['comment'];

include("funcs.php");
$pdo = db_conn();


$stmt = $pdo->prepare("INSERT INTO stadium_table ( stadium, url, comment, indate ) VALUES( :stadium, :url, :comment, sysdate())");
$stmt->bindValue(':stadium', $stadium, PDO::PARAM_STR);  
$stmt->bindValue(':url', $url, PDO::PARAM_STR);  
$stmt->bindValue(':comment', $comment, PDO::PARAM_STR);  
$status = $stmt->execute();

if($status==false){
  sql_error($stmt);
}else{
  redirect("index.php");

}

?>















