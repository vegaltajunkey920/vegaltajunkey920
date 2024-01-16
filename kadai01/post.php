<html>
<head>
<meta charset="utf-8">
<title>POST練習</title>
<link rel="stylesheet" href="./css/post.css">
</head>
<body>
<form action="write.php" method="post">
	お名前: <input type="text" name="name"></br>
	EMAIL: <input type="text" name="mail"></br>
	最少催行人数:
        <select name="person">
            <option value="">選択してください</option>
            <option value="2">2人</option>
            <option value="3">3人</option>
            <option value="4">4人</option>
            <option value="5">5人以上</option>
        </select><br>

	行きたいお店:
	<select name="place">
            <option value="">選択してください</option>
            <option value="izakaya">居酒屋</option>
            <option value="meet">肉</option>
            <option value="fish">魚</option>
            <option value="china">中華</option>
        </select><br>
	価格帯:
	<select name="cost">
            <option value="">選択してください</option>
            <option value="3000">3000円以下</option>
            <option value="5000">5000円以下</option>
            <option value="7000">7000円以下</option>
            <option value="10000">10000円</option>
        </select><br>
	<input type="submit" value="送信">
</form>
</body>
</html>