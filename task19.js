//Найдите наибольший общий делитель чисел a и b. (Подсказка: вам поможет алгоритм Евклида и цикл while).

function testCycle(a, b) {
    var x=0;
    while (a!=0 && b!=0){
        if (a>b){
            a=a%b;
            x=a+b;
        }
        else if(b>a){
            b=b%a;
            x=b+a;
        }
        else if (a==b){
            x=b
            break
        }
    }

    return x;
}