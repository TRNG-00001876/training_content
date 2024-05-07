# JEST

- Create a project using npm or yarn (I will be using npm throughout this tutorial)
- `npm init -y`
- after that run the following command to install the jest in your dev dependency.
- `npm install --save-dev jest`

*jest*

There are three main methods in this test file:

- `test()` – It is the smallest unit test case that is written to be executed. String in quotes represents the test name
```
test("<test_name>",()=>{
    ...
})
```

- `expect()` – It is an assertion. Every test() statement has an expect() function which takes a value and expects a return in true form. Single test case can have multiple expect() functions.
```
test("<test_name>",()=>{
    ...
    expect(2+2).toBe(4);
    ...
})
```

- `describe()` – It is a suite of Test scripts that gives an outer description for the test suite. It could consist of more than one test cases.
```
describe("<name_to_tests_group>",()=>{

    test("<test_name>",()=>{
       ...
    });
    ...
    test("<test_name>",()=>{
       ...
    });
})
```

*Start Unit testing*

- Now Let's get started by writing a test for a function that add two numbers.

First, create a sum.js file:
```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Now it is batter to have a separate directory of test cases for that follow the below-given steps

- First create the __test__ repository
- Add your test files in that directory the file name should have .test.js means <any_name>.test.js
- It will be batter to have different test files for different tests
- import the function module you want to test.
- before starting the test write the test script in package.js Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
After reading the above guideline, create a file named sum.test.js.
This will contain actual test:

```
const sum = require('./sum');
test("add", () => {
  expect(sum(1, 2)).toBe(3);
});
```
Finally, run yarn test or npm test command and Jest will print this message:
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)

---

*Common Matchers*

The simplest way to test a value is with exact equality.
```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

In this code, expect(2 + 2) returns an "expectation" object. You typically won't do much with these expectation objects except call matchers on them. In this code, .toBe(4) is the matcher. When Jest runs, it tracks all the failing matchers so that it can print out nice error messages for you.

`toBe` uses Object to test exact equality. If you want to check the value of an object, use toEqual instead:
```
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```
- toEqual recursively checks every field of an object or array.

You can also test for the opposite of a matcher:
```
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

*1. Truthiness*

In tests, you sometimes need to distinguish between undefined, null, and false. Jest contains helpers that let you be explicit about what you want.

`toBeNull` matches only null
`toBeUndefined` matches only undefined
`toBeDefined` is the opposite of toBeUndefined
`toBeTruthy` matches anything that an if statement treats as true
`toBeFalsy` matches anything that an if statement treats as false For example:
```
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
```
```
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

Note: use matcher that most precisely corresponds to what you want your code to be doing.

*2. Numbers*

The jest provides different matchers for comparing numbers.
Example:
```
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```
For floating-point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error to understand this error click here.
```
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
```

*2. Strings*

jest provides the facility to check strings against regular expressions with toMatch:
```
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

*3. Arrays and iterables*

You can check if an array or iterable contains a particular item using toContain:
```
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

*4. Exceptions*

If you want to test whether a particular function throws an error when it's called, the jest provides the matcher toThrow.
```
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
```

Note: the function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.

---

