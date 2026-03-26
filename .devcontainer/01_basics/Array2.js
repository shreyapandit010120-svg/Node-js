// const name1 = [ "shreya","shruti","tanishka","sanchi"]
// const name2 =["shriya","stuti","tani","sanchu"]
//  const newarr =name1.concat(name2)  //creates a new array
// console.log(name1)  // returns the same array
// console.log(newarr)
// console.log(name1.concat(name2))
// name2.push(name1)
// console.log(name2)
// console.log(...name1,...name2)
myarr = [1,2,3,[2,3,[4,5]],8,9]
console.log(myarr.flat(Infinity))
console.log(Array.isArray("Shreya"))
console.log(Array.from("shreya"))
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))   //it converts the distinct values into single array
