'use strict';

const LinkedList = require('../index.js');

describe('testing LinkedList class', () => {

  it('append(value) method should append a node to an empty list', () => {
    let list = new LinkedList();
    list.append(4);
    expect(list.head.value).toEqual(4);
  });

  it('append(value) method should append a node to a list that is not empty', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(4);
  });
});
