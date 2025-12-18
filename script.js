
// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let ul = document.querySelector("ul");
// button.addEventListener( "click" , function(){
//     let item = document.createElement("li");
//     item.innerText= input.value;
//     ul.appendChild(item);
//     input.value="";
// })


//   let h3 = document.querySelector("h3");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h3.style.color = color;
//             resolve("color changed");
//         }, delay);
//     });
// }
// changeColor("red",1000)
// .then(() => changeColor("blue",1000))
// .then(() => changeColor("yellow",1000))

// let url ="https://jsonplaceholder.typicode.com/posts/1";
// fetch(url)
// .then( (Response) => {
//     console.log(Response);
//     Response.json()
// })  
// .catch((err) => {
//     console.log("ERROR=",err)
// })


// JAVSCRIPT RIVISION
//  if else


//  let a= 12 , b = 4
// if (a>b) {
//     console.log("The number is large:", "Larger");

// }else {
//      console.log("smaller")
// }


// 2}  else if

// let marks  = 60 ;
// if (marks>=80) {
//  console.log("YOU PASS A GRADE")
// } else if (marks>=70) {
//     console.log("YOU HAvE GRADE B")
// } else if (marks>=60){
//     console.log("YOU HAVE GARDE C");
 
// }

// let Marks = parseInt(prompt("ENTER YOUR MARKS"));

// if (Marks >= 80) {
//     console.log("YOU HAVE GRADE A");
// } else if (Marks >= 70) {
//     console.log("YOU HAVE GRADE B");
// } else if (Marks >= 60) {
//     console.log("YOU HAVE GRADE C");
// } else {
//     console.log("YOU HAVE FAILED");
// }

// Nested conditions

// let marks = parseInt(prompt40("ENTER YOUR MARKS")) 
//  if ( marks>=35) {
//     console.log("YOU ARE PASS") 
//     if (marks>=70) {
//         console.log("YOU ARE PASS WITH A GRADE")
//     } else {
//         console.log ("YOU ARE PASS WITH GRADE B")
//     }
//  }else{
//     console.log ("you ARE FAIL")
//  }

// let pin = 4444; 
// let balance= 1000;
// if (pin===4444) {
//     console.log("YOUR PIN IS CORECT!!");
//  if (balance>=1000) {
//     console.log("WITHOW ALLOW");
//  }else{
//     console.log ("nsufficient funds")
//  }

// }else {
//     console.log( "YOUR PIN IS ERONG")
// }

// ############  4) Swich Statment #####################

// let color = "red" ;
// switch (color) {
//    case "red":
//    console.log("STOP");
// break;
//    case  "green":
//       console.log("GO NOW")
// break;
//       case "yellow":
//       consrwd
// ole.log ("SLOW DOWN");
// }
// Let color = prompt("ENTER YOUR SIGNALS COLOURS");
// switch (color) {
//    case "red":
//    console.log("STOP");
// break;
//    case  "green":
//       console.log("GO NOW")
// break;
//       case "yellow":
//       console.log ("SLOW DOWN");
// }
//   l

// ###########    String Method ###############

// let msg = "      hellow!        ";
// msg = msg.trim();
// console.log(msg);


// let msg = "saishshaikhfromsaralgaon";
// let index = msg.indexOf("from");
// console.log(index);


// let msg = "saishshaikhfromsaralgaon";
// let toUpperCase= msg.toUpperCase();
// console.log(toUpperCase);



//  let msg = "saishshaikh"
//   Nmsg = msg.slice (0,5);
//  console.log (Nmsg);/


// let msg = "saish shaikh"
//   Nmsg = msg.replace ("saish","sara");
//  console.log (Nmsg);

//   day 2

// ###############  ARRAY METHODS ####################

// let arr = [1, 2, 3];

// // add to end
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

// // remove from end
// arr.pop();
// console.log(arr); // [1, 2, 3]

// // add to start
// arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3]

// // remove from start
// arr.shift();
// console.log(arr); // [1, 2, 3]

                // merging 2 arry

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// let merge = arr1.concat(arr2)
// console.log(merge);

//reverse arry

// let arr = [1,2,3,4,5]
// let rev = arr.reverse(arr)
// console.log(rev);

//    slice in arry

// let arr =[1,2,4,5,6,7,8,9,10];
// let slic = arr.slice(0,4);
// console.log (slic);

// splice in arry 

// let arr =[1,2,4,5,6,7,8,9,10];
// let splice = arr.splice(0,1);
// console.log (splice);

// let arr =[1,2,4,5,6,7,8,9,10];
// let splice = arr.splice(3,5);
// console.log (splice);

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let rev = arr1.slice(0,5)
console.log (rev);