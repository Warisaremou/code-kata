import { toCamelCase } from "../functions/convert";

describe("Convert string to camel case", () => {
	// Convert dash delimited words into camel casing
	it("should convert 'the-stealth-warrior' to 'theStealthWarrior'", () => {
		expect(toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior");
	});

	// Convert underscore delimited words into camel casing
	it("should convert 'The_Stealth_Warrior' to 'TheStealthWarrior'", () => {
		expect(toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
	});

	// Convert dash and underscore delimited words into camel casing
	it("should convert 'The_Stealth-Warrior' to 'TheStealthWarrior'", () => {
		expect(toCamelCase("The_Stealth-Warrior")).toBe("TheStealthWarrior");
	});
});
