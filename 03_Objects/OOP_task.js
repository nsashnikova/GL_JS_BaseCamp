/**
 * Created by Natasha on 07.07.2016.
 */

//1.Define a Shape constructor. Objects created with Shape should have a `type` property and a `getType` method.

function Shape(_type) {
    var type = _type;
    this.getType = function(){
        return type;
    }
}

/*
2. Define a Triangle constructor. Objects created with Triangle should inherit from Shape
and have three own properties: a, b and c representing the sides of a triangle.
 */
function Triangle(a, b, c){
    Shape.call(this, "triangle");
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

//3. Add a new method to the prototype called `getPerimeter`.

Triangle.prototype.getPerimeter = function() {return this.a+this.b+this.c};

var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(t instanceof Shape);                // true
console.log(t.getPerimeter());              // 6
console.log(t.getType());                   // "triangle"
