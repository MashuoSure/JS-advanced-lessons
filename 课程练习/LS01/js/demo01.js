//JS是一种直译式脚本语言、是一种弱类型，动态类型语言

//JS中，尽量避免使用全局方法

//基本语法回顾
var x;
x = 23;
//条件语句
if(x>22){
	X+=2;
}else{
	console.log("x 不大于 22")；
}

var xx = 234;
if(234==xx){
	console.log("相等");
}


console.log(a);		//undefined
if(true){
    var a = 2;
}
console.log(a);		//2

console.log(b);		//undefined
if(false){
    var b = 3;
}
console.log(b);		//undefined


for(var i=0;i<3;i++){				//i:1    i:2   i:3   3
    console.log("i:",i);
}
console.log(i);

//复合运算符
var a = 3;
a+=5;				//8
console.log(a);		//undefined

var num = 1;
var str = "some string";
var b = true;
var n = null;
var u = undefined;//如果没赋值的话，是什么情况

var arr = ["apple", "pear", "banana"];
var func = function(){
    return "this a function";
};
var obj = new Object();
obj.name = "test";

console.log("\n");
console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof b); //boolean
console.log(typeof n); //这里返回的是object，这是JS语言的特别之处
console.log(typeof u); //undefined
console.log("\n");
console.log(typeof arr); //object
console.log(typeof func); //function
console.log(typeof obj); //object

//思考
console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Object); //function
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof RegExp); //function
console.log(typeof Error); //function
console.log(typeof Math); //object
console.log(typeof JSON);//object

//递增
var a = 10;
console.log(++a);

var b = 20;
console.log(b++);//先输出b再进行运算


//字符串连接
var a = "abc";
var b = "def";
var c = a+b;

//字符串常用方法，字符串的方法源于String.prototype
var str1 = "aaa".concat("bbb");//返回字符串
var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);
console.log(str1);		//aaabbb
console.log(str2);		//cdef
console.log(str3);		//cde
console.log(str4);		//ef
console.log(str5);		//cd

function max(a,b) {
    return a>b?a:b;
}
console.log(max(2,3));		//3

var min = function(a,b){
    return a<b?a:b;
};
console.log(min(2,3));		//2

(function (x,y) {
    return x>y?x:y;
}(4,5));

var result = function min(x,y) {
    return x<y?x:y;
}(2,3);
console.log(result);		//2