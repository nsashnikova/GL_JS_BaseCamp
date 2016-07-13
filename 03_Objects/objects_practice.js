/**
 * Created by Natasha on 01.07.2016.
 */

  //   Сравнение объектов по свойству

/* Напишите функцию compareObjects, которая принимает 2 объекта
 и название числового свойства, по которому нужно выполнить сравнение объектов,
 и выводит в консоль свойство name того объекта,  у которого значение переданного свойства больше.
 */
function compareObjects (o1, o2, val) {
    return o1[val] > o2[val] ? console.log(o1['name']) : console.log(o2['name']);
}

/* Создайте один объект с помощью литерала, второй через конструктор.*/

var obj = {
    name: 'John',
    age: 28
};

function MyObject(name, age) {
    this.name = name;
    this.age = age;
}

var obj1 = new MyObject('Lisa', 26);

/* Вызовите написанную функцию и передайте два созданных объекта и свойство для сравнения */

compareObjects(obj, obj1, 'age');


   //  Поиск любимой песни

  /*
  Создайте коллекцию из 5 музыкальных песен, где каждая песня содержит следующую информацию:
  played - количество раз песня была проиграна (определить случайным образом), name - имя песни
 */

var myMusicCollection = [
        {
            played: Math.round(Math.random() * 10),
            name: "Song 1"
        },
        {
            played: Math.round(Math.random() * 10),
            name: "Song 2"
        },
        {
            played: Math.round(Math.random() * 10),
            name: "Song 3"
        },
        {
            played: Math.round(Math.random() * 10),
            name: "Song 4"
        },
        {
            played: Math.round(Math.random() * 10),
            name: "Song 5"
        }
    ];

    /*
     Напишите функцию favoriteSong, которая принимает коллекцию из песен,
     и возвращает следующую информацию: название песни, сколько раз песня была проиграна,
     индекс песни в коллекции.
     */

    function favoriteSong(col) {
      var fav = col.reduce(function (prev, current) {
              return (prev.played > current.played) ? prev: current;
      });
        console.log('Song: ' + fav.name + ', Times played: ' + fav.played + ' Song index: ' + col.indexOf(fav));
    }

    favoriteSong(myMusicCollection);

   //  Класс калькулятор

  /* Опишите конструктор объектов (класс) Calculator с двумя методами:
     add - принимает число и прибавляет его к предыдущему,
     getCurrentSum - принимает индекс и возвращает результирующее число
     на шаге указынном в индексе (если индекса нет, возвращает текущую сумму)
   */

    function Calculator(){
        this.num = 0;
        this.arr = [];
        this.valueOf = function(){
            return this.num;
        }
    }

    Calculator.prototype.add = function (val) {
        this.arr.push(this.num += val);
        return this.num;
    };

    Calculator.prototype.getCurrentSum = function(index){
        return index ? this.arr[index-1] : this.num;
    };
/*
   Создайте два экземпляра класса Calculator
*/

    var o = new Calculator();
    var b = new Calculator();

/*
   Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
 */

o.add(3);
o.add(8);
o.add(11);
b.add(5);
b.add(12);
b.add(17);

/*Выведите в консоль сумму:
    - всех чисел всех объектов, убедитесь (56)
    - сумму чисел всех объектов на втором шаге (28)
    - для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)
*/

console.log(o+b); // 56
console.log(o.getCurrentSum(2) + b.getCurrentSum(2)); // 28
console.log(o.getCurrentSum(3) + ' and ' + o.getCurrentSum()); // 22 и 22
console.log(b.getCurrentSum(3) + ' and ' + b.getCurrentSum()); // 34 и 34



