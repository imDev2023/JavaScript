const infoTextEl = document.getElementById("info-text");
const inputEl = document.getElementById("input");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

// let word = "";

async function fetchAPI(word) {
  try {
    infoTextEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    infoTextEl.innerText = `Searching the meaning of "${word}"`;

    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
      console.log(data);
    if (data.title) {
        meaningContainerEl.style.display = "block";
        audioEl.style.display ='none';
        infoTextEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.src = "none";
    } else {
      infoTextEl.style.display = "none";

      meaningContainerEl.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = data[0].word;
      meaningEl.innerText = data[0].meanings[0].definitions[0].definition;
      audioEl.src = data[0].phonetics[0].audio;
    }
  } catch (error) {
    
        infoTextEl.innerText = `An error happened, Please try again`
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
