class human {
    constructor(colour, height = 100) {
        this.colour = colour;
        this.height = height;
        this.pos = createVector(random(windowWidth), random(windowHeight));
        this.velocity = createVector(random(-2, 2), random(-2, 2));
    }

    draw() {
        fill(this.colour);
        rect(this.pos.x, this.pos.y, width, this.height);
    }

    update() {
        this.pos.add(this.velocity);
    }
}