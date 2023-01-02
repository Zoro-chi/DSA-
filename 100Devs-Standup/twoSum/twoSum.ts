/**Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
 * Example: 
 * describe("Two Sum", () => {
  it("Should implement two sum", () => {
   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
  });
 });
 */

//* SOLUTION:

const twoSum = (arr: number[], target: number) => {
	type cacheType = {
		[key: number]: number;
	};

	const answer: any = [];
	const cache: cacheType = {};

	for (const num1 of arr) {
		const num2 = target - num1;
		if (cache[num2]) {
			answer.push([num1, num2]);
		} else {
			cache[num1] = 1;
		}
	}
	return answer;
};

console.log(twoSum([1, 2, 2, 3, 4], 4), "[[2, 2], [3, 1]]");
