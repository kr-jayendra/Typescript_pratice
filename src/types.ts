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
let anyadd;    //let anyadd: any
anyadd = 45;
console.log(anyadd)
anyadd = "hello world"
console.log(anyadd)

// array 
// let nums = [4,5,7,'5'];
// console.log(nums)
// lets take to type to strict them 
let nums: number[] = [];
nums.push(4)
nums.push(8)
nums.push(2)
nums.push(6)
nums.push(9)
console.log(nums)

nums.map((e) => console.log(e))

// pair/tuple
const user: [number, string] = [3, 'jayendra']
console.log(user, typeof user)
user.push(3);
console.log(user)

// Enum 
// enum Size {Small = 1,Medium,Large};     
const enum Size { Small = 1, Medium, Large };   //its optimize the codes in js 
const mySize: Size = Size.Medium;
console.log(mySize);

// functions
// you can look to some modification out method here stricaly say that which paramenter type pass
// and also you can add on return type infered 
// also some config feture we can add to enable to tsconfig.json 
// 
function abc(a: number, b: number): number {
    // let y;
    // let x:string = 'this is method' //you can see the warning 

    if (a < b) {
        return a ** b;
    }
    return a * b;
}
console.log(abc(5, 6));


// objects 
// you can make the object also puts some feature or strict things to its type 

// const emp : {
//     id : number,
//     name : string
// } = {id : 56, name : ""};

// const emp : {
//     id : number,
//     name ?: string  // add on ? which say that optional sign firstly put its undefined 
// } = {id : 56};

// let emp : {
//     readonly id : number,
//     name : string
// } = {id : 45,name : "good"};

// // emp.id = 78      // because of id read only therefore not change its value 
// emp.name = 'good mood'
// console.log(emp.name)   //undefined 


// let emp: {
//     readonly id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 45, name: "good", retire: (date: Date) => {
//         console.log(date)
//     }
// };

// above pattern use to reduce code readbilty 
// we use alias which to pre make the object and its properties 

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

// you can that not repet use 
// above alias to add just like its user-defined type 
const emp1 : Employee = {
    id : 45,
    name : "employee_name1",
    retire:(date:Date)=>{
        console.log(date)
    }
}

const emp2 : Employee = {
    id : 12,
    name : "employee_name2",
    retire:(date:Date)=>{
        console.log(date)
    }
}
console.log(emp1)
console.log(emp2)


// Union
// here value which is string or number 
const fun = (value : string | number) : number => {

    if(typeof value ===  'number'){
        return value ** 2;
    }else{
        return parseInt(value) * 2;
    }
    // return 0;
}

// you can use to both type 
console.log(fun("34"));
console.log(fun(34));


// intersection type 
type Dragable = {
    drag: ()=> void
};

type Resizeable = {
    resize : (size:number) => void
}

type BothUse = Dragable & Resizeable

const bu : BothUse = {
    drag : () =>{
        console.log("drag cursor")
    },
    resize : (size) =>{
        console.log("new size : ",size);
    }
}

console.log(bu);

// literal  
type Quentity = 10 | 45;
let q : Quentity = 45;

type Parameter = 'cm' | 'm' | 'km'
let decidePara : Parameter = 'm';