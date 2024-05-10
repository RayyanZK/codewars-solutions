/*

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

*/

function score( dice ) {
    let score = 0;
    let scoreValues = {
        1: 100,
        2: 20,
        3: 30,
        4: 40,
        5: 50,
        6: 60
    }

    let scores = {}

    for(let face of dice){
        for(let score in scoreValues){
            if(face == score){
                scores[scoreValues[score]] = (scores[scoreValues[score]] || 0) + 1
                continue
            }
        }
    }

    let finalScore = []

    for(let score in scores){
        if(scores[score] >= 3 && score != 100 && score != 50){
            finalScore.push(score * 10)
            continue
        }
        if(score == 100 || score == 50){
            if(scores[score] >= 3){
                scores[score] -= 3
                finalScore.push(score * 10)
                finalScore.push(scores[score] * score)
                continue
            }
            if(scores[score] < 3){
                finalScore.push(score * scores[score])
            }
        }
    }
    for(let push of finalScore){
        score += push
    }
    return score
  }


  /*
  DYNAMIC USER INPUT BASED GAME

  I got confused on the instructions , I was supposed to return the score according to the given array of numbers, but I made it into a prompt base game from the user.
The working scenario is exactly the same if it were to be played by an array.


  */

function score( dice ) {
    let dieNumbers = [1,2,3,4,5,6]
    let scoresForNums = {
        1: 100,
        2: 20,
        3: 30,
        4: 40,
        5: 50,
        6: 60
    }
    let numScore = []
    let scoreArr = []
    let tries = 0
    let score = 0
    let wannaContinue = true
    while(tries < 5){
        while(wannaContinue){
            let play = Number(prompt("Input 1 to play, Input 0 to exit"))

            if(play !== 0 && play !== 1){
                alert("Input 1 or 0")
            }

            if(play === 1){
                wannaContinue = true
            }

            if(wannaContinue){
                let randomNum = Math.floor(Math.random() * 6)
                scoreArr.push(dieNumbers[randomNum])
            }

            if(play === 0){
                wannaContinue = false
            }

            tries++

            if(tries > 4) break
        }
        if(scoreArr.length >= 1){
            for(let score in scoresForNums){
                for(let die of scoreArr){
                    if(score == die){
                        numScore.push(scoresForNums[score])
                        continue
                    }
                }
            }
        }
        let scoreCounter = {};
        for(let i = 0; i < numScore.length; i++){
            let score = numScore[i]
            scoreCounter[score] = (scoreCounter[score] || 0) + 1
        }

        let finalScore = []

        for(let score in scoreCounter){
            if(scoreCounter[score] >= 3 && score != 100 && score != 50){
                    finalScore.push(score * 10)
                    continue
                }
            if(score == 100 || score == 50){
                if(scoreCounter[score] >= 3){
                    scoreCounter[score] -= 3
                    finalScore.push(score * 10)
                    finalScore.push(scoreCounter[score] * score)
                    continue
                }
                if(scoreCounter[score] < 3){
                    finalScore.push(score * scoreCounter[score])
                    continue
                }
            }
            }
        for(let lastPush of finalScore){
            score += lastPush
        }
        if(!wannaContinue) return score
    }
    return score
  }