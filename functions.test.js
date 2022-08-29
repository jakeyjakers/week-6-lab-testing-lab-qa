const {returnTwo, greeting, add} = require('./functions')

test('Should expect returnTwo to return 2', () => {
    expect(returnTwo()).toEqual(2)
})


describe('greeting test', () => {

    test('Should expect greeting James to equal Hello, James', () =>{
    expect(greeting('James')).toEqual('Hello, James')
})

    test('Should expect greeting Jill to equal Hello, Jill.', () =>{
        expect(greeting('Jill')).toEqual('Hello, Jill')
    })

})

describe('add function test', () => {

    test('Should expect add(1, 2) to equal 3', () =>{
        expect(add(1,2)).toEqual(3)
    })

    test('Should expect add(5, 9) to equal 14', () => {
      expect(add(5, 9)).toEqual(14)  
    })
})