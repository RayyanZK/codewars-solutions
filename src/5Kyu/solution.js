/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


*/

function humanReadable (seconds) {
    if(seconds < 0) return -1
    if(seconds > 359999) return -1
    let minutes = 0
    let hours = 0
    for(let i = 1; i <= seconds; i++){
      counter = i
      if(i === 60){
        minutes++
        i = 1
        seconds -= 60
      }
      if(minutes === 60){
        hours++
        minutes-= 60
      }
    }
    return `${hours < 10 ? hours = `0${hours}`: hours}:${minutes < 10 ? minutes = `0${minutes}`: minutes}:${seconds < 10 ? seconds = `0${seconds}` : seconds}`
  }
  