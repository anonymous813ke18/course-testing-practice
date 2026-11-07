import { caesarCipher } from "../caesarCipher.js";

test('Test 1: xyz -> abc', () => {
    expect(caesarCipher('xyz')).toBe('abc');
});

test('Test 1: heLLo -> khOOr', () => {
    expect(caesarCipher('heLLo')).toBe('khOOr');
});

test('Test 1: "Hello, World!" -> abc', () => {
    expect(caesarCipher('Hello, World!')).toBe('Khoor, Zruog!');
})