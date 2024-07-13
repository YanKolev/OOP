'use strict';

/*
OOP is programming paradigm based on the concept of objects, 
we use objects to model(describe) real-world abstract features
objecst may contain data(properties) and code(methods). By using objects, we pack
data and the corresponding behaviour into one block;

in OOP objects are self-contained pieces/blocks of code
objects are bulding blocks of applications, and interact with one another, 
Interactions happen through a public interface(API): methods that the code outside of the object
can access and use to communicate with the object

OOP was developed with the goal of organizing code, to make it more flexible and easier 
to maintain( Avoid spaghetti code)

Class is like a blueprint from which we can create new objects, JS does not support real classes!

4 Fundamental OOP principles: 

Abstaction 

Encapsulation

Inheritance

Polymorphism

--Abstaction: Ignoring of hiding details that dont matter. Allowing us to get an overview
  perspective of the thing we're implementing, instea of messing with details that dont really matter to our implementation.

--Encapsulation: Keeping properties and methods private inside the class, so they are NOT
  accessible from outside of the class. Some methods can be exposed as public interface (API).

  Why? Prevents external code from accidentally manipulating internap properties/state.

--Inheritance: Making all properties and methods of a certain class available to a child class, forming a hierarchical 
  relationship between classes. This allow us to reuse common logic and to model real-world relationships.

--Polymorphism: A hild class can overwrite a method it inherited from a parent class.

*/

/*


OOP in Javascript

Clasical OOP -> clases and instances created from those clases.A class is like bluepient, which is theoretical
plan that we use to build many objects(instances) are instantiated fom a class, which functions like a blueprint. 

In JS things work a little bit differently. 

in JS we have a prototype and all objects in JS are linked to a certain prototype object, 

The prototype object contains methods and propeties that all objects that are linked to that prototype can access and use.

It is called prototypal inheritance. The prototype contains methods that are accessible to all objects linked to that 
prototype. This inheritance is different that the original pillar of OOP inheritance. 

Behaviou is deledate to the linked prototype object. (its called delegation)
Objects ---->(delegate)to the prototype.

Example: Array

const num = [1, 2, 3]
num.map(v => v + 2);

Array.prototype is the prototype of all array objects we create in JS.
Therefore all arrays have access to the map method.

3 ways of implementing prototypal inheritance in Javascript

1) constructor functions: 
  -technique to create objects from a function
  -this is how built-in objects like Arrays, Maps or Sets are actually implemented.
2) ES6 Classes
  -Modern alternative to constructor functions syntax
  -Syntatitc sugar, behind the scenes. ES6 classes work exactly like constructor funtions
  -ES6 classes DO NOT behave like classes in Classical OOP
3) Object.create()
  -Easises most straightforward way of linkng an object to a prototype object.

*/

//Constructor functions-> to build an object using a funtion, its completely normal function
//the only differene between regular function and constructor function is that we use the new operator

// in OOP constructor functions always start with capital letter (Array and Map follow that convention as well)
// Arrow function will not work as a function constructor (because it doesnt have its own THIS keyword and we need that)

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;


  //Never create a method inside a constructor function!!!! 
  //this.calcAge = function(){
  //  console.log(2037- this.birthYear)
  //}
}

const jonas = new Person('Jonas', 1991)
console.log(jonas);

//When using new operator, 4 steps happen
// 1. New empty object {} is created 
// 2. function is called, and in this function call this keyword will be set to the newly created object
// this = {}
// 3.Newly created object is linked to a prototype 
// 4. Function automatically returns the empty object {} from the begining, but at this point the project no longer needs to be empty

const matilda = new Person ('Matilda', 2017);
const jack = new Person ('Jack', 1975);
console.log(matilda, jack);


//constructor functions have been used in JS to simulate classes, so we can say that jonas is instance of Person and check it outerHeight

console.log(jonas instanceof Person);

//constructor function is not a JS feature but simply a patter widely used in the industry




//              === PROTOTYPES ===


/* first each and every function in JS automatically has a property called prototype, 
that includes the construction functions. Every object that is created by a certain constructor function
will have access to all methods and properties we define on the constructors's prototype property
*/

console.log(Person.prototype);

// we can use this method on the jonas object, even though it is not really on the object itself
// we have access to it beause of prototypal inheritance

Person.prototype.calcAge = function(){
    console.log(2037- this.birthYear);
  };

jonas.calcAge();
matilda.calcAge();

//we can re-use this function, instead of putting in the constructor function
//creating unnecessary copies for every time that we call it.
// this keyword in each of them is set to the object that is calling the method.(either- jonas or matilda)

/* this is basic prototypal inheritance, since they are connected to Person, they have access to the methods above
inside the prototype property.
Any object has always access to the methods and properties from its prototype.
*/

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

/* Person.prototype is NOT THE PROTOTYPE OF PERSON. INSTEAD IS WHAT IS GONNA BE USED AS THE PROTYPE OF ALL THE OBJECTS 
THAT ARE CREATED WITH THE PERSON CONSTRUCTOR FUNCTION */

console.log(Person.prototype.isPrototypeOf(jonas)); // TRUE
// this proves that Person.prototype is the prototype of jonas 

console.log(Person.prototype.isPrototypeOf(Person)); // FALSE

//we can set properties on the prototype
Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')) // true
console.log(jonas.hasOwnProperty('species')) // false 





/// Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
//object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__); // up the prototype chain- prototype property of object

console.log(jonas.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor);

const arr = [ 3, 6, 4, 6, 3, 4, 5, 6, 9, 3]; //new Array === []
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
   return [...new Set(this)]
}

console.log(arr.unique());

const h1 = document.querySelector ('h1');
console.dir(x=> x + 1);



// ES6 CKASSES 


//class expression 
//const PersonCL = class {

//}

//class declaration


//Here you can wrie the methods inside the class but OUTSIDE OF THE CONSTRUCTOR
class PersonCl {
  constructor(fullName, birthYear){
    this.fullNameName = fullName;
    this.birthYear = birthYear;
  }

  //Methods ill be added to .prototype property
  calcAge(){
    console.log(2037-this.birthYear);
  }

  get age(){
    return 2037- this.birthYear;
  }
    // setting a name property that already exist
  set fullName(name){
    if (name.includes(' ')) this._fullName = name;
    else alert (`${name} is not full name!`)
  }

  get fullName(){
    return this._fullName;
  }

  //Static Method
  static hey(){
    console.log('Hey there!');
    console.log(this);
  }

}


const jessica = new PersonCL('Jessica Davis', 1996)
console.log(jessica);
jessica.calcAge();




console.log(jessica.__proto__ === PersonCL.prototype);

PersonCL.prototype.greet = function(){
  console.log(`Hey ${this.firstName}`);

}
jessica.greet();
// The class hides the prototypal inheritance in JS 

//1. Classes are NOT hoisted (function declarations are hoisted)
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

PersonCL.hey(); // NOT AVAILABLE ON INSTANCES, CAN BE USED AS HELPERS. 

// SETTERS AND GETTERS

// every object in JS can have setter and getter properties-> called assecors properties

const walter = new PersonCL('Walter White', 1965)

const accont = {
  owner: 'jonas',
  movements : [200, 530, 120, 300],


  // to make it getter u need keyword- get / set

   get latest(){
    return this.movements.slice(-1).pop();
   },

   set latest(mov){
    this.movements.push(mov);
   },
}

console.log(account.latest);// when we want to read somethng as a property but we need to do some calculations

account.latest = 50;
console.log(acccount.movements);


//Static Methods

// Good understanding of Static methods are the build in methods- like Array.from 
// WHICH converts any array-like structure like real array. 
// you need something that returns a node list. From is NOT A FUNCTION, ITS ATTACHED TO THE ENTIRE CONSTRUCTOR, SO THE ARRAY CONSTRUCTOR AND NOT TO THE ARRAY PROPERTY OF THE CONSTRUCTOR. 
// ITS ATTACHED TO THE CONSTRUCTOR ITSELF.

//to add a static method 
Person.hey = function(){
  console.log('Hey there!')
  console.log(this);
}

Person.hey(); //this is not inherited, its not in the protory, so the OBJECT CAN NOT INHERIT IT


// Object. Create

// works differently than classes or constructors, there is still the idea of prototypal inheritance, 
// there are no prototype properties, no constructors functions and no new operator
//manually set the prototype of an object to any other object that we want


//prototype of all the person objects 

const PersonProto = {
  calcAge(){
    console.log(2037-this.birthYear)
  },

  //looks like a constructor function but its not
  init(firstName, birthYear){
    this.firstName = firstName; // this will point to sarah, but it does so as we esplicitly called it to do so
    this.birthYear = birthYear;
  }

}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

/*
setting the prototype to any object that we want.
both objects are linked to the proto property, 
then in works like a function constructors/ classes 
BIG DIFFERENCE IS- > NO CONSTRUCTOR FUNCTION OR PROTOTYPE PROPERTY TO ACHIEVE exact same this as constructor functins
Least used way in real world to have prototypal inheritance. 

*/

console.log(steven.__proto__=== PersonProto);


const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();
// Object.create= creates a new object and the prototype of that object will be the object taht we passed in.!!!

