/**
 * Created by Egor on 17.07.2017.
 */
function rle(str) {
    if ( !(/^[a-zA-Z]*$/.test(str)) ) {
        throw new Error("ERROR");
    }

    let newStr = '';

    for (let i = 1, j = 0; i < str.length; i++) {
        while (str[i] === str[i - 1])
            i++;

        const sym = i - j;

        newStr += str[i - 1] + (sym == 1 ? '' : sym);
        j = i;
    }

    return newStr;
}

alert(rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"));