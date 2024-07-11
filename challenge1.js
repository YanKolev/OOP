/*
Coding Challenge #1
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§
§
Data car 1: 'BMW' going at 120 km/h
Data car 2: 'Mercedes' going at 95 km/h
*/
/* MY TRY

const Car = function (carSpeed, carMake) {
    this.carSpeed = carSpeed;
    this.carMake = carMake;

}
const car1 = new Car (120, 'BMW')
const car2 = new Car (95, 'Mercedes')

console.log(car1);
console.log(car2);

//2

Car.prototype.accelerateCar = function(){
    console.log(this.carSpeed + 10)
}

car1.accelerateCar();
car2.accelerateCar();

//3
Car.prototype.breakOn = function(){
    console.log(this.carSpeed - 5) //accelerateCar -5??
}
car1.breakOn();
car1.breakOn();

//4


//Car.prototype.accelerateCar = accelerateCar();
//console.log(car1.accelerateCar);
*/

//Course option 

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.acceerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.break = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const bmw = new Car ('BMW', 120);
const mercedes = new Car ('Mercedes', 95);

bmw.acceerate();
bmw.acceerate();
bmw.break();
bmw.acceerate();

