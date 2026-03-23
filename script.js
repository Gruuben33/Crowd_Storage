let width = 400;
function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    humans = [
        new human('blue'),
        new human('red')
    ]
}

function draw() {
    clear();
    background(220);
    // humans = [
    //     new human('blue'),
    //     new human('red')
    // ]
    humans.forEach(human => {
        human.draw();
        human.update();
    })
}