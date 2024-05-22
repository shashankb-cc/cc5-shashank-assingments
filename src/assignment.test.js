import { afterAll, beforeEach, describe, expect, test } from "vitest";
import {
  fibonacciNumbersAtIndices,
  generateFahrenheitArray,
  createCutOff,
  replaceStringCraftCode,
  processPurachaseQuantity,
  filterWordsWithUOrG,
  filterWordsWithMangOrFy,
  addTenAndDivisibilityCheckByFour,
  emailMatchFinder,
  getListOfAges,
  getFoodNotContainsSugar,
  getFoodsWithChilliAndOil,
  findFoodSafeOrUnsafe,
  getSecondLargestNumber,
  getSecondLargestElementWithReduce,
  getAuthorandThierQuotes,
  getQuotesContainingWord,
  getTheArrayOfAllQuotes,
  removeDuplicateAuthorsName,
  some,
  someWithReduce,
  totalSalaryPaidToEmployees,
  getFullNameOfEmployees,
  getStringContainingAllEmails,
  findFruitOrNutWithHighestNutrition,
  getArrayOfUniqueNutritions,
  getArrayOfUniqueHealthConditions,
  getArrayOfCommonHealthConditions,
  modifiedFruitsAndNutsArray,
  fruitsOrNutsSolvingBoneIssue,
  fruitOrNutWithMaximumNutritionTypes,
  getTotalNutritionValueOfAll,
  findMigraineSolversWithVitamins,
  findLowestCarbFruitOrNut,
  totalProteinIntake,
  totalVitaminsIntakeWithoutSugarNutrition,
  getOddEvenNumbersSum,
  calculateSumOfOddAndEven,
  generateAlphabets,
  generateAlphabetObject,
  getAllActorsName,
  getThreeMoviesPerYear,
  trimUsingCompose,
  trimUsingPipe,
} from "./assignment";

// Tests for question 1 and 2

describe("Assignement questions tests ", () => {
  // Test block for finding Fibonacci numbers at index
  test("Finding fibonacci numbers at index tests", () => {
    expect(fibonacciNumbersAtIndices([2, 1, 5, 7])).toEqual([1, 1, 5, 13]);
    expect(fibonacciNumbersAtIndices([0])).toEqual([0]);
    expect(fibonacciNumbersAtIndices([1])).toEqual([1]);
    expect(
      fibonacciNumbersAtIndices([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    ).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
  });

  // Test block for converting average temperature to Fahrenheit
  test("Average Temp into Fahrenheit units test", () => {
    const poiArray = [
      {
        placeName: "Paris",
        famousFor: "Eiffel Tower",
        averageTemperature: 15.6,
      },
      {
        placeName: "New York City",
        famousFor: "Statue of Liberty",
        averageTemperature: 12.8,
      },
      {
        placeName: "Tokyo",
        famousFor: "Sushi",
        averageTemperature: 16.2,
      },
      {
        placeName: "Rio de Janeiro",
        famousFor: "Carnival",
        averageTemperature: 24.5,
      },
      {
        placeName: "Sydney",
        famousFor: "Sydney Opera House",
        averageTemperature: 21.3,
      },
      {
        placeName: "Cairo",
        famousFor: "Pyramids of Giza",
        averageTemperature: 25.7,
      },
      {
        placeName: "Rome",
        famousFor: "Colosseum",
        averageTemperature: 19.8,
      },
      {
        placeName: "Cape Town",
        famousFor: "Table Mountain",
        averageTemperature: 17.2,
      },
      {
        placeName: "Bali",
        famousFor: "Beaches",
        averageTemperature: 27.9,
      },
      {
        placeName: "Machu Picchu",
        famousFor: "Inca Ruins",
        averageTemperature: 14.1,
      },
    ];
    expect(generateFahrenheitArray(poiArray)).toEqual([
      60.08, 55.04, 61.16, 76.1, 70.34, 78.25999999999999, 67.64,
      62.959999999999994, 82.22, 57.379999999999995,
    ]);
  });
});

// Tests for Higher order function assignment
describe("Higher order function assignment", () => {
  // Test block for createCutOff function
  test("HOF for cutOffValue function", () => {
    const cutOff100 = createCutOff(100);
    expect(cutOff100(89)).toBe(true);
    expect(cutOff100(189)).toBe(false);
  });

  // Test block for replaceStringCraftCode function which replaces CraftCode with Codecraft
  test("HOF for replacing string in a Array", () => {
    const strings = [
      "CraftCode is a nice company",
      "We love CraftCode",
      "We are working  CraftCode",
      "Where is CraftCode?",
    ];
    const replacedStringArray = replaceStringCraftCode(strings);
    expect(replacedStringArray).toEqual([
      "CodeCraft is a nice company",
      "We love CodeCraft",
      "We are working  CodeCraft",
      "Where is CodeCraft?",
    ]);
  });

  //Test block for processing the quantity and ADDING 10 to them
  test("Processing the string tests", () => {
    const purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10`;

    expect(processPurachaseQuantity(purchases)).toEqual(`items qty
mango 60
onion 41
water 20`);
  });

  // Test block for filterWordsWithUOrG function
  test("Words with u or g test", () => {
    const items = ["browl", "faaast", "energy", "stand", "eat", "lunch"];
    expect(filterWordsWithUOrG(items)).toEqual(["energy", "lunch"]);
  });

  // Test block for filterWordsWithMangOrFy function
  test("Words starts with mang or ends with fy", () => {
    let items = [
      "mangalore",
      "semangin",
      "2 lonely",
      "verify",
      "rectify",
      "mangala",
      "notifyy",
    ];
    expect(filterWordsWithMangOrFy(items)).toEqual([
      "mangalore",
      "verify",
      "rectify",
      "mangala",
    ]);
  });

  // Test block for addTenAndDivisibilityCheckByFour function
  test("Add ten and Divisibility check by Four test", () => {
    const numbers = [34, 45, 2, 53, 84, 542, 31, 23];
    expect(addTenAndDivisibilityCheckByFour(numbers)).toEqual([44, 12, 552]);
  });

  // Test block for finding Fibonacci numbers at index
  test("Finding fibonacci numbers at index tests", () => {
    expect(fibonacciNumbersAtIndices([2, 1, 5, 7])).toEqual([1, 1, 5, 13]);
    expect(fibonacciNumbersAtIndices([0])).toEqual([0]);
    expect(fibonacciNumbersAtIndices([1])).toEqual([1]);
    expect(
      fibonacciNumbersAtIndices([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    ).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
  });

  // Test block for emailMatchFinder function
  test("Find emails in adresses test", () => {
    const addresses = [
      "34, brighten street, email: BS@sft.com",
      "Behind hotel paragon, rode street, micHel@sun.it",
      "ulef court, cown street, email:cown@street",
      "CodeCraft",
    ];
    expect(emailMatchFinder(addresses)).toEqual([
      "bs@sft.com",
      "michel@sun.it",
    ]);
  });

  // Test block for getListOfAges function
  test("Get the list of ages from a list", () => {
    const people = [
      {
        name: "John",
        age: 13,
      },
      {
        name: "Mark",
        age: 56,
      },
      {
        name: "Rachel",
        age: 45,
      },
      {
        name: "Nate",
        age: 67,
      },
      {
        name: "Jeniffer",
        age: 65,
      },
    ];
    expect(getListOfAges(people)).toEqual([13, 56, 45, 67, 65]);
  });

  // Test block for getFoodNotContainsSugar, getFoodsWithChilliAndOil, and findFoodSafeOrUnsafe functions
  test("Testing foods for specific ingridient tests", () => {
    const foods = [
      { idli: ["rice", "urad", "oil", "cashew", "water"] },
      { chapathi: ["atta", "gluten", "water", "oil", "sugar"] },
      { pizza: ["maida", "sugar", "oil", "chilli", "flakes", "sause"] },
      { "paneer masala": ["paneer", "onion", "tomato", "garlic", "oil"] },
    ];

    expect(getFoodNotContainsSugar(foods)).toEqual(["idli", "paneer masala"]);
    expect(getFoodsWithChilliAndOil(foods)).toEqual(["pizza"]);
    expect(findFoodSafeOrUnsafe(foods)).toEqual([
      { idli: "safe" },
      { chapathi: "unsafe" },
      { pizza: "unsafe" },
      { "paneer masala": "safe" },
    ]);
  });

  //Test block to find the second largest number in an array using forEach
  test("Second largest number using forEach", () => {
    const numbers = [15, 99, 45, 0, 52, 56, 85, 45, 96, 98, 23, 1];
    expect(getSecondLargestNumber(numbers)).toBe(98);
  });

  //Test block to find the second largest number in an array using reduce method
  test("Second largest number using reduce", () => {
    const numbers = [15, 99, 45, 0, 52, 56, 85, 45, 96, 98, 23, 1];
    expect(getSecondLargestElementWithReduce(numbers)).toBe(98);
  });

  //Test block to test the some function with and without using reduce
  test("Tests on some function", () => {
    const isEven = (x) => x % 2 === 0;
    const numbers = [4, 5, 6, 8, 9, 3];
    const oddNumbers = [5, 7, 9];
    expect(some(numbers, isEven)).toBe(true);
    expect(some(oddNumbers, isEven)).toBe(false);

    expect(someWithReduce(numbers, isEven)).toBe(true);
    expect(someWithReduce(oddNumbers, isEven)).toBe(false);
  });

  //Test block group authors and thier quotes
  test("Authors and thier quoutes test", () => {
    const authors = [
      {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
      },
      {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra",
      },
      {
        text: "To invent, you need a good imagination and a pile of junk",
        author: "Thomas Edison",
      },
      {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Yogi Berra",
      },
      {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer",
      },
      {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu",
      },
      {
        text: "Nothing happens unless first we dream.",
        author: "Byron Pulsifer",
      },
      {
        text: "Well begun is half done.",
        author: "Aristotle",
      },
      {
        text: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra",
      },
      {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster",
      },
      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
      {
        text: "What you give is what you get.",
        author: "Byron Pulsifer",
      },
      {
        text: "We can only learn to love by loving.",
        author: "Lao Tzu",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
    ];

    expect(getAuthorandThierQuotes(authors)).toEqual({
      "Thomas Edison": [
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "To invent, you need a good imagination and a pile of junk",
      ],
      "Yogi Berra": [
        "You can observe a lot just by watching.",
        "Difficulties increase the nearer we get to the goal.",
        "Life is a learning experience, only if you learn.",
      ],
      "Byron Pulsifer": [
        "Fate is in your hands and no one elses",
        "Nothing happens unless first we dream.",
        "What you give is what you get.",
      ],
      "Lao Tzu": [
        "Be the chief but never the lord.",
        "We can only learn to love by loving.",
      ],
      Aristotle: ["Well begun is half done."],
      "Margaret Sangster": ["Self-complacency is fatal to progress."],
      Buddha: [
        "Peace comes from within. Do not seek it without.",
        "You'll see it when you believe it.",
      ],
      "Karen Clark": ["Life is change. Growth is optional. Choose wisely."],
    });
  });

  //Test block for finding a quotes containig specfic word
  test("Get the quotes containing a specific word", () => {
    const authors = [
      {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
      },
      {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra",
      },
      {
        text: "To invent, you need a good imagination and a pile of junk",
        author: "Thomas Edison",
      },
      {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Yogi Berra",
      },
      {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer",
      },
      {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu",
      },
      {
        text: "Nothing happens unless first we dream.",
        author: "Byron Pulsifer",
      },
      {
        text: "Well begun is half done.",
        author: "Aristotle",
      },
      {
        text: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra",
      },
      {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster",
      },
      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
      {
        text: "What you give is what you get.",
        author: "Byron Pulsifer",
      },
      {
        text: "We can only learn to love by loving.",
        author: "Lao Tzu",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
    ];
    expect(getQuotesContainingWord(authors, "is")).toEqual([
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "Fate is in your hands and no one elses",
      "Well begun is half done.",
      "Life is a learning experience, only if you learn.",
      "Self-complacency is fatal to progress.",
      "Life is change. Growth is optional. Choose wisely.",
      "What you give is what you get.",
      "Life is change. Growth is optional. Choose wisely.",
    ]);
    expect(getQuotesContainingWord(authors, "Genius")).toEqual([
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    ]);
  });

  //Test block to get array contaning all quotes
  test("Get array of all quotes", () => {
    const authors = [
      {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
      },
      {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra",
      },
      {
        text: "To invent, you need a good imagination and a pile of junk",
        author: "Thomas Edison",
      },
      {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Yogi Berra",
      },
      {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer",
      },
      {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu",
      },
      {
        text: "Nothing happens unless first we dream.",
        author: "Byron Pulsifer",
      },
      {
        text: "Well begun is half done.",
        author: "Aristotle",
      },
      {
        text: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra",
      },
      {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster",
      },
      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
      {
        text: "What you give is what you get.",
        author: "Byron Pulsifer",
      },
      {
        text: "We can only learn to love by loving.",
        author: "Lao Tzu",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
    ];
    expect(getTheArrayOfAllQuotes(authors)).toEqual([
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "You can observe a lot just by watching.",
      "To invent, you need a good imagination and a pile of junk",
      "Difficulties increase the nearer we get to the goal.",
      "Fate is in your hands and no one elses",
      "Be the chief but never the lord.",
      "Nothing happens unless first we dream.",
      "Well begun is half done.",
      "Life is a learning experience, only if you learn.",
      "Self-complacency is fatal to progress.",
      "Peace comes from within. Do not seek it without.",
      "Life is change. Growth is optional. Choose wisely.",
      "You'll see it when you believe it.",
      "What you give is what you get.",
      "We can only learn to love by loving.",
    ]);
  });

  //Test block to get the list of authors
  test("Get the list of authors without being repeated", () => {
    const authors = [
      {
        text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison",
      },
      {
        text: "You can observe a lot just by watching.",
        author: "Yogi Berra",
      },
      {
        text: "To invent, you need a good imagination and a pile of junk",
        author: "Thomas Edison",
      },
      {
        text: "Difficulties increase the nearer we get to the goal.",
        author: "Yogi Berra",
      },
      {
        text: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer",
      },
      {
        text: "Be the chief but never the lord.",
        author: "Lao Tzu",
      },
      {
        text: "Nothing happens unless first we dream.",
        author: "Byron Pulsifer",
      },
      {
        text: "Well begun is half done.",
        author: "Aristotle",
      },
      {
        text: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra",
      },
      {
        text: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster",
      },
      {
        text: "Peace comes from within. Do not seek it without.",
        author: "Buddha",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
      {
        text: "What you give is what you get.",
        author: "Byron Pulsifer",
      },
      {
        text: "We can only learn to love by loving.",
        author: "Lao Tzu",
      },
      {
        text: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark",
      },
      {
        text: "You'll see it when you believe it.",
        author: "Buddha",
      },
    ];
    expect(removeDuplicateAuthorsName(authors)).toEqual([
      "Thomas Edison",
      "Yogi Berra",
      "Byron Pulsifer",
      "Lao Tzu",
      "Aristotle",
      "Margaret Sangster",
      "Buddha",
      "Karen Clark",
    ]);
  });

  //Test block to find the total salary paid to employees below 30
  test("Total salary paid to employees below age 30", () => {
    let employees = [
      {
        firstName: "Molly",
        lastName: "Rojas",
        age: 38,
        email: "mollyrojas@plasmox.com",
        salary: 3065,
      },
      {
        firstName: "Marguerite",
        lastName: "Santiago",
        age: 27,
        email: "margueritesantiago@plasmox.com",
        salary: 2796,
      },
      {
        firstName: "Evelyn",
        lastName: "Oneil",
        age: 26,
        email: "evelynoneil@plasmox.com",
        salary: 3947,
      },
      {
        firstName: "Consuelo",
        lastName: "Case",
        age: 23,
        email: "consuelocase@plasmox.com",
        salary: 2819,
      },
      {
        firstName: "Earline",
        lastName: "Bush",
        age: 29,
        email: "earlinebush@plasmox.com",
        salary: 3494,
      },
      {
        firstName: "Sanford",
        lastName: "Hurley",
        age: 26,
        email: "sanfordhurley@plasmox.com",
        salary: 3068,
      },
      {
        firstName: "Todd",
        lastName: "Gomez",
        age: 33,
        email: "toddgomez@plasmox.com",
        salary: 3906,
      },
    ];
    expect(totalSalaryPaidToEmployees(employees)).toBe(16124);
  });

  //Test block to get the full name of employees
  test("Get the full name of employees", () => {
    let employees = [
      {
        firstName: "Molly",
        lastName: "Rojas",
        age: 38,
        email: "mollyrojas@plasmox.com",
        salary: 3065,
      },
      {
        firstName: "Marguerite",
        lastName: "Santiago",
        age: 27,
        email: "margueritesantiago@plasmox.com",
        salary: 2796,
      },
      {
        firstName: "Evelyn",
        lastName: "Oneil",
        age: 26,
        email: "evelynoneil@plasmox.com",
        salary: 3947,
      },
      {
        firstName: "Consuelo",
        lastName: "Case",
        age: 23,
        email: "consuelocase@plasmox.com",
        salary: 2819,
      },
      {
        firstName: "Earline",
        lastName: "Bush",
        age: 29,
        email: "earlinebush@plasmox.com",
        salary: 3494,
      },
      {
        firstName: "Sanford",
        lastName: "Hurley",
        age: 26,
        email: "sanfordhurley@plasmox.com",
        salary: 3068,
      },
      {
        firstName: "Todd",
        lastName: "Gomez",
        age: 33,
        email: "toddgomez@plasmox.com",
        salary: 3906,
      },
    ];
    expect(getFullNameOfEmployees(employees)).toEqual([
      "Molly Rojas",
      "Marguerite Santiago",
      "Evelyn Oneil",
      "Consuelo Case",
      "Earline Bush",
      "Sanford Hurley",
      "Todd Gomez",
    ]);
  });

  //Test block to get the string containig  emails of all employees
  test("Get a string containing all emails of employee", () => {
    let employees = [
      {
        firstName: "Molly",
        lastName: "Rojas",
        age: 38,
        email: "mollyrojas@plasmox.com",
        salary: 3065,
      },
      {
        firstName: "Marguerite",
        lastName: "Santiago",
        age: 27,
        email: "margueritesantiago@plasmox.com",
        salary: 2796,
      },
      {
        firstName: "Evelyn",
        lastName: "Oneil",
        age: 26,
        email: "evelynoneil@plasmox.com",
        salary: 3947,
      },
      {
        firstName: "Consuelo",
        lastName: "Case",
        age: 23,
        email: "consuelocase@plasmox.com",
        salary: 2819,
      },
      {
        firstName: "Earline",
        lastName: "Bush",
        age: 29,
        email: "earlinebush@plasmox.com",
        salary: 3494,
      },
      {
        firstName: "Sanford",
        lastName: "Hurley",
        age: 26,
        email: "sanfordhurley@plasmox.com",
        salary: 3068,
      },
      {
        firstName: "Todd",
        lastName: "Gomez",
        age: 33,
        email: "toddgomez@plasmox.com",
        salary: 3906,
      },
    ];
    expect(getStringContainingAllEmails(employees)).toEqual(
      "mollyrojas@plasmox.com, margueritesantiago@plasmox.com, evelynoneil@plasmox.com, consuelocase@plasmox.com, earlinebush@plasmox.com, sanfordhurley@plasmox.com, toddgomez@plasmox.com"
    );
  });
});
describe("Tests for Question 15", () => {
  let fruits;
  beforeEach(() => {
    fruits = [
      {
        name: "Banana",
        type: "fruit",
        treats: [
          "constipation",
          "vitamin deficiency",
          "skin issues",
          "sleep problems",
        ],
        nutritions: {
          protein: 8,
          carbs: 40,
          sugar: 30,
          vitamins: 45,
        },
      },
      {
        name: "Badam",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "sugar"],
        nutritions: {
          protein: 18,
          carbs: 20,
          sugar: 20,
          vitamins: 65,
        },
      },
      {
        name: "Cashew",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: {
          protein: 22,
          carbs: 22,
          vitamins: 60,
        },
      },
      {
        name: "Wallnut",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: {
          protein: 33,
          carbs: 26,
          vitamins: 64,
        },
      },
      {
        name: "Apple",
        type: "fruit",
        treats: ["heart problems", "skin issues", "bone issues", "migraine"],
        nutritions: {
          protein: 22,
          carbs: 22,
          vitamins: 60,
        },
      },
    ];
  });
  afterAll(() => {
    fruits = null;
  });
  //Test block for findFruitOrNutWithHighestNutritio
  test("Object with nutrition and fruit or nut containing highest of that nutrition", () => {
    expect(findFruitOrNutWithHighestNutrition(fruits)).toEqual({
      carbs: "Banana",
      protein: "Wallnut",
      sugar: "Banana",
      vitamins: "Badam",
    });
  });

  //Test block for unique nutrition values
  test("Array with unique nutrition values", () => {
    expect(getArrayOfUniqueNutritions(fruits)).toEqual([
      "protein",
      "carbs",
      "sugar",
      "vitamins",
    ]);
  });

  //Test block fpr unique health traits
  test("Array with unique health conditions ", () => {
    expect(getArrayOfUniqueHealthConditions(fruits)).toEqual([
      "constipation",
      "vitamin deficiency",
      "skin issues",
      "sleep problems",
      "bp",
      "protein deficiency",
      "sugar",
      "bone issues",
      "heart problems",
      "migraine",
    ]);
  });

  //Test block for getting common health traits among the nuts
  test("Get common health traits cured by nuts", () => {
    expect(getArrayOfCommonHealthConditions(fruits)).toEqual([
      "bp",
      "protein deficiency",
      "skin issues",
    ]);
  });

  //Test block for modified fruitAndNutArray
  test("Get modified fruitAndNutArray with key called totalNutrition", () => {
    expect(modifiedFruitsAndNutsArray(fruits)).toEqual([
      {
        name: "Banana",
        type: "fruit",
        treats: [
          "constipation",
          "vitamin deficiency",
          "skin issues",
          "sleep problems",
        ],
        nutritions: { protein: 8, carbs: 40, sugar: 30, vitamins: 45 },
        totalNutrition: 123,
      },
      {
        name: "Badam",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "sugar"],
        nutritions: { protein: 18, carbs: 20, sugar: 20, vitamins: 65 },
        totalNutrition: 123,
      },
      {
        name: "Cashew",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
        totalNutrition: 104,
      },
      {
        name: "Wallnut",
        type: "nut",
        treats: ["bp", "protein deficiency", "skin issues", "bone issues"],
        nutritions: { protein: 33, carbs: 26, vitamins: 64 },
        totalNutrition: 123,
      },
      {
        name: "Apple",
        type: "fruit",
        treats: ["heart problems", "skin issues", "bone issues", "migraine"],
        nutritions: { protein: 22, carbs: 22, vitamins: 60 },
        totalNutrition: 104,
      },
    ]);
  });

  //Test block for total nutrition values
  test("Test block for total nutrition of fruits and nuts", () => {
    expect(getTotalNutritionValueOfAll(fruits)).toEqual({
      fruits: { protein: 30, carbs: 62, sugar: 30, vitamins: 105 },
      nuts: { protein: 73, carbs: 68, sugar: 20, vitamins: 189 },
    });
  });

  //Test block for which treats bone issue
  test("Fruits or nuts that solves bone issue", () => {
    expect(fruitsOrNutsSolvingBoneIssue(fruits)).toEqual([
      "Cashew",
      "Wallnut",
      "Apple",
    ]);
  });

  //Test block for fruit or nuts with max nutrition types
  test("Get the fruits or nuts with maximun nutrtion types", () => {
    expect(fruitOrNutWithMaximumNutritionTypes(fruits)).toEqual([
      "Banana",
      "Badam",
      "Wallnut",
    ]);
  });

  //Test block migraine solver and vit value >60
  test("Test block to find the fruit or nut soves migraine and vitamin value >= 60", () => {
    expect(findMigraineSolversWithVitamins(fruits)).toEqual(["Apple"]);
  });

  //Test block to find the fruit or nut with lowest carbs
  test("Test block for fruit or nut with the lowest carbs", () => {
    expect(findLowestCarbFruitOrNut(fruits)).toBe("Badam");
  });

  //Test block to get total protien intake
  test("est block to get total protien intake", () => {
    expect(totalProteinIntake(fruits)).toBe(18);
  });

  //Test block to get the total protien intake
  test("Test block to get the total protien intake", () => {
    expect(totalVitaminsIntakeWithoutSugarNutrition(fruits)).toBe(249);
  });
});
describe("Tests for Question 16-19", () => {
  //Test block to get the sum of odd and even numbers
  test("Test block to get the sum of odd and even numbers", () => {
    const oddEvenNumbersResult = getOddEvenNumbersSum(5);
    expect(oddEvenNumbersResult).toEqual({ odd: [1, 3, 5], even: [2, 4] });
    expect(calculateSumOfOddAndEven(oddEvenNumbersResult)).toEqual({
      even: 6,
      odd: 9,
    });

    const oddEvenNumbersResults = getOddEvenNumbersSum(7);
    expect(oddEvenNumbersResults).toEqual({
      odd: [1, 3, 5, 7],
      even: [2, 4, 6],
    });
    expect(calculateSumOfOddAndEven(oddEvenNumbersResults)).toEqual({
      even: 12,
      odd: 16,
    });
  });

  //Test block to seperate the vowels and consonants from the array of alphabets
  test("Test block to seperate the vowels and consonants from the array of alphabets", () => {
    const alphabets = generateAlphabets("a", "z");
    expect(alphabets).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]);
    expect(generateAlphabetObject(alphabets)).toEqual({
      consonants: [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      vowels: ["a", "e", "i", "o", "u"],
    });

    const alphabetsArray = generateAlphabets("a", "d");
    expect(alphabetsArray).toEqual(["a", "b", "c", "d"]);
    expect(generateAlphabetObject(alphabetsArray)).toEqual({
      consonants: ["b", "c", "d"],
      vowels: ["a"],
    });
  });

  //Test block to get all actors name
  const movieData = require("./movies.json");
  test("Get all actors name in the movie", () => {
    const actorsArray = getAllActorsName(movieData);
    const fs = require("fs");
    fs.writeFileSync("./src/actors.json", actorsArray.toString(), "utf-8");
  });

  //Test block to get three movies per year
  test("Claasified movies based on year", () => {
    expect(getThreeMoviesPerYear(movieData)).toEqual({
      2017: ["The Book of Love", "Split", "xXx: Return of Xander Cage"],
      2018: ["Insidious: The Last Key", "The Strange Ones", "Sweet Country"],
    });
  });

  //Test block for building a trim function using compose and pipe methods
  test("Compose and pipe functions to trim a string with trailing ,leading and extra spaces", () => {
    expect(
      trimUsingCompose("    My   Name  is        Shashank          ")
    ).toBe("My Name is Shashank");
    expect(trimUsingCompose("Hello Everyone       ")).toBe("Hello Everyone");
    expect(trimUsingCompose("I am      a student")).toBe("I am a student");
    expect(trimUsingCompose("     CodeCraft Technologies")).toBe(
      "CodeCraft Technologies"
    );

    expect(trimUsingPipe("    My   Name  is        Shashank          ")).toBe(
      "My Name is Shashank"
    );
    expect(trimUsingPipe("Hello Everyone       ")).toBe("Hello Everyone");
    expect(trimUsingPipe("I am      a student")).toBe("I am a student");
    expect(trimUsingPipe("     CodeCraft Technologies")).toBe(
      "CodeCraft Technologies"
    );
  });
});
