/**
 * Created by Natasha on 05.07.2016.
 */

/* Создайте класс Garage, который хранит список машин со следующим интерфейсом:
   addCar - принимает объект класса Car, и getCar - который принимает индекс машины
   и возвращает запрашиваемую машину, count - возвращает количество машин в гараже
 */
function Garage (){
    var cars = [];
    this.addCar = function(car){
        cars.push(car);
        return cars;
    };
    this.getCar = function(index){
        return cars[index];
    };
    this.count = function(){
        return cars.length;
    }
}
/* Создайте класс Car, который инициализуруется значениями model, manufacturer и price.*/

function Car(model, manufacturer, price){
    this.model = model;
    this.manufacturer = manufacturer;
    this.price = price;
}

/* Создайте класс Buyer, который иницализируется объектом garage
 и числовым значением budget, с методами: getBudget - возвращает текущее значение бюджета,
 buyCar - принимает объект класса Car, смотрит, хватит ли бюджета на машину, если не хватает,
 бросает ошибку, если хватает, списывает деньги с бюджета и добавляет машину в гараж.
 */

function Buyer(_garage, _budget) {
    var garage = _garage;
    var budget = _budget;
    this.getBudget = function () {
        return budget;
    };
    this.buyCar = function (car) {
        if (budget > car.price) {
            budget -= car.price;
            garage.addCar(car);
        }
    };
    // я добавила этот метод, чтоб выводить все купленные машины

    this.showCars = function() {
        var cars = garage.count();
        for (var i = 0; i < cars; i++) {
            console.log(garage.getCar(i));
        }
    };
}


/*
Создайте функцию showRoom, которая принимает объект buyer,
и дальше в цикле 10 раз создает объект car со случайным значением в price.
Объект buyer пытается купить каждую созданную машину.
 */

function showRoom(buyer){
    for(var i=0; i < 10; i++) {
       var newCar = new Car('Model ' +i+'s', 'Manufacturer', Math.round(Math.random() * 1000));
        buyer.buyCar(newCar);
    }
}

/*
Создайте экземпляр класса Garage и Buyer. Вызовите функцию showRoom и передайте в нее buyer.
 */
var garage1 = new Garage();
var buyer1 = new Buyer(garage1, 2000);

showRoom(buyer1);

buyer1.showCars();
