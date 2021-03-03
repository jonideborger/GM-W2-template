"use strict";

class FlowField {
    constructor(w, h, res) {
        this.field = [[], []];
        this.cols = w/res;
        this.rows = h/res;
        this.res = res;

        this.initField();
    }

    initField() {
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                const index = j + i * this.cols;
                const vector = p5.Vector.fromAngle(random(TWO_PI));
                vector.setMag(1);
                //const vector = createVector(1, 0);
                this.field[index] = vector;
            }
        }
    }

    draw() {
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                const vector = this.field[j + i * this.cols];
                stroke(0);
                push();
                translate(j * this.res, i * this.res);
                rotate(vector.heading());
                line(0, 0, this.res, 0);
                pop();
            }
        }
    }

}

/* Code snippet for drawing a line in the direction of the vector; check if your variable names are the same
    push();
    translate(j * this.resolution, i * this.resolution);
    rotate(vector.heading());
    line(0, 0, this.resolution, 0);
    pop();
*/