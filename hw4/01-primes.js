const isPrime = (num) => {
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimes = (len) => {
  for (let i = 2; i <= len; i++) {
    let prime = isPrime(i);

    if (prime) console.log(i);
  }
};

getPrimes(100);
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47
// 53
// 59
// 61
// 67
// 71
// 73
// 79
// 83
// 89
// 97
