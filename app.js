const newGame=document.getElementById('newGameIcon');
const play=document.getElementById('play');
const changeColors=document.querySelector('.NewGame');
const scoreFinalsChangePlayer1=document.getElementById('scoreFinalPlayer1');
const scoreChangePlayer1=document.getElementById('scorePlayer1');
const scoreFinalsChangePlayer2=document.getElementById('scoreFinalPlayer2');
const scoreChangePlayer2=document.getElementById('scorePlayer2');
let playPlayer1=document.querySelector('.playGamePlayer1');
let staticDice=document.querySelector('#staticDice');
let animeDice=document.querySelector('#animeDice');

let scoreFinalPlayer1;
let scorePlayer1;
let scoreFinalPlayer2;
let scorePlayer2;

newGame.addEventListener('click', startGame);

play.addEventListener('click', playGameAnime);
// Start game

function startGame(){
    // console.log("test");
    scoreFinalPlayer1=0;
    scorePlayer1=0;
    scoreFinalPlayer2=0;
    scorePlayer2=0;
    changeColors.style.background = "linear-gradient(to right, rgb(101, 90, 138) 50%, white 50%)";

    scoreFinalsChangePlayer1.innerText=scoreFinalPlayer1.toString();
    scoreChangePlayer1.innerText=scorePlayer1.toString();
    scoreFinalsChangePlayer2.innerText=scoreFinalPlayer2.toString();
    scoreChangePlayer2.innerText=scorePlayer2.toString();
    playPlayer1.style.display = "block";

}


async function playGameAnime (){

    staticDice.style.display = "none";
    animeDice.style.display = "inline-block";  
    await sleep(2000);
    playGamestatic();
}
function playGamestatic (){

    animeDice.style.display = "none";
    staticDice.style.display = "inline";

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 function numberAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}