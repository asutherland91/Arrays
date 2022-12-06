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

// So index positions are interesting because they start at one so it we take my age array from above as an 
// example 10 is in the 0 position, 9 is in the 1 position, 2 is in the 3 position and 
// 2 is in the 4 position. But after this code runs because of the shift method 9 is in the 0 position, 2 is 
// in the 1 position and 2 is in the 2 position.