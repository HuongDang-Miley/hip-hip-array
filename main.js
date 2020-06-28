/* This assignment will give you some practice with creating arrays and using their methods. */

/* Please note that his is NOT a function-based challenge (aside from your challenge banner function). Everything should be in the global scope--this means you will benefit from using `for` loops instead of `while`. */


// Challenge 0
//
// Challenge banner time! Write a function that console.logs "####### Challenge n #######", where n is the number passed into the function.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
function challengeBanner(n) {
  console.log("####### Challenge " + n + " #######")
}

// Challenge 1

// Loop through the following array, console.logging out each value.
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson', 
];

challengeBanner('1: log out each value individually');
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
challengeBanner('2: log out backward');
for (let i = grades.length -1; i >=0 ; i--) {
  console.log(grades[i])
}


// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

challengeBanner('3: log out even numbers');

for (let i = 0; i < positiveNumbers.length; i++) {
  let isEven = positiveNumbers[i] % 2 === 0
  let currentNum = positiveNumbers[i]
  if (isEven) {
    console.log(currentNum)
  }
}


// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

challengeBanner('4: log out even numbers include negative ones');

for (i=0; i < mixedSignNumbers.length; i++) {
  let isEven = mixedSignNumbers[i] % 2 === 0
  let currentNum = mixedSignNumbers[i]
  if (isEven) {
    console.log(currentNum)
  }
}


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

// remove first and last value
let newArr = symmetricalCapitals.slice(1, -1);

// print all value in the array
challengeBanner('5: remove 2 value from the beginning and 1 at the end');
for (i=0; i<newArr.length; i++) {
  console.log(newArr[i])
}


// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

// Add 1st value
fibonacciNumbers.unshift('first')
// Add 2 value at the end
fibonacciNumbers.push('2nd to last')
fibonacciNumbers.push('last')

// print all value in the array
challengeBanner('6: .unshift `first` and .push `2nd to last` and `last`')
for ( i=0; i < fibonacciNumbers.length; i++) {
  console.log(fibonacciNumbers[i])
}


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the arrays from the previous 6 challenges, that is, every value should be placed within the square brackets.  Now console.log out each value individually.
const arr = [true, false, 1, '1', [], function(){} ]

// Add 1st value
arr.unshift('first')
// Add 2 value at the end
arr.push('2nd to last')
arr.push('last')

challengeBanner('7: create new array, .unshift `first` and .push `2nd to last` and `last`')
for (i = 0; i < arr.length; i++) {
  console.log(arr[i])
}


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const arr1 = []
// insert 3 value at the beginning
arr1.unshift(3)
arr1.unshift(2)
arr1.unshift(1)
// insert 2 value at the end
arr1.push(4)
arr1.push(5)

// print array
challengeBanner('8: .unshift 1 2 4 and .push 4 5')
for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}


// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.

challengeBanner('9: Log out from value 3 to 10 inclusive');

for (i=0; i < students.length; i ++) {
  if (3 <= i && i <=10 ) {
    console.log(students[i])
  }
}


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.

// Make string copy of of student array from index 3 to 10 inclusive
let strCopyOfStudents = ''
for (let i = 3; i < students.length && i < 11; i++) {
  if (i === 10) { strCopyOfStudents += (students[i])}
  else {strCopyOfStudents += (students[i]) + ' '}  
}

challengeBanner('10: Make a copy array using loop');
// Convert the string to array
let arrayCopyOfStudents = strCopyOfStudents.split(' ')
console.log(arrayCopyOfStudents)

challengeBanner('10: log out each value in the copy array');
// log out each student in the copy of the array students
for (let i=0; i<arrayCopyOfStudents.length; i++ ) {
console.log(arrayCopyOfStudents[i]);
}


// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the two arrays are the same, because `slice` does NOT modify the original array.

let newStudents = students.slice(3,11)

// log out each value of the copy students
challengeBanner('11: make a copy array using .slice()');
for (i=0; i < newStudents.length; i++) {
  console.log(newStudents[i])
}
// log out each value of the original students
challengeBanner('11: the original array unchanged');
for (i=0; i < students.length; i++) {
  console.log(students[i])
}


// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

const newDinosaurs = dinosaurs.splice(4, 6)

challengeBanner('12: Make new array using .splice()')
console.log(newDinosaurs);

challengeBanner('12: the original array changed')
console.log(dinosaurs);


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
challengeBanner('13: join use * as separator');

const dinosaursArray = dinosaurs.join('*')
console.log(dinosaursArray);


// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
challengeBanner('14: reverse');

const reverseDinosaurs = dinosaurs.reverse()
console.log(dinosaurs)


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

challengeBanner('15: combine two arrays')

const combine = primaries.concat(secondaries)
for (i=0; i< combine.length; i++) {
  console.log(combine[i])
}
challengeBanner('15: two original arrays')
console.log(primaries);
console.log(secondaries);
