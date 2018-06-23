'use strict';

module.exports={};
exports.

function mergedList(list1, list2) {
  let curr1= list1.head;
  let curr2 = list2.head;
  let temp1;
  let temp2;

  while (curr1){
    temp1 = curr1.next;
    temp2 = curr2.next;
    curr1.next = curr2;
    curr2.next = temp1;
    curr1 = temp1;
    curr2 = temp2;
  }
  return list1;
}
