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
var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');
function onbuttonPlusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1 === null || input1 === void 0 ? void 0 : input1.value);
    var number2 = Number(input2 === null || input2 === void 0 ? void 0 : input2.value);
    var summ = number1 + number2;
    window.alert(summ);
}
function onbuttonMinusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1 === null || input1 === void 0 ? void 0 : input1.value);
    var number2 = Number(input2 === null || input2 === void 0 ? void 0 : input2.value);
    var summ = number1 - number2;
    window.alert(summ);
}
function onbuttonMultiplyClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1 === null || input1 === void 0 ? void 0 : input1.value);
    var number2 = Number(input2 === null || input2 === void 0 ? void 0 : input2.value);
    var summ = number1 * number2;
    window.alert(summ);
}
function onbuttonDevideClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1 === null || input1 === void 0 ? void 0 : input1.value);
    var number2 = Number(input2 === null || input2 === void 0 ? void 0 : input2.value);
    var summ = number1 / number2;
    window.alert(summ);
}
if (buttonPlus)
    buttonPlus.addEventListener('click', onbuttonPlusClick);
buttonPlus === null || buttonPlus === void 0 ? void 0 : buttonPlus.addEventListener('click', onbuttonPlusClick);
buttonMinus === null || buttonMinus === void 0 ? void 0 : buttonMinus.addEventListener('click', onbuttonPlusClick);
buttonMultiply === null || buttonMultiply === void 0 ? void 0 : buttonMultiply.addEventListener('click', onbuttonPlusClick);
buttonDevide === null || buttonDevide === void 0 ? void 0 : buttonDevide.addEventListener('click', onbuttonPlusClick);
