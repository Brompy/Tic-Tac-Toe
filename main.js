// Game logic: turns and win states
const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winningStates: [
        // by Rows
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],

        // by Columns
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],

        //by Diagonal
        ['0', '4', '8'],
        ['2', '4', '6']
    ]
}

// Add events for clicking on squares

document.addEventListener('click', event => {
    const target = event.target
    const isCell = target.classList.contains('grid-cell')
    const isDisabled = target.classList.contains('disabled')

    if (isCell && !isDisabled) {
        //Player clicks on a cell that's empty
        const cellValue = target.dataset.value

            game.xTurn === true
            ? game.xState.push(cellValue)
            : game.oState.push(cellValue)
        
            target.classList.add('disabled')
            target.classList.add(game.xTurn ? 'x' : 'o')
    
    }
});
