"use strict";

const w = 800;
const h = 800;

let particles = [];
let initialAmount = 50;
let addAmount = 5;

function setup() {
    createCanvas(w, h);

    for(let i = 0; i < initialAmount; i++) {
        //Create particles
        const p = new Particle(w/2, h/2);
        //Push to array
        particles.push(p);

    }
}

function draw() {
    background(0);
    for(let i = 0; i < particles.length; i++) {
        if(particles[i].isDead()) {
            //remove from array
            particles.splice(i, 1);
        }
        //Update particles
        particles[i].update();
        //Draw particles
        particles[i].draw();
    }

    for(let i = 0; i < addAmount; i++) {
        const p = new Particle(w/2, h/2);
        particles.push(p);        
    }

    console.log('Particles length:', particles.length);
}