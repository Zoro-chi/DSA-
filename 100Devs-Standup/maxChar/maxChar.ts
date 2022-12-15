/** Given a string of characters, return the character that appears the most often.

 describe("Max Character", () => {
 it("Should return max character", () => {
   assert.equal(max("Hello World!"), "l");
  });
 });

// No String or Array Methods (well brute force it first, but then no methods)! */

//* SOLUTION:

const maxChar = (str: string) => {
	interface cacheTypes {
		[key: string]: any;
	}
	let cache: cacheTypes = {};
	let count = 0;
	let max;
	for (const letter of str) {
		cache[letter] ? cache[letter]++ : (cache[letter] = 1);
	}
	for (const key in cache) {
		if (cache[key] > count) {
			count = cache[key];
			max = key;
		}
	}
	return max;
};

console.log(maxChar("Hello World!"), "l");
