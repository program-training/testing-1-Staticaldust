import { expect, test } from "vitest";
import { strLength } from "./test";

test("adding", () => {
  const mystr: string = "hayush";
  expect(strLength(mystr)).toBe(6);
});
