//roll dice


function rollDice() {
 
     const numOfDice = document.getElementById("numOfDice").value;
     const diceResult = document.getElementById("diceResult");
     const diceImages = document.getElementById("diceImages");
     const values =[];
     const images =[];

     for(let i=0;i<numOfDice;i++){
        const Value =Math.floor(Math.random()*6) + 1;
        values.push(Value);
        images.push(`<img src="images/dice${Value}.jpg" alt = "dice${Value}">`);
     }

     diceResult.textContent = `dice: ${values.join(', ')}`;
     diceImages.innerHTML = images.join('');

}