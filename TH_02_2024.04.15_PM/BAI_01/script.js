var arr = [10, 9, 8, 1, 3, 2, 5, 7, 3, 5, 7, 6, 4, 2];

// Hàm sắp xếp theo thứ tự tăng dần

function sortArray(arr) {
	return arr.sort(function (a, b) {
		return a - b;
	});
}
console.log(sortArray(arr));

// Hàm loại bỏ các phần tử trùng nhau, sao cho mỗi phần tử chỉ xuất hiện 1 lần

function removeDuplicates(arr) {
	return arr.filter(function (item, index) {
		return arr.indexOf(item) === index;
	});
}
console.log(removeDuplicates(arr));
