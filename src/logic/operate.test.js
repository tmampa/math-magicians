import operate from "./operate";

describe("operate", () => {
  test('sum of 2 + 3 equals 5', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  test('subtraction of 2 - 3 equals -1', () => {
    expect(operate(2, 3, '-')).toBe('-1');
  });

  test('multiplication of 2 * 3 equals 6', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  test("division of 10 ÷ 5 equals 2", () => {
    expect(operate(10, 5, "÷")).toBe("2");
  });

  test("modulo of 10 % 5 equals 0", () => {
    expect(operate(10, 5, "%")).toBe("0");
  });

  test("division by zero throws error", () => {
    expect(() => {
      operate(10, 0, "÷");
    }).toThrow();
  });
});