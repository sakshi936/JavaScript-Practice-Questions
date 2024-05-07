// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


let oddSum=0;
let evenSum =0;
for (let i=0;i<=100;i++){
    if(i%2==0)
        evenSum+=i;

    else
        oddSum+=i;
}

console.log(`Sum of all even no from 0 to 100 : ${evenSum}`);
console.log(`Sum of all odd no from 0 to 100 : ${oddSum}`);