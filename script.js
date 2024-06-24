const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result1 = document.getElementById("result");
let str = "";

function isEmpty(){
  str = textInput.value.toLowerCase();
  const reversedArr = str.split('').reverse();
  const reversedStr = reversedArr.join('');
  if(str == ""){
    return alert("Please input a value");
  }
  else{
    const regex = /[.~`!@#$%\s_,-/():|]/g;
    const result = str.replace(regex,"");
    const reversedresult = reversedStr.replace(regex,"");
    if(reversedresult == result){
      result1.innerText = `${textInput.value} is a palindrome`
      return result1.innerText;
    }
    else{
      result1.innerText = `${textInput.value} is not a palindrome`
      return result1.innerText;
    }
  }
  
}
