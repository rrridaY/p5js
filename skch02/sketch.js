// 参考
// https://qiita.com/Damien/items/5f8d4691723b01f370b9#1-web%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E8%83%8C%E6%99%AF

//カーソル位置に円を描画する
function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  function draw() {
    background(0, 0, 0);
    text("Hello, World!", 100, 200); // 文字を描画
    ellipse(mouseX, mouseY, 40, 40);
    fill(230);
    noStroke(); // 枠線を非表示
  }
