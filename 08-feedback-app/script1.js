const ratingEls = document.querySelectorAll('.rating');
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');

let selectRating= "";


ratingEls.forEach((e)=>{
    e.addEventListener('click', (event)=>{
        selectRating = event.target.innerText || event.target.parentNode.innerText;
        removeActive();
        event.target.classList.add('active');
        event.target.parentNode.classList.add('active');
    })
})

btnEl.addEventListener('click', ()=>{
    containerEl.innerHTML= ` Thank you for your feedback : ${selectRating}`

})

function removeActive(){
    ratingEls.forEach((e)=>{
        e.classList.remove('active');
    })
}