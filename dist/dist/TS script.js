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
var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');
function onbuttonPlusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number('input1.value');
    var number2 = Number('input2.value');
    var summ = number1 + number2;
    window.alert(summ);
}
function onbuttonMinusClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number('input1.value');
    var number2 = Number('input2.value');
    var summ = number1 - number2;
    window.alert(summ);
}
function onbuttonMultiplyClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number('input1.value');
    var number2 = Number('input2.value');
    var summ = number1 * number2;
    window.alert(summ);
}
function onbuttonDevideClick() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number('input1.value');
    var number2 = Number('input2.value');
    var summ = number1 / number2;
    window.alert(summ);
}
buttonPlus.addEventListener('click', onbuttonPlusClick);
buttonMinus.addEventListener('click', onbuttonPlusClick);
buttonMultiply.addEventListener('click', onbuttonPlusClick);
buttonDevide.addEventListener('click', onbuttonPlusClick);
