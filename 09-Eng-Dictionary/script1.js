const inputEl = document.getElementById('input');
const titleEl = document.getElementById('title');
const meaningEl = document.getElementById('meaning')
const meaningContainerEl = document.getElementById('meaning-container')
const infoTextEl = document.getElementById('info-text');




async function fetchAPI(word){
    try {   
            
            meaningContainerEl.style.display = "none";
            infoTextEl.style.display ="block"
            infoTextEl.innerText = `Searching the meaning of "${word}"`;
            const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            const response = await fetch(apiUrl)
            const data = await response.json();
            console.log(data);

            titleEl.innerText = data[0].word
            meaningEl.innerText = data[0].meanings.definitions[0]

            infoTextEl.style.display = "none";
            meaningContainerEl.style.display = "block";
    } catch (error) {
        
    }
}




inputEl.addEventListener('keyup', (e)=>{
    if(e.target.value && e.key === "Enter"){
       fetchAPI( e.target.value);

    }
})