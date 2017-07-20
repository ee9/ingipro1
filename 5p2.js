/**
 * Created by Egor on 18.07.2017.
 */
function myReplace(str, before, after) {
    const result = "";

    if (before[0].toUpperCase() === before[0]) {
        after = after[0].toUpperCase() + after.slice(1) ;
    } else {
        after = after[0].toLowerCase() + after.slice(1) ;
    }

    return str.replace(before,after);
}
alert (myReplace("Let us get back to more Coding", "Coding", "algorithms"));
// "Let us get back to more Algorithms".
alert (myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// "A quick brown fox leaped over the lazy dog"