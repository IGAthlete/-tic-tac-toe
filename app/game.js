/*
Example potential win situation of user
   [1,1,0,
    0,2,0,
    0,0,0];
*/

const INITIAL_GAME_STATE_MATRIX =
    [0,0,0,
     0,0,0,
     0,0,0];

const STRATEGIES = {
    stupid: (gameMatrixState) => {
        let index = 4; //TB removed
        return index;
    },

    smart: (gameMatrixState) => {
        let index = 2; //TB removed
        return index;
    }
};

let gameStateMatrix = INITIAL_GAME_STATE_MATRIX;
let calculateNextComputerStep = STRATEGIES.stupid;

function checkWinner(gameMatrixState) {
    return "computer";
    return "user";
    return "nobody";
}

module.exports = {
    STRATEGIES: STRATEGIES,
    checkWinner: checkWinner
};
