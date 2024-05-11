// 35. Write a functions which checks if all items are unique in the array.

 
let arr = ['car', 5, 'bar', 88, 'jeansa', -8, 51, 'sky', 888, 'jeansa'];

let count = 0;

let prev;

let unique =true;


arr.forEach(element => {
   
    count=0;
    
    for(let i=0;i<arr.length && count <=1;i++){
        if(element === arr[i]){
            
            count++;
        }
    }
    
    if(count>1)
        unique=false;


});

if(unique)
    console.log('Unique');
else
console.log('Not unique');







