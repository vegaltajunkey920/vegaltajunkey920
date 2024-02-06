<?php
//1. GETデータ取得
$id   = $_GET["id"];

//2. DB接続します
include("funcs.php");  
sschk();
$pdo = db_conn();      //DB接続関数

//３．データ登録SQL作成
$stmt = $pdo->prepare("DELETE FROM stadium_table where id=:id");
$stmt->bindValue(':id',$id, PDO::PARAM_INT);  //Integer（数値の場合 PDO::PARAM_INT)
$status = $stmt->execute(); //実行

//４．データ登録処理後
if($status==false){
    sql_error($stmt);
}else{
    redirect("select.php");
}

?>
