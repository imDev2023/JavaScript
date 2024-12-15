const btnEl = document.getElementById('btn');
const qouteEl = document.getElementById('qoute');
const authorEl = document.getElementById('author');
apiKey = '/jpMZ9Bq7CwK+H9uK1cfEw==jRJ7nKjLjcbsXVyY';


async function genQuote(){

    try {       
        qouteEl.innerText = '...loading'
        btnEl.disabled = true;
        authorEl.innerText='... updating'
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json();
        qouteEl.innerText = data.content
        authorEl.innerText =`~${data.author}`
        btnEl.disabled = false;


    } catch (error) {
        qouteEl.innerText = "Please try again, something wrong with the network";
        qouteEl.style.color = 'red'
        authorEl.innerText ="trying to fetch the data";
        authorEl.style.color = 'red'
    }
}
btnEl.addEventListener('click', genQuote);

    //  `${generateQuote[0]}`;
    //  = `${generateQuote[1]}`;

