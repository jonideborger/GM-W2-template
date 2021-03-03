"use strict";

let vehicle;

let w = 800;
let h = 800;

function setup() {
    createCanvas(w, h);
    vehicle = new Vehicle(0, 0);
    console.log(vehicle);
}

function draw() {
    background(255);
}

