/** You're given strings jewels representing the types of stones that are
 * jewels, and stones reresenting the stones you have. Each character in
 * stones is a type of stone you have. You want to know how many of the
 * stones you have are also jewels.
 *
 * Letters are case sensitive, so "a" is considered a different type of
 * stone from "A".
 *
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 *
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 * Constraints:
 * 1 <= jewels.length, stones.length <= 50
 * Jewels and stones consist of only English letters
 * All the characters of jewels are unique*/

// * SOLUTION:

const findJewels1 = (jewels: string, stones: string) => {
	// TODO: FIRST SOLUTION, DOWNSIDE IS 0(n^2)
	let count = 0;
	for (const stone of stones) {
		if (jewels.includes(stone)) {
			count++;
		}
	}
	console.log(count);
	return count;
};

const findJewels2 = (jewels: string, stones: string) => {
	// TODO: SECOND SOLUTION USES A MAP => 0(n)
	interface mapItems {
		[key: string]: any;
	}
	const map: mapItems = {};
	let count = 0;
	for (const jewel of jewels) {
		map[jewel] = true;
	}
	for (const stone of stones) {
		if (map[stone]) count++;
	}
	return count;
};

console.log(findJewels2("aA", "aAAbbbb"), 3);
console.log(findJewels2("z", "ZZ"), 0);
