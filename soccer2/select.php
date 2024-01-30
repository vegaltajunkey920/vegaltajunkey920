<?php
include("funcs.php");  //funcs.phpを読み込む（関数群）
$pdo = db_conn();      //DB接続関数


$stmt = $pdo->prepare("SELECT * FROM stadium_table");
$status = $stmt->execute();

//３．データ表示
$view=""; //HTML文字列作り、入れる変数
if($status==false) {
  //SQLエラーの場合
  sql_error($stmt);
}else{
  //SQL成功の場合
  while( $r = $stmt->fetch(PDO::FETCH_ASSOC)){ //データ取得数分繰り返す
    //以下でリンクの文字列を作成, $r["id"]でidをdetail.phpに渡しています
    $view .= '<a href="detail.php?id='.h($r["id"]).'">';
    $view .= h($r["id"])."|".h($r["stadium"])."|".h($r["comment"]);
    $view .= '</a>';
    $view .= '<a href="'.h($r["url"]).'" target="_blank">'.h($r["url"]).'</a>';

    $view .= '<a href="delete.php?id='.h($r["id"]).'">';
    $view .= '[削除]</a><br>';
  }
}
?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ベガルタ</title>
<link rel="stylesheet" href="css/range.css">
<link href="css/bootstrap.min.css" rel="stylesheet">
<style>div{padding: 10px;font-size:16px;}</style>
</head>
<body id="main">


<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand" href="index.php">アウェイゲームリスト</a>
      </div>
    </div>
  </nav>
</header>

<div>
    <div class="container jumbotron"><?=$view?></div>
</div>

</body>
</html>


<?php



