import { getSum } from "../functions/numbers-sum";

describe("Find the sum of all the integers between and including two integers and return it", () => {
	it("should return 1 for (1, 0)", () => {
		expect(getSum(1, 0)).toBe(1);
	});

	it("should return 3 for (1, 2)", () => {
		expect(getSum(1, 2)).toBe(3);
	});

	it("should return 1 for (0, 1)", () => {
		expect(getSum(0, 1)).toBe(1);
	});

	it("should return 1 for (1, 1)", () => {
		expect(getSum(1, 1)).toBe(1);
	});

	it("should return -1 for (-1, 0)", () => {
		expect(getSum(-1, 0)).toBe(-1);
	});

	it("should return 2 for (-1, 2)", () => {
		expect(getSum(-1, 2)).toBe(2);
	});
});
