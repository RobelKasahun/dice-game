let multiplier = 1;
let zedIndex = 0;

let button = document.querySelector('#button');
let result = document.querySelector('#result');

let firstDiceNumber = undefined;
let secondDiceNumber = undefined;

let diceAudioEffect = new Audio('./media/dice-sound-effect.mp3');

button.addEventListener('click', function () { 
    // get the children for player dice 1
    let firstPlayerDiceChildren = document.querySelector('.first-player-dice').children;
    // get the children for player dice 2
    let secondPlayerDiceChildren = document.querySelector('.second-player-dice').children;

    // select random child and increase its z-index for visibility
    let index = Math.floor(Math.random() * firstPlayerDiceChildren.length);
    zedIndex += (multiplier * 1000);
    firstPlayerDiceChildren[index].style.zIndex = zedIndex.toString();

    firstDiceNumber = firstPlayerDiceChildren[index].id;

    index = Math.floor(Math.random() * secondPlayerDiceChildren.length);
    zedIndex += (multiplier * 1000);
    secondPlayerDiceChildren[index].style.zIndex = zedIndex.toString();
    secondDiceNumber = secondPlayerDiceChildren[index].id;
    ++multiplier;
    result.textContent = `${checkEquality(getDiceNumber(firstDiceNumber), getDiceNumber(secondDiceNumber))}`;
    diceAudioEffect.play();
});

function getDiceNumber(id) {
    let current_dice = undefined;

    if (id === 'dice-one') {
        current_dice = 1;
    } else if (id == 'dice-two') {
        current_dice = 2;
    } else if (id == 'dice-three') {
        current_dice = 3;
    } else if (id == 'dice-four') {
        current_dice = 4;
    } else if (id == 'dice-five') {
        current_dice = 5;
    } else {
        current_dice = 6;
    }

    return current_dice;
}

function checkEquality(firstDice, secondDice) {
    let response = undefined;
    if (firstDice === secondDice) {
        response = 'Game Tied';
    } else if (firstDice > secondDice) {
        response = 'Player 1 Won!!!';
    } else {
        response = 'Player 2 Won!!!';
    }

    return response;
}