const textArea = document.getElementById('textarea')
const totalCounter = document.querySelector('.total-counter');
const remainingCounter = document.querySelector('.remaining-counter');

textArea.addEventListener('keyup', ()=>{
    updateCounter()
});

updateCounter()

function updateCounter(){
   totalCounter.innerText = textArea.value.length;

   remainingCounter.innerText = textArea.getAttribute("maxLength") - textArea.value.length;
}