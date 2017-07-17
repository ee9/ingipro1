/**
 * Created by Egor on 17.07.2017.
 */
function get(obj, path){
    let arr = path.split(', ');
    let index = 0;
    let length = arr.length;
    while (obj != null && index < length) {
        obj = obj[arr[index++]];
    }
    return (index && index == length) ? obj : "http://default/url/to/avatar";

}
var mike = {
    friends: [{
        name: 'Anna',
        avatar: {
            url: 'http://some/url/to/avatar'
        }
    }]
};
alert(get(mike, "friends[0], avatar, url"));