function toLowerCaseFunct(str) {
   let lowerCaseStr = '';
   for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
         lowerCaseStr += String.fromCharCode(charCode + 32);
      } else {
         lowerCaseStr += str.charAt(i);
      }
   }
   return lowerCaseStr;
}

function isPalindrome(word) {
   const toLower = toLowerCaseFunct(word)
   let reverse = ''
   for (let i = toLower.length - 1; i >= 0; i--) {
      reverse += toLower[i]
   }
   return toLower === reverse ? `${word} is a palindrom word` : `${word} is not a palindrom word`
}


// test case
console.log(isPalindrome('Kasur 11 ruSak'))
console.log(isPalindrome('Madam'))
console.log(isPalindrome('Makan malam'))