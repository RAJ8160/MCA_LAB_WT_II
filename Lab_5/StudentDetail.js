const fs = require('fs');

// Student details
const student = {
    name: "Raj",
    roll: 101,
    age: 20,
    class: "MCA"
};

const data = `Name: ${student.name}, Roll No: ${student.roll}, Age: ${student.age}, Class: ${student.class}\n`;


fs.appendFileSync('students.txt', data, 'utf8');

console.log("Student details saved successfully!");
