import { db } from "./db.js";
import {
    welcomeContainer,
    startButton,
    quizContainer,
    questionElement,
    optionsElement,
    nextButton,
    progressElement,
    resultContainer,
    scoreElement,
    totalQuestionsElement,
    restartButton
} from "./dom.js";

const quizData = db;
let currentQuestionIndex = 0;
let score = 0;

// Initialize app
function initApp() {
    welcomeContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    // Hide welcome and result screens
    welcomeContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    // Show quiz interface
    quizContainer.classList.remove('hidden');
    // Load first question
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
    
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    nextButton.classList.add("hidden");
}

// ... keep the selectAnswer, showResult functions same as previous version ...

function selectAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = optionsElement.querySelectorAll('.option');
    
    options.forEach(option => {
        option.disabled = true;
        if (option.textContent === currentQuestion.correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedOption) {
            option.classList.add('incorrect');
        }
    });

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
    
    nextButton.classList.remove('hidden');
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = quizData.length;
}

// Event Listeners
startButton.addEventListener("click", startQuiz);

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    // Hide both result and quiz containers
    resultContainer.classList.add('hidden');
    quizContainer.classList.add('hidden');
    // Show welcome screen
    welcomeContainer.classList.remove('hidden');
    // Reset any quiz progress
    loadQuestion();
});


nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Initialize the app
initApp();