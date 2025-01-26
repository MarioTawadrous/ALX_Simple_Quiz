function checkAnswer() {
    const correctAnswer = "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer;

    if (selectedAnswer) {
        userAnswer = selectedAnswer.value;
    } else {
        userAnswer = null; // Handle the case where no answer is selected
    }

    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else if (userAnswer === null) {
        feedbackElement.textContent = "Please select an answer.";
    }
     else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
