import { add, subtract, multiply } from './operations.js';

describe('add', () => {
  it('properly adds 2 numbers', () => {
    expect(add(1,2)).toBe(3);
  })

  it('properly adds 2 numbers', () => {
    expect(add(1,4)).toBe(5);
  })
})



describe('subtract', () => {
  it('properly subtracts 2 numbers', () => {
    expect(subtract(1,2)).toBe(-1);
  })

  it('properly subtracts 2 numbers', () => {
    expect(subtract(1,4)).toBe(-3);
  })

  it('properly subtracts 2 numbers', () => {
    expect(subtract(1,5)).toBe(-4);
  })

  it('properly subtracts 2 numbers', () => {
    expect(subtract(1,6)).toBe(-5);
  })
})

describe('multiply', () => {
  it('properly multiplies 2 numbers', () => {
    expect(multiply(1,2)).toBe(2);
  })
})