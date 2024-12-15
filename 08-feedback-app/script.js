
const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');

let selectRating ="";


ratingEls.forEach((ratingEls)=>{
    ratingEls.addEventListener("click", (e)=>{
        removeActive();
        selectRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active");
    })
})


btnEl.addEventListener('click', ()=>{
    if(selectRating !==""){
        containerEl.innerHTML = `
        <strong> Thank you </strong>
        <br>
        <br>
        <strong>Feedback : ${selectRating}</strong>
        <br>
        <br>
        <p>We'll use your feedback to improve our customer support</p>
        `;
    }
})

function removeActive(){
    ratingEls.forEach((ratingEls)=>{
        ratingEls.classList.remove("active");
    })
}



