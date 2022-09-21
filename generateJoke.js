const dispJoke = document.querySelector("#joke");
const jokeButton = document.querySelector("#jokeBtn");
jokeButton.addEventListener("click",generateJoke);
 function generateJoke(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        var jokedata = data.value;
        dispJoke.innerHTML = jokedata;
    })
    console.log(joke);
    

}