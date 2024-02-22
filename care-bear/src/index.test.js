import { describe, expect, test } from 'vitest';

// Test 1: Check if 2 + 2 equals 4
describe('Math Test', () => {
    test('2 + 2 should equal 4', () => {
        expect(2 + 2).toBe(4);
    });
});

// Test 2: Check if a string is not empty
describe('String Test', () => {
    test('String should not be empty', () => {
        const myString = 'Hello, world!';
        expect(myString).not.toBe('');
    });
});

// Test 3: Check if an array contains a specific value
describe('Array Test', () => {
    test('Array should contain a specific value', () => {
        const myArray = [1, 2, 3, 4, 5];
        expect(myArray).toContain(3);
    });
});

// Test 4: Check if an object has a certain property
describe('Object Test', () => {
    test('Object should have a specific property', () => {
        const myObject = { name: 'John', age: 30 };
        expect(myObject).toHaveProperty('name');
    });
});

// Test 5: Check if a function throws an error
describe('Error Test', () => {
    test('Function should throw an error', () => {
        function throwError() {
            throw new Error('Test error');
        }
        expect(throwError).toThrowError();
    });
});

// Test 6: Check if a number is greater than another number
describe('Number Test', () => {
    test('Number should be greater than another number', () => {
        const a = 10;
        const b = 5;
        expect(a).toBeGreaterThan(b);
    });
});

// Test 7: Check if an expression evaluates to true
describe('Expression Test', () => {
    test('Expression should evaluate to true', () => {
        const result = 10 > 5;
        expect(result).toBeTruthy();
    });
});

// Test 8: Check if two arrays have the same length
describe('Array Length Test', () => {
    test('Arrays should have the same length', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        expect(array1.length).toBe(array2.length);
    });
});

// Test 9: Check if a variable is defined
describe('Test 9', () => {
    test('checks if a string is of a certain length', () => {
        const string = 'Hello';
        expect(string.length).toBe(5);
    });
});

	describe('Test 9', () => {
		test('checks if a string is of a certain length', () => {
			const string = 'Hello';
			expect(string.length).toBe(5);
		});
});
