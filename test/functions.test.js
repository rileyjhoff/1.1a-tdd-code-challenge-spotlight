// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string that adds !!! to the argument. argument can be a number or string', (expect) => {
    const expected = 'bunny rabbit!!!';

    const actual = addExclamationPoints('bunny rabbit');

    expect.equal(actual, expected, 'should return bunny rabbit!!!');

    const expected1 = 'hello!!!';

    const actual1 = addExclamationPoints('hello');

    expect.equal(actual1, expected1, 'should return hello!!!');

    const expected2 = '100!!!';

    const actual2 = addExclamationPoints(100);

    expect.equal(actual2, expected2, 'argument is a number. should return 100!!!');
});


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('multiplyBySeven should take a number, or a number in a string, as an argument and return a number equal to whatever the argument multiplied by 7 equals', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4);

    expect.equal(actual, expected, 'should return 28. 4 times 7 is 28.');

    const expected1 = -49;

    const actual1 = multiplyBySeven(-7);

    expect.equal(actual1, expected1, 'should return -49. -7 times 7 is -49.');

    const expected2 = 700;

    const actual2 = multiplyBySeven('100');

    expect.equal(actual2, expected2, 'argument is 100 in a string. should return 700. 100 times 7 is 700.');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('multiplyBy12ThenHalve should take a number, or a number in a string, as an argument and return a number equal to whatever the argument multiplied by 12, then divided by 2 equals', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 'should return 24. 4 times 12 is 48. 48 divided by 2 is 24');

    const expected1 = -60;

    const actual1 = multiplyBy12ThenHalve(-10);

    expect.equal(actual1, expected1, 'should return -60. -10 times 12 is -120. 120 divided by 2 is -60');

    const expected2 = 42;

    const actual2 = multiplyBy12ThenHalve('7');

    expect.equal(actual2, expected2, 'argument is 7 in a string. should return 42. 7 times 12 is 84. 84 divided by 2 is 42');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('divideThenMultiply should take three numbers, can also be numbers in strings, as arguments and return a number equal to whatever the first argument divided by the second argument, then multiplied by the third argument equals', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5);

    expect.equal(actual, expected, 'should return 10. 8 divided by 4 is 2. 2 times 5 is 10.');

    const expected1 = -18;

    const actual1 = divideThenMultiply(-9, 2, 4);

    expect.equal(actual1, expected1, 'should return -18. -9 divided by 2 is -4.5. -4.5 times 4 is -18.');

    const expected2 = 25;

    const actual2 = divideThenMultiply('-20', '4', '-5');

    expect.equal(actual2, expected2, 'all arguments are numbers in strings. should return 25. -20 divided by 4 is -5. -5 times -5 is 25.');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('returnAsAnArray should take three numbers as an argument and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, 'should return the array [8, 4, 5]. numbers passed are 8, 4, 5.');

    const expected1 = [23423, 5555, 1];

    const actual1 = returnAsAnArray(23423, 5555, 1);

    expect.deepEqual(actual1, expected1, 'should return the array [23423, 5555, 1]. numbers passed are 23423, 5555, 1');

    const expected2 = [0, -234, 5.5];

    const actual2 = returnAsAnArray(0, -234, 5.5);

    expect.deepEqual(actual2, expected2, 'should return the array [0, -234, 5.5]. numbers passed are 0, -234, 5.5');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('returnAsAString should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '845';

    const actual = returnAsAString(8, 4, 5);

    expect.equal(actual, expected, 'should return 845. numbers passed are 8, 4, 5');

    const expected1 = '30-45.065';

    const actual1 = returnAsAString(30, -4, 5.065);

    expect.equal(actual1, expected1, 'should return 30-45.065. numbers passed are 30, -4, 5.065');

    const expected2 = '-0.1234567890';

    const actual2 = returnAsAString(-0.123, 456, 7890);

    expect.equal(actual2, expected2, 'should return -0.1234567890. numbers passed are -0.123, 456, 7890');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('makeLuckyGreeting should take in two numbers, or numbers in a string, and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected, 'should return Hello! your lucky number for the day is 12. 8 plus 4 is 12.');
    
    const expected1 = 'Hello! Your lucky number for the day is 0.';

    const actual1 = makeLuckyGreeting(-8, 8);

    expect.equal(actual1, expected1, 'should return Hello! your lucky number for the day is 0. -8 plus 8 is 0.');

    const expected2 = 'Hello! Your lucky number for the day is 1.';

    const actual2 = makeLuckyGreeting('-100', '101');

    expect.equal(actual2, expected2, 'arguments are numbers in strings. should return Hello! your lucky number for the day is 1. -100 plus 101 is 1.');

});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('getSecondItem should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected, 'should return apple. apple is the second item in the array passed through getSecondItem');

    const expected1 = 'there are only two items in this array';

    const actual1 = getSecondItem(['kiwi', 'there are only two items in this array']);

    expect.equal(actual1, expected1, 'should return there are only two items in this array. there are only two items in this array is the second item in the array passed through getSecondItem');

    const expected2 = 'grab me!';

    const actual2 = getSecondItem(['kiwi', 'grab me!', 'orange', 'plum', 'one more item', 'and another', 'couple more', 'done', 'actually, grab me!']);

    expect.equal(actual2, expected2, 'should return grab me!. grab me! is the second item in the array passed through getSecondItem');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('getLastItem should take an array and return the LAST item in the array, no matter the arrays length', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected, 'should return plum. plum is the last item in the array passed through getLastItem');

    const expected1 = 'there are only two items in this array';

    const actual1 = getLastItem(['kiwi', 'there are only two items in this array']);

    expect.equal(actual1, expected1, 'should return there are only two items in this array. there are only two items in this array is the last item in the array passed through getLastItem');

    const expected2 = 'actually, grab me!';

    const actual2 = getLastItem(['kiwi', 'grab me!', 'orange', 'plum', 'one more item', 'and another', 'couple more', 'done', 'actually, grab me!']);

    expect.equal(actual2, expected2, 'should return actually, grab me!. actually, grab me! is the last item in the array passed through getLastItem');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('getRandomNumber should return a random number between 0 and 5', (expect) => {
    const expected = 0 <= getRandomNumber() <= 5;

    const actual = true;

    expect.equal(actual, expected, 'should return as true. this tests to see if getRandomNumber returns a value greater than or equal to 0 and less than or equal to 5');

    const expected1 = 5 < getRandomNumber();

    const actual1 = false;

    expect.equal(actual1, expected1, 'should return as false. this tests to see if getRandomNumber returns a value greater than 5');

    const expected2 = 0 > getRandomNumber();

    const actual2 = false;

    expect.equal(actual2, expected2, 'should return as false. this tests to see if getRandomNumber returns a value less than 0');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});