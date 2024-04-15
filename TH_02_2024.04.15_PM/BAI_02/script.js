arr = [1, 4, 5, 6, 11, 7, -11, -6];

// Hàm tìm số nguyên lớn nhất trong mảng

function isPrimeNumber(n) {
	if (n < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}

function maxPrimeNumber(arr) {
	var arrResult = [];
	for (let i = 0; i < arr.length; i++) {
		if (isPrimeNumber(arr[i])) {
			arrResult.push(arr[i]);
		}
	}
	return Math.max(...arrResult);
}

console.log(`Số nguyên lớn nhất trong mảng là: ${maxPrimeNumber(arr)}`);

// Hàm tìm các số chính phương trong mảng

function isSquareNumber(n) {
	if (n < 0) {
		return false;
	}
	return Math.sqrt(n) % 1 === 0;
}

function arrSqaureNumber(arr) {
	var arrResult = [];
	for (let i = 0; i < arr.length; i++) {
		if (isSquareNumber(arr[i])) {
			arrResult.push(arr[i]);
		}
	}
	return arrResult;
}

console.log(`Các số chính phương trong mảng là: ${arrSqaureNumber(arr)}`);

// Hàm tìm các số lớn hơn trung bình cộng của mảng

function average(arr) {
	var sum = arr.reduce((a, b) => a + b, 0);
	return sum / arr.length;
}

ave = average(arr);

function arrGreaterThanAverage(arr) {
	var arrResult = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > ave) {
			arrResult.push(arr[i]);
		}
	}
	return arrResult;
}

console.log(
	`Các số lớn hơn trung bình cộng của mảng là: ${arrGreaterThanAverage(arr)}`
);

// Hàm tính trung bình cộng của các số không âm trong mảng

function averageNonNegative(arr) {
	var arrNonNegative = arr.filter((item) => item >= 0);
	var sum = arrNonNegative.reduce((a, b) => a + b, 0);
	return sum / arrNonNegative.length;
}

console.log(
	`Trung bình cộng của các số không âm trong mảng là: ${averageNonNegative(
		arr
	)}`
);
