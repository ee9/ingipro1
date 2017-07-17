/**
 * Created by Egor on 17.07.2017.
 */
var value = Math.random()*1000|0;
var callback = function() {
    value = Math.random()*1000|0;
    setTimeout(callback, Math.random()*1000|0);
}
callback();
function x() { return value; }
alert (value);