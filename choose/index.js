if (window.location.search.startsWith('?q=')) {
    try {
        document.getElementById('question').textContent = atob(window.location.search.slice('?q='.length));
    } catch {
        window.location.href = "set";
    }
} else
    window.location.href = "set";

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Bounds = Matter.Bounds,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var renderAbove = Render.create({
    element: document.getElementById('renderer'),
    engine: engine,
    options: {
        width: 500,
        height: 96,
        hasBounds: true,
        background: 'transparent',
    },
});
var renderTop = Render.create({
    element: document.getElementById('renderer'),
    engine: engine,
    options: {
        width: 500,
        height: 48,
        background: 'transparent',
    },
});
var renderBottom = Render.create({
    element: document.getElementById('renderer'),
    engine: engine,
    options: {
        width: 500,
        height: 250,
        hasBounds: true,
        background: 'transparent',
    },
});
renderAbove.options.wireframes = false;
renderTop.options.wireframes = false;
renderBottom.options.wireframes = false;
renderBottom.canvas.height = 48;

Bounds.translate(renderAbove.bounds, {x: 0, y: -100}); //move renderbottom's view above the world (where the check will be)
Bounds.translate(renderBottom.bounds, {x: 0, y: 452}); //move renderbottom's view to the bottom of the world (where the bottom of the checkboxes will be)

// create objects
var boxVertices = Matter.Vertices.fromPath("M 200 500 L 100 500 L 100 450 L 105 450 L 105 495 L 195 495 L 195 450 L 250 400 L 305 450 L 305 495 L 395 495 L 395 450 L 495 350 L 495 150 L 395 50 L 395 5 L 305 5 L 305 50 L 250 100 L 195 50 L 195 5 L 105 5 L 105 50 L 5 150 L 5 350 L 105 450 L 100 452 L 0 352 L 0 148 L 100 48 L 100 0 L 200 0 L 200 48 L 250 93 L 300 48 L 300 0 L 400 0 L 400 48 L 500 148 L 500 352 L 400 452 L 400 500 L 300 500 L 300 452 L 250 407 L 200 452 Z");
var box = Bodies.fromVertices(250, 250, boxVertices, { isStatic: true, render: { fillStyle: '#000000', } });
var checkVertices = Matter.Vertices.fromPath("M 42.2604 4.1666 L 18.75 28.2646 L 7.7375 17.825 L 0 25.5666 L 18.75 43.75 L 50 11.9063 Z");
var check = Bodies.fromVertices(0, -500, checkVertices, { isStatic: true, friction: 0, restitution: 1, render: { fillStyle: '#000000' } }, true);

// create plinks
const plinkRows = 5;
const topPlinkRowY = 150;
const bottomPlinkRowY = 500 - topPlinkRowY;
const plinksPerRow = 6;
const leftPlinkX = 20;
const rightPlinkX = 500 - leftPlinkX;
const plinkRadius = 5;

var plinks = [];
for (let i = 0; i < plinkRows; i++) {
    let longRow = Boolean(i % 2);
    let y = topPlinkRowY + (bottomPlinkRowY - topPlinkRowY) * (i / (plinkRows - 1))
    let plinksInRow = plinksPerRow - (longRow ? 0 : 1);
    for (let j = 0; j < plinksInRow; j++) {
        let x = leftPlinkX + (rightPlinkX - leftPlinkX) * ((longRow ? j : j + 0.5) / (plinksPerRow - 1));

        plinks.push(Bodies.circle(x, y, plinkRadius, { isStatic: true }));
    }
}

// add all of the bodies to the world
Composite.add(engine.world, [box, check, ...plinks]);


// run the renderer
Render.run(renderAbove);
Render.run(renderTop);
Render.run(renderBottom);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);













//on choose yes or no
const timeToWaitTillExpand = 3000;
const timeToWaitTillDrop = 1500;
const expandTime = 4000;
const startHeight = 48;
const targetHeight = 250;
var chosen = false;
var startTime = null;
var startFadeTime = null;

function choose(checkPos) {
    [...document.getElementById('buttons').children].forEach(e => e.remove()); //delete buttons
    Body.setPosition(check, {x: checkPos+48, y: -50});
    fadeCheck()
    setTimeout(expand, timeToWaitTillExpand);
}

function fadeCheck() {
    let time = Date.now()
    if (startFadeTime == null) startFadeTime = time;
    let elapsedTime = time - startFadeTime;
    elapsedTime = Math.min(timeToWaitTillExpand, elapsedTime);
    let amountDone = elapsedTime / timeToWaitTillExpand;

    renderAbove.canvas.style.opacity = amountDone;

    if (elapsedTime < timeToWaitTillExpand)
        setTimeout(fadeCheck, 16); //would love to use requestanimationframe but it makes the canvases disappear :)
}

function expand() {
    let time = Date.now()
    if (startTime == null) startTime = time;
    let elapsedTime = time - startTime;
    elapsedTime = Math.min(expandTime, elapsedTime);
    let amountDone = elapsedTime / expandTime;

    let height = startHeight + (targetHeight - startHeight) * amountDone;
    for (let i of [renderTop, renderBottom])
        i.canvas.height = height;
    Bounds.translate(renderBottom.bounds, {x: 0, y: 500 - height - renderBottom.bounds.min.y});
    console.log(renderBottom.bounds)

    if (elapsedTime < expandTime)
        setTimeout(expand, 16); //would love to use requestanimationframe but it makes the canvases disappear :)
    else
        setTimeout(drop, timeToWaitTillDrop);
}

function drop() {
    Body.setPosition(check, {x: check.position.x, y: check.position.y+100})
    Body.setStatic(check, false);
}