const palindromes = require("./palindromes");

describe("palindromes", function() {
  it("works with single words", function() {
    expect(palindromes("racecar")).toEqual(true);
  });
  it("works with punctuation", function() {
    expect(palindromes("Racecar!")).toEqual(true);
  });
  it("works with multiple words", function() {
    expect(palindromes("A car, a man, a maraca.")).toEqual(true);
  });
  it("works with multiple words", function() {
    expect(
      palindromes("Animal loots foliated detail of stool lamina.")
    ).toEqual(true);
  });
  it("doesn't just always return true", function() {
    expect(palindromes("ZZZZ car, a man, a maraca.")).toEqual(false);
  });
  it("works with strange characters", function() {
    expect(palindromes("0_0 (: /- :) 0–0")).toEqual(true);
  });
});
