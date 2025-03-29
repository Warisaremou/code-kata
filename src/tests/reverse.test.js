import { reverseWords } from "../functions/reverse";

describe("Reverse words", () => {
	it("should reverse `This is an example!` to `sihT si na !elpmaxe`", () => {
		expect(reverseWords("This is an example!")).toBe("sihT si na !elpmaxe");
	});

	it("should reverse `double  spaces` to `elbuod  secaps`", () => {
		expect(reverseWords("This is an example!")).toBe("sihT si na !elpmaxe");
	});
});
