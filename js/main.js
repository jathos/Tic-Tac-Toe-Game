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
        winner:   {
            turn: 2,
            selections: {
                w1: ["a1", "a2", "a3"],
                w2: ["b1", "b2", "b3"],
                w3: ["c1", "c2", "c3"],
                w4: ["a1", "b1", "c1"],
                w5: ["a2", "b2", "c2"],
                w6: ["a3", "b3", "c3"],
                w7: ["a1", "b2", "c3"],
                w8: ["a3", "b2", "c1"]
            },
        }
    };

const squares = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

/*----- app's state (variables) -----*/
let turnNum = 0;
/*----- cached element references -----*/

const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");

/*----- event listeners -----*/
const clickA1 = a1.addEventListener('click', function(evt) {
    clickedSquare(a1);
}, {once: true});
const clickA2 = a2.addEventListener('click', function(evt) {
    clickedSquare(a2);
}, {once: true});
const clickA3 = a3.addEventListener('click', function(evt) {
    clickedSquare(a3);
}, {once: true});
const clickB1 = b1.addEventListener('click', function(evt) {
    clickedSquare(b1);
}, {once: true});
const clickB2 = b2.addEventListener('click', function(evt) {
    clickedSquare(b2);
}, {once: true});
const clickB3 = b3.addEventListener('click', function(evt) {
    clickedSquare(b3);
}, {once: true});
const clickC1 = c1.addEventListener('click', function(evt) {
    clickedSquare(c1);
}, {once: true});
const clickC2 = c2.addEventListener('click', function(evt) {
    clickedSquare(c2);
}, {once: true});
const clickC3 = c3.addEventListener('click', function(evt) {
    clickedSquare(c3);
}, {once: true});

/*----- functions -----*/

//function clickedB2() {
//    b2.innerText = players.player2.mark;
//    players.player2.selections.push("b2");
//    console.log(players.player2.selections);
//} ***this is proof of concept code for reference, if needed***

function clickedSquare(x) {
    x.innerText = players.player2.mark;
    players.player2.selections.push(x.id);
    console.log(players.player2.selections);
    x.removeEventListener('click', function(){clickedSquare(b2)});
};

//do {
    //if (turnNum = 0) {
        
//    } else if (turnNum = 1) {

//    }
//}
//while (!players.winner.turnNum = 2);






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
//          b) add or subtract a number from the turnNum variable (this could be its
//              own separate function)
//          c) remove the event listener
//      3) create an init function that sets all the variables to their starting points
//      4) build a do / while loop that contains an if / then statement that allows
//          the game to be played.  This do / while and the if / then will 
//          make use of the turnNum variable to decide if the game should continue
//          or should stop and declare a winner and exit the loop.
//      5) RENDER FUNCTION???  (perhaps all of step #4 can happen in this function)



///4/2/22 - 4:45pm - I've consolidated some code, and implemented a function on each square
///     that will display a mark, register the clicked square, and then remove the 
///     eventlistener after a click.