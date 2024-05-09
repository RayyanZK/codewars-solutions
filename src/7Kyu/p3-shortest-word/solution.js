/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
    let arrOfStr = s.split(" ")
    let length = arrOfStr[0].length
    for(let i = 0; i< arrOfStr.length; i++){
      if(arrOfStr[i].length < length) length = arrOfStr[i].length
    }
    return length
  }