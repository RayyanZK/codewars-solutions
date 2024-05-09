/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

*/

function isIsogram(str){
    let alphabets = {}
    let once = false
    if(str === "") return true
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()
        if(char === " ")
            continue
        else alphabets[char] = (alphabets[char] || 0) + 1 
    }
    for(let alphabet in alphabets){
        if(alphabets[alphabet] === 1) once = true
        if(alphabets[alphabet] !== 1) return false
    }
    return once
};