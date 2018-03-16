var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);

var str = "abcde";
console.log(str.length);
str.length = 1;
console.log(str.length,str);

var arr = [1,2,3,4];
console.log(arr.length);
arr.length = 1;
console.log(arr.length,arr);