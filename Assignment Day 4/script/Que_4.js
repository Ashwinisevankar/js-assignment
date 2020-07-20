console.log("Hello");

// Addition

 let add=function(num1=0,num2=0){
   let sum=num1+num2;
     return sum;
 }
 let result=add(45,6);
  console.log('Additon: '+result)


  //Subtraction
 let sub=function(num1=0,num2=0){
     let sub=num1-num2;
     return sub;
 }
 let SubRes=sub(45,6);
 console.log('subtraction: '+SubRes)

 //Multiplication
 let mul=function(num1=0,num2=0){
     let mul=num1*num2;
     return mul;
 }
let MulRes=mul(45,6);
console.log('Multiplication: '+MulRes)

//Division
let div=function(num1=0,num2=0){
    let div=num1/num2;
    return div;
}
let DivRes=div(45,6);
console.log('Division: '+DivRes)

//Square Root
console.log('Square Root of a given number is: '+Math.sqrt(169));

//Power 
console.log('Power of a given number is: '+Math.pow(9,3));

//Percentage
//Our number.
var number = 90;

//The percent that we want to get.
//i.e. We want to get 22% of 90.
var percentToGet = 22;

//Turn our percent into a decimal figure.
//22 will become 0.22 and 60 will become 0.6
var percentAsDecimal = (percentToGet / 100);

//Multiply the percent decimal by the number.
var percent = percentAsDecimal * number;

//Alert it out for demonstration purposes.
//alert(percentToGet + "% of " + number + " is " + percent);
console.log(percentToGet + "% of " + number + " is " + percent)

//The result: 22% of 90 is 19.8