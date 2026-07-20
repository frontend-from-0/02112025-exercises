// 1. Array Destructuring
// Given the following array, use array destructuring to assign the values of x, y, and z to their respective variables:
const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log('Solution 1:', x, y, z);

// Array Destructuring used a lot with React hooks: https://react.dev/reference/react/useState
// const [counter, setCounter] = useState();

// 2. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
  name: 'Jane Doe',
  age: 30,
};
// const { name, age } = personE14;

// console.log('Solution ex. 2:', name, age);
// console.log(name);
// console.log(age);
console.log('--------------------------------');

// 3. Array Destructuring with Default Values
// Given the following array, use array destructuring with default values to assign the values of a, b, and c, with default values of 1, 2, and 3 respectively:
let numbers = ['', null, NaN];
const [a = 1, b = 2, c = 3, d = 4] = numbers;
console.log('Solution ex. 3:', a, b, c, d);

// 4. Object Destructuring with Renaming
// Given the following object, use object destructuring with renaming to assign the value of name to a variable named fullName:
const personE16 = {
  name: 'Jane Doe',
};

const { name: fullName } = personE16;
console.log('Solution ex. 4', fullName);

// 5. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables. Rename name and age to fullName and fullAge respectively.
const personE17 = {
  name: 'John Doe',
  age: 25,
  address: {
    city: 'New York',
  },
};

const {
  // name: fullName,
  age: fullAge,
  address: { city },
} = personE17;
// const city = personE17.address.city;

console.log('Solution ex. 5:', fullName, fullAge, city);

console.log('--------------------------------');

// 6. Default Parameters + Arrow function
// Convert Named Function to Arrow Function with Default Parameters
// function greet(name, greeting) {
// 	return `${greeting}, ${name}!`;
// }

const greet = (name = 'Furkan', greeting = 'Hi!') => {
  return `${greeting}, ${name}!`;
};
console.log('Solution ex. 6', greet(undefined, 'hello'));

// 7. Default Parameters
// Add Default Parameters to an Existing Arrow Function, Default tax rate 0.1, default discount is 0.
//const calculateTotal = (price, taxRate, discount) => {
//return price + price * taxRate - discount;
//};

const calculateTotal = (price, taxRate = 0.1, discount = 0) => {
  return price + price * taxRate - discount;
};
console.log('Solution ex. 7', calculateTotal(100));
console.log('Solution ex. 7.1', calculateTotal(100, 0.2));
console.log('Solution ex. 7.2', calculateTotal(100, 0.2, 25));

// Optional Chaining
// Optional chaining allows you to safely access deeply nested properties.

// 8. Safe Access to Nested Object Properties
// Update the code to safely access userName and userCity using optional chaining to handle cases where properties might be missing.
const userEx8 = {
  profile: {
    // optional
    name: 'Alice',
    address: {
      city: 'Wonderland',
    },
  },
};

const passwordLength = userEx8?.profile?.password?.length ?? 'No password';
console.log('Solution ex. 8', passwordLength);

// 9. Handle Missing Properties
// Update the code to use optional chaining to safely access userCountry and provide a default value of 'Unknown' if the property is missing.

const userEx9 = {
  profile: {
    name: 'Alice',
  },
};

const userCountry = userEx9.profile?.country ?? 'Unknown';
console.log('Solution ex. 9', userCountry);

// 10. Optional Chaining with Function Calls
// Update the code to safely call the getName function using optional chaining, considering that profile or getName might be missing.

const userEx10 = {
  profile: {
    getName: () => 'Alice',
  },
};
const userProfile = userEx10.profile?.getName?.();
console.log('Solution ex. 10', userProfile);

// 11. Rewrite the code using the nullish coalescing operator to assign a default value to storedData only if userInput is null or undefined.
//let userInput = '';
//let withTernaryOperator = userInput ? userInput : '-';
//const withNullishCoalescing = userInput ?? '-';

let userInput = '';
let withTernaryOperator = userInput ? userInput : '-';
const storedData = userInput ?? '-';

console.log(
  'Ex. 11',
  'withTernaryOperator',
  withTernaryOperator,
  '| storedData',
  storedData,
); // Default Value

// 12. Rewrite the code using the nullish coalescing operator to display number of users even if it is 0.
//let userCount = 0;
//let displayCount = userCount || 'No users';

let userCount = 0;
let displayCount = userCount ?? 'No users';

console.log('Solution ex. 12', displayCount); // 0

// 13. Rewrite the code using the nullish coalescing operator to assign a default value of 3000 to timeout if config.timeout is null or undefined.

const config = {
  timeout: null,
};

/*const timeout =
  config.timeout !== undefined && config.timeout !== null
    ? config.timeout
    : 3000;*/

const timeout = config.timeout ?? 3000;
console.log('Solution ex. 13', timeout); // 3000
