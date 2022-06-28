const newGame=document.getElementById('newGameIcon');
const changeColors=document.querySelector('.NewGame');
const scoreFinalsChangePlayer1=document.getElementById('scoreFinalPlayer1');
const scoreChangePlayer1=document.getElementById('scorePlayer1');
const scoreFinalsChangePlayer2=document.getElementById('scoreFinalPlayer2');
const scoreChangePlayer2=document.getElementById('scorePlayer2');
let scoreFinalPlayer1;
let scorePlayer1;
let scoreFinalPlayer2;
let scorePlayer2;

newGame.addEventListener('click', startGame);


// Start game

function startGame(){
    console.log("test");
    scoreFinal=0;
    score=0;
    changeColors.style.background = "linear-gradient(to right, rgb(101, 90, 138) 50%, white 50%)";

    scoreFinalsChangePlayer1.innerText=scoreFinalPlayer1.toString();
    scoreChangePlayer1.innerText=scorePlayer1.toString();
    scoreFinalsChangePlayer2.innerText=scoreFinalPlayer2.toString();
    scoreChangePlayer2.innerText=scorePlayer2.toString();
}