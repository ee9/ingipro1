/**
 * Created by Egor on 17.07.2017.
 */
function wrap(str, distance) {
    let buff = "";
    let buff1 = "";
    let result = "";
    let count = 0;

    if (str.length === 0 || distance <= 0) {
        return -1;
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            buff = buff + str[i];
        } else {
            if (buff1) {
                buff1 += " " + buff;
            } else {
                buff1 += buff;
            }

            buff = "";
        }

        count++;

        if (count === distance) {
            if (buff1) {
                result += buff1 + '\\n';
                buff1 = "";
                count = buff.length;
            } else {
                result +=  buff + '\\n';
                buff = "";
                count = 0;
            }
        }
    }

    if (buff) {
        result += buff;
    }

    return result;
}

alert( wrap("мама мыла раму",11) );
alert( wrap("экскурсия",4) );