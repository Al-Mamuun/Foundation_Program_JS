// ============================================================
// 📦 JAVASCRIPT VARIABLES
// ============================================================

/*
  A variable is a container used to store data.

  Example:
*/

let name = "Rahim";

console.log(name);
// Output: Rahim


// ============================================================
// 1️⃣ let
// ============================================================

/*
  `let` is used when the value may change later.

  Reassignment → ✅ Allowed
*/

let userName = "Rahim";

console.log(userName);
// Output: Rahim

userName = "Karim";

console.log(userName);
// Output: Karim


// ============================================================
// 2️⃣ const
// ============================================================

/*
  `const` is used when the value should not be reassigned.

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
  `var` is the older way of declaring variables.

  Reassignment → ✅ Allowed
  Redeclaration → ✅ Allowed

  Modern JavaScript → Prefer `let` and `const`.
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
  Reassignment means changing the value of
  an already declared variable.
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

var student = "Rahim";

var student = "Karim";

console.log(student);
// Output: Karim


// let → Redeclaration ❌

// let student = "Rahim";
// let student = "Karim";

// ❌ SyntaxError


// const → Redeclaration ❌

// const studentAge = 21;
// const studentAge = 22;

// ❌ SyntaxError


// ============================================================
// 📝 DECLARATION
// ============================================================

/*
  Declaration means creating a variable
  without assigning a value.
*/

let myName;

console.log(myName);

// Output:
// undefined


// ============================================================
// 🎬 INITIALIZATION
// ============================================================

/*
  Initialization means assigning a value
  to a variable for the first time.
*/

// let firstName = "Abdullah";

console.log(firstName);

// Output:
// Abdullah


// ============================================================
// 🔍 typeof OPERATOR
// ============================================================

/*
  `typeof` is used to check the data type
  of a value.
*/

const personName = "Abdullah";
const personAge = 21;
const isAdult = true;

console.log(typeof personName);
// string

console.log(typeof personAge);
// number

console.log(typeof isAdult);
// boolean

console.log(typeof personName, typeof personAge, typeof isAdult);

// Output:
// string number boolean


// ============================================================
// 🧠 JAVASCRIPT DATA TYPES
// ============================================================

/*
  JavaScript has 8 main data types.

  Primitive:
  -----------
  1. String
  2. Number
  3. BigInt
  4. Boolean
  5. Undefined
  6. Null
  7. Symbol

  Non-Primitive:
  --------------
  8. Object
*/


// ============================================================
// 🧪 DATA TYPE EXAMPLES
// ============================================================

const text = "Hello";                    // String
const number = 100;                     // Number
const bigNumber = 123456789012345n;     // BigInt
const status = true;                    // Boolean

let nothing;                            // Undefined

const emptyValue = null;                // Null

const uniqueId = Symbol("id");          // Symbol

const person = {                         // Object
    name: "Abdullah",
    age: 21
};

console.log(typeof text);
// string

console.log(typeof number);
// number

console.log(typeof bigNumber);
// bigint

console.log(typeof status);
// boolean

console.log(typeof nothing);
// undefined

console.log(typeof emptyValue);
// object ⚠️

// `typeof null` returns "object" because of
// a historical behavior in JavaScript.

console.log(typeof uniqueId);
// symbol

console.log(typeof person);
// object


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

  Also remember:

  U → Undefined
  N → Null
*/


// ============================================================
// 📌 VARIABLE NAMING RULES
// ============================================================

/*
  Variable names:

  ✅ Can contain:
     letters
     numbers
     _
     $

  ❌ Cannot:
     start with a number
     contain spaces
     use reserved keywords
*/


// ✅ Valid

let firstName = "Abdullah";
let age2 = 21;
let _value = 100;
let $price = 500;


// ❌ Invalid

// let 2age = 21;
// let first-name = "Abdullah";
// let first name = "Abdullah";
// let let = 10;


// ============================================================
// ✨ NAMING CONVENTION
// ============================================================

/*
  JavaScript commonly uses camelCase.

  Examples:

  firstName
  lastName
  phoneNumber
  totalPrice
  isStudent
*/

const fullName = "Abdullah Al Mamun";
const phoneNumber = "017XXXXXXXX";
const isStudent = true;


// ============================================================
// ⚡ let vs const vs var
// ============================================================

/*
  ┌─────────┬────────────┬──────────────┬────────────┐
  │         │ Reassign   │ Redeclare    │ Scope      │
  ├─────────┼────────────┼──────────────┼────────────┤
  │ var     │ ✅ Yes     │ ✅ Yes       │ Function   │
  │ let     │ ✅ Yes     │ ❌ No        │ Block      │
  │ const   │ ❌ No      │ ❌ No        │ Block      │
  └─────────┴────────────┴──────────────┴────────────┘
*/


// ============================================================
// 🏆 BEST PRACTICE
// ============================================================

/*
  Modern JavaScript:

  const → Default choice
  let   → Use when value needs to change
  var   → Generally avoid


  Example:
*/

const university = "UAP";

let semester = 8;

semester = 9;


// ============================================================
// 🎯 QUICK REVISION
// ============================================================

/*
  VARIABLE
      ↓
  Stores data
      ↓
  var / let / const


  let
  → Can Reassign ✅
  → Cannot Redeclare ❌


  const
  → Cannot Reassign ❌
  → Cannot Redeclare ❌


  var
  → Can Reassign ✅
  → Can Redeclare ✅
  → Old / Legacy


  typeof value
  → Checks data type


  Data Types:
  → String
  → Number
  → BigInt
  → Boolean
  → Undefined
  → Null
  → Symbol
  → Object
*/


// ============================================================
// 🚀 KEY TAKEAWAY
// ============================================================

/*
  const → Default choice
  let   → When value changes
  var   → Generally avoid

  Learn → Understand → Practice → Build 🚀
*/