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


//JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount

function rot13(str) {
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  let strArr = str.split("");

  let initialIndex = strArr.map(val => {
    if(val == " "){
      return " ";
    }else if (alphabets.includes(val)){
      return alphabets.indexOf(val);
    }else{
      return val;
    }
  })

  console.log(initialIndex)

  let newAlphabets = [];

  for(let i = 0; i < 13; i++){
    let lastIndex = alphabets.pop();
    alphabets.unshift(lastIndex);
  }

  console.log(alphabets)

  let cypher = initialIndex.map(val => {
    if(val == " "){
      return " ";
    
    }else if(alphabets[val] == undefined){
      return val
    }
    
    else{
      return alphabets[val];
    }
  }) 
  
  return cypher.join('')
}

console.log(rot13("SERR YBIR?"))


//   JavaScript Algorithms and Data Structures Projects: Telephone Number Validator Return true if the passed string looks like a valid US phone number.



function telephoneCheck(str) {
  
    //Regular expressions to check for the possible correct formats
    if(/^(1?\s?\(?[0-9]{3}\)?\s?[0-9]{3}\s?[0-9]{4})$/.test(str)){
      return true;
    }else if(/^(1?\s?\({1}[0-9]{3}\){1}\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)){
      return true;
    }else if(/^(1?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)){
      return true;
    }
    else {
      return false;
    }
  };

//   JavaScript Algorithms and Data Structures Projects: Cash Register

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  const changeToGive = {status: "", change: []}

  let unit_amount = {
    "Penny":  	0.01,
    "Nickel":	  0.05,
    "Dime":	    0.1,
    "Quarter":	0.25,
    "one":	    1,
    "Five":	    5,
    "Ten":	    10,
    "Twenty":	  20,
    "One-hundred":	100,
  }

  let unitsArr = [];

  function getAmount(listOfUnits) {
    return listOfUnits.split("_")
  }
  if(change < 1)
    unitsArr = getAmount("Quarter_Dime_Nickel_Penny")
  if (change > 1 && change < 10)
    unitsArr = getAmount("Five_One_Quarter_Dime_Nickel_Penny")
  if(change > 10 && change < 20)
    unitsArr = getAmount("Ten_Five_One_Quarter_Dime_Nickel_Penny")
  if(change > 20 && change < 100)
    unitsArr = getAmount("Twenty_Ten_Five_One_Quarter_Dime_Nickel_Penny")
  if(change >= 100)
    unitsArr = getAmount("One-hundred_Twenty_Ten_Five_One_Quarter_Dime_Nickel_Penny");

    for(let unitIdx = 0; unitIdx < unitsArr.length; unitIdx++){
      if(change == 0){
        break;
      }else{
        if(unitIdx == unitsArr.length -1){
          changeToGive.status = "INSUFFICIENT_FUNDS"
          changeToGive.change =[];
        }
      }
    for (let index = 0; index < cid.length; index++){
      let [unit, amount] = cid[index];
      if (unitsArr[unitIdx] == unit){
        let unitAmount = unit_amount[unit];
        let changeCount = Math.floor(change / unitAmount);
        let amountoGive = unitAmount * changeCount;

        change -= amountoGive;
        changeToGive.status = "OPEN";
        changeToGive.change.push([unit, amountToGive]);
      }
    }
  }
  // return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);