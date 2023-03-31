const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorindex = 0;
let intervalid = null;



const trafficlight = (event) => {
    stopcolor();
    turnon[event.target.id]();    
}

const nextindex = () => {
    if (colorindex < 2) {
        colorindex++;
    } else {
        colorindex = 0;
    }
}

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorindex];
    turnon[color]();
    nextindex();
}

const stopcolor = () => {
    clearInterval (intervalid);
}

const turnon = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalid = setInterval( changecolor, 1000)
}

buttons.addEventListener('click', trafficlight);