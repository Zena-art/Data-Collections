


//Part 1

/**
 * For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.
 */

const str  = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

console.log("================================= Part 1 ====================================")

const header = str.split('\n');
 console.log(header);


// Part 2
/**
 * Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
 */


 console.log("================================= Part 2 =====================================")

const csv_to_array = (data, delimiter = ',') => // Array function with 2 arguments, passing ',' as a default delimiter
    data.split('\n'). // converting string into an array, splitting at new line char
    map(v => v.split(delimiter)); //using callback function of map to create nested arrays and passing v (value) splitting and using delimiter to separate the values

    // invoking my function passing str from part 1 task.
    console.log(csv_to_array(str));


    console.log("=============================== Part 3 ============================================")



// Part 3

// Convert inner arrays from part 2 into objects

const csv_to_object_array = (data, delimiter = ',') => {
    const array = csv_to_array(data, delimiter); // acceccing inner array
    const headers = array[0].map(header => header.toLowerCase()); // getting the headers and converting them into Lowercase 

    return array.slice(1).map(innerArray => {
        return innerArray.reduce((obj, value, index) => {
            obj[headers[index]] = value; // Keep values as they are
            return obj;
        }, {});
    });
};

let result = csv_to_object_array(str);

// Invoking the function
console.log(csv_to_object_array(str));



console.log("=======================================Part 4 ==================================================")

// part 4 
/**
 * Using array methods, accomplish the following tasks, in order upon the result of Part 3:
 */

// 1. Remove the last element from the sorted array.

result.pop();

// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Define the new object
const person1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };

// Insert newPerson at index 1
result.splice(1, 0, person1);
// 3.Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// Define another object
const person6 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
result.push(person6);

console.log(result);

/*
Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

*/


let sumOfAges = 0;  // Variable to hold the sum of ages

// Loop through the array to calculate the sum of ages
for (let i = 0; i < result.length; i++) {
    sumOfAges += Number(result[i].age);  // Convert age to a number and add to sum
}

// Calculate the average age
const averageAge = sumOfAges / result.length;

console.log("Average Age:", averageAge);



// Part 5
// As a final task, transform the final set of data back into CSV format.

console.log("========================================== Part 5 ==================================================")

// Step 1: Extract headers
const headers = Object.keys(result[0]); // Get the keys of the first object

// Step 2: Create header row
const headerRow = headers.join(','); // Join headers with a comma

// Step 3: Create rows for each object
const rows = result.map(obj => {
    return headers.map(header => obj[header]).join(','); // Join each value with a comma
});

// Step 4: Combine header and rows into a single CSV string
const csvData = [headerRow, ...rows].join('\n'); // Join header and rows with new lines

console.log(csvData); // Output the final CSV string



