// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n. For example,
// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

const factorialRec = (n: number): number => {
	if (n < 2) return 1;
	return n * factorialRec(n - 1);
};

console.log(factorialRec(5), 120);
console.log(factorialRec(0), 1);
