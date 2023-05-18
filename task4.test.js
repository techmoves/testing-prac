const capitalize = require("./task4");
test("Capitalized string passed", () => {
  expect(capitalize("HELLO")).toEqual("HELLO");
});
