// 22. Write a program which tells the number of days in a month.

let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
let a = 2;
let year = 2023;

 
console.log(`The number of days in ${month[a]} ${year} is ${(new Date(year, a+1, 0)).getDate()}`);

// switch(month[a-1]){
//     case 'Jan':
//     case 'Mar':
//     case 'May':
//     case 'July':
//     case 'Aug':
//     case 'Oct':
//     case 'Dec':
//         console.log(month[a-1]+" 31 Days");
//     break;

//     case 'Feb':
//         if(year%4==0){
//             console.log(month[a-1]+" 29 Days");
//         }
//         else
//             console.log(month[a-1]+" 28 Days");
//     break;

//     case 'Apr':
//     case 'Jun':
//     case 'Sep':
//     case 'Nov':
//     console.log(month[a-1]+" 30 Days");
//     break;
    
//     default:
//         console.log("Invalid month!");
// }