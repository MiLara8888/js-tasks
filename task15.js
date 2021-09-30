//Даны числа a и b. Найдите сумму квадратов чисел между a и b включительно. Неизвестно, какое из чисел a или b больше.
function testCycle(a, b) {
    var x=0;
    if (a>b){
        for (i=b;i<=a;i=i+1){
            x=x+i*i;
        }
    }
    else{
        for(i=a;i<=b;i=i+1){
            x=x+i*i;
        }
    }

    return x;
}