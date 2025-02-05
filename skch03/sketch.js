// 参考
// https://qiita.com/Damien/items/5f8d4691723b01f370b9#1-web%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E8%83%8C%E6%99%AF

var delayflame = 20; // 20フレーム
var positionX_before_delayflame = [];
var positionY_before_delayflame = [];

//カーソル位置に円を描画する
function setup() {
        createCanvas(windowWidth, windowHeight);
}
    function draw() {
        // マウスの位置を取得して保存
        positionX_before_delayflame.push(mouseX);
        positionY_before_delayflame.push(mouseY);
        
        background(0, 0, 0);
        textSize(10); // 文字の大きさを指定
        textFont("helvetica"); // フォントを指定
        fill(255); // 色を指定
        text("Hello, World!\nカーソルに十字が追従します", 100, 200); // 文字を描画
        // print current frame
        fill(255);
        text("frameCount: " + frameCount , 10, 10);
        
        // ellipse(mouseX, mouseY, 40, 40);

        // 一定フレーム後に円を描画
        if (frameCount > delayflame) {
            var X = positionX_before_delayflame.shift();
            var Y = positionY_before_delayflame.shift();
            //赤色
            fill(255, 0, 0);
            //大きさを指定
            textSize(40);
            text("+", X, Y);
            // ellipse(X, Y, 40, 40);
            

        }
        noStroke(); // 枠線を非表示
}
