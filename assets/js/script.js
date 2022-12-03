// wait for the DOM to finish loading before running the game
// Get the button elements and add events listers to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    // Create for loop for iteration of button events
    for (let button of buttons) {
        // Add an event listner for each button click
        button.addEventListener("click", function () {
            // Create an alert if submit button clicked
            // "this" refers to the buttom clicked
            // then get the attributes of the "this", a specific buttom
            // if the data type of the button matches with "submit" answer will be checked
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                // Create an alert if game buttons clicked
            } else {
                let gameType = this.getAttribute("data-type");
                // Let the game to run when buttom loaded 
                runGame(gameType);
            }
        })
    }

    // Let user to submit answers using enter key
    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    // Set addition as the default game
    runGame("addition");

});
/**
 * The main game "loop", called when the script is first oladed
 * and after the user's answer has been processed
 */
// Set parameters to runGame that is gameType
function runGame(gameType) {

    // Make the answer box empty for a new attempt always
    document.getElementById("answer-box").value = "";
    // Get the cursor point always on answer box
    document.getElementById("answer-box").focus();


    // Create 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    // check which game type is running using if statement
    // call appropriate function
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    }   else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    }   else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    }   else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    }else {
        // alert the user if a undefined game is selected and notifiy for debugging
        alert(`Unkown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Check the answer agaisnt the first element in
 * the returned calcualteCorrectAnswer array 
 */
function checkAnswer() {

    // Retriving the user answer from DOM
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    // Getting the correct answer from the fuction
    let calcualtedAnswer = calculateCorrectAnswer();
    // See whether the user answer is right
    let isCorrect = userAnswer === calcualtedAnswer[0];

    if (isCorrect) {
        // if correct, wish him
        alert("Hey! You got it right! :D");
    } else {
        // if wrong encourage him
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calcualtedAnswer[0]}!`);
    }

    // Run a another game from the same type
    runGame(calcualtedAnswer[1]);

    }

/**
 * Get the operands (the numbers) and operator (+, -, /, x)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    // by default js consider all data get from DOM as string
    // use parseInt to convert string to umbers
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    // Check the operator before execution of the function
    if (operator === "+") {
        // perform if it is addition
        return [operand1 + operand2, "addition"];
    }   else if (operator === "-") {
        // perform if it is substract
        return [operand1 - operand2, "subtract"];
    }   else if (operator === "x") {
        // perform if it is multiply
        return [operand1 * operand2, "multiply"];
    }   else if (operator === "/") {
        // perform if it is division
        return [operand1 / operand2, "division"];
    }
    // if not, abort and notify in the console for debugging
        else {
        alert(`Unimplementable operator ${operator}`);
        throw `Unimplementable operator ${operator}. Aborting`;
    }
    }

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldscore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldscore;
}

/**
 * Gets the current incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    
    let oldscore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldscore;
}

// interrogating html and calling elements that have operand1, operand2 and operator
function displayAdditionQuestion(operand1, operand2) {

    // Add functionality to addition question
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

// interrogating html and calling elements that have operand1, operand2 and operator
function displaySubtractQuestion(operand1, operand2) {

    // Add functionality to substact question
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";

}

// interrogating html and calling elements that have operand1, operand2 and operator
function displayMultiplyQuestion(operand1, operand2) {

    // Add functionality to multiply question
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}

// interrogating html and calling elements that have operand1, operand2 and operator
function displayDivisionQuestion(operand1, operand2) {

    // Add functionality to division question
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";

}