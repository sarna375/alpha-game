function hideId(Id){
    const element=document.getElementById(Id);
    element.classList.add('hidden');
}

function showId(Id){
    const element=document.getElementById(Id);
    element.classList.remove('hidden');
}

// color
function addColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}

// random-alphabet
function getAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabets=alphabetString.split('');
    // console.log(alphabets);

    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    return alphabet;
}