/**
 * Created by Egor on 18.07.2017.
 */
function revStr(str) {
    let arr = [];
    let a = "";

    arr = str.split('');
    arr.reverse();
    a = arr.join('');

    return a;
}

alert ( revStr ('hello'));
