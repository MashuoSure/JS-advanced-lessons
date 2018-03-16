(function () {
var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);

function fn_b(arg){
    arg={value:2};
};
fn_b(obj_a);
console.log(obj_a);
}());