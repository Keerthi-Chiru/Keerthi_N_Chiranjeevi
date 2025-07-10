
const inputString = prompt("Enter the input array: ");
const cleanString = inputString.replace('[', '').replace(']', '');  // remove brackets
const input = cleanString.split(',').map(num => Number(num.trim()));

const result = {};

for (let i = 1; i <= 9; i++) {
    result[i] = 0;  

    for (const num of input) {
        if (num % i === 0) {
            result[i]++;
        }
    }
}

console.log(result);
