describe("object assignment", () => {
	it("should check if an object match { one: 1, two: 2 }", () => {
		var data = { one: 1 };
		data["two"] = 2;
		expect(data).toEqual({ one: 1, two: 2 });
	});
});
