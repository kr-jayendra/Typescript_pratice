"use strict";
let num = 23;
let names = "jayendra";
let isTrue = false;
let course = "typescript";
console.log(num);
console.log(names);
console.log(isTrue);
console.log(course);
let anyadd;
anyadd = 45;
console.log(anyadd);
anyadd = "hello world";
console.log(anyadd);
let nums = [];
nums.push(4);
nums.push(8);
nums.push(2);
nums.push(6);
nums.push(9);
console.log(nums);
nums.map((e) => console.log(e));
const user = [3, 'jayendra'];
console.log(user, typeof user);
user.push(3);
console.log(user);
;
const mySize = 2;
console.log(mySize);
function abc(a, b) {
    if (a < b) {
        return a ** b;
    }
    return a * b;
}
console.log(abc(5, 6));
const emp1 = {
    id: 45,
    name: "employee_name1",
    retire: (date) => {
        console.log(date);
    }
};
const emp2 = {
    id: 12,
    name: "employee_name2",
    retire: (date) => {
        console.log(date);
    }
};
console.log(emp1);
console.log(emp2);
const fun = (value) => {
    if (typeof value === 'number') {
        return value ** 2;
    }
    else {
        return parseInt(value) * 2;
    }
};
console.log(fun("34"));
console.log(fun(34));
const bu = {
    drag: () => {
        console.log("drag cursor");
    },
    resize: (size) => {
        console.log("new size : ", size);
    }
};
console.log(bu);
//# sourceMappingURL=types.js.map