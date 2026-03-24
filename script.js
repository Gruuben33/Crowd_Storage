function setup() {
    windowWidth -= 23;
    windowHeight -= 23;
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    frameRate(120);
    humans = [
        new human(24, 200, 400),
        new human(26, 50, 100),
        new human(28, 100, 200),
        new human(30),
        new human(32, 100, 200),
        new human(34, 100, 200),
        new human(36),
        new human(38, 100, 200),
        new human(40, 400, 200),
        new human(42, 100, 200),
        new human(),
        new human(),
        new human(),
        new human(),
        new superHuman("red", 100, 200)
    ]
}

function draw() {
    clear();
    background('lightblue');
    humans.forEach(human => {
        human.draw();
        human.update();
    });
}