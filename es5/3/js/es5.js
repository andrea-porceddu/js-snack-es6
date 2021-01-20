/* 3. ES5
Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri */

function arrayOfUniqueNumbers(min, max, length) {
	var arr = []
	while(arr.length < length) {
		var num = Math.floor(Math.random() * (max + 1 - min) + min)
		if(!arr.includes(num)) {
			arr.push(num)
		}
	}
	return arr
}

var arr = arrayOfUniqueNumbers(1, 100, 20)
console.log(arr)

function arrayMinPosMaxPos(arr, minPos, maxPos) {
	var newArr = []
	for (var i = minPos; i <= maxPos; i++) {
		newArr.push(arr[i])
	}
	return newArr
}

var newArr = arrayMinPosMaxPos(arr, 4, 8)
console.log(newArr);