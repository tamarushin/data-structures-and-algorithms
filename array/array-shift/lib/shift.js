'use strict';

module.exports = exports = {};

exports.insertShiftArray = (arr, num) => {
  let insertShiftArray = [];
  let mid = Math.ceil(arr.length/2);

  for(let i=0; i<arr.length+1; i++) {
    if (i<mid) {
      insertShiftArray[i] = arr[i];
    }
    if (i ===mid) {
      insertShiftArray[i] = num;

    }
    else if (i > mid) {
      insertShiftArray[i] = arr[i-1];
    }
  }
  return insertShiftArray;
};

