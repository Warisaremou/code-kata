import { order } from "../functions/order";

describe("Sort a string using single numbers in words", () => {
	it("should order `is2 Thi1s T4est 3a` to `Thi1s is2 3a T4est`", () => {
		expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
	});

	it("should order `4of Fo1r pe6ople g3ood th5e the2` to `Fo1r the2 g3ood 4of th5e pe6ople`", () => {
		expect(order("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople");
	});

	it("should return an empty string if empty string if input is an empty string", () => {
		expect(order("")).toBe("");
	});
});
