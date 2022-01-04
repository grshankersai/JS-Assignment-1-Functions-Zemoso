//Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

let fun1 = function(){
    console.log("Printed from the first function");
}

function mainfunction(myfun){

    console.log("This is from the main function");
    myfun();

}

mainfunction(fun1);


//Q2. An arrow function takes two arguments firstName and lastName and returns a 2 
//letter string that represents the first letter of both the arguments. 
//For the arguments Roger and Waters, the function returns ‘RW’. Write this function.


var myArrowFun = (fname,lname)=>{
    return fname.slice(0,1) + lname.slice(0,1);
}

console.log(myArrowFun("Roger","Waters"));
