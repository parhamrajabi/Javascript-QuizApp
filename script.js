const questions = [
    {
        question : "which is largest animal in the world?" ,
        answer : [
            {Text: "shark" , correct : false} ,
            {Text: "Blue whale" , correct : true} ,
            {Text: "elephant" , correct : false} ,
            {Text: "girrafe" , correct : false} ,
        ]
    } ,
    {
        question : "which is smallest continent in the world?" ,
        answer : [
            {Text: "asia" , correct : false} ,
            {Text: "australia" , correct : true} ,
            {Text: "arctic" , correct : false} ,
            {Text: "africa" , correct : false} ,
        ]

    } ,
    {
        question : "which is largest desert in the world?" ,
        answer : [
            {Text: "kalahari" , correct : false} ,
            {Text: "gobi" , correct : false} ,
            {Text: "sahara" , correct : false} ,
            {Text: "antarctica" , correct : true} ,
        ]
    } ,
    {
        question : "which is largest animal in the world?" ,
        answer : [
            {Text: "shark" , correct : false} ,
            {Text: "Blue whale" , correct : true} ,
            {Text: "elephant" , correct : false} ,
            {Text: "girrafe" , correct : false} ,
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion () {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add ("correct");
        score++;
    }else {
        selectedBtn.classList.add ("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === " true");{
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}` ;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click" , () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton ();
    }else {
        startQuiz();
    }
});

startQuiz();