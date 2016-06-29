/**
 * Created by Natasha on 27.06.2016.
 */

/*
 Напишите фукцию с одним аргументом. Аргумент должен быть числом от 0 до 24.
Если аргумент число от 8 до 21, выведите в консоль ‘Hello’.
В другом случае выведите в консоль ‘It is not good time for that’.
Если аргумент не число, выведите в консоль ‘It is not a number’.
 */
function defineNum (num) {
    if (num >= 0 && num <= 24 && typeof num === 'number') {
        (num >= 8 && num <= 21) ? console.log('Hello') : console.log('It is not good time for that');
    } if (typeof num !== 'number') {
        console.log('It is not a number');
    }
}

/*
Напишите функцию, которая принимает массив и буленовое значение в качестве аргументов.
 Если буленовое значение true, выведите в консоль найбольшее число, если false найменшее.
 */

function defineArr (arr, bool) {
    return bool === true ? Math.max.apply(null, arr) : Math.min.apply(null, arr);
}

/*
Напишите функцию, которая принимает один аргумент. Проверяет число ли это и выводит
в консоль данной число в квадрате, если его можно поделить на 2 без остатка.
*/

function numSqr (num) {
    if (typeof num === 'number') {
       var sqr = Math.pow(num, 2);
       sqr % 2 === 0 ? console.log(sqr) : console.log('It is not divisible by 2');
    }
}

/*
Напишите функцию с двумья аргументами. Если первый больше второго,
выведите в консоль ихнюю разницу. Если второе больше первого, сумму.
*/

function defineArg (a, b) {
    return a > b ? console.log(a-b) : a < b ? console.log(a+b) : console.log('They are equal');
}

/*
Напишите функцию с двумья аргументами. Если сумма этих чисел от 11 до 19,
то выведите в консоль результат. Если нет, то выведите “Result is not in range between 11 and 19”.
*/

function defineRange (a, b) {
    var c = a+b;
    return (c >= 11 && c <= 19) ? console.log(c) : console.log('Result is not in range between 11 and 19');
}

/*
Напишите функцию с двумья аргументами. Если один из них делится без
остатка на другой. выведите true, если нет false.
*/

function defineModulo(a, b) {
    return a % b === 0 || b % a === 0;
}

//Напишите функцию с двумья аргументами. Сравните последние цыфри числа, используя %

function lastNum (a, b) {
    console.log(String(a).slice(-1) % String(b).slice(-1));
    return ((String(a).slice(-1) % String(b).slice(-1))) === 0 ? console.log('OK') : console.log('NO');
}

//выведите массив используя разные типы цыклов.

var arr = [67, 655, 'hi', 89, 5, 8, 68];

for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

for (var key in arr) {
    console.log(arr[key]);
}

arr.forEach(function(val) {
    console.log(val);
});

for (var val of arr) {
    console.log(val);
};

