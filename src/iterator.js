// Iterable prototocl dictates that
// the object that conforms must have a method
// at key Symbol.iterator
const numberIterable = {
  numbers: [1, 2, 3, 4, 5, 6],
  index: 0,
  [Symbol.iterator]() {
    let index = 0;
    const nums = this.numbers;
    // must return an iterator
    // Iterator must support next method, and optionally
    // it can support return() and throw() as well.
    return {
      next() {
        // next must be returning IteratorResult object.
        if (index < nums.length) {
          return { value: nums[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

// Iterable protocol dictates that the object conforming to it
// must support a method at the key Symbol.iterator, that when called
// should return an iterator. Iterator conforms to a protocol called
// as Iterator. Iterator must support one method called as next. And
// next() must return an object conforming to IterationResult,
// {value: someValue, done: true/false}. If the value of done is flase there is no further ends

for (let i of numberIterable) {
  console.log(i);
}

for (let i of numberIterable) {
  console.log(i);
}

// const numIterator = numberIterable[Symbol.iterator]();
// while (true) {
//   const iteratorResult = numIterator.next();
//   if (iteratorResult.done) {
//     break;
//   }
//   console.log(iteratorResult.value);
// }
// An iterable must be a factory of iterator. Each time when requested, it should
// return a new iterator, and also the iterator instances must not share any state
// that is needed for iteration.
const newNumbers = [...numberIterable];
console.log(newNumbers);

//fib numbers upto 10

function createFibsIterable(upperBound = 10) {
  return {
    [Symbol.iterator]() {
      const fibs = [0, 1];
      let index = 0;
      return {
        next() {
          // next must be returning IteratorResult object.
          if (index === upperBound) {
            return { value: undefined, done: true };
          }
          if (index === 0 || index === 1) {
            return { value: fibs[index++], done: false };
          }
          const nextFib = fibs[0] + fibs[1];
          fibs[0] = fibs[1];
          fibs[1] = nextFib;
          index++;
          return { value: nextFib, done: false };
        },
      };
    },
  };
}

const fibsIterable = createFibsIterable();
for (let i of fibsIterable) {
  console.log(i);
}

// Generator functions
// simple functions arercreated using function keyword
// Generator functions are special, where we need to suffix the function keyword with *
// or you can prefix * with the function name.
function* generateNumbers() {}
