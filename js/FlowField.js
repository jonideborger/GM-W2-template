"use strict";

class FlowField {
    constructor(w, h, res) {
        this.field = [[], []];
        this.cols = w/res;
        this.rows = h/res;
        this.res = res;

    }

    initField() {

    }

    draw() {

    }

}

/* Code snippet for drawing a line in the direction of the vector; check if your variable names are the same
    push();
    translate(j * this.resolution, i * this.resolution);
    rotate(vector.heading());
    line(0, 0, this.resolution, 0);
    pop();
*/