const assert = require('assert');
const transformer = require('./vowel-game');

describe('Testing transform function', () => {

  test('Should return an array with two strings', () => {
    const test = transformer.transform('coors', 'light');
    assert.equal(typeof test[0], typeof 'string');
    assert.equal(typeof test[1], typeof 'string');
    assert.equal(test.length, 2);
  });

  test('Should return lowercase strings', () => {
    const uppercase = /[A-Z]/;
    const test = transformer.transform('SNAKES', 'PLANE');
    assert.equal(uppercase.test(test[0]), false);
    assert.equal(uppercase.test(test[1]), false);
  });

  test('Should switch the string after the first vowel', () => {
    assert.deepEqual(transformer.transform('towel', 'car'), ['tor', 'cawel']);
    assert.deepEqual(transformer.transform('apple', 'melon'), ['alon', 'mepple']);
    assert.deepEqual(transformer.transform('black', 'white'), ['blate', 'whick']);
  });

  test('Should handle vowelless words', () => {
    assert.deepEqual(transformer.transform('sms', 'mms'), ['sms', 'mms']);
    assert.deepEqual(transformer.transform('simosa', 'mms'), ['simosa', 'mms']);
  });

  test('Should handle empty strings', () => {
    assert.deepEqual(transformer.transform('', 'mms'), ['', 'mms']);
  });

  test('Should throw error if a string contains non-letters', () => {
    assert.throws(() => transformer.transform('towel234', 'car'));
    assert.throws(() => transformer.transform('tow(el', 'car'));
    assert.throws(() => transformer.transform('towel', 'c%ar'));
  });

  test('Should throw error if arguments are not strings', () => {
    assert.throws(() => transformer.transform('towel', 42));
  });

});
