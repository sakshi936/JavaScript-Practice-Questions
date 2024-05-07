// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method




const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(`Ages ${ages}`);

ages.sort();
console.log(`Sorted Ages ${ages}`);

let min = ages[0];
let max = ages[ages.length-1]

console.log(` Min age: ${min}`);
console.log(`Max age: ${max}`);
console.log(`Median age: ${ages[Math.round(ages.length/2)]}`);

let Avgage= (ages.reduce( (avg,age) => avg=avg+age,0 ))/ages.length;

console.log(`Average age: ${ Avgage}`);

console.log(`Range of age: ${max-min}`);


console.log(`Diff betwn Min and Avg age is ${Math.abs(min - Avgage).toFixed(2)}`);

console.log(`Diff betwn Max and Avg age is ${Math.abs(max - Avgage).toFixed(2)}`);
