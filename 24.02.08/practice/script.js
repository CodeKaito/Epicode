// // Keyword this
// const firstName = "Mister X";

// let firstObject = {
//     firstName: "Marco",
//     description: "Demo for me this keyword",
//     getCapitalName: function() {
//         console.log(this.firstName.toUpperCase());
//     }
// }

// // firstObject.getCapitalName();

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // Unire due array usando lo spreading
// const mergedArray = [...arr1, ...arr2];

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// const odd = [1, 3 ,5];
// const combined = [...odd, 2, 4, 6];

// console.log(combined); // Output: [ 1, 3, 5, 2, 4, 6];

// let firstObject = { firstName: 'John', lastName: 'Travolta' };
// let secondObject = { firstName: 'Mark', lastName: 'Wahlberg' };

// // Destrutturazione degli oggetti
// let { firstName: first1, lastName: last1 } = firstObject;
// let { firstName: first2, lastName: last2 } = secondObject;

// console.log(first1, last1); // Output: John Travolta
// console.log(first2, last2); // Output: Mark Wahlberg

const people = [
    { name: 'John', age: 22 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 28 }
  ];
  
  const foundPerson = people.find(person => person.age > 28);
  
  console.log(foundPerson);
  // Output: { name: 'Alice', age: 30 }