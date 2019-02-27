/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding narrows down the context of what 'this' can refer to.
* 2. Implicit Binding automatically gives method binding of 'this'
* 3. New Binding is meant to construct a new object and set that new object as the 'this' 
* 4. Explicit Binding is to explicitly say to a function what object it should use for 'this'
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function window(param) {
  "use strict";
  console.log(this);
  return `This is an example of: ${param}`;
}
console.log(window("Window Binding!"));

// Principle 2

// code example for Implicit Binding
const wizard = {
    name: "Gandalf",
    color: "grey",
    title: function() {
      return `${this.name} the ${this.color}`;
    }
  }
console.log(wizard.title());
  

// Principle 3

// code example for New Binding
function students(feeling) {
    this.feeling = feeling;
    this.js = function() {
      console.log(`I think JavaScript is ${this.feeling}`);
    }
  }
  const Tim = new students('fun');
  const Jim = new students('confusing');
  
  Tim.js();
  Jim.js();

// Principle 4

// code example for Explicit Binding
const person = {
  name: "Joshua"
}

const skills = ["HTML","CSS","JS"];

function introduce(skills1, skills2, skills3) {
  debugger;
  return `Hello! My name is ${this.name} and I understand ${skills1}, and ${skills2}, but I'm kinda iffy on ${skills3}`;
}

console.log(introduce.call(person, ...skills));
