/**
 * Created by Egor on 18.07.2017.
 */
function myReplace(str, before, after) {
    let result = "";
    let index = str.indexOf(before);

    if (before[0].toUpperCase() === before[0]) {
        after = after[0].toUpperCase() + after.slice(1) ;
    } else {
        after = after[0].toLowerCase() + after.slice(1) ;
    }

    result = str.replace(before,after);

    return result;
}
alert (myReplace("Let us get back to more Coding", "Coding", "algorithms"));
// "Let us get back to more Algorithms".
alert (myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// "A quick brown fox leaped over the lazy dog"