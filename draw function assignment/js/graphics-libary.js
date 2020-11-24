
// Spike Art
function lineWidth(thickness) { // Change line Size
    ctx.lineWidth = thickness;
}

function stroke(midColor) { // Change circle color
    ctx.strokeStyle = midColor;
}

function stroke(centerColor) { // change very middle circle
    ctx.strokeStyle = centerColor;
}

function stroke(spikeColor) { // change spike color
    ctx.strokeStyle = spikeColor;
}

// Snowman
function lineWidth(snowThickness) { // Change line Size
    ctx.lineWidth = snowThickness;
}

function stroke(topColor) { // change head color
    ctx.strokeStyle = topColor;
}

function stroke(midColor) { // change middle body color
    ctx.strokeStyle = midColor;
}

function stroke(lowColor) { // change lower body color
    ctx.strokeStyle = lowColor;
}

function stroke(faceColor) { // change eye / mouth color
    ctx.strokeStyle = faceColor;
}

function stroke(armColor) { // chnage arm color
    ctx.strokeStyle = armColor;
}

// Draw a circle with a center (x,y) and radius of r
function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);

    if (mode == "fill") {
        ctx.fill();
    } else if (mode == "stroke") {
        ctx.stroke();
    }
}

// Draw a triangle
function triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Vertex 1
    ctx.lineTo(x2, y2); // Vertex 2
    ctx.lineTo(x3, y3); // Vertex 3

    if (mode == "fill") {
        ctx.fill();
    } else if (mode == "stroke") {
        ctx.closePath();
        ctx.stroke();
    }

    ctx.stroke();
}

// Draw an Image
function image(img, x, y, w, h) {
    ctx.drawImage(img, x, y, w, h);
}

// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //Endpoint 1
    ctx.lineTo(x2, y2); // Endpoint 2
    ctx.stroke();
}