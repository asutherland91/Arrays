var cats = ["Nyx", "Artemis", "Persephone", "Orion"];
//pop removes the last element from the array and then returns the array minus that element.
cats.pop();
var ages = [10, 9, 2, 2];
//shift removes the first element from the array and then returns the array minus that element.
ages.shift();
var likesWater = [true, false, false, true];
//unshift will insert the new element added into the parenthesis to the beginning of the array 
//and then returns the array plus that element.
likesWater.unshift(false);

console.log(cats);
console.log(ages);
console.log(likesWater);