// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround=document.getElementById('play-ground')
//     playGround.classList.remove('hidden');
// }
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