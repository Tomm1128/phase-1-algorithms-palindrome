function isPalindrome(word) {
  // Write your algorithm here

  let wordArray = word.split("")
  let reversedWord = wordArray.reverse().join("")

  return reversedWord === word

}

/* 
  Add your pseudocode here
  Example i/o: 
  Input: "madam"
  Output: true

  Input: "robot"
  Output: false

  The function should take in a lower case string and return true or false depending on if the string is a palindrome. 

  palindrome(string) {
    Take string and break into array of chars
    Then reverse the array of chars
    Then put the array back together and save that into a variable

    Compare original word and against new reverse word variable I created 

    return boolean outcome depending on the above condition
  }

*/

/*
  Add written explanation of your solution here

  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Word: racecar, Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Word: kayak, Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("");

  console.log("Word: robot, Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Word: paper, Expecting: false");
  console.log("=>", isPalindrome("paper"));
}

module.exports = isPalindrome;
