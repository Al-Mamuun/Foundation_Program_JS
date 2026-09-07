let Student = {
    name: "Mamun",
    id : 158,
    marks : {
        bangla : 82,
        english : 90,
        math : 95,
    },
};

let totalMarks = 0;
let totalSubject = 0;

for (const subject in Student.marks){
    totalMarks += Student.marks[subject];
    totalSubject++;
}

console.log(totalMarks, totalSubject);


let avg = ( totalMarks / totalSubject);

if (avg >= 80) {
      console.log("Passed with distinction. got", avg, "%");
} else {
  console.log("Fail koreche porashunai focus dite hobe");
}

