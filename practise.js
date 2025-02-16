


function removingduplicate(str){
	let unique = "";
	for(let i=0; i<str.length; i++){
		if(!unique.includes(str[i])){
			unique += str[i];
		}
	}
	return unique;
}

console.log(removingduplicate('saurav'));


function reverseString(str){
	let rString= "";
	for(let i= str.length-1; i>=0; i--){
		rString += str[i];
	}
	return rString;
}

console.log(reverseString("Saurav"));

function reverseArray(array){
	let rArray= [];
	for(let i= array.length-1; i>=0; i--){
		rArray.push(array[i]);
	}
	return rArray;
}

console.log(reverseArray([1,2,3,4,5]));

function factorial(num){
	if(num===0 || num ===1) return 1;
	return num*factorial(num-1);
}

console.log(factorial(5));


function addtwo(arr, arr1){
	return arr.concat(arr1).sort((a,b)=> a-b);
}

console.log(addtwo([1,5,3,4], [6,7,8,9]));


function palindrome(num){
	let check = num.toString().split('').reverse().join('');
	return check === num.toString();
}
console.log(palindrome(122));

let y =[1,5,3,4];

let z = y.filter((_, index)=> index!==2);

console.log(z);


function fibannoci(num){
	if(num<=0) return 0;
	if(num===1) return 1;
	return fibannoci(num-1)+ fibannoci(num-2);
}

console.log(fibannoci(9));



