// JavaScript Document

/*イベントの設定*/
document.getElementById("id3").addEventListener("click", changeColor);

/*
document.getElementById(〇〇).addEventListener(△△,▢▢);

「idが〇〇の要素に，△△したとき，▢▢関数を実行する」というイベントを設定するプログラムです。

〇〇　→　"id3"：HTML内のidが"id3"の要素
△△ → "click":クリックした時
▢▢ → changeColor:changeColor関数
*/

/*changeColor関数*/
function changeColor(e)
{
    /*idが「id4」の色を灰色にする*/
    document.getElementById("id4").style.color="#888";
}