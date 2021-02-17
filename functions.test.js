const { expect } = require('@jest/globals')
const { TestScheduler } = require('jest')
const functions = require('./functions')

// to be checks for a specific value


test('Adds 2+2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4);
} )

test('Adds 2+2 to NOT equal 4', ()=>{
    expect(functions.add(2,2)).not.toBe(5);
} )

//Check falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opossite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches  anything that an if statement treats as false

test('Should be null', ()=>{
    expect(functions.isNull).not.toBeNull();
} )

test('Should be falsey', ()=>{
    expect(functions.isNull(null)).toBeFalsy();
} )