/**
 * Created by Egor on 15.07.2017.
 */
var arr = [
    {name: 'width', value: 10},
    {name: 'height', value: 20}
] ;
var res = arr.reduce(function(previousValue, currentValue) {
    previousValue[currentValue.name] = currentValue.value;
    return previousValue;
}, {})
alert(JSON.stringify(res));
