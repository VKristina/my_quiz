// Запитання
const quizData = [{
        question: "В якій країні знаходиться найстаріша у світі аптека?",
        a: "Ватикан",
        b: "Данія",
        c: "Андорра",
        d: "Швейцарія",
        correct: "a",
    },
    {
        question: "Найменша країна Європи",
        a: "Сан–Марино",
        b: "Ватикан",
        c: "Мальта",
        d: "Андорра",
        correct: "b",
    },
    {
        question: "В якій країні густота населення на 1км² найбільша у світі?",
        a: "Мальта",
        b: "Люксембург",
        c: "Монако",
        d: "Данія",
        correct: "c",
    },
    {
        question: "Країна розташована на 7 островах",
        a: "Ірландія",
        b: "Зеландія",
        c: "Мальта",
        d: "Монако",
        correct: "c",
    },
    {
        question: "Найстаріша республіка в світі",
        a: "Сан-Марино",
        b: "Андорра",
        c: "Мальта",
        d: "Монако",
        correct: "a",
    },
];

// Selectors
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Вибрати відповідь
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // Перевірте, щоб побачити відповідь
    const answer = getSelected();

    //Підрахунок вівдповідді
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <br>
            
            <h2>Ви правильно відповіли на ${score} з ${quizData.length} запитань</h2>

            <br>
            <button onclick="location.reload()">Повторити</button>
          `;
        }
    }
});