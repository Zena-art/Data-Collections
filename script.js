


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

// Convert inner arrays into objects with lowercase keys
const csv_to_object_array = (data, delimiter = ',') => {
    const array = csv_to_array(data, delimiter);
    const headers = array[0].map(header => header.toLowerCase()); // Lowercase headers

    return array.slice(1).map(innerArray => {
        return innerArray.reduce((obj, value, index) => {
            obj[headers[index]] = value; // Keep values as they are
            return obj;
        }, {});
    });
};



// Invoking the function
console.log(csv_to_object_array(str));