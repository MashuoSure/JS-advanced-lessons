var obj1 = {
	x:12,
	foo:function(y){
		console.log(this.x,y);
	}
}
var obj2 = {
	x:34
}
var fee = obj1.foobind(obj2);
fee("yy");   //34"yy"

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//输出什么	   
// ƒ fun2() {
//         return this.x;//若改为 return this;
//     }
console.log("输出：",obj.fun3()());//输出什么   
// 12
console.log("输出：",obj.fun4());//输出什么     
// 34
