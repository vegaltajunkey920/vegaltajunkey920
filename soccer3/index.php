<?php
session_start();
include("funcs.php");  //funcs.phpを読み込む（関数群）
sschk();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>予定登録</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<?php echo $_SESSION["name"]; ?>さん　
<?php include("menu.php"); ?>
<form method="POST" action="insert.php">
  <div class="jumbotron">
   <fieldset>
    <legend>2024年に行くスタジアム</legend>
     <label>スタジアム名：<input type="text" name="stadium"></label><br>
     <label>url:<input type="text" name="url"></label><br>
     <label><textArea name="comment" rows="4" cols="40"></textArea></label><br>
     <input type="submit" value="送信">
    </fieldset>
  </div>
</form>
</body>
</html>
