//1. Redeclaration(Allow)
var v = 20;
var v = 30;   //Redeclaring the same variable
console.log(v);  //30
//2. Reassginment(Allow)
var v = 40;
v = 50;    //reassginment the value
console.log(v);  //50
//3. Hoisting(Allow)
//a. initial value (undefind)
console.log(value);   //output:- undefined
var value = 25;
console.log(value);

//4. Functional scope

var a = 100; //Global scope
console.log(a);
function name() {
    var a = 200;
    console.log(a);  //Local scope
    if (true) {
        var a = 300;
        console.log("Local:-", a);
    }
    console.log(a);  //output:- 300
}
console.log("Global:-", a);
name(a);
