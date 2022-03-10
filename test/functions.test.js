// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass for addExclamationPoints', (expect) => {
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

test('this test should pass for multiplyBySeven', (expect) => {
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

test('this test should pass for multiplyBy12ThenHalve', (expect) => {
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

test('this test should pass for divideThenMultiply', (expect) => {
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

test('this test should pass for returnAsAnArray', (expect) => {
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

test('this test should pass for returnAsAString', (expect) => {
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

test('this test should pass for makeLuckyGreeting', (expect) => {
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

test('this test should pass for getSecondItem', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should pass for getLastItem', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('this test should pass for getRandomNumber', (expect) => {
    const expected = 0 <= getRandomNumber() <= 5;

    const actual = true;

    expect.equal(actual, expected);
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});