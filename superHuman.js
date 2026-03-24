class superHuman extends human {
    constructor(colour, width, height) {
        super(colour, width, height);
        this.velocity.mult(10); // doubles the velocity of the superHuman 
    }

    wave() {
        
    }
}