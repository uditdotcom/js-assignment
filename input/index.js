//  console.log(`hello`);
//  console.log(`i love pizza`);

//  window.alert(`this is an alert`);
//  window.alert(`i like pizza!`);

// // //this is comment
// // /* this 
// // is 
// // a 
// // comment*/


// document.getElementById("myh1").textContent = `hello`;
// document.getElementById("myP").textContent = `i love pizza`;



// let fullName ="Bro Code";
// let age =25;
// let isStudent = false;

// document.getElementById('p1').textContent = fullName;

// document.getElementById('p1').textContent = age;
// let username;

// username = window.prompt("what's your username?");

// console.log(username);
  let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent =`hello ${username}!!`;
}