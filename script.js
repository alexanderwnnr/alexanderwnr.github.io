let modal = document.createElement('div') 
modal.style.cssText = `
    height: 50px;  
    width: 200px; 
    background: white;
    top: calc(50% - ${50 / 2}px); 
    left: calc(50% - ${200 / 2}px);;
    font-size: 24px; 
    z-index: 9; 
    display: none; 
    position: fixed;
    border: 1px solid #383838;
`
document.body.appendChild(modal)

let startButton = document.createElement('input')
startButton.type = 'button'
startButton.value = 'START'
startButton.style.cssText = `
    height: 100px;  
    width: 300px;
    font-family: Comic Sans MS, cursive;
    font-size: 28px
`
modal.appendChild(startButton)

let sum = 0

function showModalWin() {
    let darkLayer = document.createElement('div')
    darkLayer.style.cssText = `
        position: fixed;
        width:100%;
        height:100%;
        z-index: 8;
        background: red;
        opacity: 0.5;
        left:0;
        top:0
    `
    document.body.appendChild(darkLayer)

    modal.style.display = 'block'

    startButton.addEventListener('click', function startGame() {
        darkLayer.style.display = 'none'
        modal.style.display = 'none'
        app.style.display = 'block'
    }, false)
    startButton.addEventListener('click', function playMusic() {
        music.play()
    }, false)
    startButton.addEventListener('click', function countPuints() {
        points.innerText = ''
        sum = 0
        setTimeout(() => {
            showModalWin()
            let yourPoints = document.createElement('div')
            yourPoints.style.cssText = `
                width: 300px;
                height: 50px;
                background: white;
                top: calc(50% - ${50 / 2}px); 
                left: calc(50% - ${300 / 2}px);
                font-family: Comic Sans MS, cursive;
                font-size: 25px; 
                z-index: 9; 
                position: fixed;
                border: 1px solid #383838;
                text-align: center;  
        `
        document.body.appendChild(yourPoints)
        app.style.display = 'none'
        yourPoints.innerText = `You scored ${sum} points`
        setTimeout(() => {
            yourPoints.style.display = 'none'
        }, 3000)

        }, 60000)
    }, false)
}

showModalWin()

var app = document.getElementById('app')
app.style.display = 'none'

let music = document.createElement('audio')
music.src = 'revolver.m4a'
music.loop = true
music.volume = 0.2
app.appendChild(music)

let points = document.createElement('div')
points.style.cssText = `
    width: 100px;
    height: 50px;
    font-size: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background: blue;
    text-align: center
`
app.appendChild(points)

let audio = document.createElement('audio')
audio.src = 'sound.mp3'
audio.volume = 0.5
app.appendChild(audio)

function Circle(size, backgroundColor, point, zIndex = 0) {
    let element = document.createElement('div')
    element.style.cssText = `
        height: ${size}px;
        width: ${size}px;
        border-radius: 50%;
        background-color: ${backgroundColor};
        position: absolute;
        top: calc(50% - ${size / 2}px);
        left: calc(50% - ${size / 2}px);
        z-index: ${zIndex};
    `
    element.addEventListener('click', fPlay, false)
    function fPlay() {
        audio.play()
    }
    element.addEventListener('click', pointSum, false) 
    function pointSum() {
        sum += +`${point}`
        points.innerHTML = sum 
    }
    this.appendToApp = () => circlesContainer.appendChild(element)
}

let circlesContainer = document.createElement('div')
circlesContainer.style.cssText = `
        width: ${500}px;
        height: ${500}px;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - ${500 / 2}px);
        left: calc(50% - ${500 / 2}px)
        `
app.appendChild(circlesContainer)

var circles = [
    new Circle(400, 'blue', 10), 
    new Circle(200, 'green', 20, 1), 
    new Circle(100, 'red', 50, 2)
]

circles.forEach((circle) => circle.appendToApp()) 

function circlesMove() {
    circlesContainer.style.transition = `1s all` 
    setInterval(() => {
        circlesContainer.style.top = `${random (0, 100)}px`
        circlesContainer.style.left = `${random (400, 500)}px`
    }, 500)}
circlesMove()



function Bird(size, imgSrc, intervalTime,zIndex = 5) {
    let element = document.createElement('img')
    element.src = imgSrc
    element.style.cssText = `
        position: absolute;
        width: ${size}px;
        z-Index: ${zIndex};
        transition: ${intervalTime / 1000}s all
        `
    let random = (min, max) => Math.round(Math.random() * (max - min) + min)
    this.appendToApp = () => app.appendChild(element)
    this.startInterval = () => {
        setInterval(() => {
            element.style.top = `${random (0, window.innerHeight - size)}px`
            element.style.left = `${random (0, window.innerWidth - size)}px`
        }, intervalTime)
    }
}
var birds = []
var random = (min, max) => Math.round(Math.random() * (max - min) + min)
for (var i = 0; i < 5; i++) {
    birds.push(new Bird (random(50, 250), 'img/bird.gif', random(50, 2000)))
}
birds.forEach((bird) => bird.appendToApp())
birds.forEach((bird) => bird.startInterval())


var dart = document.createElement('img')
app.appendChild(dart)
dart.src = 'img/dart.png'
dart.style.cssText = `
position: absolute;
width: 80px;
z-index: 10;
`
window.onclick = (event) => {
    dart.src = 'img/dart1.gif'
    setTimeout (() => {
        dart.src = 'img/dart.png'
    }, 500)
    console.log(event)
}

window.onmousemove = (event) => {
    dart.style.top = `${event.clientY - 80}px`
    dart.style.left = `${event.clientX - 80}px`
}
var style = document.createElement('style')
style.innerText = `
html, body {
    height: 100%;
}
body {
    margin: 0;

}
html:hover {
    cursor: none;
}`
document.head.appendChild(style)

