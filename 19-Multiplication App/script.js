// const resultEl = document.getElementById('result');
// const btnEl = document.getElementById('btn');
// const scoreEl = document.getElementById('score');
// const questionEl = document.getElementById('question');

// function multiplyFunc(){
//     const Multi = [
//         {
//             question : "What is 10 multiply by 10",
//             anw : 100,
//         },
//         {
//             question : "What is 9 multiply by 3",
//             anw : 27
//         },
//         {
//             question : "What is 6 multiply by 6",
//             anw : 36
//         }
//     ]
// }
// btnEl.addEventListener('click', multiplyFunc);

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
// const btnEl = document.getElementById("btn");
const formEl = document.getElementById("form");
const resultEl = document.getElementById("result");

let score = 0;

//JSON.parse(localStorage.getItem("score")) ("Giving Error")

if (!score) {
  score = 0;

}

resultEl.innerText = score;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage(score) {
  localStorage.setItem("score", JSON.stringify(score));
}


