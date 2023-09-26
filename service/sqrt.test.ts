import { expect, test } from "vitest";
import { sqrt } from "./test";

test("To check if root exist and which number it is", () => {
  expect(sqrt(0)).toBe(`0 is a negative number`);
})
