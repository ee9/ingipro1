/**
 * Created by Egor on 15.07.2017.
 */
const str = 'Мама мыла раму';

function truncate(str, len) {
    const arr = str.split(' ');
    let newStr = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if ((newStr.length + arr[i].length + 1) > len) {
            return newStr + ( i < arr.length ? '...' : '' );
        }
        else newStr += ' ' + arr[i];
    }
    return newStr;
}

alert( truncate(str, 7) );
alert( truncate(str, 11) );