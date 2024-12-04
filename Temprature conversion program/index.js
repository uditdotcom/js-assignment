const textBox = document.getElementById("textBox");
const toCal = document.getElementById("toCal");
const toFah = document.getElementById("toFah");
const result = document.getElementById("result");

let temp;


function convert(){
     if(toFah.checked){

        temp = (Number(textBox.value) * 9/5) + 32;
        result.textContent = temp.toFixed(1)+"°F";
     }
     else if(toCal){
        temp = (Number(textBox.value) - 32) * 5/9;
        result.textContent = temp.toFixed(1)+"°C";
     }
     else{
        result.textContent = 'select a unit';
     }
}

