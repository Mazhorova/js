// let admin,name;
//  name = "Jonn";
//  admin = name;
//  alert ('admin')
// let name = prompt('как зовут', "")
// alert()
// let a = +prompt("первое чило",10)
// let b = +prompt("второе число",20)
// alert(a+b)
// let year = prompt ('в каком году')
// if (year == 2015) {
//   alert("вы молодец");
// } else {
//   alert("нет")
// }
// let year = prompt ('в какщм году') 
//   if ( year < 2015 ) {
//   alert('рано');
// } else if ( year > 2019 ) {
// alert('много'); }
// else {
//   alert('правильно');
// }
// let age = prompt ('возраст', 18);
// let message = (age < 3 ) ? 'здраствуй малыш':
// (age < 18) ? 'привет':
// ( age < 90 ) ? 'здрасти':
// alert( message );
// let age = prompt('Возраст?', 18);
// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';
// alert( message );
// let message = prompt ('как называется фирма', '');
// if (message == 'ecma') {
//   alert('верно');
// } else {
//   alert('не знаете')
// }
// let value = prompt ();
// if (value > 0) {
//   alert(1);
// }  else if (value < 0) {
//   alert(-1);
// }
// let result = (a + b < 4) ? 'мало' : 'много';
// let message = prompt(login == 'Сотрудник') ? 'привет':
// (login == 'директор') ? 'здрасти':
// (login == '') ? 'нет имени':
// alert(message)
// if (!(age >= 14 && age <= 90)) 
// alert(age)
var surName = prompt("КТО ТАМ", '');
if (surName === 'Админ') {
    var pass = prompt('Пароль', '');
    if (pass === 'Я главный') {
        alert('здравствуйте');
    }
    else if (pass === '' || pass === null) {
        alert('отмена');
    }
    else {
        alert('неправильно');
    }
}
