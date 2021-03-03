"use strict";

let field;
let w = 800;
let h = 800;

function setup() {
    createCanvas(w, h);
    field = new FlowField(w, h, 50);
    console.log(field);
}

function draw() {
    field.draw();
}

