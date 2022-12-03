// wait for the DOM to finish loading before running the game
// Get the button elements and add events listers to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    // Create for loop for iteration of button events
    for (let button of buttons) {
        // Add an event listner for each button click
        button.addEventListener("click", function() {
            // Create an alert if submit button clicked
            // "this" refers to the buttom clicked
            // then get the attributes of the "this", specific buttom
            // if the data type of the button matches with "submit" alert will be executed
            if (this.getAttribute("data-type" ) === "submit") {
                alert("You clicked submit!"); 
                // Create an alert if game buttons clicked
            }   else { 
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);            
            }
        })
    }
})
/**
 * The main game "loop", called when the script is first oladed
 * and after the user's answer has been processed
 */
function runGame() {
    // Create 2 random numbers between 1 and 25
    let num1 = math.floor(math.random() * 25) +1;
    let num2 = math.floor(math.random() * 25) +1;

}

function checkAnswer () {

}

function calculateCorrectAnswer () {

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion () {

}

function displaySubtractQuestion () {

}

function displayMultiplyQuestion () {

}

function displayDivisionQuestion () {

}