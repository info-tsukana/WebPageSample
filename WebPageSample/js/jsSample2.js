// JavaScript Document
document.getElementById("id3").addEventListener("click", changeSize);

/*
document.getElementById(〇〇).addEventListener(△△,▢▢);

「idが〇〇の要素に，△△したとき，▢▢関数を実行する」というイベントを設定するプログラムです。

〇〇　→　"id3"：HTML内のidが"id3"の要素
△△ → "click":クリックした時
▢▢ → changeSize:changeSize関数
*/

/*changeSize関数*/
function changeSize(e)
{
    /*idが「id4」の文字サイズを30pxにする*/
    document.getElementById("id4").style.fontSize="30px";
}