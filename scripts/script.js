(function (){

    const randomInt = (max) =>{
        return Math.floor(Math.random()*max) + 1;
    }
    const maxPeople = 15;

    const playGame = () => {
        const userGuess = document.getElementById('userGuess').value;
        const computerGuess = randomInt(maxPeople);

        if( computerGuess == userGuess){
            document.getElementById('result').innerHTML = `Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`
        } else {
            document.getElementById('result').innerHTML = `Bummer... You guessed ${userGuess} and the secret number was ${computerGuess}.`
        }
    }

    document.getElementById('startGame').addEventListener('click', playGame);


})();