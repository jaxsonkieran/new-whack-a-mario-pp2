// create function that counts down time
// create function that holds the score and adds to each time a mario is hit
// create function that produces the mario in a random hole


// declare game variables
const holes = document.querySelectorAll('.hole');
const mario = document.querySelector('.mario');
const score = document.querySelector('#score');
// const timeLeft = document.querySelector('#time-left');

let hitTheMario;
let result = 0;
let gameOver = false;
// let currentTime = 60;


// run the game with the play button
let button = document.getElementById('play-btn');
button.addEventListener("click", function () {
    moveMario();
    countDown();
})
/**
 * function to get the mario to appear in random holes on the container
 */

function randomHole () {
    // remove the mario class if it's on any of the hole so we get a fresh hole each time
    holes.forEach(hole => {
        hole.classList.remove('mario');
    })
// get a random number from 0 - 8, (1-9), start counting from 0
    let randomHole = holes[Math.floor(Math.random() * 9)];
    randomHole.classList.add('mario');

    hitTheMario = randomHole.id;
}

// function to record hit on mousedown, each time the mario appears and then add it to the score!
/**
 * this records a hit on mousdown and adds a point to the scoreboard
 */
holes.forEach(hole => {
    hole.addEventListener('mousedown', () => {
        if (hole.id === hitTheMario){
            result++
            score.textContent = result
            hitTheMario = null
        }
    })
})

// create function to move the mole on a specific time interval, this will be attached to the play game btn
/**
 * function to move the mole on set interval
 */

function moveMario() {
    let timerId = null
    timerId = setInterval(randomHole, 800)
    timeLeft(60);
}

// moveMario();

// create a function to get the timer to countdown
/**
 * function that counts down the time
 */
// function countDown () {
//     currentTime--
//     timeLeft.textContent = currentTime

//     if(currentTime === 0){
//         clearInterval(countDownTimerId);
//         document.getElementById('time-up-alert').style.display = "block";
//     }
// }

// let countDownTimerId = setInterval(countDown, 1000);

function timeLeft(seconds){
    let countDown = setInterval(function (){
        document.getElementById('time-left').innerHTML = seconds;
        seconds--;
        if (seconds === -1){
            clearInterval(countDown);
            document.getElementById('time-up-alert').style.display = "block";
        }
    }, 1000)
}