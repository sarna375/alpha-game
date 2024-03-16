// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround=document.getElementById('play-ground')
//     playGround.classList.remove('hidden');
// }
function btnPress(event){
    const playerPressed=event.key;
    // console.log('press', playerPressed)
    if(playerPressed==='Escape'){
        gameOver();
    }

    const alphabetElement = document.getElementById('current-alphabet');
    const cAlphabet=alphabetElement.innerText;
    const expectedAlphabet=cAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check
    if(playerPressed === expectedAlphabet){

        const currentScore=getTextElementValueById('current-score');
        const updatedScore=currentScore+1;
        setTextElementValueById('current-score',updatedScore);


        removeColor(expectedAlphabet);
        continueGame();
    }
    else{
        
        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life',updatedLife);


        if(updatedLife===0){
            gameOver();
        }

        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        // // console.log(currentScoreText);

        // const newLife=currentLife-1;
        // currentLifeElement.innerText=newLife;

        // // console.log('miss the point')
    }
}
document.addEventListener('keyup', btnPress)



function continueGame(){
    const alphabet=getAlphabet();

    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;


    // set bg color 
    addColor(alphabet);

}

function play(){
    hideId('home-screen');
    hideId('final-score');
    showId('play-ground');

    setTextElementValueById('current-life',2);
    setTextElementValueById('current-score',0);
    continueGame();
}
 function gameOver(){
    hideId('play-ground');
    showId('final-score')
    // update final score
    const lastScore=getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the alphabet color
    const currentAlphabet=getElementTextById('current-alphabet');
    removeColor(currentAlphabet);
}