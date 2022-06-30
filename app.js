const newGame=document.getElementById('newGameIcon');
const play=document.getElementById('play');
const save=document.getElementById('save');
const changeColors=document.querySelector('.NewGame');
const scoreFinalsChangePlayer1=document.getElementById('scoreFinalPlayer1');
const scoreChangePlayer1=document.getElementById('scorePlayer1');
const scoreFinalsChangePlayer2=document.getElementById('scoreFinalPlayer2');
const scoreChangePlayer2=document.getElementById('scorePlayer2');
let playPlayer1=document.querySelector('.playGamePlayer1');
let playPlayer2=document.querySelector('.playGamePlayer2');
let staticDice=document.querySelector('#staticDice');
let animeDice=document.querySelector('#animeDice');
let choicePlayerBool=null;
let scoreFinalPlayer1;
let scorePlayer1;
let scoreFinalPlayer2;
let scorePlayer2;

// startGame
newGame.addEventListener('click', startGame);

// push playDice
play.addEventListener('click', playRandom);

// push saveScoreFinal
save.addEventListener('click', saveScoreFinal);


// Start game

function startGame(){
    choicePlayerBool=true;
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
    playPlayer2.style.display = "none";


}
// animation pictureDice randam
 function animeDicePicture(score){
    switch(score) {
        case 1:
         
            staticDice.src="img/1.png";
            break;
        case 2:
          
            staticDice.src="img/2.png";
            break;
        case 3:
       
            staticDice.src="img/3.png";
            break;
        case 4:
           
            staticDice.src="img/4.png";
            break;
        case 5:
           
            staticDice.src="img/5.png";
            break;
        case 6:
        
            staticDice.src="img/6.png";
        break;

        default:
            'Wops, cas innatendu.';

    }


}

// Animation dice
async function playGameAnime (score){

    staticDice.style.display = "none";
    animeDice.style.display = "inline-block";  
    animeDicePicture(score);
    await sleep(500);
    playGamestatic();
}


// desactive animation dice
function playGamestatic (){
    animeDice.style.display = "none";
    staticDice.style.display = "inline";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

//  return random numner
 function playRandom(){
if(choicePlayerBool===null){
    window.alert("Cliquez sur nouveau jeu pour démarrer");
    return;
}
    
    var score=numberRandom(1,6);
    playGameAnime (score)
    choicePlayer(score);

 }

//  play dice
 function numberRandom(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

// choice player
function choicePlayer(scoreRandom){
   

    if( choicePlayerBool){

        if(scoreRandom>1){
            scorePlayer1=scorePlayer1+scoreRandom;
            scoreChangePlayer1.innerText=scorePlayer1.toString();
            analyseScore(scorePlayer1);

        }else{
            scoreFinalPlayer1=0;
            scorePlayer1=0;
            modifPlayerInterface();
            scoreFinalsChangePlayer1.innerText=scoreFinalPlayer1.toString();
            scoreChangePlayer1.innerText=scorePlayer1.toString();
            choicePlayerBool=false;
            // return;
        }
 
    }else{
        if(scoreRandom>1){
            scorePlayer2=scorePlayer2+scoreRandom;
            scoreChangePlayer2.innerText=scorePlayer2.toString();
            analyseScore(scorePlayer2);
        }else{
            scoreFinalPlayer2=0;
            scorePlayer2=0;
            modifPlayerInterface();
            scoreFinalsChangePlayer2.innerText=scoreFinalPlayer2.toString();
            scoreChangePlayer2.innerText=scorePlayer2.toString();
            choicePlayerBool=true;
            // return;

        }
       
    }

}

function analyseScore(scoreCurrent){
    if( scoreCurrent>100){
        if(choicePlayerBool){
            console.log("player 1 gagne")
        }else{
            console.log("player 2 gagne")
        }
    }
}


function saveScoreFinal(){
    if(choicePlayerBool===null){
        window.alert("Cliquez sur nouveau jeu pour démarrer");
        return;
    }

    if(choicePlayerBool){
        scoreFinalPlayer1=scoreFinalPlayer1+scorePlayer1;
        scoreFinalsChangePlayer1.innerText=scoreFinalPlayer1.toString();
        modifPlayerInterface();
        choicePlayerBool=false;
        scorePlayer1=0;
        scoreChangePlayer1.innerText=scorePlayer1.toString();
        analyseScore(scoreFinalPlayer1);
        
    }else{
        scoreFinalPlayer2=scoreFinalPlayer2+scorePlayer2;
        scoreFinalsChangePlayer2.innerText=scoreFinalPlayer2.toString();
        modifPlayerInterface();
        choicePlayerBool=true;
        scorePlayer2=0;
        scoreChangePlayer2.innerText=scorePlayer2.toString();
        analyseScore(scoreFinalPlayer2);
        }

}

function modifPlayerInterface(){

    if(choicePlayerBool){
        changeColors.style.background = "linear-gradient(to right, white 50%, rgb(101, 90, 138) 50%)";
        playPlayer1.style.display = "none";
        playPlayer2.style.display = "block";
    }else {
        changeColors.style.background = "linear-gradient(to right, rgb(101, 90, 138) 50%, white 50%)";
        playPlayer1.style.display = "block";
        playPlayer2.style.display = "none";
    }
}