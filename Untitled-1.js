// Add whatever parameters you deem necessary - good luck!
function hasMoreTrue(arr) {
    let trueCount=0;
    let falseCount=0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i]===true) {
            trueCount++;
        } else if (arr[i]===false) {
            falseCount++;
        }
    } if (trueCount>falseCount) {
        return true;
    } else if (falseCount>trueCount) {
        return false;
    }
  }

  // DO NOT MODIFY THIS LINE
  module.exports = hasMoreTrue;

  let a=hasMoreTrue([true, true, false, false, false]);
  console.log(a);
