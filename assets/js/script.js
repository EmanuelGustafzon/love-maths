//
//

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition")
});
/**
 * The main game 'loop , called when thescript is first loaded 
 * and after the user's answer has been processed.
 */
function runGame (gameType) {
    // Create two randome numbers between 1 and 25.
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
} else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
} else if (gameType === "substract") {
    displaySubstractQuestion(num1, num2);
}
 else {
    alert(`Unknown game type: ${gameType}`)
    throw `Unknown game type:  ${gameType}. Aborting!`;
}



}
/**
 * Checks  the answer agaist the first element in
 * the returned calculateCorrectAnswer
 */
 function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");   
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}
/**
 * Gets the operator (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns thecorrect answer
 */
 function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "*") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "substract"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}
/**
 * Gets the cuurent score from he DOM and increments it by 1
 */
function incrementScore() {
   let oldScore = parseInt(document.getElementById('score').innerText);
   document.getElementById('score').innerText = ++oldScore;


}
/**
 * Gets the current amount of inncorrect answers from he DOM and increments it by 1
 */

function incrementWrongAnswer () {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
 
}

function displayAdditionQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 
    document.getElementById('operand2').textContent = operand2 
    document.getElementById('operator').textContent = '+';
}



function displaySubstractQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand2 < operand1 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '*';
}