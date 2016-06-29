/**
 * Created by Natasha on 27.06.2016.
 */

function vampire (a, b){
    return (''+a+b).split('').sort().join() === (''+a*b).split('').sort().join();
}
