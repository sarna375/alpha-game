// show and hide 
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

function removeColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}



// life and score 
function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}



function getElementTextById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text;
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