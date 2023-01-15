"use strict";
function combine2(input1, input2) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const u1 = { name: 'Max', age: 30 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
