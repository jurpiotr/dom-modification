console.log('I am a.js!');
const section = document.querySelector('section');
    
// A.1 - Wyświetl zamiast linku, zawartosc znacznika ref
one = () => {
    const ex1 = section.children[0].getAttribute('href');
    console.log(ex1);
}
// A.2 - Dodaj na koniec link do Lubelskiej Akademii IT
two = () => {
    const FirstA = section.children[0];
    const copyFirstA = FirstA.cloneNode(true);
    copyFirstA.innerText = 'Lubelska Akademia IT';
    copyFirstA.href = 'http://lait.pl';
    section.appendChild(copyFirstA);
    console.log(copyFirstA);
}

// A.3 - Ustaw zeby wszystkie linki kierowaly do Lubelskiej Akademii IT
three = () =>{
    const links = section.querySelectorAll('a');
    links.forEach((a) => {
        a.href = 'http://lait.pl';
    });
    console.log(links);
}
// A.4 - Wyswietl tylko oplacone linki
four = () =>{
    const links = section.querySelectorAll('a');
    links.forEach((a) => {
        if(a.dataset.paid === 'false'){
        a.parentElement.removeChild(a);  
        }
    });
}

// A.5 - Ustaw zeby link 6 był opłacony i powtórz poprzednie zadania A.4
five = () =>{
    section.lastElementChild.dataset.paid = 'true';
    console.log(section.lastElementChild);
    four(); 
}