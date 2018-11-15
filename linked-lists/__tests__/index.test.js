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

  it('prepend(value) method should prepend a node to a list at the beginning if the list is empty', () => {
    let list = new LinkedList();
    list.prepend(1);
    expect(list.head.value).toEqual(1);
  });

  it('prepend(value) method should prepend a node to a list at the beginning if this list is not empty', () => {
    let list = new LinkedList();
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    list.prepend(4);
    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(1);
  });

  it('reverse method should reverse a LinkedList', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.reverse();
    expect(list.head.value).toEqual(4);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(1);
  });

  it('remove(value) method should remove a node from the list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.remove(2);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(4);
  });

  it('remove(value) method should remove a node from te beginning of a list', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.remove(1);
    expect(list.head.value).toEqual(2);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(4);
  });
});
