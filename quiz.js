const quizData = [{
    question:"JavaScript is an ______ language",
    a: "Object Oriented",
    b: "Object Based",
    c: "Procedural",
    d: "None of these",
    correct: "a",
},
{
    question: "Which of the following method is used to access HTML elemets using Javascript",
    a: "getElementbyId()",
    b: "getElementsbyClassName()",
    c: "Both a and b",
    d: "None of these",
    correct: "c",
},
{
    question: "What keyword is used to check whether a given keyword is valid or not?",
    a: "in",
    b: "is in",
    c: "exists",
    d: "lies",
    correct: "a",
},
{
    question: "What is the output for the following code snippet?: print(NaN == NaN)",
    a: "true",
    b: "false",
    c: "undefined",
    d: "erorr",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);