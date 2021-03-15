"use strict";

//First make a deterministic version
//Secondly make a stochastic version

let w = 800;
let h = 800;

let startSize = 200;
let minSize = 5;
let angle = Math.PI / 4;

function setup() {
    createCanvas(w, h);
    background(50);
}

function draw() {
    stroke(255);
    //Set the origin to the first drawing point with translate
    //This makes it easier to draw
    translate(w/2, h);

}

function branch(length) {

}