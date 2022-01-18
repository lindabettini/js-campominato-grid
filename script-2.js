const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min +1)) + min;

const play = () => {
    // ° Cambio testo bottone
    playButton.innerText = 'Ricomincia';

    // ° Elimino eventuale griglia precedente 
    const grid = document.getElementById('grid');
    grid.innerHTML= '';

    // // FASE PREPARATORIA 
    let attempts = 0;
    const TOTAL_BOMBS = 16; 

    const level = document.getElementById('select-level').value;
    
    let totalCells; 
    let cellsPerRow;

    switch (level) {
        case 'beginner':
            totalCells = 100;
            break;
        case 'expert':
            totalCells = 49;
            break;
        default: 
        totalCells = 81;
    }
    cellsPerRow = Math.sqrt(totalCells);

}

const playButton = document.getElementById('play');
playButton.addEventListener('click', play);