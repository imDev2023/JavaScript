
const apiKey ='/jpMZ9Bq7CwK+H9uK1cfEw==jRJ7nKjLjcbsXVyY';
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit='
// let limit = 5;


let jokeEl = document.getElementById('joke');
const btnEl = document.getElementById('btn');

const options = {
    method: "GET",
    headers: { "X-Api-Key" : apiKey },
};


async function getJokes(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        const response = await fetch(apiUrl, options)
        const data = await response.json();
        
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
        jokeEl.innerText = (data[0].joke)
    } catch (error) {

        jokeEl.innerText="An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
    }

   
}


btnEl.addEventListener('click', getJokes);
