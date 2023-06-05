// consistent, safe, predictable
const salutation = 'hello';
// salutation = 'bye';

// frozen object
const person = Object.freeze({
  firstName: 'Miftah'
})
person.lastName = 'Afina'

// frozen array
const numbers = Object.freeze([1, 2, 3, 4]);
// numbers.push(5);


function addElement(arr) {
  return Object.freeze([...arr, 5]);
}


console.log(salutation);
console.log(person);
console.log(numbers);
console.log(addElement(numbers));
