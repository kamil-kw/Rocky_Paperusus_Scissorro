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

    console.log('user', userFighter);
    console.log('computer', computerFighter);
}

/** Compare characters - Fight :) */

function fighterComparation(user, computer) {
    if(user === 'rocky') {
        if(computer === 'paperusus') return 'win';
        if(computer === "scissorro") return 'loose';
        if(computer === "rocky") return 'draw';
    }
    if(user == 'scissorro') {
        if(computer === 'paperusus') return 'win';
        if(computer === "rocky") return 'loose';
        if(computer === "rscissorro") return 'draw';
    }
    if(user == 'scissorro') {
        if(computer === 'paperusus') return 'win';
        if(computer === "rocky") return 'loose';
        if(computer === "rscissorro") return 'draw';
}
}