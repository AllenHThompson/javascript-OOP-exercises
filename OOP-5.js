//Write a Counter type. You use the type as follows. First create a counter:

function Counter() {
     this.i = 0;
}

Counter.prototype.count = function(){
     this.i++;
     return this.i;
};

var counter = new Counter();

//Then you can call the counter's `count()` method to count and get the next number in the count.

console.log(counter.count()); // prints 1
console.log(counter.count()); // prints 2
console.log(counter.count()); // prints 3
