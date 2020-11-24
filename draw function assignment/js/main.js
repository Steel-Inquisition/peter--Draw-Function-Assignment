//Graphics Libary
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;


// SPIKE THINGY
function drawArt(x, y, midColor, centerColor, spikeColor, thickness) {
    lineWidth(thickness);
    stroke(midColor);
    circle(x + 200, y + 180, 50, "stroke"); // large circle
    stroke(centerColor);
    circle(x + 200, y + 180, 20, "stroke"); // small circle
    stroke(spikeColor);
    triangle(x + 250, y + 130, x + 250, y + 230, x + 350, y + 180, "stroke"); // Right Triangle
    triangle(x + 150, y + 130, x + 150, y + 230, x + 50, y + 180, "stroke"); // Left Triangle
    triangle(x + 150, y + 130, x + 250, y + 130, x + 200, y + 30, "stroke"); // Up Triangle
    triangle(x + 150, y + 230, x + 250, y + 230, x + 200, y + 325, "stroke"); // Down Triangle
}

//SNOW MAN THINGY
function drawSnow(x, y, topColor, midColor, lowColor, faceColor, armColor, snowThickness) {
    lineWidth(snowThickness);
    stroke(topColor);
    circle(x + 505, y + 260, 50, "stroke"); // head
    stroke(midColor);
    circle(x + 505, y + 370, 60, "stroke"); // middle
    stroke(lowColor);
    circle(x + 505, y + 500, 70, "stroke"); // low
    stroke(faceColor);
    circle(x + 480, y + 250, 10, "stroke"); // eye 1
    circle(x + 530, y + 250, 10, "stroke"); // eye 2
    line(x + 495, y + 290, x + 520, y + 290); // mouth
    stroke(armColor);
    line(x + 565, y + 370, x + 630, y + 400); // Rarm
    line(x + 445, y + 370, x + 375, y + 400); // Larm

    //Down Here are the Images
    let shoeImgEl = document.createElement("img");
    let flipShoeImgEl = document.createElement("img");
    let hatEl = document.createElement("img");
    let noseEl = document.createElement("img");
    shoeImgEl.src = "img/shoe.png";
    flipShoeImgEl.src = "img/flipShoe.png";
    hatEl.src = "img/tophat.png";
    noseEl.src = "img/carrot.png";

    window.addEventListener("load", draw);

    function draw() {
        image(shoeImgEl, x + 420, y + 520, 80, 100); // Rshoe
        image(flipShoeImgEl, x + 505, y + 520, 80, 100); // Lshoe
        image(hatEl, x + 450, y + 135, 100, 100); // hat
        image(noseEl, x + 490, y + 242, 50, 50); // nose
    }
}

// Draw the Objects Bellow

// Spike thing:
// 1. X Location, 2. Y Location, 3. Color of Large Circle, 4. Color of Small Circle, 5. Color of the spikes, 6. Line Thickness, 7. Width of Drawing, 8. Height of Drawing
drawArt(100, 20, "yellow", "purple", "red", 2);

drawArt(10, 200, "blue", "green", "purple", 1);

// Snow Man:
// 1. X Location, 2. Y Location, 3. Color of head, 4. Color of middle body, 5. color of lower body, 6. color of face, 7. color of arms, 8. thickness, 9. Width of Drawing, 10. Height of Drawing
drawSnow(100, -100, "black", "red", "brown", "black", "blue", 1);

drawSnow(1, -10, "brown", "black", "lightblue", "green", "silver", 1);
