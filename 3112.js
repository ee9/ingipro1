/**
 * Created by Egor on 17.07.2017.
 */
const arr = [1, 2, 3, 4, 5];
function drop (arr, i) {
    let arr1 = arr.slice();
    arr1.splice(i, 1);
    return arr1;
}
alert (drop ( arr, 2))// [1, 2, 4, 5]