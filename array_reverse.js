'use strict';

function reverseArray (arr) {
  let reverse = [];
  for (let i = arr.length -1; i >= 0; i--) {
    reverseArray += arr [i];
  }
  return reverse
}

//given: [1, 3, 7, 9]
//reverse: [9, 7, 3, 1]