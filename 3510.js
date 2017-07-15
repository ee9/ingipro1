/**
 * Created by Egor on 14.07.2017.
 */
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 5, 6, 7];
var newArr = arr1.concat( arr2 );
alert ( newArr );

function unique(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true;
    }

    return Object.keys(obj);
};

alert( unique(newArr) );
