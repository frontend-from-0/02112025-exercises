// 1. Array Destructuring
// Given the following array, use array destructuring to assign the values of x, y, and z to their respective variables:
const coordinates = [10, 20, 30];

let [x,y,z] = coordinates;

console.log("Ex.1 result:", {x,y,z});

// 2. Object Destructuring
// Given the following object, use object destructuring to assign the values of name and age to their respective variables:
const personE14 = {
	name: 'Jane Doe',
	age: 30,
};

let {name, age} = personE14;

console.log("Ex.2 result:", {name, age});

// 3. Array Destructuring with Default Values
// Given the following array, use array destructuring with default values to assign the values of a, b, and c, with default values of 1, 2, and 3 respectively:
let numbers = ['', null, NaN];

let [a=1,b=2,c=3] = numbers;

console.log("Ex.3 result:", {a,b,c});

// 4. Object Destructuring with Renaming
// Given the following object, use object destructuring with renaming to assign the value of name to a variable named fullName:
const personE16 = {
	name: 'Jane Doe',
};

let {name: fullName} = personE16;

console.log("Ex.4 result:",fullName )

// 5. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables. Rename name and age to fullName and fullAge respectively.
const personE17 = {
	name: 'John Doe',
	age: 25,
	address: {
		city: 'New York',
	},
};

let{name: fulName, age:fullAge, address: {city: fullCity}  } = personE17;

console.log("Ex.5 result:",fulName, fullAge, fullCity );

// 6. Default Parameters + Arrow function
// Convert Named Function to Arrow Function with Default Parameters
// function greet(name, greeting) {
// 	return `${greeting}, ${name}!`;
// }

const greet = (name = 'Furkan', greeting = 'Hi!') => {
  return `${greeting}, ${name}!`;
};

const greet1 = (name = 'Furkan', greeting = 'Hi!') => `${greeting}, ${name}!`;

console.log("Ex.6 result:",greet1());


// 7. Default Parameters
// Add Default Parameters to an Existing Arrow Function, Default tax rate 0.1, default discount is 0.
const calculateTotal = (price, taxRate, discount) => {
	return price + price * taxRate - discount;
};

const newCalculateTotal = (price, taxRate=0.1, discount=0) => price +price*taxRate - discount;

console.log("Ex.7 result:",newCalculateTotal(50));


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

const userName = userEx8?.profile?.name;
const userCity = userEx8?.profile?.address?.city;

console.log("Ex.8 result:", userName, userCity);

// 9. Handle Missing Properties
// Update the code to use optional chaining to safely access userCountry and provide a default value of 'Unknown' if the property is missing.

const userEx9 = {
	profile: {
		name: 'Alice',
	},
};

const userCountry = userEx9?.profile?.country ?? "Unknown";

console.log("Ex.9 result:", userCountry)

// 10. Optional Chaining with Function Calls
// Update the code to safely call the getName function using optional chaining, considering that profile or getName might be missing.

const userEx10 = {
	profile: {
		getName: () => 'Alice',
	},
};

const result = userEx10?.profile?.getName?.();

console.log("Ex.10 result:", result);

// 11. Rewrite the code using the nullish coalescing operator to assign a default value to storedData only if userInput is null or undefined.
let userInput = null;

let storedData = userInput ?? "World is mine";

console.log("Ex.11 result:",storedData);


// 12. Rewrite the code using the nullish coalescing operator to display number of users even if it is 0.
let userCount = 0;

let count = userCount ?? 0;

console.log("Ex.12 result:", count);

// 13. Rewrite the code using the nullish coalescing operator to assign a default value of 3000 to timeout if config.timeout is null or undefined.

const config = {
	timeout: null,
};

const timeout =config.timeout ?? 3000;

console.log("Ex.13 result:",timeout);
