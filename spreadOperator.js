//  It takes in an iterable (e.g an array) and expands
// it into individual elements. The spread operator is commonly used to make deep copies of JS objects.
const name = "ankita";
const letter = [...name];
console.log(letter);

const names = ["Diya", "jyoti", "Tashu", "Dishu"];
const altNames = ["Nitasha", "Ankita"];
const combine = [...names, ...altNames];

console.log(combine);
