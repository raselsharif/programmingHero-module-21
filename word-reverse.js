
function wordReverse(string) {

    const splitWord = string.split(" ");
    let wordPush = [];
    for (let i = splitWord.length - 1; i >= 0; i--) {
        let element = splitWord[i];
        wordPush.push(element);
    }
    const wordJoin= wordPush.join(" ");
    return wordJoin;
}


const string = "I am a good boy"
const reversed = wordReverse(string)
console.log(reversed);