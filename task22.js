//Дано число n (n > 1). Верните из функции n-ное число Фибоначчи
function testCycle(n) {
    var x=0;
    var next=1;
    for(let i = 0; i < n; i++){
    let temp = next;
    next = x + next;
    x = temp;
  }

    return x;
}