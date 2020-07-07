var n = 1;

do{
    if(n%5 == 0 && n%3 ==0)
        console.log('FizzBuzz');
    else{
        if(n%3 == 0)
            console.log('Fizz');
        else if(n%5 == 0)
            console.log('Buzz');
        else
        console.log(n);
    }
        
    n++;
}while(n<=50);