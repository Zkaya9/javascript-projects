const whoWon  = require('../RPS.js');

describe("whoWon", function(){
    
    test('if users  choose same option', function(){
        expect(whoWon('rock', 'rock')).toBe('TIE!');
        expect(whoWon('paper', 'paper')).toBe('TIE!');
        expect(whoWon('scissors', 'scissors')).toBe('TIE!');
        });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
        let output = whoWon('rock', 'paper');
        expect(output).toEqual("Player 2 wins!");
      });
      
      test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function() {
        let output = whoWon('paper', 'scissors');
        expect(output).toEqual("Player 2 wins!");
      });
      
      test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function() {
        let output = whoWon('scissors', 'rock');
        expect(output).toEqual("Player 2 wins!");
      });
      
      test("returns 'Player 1 wins!' if P1 = paper & P2 = rock", function() {
        let output = whoWon('paper', 'rock');
        expect(output).toEqual("Player 1 wins!");
      });
      
      test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", function() {
        let output =whoWon('scissors', 'paper');
        expect(output).toEqual("Player 1 wins!");
      });
      
      test("returns 'Player 1 wins!' if P1 = rock & P2 = scissors", function() {
        let output = whoWon('rock', 'scissors');
        expect(output).toEqual("Player 1 wins!");
      });
})