console.log('I am a0.js');
// A0.1 - sklonuj div A 10 razy i ustaw go za C
const divA = document.querySelector('body').children[0];
const divB = document.querySelector('body').children[1];
const divC = document.querySelector('body').children[2];

const body = document.querySelector('body');
        
one = () => {
    const behindDivC = document.querySelector('body').lastChild;
    for(let i = 0; i < 11; i++){
    const behindDivC = document.querySelector('body').lastChild;
        body.insertBefore(divA.cloneNode(true),behindDivC);
    }
}

// A0.2 - zastąp div B i C na div A
two = () => {
    body.replaceChild(divA.cloneNode(true),divB);
    body.replaceChild(divA.cloneNode(true),divC);
}
// A0.3 - usuń akapity ze wszystkich div
three = () => {
    const paragraphs = body.querySelectorAll('div > p');
    const arr = Array.from(paragraphs);
    for(let i = 0; i < arr.length; i++){
        arr[i].remove('p')
    }
}
// A0.4 - przestaw miejscami tak zeby było C, B, A
four = () => {
    body.insertBefore(divA.cloneNode(true),divC);
    body.insertBefore(divC.cloneNode(true),divB);
    body.removeChild(body.firstElementChild);
    body.removeChild(body.lastElementChild.previousElementSibling);
}

// A0.5 - wstaw diva D na koniec
five = () => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = 'D';
    body.appendChild(newDiv);
}
// A0.6 - wstaw diva Z przed A
// A0.7 - wstaw diva z napisem Brake pomiędzy A i B oraz B i C
// A0.8 - wstaw do srodka diva B liste <ul></ul>
// A0.9 - wstaw do diva C sklonowane divy A, B, C