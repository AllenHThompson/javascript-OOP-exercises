/* Given the below code, it is possible (with code) to call greet with its `this` variable bound to `ben`? */

var greet = function() {
     console.log("Hi, my name is " + this.name);
};

var mary = {
     name: 'Mary',
     greet: greet
};

var ben = {
     name: 'Ben'
};

ben.greet = greet; //SOLVED - added 'greet' method to 'ben' object

ben.greet();
