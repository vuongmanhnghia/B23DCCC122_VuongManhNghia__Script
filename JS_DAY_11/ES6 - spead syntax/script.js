array_1 = [1, 2, 3, 4, 5];
array_2 = [array_1, 6, 7, 8, 9, 10];
console.log(array_2);

console.log(...array_1, 6, 7, 8, 9, 10);

const object_1 = {
	name: "Nghia",
};

const object_2 = {
	object_1,
	age: 20,
};

const object_3 = {
	...object_1,
	age: 20,
};
console.log(object_2);
console.log(object_3);
