// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random float between min and max (inclusive)
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to add two random integers and log the result
function addRandomIntegers() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const result = num1 + num2;
  console.log(`${num1} + ${num2} = ${result}`);
}

// Function to subtract two random integers and log the result
function subtractRandomIntegers() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const result = num1 - num2;
  console.log(`${num1} - ${num2} = ${result}`);
}

// Function to multiply two random integers and log the result
function multiplyRandomIntegers() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const result = num1 * num2;
  console.log(`${num1} * ${num2} = ${result}`);
}

// Function to divide two random integers and log the result
function divideRandomIntegers() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  if (num2 === 0) {
    console.log(`${num1} / ${num2} = Cannot divide by zero`);
    return;
  }
  const result = num1 / num2;
  console.log(`${num1} / ${num2} = ${result}`);
}

// Function to find the modulus of two random integers and log the result
function modulusRandomIntegers() {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const result = num1 % num2;
  console.log(`${num1} % ${num2} = ${result}`);
}

// Function to calculate the power of two random integers and log the result
function powerRandomIntegers() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 5);
  const result = Math.pow(num1, num2);
  console.log(`${num1} ^ ${num2} = ${result}`);
}

// Function to calculate the square root of a random number and log the result
function sqrtRandomNumber() {
  const num = getRandomInt(1, 100);
  const result = Math.sqrt(num);
  console.log(`√${num} = ${result}`);
}

// Function to calculate the logarithm (base 10) of a random number and log the result
function logRandomNumber() {
  const num = getRandomInt(1, 100);
  const result = Math.log10(num);
  console.log(`log10(${num}) = ${result}`);
}

// Function to generate a random angle and calculate its sine value
function sinRandomAngle() {
  const angle = getRandomInt(0, 360);
  const result = Math.sin((angle * Math.PI) / 180); // Convert angle to radians
  console.log(`sin(${angle}°) = ${result}`);
}

// Function to generate a random angle and calculate its cosine value
function cosRandomAngle() {
  const angle = getRandomInt(0, 360);
  const result = Math.cos((angle * Math.PI) / 180); // Convert angle to radians
  console.log(`cos(${angle}°) = ${result}`);
}

// Function to generate a random angle and calculate its tangent value
function tanRandomAngle() {
  const angle = getRandomInt(0, 360);
  const result = Math.tan((angle * Math.PI) / 180); // Convert angle to radians
  console.log(`tan(${angle}°) = ${result}`);
}

// Function to calculate the absolute value of a random integer and log the result
function absRandomInteger() {
  const num = getRandomInt(-100, 100);
  const result = Math.abs(num);
  console.log(`|${num}| = ${result}`);
}

// Function to calculate the floor of a random floating-point number and log the result
function floorRandomFloat() {
  const num = getRandomFloat(1, 100);
  const result = Math.floor(num);
  console.log(`floor(${num}) = ${result}`);
}

// Function to calculate the ceiling of a random floating-point number and log the result
function ceilRandomFloat() {
  const num = getRandomFloat(1, 100);
  const result = Math.ceil(num);
  console.log(`ceil(${num}) = ${result}`);
}

// Function to calculate the rounding of a random floating-point number and log the result
function roundRandomFloat() {
  const num = getRandomFloat(1, 100);
  const result = Math.round(num);
  console.log(`round(${num}) = ${result}`);
}

// Function to calculate a random random value raised to a random power and log the result
function randomPower() {
  const base = Math.random();
  const exponent = getRandomInt(1, 10);
  const result = Math.pow(base, exponent);
  console.log(`${base.toFixed(4)} ^ ${exponent} = ${result.toFixed(4)}`);
}

// Function to generate a random number between 0 and 1, then log its logarithm and exponential
function randomLogAndExp() {
  const random = Math.random();
  const logResult = Math.log(random);
  const expResult = Math.exp(random);
  console.log(`Random number: ${random.toFixed(4)} => log(${random.toFixed(4)}) = ${logResult.toFixed(4)} and exp(${random.toFixed(4)}) = ${expResult.toFixed(4)}`);
}

// Function to generate a random number and log its factorial (recursion)
function factorialRandomNumber(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRandomNumber(n - 1);
}

function logFactorial() {
  const num = getRandomInt(1, 10);
  const result = factorialRandomNumber(num);
  console.log(`${num}! = ${result}`);
}

// Function to generate a random number and log its combination (n choose r)
function combinationRandomNumbers() {
  const n = getRandomInt(1, 10);
  const r = getRandomInt(1, n);
  const result = factorialRandomNumber(n) / (factorialRandomNumber(r) * factorialRandomNumber(n - r));
  console.log(`C(${n}, ${r}) = ${result}`);
}

// Function to generate a random number and log its permutation (n permute r)
function permutationRandomNumbers() {
  const n = getRandomInt(1, 10);
  const r = getRandomInt(1, n);
  const result = factorialRandomNumber(n) / factorialRandomNumber(n - r);
  console.log(`P(${n}, ${r}) = ${result}`);
}

// Function to calculate a random sum of numbers
function randomSum() {
  let sum = 0;
  const count = getRandomInt(5, 15);
  for (let i = 0; i < count; i++) {
    sum += getRandomInt(1, 10);
  }
  console.log(`Sum of ${count} random numbers: ${sum}`);
}

// Function to calculate a random product of numbers
function randomProduct() {
  let product = 1;
  const count = getRandomInt(5, 15);
  for (let i = 0; i < count; i++) {
    product *= getRandomInt(1, 10);
  }
  console.log(`Product of ${count} random numbers: ${product}`);
}

// Function to generate random prime numbers
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function logRandomPrime() {
  const num = getRandomInt(1, 100);
  if (isPrime(num)) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not a prime number`);
  }
}

// Main function to generate random operations and log the results
function generateRandomMathOperations() {
  const operations = [
    addRandomIntegers,
    subtractRandomIntegers,
    multiplyRandomIntegers,
    divideRandomIntegers,
    modulusRandomIntegers,
    powerRandomIntegers,
    sqrtRandomNumber,
    logRandomNumber,
    sinRandomAngle,
    cosRandomAngle,
    tanRandomAngle,
    absRandomInteger,
    floorRandomFloat,
    ceilRandomFloat,
    roundRandomFloat,
    randomPower,
    randomLogAndExp,
    logFactorial,
    combinationRandomNumbers,
    permutationRandomNumbers,
    randomSum,
    randomProduct,
    logRandomPrime
  ];

  const randomOp = operations[getRandomInt(0, operations.length - 1)];
  randomOp();
}