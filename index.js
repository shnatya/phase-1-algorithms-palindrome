function isPalindrome(word) {
  // Write your algorithm here
    // const arrayOfLetters = word.split('')
    // const reversed = arrayOfLetters.reverse();
    const joined = word.split('').reverse().join('');
    return word === joined
}

/* 
  Add your pseudocode here
  function gets a string as an argument
    string.split
    array.reverse
    array.join
    if it's a palindrome then {
      return true
    }
    else{
      return false
    }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palma"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("eye"));
}

module.exports = isPalindrome;
