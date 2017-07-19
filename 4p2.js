/**
 * Created by Egor on 18.07.2017.
 */
function sumNum(arr) {

    let sum = 0;
    const minN = Math.min.apply(null, arr);
    const maxN = Math.max.apply(null, arr);

    for (let i = minN; i <= maxN; ++i) {
        sum += i;
    }

    return sum;

}

alert (sumNum ([4, 2]));
