/**
 * Created by Egor on 15.07.2017.
 */
function sum(a) {
    let sum = a;

    function sumSum(b) {
        sum += b;
        return sumSum;
    }

    sumSum.toString = () => sum;
    sumSum.valueOf = sumSum.toString;

    return sumSum ;
}

alert ( sum(1));       // => 1
alert ( sum(1)(2));    // => 3
alert ( sum(1)(2)(3)); // => 6