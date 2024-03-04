const wordStorage = ["TEST", "RANDOM", "GENERATOR", "PLAY"];

const dashesContainer = document.getElementById("answer-section");
const letters = document.querySelectorAll('.letter');
const hangedMan = document.getElementById("hang");
const assetsClasses = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"]

function wordDashLengthGenerator() {
    return `
    <span>_</span>
    `;
}

function dashesLoader() {
    let randomWord = wordStorage[Math.floor(Math.random() * wordStorage.length)];
    let wordLength = randomWord.length;
    let counter = 0

    for (let i = 0; i < wordLength; i++) {
        const dashes = wordDashLengthGenerator();
        dashesContainer.innerHTML += dashes;
    }

    letters.forEach(letter => {
        letter.addEventListener('click', function handleClick(event) {
            if (randomWord.includes(letter.innerHTML)) {
                
                dashesContainer.insertAdjacentHTML('beforeend', `<span>${letter.innerHTML}</span>`);
                randomWord = randomWord.replace(new RegExp(letter.innerHTML, 'g'), '');
                console.log("included")
                console.log(randomWord);
            }

            else if(randomWord === ''){
                alert("You Guesses the right letters!")
            } 

            else {
                if(counter != 6){
                    counter += 1;
                    hangedMan.innerHTML += `<img class="${assetsClasses.shift()}" src="../assets/${assets.shift()}.svg"/>`;
                }
                else{

                    alert("Game over!")
                }
            }
        });
    });

    console.log(randomWord);
}

dashesLoader();
