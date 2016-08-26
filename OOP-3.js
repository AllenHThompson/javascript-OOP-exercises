/* Create a constructor Vehicle that takes 3 parameters:

* make
* model
* year

A new Vehicle is created thus: */
/* SOLVED - created constructor*/
function Vehicle(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year;
}

var car = new Vehicle('Nissan', 'Leaf', 2015);

console.log(car);
