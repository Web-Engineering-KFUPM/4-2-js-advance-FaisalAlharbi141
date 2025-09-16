/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
class Student{
   constructor(firstName,lastName,gpa){
      this.firstName = firstName;
      this.lastName = lastName;
      this.gpa = gpa;
   }
   get fullName(){return this.firstName + " " + this.lastName ;}
   set updateGpa(newGpa) {this.gpa = newGpa;}
   get Gpa() {return this.gpa;}
}
const myObj = new Student("Faisal","Alharbi",3.0);
myObj.updateGpa = 4.0;
console.log(myObj.Gpa);
console.log(myObj.fullName);

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const _Courses = {ICS104: "Intro to Python", ICS108: "OOP", MATH101: "Calc1"};
for(const i in _Courses){
   console.log("Course: " + i +" ,Title: "+ _Courses[i]);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const myString = "i am Taking SWE363";
for (const i in myString){
   console.log("Charectars are:" + myString[i]);
}
console.log("Length is: " + myString.length); 


// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const myDate = new Date();
console.log("Day of month: "+ myDate.getDate());
console.log("Month: "+ myDate.getMonth());
console.log("Year: "+ myDate.getFullYear());

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const myArr = [689,22,4,5,33,6,8,9,2,90];
const min = Math.min(...myArr);
const max = Math.max(...myArr);
console.log("Min array: " + min);
console.log("Max array: " + max);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

// End of Advance JavaScript Lab — good luck!
