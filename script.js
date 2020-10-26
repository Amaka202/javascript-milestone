// JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/g, '');
    let strBackward = str.split("");
     strBackward = strBackward.reverse().join("").toString();
    if(str === strBackward){
        return true;
    }else{
        return false;
    }
};

// JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
// Convert the given number into a roman numeral.

function convertToRoman(num) {
	const numberToRoman = {1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",6: "VI", 7:"VII", 8:"VIII", 9:"IX", 10:"X", 20: "XX", 30: "XXX", 40: "XL",50: "L", 60: "LX", 70: "LXX", 80: "LXXX", 90: "XC", 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"};
// 	Split into an array
  let numArr = num.toString().split("");
//  Loop through and check if they match
  let romanArr = [];
  console.log(numArr)
  if(numArr.length == 1){
    romanArr.push(numArr[0]);
    console.log(romanArr)
  }else if (numArr.length == 2){
    let firstElement = numArr.shift() * 10;
    romanArr.push(firstElement);
    romanArr.push(numArr[0]);
    console.log(romanArr)
  }else if(numArr.length == 3){
    let firstElement = numArr.shift() * 100;
    let secondElement = numArr.shift() * 10;
    romanArr.push(firstElement);
    romanArr.push(secondElement);
    romanArr.push(numArr[0]);
    console.log(romanArr)
  }

   let roman = romanArr.map(val => {
     return numberToRoman[val];
   })

   roman = roman.join("");

   return roman;
   console.log(roman);
}

convertToRoman(29)
