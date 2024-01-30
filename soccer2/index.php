<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>予定登録</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header"><a class="navbar-brand" href="select.php">予定登録画面</a></div>
    </div>
  </nav>
</header>

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
