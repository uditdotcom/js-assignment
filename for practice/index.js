// let username = window.prompt("enter your username:");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();

// console.log(username);



// const PI = 3.14;

// if(PI === "3.14"){
//     console.log('that is pi');
// }
// else{
//     console.log('that is not pi');
// }


//number guessing game


// const minNum =1;
// const maxNum = 100;
// const num = Math.floor(Math.random() * (maxNum - minNum + 1)) +minNum;
// let running =  true;
// let attempt=0;
// let guess;
// while(running){
//     guess =Number( window.prompt("guess a number between 1 and 100"));
    
// if(isNaN(guess)){
//     console.log("pls enter a valid number!!");
// }
// else if(guess<minNum || guess>maxNum){
//     console.log("number is out of range!!");
// }
// else{
//     attempt++;
//     if(guess<num){
//         window.alert("too low");
       
//     }
//     else if(guess>num){
//         window.alert('too high');
        
//     }
//     else{
//         window.alert(`you won! the number was ${num}. it took you ${attempt} attempts`);
//         running = false;
//     }
// }
// }


// let n = [1,2,3,4,5];
// n.forEach(display);
// function display(num){
//     console.log(num);
// }



//class: collection of object

// class Product {
//     constructor(item,price){
//         this.item =item;
//         this.price =price;
//     }
//     display(){
//         console.log(`item: ${this.item},
//                      price: ${this.price}`);
//     }
//     salesTaxCalculation (salesTax){
//         return this.price + (this.price * salesTax)
//     }
// }


// const salesTax=0.05

// const product1 = new Product('apple',10)
// const product2 =new Product('orange',30)

// product1.display();
// console.log(`$${product1.salesTaxCalculation(salesTax)}(inc. tax)`);
// product2.display();
// console.log(`$${product2.salesTaxCalculation(salesTax)}(inc. tax)`);



//Fisher-yates algorithm

const cards =['A',2,3,4,5,6,7,8,9,10,'K','Q','J'];
suffle(cards);
console.log(cards);

function suffle(array){
    for(let i=array.length-1; i>0;i--){
        let j = Math.floor(Math.random() * (i+1));

        [array[i], array[j]]=[array[j],array[i]];
    }
     
}