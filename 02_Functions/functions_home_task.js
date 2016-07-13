/**
 * Created by Natasha on 01.07.2016.
 */

/* Напишите функцию, которая будет возвращать набор уникальных символов,
которые были переданы в эту функцию, как аргумент. Сортировка - не нужна,
строчные и заглавные буквы - 1 символ.
 */

function extractCharacters(str){
    return str.toLowerCase().split('').filter(function (val, index, arr) {
        return arr.indexOf(val) === index;
    });
}

extractCharacters('abcd'); // ["a", "b", "c", "d"]
extractCharacters('aaaabc'); //['a', 'b', 'c']
extractCharacters('Hello, world'); // ["h", "e", "l", "o", ",", " ", "w", "r", "d"]

/* Напишите функцию, которая будет возвращать новую функцию,
с помощью которой можно будет выводить в консоль текстовую информацию.
 */

function createLogger(prefix){
    return function (data) {
        console.log(new Date().toISOString() + ' ' + prefix + ': ' + data);
    };
}

var myLogger = createLogger('My Logger');

myLogger('some data');

/*
Для того, чтоб в консоли указывался номер строки именно в месте вызова функции, а не в месте её определения,
мы создаем новую функцию, у которой контекст исполнения - объект window.console
 */

function createLogger(prefix){
    return console.log.bind(console, new Date().toISOString() + ' ' + prefix + ':');
}

var myLogger = createLogger('My Logger');

myLogger('some data'); // Логгер не ломает коллстек
