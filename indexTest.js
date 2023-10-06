const { Formatter } = require('./helpers');

describe("Formatter", () => {
  describe("capitalize", () => {
    it("is a static method", () => {
      expect(() => {
        Formatter.capitalize("crocodile");
      }).not.toThrow();
    });

    it("uppercases the first letter in a String", () => {
      expect(Formatter.capitalize("a")).toBe("A");
      expect(Formatter.capitalize("alligator")).toBe("Alligator");
      expect(Formatter.capitalize("BURSTING BALLOON")).toBe("BURSTING BALLOON");
    });
  });

  describe("sanitize", () => {
    it("is a static method", () => {
      expect(() => {
        Formatter.sanitize("C catching colds");
      }).not.toThrow();
    });

    it("removes non-alphanumeric characters except for dash, single quote and space", () => {
      expect(Formatter.sanitize("c")).toBe("c");
      expect(Formatter.sanitize("!")).toBe("");
      expect(Formatter.sanitize("ca$@#tching cold")).toBe("catching cold");
      expect(Formatter.sanitize("Doin' Dishes")).toBe("Doin' Dishes");
      expect(Formatter.sanitize("Entert*ain(i{ng-Elephan^ts")).toBe("Entertaining-Elephants");
    });
  });

  describe("titleize", () => {
    it("is a static method", () => {
      expect(() => {
        Formatter.titleize("F forever foolish");
      }).not.toThrow();
    });

    it("capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'", () => {
      expect(Formatter.titleize("getting giggles")).toBe("Getting Giggles");
      expect(Formatter.titleize("where the wild things are")).toBe("Where the Wild Things Are");
      expect(Formatter.titleize("chicken soup with rice and a few other songs")).toBe("Chicken Soup With Rice and a Few Other Songs");
      expect(Formatter.titleize("Maurice a an but of and for at by from end")).toBe("Maurice a an but of and for at by from End");
    });

    it("always capitalizes the first word", () => {
      expect(Formatter.titleize("a tale of two cities")).toBe("A Tale of Two Cities");
      expect(Formatter.titleize("in the night kitchen")).toBe("In the Night Kitchen");
    });
  });
});