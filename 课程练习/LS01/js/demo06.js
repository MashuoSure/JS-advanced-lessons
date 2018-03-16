var x = 23;
var foo = function () {
    var x = 34;
    console.log("inside x:",x);
    y = 45;
    console.log("inside y:",y);
};
foo();
console.log("outside x:", x);
console.log("outside y:", y);

console.log(a);
if(true){
    var a = 2;
}
console.log(a);