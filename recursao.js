function soma(n, total=0){
    if(n==0)
        return total
    return soma(Math.floor(n/10),total+(n%10));
}

console.log(soma(54));


/*
    5 -> soma(4)*5 -> 24
    4 -> soma(3)*4 -> 12
    3 -> soma(2)*3 -> 6
    2 -> soma(1)*2 -> 2
    1 -> soma(1)*1
    5 ->>>>>> 1
*/