

// function reverseWords(str){
//   let reverseString= "";

//   for(let i=str.length-1; i>=0; i--){
//     reverseString+=str[i];
//   }
//   return reverseString;
// }

// console.log(reverseWords("Welcome to this Javascript Guide!"));


// function rever(str){
//   let reverseString = "";
//   for(let i=str.length-1; i>=0; i--){
//     reverseString +=str[i]
//   }
//   return reverseString
// }

// console.log(rever("hello"));

function JsReverse(num){
  let newString = num.toString();
  let reverseString = "";
  for(let i=newString.length-1; i>=0; i--){
    reverseString +=newString[i]
  }
  let reversedNumber = parseInt(reverseString, 10);
  return `reverse of ${num} is ${reversedNumber}`;
}

console.log(JsReverse(897));

