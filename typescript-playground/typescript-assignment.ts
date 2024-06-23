/**
 * Generates a Fibonacci series up to the given number of elements.
 *
 * The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones,
 * usually starting with 0 and 1.
 *
 * @param {number} num - The number of elements in the Fibonacci series to generate.
 * @returns {number[]} An array containing the Fibonacci series up to the specified number of elements.
 */
export function fibonacciGenerator(num: number): number[] {
  if (num <= 0) return [];
  if (num === 1) return [0];
  const fibonacciSeries: number[] = [0, 1];
  if (num === 2) return fibonacciSeries;
  for (let i = 2; i < num; i++) {
    fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
  }
  return fibonacciSeries;
}

/**
 * Applies a transformation function to each element in the input array and returns a new array with the transformed elements.
 *
 * @template Input, Output
 * @param {Input[]} items - The array of items to transform.
 * @param {(item: Input) => Output} transform - The transformation function to apply to each item.
 * @returns {Output[]} A new array with the transformed elements.
 */
export function map<Input, Output>(
  items: Input[],
  transform: (item: Input) => Output
): Output[] {
  const transformed: Output[] = [];
  for (let i = 0; i < items.length; i++) {
    transformed.push(transform(items[i]));
  }
  return transformed;
}

/**
 * Filters the elements of the input array based on the provided predicate function.
 *
 * @template Input
 * @param {Input[]} items - The array of items to filter.
 * @param {(item: Input) => boolean} predicate - The predicate function to determine which items to include.
 * @returns {Input[]} A new array with the items that pass the predicate function.
 */
export function filter<Input>(
  items: Input[],
  predicate: (item: Input) => boolean
): Input[] {
  const filtered: Input[] = [];
  for (let i = 0; i < items.length; i++) {
    if (predicate(items[i])) {
      filtered.push(items[i]);
    }
  }
  return filtered;
}

/**
 * Reduces the input array to a single value using the provided reducer function and initial value.
 *
 * @template Input, Output
 * @param {Input[]} items - The array of items to reduce.
 * @param {(accumulated: Output, item: Input) => Output} reducer - The reducer function to apply to each item.
 * @param {Output} initialValue - The initial value to start the reduction with.
 * @returns {Output} The reduced value.
 */
export function reduce<Input, Output>(
  items: Input[],
  reducer: (accumulated: Output, item: Input) => Output,
  initialValue: Output
): Output {
  let accumulated: Output = initialValue;
  for (let i = 0; i < items.length; i++) {
    accumulated = reducer(accumulated, items[i]);
  }
  return accumulated;
}

/**
 * Expectation interface for negative testing.
 *
 * @template T
 */
interface NotExpect<T> {
  /**
   * Checks that the value is not equal to the expected value.
   *
   * @param {T} expected - The value that the tested value should not be.
   * @throws {Error} If the value is equal to the expected value.
   */
  toBe: (expected: T) => void;
}

/**
 * Expectation interface for testing values.
 *
 * @template T
 */
interface Expect<T> {
  /**
   * Checks that the value is equal to the expected value.
   *
   * @param {T} expected - The value that the tested value should be.
   * @throws {Error} If the value is not equal to the expected value.
   */
  tobe: (expected: T) => void;

  /**
   * Provides a negative expectation.
   *
   * @type {NotExpect<T>}
   */
  not: NotExpect<T>;
}

/**
 * Creates an expectation object for testing values.
 *
 * @template T
 * @param {T} value - The value to test.
 * @returns {Expect<T>} The expectation object.
 */
export function expect<T>(value: T): Expect<T> {
  return {
    tobe: (expected: T) => {
      if (value !== expected) {
        throw new Error(`Expected ${value} to be ${expected}`);
      } else {
        return true;
      }
    },
    not: {
      toBe: (expected: T) => {
        if (value === expected) {
          throw new Error(`Expected ${value} to be ${expected}`);
        } else {
          return true;
        }
      },
    },
  };
}

/**
 * Represents a generic address.
 *
 * @interface Address
 */
export interface Address {
  doorNumber: number;
  stree1: string;
  stree2?: string;
  pincode: number;
  state: string;
  country: string;
}

/**
 * Represents an office address that extends the generic address.
 *
 * @interface OfficeAddress
 * @extends {Address}
 */
export interface OfficeAddress extends Address {
  website_link: string;
}
