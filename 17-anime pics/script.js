const btnEl = document.getElementById('btn');
const animeContainerEl = document.getElementById('anime-container');
const animeImgEl = document.getElementById('anime-img')
const animeNameEl = document.getElementById('anime-name');

const apiUrl = 'https://api.waifu.im/search'
const params = {
    included_tags: 'maid',
    height: '>=2000'
}

const queryParams = new URLSearchParams(params);
const requestURL = `${apiUrl}?${queryParams}`;

async function getAnime(){
    try {
        
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "updating..."
        animeImgEl.src = "spinner.svg";
        const response = await fetch(requestURL);
        const data = await response.json();
        console.log(data);
        btnEl.disabled= false;
        btnEl.innerText = "Get Anime"
        animeContainerEl.style.display ="block";
        animeImgEl.src = data.images[16].url
        animeNameEl.innerText = data.artist;
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        animeNameEl.innerText = "An Error Happened";
    }
}



btnEl.addEventListener("click", getAnime);