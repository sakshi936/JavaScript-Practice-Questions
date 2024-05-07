// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// For y=mx+c :
// Slope = m
// x-intercept = -c/m
// y-intercept = c

// let x=3;
// let y = 2*x-2;

// let m = 2;
// let c =2;

let value = "2x-2";

let array = value.split('');

let m =array[0];
let c= array[3];

console.log(` Slope is ${m} \n x-intercept is ${-c / m} \n y-intercept is ${c}`);



