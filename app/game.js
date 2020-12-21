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
        return index;
    },

    smart: (gameMatrixState) => {
        return index;
    }
};

let gameStateMatrix = INITIAL_GAME_STATE_MATRIX;
let calculateNextComputerStep = STRATEGIES.stupid;
const ALL_POSSIBLE_WIN_POSITIONS = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];

function checkWinner(gameMatrixState) {
    return "computer";
    //return "user";
   // return "nobody";
}

module.exports = {
    STRATEGIES: STRATEGIES,
    checkWinner: checkWinner
};
