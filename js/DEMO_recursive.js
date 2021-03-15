//DEMO Recursive function

//ex. r -= 10 ** r*=0.8 ==> MAX CALL STACK
"use strict";

let field;
let w = 800;
let h = 800;

function setup() {
    createCanvas(w, h);
}

function draw() {
    drawRecursiveCircle(w/2, h/2, 800);
}

function drawRecursiveCircle(x, y, r) {
    ellipse(x, y, r, r);
    r -= 10;
    if(r > 0) {
        drawRecursiveCircle(x, y, r);
    }
}