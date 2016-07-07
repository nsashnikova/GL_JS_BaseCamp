/**
 * Created by Natasha on 06.07.2016.
 */

var ob1 = {
    a: 23,
    b: 14
};

var ob2 = {
    a: 15,
};

var ob3 = {
    c: 3
};

//var copy = Object.assign(ob1, ob2, ob3);
//console.log(copy);

function assign(o1, o2) {
    for (var i in o2) {
        if (!o2.hasOwnProperty(i)) {
            o1[i] = o2[i];
        }
    }
    return o2;
}
