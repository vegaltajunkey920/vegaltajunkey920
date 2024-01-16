<?php
// XSS対応関数
function h($value){
    return htmlspecialchars($value,ENT_QUOTES);
}
?>