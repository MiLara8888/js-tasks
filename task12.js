//Даны числа a и b. Выведите строку с числами от а до b, разделенных пробелами. Известно, что b больше a.
function testCycle(a, b) {
    var x='';
    for (i=a;i<=b;i=i+1){
        x=x+' '+i
    }
    return x;
}