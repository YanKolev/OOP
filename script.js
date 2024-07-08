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

