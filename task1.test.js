// Test cases
const { stringLength } = require("./task1");

describe("stringLength", () => {
  it("returns the correct length for a non-empty string", () => {
    const input = "Hello";
    const result = stringLength(input);
    expect(result).toBe(5);
  });

  it("returns 0 for an empty string", () => {
    const input = "";
    const result = stringLength(input);
    expect(result).toBe(0);
  });

  it("returns the correct length for a string with special characters", () => {
    const input = "¡Hola";
    const result = stringLength(input);
    expect(result).toBe(5);
  });
});
