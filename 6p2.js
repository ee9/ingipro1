/**
 * Created by Egor on 18.07.2017.
 */
function invert(obj) {
    const objInverse = {};

    for (let key in obj) {
        objInverse[obj[key]] = key;
    }

    return objInverse;
}

alert (invert({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}) );
// {#00FF00: "green", #FF0000: "red", #FFFFFF: "white"}
