const wordStorage = ["TEST", "RANDOM", "GENERATOR", "PLAY"];

const dashesContainer = document.getElementById("answer-section");
const letters = document.querySelectorAll('.letter');
const hangedMan = document.getElementById("hang");
const assets = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"]


function wordDashLengthGenerator(){
    return `
            <span>_</span>`

}

function dashesLoader(){

    // dashesContainer.innerHtml = "";

    letters.forEach(letter => {
        letter.addEventListener('click', function handleClick(event) {

            for(let i = 0; i < wordLength; i++){

                let assetsLoader = assets[i]
            
            
              if (randomWord.includes(letter.innerHTML)){
                
                dashesContainer.innerHTML += `<span>${letter.innerHTML}</span>`;
                console.log("included")
              }
              else(
                hangedMan.innerHTML += `<img src="../assets/${assetsLoader}.svg"/>`
                
                // `"<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                // // <circle cx="20.5" cy="20.5" r="19" stroke="#5D63B9" stroke-width="3" stroke-linecap="round"/>
                // // </svg>
                // // "`
              )}
        });
      });

    let randomWord = wordStorage[(Math.floor(Math.random() * wordStorage.length))];
    console.log(randomWord)
    let wordLength = randomWord.length

    for(let i = 0; i < wordLength; i++){

        const dashesElements = wordLength

        const dashes = wordDashLengthGenerator(dashesElements)

        dashesContainer.innerHTML += dashes;
    }
    
    
}

dashesLoader()

