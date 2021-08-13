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
