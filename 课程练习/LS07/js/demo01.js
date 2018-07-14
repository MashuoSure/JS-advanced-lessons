//不用解构赋值方式定义变量
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);         //  1 2 3

//用解构赋值方式定义变量
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);         //  1 2 3

//let 也支持解构赋值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);   //  1 2 3


//不完全解构
let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);   // 1 2 4   3不能


//等号右边如果不是可以遍历的结构，则不能解构



//默认值可以引用解构赋值其他已经声明的变量
let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);	//false

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);    // true 
console.log(a);			//[2,3,4]


//对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);    // aaa   bbb

var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3); 			//undefine    没有被赋值

//左侧为键值对时,注意键值对赋值时的对应关系
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);			// "aaa"

var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); 			//"Hello"
console.log(y); 			//"World"

//对象的解构也可以指定默认值。
var {x2 = 3} = {};
console.log(x2); 			// 3

var {x3, y3 = 5} = {x3: 1};
console.log(x3); 			// 1
console.log(y3);			// 5


//字符串也可以解构赋值
const [a, b, c, d, e] = 'hello';//相当于将'hello'转成了["h","e","l","l","o"]后解构
console.log(a); 			// "h"
console.log(b); 			// "e"
console.log(c); 			// "l"
console.log(d); 			// "l"
console.log(e); 			// "o"

function add([x, y]){
    return x + y;
}
add([1, 2]); 				// 3


//函数参数的解构也可以使用默认值
function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({}));		 // [0, 0]
console.log(move1()); 		// [0, 0]

//参数为无序值
function f({x, y, z}) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f({z: 3, y: 2, x: 1});			//1 2 3


var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + " is " + value);
}	
		//first is hello
		//second is world


//变量声明语句中，不能带有圆括号。带有圆括时全部报错
var [(a)] = [1];
var {x: (c)} = {};
var ({x: c}) = {};
var {(x: c)} = {};
var {(x): c} = {};
var { o: ({ p: p }) } = { o: { p: 2 } };