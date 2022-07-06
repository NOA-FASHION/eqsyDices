const newGame=document.getElementById('newGameDiv');
const newGameMobile=document.getElementById('newGameDivMobile');
const play=document.getElementById('play');
const playMobile=document.getElementById('playMobile');
const save=document.getElementById('save');
const saveMobile=document.getElementById('saveMobile');
const changeColors=document.querySelector('.NewGame');
const colorsMobilePlayer1=document.querySelector('.colorsMobilePlayer1');
const colorsMobilePlayer2=document.querySelector('.colorsMobilePlayer2');
const scoreFinalsChangePlayer1=document.getElementById('scoreFinalPlayer1');
const scoreCurrentPlayerMobile=document.getElementById('scoreCurrentPlayerMobile');
const scoreFinal1Mobile=document.getElementById('scoreFinal1Mobile');
const scoreFinal2Mobile=document.getElementById('scoreFinal2Mobile');
const modifStringPlayer1=document.getElementById('modifStringPlayer1');
const scoreChangePlayer1=document.getElementById('scorePlayer1');
const scoreFinalsChangePlayer2=document.getElementById('scoreFinalPlayer2');
const scoreChangePlayer2=document.getElementById('scorePlayer2');
let playPlayer1=document.querySelector('.playGamePlayer1');
let playPlayer2=document.querySelector('.playGamePlayer2');
let winGame=document.querySelector('.winGame');
let WinPlayer=document.querySelector('.WinPlayer');


let staticDice=document.querySelector('#staticDice');
let animeDice=document.querySelector('#animeDice');
let choicePlayerBool=null;
let scoreFinalPlayer1;
let scorePlayer1;
let scoreFinalPlayer2;
let scorePlayer2;
let mobileBool;


// startGame desktop

newGame.addEventListener('click', function() {
    mobileBool=false;
    startGame(mobileBool)
  });

  // startGame mobile
  newGameMobile.addEventListener('click', function() {
    mobileBool=true;
    startGame(mobileBool)
  });

// push playDice desktop
play.addEventListener('click', playRandom);

// push playDice mobile
playMobile.addEventListener('click', playRandomMobile);

// push saveScoreFinal desktop
save.addEventListener('click', saveScoreFinal);

// push saveScoreFinal mobile
saveMobile.addEventListener('click', saveScoreFinalMobile);


// Start game 
function startGame(mobileBool){
    if(!mobileBool){ choicePlayerBool=true;
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
        else if (mobileBool)
        {
            choicePlayerBool=true;
            scoreFinalPlayer1=0;
            scorePlayer1=0;
            scoreFinalPlayer2=0;
            scorePlayer2=0;
            scoreCurrentPlayerMobile.innerText=scorePlayer1.toString();
            scoreFinal1Mobile.innerText=scoreFinalPlayer1.toString();
            scoreFinal2Mobile.innerText=scoreFinalPlayer2.toString();
            modifStringPlayer1.innerText="PLAYER 1";
            colorsMobilePlayer1.style.background = "green";
            changeColors.style.background = "white";
        }
   

}
// animation pictureDice random
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

function animeDicePictureMobile(score){
    switch(score) {
        case 1:
         
            staticDiceMobile.src="img/1.png";
            break;
        case 2:
          
            staticDiceMobile.src="img/2.png";
            break;
        case 3:
       
            staticDiceMobile.src="img/3.png";
            break;
        case 4:
           
            staticDiceMobile.src="img/4.png";
            break;
        case 5:
           
            staticDiceMobile.src="img/5.png";
            break;
        case 6:
        
            staticDiceMobile.src="img/6.png";
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

///////////////////////////////////////////////////////// desktop logic

// desactive animation dice
function playGamestatic (){
    animeDice.style.display = "none";
    staticDice.style.display = "inline";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

//  return random number
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
            WinPlayer.innerText="player 1 gagne";
            winGame.style.display = "inline-block";  
        }else{
            console.log("player 2 gagne")
            WinPlayer.innerText="player 2 gagne";
            winGame.style.display = "inline-block";  
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
        analyseScore(scoreFinalPlayer1);
        choicePlayerBool=false;
        scorePlayer1=0;
        scoreChangePlayer1.innerText=scorePlayer1.toString();
       
        
    }else{
        scoreFinalPlayer2=scoreFinalPlayer2+scorePlayer2;
        scoreFinalsChangePlayer2.innerText=scoreFinalPlayer2.toString();
        modifPlayerInterface();
        analyseScore(scoreFinalPlayer2);
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



///////////////////////////////////////////////////////// mobile logique


// Animation dice
async function playGameAnimeMobile (score){

    staticDiceMobile.style.display = "none";
    animeDiceMobile.style.display = "inline-block";  
    animeDicePictureMobile(score);
    await sleep(500);
    playGamestaticMobile();
}

// desactive animation dice
function playGamestaticMobile (){
    animeDiceMobile.style.display = "none";
    staticDiceMobile.style.display = "inline";
}

//  return random numner
function playRandomMobile(){
   if(choicePlayerBool===null){
       window.alert("Cliquez sur nouveau jeu pour démarrer");
       return;
   }
       
       var score=numberRandom(1,6);
       playGameAnimeMobile (score)
       choicePlayerMobile(score);
   
    }

    // choice player
    function choicePlayerMobile(scoreRandom){
        if( choicePlayerBool){
    
            if(scoreRandom>1){
                scorePlayer1=scorePlayer1+scoreRandom;
                scoreCurrentPlayerMobile.innerText=scorePlayer1.toString();
                analyseScore(scorePlayer1);
    
            }else{
                scoreFinalPlayer1=0;
                scorePlayer1=0;
                scoreCurrentPlayerMobile.innerText=scorePlayer1.toString();
                scoreFinal1Mobile.innerText=scoreFinalPlayer1.toString();
                choicePlayerBool=false;
                modifPlayerInterfaceMobile();
                // return;
            }
     
        }else{
            if(scoreRandom>1){
                scorePlayer2=scorePlayer2+scoreRandom;
                scoreCurrentPlayerMobile.innerText=scorePlayer2.toString();
                analyseScore(scorePlayer2);
            }else{
                scoreFinalPlayer2=0;
                scorePlayer2=0;
                scoreFinal2Mobile.innerText=scoreFinalPlayer2.toString();
                scoreCurrentPlayerMobile.innerText.innerText=scorePlayer2.toString();
                choicePlayerBool=true;
                modifPlayerInterfaceMobile();
                // return;
    
            }
           
        }
    
    }

    function modifPlayerInterfaceMobile(){

        if(choicePlayerBool){
            
            modifStringPlayer1.innerText="PLAYER 1";
            colorsMobilePlayer1.style.background = "green";
            colorsMobilePlayer2.style.background = "white";
            changeColors.style.background = "white";
        }else {
            modifStringPlayer1.innerText="PLAYER 2";
            colorsMobilePlayer2.style.background = "green";
            colorsMobilePlayer1.style.background = "white";
            changeColors.style.background = "white";
           
        }
    }
    function saveScoreFinalMobile(){
        if(choicePlayerBool===null){
            window.alert("Cliquez sur nouveau jeu pour démarrer");
            return;
        }
    
        if(choicePlayerBool){
            scoreFinalPlayer1=scoreFinalPlayer1+scorePlayer1;
            scoreFinal1Mobile.innerText=scoreFinalPlayer1.toString();
            
            choicePlayerBool=false;
            scorePlayer1=0;
            scoreCurrentPlayerMobile.innerText=scorePlayer1.toString();
            modifPlayerInterfaceMobile();
            analyseScore(scoreFinalPlayer1);
            
        }else{
            scoreFinalPlayer2=scoreFinalPlayer2+scorePlayer2;
            scoreFinal2Mobile.innerText=scoreFinalPlayer2.toString();
            modifPlayerInterfaceMobile();
            choicePlayerBool=true;
            scorePlayer2=0;
            scoreCurrentPlayerMobile.innerText=scorePlayer2.toString();
            modifPlayerInterfaceMobile();
            analyseScore(scoreFinalPlayer2);
            }
    
    }