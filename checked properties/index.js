// .checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const PaymentResult = document.getElementById("PaymentResult");


mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `you are subscribed`;
    }
    else{
        subResult.textContent =`you are not subscribed`;
    }
    if(visaBtn.checked){
        PaymentResult.textContent = `you are paying with visa`;
    }
    else if(masterCardBtn.checked){
        PaymentResult.textContent = ` you are paying with master card`;
    }
    else if(payPalBtn.checked){
        PaymentResult.textContent = ` you are paying with paypal`;
    }
    else{
        PaymentResult.textContent = `you are not paying with any of the above`;
    }
  
}