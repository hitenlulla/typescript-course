// 1. Tuple type
const person :{
    name: string,
    age: number,
    hobbies: string[],
    role : [number, string] // Tuple type declaration
} = {
    name : "Hiten", 
    age: 22,
    hobbies : ["sports", "cooking"],
    role : [2, 'author'] // Tuple
}

// person.role[1] = 10                                          //<- Throws error
person.role = [0, 'admin']
// person.role = [0, 'admin', 'user']                           //<- Throws error
person.role.push('hello')               
console.log(person.role)

// 2. Enum type
// enum Role {ADMIN, READ_ONLY, AUTHOR};
enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

const person2 :{
    name: string,
    age: number,
    hobbies: string[],
    role : Role // Tuple type declaration
} = {
    name : "Hiten", 
    age: 22,
    hobbies : ["sports", "cooking"],
    role : Role.ADMIN // Tuple
}

if(person2.role == Role.ADMIN){
    console.log("I am an admin")
}

// 3. Any type - only use when you don't know what kind of data will come in (! Avoid using any)
let favorites: any;
favorites = 1
favorites = '1'
favorites = true
favorites = ['1',2,false]

// 4. Union types - sending multiple types of values as parameters. seperated by '|'
function combine(input1 : number | string, input2: number | string){
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number'){
        result = input1 + input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinedAges = combine(30, 26)
const combinedNames = combine('Max', 'Ana')
console.log(combinedAges, combinedNames)

// 5. Literal types
let varx : "2" | "3"
varx = "2"
varx = "3"
// varx = "4"                               //<- Throws error

// 6. Unknown type
let userInput : unknown;
userInput = 5;
userInput = 'Max';

let userName : string;
// userName = userInput                    //<- Throws error
// Unknown is different than any, unknown forces to induce a type check for assigning a value
// Hence unknown is a better choice than any, as we will have to write a type checking
if (typeof userInput == 'string'){
    userName = userInput
}