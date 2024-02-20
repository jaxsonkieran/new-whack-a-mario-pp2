// create function that counts down time
// create function that holds the score and adds to each time a mario is hit
// create function that produces the mario in a random hole


// declare game variables
const holes = document.querySelectorAll('.hole');
const mario = document.querySelector('.mario');
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');



/**
 * function to get the mario to appear in random holes on the container
 */

function randomHole () {
    // remove the mario class on initial holes so the mario appears on a fresh hole each time
    holes.forEach(hole => {
        hole.classList.remove('mario');
    })
    // get a random number from 0 - 8 (1-9), as we start counting from 0, for the mario to appear in
    let randomHole = holes[Math.floor(Math.random() * 9)];
    randomHole.classList('mario');
}

randomHole();