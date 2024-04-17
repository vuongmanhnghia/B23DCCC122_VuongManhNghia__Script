// Tạo object trong JS Cách 1

function student(name, age, address) {
	this.name = name;
	this.age = age;
	this.address = address;
	this.showInfo = function () {
		console.log("Name: " + this.name);
		console.log("Age: " + this.age);
		console.log("Address: " + this.address);
	};
}

Duc_Anh = new student("Duc Anh", 18, "Bắc Giang");
console.log(Duc_Anh);
console.log(Duc_Anh.showInfo());

// Tạo object trong JS Cách 2

class student2 {
	constructor(name, age, address) {
		this.name = name;
		this.age = age;
		this.address = address;
	}
	showInfo() {
		console.log("Name: " + this.name);
		console.log("Age: " + this.age);
		console.log("Address: " + this.address);
	}
}

Duc_Anh2 = new student2("Duc Anh", 18, "Bắc Giang");
console.log(Duc_Anh2);
console.log(Duc_Anh2.showInfo());

// Tạo object trong JS Cách 3

var student3 = new Object();
student3.name = "Duc Anh";
student3.age = 18;
student3.address = "Bắc Giang";
student3.showInfo = function () {
	console.log("Name: " + this.name);
	console.log("Age: " + this.age);
	console.log("Address: " + this.address);
};
console.log(student3);
console.log(student3.showInfo());

// Tạo object trong JS Cách 4

student4 = {
	name: "Duc Anh",
	age: 18,
	address: "Bắc Giang",
	showInfo: function () {
		console.log("Name: " + this.name);
		console.log("Age: " + this.age);
		console.log("Address: " + this.address);
	},
};
console.log(student4);
console.log(student4.showInfo());
