<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>登録データ一覧</title>
    <link rel="stylesheet" href="./css/read.css">
</head>
<body>

<?php
include("funcs.php");

$file = fopen("data/data.txt","r");

echo "<table>";
echo "<tr><th>日時</th><th>お名前</th><th>EMAIL</th><th>最少催行人数</th><th>店</th><th>価格帯</th></tr>";

while($str = fgets($file)){
    $data = explode(",", $str);

    echo "<tr>";
    foreach ($data as $value) {
        if ($value === "") {
            echo "<td>未入力</td>";
        } else {
            echo "<td>" . h($value) . "</td>";
        }
    }
    echo "</tr>";
}

echo "</table>";

fclose($file);
?>

</body>
</html>
