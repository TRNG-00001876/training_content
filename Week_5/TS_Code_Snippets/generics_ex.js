function sample() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return arg;
}
var op1 = sample('hello', 'how', 'are', 'you');
var op2 = sample(100);
var op3 = sample(true);
console.log('op1', op1);
console.log('op2', op2);
console.log('op3', op3);
// as const will create a readonly array with ;iteral values.
//when we want to ensure that the values in the array remain as specific literals
var skills = ['Java', 'C#', 'C++', 'Python'];
var rev_intern2 = {
    name: 'Aravindh',
    age: 21,
    hobbies: ['Reading', 'Writing']
};
