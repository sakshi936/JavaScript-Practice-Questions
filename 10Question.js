// Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.
//     - Write a JavaScript statement which provide NaN value.


// truthy values ..
console.log('Truthy values ');

let a ='false'
let b='0';
let c=[];
let d= " ";
let e = function(){}

if(a)
    console.log(true);
else
    console.log(false);

if(b)
    console.log(true);
else
    console.log(false);

if(c)
    console.log(true);
else
    console.log(false);

if(d)
    console.log(true);
else
    console.log(false);

if(e)
    console.log(true);
else
    console.log(false);


    // falsy values ...

    let a1 = false;
    let b1= 0;
    let c1= null;
    let d1 = undefined;
    let e1= "";  // empty string
    let f = 0*Infinity;  //NaN

    console.log('Falsy values ');

    if(a1)
    console.log(true);
    else
    console.log(false);

    
    if(b1)
    console.log(true);
    else
    console.log(false);

    if(c1)
    console.log(true);
    else
    console.log(false);

    if(d1)
    console.log(true);
    else
    console.log(false);

    if(e1)
    console.log(true);
    else
    console.log(false);

    if(f)
    console.log(true);
    else
    console.log(false);

    console.log('NaA values ');

    let a2 = Math.abs('srt');
    let b2 =Math.sqrt(-2);
    let c2 = Number(undefined);
    let d2 = parseInt('string');
    let e2=  0*Infinity;
    let f2= 7*'string'


    console.log(a2);
    console.log(b2);
    console.log(c2);
    console.log(d2);
    console.log(e2);
    console.log(f2);
   





