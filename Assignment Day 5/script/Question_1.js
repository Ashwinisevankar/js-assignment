var inputArray = [];
var n=prompt('Enter Size of Array');
var size = n; //Maximum Array size
console.log(n);
for(var i=0; i<n; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element of an array ' + (i+1));
}

//Print the array in the console.
console.log(inputArray);

let odd=inputArray.filter(el=>el%2!=0);
let oddCubes = inputArray.filter(el=>el%2!=0).map(el=>el**3);
console.log(odd);
console.log(oddCubes);
