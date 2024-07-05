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
