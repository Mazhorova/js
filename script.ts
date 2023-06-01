// function sayError() {
//   const x = 5;
//   const y = 10;
//   console.log(x + y)
// }

//  sayError()
 
//  function unixTime() {
//   let time = Math.floor(new Data().getTime())
//   console.log(time)
//  }
//  unixTime()
//  console.log('hello')
// const user = {
//   firsname: "Denis",
//   age: 30,
//   isAdmin: true,
//   head: 3,
//   email: 'testimoost.com',
//   'user-address': {
//     city:"Pekin"

//   }
// }
// let value;
// value = user.firsname;
// value = user['head'];
// value = user['user-address'];
// value = user['user-address'].city;
// user.firsname = 'Den'
// value = user.firsname;
// user['user-address'].city = 'Turin'
// console.log(value);
//  console.log(user);

let buttonPlus = document.getElementById('buttonPlus');
let buttonMinus = document.getElementById('buttonMinus');
let buttonMultiply = document.getElementById('buttonMultiply');
let buttonDevide = document.getElementById('buttonDevide');


function onbuttonPlusClick() {
  let input1 = document.getElementById('number1');
  let input2 = document.getElementById('number2');
  let number1 = Number(input1?.value);
  let number2 = Number (input2?.value);
  let summ = number1 + number2;
  window.alert(summ);
}
function onbuttonMinusClick() {
  let input1 = document.getElementById('number1');
  let input2 = document.getElementById('number2');
  let number1 = Number(input1?.value);
  let number2 = Number (input2?.value);
  let summ = number1 - number2;
  window.alert(summ);
}

function onbuttonMultiplyClick() {
  let input1 = document.getElementById('number1');
  let input2 = document.getElementById('number2');
  let number1 = Number(input1?.value);
  let number2 = Number (input2?.value);
  let summ = number1 * number2;
  window.alert(summ);
}
function onbuttonDevideClick() {
  let input1 = document.getElementById('number1');
  let input2 = document.getElementById('number2');
  let number1 = Number(input1?.value);
  let number2 = Number (input2?.value);
  let summ = number1 / number2;
  window.alert(summ);
}

if (buttonPlus) buttonPlus.addEventListener('click',onbuttonPlusClick);

buttonPlus?.addEventListener('click',onbuttonPlusClick);
buttonMinus?.addEventListener('click',onbuttonPlusClick);
buttonMultiply?.addEventListener('click',onbuttonPlusClick);
buttonDevide?.addEventListener('click',onbuttonPlusClick);