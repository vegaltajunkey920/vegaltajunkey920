
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="index.php">予定登録</a>　
            <a class="navbar-brand" href="select.php">予定一覧</a>　

            <?php if ($_SESSION["kanri_flg"] == 1): ?>
                <a class="navbar-brand" href="user.php">ユーザー登録</a>　
                <a class="navbar-brand" href="user_select.php">ユーザー一覧</a>　
            <?php endif; ?>

            <a class="navbar-brand" href="logout.php">ログアウト</a>
        </div>
    </div>
</nav>
