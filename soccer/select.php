<?php
try {
  // $pdo = new PDO('mysql:dbname=soccer_db;charset=utf8;host=localhost','root','');
  $pdo = new PDO();
} catch (PDOException $e) {
  exit('DBConnection Error:'.$e->getMessage());
}


$stmt = $pdo->prepare("SELECT * FROM stadium_table");
$status = $stmt->execute();

$view="";
if($status==false) {
  $error = $stmt->errorInfo();
  exit("SQL_ERROR:".$error[2]);

}else{
  while( $res = $stmt->fetch(PDO::FETCH_ASSOC)){
      $view .= '<p>';
      $view .= $res['id'].'<br>';
      $view .= '<a href="'.$res['url'].'">'.$res['stadium'].'</a><br>';
      $view .= $res['comment'];
      $view .= '</p>';
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



