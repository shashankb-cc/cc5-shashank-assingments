/**
 * @description An iterator object that iterates through the first 26 alphabets (A-Z).
 *
 * @property {number} currentAlphabet - The ASCII code of the current alphabet. Starts at 65 (A).
 *
 * @method next
 * @description Returns the next alphabet in the sequence as per the Iterator protocol.
 *
 * @returns {Object} An iterator result object containing:
 * - `value`: The current alphabet as a string.
 * - `done`: A boolean indicating if the iteration is complete.
 */
export const alphabetIteratorCreator = {
  currentAlphabet: 'A'.codePointAt(),

  next() {
    if (this.currentAlphabet <= "Z".codePointAt()) {
      return {
        value: String.fromCharCode(this.currentAlphabet++),
        done: false,
      };
    }
    return { value: undefined, done: true };
  },
};
/**
 * @description An iterable object that iterates through the first 26 alphabets (A-Z) using the Iterable protocol.
 *
 * @method [Symbol.iterator]
 * @description Returns an iterator for the iterable object.
 *
 * @returns {Object} An iterator object containing a `next` method that conforms to the Iterator protocol.
 */
export const alphabetIterable = {
  [Symbol.iterator]() {
    let currentAlphabet = "A".codePointAt();
    return {
      next() {
        if (currentAlphabet <= "Z".codePointAt()) {
          return { value: String.fromCharCode(currentAlphabet++), done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
