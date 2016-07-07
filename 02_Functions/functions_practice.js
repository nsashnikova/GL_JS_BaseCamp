/**
 * Created by Natasha on 29.06.2016.
 */

//Create a function that will take any number of arguments and return their sum.

function getSum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

getSum(1,2,3); // 6

//Make this function be able to take array as argument

function getSumArr(arr) {
    return arr.reduce(function (sum, cur){
        return sum + cur;
    });
}
var myArr = [1,2,3];

getSumArr(myArr); // 6

/*
    Create a function called celsiusToFahrenheit:
    Store a celsius temperature into a variable.
    Convert it to fahrenheit and output "NN°C is NN°F".
*/

function celsiusToFahrenheit (c) {
    var f = c *1.8+32;
    return c + "C is " + f + "F";
}

celsiusToFahrenheit(10); // 10C is 50F

/*  Create a function called fahrenheitToCelsius:
    Now store a fahrenheit temperature into a variable.
    Convert it to celsius and output "NN°F is NN°C."
*/

function fahrenheitToCelsius (f) {
    var c = (f - 32) / 1.8;
    return f + "F is " + c + "C";
}
fahrenheitToCelsius (50); // 50F is 10C
/*
Write a JavaScript function that accepts a string as a parameter
and find the longest word within the string.
 */

function findStr (str) {
   return str.replace(/[^ A-Za-z0-9_]/gmi, '').split(' ').reduce(function (prev, current) {
       return (prev.length > current.length) ? prev: current;
   })
}
findStr('Hello, GlobalLogic!');

/*Write a function that can print entity details based on next model:
{
    name: String,
    type: String,
    age: Number
}

 Expected output: "%NAME%(%TYPE%) - %AGE%."
*/

var entity = {
    name: 'John',
    type: 'Racoon',
    age: 10
};

function printDetails (obj) {
    return obj.name + '(' + obj.type + ')' + ' - ' + obj.age + '.';
}

printDetails(entity); // "John(Racoon) - 10."

/*
Rewrite that function to use this instead of argument
(use apply, call and bind to print the details of different entities).
 */

function printThis () {
    return this.name + '(' + this.type + ')' + ' - ' + this.age + '.';
}

printThis.call(entity); // "John(Racoon) - 10."
printThis.apply(entity); // "John(Racoon) - 10."

var printRacoon = printThis.bind(entity);
printRacoon(); // "John(Racoon) - 10."




