/**
 * Created by Egor on 15.07.2017.
 */
function truncate(str, count) {
    return (str.length > count) ?
        str.slice(0, count - 3) + '...' : str;
}

var str = 'Мама мыла раму';
alert (truncate(str, 7)); // 'Мама...'
alert (truncate(str, 12)); // 'Мама мыла...'
