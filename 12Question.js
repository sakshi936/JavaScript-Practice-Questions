// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
console.log(`today is year: ${date.getFullYear()}`);
console.log(`today month is: ${date.getMonth() +1} `);
console.log(`today's date : ${date.getDate()}- ${date.getMonth()}- ${date.getFullYear()}`);

console.log(`today's day is: ${date.getDay()}`);
console.log(` hour: ${date.getHours()}`);
console.log(`minute: ${date.getMinutes()}`);
// let d= new Date(1970, 1, 1);
// console.log((Math.floor( d / 1000 )));


console.log(
    `the numbers of seconds elapsed from January 1, 1970 to now ${Math.round(
      date.getTime() / 1000
    )} minutes`
  );

// console.log(`the day today as a number is ${date.getDate()}`);
