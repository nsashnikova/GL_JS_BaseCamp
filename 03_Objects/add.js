/**
 * Created by Natasha on 07.07.2016.
 */

function add() {
    var sum = 0;

    function add() {
        for (var i=0; i<arguments.length; i++) {
            sum += Number(arguments[i]);
        }
        return add;
    }
    add.valueOf = function valueOf(){
        return sum;
    };
    return add.apply(null,arguments);
}

console.log(1 + add(1)(2));
console.log(1 + add(1)(2)(3)(4)(10));
console.log(0 + add(2)(2));