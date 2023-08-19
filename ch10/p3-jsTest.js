const p3Js = require('./p3-js');
const assert = require('chai').assert;

/*
const getLetterSet = phrase => new Set(phrase.toLowerCase().replace(" ", "").split(""));
* */

describe('p3Js', () => {
  
  describe('getLetterSet', () => {
    it('should return a set of letters', () => {
      const phrase = 'Hello World';
      const result = p3Js.getLetterSet(phrase);
      assert.instanceOf(result, Set, 'result is not a Set');
      assert.deepEqual(result, new Set(['h', 'e', 'l', 'o', 'w', 'r', 'd']), 'result is not correct');
      assert.notDeepEqual(result, new Set(['h', 'e', 'l', 'o', 'w', 'r', 'd', ' ']), 'result is not correct');
      assert.notDeepEqual(result, new Set(['h', 'e', 'l', 'o', 'w', 'r', 'd', '']), 'result is not correct');
    });
  });
  
  describe('intersection', () => {
    it('should return an empty set for two empty sets', function () {
      const setA = new Set();
      const setB = new Set();
      const result = p3Js.intersection(setA, setB);
      assert.deepEqual([...result], []);
    });
    
    it('should return an empty set if one of the sets is empty', function () {
      const setA = new Set(['a', 'b', 'c']);
      const setB = new Set();
      const result = p3Js.intersection(setA, setB);
      assert.deepEqual([...result], []);
    });
    
    it('should return the intersection of two sets', function () {
      const setA = new Set(['a', 'b', 'c']);
      const setB = new Set(['b', 'c', 'd']);
      const result = p3Js.intersection(setA, setB);
      assert.deepEqual([...result], ['b', 'c']);
    });
  });
  
  describe('getResultStr', () => {
    it('should return the correct result', () => {
      const set = new Set(['h']);
      const phrase = 'Hello World';
      const result = p3Js.getResultStr(set, phrase);
      assert.strictEqual(result, 'h---- -----');
    });
    
    it('should return the correct result', () => {
      const set = new Set(['h', 'l']);
      const phrase = 'Hello World';
      const result = p3Js.getResultStr(set, phrase);
      assert.strictEqual(result, 'h-ll- ---l-');
    });
    
    it('should return the correct result', () => {
      const set = new Set(['h', 'l', 'e']);
      const phrase = 'Hello World';
      const result = p3Js.getResultStr(set, phrase);
      assert.strictEqual(result, 'hell- ---l-');
    });
    
    it('should return the correct result', () => {
      const set = new Set(['h', 'l', 'e', 'o']);
      const phrase = 'Hello World';
      const result = p3Js.getResultStr(set, phrase);
      assert.strictEqual(result, 'hello -o-l-');
    });
  });
  
});