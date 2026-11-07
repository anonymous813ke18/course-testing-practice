import { analyzeArray } from "../analyzeArray.js";

test('Test 1: All positive integers', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    })
});

test('Test 2: Some negative integers', () => {
    expect(analyzeArray([1, 8, -3, 4, -2, 6])).toEqual({
        average: expect.closeTo(2.33, 2),
        min: -3,
        max: 8,
        length: 6,
    })
});

test('Test 3: All negative integers', () => {
    expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toEqual({
        average: -4,
        min: -8,
        max: -1,
        length: 6,
    })
});

test('Test 4: Some characters', () => {
    expect(analyzeArray([1, 8, 'A', 4, -2, 'c'])).toEqual({
        average: expect.closeTo(29.17, 2),
        min: -2,
        max: 'c',
        length: 6,
    })
});

test('Test 5: All characters', () => {
    expect(analyzeArray(['b', 'z', 'A', 'D', 'Z', 'c'])).toEqual({
        average: expect.closeTo(90.33, 2),
        min: 'A',
        max: 'z',
        length: 6,
    })
});

test('Test 6: All characters (including special char)', () => {
    expect(analyzeArray(['b', 'z', '!', 'D', 'Z', 'c'])).toEqual({
        average: 85,
        min: '!',
        max: 'z',
        length: 6,
    })
});