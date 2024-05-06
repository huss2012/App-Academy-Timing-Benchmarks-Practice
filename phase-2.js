const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sumArray = [];
  for (let i = 0; i <= 9; i++){
    let incrementMethod;
    if (increment === 1) {
      incrementMethod = increment + i;
    } else {
      incrementMethod = increment + (i * 10);
    }
    sumArray.push(addNums(incrementMethod));
  }
  return sumArray;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in

}


console.log(addNums10(10));

module.exports = [addNums10, addManyNums10];
