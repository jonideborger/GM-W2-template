"use strict";

const w = 800;
const h = 800;

function setup() {
    createCanvas(w, h);
}

function draw() {
    background(255);
    strokeWeight(4);
    for(let x = 0; x < w; x++) {
        //let y = random(h);
        let y = noise(x / 1000) * w;
        point(x, y);
    }

    noLoop();
}