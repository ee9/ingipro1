/**
 * Created by Egor on 15.07.2017.
 */
function checkLetter(letter) {
    if (letter < "A" ||letter > "z") {
        return false;
    }
    return true;
}

function checkStr(str) {
    var tempStr = '';;
    for(var i = 0, counter = 1; i < str.length; i++, counter++) {
        if(!checkLetter(str[i])) {
            tempStr = 'error';
            break;
        }
        if(str[i] != str[i+1]) {
            tempStr += str[i];
            if (counter != 1) {
                tempStr += counter;
                counter = 0;
            }
        }
    }

    return tempStr;
}

alert( checkStr('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')