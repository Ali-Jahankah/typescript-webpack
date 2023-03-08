"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const student_model_1 = require("./student.model");
const _ = require("lodash");
const x = _.shuffle([1, 2, 3]);
console.log(x);
const data = [
    { name: "name1", age: 10 },
    { name: "name2", age: 22 },
];
const newStudents = (0, class_transformer_1.plainToClass)(student_model_1.Student, data);
console.log(newStudents);
//# sourceMappingURL=app.js.map