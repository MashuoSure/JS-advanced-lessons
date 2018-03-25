// 自加
var i = 1;
var b = ++i + ++i + ++i;
b;


var x = "1";
x += 1;
console.log(x);


var x = "1";
console.log(++x);


var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x === obj2.x);
console.log(obj1.y === obj2.y);
console.log(obj1.z === obj2.z);
console.log(obj1.x == obj2.x);
console.log(obj1.y == obj2.y);
console.log(obj1.z == obj2.z);


console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2" == 2));
console.log(false&&false);
console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2" == 2));
console.log(false||false);



var score = 76;
if(score>90){
    console.log("优")
}
else if(score>75){
    console.log("良")
}
else if(score>60){
    console.log("及格")
}
else{
console.log("不及格")
}



var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));