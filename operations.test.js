import { add, subtract } from './operations.js';

it('properly adds 2 numbers', () => {
  expect(add(1,2)).toBe(3);
})

it('properly adds 2 numbers', () => {
  expect(add(1,4)).toBe(5);
})

it('properly subtracts 2 numbers', () => {
  expect(subtract(1,2)).toBe(-1);
})

it('properly subtracts 2 numbers', () => {
  expect(subtract(1,4)).toBe(-3);
})

it('properly subtracts 2 numbers', () => {
  expect(subtract(1,5)).toBe(-4);
})