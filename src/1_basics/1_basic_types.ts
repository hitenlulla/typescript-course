function add(n1: number, n2: number, showResult: boolean, resultPhrase: string){
   let result = n1 + n2
    if(showResult) console.log(resultPhrase + result);
    else return result
}

// 1. Type inference
let num1 : number;
num1 = 5
// num1 = '5';
const num2 = 2.8;
let printResult = true;
let resultPhrase = "The result is "
const result = add(num1, num2, printResult, resultPhrase);
console.log(result)

// 2. Declared object type inference
const person1:{
    name : string
    age : number
    hobbies : string[]
} = {
    name : "Hiten",
    age: 22,
    hobbies : ["sports", "cooking"]
}

// console.log(person1.firstname)
console.log(person1.name)

for(const hobby of person1.hobbies){
    console.log(hobby.toUpperCase())
}

// 3. Auto object type infenerece
const person2 = {
    name : "Hiten", 
    age: 22,
    hobbies : ["sports", "cooking"]
}

// console.log(person2.firstname)
console.log(person2.name)

// 4. Nested object type inference 
let product : {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  }

product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
}