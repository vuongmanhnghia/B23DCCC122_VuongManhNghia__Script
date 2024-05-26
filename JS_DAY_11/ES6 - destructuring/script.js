const array = [1, 2, 3];
const [a, b] = array;
console.log(a); /* output: 1 */
console.log(b); /* output: 2 */
console.log(array); /* output: [1, 2, 3] */

const myObject = {
	name: "Nghia",
	age: 4,
};
const { name, age } = myObject;
console.log(name); /* output: "Nghia" */
console.log(age); /* output: 4 */
console.log(myObject); /* output: {name: "Nghia", age: 4} */
