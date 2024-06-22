import { describe, test, expect } from "vitest";
import {
  HighLevelQuery,
  LowLevelQuery,
  processQuery,
} from "./function-overloading";

describe("processQuery", () => {
  test("high-level query returns shallow result", () => {
    const highLevelQuery: HighLevelQuery = { type: "high" };
    const result = processQuery(highLevelQuery);
    expect(result).toEqual({ shallow: true });
    expect(result).toBeInstanceOf(Object);
    expect("shallow" in result).toBe(true);
  });

  test("low-level query returns deep result", () => {
    const lowLevelQuery: LowLevelQuery = { type: "low" };
    const result = processQuery(lowLevelQuery);
    expect(result).toEqual({ deep: true });
    expect(result).toBeInstanceOf(Object);
    expect("deep" in result).toBe(true);
  });
});
