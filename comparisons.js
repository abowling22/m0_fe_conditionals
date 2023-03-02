// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents);


// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false

console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);


// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true

console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);


// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true

console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);


// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false

console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);



// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true

console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);


// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true

console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);



// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain. The code is asking if the value you 4 is less than the value of 9 and outputting the result of that into wherever the code is being ran  

var books = 3;
console.log(4 < books);
// YOU DO: Explain. the variable books is being given a value of 3 in the first line. Then the console command is asking if the variable value of 3 
// is greater than the given value of 4.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain. There are two variables given values in the first two lines of code. friends is given the value of 6, siblings is given the value of 2.
// the console command is printing the result of the question is the value of friends less than the value of siblings.



var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//the first two lines have two variables named attendes and meals with values given of 9 and 8 respectively.
// the console command is printing the result of the question does the number of attendes not equal the number of meals.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;



// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
// The prompt is asking whether the dog loves to play and loves treats. because both variables are true the answer is true. 
// This is expressed in code: console.log(lovesToPlay && lovesTreats);


// Determine if the dog loves to play and loves the dog park
// This prompt is asking if the dog loves to play AND loves the dog park. Because the value for dog park is false, the output is false.
// This is expressed in code: console.log(lovesToPlay && lovesDogPark);



// Determine if the dog loves to play or loves the dog park
// This prompt is asking if the dog loves to play OR loves the dog park. Because one variable is expressed as true, the output must be true.
// This is expressed in code: console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
// This question is unanswerable as we have not defined what a puppy is. That variable is not defined
// This would be expressed in code console.log(lovesToPlay && isPuppy)


// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:  ReferenceError: isPuppy is not defined. This error message shows because the variable isPuppy is an undefined variable