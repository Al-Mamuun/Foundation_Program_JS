//mini project
let students = [
  { id: 101, name: "Rahim", age: 20, department: "CSE" },
  { id: 102, name: "Karim", age: 22, department: "EEE" },
];

function addStudent (name,age,dept){
    let newID = students.length > 0 
    ? students[students.length - 1] . id + 1 
    : 101 ;

    let newStudent = {
        id : newID,
        name : name,
        age : age,
        department : dept 
    };

    students.push(newStudent);
    console.log("Student Added Succesfully");
};

addStudent("Mamun",22,"IT");
console.log(students);

console.log();
console.log("All Students: ");
function getAll(){
    for(let student of students){
        console.log(student);
    }
}
getAll();

console.log();
console.log("Find Student: ");

function findStudent(ids){
    let foundStudent = null;

    for ( let student of students){
        if(student.id == ids){
            foundStudent = student;
            break;
        }
    }

    if(foundStudent){
        console.log("Student Found: ", foundStudent);
    }else{
        console.log("404 Page Not Found");
    }
};

findStudent(101);
