//1. Redeclaration(Not Allow)
let v = 20;
//  let v = 30;   //Redeclaring the same variable    //SyntaxError
console.log(v); //20
//2. Reassginment(Allow)
let L = 40;
L = 50;    //reassginment the value
console.log(L);  //50
//3. Hoisting(Allow)
//a. Initial Value(Uninitialized) //Temporal Dead Zone
//console.log(value);   //output:- ReferenceError: Cannot access 'value' before initialization
let value = 25;
console.log(value);

//4. Block scope

let a = 100; //Global scope
console.log(a);
function name() {
    let a = 200;
    console.log(a);  //Local scope
    if (true) {
        let a = 300;
        console.log("Local:-", a);
    }
    console.log(a);  //output:- 200
}
console.log("Global:-", a);
name(a);