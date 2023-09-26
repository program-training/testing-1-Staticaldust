import { expect, test } from "vitest";
import { highSeder } from "./test";

test("To arrange the arr", () => {
  const myarr = [3, 4, 2];
  expect(highSeder(myarr)).toBe(myarr.sort((a, b) => a - b));
});
