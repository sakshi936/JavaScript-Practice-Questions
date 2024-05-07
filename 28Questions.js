// program to print prime numbers between the two numbers



for(let i=1;i<=100;i++){
    let prime= true;
    for(let j=2;j<=i/2;j++){

        if(i%j==0){
            prime=false;
            break;
        }

    }
    if(i==2)
     prime=true;

    if(i>1 && prime)
        console.log(i);

}