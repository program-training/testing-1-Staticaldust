import { expect, test } from "vitest";
import { polyndrom } from "./test";

test("To check if the string is polindrom", () => {
  const mystr: string = "abba";
  expect(polyndrom(mystr)).toBe(true);
});
