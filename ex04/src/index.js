// Only change code below this line
function sumFibonacci(num) {
  var sum = 0;
  var myArr = fibo(num);
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] % 2 !== 0) {
      sum += myArr[i];
    }
  }
  return sum;
}
// make fibonacci sequence
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

function fibo(n) {
  var fibArr;
  if (n <= 0) {
    fibArr = [0];
    return fibArr;
  } else if (n === 1) {
    fibArr = [0, 1];
    return fibArr;
  } else {
    fibArr = fibo(n - 1);
    var next = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    if (next <= n) {
      fibArr.push(next);
    }
    return fibArr;
  }
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(0));

module.exports = sumFibonacci;
