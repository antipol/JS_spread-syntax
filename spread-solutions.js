//1. Combining Arrays

const wildAnimals = ["tiger", "penguin", "whale"];
const domesticatedAnimals = ["dog", "cat", "guinea pig"];
const allAnimals = [...wildAnimals, ...domesticatedAnimals];
console.log(allAnimals);
//["tiger", "penguin", "whale", "dog", "cat", "guinea pig"]

const danishWords = ["hej", "bil", "kanin"];
const germanWords = ["einfach", "frühstück", "sehr schön"];
const words = [...danishWords, ...germanWords];
console.log(words);
//[ 'hej', 'bil', 'kanin', 'einfach', 'frühstück', 'sehr schön' ]

const randomArr = ["ocean", "yes", germanWords];
console.log(randomArr);
//[ 'ocean', 'yes', [ 'einfach', 'frühstück', 'sehr schön' ] ]


//2. Copying Arrays
const copyWildAnimals = [...wildAnimals];
console.log(copyWildAnimals);
//[ 'tiger', 'penguin', 'whale' ]


//3. Find the Largest...
const largestNum = numArray => Math.max(...numArray);
console.log(largestNum([1, 4, 21, 555]));
//555


//4. Find the Smallest
const smallestNum = numArray => Math.min(...numArray);
console.log(smallestNum([1, 4, 21, 555]));
//1


//5. Clone and Merge
const person = {name: "Jonas"}
const job = {role: "Developer"}
const personName = person;
console.log(personName);
//{ name: 'Jonas' }
const employee = {...personName, ...job}
console.log(employee);
//{ name: 'Jonas', role: 'Developer' }
employee.name = "Gertrud";
employee.role = "Gartner";
console.log(employee);
//{ name: 'Gertrud', role: 'Gartner' }


//6. Is the average a whole number?
const isInteger = (...nums) => {
  const numItems = [...nums];
  return numItems.reduce((acc, cur) => acc + cur) / numItems.length % 1 === 0
};

console.log(isInteger(1, 2, 3, 4)); //false
console.log(isInteger(1, 2, 3)); //true
console.log(isInteger(...[1, 2, 3, 4])); //false
console.log(isInteger(...[1, 2, 3, 10])); //true


//7. Minimum Removals for Even Output
const minRemovals = (...numbers) => numbers.reduce((acc, cur) => acc + cur) % 2 === 1 ? 1 : 0;
console.log(minRemovals(5, 7, 9, 12)); //1

// console.log(minRemovals([5, 7, 9, 12])); //0, therefore make const numArr = [...numArr] and change numbers to numArr after return
