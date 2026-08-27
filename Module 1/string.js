// ============================================================
// 🔤 JAVASCRIPT STRING
// ============================================================

/*
  A String is a sequence of characters used to represent text.

  Examples:
  "Hello"
  "Abdullah"
  "Bangladesh"

  Strings can be written using:
  1. Double quotes  → "Hello"
  2. Single quotes  → 'Hello'
  3. Backticks      → `Hello`
*/


// ============================================================
// 1️⃣ CREATING STRINGS
// ============================================================

let firstName = "Shafayat";
let lastName = "Islam";

console.log(firstName);
// Output: Shafayat

console.log(lastName);
// Output: Islam


// ============================================================
// 2️⃣ STRING CONCATENATION
// ============================================================

/*
  We can combine two or more strings using `+`.

  Example:

  "Hello" + " " + "World"
*/

let fullName1 = firstName + " " + lastName;

console.log(fullName1);
// Output: Shafayat Islam


/*
  Why " " ?

  " " represents a space.

  Without it:

  firstName + lastName
  → ShafayatIslam
*/

let withoutSpace = firstName + lastName;

console.log(withoutSpace);
// Output: ShafayatIslam


// ============================================================
// 3️⃣ TEMPLATE LITERALS
// ============================================================

/*
  Template literals use backticks (` `).

  They allow us to easily insert variables
  inside a string using:

  ${variable}
*/

let fullName = `${firstName} ${lastName}`;

console.log(fullName);
// Output: Shafayat Islam


// ============================================================
// 🧩 MULTILINE STRING
// ============================================================

/*
  Template literals can also contain
  multiple lines.

  \n → New line
*/

let randomName = `${firstName} ${lastName} \nNaogaon`;

console.log(randomName);

/*
  Output:

  Shafayat Islam
  Naogaon
*/


// We can also create a multiline string
// directly using template literals:

let address = `Rajshahi
Bangladesh`;

console.log(address);

/*
  Output:

  Rajshahi
  Bangladesh
*/


// ============================================================
// 4️⃣ QUOTES INSIDE A STRING
// ============================================================

/*
  A string can contain quotes.

  Example:
*/

let randomStr = 'I am a "student"';

console.log(randomStr);

// Output:
// I am a "student"


/*
  Because the string starts with single quotes,
  we can use double quotes inside it.
*/


// Another example:

let message = "He said 'Hello'";

console.log(message);

// Output:
// He said 'Hello'


// ============================================================
// 5️⃣ ESCAPE CHARACTER
// ============================================================

/*
  The backslash `\` is used as an escape character.

  Common escape sequences:

  \n → New line
  \t → Tab
  \" → Double quote
  \' → Single quote
  \\ → Backslash
*/


// \n → New Line

console.log("Hello\nWorld");

/*
  Output:

  Hello
  World
*/


// \t → Tab

console.log("Hello\tWorld");

// Output:
// Hello    World


// \" → Double Quote

console.log("I am a \"student\"");

// Output:
// I am a "student"


// \' → Single Quote

console.log('I\'m learning JavaScript');

// Output:
// I'm learning JavaScript


// ============================================================
// 6️⃣ STRING LENGTH
// ============================================================

/*
  `.length` returns the number of characters
  in a string.

  Spaces are also counted.
*/

let text = "JavaScript";

console.log(text.length);

// Output:
// 10


/*
  J a v a S c r i p t
  1 2 3 4 5 6 7 8 9 10
*/


// Your example:

console.log(randomStr.length);


/*
  Important:

  `.length` is a property,
  NOT a function.

  Correct:
  string.length

  ❌ Don't write:
  string.length()
*/


// ============================================================
// 7️⃣ STRING INDEX
// ============================================================

/*
  Every character in a string has an index.

  Index starts from 0.

  Example:

  J a v a S c r i p t
  0 1 2 3 4 5 6 7 8 9
*/

let language = "JavaScript";

console.log(language[0]);
// Output: J

console.log(language[4]);
// Output: S

console.log(language[9]);
// Output: t


// ============================================================
// 8️⃣ toUpperCase()
// ============================================================

/*
  `.toUpperCase()` converts all letters
  into uppercase.
*/

let city = "rajshahi";

console.log(city.toUpperCase());

// Output:
// RAJSHAHI


// ============================================================
// 9️⃣ toLowerCase()
// ============================================================

/*
  `.toLowerCase()` converts all letters
  into lowercase.
*/

let capitalCity = "RAJSHAHI";

console.log(capitalCity.toLowerCase());

// Output:
// rajshahi


// ============================================================
// 🔟 includes()
// ============================================================

/*
  `.includes()` checks whether a string
  contains a specific text.

  Returns:
  true  → Found
  false → Not found
*/

let sentence = 'I am a "student"';

console.log(sentence.includes("student"));

// Output:
// true


console.log(sentence.includes("teacher"));

// Output:
// false


/*
  ⚠️ includes() is case-sensitive.
*/

console.log(sentence.includes("Student"));

// Output:
// false


// ============================================================
// 1️⃣1️⃣ trim()
// ============================================================

/*
  `.trim()` removes unnecessary spaces
  from the beginning and end of a string.
*/

let userInput = "   Abdullah   ";

console.log(userInput.trim());

// Output:
// Abdullah


// ============================================================
// 1️⃣2️⃣ slice()
// ============================================================

/*
  `.slice(start, end)` extracts part of a string.

  Start index → included
  End index   → not included
*/

let word = "JavaScript";

console.log(word.slice(0, 4));

// Output:
// Java


console.log(word.slice(4, 10));

// Output:
// Script


// ============================================================
// 1️⃣3️⃣ STRING IS IMMUTABLE
// ============================================================

/*
  Strings are immutable.

  That means we cannot directly change
  an individual character.
*/

let fruit = "Apple";

// fruit[0] = "B";

console.log(fruit);

// Output:
// Apple


/*
  Instead, create a new string:

  fruit = "B" + fruit.slice(1);

  Output:
  Bpple
*/


// ============================================================
// 1️⃣4️⃣ STRING CONCATENATION vs TEMPLATE LITERAL
// ============================================================

/*
  Traditional concatenation:

  let name = firstName + " " + lastName;
*/

let name1 = firstName + " " + lastName;

console.log(name1);


/*
  Modern and cleaner approach:

  Template Literal:
*/

let name2 = `${firstName} ${lastName}`;

console.log(name2);


/*
  Both produce:

  Shafayat Islam

  But template literals are easier to read
  when multiple variables are involved.
*/


// ============================================================
// 🧠 QUICK REVISION
// ============================================================

/*
  STRING
  ↓
  Text / sequence of characters


  Create String:
  "Hello"
  'Hello'
  `Hello`


  Concatenation:
  "Hello" + "World"


  Template Literal:
  `Hello ${name}`


  New Line:
  \n


  String Length:
  string.length


  Uppercase:
  string.toUpperCase()


  Lowercase:
  string.toLowerCase()


  Search:
  string.includes("text")


  Remove extra spaces:
  string.trim()


  Extract:
  string.slice(start, end)


  Index:
  string[0]
  string[1]
  string[2]
*/


// ============================================================
// 📌 IMPORTANT POINTS
// ============================================================

/*
  1. String index starts from 0.

  2. `.length` counts characters, including spaces.

  3. `includes()` returns true or false.

  4. String methods like:
     toUpperCase()
     toLowerCase()
     trim()
     slice()

     return a new string.

  5. Strings are immutable.

  6. Template literals use backticks:
     ` `

  7. Variables can be inserted using:
     ${variable}
*/


// ============================================================
// 🏆 FINAL EXAMPLE
// ============================================================

const studentFirstName = "Abdullah";
const studentLastName = "Al Mamun";
const studentCity = "Rajshahi";

const studentInfo = `
Name: ${studentFirstName} ${studentLastName}
City: ${studentCity}
Status: Student
`;

console.log(studentInfo);

/*
  Output:

  Name: Abdullah Al Mamun
  City: Rajshahi
  Status: Student
*/


// ============================================================
// 🚀 KEY TAKEAWAY
// ============================================================

/*
  String = Text

  +              → Combine strings
  ` ${} `        → Insert variables
  \n             → New line
  .length        → Count characters
  [index]        → Access character
  .toUpperCase() → Uppercase
  .toLowerCase() → Lowercase
  .includes()    → Search text
  .trim()        → Remove extra spaces
  .slice()       → Extract part of string

  Learn → Understand → Practice → Build 🚀
*/