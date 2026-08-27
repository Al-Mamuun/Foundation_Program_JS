// ============================================================
// 📦 JAVASCRIPT VARIABLES
// ============================================================

/*
  A variable is a container used to store data.

  Example:
  let name = "Rahim";

  Here:
  name  → Variable
  "Rahim" → Value
*/


// ============================================================
// 🧩 VARIABLE DECLARATION
// ============================================================

/*
  JavaScript has 3 keywords for declaring variables:

  1. var
  2. let
  3. const

  Modern JavaScript:
  ✅ Prefer `const`
  ✅ Use `let` when the value needs to change
  ⚠️ Avoid `var` in modern code
*/


// ============================================================
// 1️⃣ let
// ============================================================

/*
  `let` is used when the value of a variable
  may change later.

  Reassignment → ✅ Allowed
*/

let name = "Rahim";

console.log(name);
// Output: Rahim

name = "Karim";

console.log(name);
// Output: Karim


// ============================================================
// 2️⃣ const
// ============================================================

/*
  `const` is used when we don't want to
  reassign the variable.

  Reassignment → ❌ Not Allowed
*/

const age = 21;

console.log(age);
// Output: 21

// age = 20;
// ❌ TypeError: Assignment to constant variable.


// ============================================================
// 3️⃣ var
// ============================================================

/*
  `var` is the old/legacy way of declaring variables.

  It can be reassigned and redeclared.

  In modern JavaScript, prefer `let` and `const`.
*/

var city = "Dhaka";

console.log(city);
// Output: Dhaka

city = "Chittagong";

console.log(city);
// Output: Chittagong


// ============================================================
// 🔄 REASSIGNMENT
// ============================================================

/*
  Reassignment means changing the value
  of an already declared variable.
*/

let country = "Bangladesh";

country = "India";

console.log(country);
// Output: India

/*
  let   → Reassignment ✅
  const → Reassignment ❌
  var   → Reassignment ✅
*/


// ============================================================
// 🔁 REDECLARATION
// ============================================================

/*
  Redeclaration means declaring the same variable
  again in the same scope.
*/

// var → Redeclaration ✅

var username = "Mamun";
var username = "Abdullah";

console.log(username);
// Output: Abdullah


// let → Redeclaration ❌

// let username = "Mamun";
// let username = "Abdullah";
// ❌ SyntaxError


// const → Redeclaration ❌

// const userAge = 21;
// const userAge = 22;
// ❌ SyntaxError


// ============================================================
// 🔍 typeof OPERATOR
// ============================================================

/*
  `typeof` is used to check the data type
  of a value.
*/

let userName = "Abdullah";
const userAge = 21;
const isAdult = true;

console.log(typeof userName);
// Output: string

console.log(typeof userAge);
// Output: number

console.log(typeof isAdult);
// Output: boolean

console.log(typeof userName, typeof userAge, typeof isAdult);
// Output: string number boolean


// ============================================================
// 🧠 JAVASCRIPT DATA TYPES
// ============================================================

/*
  JavaScript has 8 main data types.

  Primitive Data Types:
  ---------------------
  1. String
  2. Number
  3. BigInt
  4. Boolean
  5. Undefined
  6. Null
  7. Symbol

  Non-Primitive:
  -------------
  8. Object
*/


// ============================================================
// 🧠 MEMORY TRICK — SSBBNO
// ============================================================

/*
  SSBBNO

  S → String
  S → Symbol
  B → Boolean
  B → BigInt
  N → Number
  O → Object

  Don't forget:
  → Undefined
  → Null
*/


// ============================================================
// 📌 VARIABLE NAMING RULES
// ============================================================

/*
  ✅ Valid:

  let name = "Mamun";
  let age2 = 21;
  let firstName = "Abdullah";
  let _value = 100;
  let $price = 500;


  ❌ Invalid:

  let 2age = 21;        // Cannot start with number
  let user-name = "";   // Hyphen is not allowed
  let let = 10;        // Reserved keyword
*/


// ============================================================
// ✨ NAMING CONVENTION
// ============================================================

/*
  JavaScript commonly uses camelCase.

  ✅ Good:

  firstName
  lastName
  phoneNumber
  isStudent
  totalPrice


  ❌ Avoid:

  first_name
  FirstName
  firstname
*/


// ============================================================
// 🎯 DECLARATION vs INITIALIZATION
// ============================================================

/*
  Declaration:
  Creating a variable without assigning a value.
*/

let myName;

console.log(myName);
// Output: undefined


/*
  Initialization:
  Giving a value to a variable for the first time.
*/

myName = "Abdullah";

console.log(myName);
// Output: Abdullah


// ============================================================
// ⚡ QUICK COMPARISON
// ============================================================

/*
  ┌─────────┬────────────┬──────────────┬───────────────┐
  │ Keyword │ Reassign   │ Redeclare    │ Scope         │
  ├─────────┼────────────┼──────────────┼───────────────┤
  │ var     │ ✅ Yes     │ ✅ Yes       │ Function      │
  │ let     │ ✅ Yes     │ ❌ No        │ Block         │
  │ const   │ ❌ No      │ ❌ No        │ Block         │
  └─────────┴────────────┴──────────────┴───────────────┘
*/


// ============================================================
// 🏆 BEST PRACTICE
// ============================================================

/*
  Use `const` by default.

  If the value needs to change → use `let`.

  Avoid `var` in modern JavaScript.

  Example:
*/

const university = "UAP";
let semester = 8;

semester = 9;


// ============================================================
// 🚀 FINAL REVISION
// ============================================================

/*
  VARIABLE
  ↓
  Stores data
  ↓
  var / let / const


  let   → Can Reassign ✅
  const → Cannot Reassign ❌
  var   → Old / Legacy ⚠️


  typeof value
  ↓
  Checks the data type


  Data Types:
  String
  Number
  BigInt
  Boolean
  Undefined
  Null
  Symbol
  Object
*/


// ============================================================
// 💡 KEY TAKEAWAY
// ============================================================

/*
  const → Default choice
  let   → When value changes
  var   → Generally avoid

  Learn → Understand → Practice → Build 🚀
*/