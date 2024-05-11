// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

import { country } from "./24Question/countries.mjs";

// Extract all the countries contain the word 'land' from the countries array and print it as array
// solution here:

let countries=[];

country.forEach(country => {
    if(country.includes('land'))
        countries.push(country);
});
console.log(countries);

// Find the country containing the highest number of characters in the countries array

//solution here:

let l=0;
let mlc;

console.log(country);
country.forEach(c => {
    
    if(c.length > l){
    
        mlc=country.indexOf(c);
        l= c.length;
    }
});



console.log("heighest length country:  "+country[mlc] );

// Extract all the countries containing only four characters from the countries array and print it as array
//solution here

countries=[];
country.forEach(c => {
    
    if(c.length==4){
        countries.push(c);
    }
});

console.log("list of countries that containing only 4 characters:  \n"+ countries );

// Extract all the countries containing two or more words from the countries array and print it as array
//solution here


countries =[];

country.forEach(c => {
    if(c.includes(' ')){
        countries.push(c)
    }
});

console.log(`all the countries containing two or more words:  ${countries}`);

// Reverse the countries array and capitalize each country and stored it as an array

// solution here

country.reverse();

countries=[]
country.forEach(c => {
    countries.push(c.toUpperCase());
});


console.log(`Reversed &  capitalized countries: ${countries}`);




