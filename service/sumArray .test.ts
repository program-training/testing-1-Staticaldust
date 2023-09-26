import { describe, expect, test } from "vitest";
import { sumArray } from "./test";

const myarr = [5, 4, 3];
describe.concurrent("sum arr and check if reater than", () => {
  test("To sum arr", () => {
    expect(sumArray(myarr)).toBe(12);
  });
  test("does arr greater than?", () => {
    const example = 9;
    expect(sumArray(myarr)).toBeGreaterThan(example);
  });
});
