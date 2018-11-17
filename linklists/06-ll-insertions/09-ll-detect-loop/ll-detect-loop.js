'use strict';

function hasLoop(list){

  let curr = list.head;

  while (curr) {
    if(curr.isVisited) {
      return true;
    } else {
      curr.isVisited = true;
      curr = curr.next;
    }
  }
  return false;
}


