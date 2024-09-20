


//Part 1

const str  = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

console.log("================================= Part 1 ====================================")

const header = str.split('\n');
 console.log(header);


// Part 2
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