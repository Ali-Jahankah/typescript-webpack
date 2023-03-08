import { plainToClass } from "class-transformer";
import { Student } from "./student.model";
import { validate } from "class-validator";
const _ = require("lodash");

const x = _.shuffle([1, 2, 3]);
console.log(x);

const data = [
  { name: "name1", age: 10 },
  { name: "name2", age: 22 },
];

const newStudents = plainToClass(Student, data);
const one = new Student("Ali", 8.2);
// const two = new Student("Ali", 8.2);
console.log(newStudents);
validate(one).then((err) => {
  if (err.length > 0) {
    console.log("Validate error", err);
  } else {
    console.log("User created");
  }
});
console.log(new Student("", 1));
