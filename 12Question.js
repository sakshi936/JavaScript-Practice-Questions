// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
let d= new Date(1970, 1, 1);
console.log((Math.floor( d / 1000 )));
