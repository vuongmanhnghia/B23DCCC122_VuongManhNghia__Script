function laptop(brand, model, price, ram, storage, card) {
	this.brand = brand;
	this.model = model;
	this.card = card;
	this.ram = ram;
	this.storage = storage;
	this.price = price;
	this.display = function () {
		console.log(`Brand: ${this.brand}`);
		console.log(`Model: ${this.model}`);
		console.log(`Price: ${this.price}`);
		console.log(`RAM: ${this.ram}`);
		console.log(`Storage: ${this.storage}`);
		console.log(`Graphics Card: ${this.card}`);
	};
}

var Laptop_ASUS_TUF_Gaming_F15 = new laptop(
	"ASUS",
	"TUF Gaming F15",
	20000000,
	"16GB",
	"512GB SSD",
	"NVIDIA GeForce RTX 3060"
);
console.log(Laptop_ASUS_TUF_Gaming_F15);

var Laptop_MSIGL66 = new laptop(
	"MSI",
	"GL66",
	25000000,
	"16GB",
	"1TB SSD",
	"NVIDIA GeForce RTX 3070"
);
console.log(Laptop_MSIGL66);
