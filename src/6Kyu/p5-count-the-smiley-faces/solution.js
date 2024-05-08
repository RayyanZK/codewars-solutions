/*

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same

*/

function countSmileys(arr) {
    let smileyCount = 0
    const validEyes = [":", ";"]
    const validNose = ["-", "~"]
    const validMouth = [")", "D"]
    for(let i = 0; i < arr.length; i++){
      let currentFace = arr[i]
      if(currentFace.length === 3)
        if(validEyes.includes(currentFace[0]) && validNose.includes(currentFace[1]) && validMouth.includes(currentFace[2]))
            smileyCount += 1
      if(currentFace.length === 2)
        if(validEyes.includes(currentFace[0]) && validMouth.includes(currentFace[1]))
            smileyCount += 1
        }
    return smileyCount
  }
