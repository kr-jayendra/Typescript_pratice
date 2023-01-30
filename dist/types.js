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
function abc(a, b = 0) {
    if (a < b) {
        return a ** b;
    }
    return a * b;
}
console.log(abc(5, 6));
//# sourceMappingURL=types.js.map