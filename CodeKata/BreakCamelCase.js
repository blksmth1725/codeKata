//Complete the solution so that the function will break up camel casing, using a space between words.

const solution = (string) =>
 string
  .split("")
  .map((el) => (el == el.toUpperCase() ? (el = " " + el) : el))
  .join("");

console.log(solution("dragonBall"));
