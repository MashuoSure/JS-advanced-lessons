

console.log(typeof new Function());  //function
console.log(typeof new Array());     //object
console.log(typeof new Date());      //object


//补充思考
console.log(Function instanceof Function);  //true
console.log(Function instanceof Object);    //true

console.log(Array instanceof Function);     //true
console.log(Array instanceof Object);       //true

console.log(Date instanceof Function);      //true
console.log(Date instanceof Object);        //true

console.log(Math instanceof Function);      //false
console.log(Math instanceof Object);        //true

console.log(JSON instanceof Function);      //false
console.log(JSON instanceof Object);        //true


//local-ntp嵌入式面页显示
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        alert("Successfully call the function");
    }

}
checkVarCount(1, 2);
checkVarCount(1);

//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));


console.log(a);    //undefined
var a = 2;  
console.log(a);    //2


//从解析器角度看到的代码
var a;
console.log(a);    //2
a = 2;
console.log(a);    //2

console.log(a,b);//输出什么  undefined   undefined
var b = 23;
console.log(a,b);//输出什么  undefined   23
var a = b;
console.log(a,b);//输出什么  23          23

var name = "Jack";
function echo(){
    console.log(name);
}
function foo(){
    var name = "Bill";
    echo();
}
foo();          // Jack


console.log(foo);
var foo = function(){
    console.log("foo");
};
foo();  //不会报错且输出undefined  foo
 
if(true){                   var i;
    var i = 0 ;    等价于    if(true){
}                               i = 0;
                            }


//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出

if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错


function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错