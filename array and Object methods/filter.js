const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = number.filter((num) => num % 2 == 0);

console.log(even);

const personData = [
  {
    name: "alice",
    age: 22,
    city: "bvn",
  },
  {
    name: "John",
    age: 20,
    city: "Ahm",
  },
  {
    name: "Serra",
    age: 17,
    city: "srt",
  },
];

const eligiblePerson = personData.filter((person) => person.age > 18);

console.log(eligiblePerson);
