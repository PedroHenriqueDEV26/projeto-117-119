var quickDrawDataset = ['copo', 'cachorro', 'casa', 'árvore', 'carro']; 
var score = 0;
var timerCounter = 0;
var timerCheck = '';
var answerHolder = '';
var drawSketch = '';

array1 = [pen,paper,book,bottle]
var randomNumber = Math.floor((Math.random()*array1.length)+1)

function preload(){

}

function updateCanvas() {
    clearCanvas();
    sketch = quickDrawDataset[Math.floor(Math.random() * quickDrawDataset.length)];
    document.getElementById('sketch_name').innerHTML = sketch;
    console.log(sketch);
}

function clearCanvas() {
    var canvas = document.getElementById('canvas');
    if (canvas) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function checkSketch() {
    timerCounter++;
    document.getElementById('time').innerHTML = timerCounter;
    console.log(timerCounter);

    if (timerCounter > 400) {
        timerCounter = 0;
        timerCheck = 'completed';
    }

    if (timerCheck === 'completed' || answerHolder === 'set') {
        timerCheck = '';
        answerHolder = '';
        updateCanvas();
    }
}

function setup(){
    var canvasContainer = document.getElementById('canvasContainer');
    var canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 280;
    canvas.id = 'canvas';
    canvas.style.border = '1px solid black';
    canvasContainer.appendChild(canvas);
    clearCanvas();
    draw();
}

function draw(){
    checkSketch();
    if (drawSketch === sketch) {
        answerHolder = 'set';
        score++;
        document.getElementById('score').innerHTML = score;
    }
    requestAnimationFrame(draw);
}