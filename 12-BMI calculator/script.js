const btnEl = document.getElementById('btn');


function calculateBMI(){
    
    let heightEl = document.getElementById('height').value;
    let weightEl = document.getElementById('weight').value;
    let resultEl = document.getElementById('result');
    const weightCondition = document.getElementById('weight-condition');

    resultEl.value = ((weightEl / heightEl / heightEl) * 10000).toFixed(1);
    
    if (resultEl.value <= 18.4){
        weightCondition.innerText = "Underweight";
    } else if (resultEl.value === 18.5 || resultEl.value <= 24.9){
        weightCondition.innerText = "Normal";
    } else if (resultEl.value === 25 || resultEl.value <= 29.9){
        weightCondition.innerText = "Overweight";
    } else if (resultEl.value >=30.0){
        weightCondition.innerText = "Obese";
    }

}


btnEl.addEventListener("click", calculateBMI);