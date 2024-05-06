const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let sumArray = [];
  for (let i = 1; i <= 10; i++){
    let num = addNums(i * increment);
    sumArray.push(num);
  }
  return sumArray;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let sumArray = [];

  for (let i = 1; i <= 10; i++){
    let num = addManyNums(i * increment);
    sumArray.push(num);
  }
  return sumArray;

}


console.log(addNums10(10));

module.exports = [addNums10, addManyNums10];
