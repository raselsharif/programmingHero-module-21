function reverseStr(string) {
    let revered = ''
    for (let i = string.length - 1; i >= 0; i--) {
        let element = string[i]
        revered = revered + element;
        // console.log(revered);
    }
    return revered;
}




const myString = "I am a good boy"
const reversedString = reverseStr(myString)
console.log(reversedString);