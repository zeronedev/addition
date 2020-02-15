const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const question = document.querySelector(".js-question");
const answer = document.querySelector(".js-answer");

let correctAnswer;
let number1;
let number2;

function newQuestion() {
  number1 = Math.ceil(Math.random() * 9);
  number2 = Math.ceil(Math.random() * 9);
  correctAnswer = number1 + number2;
  question.textContent = number1 + " + " + number2 + " = ? ";
}

function handleSubmit(event) {
  event.preventDefault();
  const inputAnswer = Number(input.value);
  console.log(correctAnswer, inputAnswer);
  if (inputAnswer === correctAnswer) {
    answer.textContent = "딩동댕!!! 정답 : " + correctAnswer;
    input.value = "";
    newQuestion();
    input.focus();
  } else {
    answer.textContent = "땡!!! 다시 입력하세요";
    input.value = "";
    input.focus();
  }
}

function init() {
  newQuestion();
  input.focus();
  form.addEventListener("submit", handleSubmit);
  console.log(question);
}

init();
