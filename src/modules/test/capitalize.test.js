import { capitalize } from "../capitalize.js";

test('Takes hammad and returns Hammad', () => {
    expect(capitalize('hammad')).toBe('Hammad');
});

test('Takes "hello world!" and returns "Hello world!"', () => {
    expect(capitalize('hello world!')).toBe('Hello world!');
});