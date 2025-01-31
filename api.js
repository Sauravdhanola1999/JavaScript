let students = [
  { name: "piyush", rollNumber: 32, marks: 80 },
  { name: "Aaurav", rollNumber: 38, marks: 20 },
  { name: "Shirish", rollNumber: 62, marks: 70 },
  { name: "Anything", rollNumber: 7, marks: 90 },
];

let newStudent = students.map((student)=>{
    return student.name.toUpperCase();
})
// console.log(newStudent);

let newStudent2 = students.filter(student => student.marks > 60 && student.rollNumber >15);
// console.log(newStudent2);

let sumofallmarks = students.reduce((acc, student)=> acc + student.marks, 0);
// console.log(sumofallmarks);

let students2 = students.filter(student => student.marks > 60 ).map(student => student.name);
// console.log(students2);

let totalMarks = students.map(student =>{
  if(student.marks < 60){
    student.marks += 20;
  }
  return student;
}).filter(student => student.marks > 60).reduce((acc, student) => acc + student.marks, 0);

console.log(totalMarks);


