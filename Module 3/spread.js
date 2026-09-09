const arr1 = ["Mamun","Sathi"];

const arr2 = ["Jhuna","Setu"];

const arr = [...arr1,...arr1];
const arrr = [...arr1,...arr1,"EX"];
console.log(arr,"\n",arrr);


const personalInfo = {
    name: "Mamun",
    age: 24
};

const contactInfo = {
    email: "almamun@gmail.com",
    contact: "01845196403"
}

const fullProfile = {
    ...personalInfo,
    ...contactInfo
};

console.log(fullProfile);

