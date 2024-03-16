// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround=document.getElementById('play-ground')
//     playGround.classList.remove('hidden');
// }
function btnPress(event){
    const playerPressed=event.key;
    // console.log('press', playerPressed)

    const alphabetElement = document.getElementById('current-alphabet');
    const cAlphabet=alphabetElement.innerText;
    const expectedAlphabet=cAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check
    if(playerPressed === expectedAlphabet){
        const currentScoreElement=document.getElementById('current-score');
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        // console.log(currentScoreText);

        const newScore=currentScore+1;
        currentScoreElement.innerText=newScore;



        removeColor(expectedAlphabet);
        continueGame();
    }
    else{
        // console.log('miss the point')
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
    showId('play-ground');
    continueGame();
}