//函数定义 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
max(2,3);

// 动态生成函数
var str = "return a<b?a:b";
var min = new Function("a","b",str);
min(2,3)

function foo(){
	console.log("foo");
}
	foo === window.foo;



var x = 45;
var test = function(){
	console.log("输出:",this.x);
}
var obj = {
	x:23
};
obj.test = test;
obj.test();
test();


//间接调用  间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB


//间接调用：移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
	name:"polly",
	fly:function(m,n){
		console.log("i'm:"+this.name+"i can fly___",m,n);
	}
};

var me = {
    name:"abc"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);