// Type Aliasing
type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"

function combine2(input1 : Combinable, input2: Combinable){
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number'){
        result = input1 + input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

/*
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
*/

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };
function greet(user: User) {
    console.log('Hi, I am ' + user.name);
  }
   
  function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
  }