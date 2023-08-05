
function tallest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const numbers = [167, 190, 120, 165, 137, 10, 5, 7, 307, 200, 250, 297,402]
const tallestIs = tallest(numbers);
console.log(tallestIs);
