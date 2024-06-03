import { sum } from "../Sum";

test("Sum function should calculate the sum of two number", () => {
  const result = sum(3, 4);

  //Assertaion
  expect(result).toBe(7);
});
