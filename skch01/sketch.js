// 参考
// https://qiita.com/Damien/items/5f8d4691723b01f370b9#1-web%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E8%83%8C%E6%99%AF

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}
function draw() {
    background(255);
    for (var y = 0; y <= 1000; y = y + 500) {
        for (var x = 0; x <= 1000; x = x + 500) {
            noFill();
            stroke(255, 147, 206);
            rotateX(frameCount * 0.001);
            rotateY(frameCount * 0.001);
            box(200, 200, 200);
        }
    }
}
