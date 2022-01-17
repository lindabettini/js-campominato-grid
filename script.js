/*
todo - L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
todo - con difficoltà 1 => tra 1 e 100
todo - con difficoltà 2 => tra 1 e 81
todo - con difficoltà 3 => tra 1 e 49 
todo -  (10 * 10 = 100) (9 * 9 = 81) (7 * 7 = 49) (100% / ${cells}
todo - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// // FUNZIONI 
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getUniqueRandomNumber = (min, max, list) => {
    let randNumber;
    do {
        randNumber = getRandomNumber(min, max);
    }   while (list.includes(randNumber));
    
    return randNumber;
}

//ç______________________________________________________
//ç______________________________________________________

// // PRENDO ELEMENTI DA HTML

const grid = document.getElementById('grid');
const selectField = document.getElementById('select-level');

// // CREO LE VARIABILI BASILARI

let selectValue;
let choiceMessage;
let cells;
let colums; 
const totalCells = cells * colums; // ? la sposto giù? 

selectField.addEventListener('change', (event) => {
    // ° Creo variabile con valore della Select
    selectValue = selectField.value;
    console.log(selectValue);
    // ° Stampo scelta della Select
    choiceMessage = document.getElementById('choice-result'); 
    choiceMessage.textContent = `You choose ${event.target.value}`;
    console.log(choiceMessage);
  });

 