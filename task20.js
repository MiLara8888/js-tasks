//Дано число n (n > 1). Проверьте, простое оно или составное. Если число простое - верните из функции строку
//"Простое число", если нет - "Составное число". Воспользуйтесь методом перебора делителей числа.
function testCycle(n) {
    var x='';
    var m=0
    for(i=1;i<=n;i=i+1){
        if (n%i==0){
            m=m+1;
        }
    }
    if (m>2){
        x='Составное число';
    }
    else{
        x='Простое число'
    }




    return x;
}