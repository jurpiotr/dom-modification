console.log('I am b.js!');
const tbody = document.querySelector('tbody');
const players = tbody.querySelectorAll('tr');

// B.1 - Wyświetl na stronie sumę goli strzelonych przez graczy
one = () => {
    let sumGoals = 0;
    players.forEach((player) => {
        sumGoals += parseInt(player.lastElementChild.innerText);
    });
    const sum = document.createElement('p');
    sum.innerText = 'Suma strzelonych bramek: ' + sumGoals;
    tbody.appendChild(sum);
}

// B.2 - Zaznacz gracza z największą ilością goli ustawiając tło na zielone
two = () => {
    let maxGoals = 0;
    players.forEach((player) => {
        if(parseInt(player.lastElementChild.innerText) > maxGoals){
           maxGoals = parseInt(player.lastElementChild.innerText);
           console.log(player.children[1]);
        }
    });
    players.forEach((player) => {
        if(parseInt(player.lastElementChild.innerText) === maxGoals){
            player.children[1].style ='background-color: green;';
        }
    });
}

// B.3 - Zaznacz gracza z najmniejszą ilością goli ustawiając tło na czerwone
three = () => {
    let minGoals = Number.MAX_SAFE_INTEGER;
    players.forEach((player) => {
        if(parseInt(player.lastElementChild.innerText) < minGoals){
           minGoals = parseInt(player.lastElementChild.innerText);
        }
    });
    players.forEach((player) => {
        if(parseInt(player.lastElementChild.innerText) === minGoals){
            player.children[1].style ='background-color: yellow;';
        }
    });
}

// B.4 - Posortuj i wyświetl graczy po id


// B.5 - Posortuj i wyświetl graczy po cenie z data-atrybutu
let price;
let price2;
five = () => {
    players.forEach((player) => {
        price = parseInt(player.dataset.price);
        price2 = player.nextElementSibling;
        console.log(price2);
    });
    
    console.log(price);
}

// B.6 - Usuń graczy z ceną wyższą nić 60 m USD
// B.7 - Dodaj kolumnę zawierającą cenę gracza
// B.8 - Zostaw tylko graczy z PSG na liście
// B.9 - Dodaj do nazwy klubu ikonkę klubu
// B.10 - wyświetl na stronie nazwę najlepszego gracza
// B.11 - wyświetl na stronie nazwę gracza najdroższego
// B.12 - wyświetl na stronie gracza z najlepszym stosunkiem ceny do strzelonych bramek