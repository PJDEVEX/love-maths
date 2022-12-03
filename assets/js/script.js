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

function runGame() {

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