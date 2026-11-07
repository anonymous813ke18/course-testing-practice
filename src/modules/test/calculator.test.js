import { calculator } from "../calculator.js";

// Test for the addition function

test('Addition: 1 + 2 = 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Addition: 123957 + 862345 = 986302', () => {
    expect(calculator.add(123957, 862345)).toBe(986302);
});

test('Addition: 123957 + -862345 = -738388', () => {
    expect(calculator.add(123957, -862345)).toBe(-738388);
});

// Test for Subtraction function

test('Subtraction: 10 - 2 = 8', () => {
    expect(calculator.subtract(10, 2)).toBe(8);
});

test('Subtraction: 123957 - 862345 = -738388', () => {
    expect(calculator.subtract(123957, 862345)).toBe(-738388);
});

test('Subtraction: -123957 - 862345 = -986302', () => {
    expect(calculator.subtract(-123957, 862345)).toBe(-986302);
});

test('Subtraction: 862345 - -123957 = 986302', () => {
    expect(calculator.subtract(862345, -123957)).toBe(986302);
});

// Test for Multiplication function

test('Multiplication: 2 * 2 = 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test('Multiplication: 2 * -2 = -4', () => {
    expect(calculator.multiply(2, -2)).toBe(-4);
});

test('Multiplication: -2 * -2 = 4', () => {
    expect(calculator.multiply(-2, -2)).toBe(4);
});

test('Multiplication: 2 * 0 = 0', () => {
    expect(calculator.multiply(2, 0)).toBe(0);
});

// Test for Division function

test('Division: 2 / 2 = 1', () => {
    expect(calculator.divide(2, 2)).toBe(1);
});

test('Division: 2 / -2 = -1', () => {
    expect(calculator.divide(2, -2)).toBe(-1);
});

test('Division: -2 / -2 = 1', () => {
    expect(calculator.divide(-2, -2)).toBe(1);
});

test('Division: 2 / 0 = Infinity', () => {
    expect(calculator.divide(2, 0)).toBe(Infinity);
});

test('Division: 12 / 2 = 6', () => {
    expect(calculator.divide(12, 2)).toBe(6);
});

test('Division: 1 / 2 = 0.5', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
});