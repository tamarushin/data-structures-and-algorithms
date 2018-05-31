'use strict';

function binarySearch (array, item) {

  let low = 0;
  let high = array.length - 1;
  let guess = array[mid];

  while low <= high
    let mid = Math.floor ((low + high)/2);

    if (guess === item) {
      return mid;

    } else if (guess > item) {
      high = mid - 1
    
    } else {
      low = mid + 1;
  }
  return -1;

}

