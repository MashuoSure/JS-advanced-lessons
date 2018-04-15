function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
console.log(f3);   //1
console.log(f3);   //1


function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
console.log(f3());   //1
console.log(f3());   //2


function createInc(starValue){
	return function(step){
		starValue+=step;
		return starValue;
	}
}
var inc = createInc(5);
console.log(inc(1));    //6
console.log(inc(2));	//8
var inc2 = createInc(5);
console.log(inc(1));    //9
console.log(inc2(1));	//6


function foo(x){
	var tmo = 3;
	return function(y){
		console.log(x + y + (++tmp));
	}
}
var fee = foo(2);
fee(10);	//113	
fee(10);	//114
fee(10);	//115

function f(){
    var result = [];
    for (var i = 0; i < 3; i++) {
        //(function(){
            var pos = i;
            var func = function(){
                return pos;//若是return i;的话最终输出是几？
            }
            result.push(func);
            //console.log(i,pos);
        //}());
    }
    return result;
}
console.log(f()[1]());

function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count()); //1
console.log(d.count()); //1
console.log(c.reset()); //0
console.log(c.count());	//1
console.log(d.count());	//2


window.onload = function () {
    var btns = document.getElementsByClassName("btn");
    function closureExample(objID) {
        var ol = document.getElementById(objID);
        // var li = document.createElement("li");//闭包，单例模式
        // ol.appendChild(li);//闭包，单例模式
        return function () {
            var li = document.createElement("li");
            ol.appendChild(li);
            li.innerHTML = "列表内容";
        };
    }
    var foo = closureExample("orderList");
    for(var i=0;i<3;i++){
        (function (j) {
            btns[j].onclick = function () {
                //console.log(new Date());
                setTimeout(foo,(3*j+2)*1000);
            };
        }(i));
    }
};

