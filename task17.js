//Дано число n (n > 0). Верните из функции следующую сумму: 1 + 1.5 + 2 + 2.5 + ... + n1+1.5+2+2.5+...+n.
function testCycle(n) {
    var x=0;
    for(i=1;i<=n;i=i+0.5){
        x=x+i
    }
    return x;
}