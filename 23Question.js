// 23. Write a program which tells the number of days in a month, now consider leap year.

let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
let a = 1;
let year = 2020;


switch(month[a-1]){
    case 'Jan':
    case 'Mar':
    case 'May':
    case 'July':
    case 'Aug':
    case 'Oct':
    case 'Dec':
        console.log(month[a-1]+" 31 Days");
    break;

    case 'Feb':
        if(year%4==0){
            console.log(month[a-1]+" 29 Days");
        }
        else
            console.log(month[a-1]+" 28 Days");
    break;

    case 'Apr':
    case 'Jun':
    case 'Sep':
    case 'Nov':
    console.log(month[a-1]+" 30 Days");
    break;
    
    default:
        console.log("Invalid month!");
}