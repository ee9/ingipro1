/**
 * Created by Egor on 17.07.2017.
 */
function range(start, stop, step) {
    if (typeof stop === 'undefined') {
        stop = start;
        start = 0;
    }

    if (typeof step === 'undefined') {
        step = 1;
    }

    var result = [];
    for (var i = start; i < stop; i += step) {
        result.push(i);
    }

    return result;
}
alert(result (1, 11))