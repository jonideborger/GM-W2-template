//Whats's essential for a Particle System?
//1. 'Emitter' = central location
//2. Location, velocity, acceleration
//3. Lifespan

//What's optional?
//1. Alpha channel or textures
//2. Forces
//3. Attraction / Repulsion
//More inspiration for options check the Community Contributions: 
//https://thecodingtrain.com/CodingChallenges/078-simple-particle-system.html

class Particle {
    constructor(x, y) {
        this.location = createVector(x, y);
        this.velocity = createVector(random(-1 , 1), random(-1, 1));
        this.acceleration = createVector(0, 0);

        this.lifespan = 255;
    }

    update() {
        this.lifespan--;
        this.location.add(this.velocity);
    }

    draw() {
        noStroke();
        fill(255, this.lifespan);
        ellipse(this.location.x, this.location.y, 10);
    }

    isDead() {
        return this.lifespan <= 0;
    }

    
}