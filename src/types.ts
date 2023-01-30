// typescript extends type 
// any
// unknown
// never
// enum
// tuple

// you can add this type after : 
// but it typescript compiler automatically checks types using assign its value 
// let num : number = 23;
// let names : string = "jayendra"
// let isTrue : boolean = false
// let course : string = "typescript"

// above code you can also look : 
let num = 23;
let names = "jayendra"
let isTrue = false
let course = "typescript"

console.log(num)
console.log(names)
console.log(isTrue)
console.log(course)

// any type 
let anyadd ;    //let anyadd: any
anyadd = 45;
console.log(anyadd)
anyadd = "hello world"
console.log(anyadd)

// array 
// let nums = [4,5,7,'5'];
// console.log(nums)
// lets take to type to strict them 
let nums : number[] = [];
nums.push(4)
nums.push(8)
nums.push(2)
nums.push(6)
nums.push(9)
console.log(nums)

nums.map((e)=> console.log(e))

// pair/tuple
const user : [number,string] = [3,'jayendra']
console.log(user,typeof user)
user.push(3);
console.log(user)

// Enum 
// enum Size {Small = 1,Medium,Large};     
const enum Size {Small = 1,Medium,Large};   //its optimize the codes in js 
const mySize : Size = Size.Medium;
console.log(mySize);

// functions
// you can look to some modification out method here stricaly say that which paramenter type pass
// and also you can add on return type infered 
// also some config feture we can add to enable to tsconfig.json 
// 
function abc(a:number,b:number) : number{
    // let y;
    // let x:string = 'this is method' //you can see the warning 

    if(a < b){
        return a**b;
    }
    return a*b;
}
console.log(abc(5,6));
