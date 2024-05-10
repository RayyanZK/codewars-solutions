/*

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

*/

function spinWords(string){
    let spinningArr = []
    let words = string.split(" ")
    for(let i = 0; i < words.length; i++){
        let word = words[i]
        if(word.length >= 5){
            let reverseWord = []
            let alphabets = word.split("")
            for(let j = alphabets.length - 1; j >= 0; j--){
                let alphabet = alphabets[j]
                reverseWord.push(alphabet)
            }
            spinningArr.push(reverseWord.join(""))
            continue
        }
        spinningArr.push(word)
  }
  return spinningArr.join(" ")
}