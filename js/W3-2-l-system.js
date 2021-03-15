"use strict";

let w = 800;
let h = 800;

let axiom = "B";
let sentence = axiom;
//Iteration amount (N)
let iterations = 4;
//Angle in radians; declare here and give value in setup
let angle;
//Length; up to you
let length = 5;

let rules = [
    {
        from: "B",
        to: "A"
    },
    {
        from: "A",
        to: "AB"
    }
];

function setup() {
    createCanvas(w, h);
    background(50);
    angle = radians(22.5);
}

function draw() {
    for(let i = 0; i <= iterations; i++) {
        generate();

    }

    turtle(sentence);

    noLoop();
}

function generate() {
    let nextSentence = "";
    for(let i = 0; i < sentence.length; i++) {
        //Add to nextSentence based on the rules
    }

    sentence = nextSentence;
    console.log(sentence);
}

function turtle(sentence) {
    background(50);
    stroke(255, 100);
    //reset matrix at the start
    resetMatrix();
    //translate to the starting point so you can work with the origin
    translate(w/2, h);
    for(let i = 0; i < sentence.length; i++) {
      //Do something for every character type
    }
}


//Some Rule examples

/* Image A
N = 5;
Angle = 25.7deg
Axiom: F
Rules:
    F -> F[+F]F[-F]F */

/* Image B
N = 5;
Angle = 20deg
Axiom: F
Rules:
    F -> F[+F]F[-F][F] */

/* Image C
N = 4;
Angle = 22.5deg
Axiom: F
Rules:
    F -> FF-[-F+F+F]+[+F-F-F] */

    