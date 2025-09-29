const fruits = ["apple", "banana", "mango", "strawberry"];

console.log(fruits.at(1));

console.log(fruits[2]);

// destructing

const [one, two] = fruits;

console.log(one);

// object

const person = {
  name: "alice",
  city: "bvn",
  age: 22,
};

console.log(person.name);

// destructure

const { name } = person;

console.log(name);
