// ES 6

// // ES 6 variables
console.log("var");
var a_var = 10;
function print_var() {
	var a_var = 20;
	console.log(a_var);
}
print_var();
console.log(a_var);

console.log("let");
let a_let = 10;
function print_let() {
	// console.log(a_let);
	// Lỗi vì let chưa đuợc khai báo trong function nên không hoạt động
	let a_let = 20;
	console.log(a_let);
}
print_let();
console.log(a_let); // output: 10

console.log("const");
const a_const = 10;
function print_const() {
	// console.log(a_const);
	const a_const = 20;
	console.log(a_const);
}
print_const();
console.log(a_const);
