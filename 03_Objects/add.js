/**
 * Created by Natasha on 07.07.2016.
 */

function add(num) {
    var sum = 0;
    sum = sum+num;
    function addSum(x) {
        sum += x;
        return addSum;
    }
    addSum.valueOf = function(){
        return sum;
    };
    return addSum;
}
console.log(1 + add(1)(2)); // 4
console.log(11 + add(1)(1)(1)(1)(1)(1)); // 7
console.log(0 + add(2)(2)); // 4
