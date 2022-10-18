/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
  const wordLen = text.length;
  const textArr = text.split("");
  for (let i = 0; i < wordLen / 2; i++) {
    if (textArr[i] !== textArr[wordLen - i - 1]) return false;
  }
  return true;
}

module.exports = palindromeChecker;
