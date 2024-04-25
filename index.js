/**
 * just a random comment
 */

console.log('hello world');


var myVariable = 'Hello World!'; //either global or function scope depending on where it is

let myVariable2; //has block scope

const myVariable3 = 3; //has block block scope

/*
block scope = we can reference an item where it is
declared and any inner code blocks

function scope = we can reference an item within
the function and nowhere else

global scope = we can reference an item anywhere
in code
 */

function myFunc(x,y){
    console.log(x + y);
}

let myCoolFunction = function() {
    console.log('my cool function!');
}


myFunc(5,5);
myCoolFunction();

let myBool = true;

let a = 3;
let b = 3;
console.log(a += 3);

console.log((2+2) == 4 ? true : false); //this is aying if 2+2 is 4 then it will return true

letMyNullVar = null;

let myObject = {

    property1: 'a string value',

    myCoolMethod: function(){
        console.log('hello pluto');
    }
}

console.log(myObject.property1);
myObject.myCoolMethod();

let myArray = [1,3,4, 'this is a string', 7];

console.log(myArray.includes(1)); //looking to see i the array includes the number 1 variable in it