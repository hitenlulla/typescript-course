"use strict";
// 1. Function return type
function add1(n1, n2) {
    // return n1 + n2
    return n1.toString() + n2.toString();
}
function printResult1(res) {
    console.log("Result " + res);
}
function printResult2(res) {
    console.log("Result " + res);
    return;
}
printResult1(add1(5, 12));
// 2. Function as type
// Take any function
// let combineValues: Function;
// combineValues = 5                                    //<- Throws error
// combineValues = printResult                          //<- This is allowed
// Take any function that takes a function with params as numbers and return as string
let combineValues1;
combineValues1 = add1;
// combineValues = printResult                          //<- This is not allowed now
console.log(combineValues1(8, 8));
// Use case ^
function addAndHandle(n1, n2, cb) {
    const res = n1 + n2;
    cb(res);
}
addAndHandle(10, 20, (result) => {
    console.log("Printing from callback: " + result);
});
// 3. return type - never
// This function can never return anything as, when error is thrown program crashes here
function generateError(message, code) {
    // while (true){}
    throw { message: message, errorCode: code };
}
generateError('An Error occured', 500);
