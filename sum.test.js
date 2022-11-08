const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const calculator = require('./calculator.js');
const capitalize = require('./capitalize.js');
test('common test', () => {
  expect(stringLength('hello')).toBe(5);
});

test('test for one', () => {
  expect(stringLength('g')).toBe(1);
});

test('test for 9', () => {
  expect(stringLength('goodnight')).toBe(9);
});

test('test for 0', () => {
  expect(stringLength('')).toBe(Error);
});

test('test for 10', () => {
  expect(stringLength('good night')).toBe(Error);
});
test('reverseString', () => {
  expect(reverseString('hello')).toBe('olleh');
});

describe('Math', () => {
  test('add', () => {
    expect(calculator.add(2, 5)).toBe(7);
  });
  test('add2', () => {
    expect(calculator.add(5, 6)).toBe(11);
  });
  test('add3', () => {
    expect(calculator.add(50, 100)).toBe(150);
  });
  test('subtract', () => {
    expect(calculator.sub(2, 5)).toBe(-3);
  });
  test('subtract2', () => {
    expect(calculator.sub(5, 5)).toBe(0);
  });
  test('subtract3', () => {
    expect(calculator.sub(210, 5)).toBe(205);
  });
  test('Multiplication', () => {
    expect(calculator.multi(2, 5)).toBe(10);
  });
  test('Multiplication2', () => {
    expect(calculator.multi(9, 5)).toBe(45);
  });
  test('Multiplication3', () => {
    expect(calculator.multi(40, 5)).toBe(200);
  });
  test('division', () => {
    expect(calculator.div(2, 5)).toBe(0.4);
  });
  test('division2', () => {
    expect(calculator.div(9, 5)).toBe(1.8);
  });
  test('division3', () => {
    expect(calculator.div(6, 100)).toBe(0.06);
  });
});
test('Capitalize', () => {
  expect(capitalize('hello')).toBe('Hello');
});
