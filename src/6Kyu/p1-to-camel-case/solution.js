/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str){
    let camelCase = ""
    const avoid = ["-", "_"]
    for(let i = 0; i < str.length; i++){
      let alpha = str[i]
      let previousAlpha = str[i - 1]
      
      if(avoid.includes(previousAlpha)){
        camelCase+= alpha.toUpperCase()
        continue
      }
      
      if(avoid.includes(alpha)) continue
      
      camelCase += alpha
    }
    return camelCase
  }