const wordStorage = ["test", "random", "generator", "Play"];

const dashesContainer = document.getElementById("answer-section");

function wordDashLengthGenerator(){
    return `<span>_</span>`

}

function dashesLoader(){

    dashesContainer.innerHtml = "";

    let randomWord = wordStorage[(Math.floor(Math.random() * wordStorage.length))];
    let wordLength = randomWord.length

    for(let i = 0; i < wordLength; i++){

        const dashesElements = wordLength

        const dashes = wordDashLengthGenerator(dashesElements)

        dashesContainer.innerHTML += dashes;
    }
}

dashesLoader()
