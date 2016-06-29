/**
 * Created by Natasha on 27.06.2016.
 */

function palindrome(str) {
    var removeOdd = str.replace(/\W/gmi, '').toLowerCase();
    var checkStr = removeOdd.split('').reverse().join('');
    return removeOdd === checkStr;
}

