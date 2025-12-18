const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://official-joke-api.appspot.com/random_joke";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        console.log("item",item);
        jokeContainer.textContent = `${item.setup}: ${item.punchline}`;
        jokeContainer.classList.add("fade");
});
}
btn.addEventListener("click",getJoke);
getJoke();
