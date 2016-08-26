/* Given the below code, call the `greet` function with its `this` variable bound to `mary`? */

//'this' is tied bound to the 'mary' object
function greet() {
     console.log("Hi, my name is " + this.name);
}
//'mary' object has one property, "name", and one method, "greet()".
var mary = {
     name: 'Mary',
     greet: greet
};
//call "greet" method on the 'mary' object
mary.greet(); //SOLVED - call 'greet' method on 'mary' object
