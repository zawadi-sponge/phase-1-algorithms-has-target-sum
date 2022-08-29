function hasTargetSum(array, target) {
  // Write your algorithm here
  const nums = {}; 
  for (let i = 0; i < array.length; i++) {const num = array[i];
    if (target - num in nums) { return true; }
    nums[array[i]] = i;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here 
  linear big o notation
  n is the number of tasks to be performed minus the constants
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  it will loop through the whole array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
