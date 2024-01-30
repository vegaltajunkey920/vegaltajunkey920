<?php
//1. POSTデータ取得
$stadium = $_POST['stadium'];
$url     = $_POST['url'];
$comment = $_POST['comment'];
$id    = $_POST["id"];   //idを取得

//2. DB接続します
include("funcs.php");  //funcs.phpを読み込む（関数群）
$pdo = db_conn();      //DB接続関数

//３．データ登録SQL作成
$sql = "UPDATE stadium_table SET stadium=:stadium, url=:url, comment=:comment WHERE id=:id";
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':stadium', $stadium, PDO::PARAM_STR);  
$stmt->bindValue(':url', $url, PDO::PARAM_STR);  
$stmt->bindValue(':comment', $comment, PDO::PARAM_STR);  
$stmt->bindValue(':id',$id,  PDO::PARAM_INT); 
$status = $stmt->execute();


if($status==false){
    sql_error($stmt);
}else{
    redirect("select.php");
}

?>
