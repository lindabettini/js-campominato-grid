/*
todo - L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
todo - con difficoltà 1 => tra 1 e 100
todo - con difficoltà 2 => tra 1 e 81
todo - con difficoltà 3 => tra 1 e 49 
todo -  (10 * 10 = 100) (9 * 9 = 81) (7 * 7 = 49) (100% / ${cells}
todo - Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// // FUNZIONI NEUTRE
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

// // PREDO ELEMENTI DA DOM

const grid = document.getElementById('grid');
const selectField = document.getElementById('select-level');

// // AGGIUNGO EVENTO ALLA SELECT

selectField.addEventListener('change', (event) => {

    // ° Creo variabile con valore della Select
    const selectValue = selectField.value;
    console.log(selectValue);

    // ° Stampo scelta della Select
    const selectMessage = document.getElementById('choice-result'); 
    selectMessage.textContent = `You choose ${event.target.value}`;

    // ° Creo una funzione per calcolare il numero delle celle    
    function calculateCellsNumber(cellsNumber, columnsNumber) {
        const totalCellsNumber = cellsNumber * columnsNumber;
        return totalCellsNumber;
    }

     // ° Creo una funzione per aggiungere celle nel DOM 
     function createCell() {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        return cell;
    }
    // ° Funzione per appendere celle al dom (con dentro funzione CreateCell)
    function appendCell(domContainerOfCell, totalNumberOfCells) {
        for (let i = 0; i < totalNumberOfCells; i++) {
            const cell = createCell();
            domContainerOfCell.appendChild(cell);
            if (selectValue === 'beginner') {
                cell.classList.add('small');
            } else if (selectValue === 'medium') {
                cell.classList.add('medium');
            } else {
                cell.classList.add('large');
            }
        } 
    }

    // ° Attribuisco diverso numero di celle ai diversi valori della Select
    let totalCells;
    switch(selectValue) {
        case 'beginner':
            totalCells = calculateCellsNumber(10, 10);
            appendCell(grid, totalCells);      
            break;
        case 'medium':
            totalCells = calculateCellsNumber(9, 9);
            appendCell(grid, totalCells); 
            break;
        case 'expert':
            totalCells = calculateCellsNumber(7, 7);
            appendCell(grid, totalCells);             
            break;   
    }
        
  });