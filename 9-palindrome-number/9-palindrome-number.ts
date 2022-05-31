function isPalindrome(x: number): boolean {
  let answer = x.toString().split("").reverse().join("");
  return (x === Number(answer) ? true : false);
};