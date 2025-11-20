import { cuisines } from "../data/cuisines";

describe("cuisines data", () => {
  it("contains at least 10 cuisines", () => {
    expect(cuisines.length).toBeGreaterThanOrEqual(10);
  });

  it("has unique ids and required fields populated", () => {
    const ids = new Set<string>();
    cuisines.forEach((cuisine) => {
      expect(cuisine.id).toBeTruthy();
      expect(cuisine.name).toBeTruthy();
      expect(cuisine.shortDescription).toBeTruthy();
      expect(cuisine.imageUrl).toBeTruthy();
      expect(cuisine.ingredients.length).toBeGreaterThan(0);
      expect(cuisine.steps.length).toBeGreaterThan(0);
      expect(cuisine.totalTimeMinutes).toBeGreaterThan(0);
      expect(ids.has(cuisine.id)).toBe(false);
      ids.add(cuisine.id);
    });
  });
});
