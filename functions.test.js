const { expect } = require('@jest/globals')
const { TestScheduler } = require('jest')
const functions = require('./functions')

// toBe checks for a specific value. toBe checks for primitive type. 4=4 string=string
// object/array are reference type. stored in different memory. need to use toEqual


test('Adds 2+2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4);
})

test('Adds 2+2 to NOT equal 4', ()=>{
    expect(functions.add(2,2)).not.toBe(5);
})

//Check falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opossite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches  anything that an if statement treats as false

test('Should be null', ()=>{
    expect(functions.isNull).not.toBeNull();
})

test('Should be falsey', ()=>{
    expect(functions.isNull(null)).toBeFalsy();
})

test('User should be Brad Traversy object', ()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Ken',
        lastName: 'Dayao'
    });
})

//Less than and greater than
//toBeLessThan  toBeLessThanOrEqual
//toBeGreaterThan  toBeGreaterThanOrEqual

test('should be under 1600', ()=>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
})

//Regex(regular expressions)
test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/i)
})

//Arrays toContain-checks array to see if admin is in array
    test('Admin should be in usernames',()=>{
        usernames=['john', 'karen', 'admin'];
        expect(usernames).toContain('admin')
    })

//API test asych data
    // test('User fetched name should be Leanne Graham', ()=>{
    //     expect.assertions(1);
    //     return functions.fetchUser().then(data=>{
    //         expect(data.name).toEqual('Leanne Graham')
    //     })
    // })

//async await
    test('User fetched name should be Leanne Graham', async ()=>{
       expect.assertions(1);
       const data =await functions.fetchUser();
       expect(data.name).toEqual('Leanne Graham')
        
    })

//check if function is defined
test('reverseString function exists',()=>{
    expect(functions.reverseString).toBeDefined();
})

test('String reverse', ()=>{
    expect(functions.reverseString('hello')).toBe('olleh')
})