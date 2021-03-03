"use strict";

//Create a 2D noise field
//http://tuttlem.github.io/assets/noise2.jpg
//Create a grid, and fill every square with a grayscale color
//FIRST: based on a random
//SECOND: based on the noise function

//How would you animate this noise?

const w = 800;
const h = 800;
const res = 10;

const cols = Math.floor(w /res);
const rows = Math.floor(h/res);

let zoff = 0;
function setup() {
    createCanvas(w, h);
    background(255);
}

function draw() {
  let xoff = 0;
  let yoff = 1000;
  let inc = 0.001;
  for(let y = 0; y < rows; y++) {
    for(let x = 0; x < cols; x++) {
      fill(noise(xoff, yoff, zoff) * 255);
      rect(x*res, y*res, res, res);
      
      xoff+=inc;
    }

    yoff+=inc;
  }

  zoff+=inc;
  //noLoop();
}

