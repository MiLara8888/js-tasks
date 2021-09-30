//Дано число n. Найдите сумму его цифр.
function testCycle(n) {
    let str = String(n);
    //console.log(str);
    let count_n = str.length;
    //console.log(count_n);
    let sum = 0;
    for (i = 0; i<count_n; i++) {
        sum += Number(str[i]);
        //console.log(Number(str[i]));
    }
    return sum;
}