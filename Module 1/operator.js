// ============================================================
// ⚙️ JAVASCRIPT OPERATORS
// ============================================================

/*
  Operators are symbols used to perform operations
  on values and variables.

  Main types of operators:

  1. Arithmetic Operators
  2. Assignment Operators
  3. Comparison Operators
  4. Logical Operators
*/


// ============================================================
// 1️⃣ ARITHMETIC OPERATORS
// ============================================================

/*
  Arithmetic operators are used for mathematical calculations.

  +   → Addition
  -   → Subtraction
  *   → Multiplication
  /   → Division
  %   → Remainder / Modulus
  **  → Exponentiation
  ()  → Parentheses / Grouping
*/

const a = 10;
const b = 3;


// ➕ Addition

const sum = a + b;

console.log(sum);
// Output: 13


// ➖ Subtraction

const subtraction = a - b;

console.log(subtraction);
// Output: 7


// ✖️ Multiplication

const multiplication = a * b;

console.log(multiplication);
// Output: 30


// ➗ Division

const division = a / b;

console.log(division);
// Output: 3.3333333333333335


// % Remainder / Modulus

const remainder = a % b;

console.log(remainder);
// Output: 1

/*
  10 ÷ 3 = 3 remainder 1

  So:
  10 % 3 → 1
*/


// ============================================================
// ⚡ EXPONENTIATION
// ============================================================

/*
  ** means power.

  2 ** 3
  means:
  2 × 2 × 2 = 8
*/

const power = 2 ** 3;

console.log(power);
// Output: 8


// ============================================================
// 🧮 PARENTHESES ()
// ============================================================

/*
  Parentheses are used to control the order
  of calculation.

  Example:
*/

const result = (10 + 5) * 2;

console.log(result);
// Output: 30

/*
  First:
  (10 + 5) = 15

  Then:
  15 × 2 = 30
*/


// Example of a complex expression:

// a + b - (c + f) * d / e


// ============================================================
// 📌 OPERATOR PRECEDENCE
// ============================================================

/*
  JavaScript follows an order when multiple
  operators are used together.

  Common order:

  1. ()
  2. **
  3. *, /, %
  4. +, -
  5. Comparison
  6. Logical

  Example:
*/

const calculation = 10 + 5 * 2;

console.log(calculation);
// Output: 20

/*
  Multiplication happens first:

  5 × 2 = 10
  10 + 10 = 20
*/


// ============================================================
// 2️⃣ ASSIGNMENT OPERATORS
// ============================================================

/*
  Assignment operators are used to assign
  or update values in variables.

  =    → Assignment
  +=   → Add and assign
  -=   → Subtract and assign
  *=   → Multiply and assign
  /=   → Divide and assign
  %=   → Remainder and assign
*/


// = Assignment

let x = 10;

console.log(x);
// Output: 10


// += Add and Assign

x += 5;

// Same as:
// x = x + 5

console.log(x);
// Output: 15


// -= Subtract and Assign

x -= 3;

// Same as:
// x = x - 3

console.log(x);
// Output: 12


// *= Multiply and Assign

x *= 2;

// Same as:
// x = x * 2

console.log(x);
// Output: 24


// /= Divide and Assign

x /= 4;

// Same as:
// x = x / 4

console.log(x);
// Output: 6


// %= Remainder and Assign

x %= 4;

// Same as:
// x = x % 4

console.log(x);
// Output: 2


// ============================================================
// 🧠 EASY WAY TO REMEMBER
// ============================================================

/*
  x += 10
  means:
  x = x + 10


  x -= 10
  means:
  x = x - 10


  x *= 10
  means:
  x = x * 10


  x /= 10
  means:
  x = x / 10
*/


// ============================================================
// 3️⃣ COMPARISON OPERATORS
// ============================================================

/*
  Comparison operators compare two values.

  The result is always:

  true  → Condition is correct
  false → Condition is incorrect

  Operators:

  ===  → Strictly equal
  ==   → Loose equal
  !==  → Strictly not equal
  !=   → Loose not equal
  >    → Greater than
  <    → Less than
  >=   → Greater than or equal
  <=   → Less than or equal
*/


// === Strict Equality

console.log(10 === 10);
// true

console.log(10 === "10");
// false

/*
  === checks:

  Value + Data Type

  10       → number
  "10"     → string

  So they are NOT strictly equal.
*/


// == Loose Equality

console.log(10 == "10");
// true

/*
  == checks mainly the value
  and may perform type conversion.
*/


// > Greater Than

console.log(10 > 3);
// true


// < Less Than

console.log(10 < 3);
// false


// >= Greater Than or Equal

console.log(10 >= 10);
// true

console.log(10 >= 5);
// true


// <= Less Than or Equal

console.log(10 <= 10);
// true

console.log(10 <= 5);
// false


// !== Strictly Not Equal

console.log(10 !== "10");
// true


// ============================================================
// 🏆 IMPORTANT: === vs ==
// ============================================================

/*
  Prefer `===` in modern JavaScript.

  ===
  → Checks value AND type
  → More predictable
  → Recommended ✅


  ==
  → Allows type conversion
  → Can produce unexpected results
  → Generally avoid when possible ⚠️
*/

console.log(10 === "10");
// false

console.log(10 == "10");
// true


// ============================================================
// 4️⃣ LOGICAL OPERATORS
// ============================================================

/*
  Logical operators are used to combine
  or modify conditions.

  &&  → AND
  ||  → OR
  !   → NOT
*/


// ============================================================
// && AND
// ============================================================

/*
  AND returns true only when BOTH conditions
  are true.
*/

console.log(true && true);
// true

console.log(true && false);
// false

console.log(false && true);
// false

console.log(false && false);
// false


// Example:

const studentAge = 21;
const hasID = true;

console.log(studentAge >= 18 && hasID);
// true

/*
  Condition 1:
  studentAge >= 18 → true

  Condition 2:
  hasID → true

  true && true → true
*/


// ============================================================
// || OR
// ============================================================

/*
  OR returns true if AT LEAST ONE condition
  is true.
*/

console.log(true || false);
// true

console.log(false || true);
// true

console.log(false || false);
// false


// Example:

const hasEmail = true;
const hasPhone = false;

console.log(hasEmail || hasPhone);
// true

/*
  true || false → true

  Because at least one condition is true.
*/


// ============================================================
// ! NOT
// ============================================================

/*
  ! reverses a boolean value.

  true  → false
  false → true
*/

console.log(!true);
// false

console.log(!false);
// true


// Example:

const isLoggedIn = false;

console.log(!isLoggedIn);
// true


// ============================================================
// 🔥 COMBINING LOGICAL OPERATORS
// ============================================================

/*
  We can combine comparison and logical operators.
*/

const age = 21;
const hasTicket = true;

const canEnter = age >= 18 && hasTicket;

console.log(canEnter);
// true


// ============================================================
// 🧠 YOUR EXAMPLE
// ============================================================

const c = !(a < b) && 10;

console.log(c);


/*
  Let's break it down:

  a = 10
  b = 3


  Step 1:
  a < b

  10 < 3
  → false


  Step 2:
  !(a < b)

  !false
  → true


  Step 3:
  true && 10

  Here is something important:

  In JavaScript, `&&` does not always return
  true or false.

  It returns one of its operands.

  true && 10
  → 10


  Therefore:

  c = 10
*/


// ============================================================
// ⚠️ IMPORTANT: && AND || RETURN VALUES
// ============================================================

/*
  In JavaScript:

  && returns the first falsy value,
  otherwise the last value.


  Example:
*/

console.log(true && 10);
// 10

console.log(false && 10);
// false


/*
  || returns the first truthy value,
  otherwise the last value.
*/

console.log(true || 10);
// true

console.log(false || 10);
// 10


// ============================================================
// 🧠 TRUTHY & FALSY
// ============================================================

/*
  Falsy values in JavaScript:

  false
  0
  ""
  null
  undefined
  NaN


  Almost everything else is Truthy.

  Examples:

  "Hello" → truthy
  10      → truthy
  []      → truthy
  {}      → truthy
*/


// ============================================================
// 📊 QUICK REVISION
// ============================================================

/*
  ARITHMETIC
  -------------------------
  +   Addition
  -   Subtraction
  *   Multiplication
  /   Division
  %   Remainder
  **  Power
  ()  Grouping


  ASSIGNMENT
  -------------------------
  =    Assign
  +=   Add & Assign
  -=   Subtract & Assign
  *=   Multiply & Assign
  /=   Divide & Assign
  %=   Remainder & Assign


  COMPARISON
  -------------------------
  ===  Strict Equal
  ==   Loose Equal
  !==  Strict Not Equal
  !=   Loose Not Equal
  >    Greater Than
  <    Less Than
  >=   Greater / Equal
  <=   Less / Equal


  LOGICAL
  -------------------------
  &&   AND
  ||   OR
  !    NOT
*/


// ============================================================
// 🏆 MOST IMPORTANT
// ============================================================

/*
  1. Use === instead of == in most cases.

  2. Use && when ALL conditions must be true.

  3. Use || when ANY condition can be true.

  4. Use ! to reverse a boolean.

  5. Remember:
     && and || can return actual values,
     not just true/false.

  6. Use parentheses () when you want to
     clearly control the order of operations.
*/


// ============================================================
// 🚀 KEY TAKEAWAY
// ============================================================

/*
  Operators are the building blocks of
  JavaScript expressions.

  Arithmetic
      ↓
  Assignment
      ↓
  Comparison
      ↓
  Logical
      ↓
  Conditions & Real-World Logic

  Learn → Understand → Practice → Build 🚀
*/