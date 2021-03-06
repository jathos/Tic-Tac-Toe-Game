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
                w8: ["a3", "b2", "c1"],
                tie: ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
            }
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
const button = document.querySelector("button");

/*----- event listeners -----*/
//function render() {
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
const clickButton = button.addEventListener('click', function(evt) {
    init();
});
//};
//render();

/*----- functions -----*/

function clickedSquare(x) {
    console.log(turnNum);
    if (turnNum === 0) {
        x.innerText = players.player1.mark;
        players.player1.selections.push(x.id);
        turnNum = 1;
} else if (turnNum === 1) {
        x.innerText = players.player2.mark;
        players.player2.selections.push(x.id);
        turnNum = 0
    };
    console.log(turnNum);
    console.log(players.player1.selections);
};

function init() {
/*    turnNum = 0;
    players.player1.selections = [];
    players.player2.selections = [];
    a1.innerText = "";
    a2.innerText = "";
    a3.innerText = "";
    b1.innerText = "";
    b2.innerText = "";
    b3.innerText = "";
    c1.innerText = "";
    c2.innerText = "";
    c3.innerText = "";
    console.log(players.player1.selections);
    render();*/ /*this introduced some weird bugs */
    location.reload();
}

//function clickedSquare(x) {
//    x.innerText = players.player2.mark;
//    players.player2.selections.push(x.id);
//    console.log(players.player2.selections);
//};
//  ***this is functioning code to return to, if needed



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



///4/2/22 - 4:45pm - I've consolidated some code, and implemented a function on each 
///     square that will display a mark, register the clicked square, and then remove
///     the eventlistener after a click.


///4/2/22 - 5:29pm - I've incorporated an if statement into my click square function 
///     that now enables the game to switch back and forth between x and o. Going to
///     take a break for now.


///4/2/22 - 11:10pm - I've fixed the issue where my board would re-size on every
///     click, have added a button and a init function that clears the game when
///     clicked.  
///     I would like to add a function that checks to see if someone has won the
///     game or if there is a tie, along with visual style flourishes and additional
///     functionality that might make the project more my own.  Unfortunately, I
///     do not know if I will have time to implement any of these extra features.

///4/2/22 - 11:16pm - Just found a bug where a square can not be clicked again, even
///     after clicking the start button and invoking the init function

///4/2/22 - 11:34pm - I tried a render function that would add all of the event
///     listeners again when invoked, but that introduced even more bugs.  I
///     settled on a much simpler work-around that would simply refresh the page
///     when the init function is invoked