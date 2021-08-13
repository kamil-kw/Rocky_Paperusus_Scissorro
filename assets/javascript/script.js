/** 
 * Choose fighter function  
 * */
function chooseFighter(userFighter) {
    /** declare array */
    const fighterCharacter=['rocky', 'paperusus','scissorro'];

    /** create random number to choose compuerFighter*/
    const randomNumber = Math.random()*fighterCharacter.length;
    const roundNumber = Math.ceil(randomNumber)-1;
    const computerFighter = fighterCharacter[roundNumber];
    
    const winner = fighterComparation(userFighter, computerFighter);

    showWinner(winner);

    function showWinner(winner) {
        let result = '';
        if (winner == 'draw') result = "DRAW!";
        if (winner == 'win') result = "WINNER";
        if (winner == 'loose') result = "LOOSER";
        document.getElementById('game--result').innerHTML = result;

        let userChoosed = document.getElementById('player--choice');
        let computerChoosed = document.getElementById('computer--choice');
        userChoosed.className = `fighter fighter--${userFighter}`;
        computerChoosed.className = `fighter fighter--${computerFighter}`;
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