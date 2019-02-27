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