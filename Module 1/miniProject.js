//mini project
let students = [
    { id: 101, name: "Rahim", age: 20, department: "CSE" },
    { id: 102, name: "Karim", age: 22, department: "EEE" },
];

function addStudent(name, age, dept) {
    let newID = students.length > 0
        ? students[students.length - 1].id + 1
        : 101;

    let newStudent = {
        id: newID,
        name: name,
        age: age,
        department: dept
    };

    students.push(newStudent);
    console.log("Student Added Succesfully");
};

addStudent("Mamun", 22, "IT");
console.log(students);

function getAll() {
    for (let student of students) {
        console.log(student);
    }
}
getAll();


function findStudent(ids) {
    let foundStudent = null;

    for (let student of students) {
        if (student.id == ids) {
            foundStudent = student;
            break;
        }
    }

    if (foundStudent) {
        console.log("Found Student: ", foundStudent);
    } else {
        console.log("404 Page Not Found");
    }
};

findStudent(101);


function deleteStudent(id) {
    let targetStudent = -1;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            targetStudent = i;
            break;
        }
    }

    if (targetStudent != -1) {
            let deletedStd = students.splice(targetStudent, 1);
            console.log(`deleted ${deletedStd[0].name} id: ${targetStudent} deleted`);
        } else {
            console.log("404 not found");
        }   
}

deleteStudent(101);
getAll();
