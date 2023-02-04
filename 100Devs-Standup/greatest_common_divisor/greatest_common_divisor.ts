// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

//* SOLUTION IN FOR LOOP

const greatest_cd = (x: number, y: number) => {
	for (let i = Math.min(x, y); i > 0; i--) {
		if (x % i == 0 && y % i == 0) {
			return i;
		}
	}
};

//* SOLUTION IN RECURSION

const greatest_cd_rec = (x: number, y: number): number => {
	if (y == 0) return x;
	return greatest_cd_rec(y, x % y);
};

console.log(greatest_cd_rec(30, 12), 6);
console.log(greatest_cd_rec(8, 9), 1);
console.log(greatest_cd_rec(1, 1), 1);
