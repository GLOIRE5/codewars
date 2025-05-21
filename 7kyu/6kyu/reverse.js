/*Write a function called reverseWords that takes a string as input and returns the string with the words reversed but the order of the words remains the same.*/
function reverseWords(str) {
  const words = str.split(' ');
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  return reversedWords.join(' ');
}
