/**
 * Finds the Fibonacci numbers at given indices.
 * @param {number[]} indexArray - Array of indices.
 * @returns {number[]} - Array of Fibonacci numbers corresponding to the indices.
 */
export function fibonacciNumbersAtIndices(indices) {
  /**
   * Calculates the Fibonacci number at a given index.
   * @param {number} index - Index to calculate Fibonacci number for.
   * @returns {number} - Fibonacci number at the given index.
   */
  function fibonacciNumberAtIndex(index) {
    if (index === 0) return 0;
    if (index === 1 || index === 2) return 1;
    let a = 0,
      b = 1;
    for (let i = 2; i <= index; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  return indices.map((index) => fibonacciNumberAtIndex(index));
}

/**
 * Generates an array of Fahrenheit temperatures from an array of Celsius temperatures.
 * @param {Object[]} poiArray - Array of objects with averageTemperature property in Celsius.
 * @returns {number[]} - Array of Fahrenheit temperatures.
 */
export function generateFahrenheitArray(poiArray) {
  /**
   * Converts Celsius temperature to Fahrenheit.
   * @param {number} celcius - Temperature in Celsius.
   * @returns {number} - Temperature in Fahrenheit.
   */
  function celciusToFareinheit(celcius) {
    return (celcius * 9) / 5 + 32;
  }

  return poiArray.map((place) => celciusToFareinheit(place.averageTemperature));
}

/**
 * Creates a function that checks if a number is less than or equal to a given cut-off value.
 * @param {number} cutOffValue - The cut-off value.
 * @returns {Function} - A function that takes a number as input and returns true if it is less than or equal to the cut-off value, otherwise false.
 */
export function createCutOff(cutOffValue) {
  return function (number) {
    return number <= cutOffValue;
  };
}

/**
 * Replaces occurrences of "CraftCode" with "CodeCraft" in an array of strings.
 * @param {string[]} stringArray - Array of strings.
 * @returns {string[]} - Array of strings with "CraftCode" replaced by "CodeCraft".
 */
export function replaceStringCraftCode(stringArray) {
  return stringArray.map((string) => string.replace("CraftCode", "CodeCraft"));
}

/**
 * Processes purchase quantity strings by adding 10 to quantities (except those with "4").
 * @param {string} string - String containing purchase information separated by newline characters.
 * @returns {string} - Processed string with modified quantities (adding 10 to the quantity).
 */
export function processPurachaseQuantity(string) {
  const linesArray = string.split("\n");
  const linesNotIncludes4 = linesArray.filter((line) => !line.includes("4"));

  const addedTenToQuantityString = linesNotIncludes4.map((line) => {
    const [item, quantity] = line.split(" ");
    const addTenToQuantity =
      quantity === "qty" ? quantity : parseInt(quantity) + 10;
    return `${item} ${addTenToQuantity}`;
  });
  const processedString = addedTenToQuantityString.join("\n");
  return processedString;
}

/**
 * Filters words from an array that contain either 'u' or 'g'.
 * @param {string[]} wordsArray - Array of words.
 * @returns {string[]} - Filtered array containing words with 'u' or 'g'.
 */
export function filterWordsWithUOrG(wordsArray) {
  return wordsArray.filter((word) => word.includes("u") || word.includes("g"));
}

/**
 * Filters words from an array that start with 'mang' or end with 'fy'.
 * @param {string[]} wordsArray - Array of words.
 * @returns {string[]} - Filtered array containing words starting with 'mang' or ending with 'fy'.
 */
export function filterWordsWithMangOrFy(wordsArray) {
  return wordsArray.filter(
    (word) => word.startsWith("mang") || word.endsWith("fy")
  );
}

/**
 * Adds 10 to each number in an array and filters out numbers not divisible by 4.
 * @param {number[]} numbers - Array of numbers.
 * @returns {number[]} - Filtered array containing numbers incremented by 10 and divisible by 4.
 */
export function addTenAndDivisibilityCheckByFour(numbers) {
  return numbers.map((item) => item + 10).filter((item) => item % 4 === 0);
}

/**
 * Finds email addresses in an array of strings and returns them in lowercase.
 * @param {string[]} addresses - Array of strings containing email addresses.
 * @returns {string[]} - Array of email addresses in lowercase.
 */
export function emailMatchFinder(addresses) {
  const mailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return addresses
    .map((ele) => {
      const matchedMail = ele.match(mailRegex) || [];
      return matchedMail.map((email) => email.toLowerCase());
    })
    .reduce((acc, emails) => acc.concat(emails), []);
}

/**
 * Extracts ages from an array of objects representing people.
 * @param {Object[]} listOfPeople - Array of objects representing people.
 * @returns {number[]} - Array of ages.
 */
export function getListOfAges(listOfPeople) {
  return listOfPeople.map((person) => person.age);
}

/**
 * GIves out foods not containing 'sugar'.
 * @param {Object[]} foods - Array of food objects.
 * @returns {string[]} - Array of food names not containing 'sugar'.
 */
export function getFoodNotContainsSugar(foods) {
  return foods
    .map((food) =>
      Object.values(food)[0].includes("sugar") ? false : Object.keys(food)[0]
    )
    .filter((food) => food !== false);
}

/**
 * Gives out foods containing 'chilli' and 'oil'.
 * @param {Object[]} foods - Array of food objects.
 * @returns {string[]} - Array of food names containing both 'chilli' and 'oil'.
 */
export function getFoodsWithChilliAndOil(foods) {
  return foods
    .map((food) =>
      Object.values(food)[0].includes("chilli") &&
      Object.values(food)[0].includes("oil")
        ? Object.keys(food)[0]
        : false
    )
    .filter((food) => food !== false);
}

/**
 * Determines if a food is 'safe' or 'unsafe' based on whether it contains sugar or not.
 * @param {Object[]} foods - Array of food objects.
 * @returns {Object[]} - Array of food objects with safety status.
 */
export function findFoodSafeOrUnsafe(foods) {
  return foods.map((food) => {
    const mainFood = Object.keys(food)[0];
    const ingredients = Object.values(food)[0];
    return { [mainFood]: ingredients.includes("sugar") ? "unsafe" : "safe" };
  });
}

/**
 * Finds the second largest number in an array of numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {(number|string)} - The second largest number in the array
 */
export function getSecondLargestNumber(numbers) {
  let largest = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;
  numbers.forEach(function (number) {
    if (number > largest) {
      secondLargest = largest;
      largest = number;
    } else if (number > secondLargest && number < largest) {
      secondLargest = number;
    }
  });
  return secondLargest;
}

/**
 * Finds the second largest element in an array using reduce.
 * @param {number[]} nums - The array of numbers.
 * @returns {(number|string)} - The second largest number in the array
 */
export function getSecondLargestElementWithReduce(nums) {
  const [largest, secondLargest] = nums.reduce(
    ([largest, secondLargest], number) => {
      if (number > largest) {
        return [number, largest];
      }
      if (number > secondLargest && number < largest) {
        return [largest, number];
      }
      return [largest, secondLargest];
    },
    [Number.MIN_VALUE, Number.MIN_VALUE] // Initial values
  );
  return secondLargest;
}

/**
 * Checks if any item in the array satisfies the given predicate.
 * @param {Array} items - The array of items.
 * @param {Function} predicate - The predicate function to test each item.
 * @returns {boolean} - True if any item satisfies the predicate, false otherwise.
 */
export function some(items, predicate) {
  for (let i = 0; i < items.length; i++) {
    if (predicate(items[i])) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if any item in the array satisfies the given predicate using reduce.
 * @param {Array} items - The array of items.
 * @param {Function} predicate - The predicate function to test each item.
 * @returns {boolean} - True if any item satisfies the predicate, false otherwise.
 */
export function someWithReduce(items, predicate) {
  return items.reduce((acc, item) => {
    if (predicate(item)) {
      acc = true;
    }
    return acc;
  }, false);
}

/**
 * Groups quotes by author.
 * @param {Array} authors - Array of objects containing author quotes and name properties.
 * @returns {Object} - Object where keys are author names and values are arrays of their quotes.
 */
export function getAuthorandThierQuotes(authors) {
  return authors.reduce((authorsList, currentAuthor) => {
    if (authorsList[currentAuthor.author]) {
      if (!authorsList[currentAuthor.author].includes(currentAuthor.text)) {
        authorsList[currentAuthor.author].push(currentAuthor.text);
      }
    } else {
      authorsList[currentAuthor.author] = [currentAuthor.text];
    }
    return authorsList;
  }, {});
}

/**
 * Filters quotes containing a specific word.
 * @param {Array} authors - Array of objects containing author quotes and name properties.
 * @param {string} word - The word to search for in the quotes.
 * @returns {Array} - Array of quotes containing the specified word.
 */
export function getQuotesContainingWord(authors, word) {
  return authors.reduce((quoteList, currentAuthor) => {
    if (currentAuthor.text.toLowerCase().includes(word.toLowerCase())) {
      quoteList.push(currentAuthor.text);
    }
    return quoteList;
  }, []);
}

/**
 * Gets an array containing all quotes without duplicates.
 * @param {Array} authors - Array of objects containing author quotes and name properties.
 * @returns {Array} - Array of all quotes without duplicates.
 */
export function getTheArrayOfAllQuotes(authors) {
  return authors.reduce((quoteList, currentAuthor) => {
    if (!quoteList.includes(currentAuthor.text)) {
      quoteList.push(currentAuthor.text);
    }
    return quoteList;
  }, []);
}

/**
 * Removes duplicate author names from an array of objects.
 * @param {Array} authors - Array of objects containing author quotes and name properties.
 * @returns {Array} - Array of unique author names.
 */
export function removeDuplicateAuthorsName(authors) {
  return authors.reduce((authorsList, currentAuthor) => {
    if (!authorsList.includes(currentAuthor.author)) {
      authorsList.push(currentAuthor.author);
    }
    return authorsList;
  }, []);
}

/**
 * Calculates the total salary paid to employees under 30 years old.
 * @param {Array} employees - Array of objects containing firstName ,lastName, email, age and salary  properties.
 * @returns {number} - Total salary paid to employees under 30.
 */
export function totalSalaryPaidToEmployees(employees) {
  return employees.reduce((totalSalary, currentEmployee) => {
    if (currentEmployee.age < 30) {
      totalSalary = totalSalary + currentEmployee.salary;
    }
    return totalSalary;
  }, 0);
}

/**
 * Constructs an array of full names from an array of employee objects.
 * @param {Array} employees - Array of objects containing firstName ,lastName, email, age and salary  properties.
 * @returns {Array} - Array of full names of employees.
 */
export function getFullNameOfEmployees(employees) {
  return employees.reduce((fullNameList, currentEmployee) => {
    fullNameList.push(
      currentEmployee.firstName + " " + currentEmployee.lastName
    );
    return fullNameList;
  }, []);
}

/**
 * Constructs a string containing all email addresses separated by comma and space.
 * @param {Array} employees - Array of objects containing firstName ,lastName, email, age and salary  properties.
 * @returns {string} - String containing all email addresses.
 */
export function getStringContainingAllEmails(employees) {
  return employees.reduce((emailString, currentEmployee, index) => {
    if (index === employees.length - 1) {
      return emailString + currentEmployee.email;
    } else {
      return emailString + currentEmployee.email + ", ";
    }
  }, "");
}

/**
 * Finds the fruit or nut with the highest nutrition content for each nutrient.
 * @param {Array} fruitsAndNuts - An array of objects representing fruits or nuts, each containing nutritional information.
 * @returns {Object} An object containing a key for each nutrient, and the value is the name of the fruit or nut with the highest content of that nutrient.
 */
export function findFruitOrNutWithHighestNutrition(fruitsAndNuts) {
  let nutritionValues = {};
  return fruitsAndNuts.reduce((nutritionAndFruit, currentFruit) => {
    Object.entries(currentFruit.nutritions).forEach(([key, value]) => {
      if (Object.keys(nutritionAndFruit).includes(key)) {
        if (value > nutritionValues[key]) {
          nutritionAndFruit[key] = currentFruit.name;
          nutritionValues[key] = value;
        }
      } else {
        nutritionAndFruit[key] = currentFruit.name;
        nutritionValues[key] = value;
      }
    });
    return nutritionAndFruit;
  }, {});
}

/**
 * Retrieves an array of unique nutrition types from an array of fruits.
 * @param {Array<Object>} fruitsAndNuts - An array of fruit objects, each containing nutrition information.
 * @returns {Array<string>} - An array containing unique nutrition types present in the provided fruits.
 */
export function getArrayOfUniqueNutritions(fruitsAndNuts) {
  return fruitsAndNuts.reduce((arrayWithFruitsAndNuts, currentFruit) => {
    Object.keys(currentFruit.nutritions).map((nutrition) => {
      if (!arrayWithFruitsAndNuts.includes(nutrition)) {
        arrayWithFruitsAndNuts.push(nutrition);
      }
    });
    return arrayWithFruitsAndNuts;
  }, []);
}

/**
 * Retrieves an array of unique health conditions treated by the given fruits.
 * @param {Array<Object>} fruitsAndNuts - An array of fruit objects, each containing health condition treatment information.
 * @returns {Array<string>} - An array containing unique health conditions treated by the provided fruits.
 */
export function getArrayOfUniqueHealthConditions(fruitsAndNuts) {
  return fruitsAndNuts.reduce((arrayWithHeathCondition, currentFruit) => {
    currentFruit.treats.map((treat) => {
      if (!arrayWithHeathCondition.includes(treat)) {
        arrayWithHeathCondition.push(treat);
      }
    });
    return arrayWithHeathCondition;
  }, []);
}

/**
 * Retrieves an array containing common health conditions treated by all nut fruits.
 * @param {Array<Object>} fruitsAndNuts - An array of fruit objects containing health condition treatment information.
 * @returns {Array<string>} - An array containing common health conditions treated by all nut fruits.
 */
export function getArrayOfCommonHealthConditions(fruitsAndNuts) {
  return fruitsAndNuts
    .filter((fruitInfo) => fruitInfo.type === "nut")
    .map((fruitTreat) => fruitTreat.treats)
    .reduce((commonTreats, currentTreats) => {
      if (commonTreats.length === 0) {
        return currentTreats;
      }
      return commonTreats.filter((treat) => currentTreats.includes(treat));
    }, []);
}
/**
 * Modifies an array of fruit and nut objects by adding a 'totalNutrition' property to each object,
 * representing the total number of nutritional values present in the 'nutritions' object.
 * @param {Array<Object>} fruitsAndNuts - An array of fruit and nut objects containing nutritional information.
 * @returns {Array<Object>} - The modified array of fruit and nut objects with the 'totalNutrition' property added.
 */
export function modifiedFruitsAndNutsArray(fruitsAndNuts) {
  return fruitsAndNuts.map((fruitOrNut) => {
    fruitOrNut.totalNutrition = Object.values(fruitOrNut.nutritions).length;
    return fruitOrNut;
  });
}

export function getTotalNutritionValueOfAll(fruitsAndNuts) {}

/**
 * Retrieves an array of names of fruits and nuts that treat bone issues.
 * @param {Array<Object>} fruitsAndNuts - An array of fruit and nut objects containing health condition treatment information.
 * @returns {Array<string>} - An array containing names of fruits and nuts that treat bone issues.
 */
export function fruitsOrNutsSolvingBoneIssue(fruitsAndNuts) {
  return fruitsAndNuts
    .filter((fruitOrNut) =>
      Object.values(fruitOrNut.treats).includes("bone issues")
    )
    .map((fruitObject) => fruitObject.name);
}

/**
 * Retrieves the name(s) of the fruit(s) or nut(s) with the maximum number of nutrition types.
 * @param {Array<Object>} fruitAndNutArray - An array of fruit and nut objects containing nutritional information.
 * @returns {Array<string>} - An array containing the name(s) of the fruit(s) or nut(s) with the maximum number of nutrition types.
 */
export function fruitOrNutWithMaximumNutritionTypes(fruitAndNutArray) {
  let largest = 0;
  return modifiedFruitsAndNutsArray(fruitAndNutArray).reduce(
    (maxNutritionFruit, currentFruitOrNut) => {
      if (currentFruitOrNut.totalNutrition >= largest) {
        largest = currentFruitOrNut.totalNutrition;
        maxNutritionFruit.push(currentFruitOrNut.name);
      }
      return maxNutritionFruit;
    },
    []
  );
}
