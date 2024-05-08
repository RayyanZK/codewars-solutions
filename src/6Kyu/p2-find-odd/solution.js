/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

function findOdd(A) {
    let occurence = {}
    console.log('hello')
    let isOdd = false;
    for(let i = 0; i < A.length; i++){
        console.log("Test")
        let number = String(A[i])
        occurence[number] = (occurence[number] || 0) + 1
    }
    for(let number in occurence){
        if(occurence[number] % 2 !== 0) return Number(number)
    }
    return 0
  }