const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"

    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"

    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 4
    },
    {
        question: "Which language is used for web apps?",
        options: ["Python", "JavaScript", "C#", "Java"],
        correct: "JavaScript"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "J.K. Rowling", "William Shakespeare", "Leo Tolstoy"],
        correct: "William Shakespeare"
    }
];

const questionsContainer = document.querySelector(".questionsContainer")
const quizForm = document.getElementById("quizForm")
const questionContainer = document.querySelector(".questionContainer")
const feedBack = document.querySelector(".feedBack")

function LoadQuestions(questions) {
    questionContainer.innerHTML += questions.map((question, index) => {
        return `
        <h4>${index + 1}.${question.question}?</h4>
        <ul>
            <li>
                <input type="radio" name="question${index}" id="${question.options[0]}" value="${question.options[0]}">
                <label for="${question.options[0]}">${question.options[0]}</label>
            </li>
            <li>
                <input type="radio" name="question${index}" id="${question.options[1]}" value="${question.options[1]}">
                <label for="${question.options[1]}">${question.options[1]}</label>
            </li>
            <li>
                <input type="radio" name="question${index}" id="${question.options[2]}" value="${question.options[2]}">
                <label for="${question.options[2]}">${question.options[2]}</label>
            </li>
            <li>
                <input type="radio" name="question${index}" id="${question.options[3]}" value="${question.options[3]}">
                <label for="${question.options[3]}">${question.options[3]}</label>
            </li>
        </ul>`
    }).join("")

}


LoadQuestions(questions)

quizForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let score = 0

    questions.forEach((question, index) => {
        let answer = document.querySelector(`input[name='question${index}']:checked`)
        console.log(answer);

        if (answer && answer.value == question.correct) {
            score++
        }
    })

    feedBack.innerHTML = `Your score ${score} out of ${questions.length}`
})