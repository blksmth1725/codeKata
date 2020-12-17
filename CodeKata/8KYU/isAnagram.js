// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = (test, original) => {
 let t = test.toLowerCase().split("").sort().join("");
 let o = original.toLowerCase().split("").sort().join("");
 return t == o ? true : false;
};

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("chris", "christ"));
console.log(isAnagram("dumble", "bumble"));
console.log(isAnagram("twoo", "woot"));
console.log(isAnagram("BucketHead", "deathCubek"));
