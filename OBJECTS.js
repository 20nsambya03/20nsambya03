let person = {
    name: "John",
    age: 30,
    occupation: "Developer",
    greet: function() {
      console.log("Hello, I am " + this.name);
    }
  };

console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

let student = {
    name: "Jane",
    marks: {
      math: 95,
      science: 90
    }
  };
  console.log(student.marks.math); // Outputs: 95