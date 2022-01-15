// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// 1a) Pseudo Code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("l33t1f1c4t10n", () => {
  it("a function which takes in a string argument and returns a similar string, though has most of the vowels replaced with their l33t-speak equivalents", () => {
    expect(l33t1f1c4t10n("Lackadaisical")).toEqual("L4ck4d41s1c4l");
    expect(l33t1f1c4t10n("Gobbledygook")).toEqual("G0bbl3dyg00k");
    expect(l33t1f1c4t10n("Eccentric")).toEqual("3cc3ntr1c");
  });
});

// b) Create the function that makes the test pass.

// 1b) Pseudo Code:
// Declare a function and name it l33t1f1c4t10n (const declaration)
// Name the parameter as string
// Declare a variable, name it stringArray (let declaration), and initialize it to string.split("")
// Apply a .filter HOF, which will iterate through all elements of stringArray and apply conditionals, which subsitute l33t-speak numbers in place of any a, e, i, and o (4, 3, 1, and 0 respectively)
// Apply a .join("") to the end of the filter. Also, return the whole expression (ie stringArray.filter.join(""))
// Run the tests to ensure it passes

const l33t1f1c4t10n = (string) => {
  let stringArray = string.split("");
  let stringArrayNew = [];
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].toLowerCase() === "a") {
      stringArrayNew.push("4");
    } else if (stringArray[i].toLowerCase() === "e") {
      stringArrayNew.push("3");
    } else if (stringArray[i].toLowerCase() === "i") {
      stringArrayNew.push("1");
    } else if (stringArray[i].toLowerCase() === "o") {
      stringArrayNew.push("0");
    } else {
      stringArrayNew.push(stringArray[i]);
    }
  }
  return stringArrayNew.join("");
};

// Notes: I initially ran the test, and it failed with the correct error. As I was writing my actual code, I realized .filter could not be used the way I was thinking it could be used (at least I wasn't able to get it to work properly). So I decided to go with what I know and write a for loop. I also had to add a .toLowerCase() to include capital letters in the conditionals. I also needed a second variable to .push letters and numbers into. I ran the test again and it passed green. The only refactor I would do is try to find an HOF to make this work, but .filter didn't seem to work for me. Maybe .map could work? Also, might be able to use ternary operators here. I will attempt to refactor this if time permits.

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// 2a) Pseudo Code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("charSearch", () => {
  it("A function which takes in an array of strings and a string character, and returns a new array of strings which contain that character", () => {
    expect(
      charSearch(["Apple", "Banana", "Plum", "Orange", "Kiwi"], "a")
    ).toEqual(["Apple", "Banana", "Orange"]);
    expect(
      charSearch(["Mango", "Cherry", "Apricot", "Blueberry", "Peach"], "e")
    ).toEqual(["Cherry", "Blueberry", "Peach"]);
  });
});

// b) Create the function that makes the test pass.

// 2b) Pseudo Code:
// Declare a function and name it charSearch (const declaration)
// Name the parameters as array and character respectively
// Create a return statement, which performs a .filter on the array parameter
// .filter logic
//      value.toLowerCase().includes(character)
// Run the test code to ensure it is passing

const charSearch = (array, character) => {
  return array.filter((value) => value.toLowerCase().includes(character));
};

// Notes: I initially ran the test, got the correct failure. As for writing the code, this one was pretty straightforward for me. I honestly can't even think of a refactor for this. Just very simple code that I actually like.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// 3a) Pseudo Code:
// Copy and paste test code template into assignment (make sure nothing is inside initial template)
// Read problem statement and understand inputs/outputs (inputs need to be directly inserted into test code)
// Create relevant info for describe, it, expect, and toEqual methods
// Test code output to ensure it is failing red (should get a reference error saying function is not defined)

describe("bobSaget", () => {
  it("A function that takes in an array and returns true if the resulting 'hand' is a full house, and otherwise returns false", () => {
    expect(bobSaget([5, 5, 5, 3, 3])).toEqual(true);
    expect(bobSaget([5, 5, 3, 3, 4])).toEqual(false);
    expect(bobSaget([5, 5, 5, 5, 4])).toEqual(false);
  });
});

// b) Create the function that makes the test pass.

// 3b) Pseudo code:
// Declare a function and name it bobSaget (const declaration)
// Name the parameter as array
// Declare a variable, name it as sortArray, and initialize it as array.sort() (let declaration)
// Declare another variable, name it as counterArray, and initialize it as an empty array (let declaration)
// Create a for loop,  which iterates through all elements of the sortArray () (use i as the incrementer for the loop count, initialized to 0)
// For loop logic:
//       Create a counter variable (let declaration) with an initial value of 0
//       Create a nested for loop (use j as the incrementer for the nested loop count, and set the initial value to 0)
//       Nested for loop logic:
//              Evaluate whether or not the value at the ith index equals that of the value at the jth index. If they are equal, increment the counter variable. However, if they do not equal, set the value of i to that of the current value of j. Also set the value of j equal to the length of sortArray to terminate the nested loop early
//       .push the value of the counter variable into the counterArray
// Create conditionals which evaluate the entries of counterArray, such that if either counterArray[0] === 3 && counterArray[1] === 2 || counterArray[0] === 2 && counterArray[1] === 3, it returns true. Otherwise have it return false

// const bobSaget = (array) => {
//   let sortArray = array.sort();
//   console.log(sortArray);
//   let counterArray = [];
//   for (let i = 0; i < sortArray.length; i++) {
//     let counter = 0;
//     for (let j = i; j < sortArray.length; j++) {
//       console.log(i, "i before");
//       console.log(j, "j before");
//       if (sortArray[i] === sortArray[j]) {
//         counter++;
//         console.log(counter, "counter");
//       } else if (sortArray[i] !== sortArray[j]) {
//         i = j - 1;
//         j = sortArray.length;
//         console.log(i, "i after");
//         console.log(j, "j after");
//       } else if (j === sortArray.length - 1) {
//         i = j - 1;
//         j = sortArray.length;
//       }
//     }
//     counterArray.push(counter);
//     console.log(counterArray);
//   }
//   if (
//     (counterArray[0] === 3 && counterArray[1] === 2) ||
//     (counterArray[0] === 2 && counterArray[1] === 3)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

const bobSaget = (array) => {
  let sortArray = array.sort();
  if (
    (sortArray[0] === sortArray[2] && sortArray[3] === sortArray[4]) ||
    (sortArray[0] === sortArray[1] && sortArray[2] === sortArray[4])
  ) {
    return true;
  } else {
    return false;
  }
};

// Notes: I ran the initial test and it failed with the appropriate error message. And then...after hours of swearing and trying to figure out how to make this work with for loops, I realized purely using conditionals was by far the easier method. This works mainly because a full house condition is easy to find once you use .sort() on the input array. I honestly can't (and don't want to) think of a refactor for this, simply because this gave me a massive headache. I left the original code commented out to show the monster I was working with.
