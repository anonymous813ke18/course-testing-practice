import { reverseString } from '../reverseString.js';

test('Takes "ABCD" and returns "DCBA"', () => {
    expect(reverseString('ABCD')).toBe('DCBA');
});

test('Takes "Hello World!" and returns "!dlroW olleH"', () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
});