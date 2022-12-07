// Given a string of characters as input, write a function that returns it with the characters reversed.
// No Reverse Method (well brute force it first, but then no reverse method)!

//* SOLUTION:

const reverseString = (str: string) => {
	let reversed = "";
	for (let char of str) {
		reversed = char + reversed;
	}
	return reversed;
};

console.log(reverseString("bob"), "bob");
console.log(reverseString("john"), "nhoj");
