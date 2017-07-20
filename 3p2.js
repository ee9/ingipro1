/**
 * Created by Egor on 18.07.2017.
 */
function chunkArrayInGroups(arr, size) {
    let result = [];
    let buff = [];
    let j = 0;
    const remnant = arr.length % size;

    for (let i = 0; i < arr.length; i += size, j++) {
        buff = arr.slice(i, i+size);
        result[j] = buff;
    }

    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]

//
