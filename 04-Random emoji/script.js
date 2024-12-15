const btnEl = document.getElementById("btn");
const nameEl = document.getElementById("name");
const apiKey = "aecfed21bee75c62f7fa3c301432a90260fa6278";
const apiURL = "https://emoji-api.com/emojis?access_key=";

const emoji = [];

async function getEmoji() {
  try {
    const response = await fetch(apiURL + apiKey);
    const data = await response.json();

    for (let i = 0; i < 1500; i++) {
      emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
      });
    }
  } catch (error) {}
}
getEmoji();

btnEl.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNumber].emojiName;
  nameEl.innerText = emoji[randomNumber].emojiCode;
});
