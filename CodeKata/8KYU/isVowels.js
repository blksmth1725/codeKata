// Write a program that counts all of the vowels inside of a string except for “y”. In javascript.

const vowels = "aeiou".split("");

const isVowel = (str) =>
 str.split("").filter((letter) => vowels.includes(letter)).length;

console.log(isVowel("what the fuck is a vowel"));
