const game = require("../app/game.js");
const assert = require('assert');

describe('Game functions tests', function() {

    it("Smart strategy test", async () => {
        assert.equal(
            game.STRATEGIES.smart(
                [1,1,0,
                 0,0,0,
                 0,0,0]
            ), 2);

        assert.equal(
            game.STRATEGIES.smart(
                [1,1,0,
                 1,0,0,
                 2,2,0]
            ), 8);
    });

    it("Stupid strategy test", async () => {
        const idx = game.STRATEGIES.stupid(
            [1,1,0,
             0,0,0,
             0,0,0]
        );
        assert.ok(1 < idx && idx < 9);
    });

    it("User should be winner", async () => {
        const userWinner =
            [1,1,1,
             2,0,0,
             0,0,2];

        assert.equal(game.checkWinner(userWinner), "user");
    });


    it("Computer should be winner", async () => {
        const computerWinner =
            [2,1,0,
             1,2,1,
             0,1,2];

        assert.equal(game.checkWinner(computerWinner), "computer");
    });

    it("Nobody is winner, game continues", async () => {
        const nobodyWinner =
            [2,0,2,
             1,0,1,
             2,1,1];

        assert.equal(game.checkWinner(nobodyWinner), "nobody");
    });
});
