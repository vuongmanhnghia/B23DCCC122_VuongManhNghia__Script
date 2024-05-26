class Member {
	constructor() {
		this.name = "Nghia";
	}
}

var x = new Member();
console.log(x.name);

class Person {
	constructor() {
		this.name = "Nghia";
		this.age = 18;
	}
	getName() {
		return this.name;
	}
	getAge() {
		return this.age;
	}
}

var y = new Person();
console.log(y.getName());
