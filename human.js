class human {
    constructor(colour = random(100), width = random(10, 400), height = random(200, 500)) {
        this.colour = colour;
        this.width = width;
        this.height = height;
        this.strokeWeight = this.width / 10;
        this.pos = createVector(random(this.width, windowWidth - this.width), random(this.height, windowHeight - this.height));
        this.velocity = createVector(random(-2, 2), random(-2, 2));
        this.headSize = 0;
        if (this.width > this.height) {
            this.headSize = this.height / 2;
        } else {
            this.headSize = this.width / 2;
        }
    }

    draw() {
        fill(this.colour);
        stroke(this.colour);
        strokeWeight(this.strokeWeight);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, (-this.height/32)*11, 0, this.height/4); // core
        line(-this.width/2 +this.strokeWeight/2, -this.height/16, this.width/2 -this.strokeWeight/2, -this.height/16); // arms
        line(-this.width/4, this.height/2 -this.strokeWeight/2, 0, this.height/4); // left leg
        line(this.width/4, this.height/2 -this.strokeWeight/2, 0, this.height/4); // right leg
        circle(0, (-this.height/32)*11, this.headSize); // head
        pop();
    }

    update() {
        // Move the human
        this.pos.add(this.velocity);

        // Bounce off walls
        if (this.pos.x - this.width/2 < 0 || this.pos.x + this.width/2 > windowWidth) {
            this.velocity.x *= -1;
        }
        if (this.pos.y + (-this.height/32)*11 - this.headSize < 0 || this.pos.y + this.height/2 > windowHeight) {
            this.velocity.y *= -1;
        }
    }
}