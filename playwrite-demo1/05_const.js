//1. Redeclaration(Not allow)
const c = 10;
//const c = 20;  //Redeclaring the same variable   //SyntaxError: Identifier 'c' has already been declared
console.log(c);
//2. Reassginment(Not Allow)
const v = 30;
//v = 40;   //reassginment the value   //TypeError: Assignment to constant variable.
console.log(v);
//3. Hoisting(Allow)
//a. Initial Value(Uninitialized) //Temporal Dead Zone
//console.log(value);   //output:- ReferenceError: Cannot access 'value' before initialization
const value = 25;
console.log(value);

//4. Block scope

const a = 100; //Global scope
console.log(a);
function name() {
    const a = 200;
    console.log(a);  //Local scope
    if (true) {
        const a = 300;
        console.log("Local:-", a);
    }
    console.log(a);  //output:- 200
}
console.log("Global:-", a);
name(a);