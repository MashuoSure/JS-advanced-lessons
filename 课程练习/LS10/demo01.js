var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);  //此时d为局部变量，当a = 500 后的逗号变为分号时，d为全局变量
    }
    bar();
}
fn();


var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();
//Jack   与echo距离最近的name为Jack


var scope = "global";
function checkScope(){
    var scope = "local";
    return function(){
        return scope;
    }
}
console.log(checkScope()());

//local

var scope = "global";
function checkScope(){
    var scope = "local";
    return new function("return scope;");
}
console.log(checkScope()());

//global 

