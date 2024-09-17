const str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Convert the string into array
const lines = str.split('\n');

// Extract the headers from the first line
const headers = lines[0].split(',');

// Initialize an empty array to hold the result
const result = [];

// Loop through each line 
for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const obj = {};
    
    // Loop through each header
    for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j];
    }
    
    // Add the object to the result array
    result.push(obj);
}

console.log(result);
// Output:
// [
//     { ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' },
//     { ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' },
//     { ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' },
//     { ID: '98', Name: 'Bill', Occupation: 'Doctor’s Assistant', Age: '26' }
// ]

