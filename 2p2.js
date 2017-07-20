/**
 * Created by Egor on 18.07.2017.
 */
function palindrome(str) {
    const arr = str.toLowerCase().split(' ');
    str = arr.join('');

    for (let i = 0; i < str.length/2; i++) {
        if(str[i]!=str[(str.length - 1) - i]) {
            return false;
        }
    }

    return true;
}

alert( palindrome("eye") ); // true
alert( palindrome("hello") ); // false
alert( palindrome("А роза упала на лапу Азора") ); // true

//
