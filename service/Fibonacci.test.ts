import { expect, test } from "vitest";
import { fibonacci } from "./test";

test("does fibonacci and next fibonacci number or ", () => {
  const fib = [0, 1, 1, 2, 3, 5, 8];
  expect(fibonacci(fib)).toBe(13);
});
