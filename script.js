//Dice roller program

function rollDice(){
    const numOfDice=document.getElementById(`numofdice`).value;
    const diceResult=document.getElementById(`diceResult`);
    const diceImages=document.getElementById(`diceImages`);
    const values=[];
    const images=[];

    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        //console.log(value);
        values.push(value);
        images.push(`<img src="${value}.png">`);
    }

    diceResult.textContent=`Dice: ${values.join(', ')}`;
    diceImages.innerHTML=images.join('');
}   