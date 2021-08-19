
/** 
 * Choose fighter function  
 * */
function chooseFighter(userFighter) {
    /** declare array */
    const fighterCharacter=['rocky', 'paperusus', 'scissorro'];

    /** create random number to choose compuerFighter*/
    const randomNumber = Math.random()*fighterCharacter.length;
    const roundNumber = Math.ceil(randomNumber)-1;
    const computerFighter = fighterCharacter[roundNumber];
    const winner = fighterComparation(userFighter, computerFighter);
    let resultUser = '';
    let resultComputer ='';
    showWinner(winner);


    function showWinner() {

        if (winner === 'loose') {
            resultUser = "LOOSER";
            resultComputer = "WINNER";

        } else if (winner === 'win'){
            resultUser = "WINNER";
            resultComputer = "LOOSER";

        } else if(winner === 'draw'){
            resultUser = "DRAW";
            resultComputer = "DRAW";

        }
    
        document.getElementById('user--result').innerHTML = resultUser;
        document.getElementById('computer--result').innerHTML = resultComputer;

        let userChoosed = document.getElementById('player--choice');
        let computerChoosed = document.getElementById('computer--choice');
        userChoosed.className = `fighter fighter--${userFighter}`;
        computerChoosed.className = `fighter fighter--${computerFighter}`;
    }

    /**
     * score and rounds calculator
     */
    if (resultUser === "WINNER") {
        let playerScore = parseInt(document.getElementById("player--scored").innerText);
        document.getElementById("player--scored").innerText = ++playerScore;
    } if(resultComputer === "WINNER") {
        let computerScore = parseInt(document.getElementById("computer--scored").innerText);
        document.getElementById("computer--scored").innerText = ++computerScore;
    } if (resultUser === "WINNER" || resultComputer === "WINNER" || resultComputer === "DRAW") {
        let roundsScore = parseInt(document.getElementById("total--rounds").innerText);
        document.getElementById("total--rounds").innerText = ++roundsScore;
    }

        let winnerPage = document.getElementById('player--win');
        let looserPage = document.getElementById('player--loose');


    if((document.getElementById("total--rounds").innerText > 9) && (document.getElementById("computer--scored").innerText) > (document.getElementById("player--scored").innerText)){
        window.open(looserPage, "_self");
    } else if((document.getElementById("total--rounds").innerText > 9) && (document.getElementById("computer--scored").innerText) < (document.getElementById("player--scored").innerText)){
        window.open(winnerPage, "_self");
    }
/**
 * show image of vs only when score bigger than 0
 */
    let showImage = document.getElementById('showimage');

    if((document.getElementById("total--rounds").innerText) > 0){
        showImage.className = `vs vsimage`;
    }

    let fontAwesome = document.getElementById('fontawesome');

    if(resultUser === "WINNER"){
        fontAwesome.className = `font--awesome font-win`;
    }
    if(resultUser === "LOOSER"){
        fontAwesome.className = `font--awesome font-loose`;
    }
    if(resultUser === "DRAW"){
        fontAwesome.className = `font--awesome font-draw`;
    }

}

 
/** Compare characters - Fight :) */
function fighterComparation(user, computer) {
    if(user === 'rocky') {
        if(computer === 'paperusus') return 'loose';
        if(computer === "scissorro") return 'win';
        if(computer === "rocky") return 'draw';

    }
    if(user == 'scissorro') {
        if(computer === 'paperusus') return 'win';
        if(computer === "rocky") return 'loose';
        if(computer === "scissorro") return 'draw';

    }
    if(user == 'paperusus') {
        if(computer === 'rocky') return 'win';
        if(computer === "scissorro") return 'loose';
        if(computer === "paperusus") return 'draw';

    }


}
