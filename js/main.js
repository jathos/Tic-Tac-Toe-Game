/*----- constants -----*/
const players = {
        player1:  {
            mark: "X",
            turn: 0,
            selections: []
        },
        player2:  {
            mark: "O",
            turn: 1,
            selections: []
        },
        winner: {
            turn: 2,
            selections: {
                w1: [a1, a2, a3],
                w2: [b1, b2, b3],
                w3: [c1, c2, c3],
                w4: [a1, b1, c1],
                w5: [a2, b2, c2],
                w6: [a3, b3, c3],
                w7: [a1, b2, c3],
                w8: [a3, b2, c1]
            }
        }
    };
/*----- app's state (variables) -----*/
let turnNum = 0;
/*----- cached element references -----*/
const b2 = document.getElementById("b2");
/*----- event listeners -----*/
const clickB2 = b2.addEventListener('click', function(evt) {
    clickedB2();
});
/*----- functions -----*/
function clickedB2() {
        b2.innerText = players.player2.mark;
    players.player2.selections.push("b2");
    console.log(players.player2.selections);
}


do {
    if (turnNum = 0) {
        
    } else if (turnNum = 1) {

    }
}
while (!players.winner.turnNum = 2);






//////notes:
//4/1/22 - 4:21pm - I have set up my tic tac toe grid and named all the data
//      that I think I need to name.  I've managed to get the grid to show an
//      x or an o when it is clicked, but I have not yet started to try and make 
//      the events alternate between X and then O. I believe my next steps should
//      be to:
//      1) add event listeners to each grid space
//      2) create functions that say what should happen when a square is clicked.
//      These functions should:
//          a) change the inner text
//          b) remove the event listener
//      3) create an init function that sets all the variables to their starting points
//      4) build a do / while loop that contains an if / then statement that allows
//          the game to be played.  This do / while and the if / then will 
//          make use of the turnNum variable to decide if the game should continue
//          or should stop and declare a winner and exit the loop.
//      5) RENDER FUNCTION???  (perhaps all of step #4 can happen in this function)