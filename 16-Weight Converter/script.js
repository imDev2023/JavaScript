// let convertedEl = document.getElementById('converted');

// const numberEl = document.getElementById('number');

// function weightConvertor(){

//     if(numberEl <=1 || numberEl >= 500){
//         convertedEl.innerText= "Please enter a number between 1 and 500"
//     }

//     weightKG = numberEl.value * 0.45359237
//     convertedEl.innerText = weightKG.toFixed(2);
//     console.log(convertedEl);

// }

// numberEl.addEventListener('change', weightConvertor)

const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");

let errorTime;
let resultTime;

function upDateResults() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  } else {
    
    resultEl.innerText = +(inputEl.value * 0.45359237).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
        resultEl.innerText = "";
        inputEl.value = "";
        
      }, 5000);
  }
}

inputEl.addEventListener("input", upDateResults);
