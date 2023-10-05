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
// let surName = prompt ("КТО ТАМ", '');
// if (surName === 'Админ') {
//   let pass = prompt('Пароль', '');
//   if (pass === 'Я главный') {
//     alert('здравствуйте');
//   } else if (pass === '' || pass === null) {
//     alert('отмена')
//   } else {
//     alert('неправильно')
//   }
// }
// let user = {}
// name: 'jon';
// surName: 'smit';
// user.name = 'peter';
// delete user.name;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// alert(sum); 
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// multiplyNumeric(menu);
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100
// let year = 2000
//  if ( year % 100 == 0) {
//   console.log ('год не високосный')
//  } else if (year % 4 == 0) {
//   console.log ('год високосный')
//   } else {
//   console.log ('год не високосный')
//  }
// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.
// let summ = prompt ('введите сколько долларов хотите поменять')
// let currency = prompt ('выбор валюты')
// if (currency== 'eur') {
//   console.log (summ * 0.8 + ' eur')
// }
// else if (currency== 'uan') {
//   console.log (summ * 5 + ' uan')
// }
// else if (currency== 'azn') {
//   console.log (summ * 10 + ' azn')
// }
// else {
// console.log ('Данную валюту не меняем')
// }
// let summ = 100
// let currency = 3
// switch (currency) {
//   case 1: 
//   console.log (summ * 0.8 + ' euro')
//   break 
//   case 2: 
//   console.log (summ * 5 + ' uan')
//   break 
//   case 3: 
//   console.log (summ * 10 + ' azn')
//   break 
//   default:
// }
// "Задача 9: Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления)"
// );
// let nmb = prompt('введите число');
// var a = Number(nmb % 10);
// var b = Number((nmb - a) / 10 % 10);
// var c = Number((nmb - a - b * 10) / 100);
// console.log('Перевертыш: ' + (a * 100 + b * 10 + c));
//  Запросить у пользователя число и определить,
//  оно полjжительное, отрицательное или ноль.
// let x = +prompt ('введите число')
// if (x>0) {
//   console.log ('число положительное')
// } else if (x<0) {
//   console.log ('число отрицательное')
// } else if (x==0) {
//   console.log ('число ноль')
// } else {
//   console.log ('это не число')
// }
// 1. Написать функцию, которая принимает 2 числа и 
// возвращает меньшее из них
// let a = 7
// let b = 5
// function min(a:number, b:number) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(a, b))
// 3. Написать функцию, которая принимает 2 числа и знак 
// (+ - * /), считает пример и возвращает результат.
// const myFunc = (a:number, b:number, c:any) => {
//   if (c === '+') return a + b
//   if (c === '-') return a - b
//   if (c === '*') return a * b
//   if (c === '/') return a / b
// }
// console.log(myFunc(a, b, '*'))
// Запросить 2 числа и найти только наибольший общий делитель.
// let x4 = 50
// let y4 = 6
// while (x4 != 0 && y4 != 0) {
//   if (x4 > y4) {
//     x4 = x4 % y4
//   } else if (x4 < y4) {
//     y4 = y4 % x4
//   }
// }
// console.log(`самый большой делитель ${x4 + y4}`)
// Определить количество цифр в введенном числе.
// let userNumber = 25
// let count = 0
// for (let i = 0; i < userNumber.lenght; i++) {
//   count += 1
// }
// console.log(count)
// let userNumber = prompt(' Введите число'); 
// let count = 0;
// for (let i = 0; i < userNumber.length; i++) {
//     count += 1;
// };
// alert(` Число состоит из ${count} цифр`);
// Запросить у пользователя число и вывести все делители этого числа.
// Анонимные функции-колбэки
// ask(
//   "Вы согласны?",
//   function () { alert("Вы согласились."); },
//   function () { alert("Вы отменили выполнение."); }
// )
// ask(
//   "Вы согласны?",
//   () => alert('Вы согласились.') :
// () => alert("Вы отменили выполнение.")
// )
// Стрелочная функция
// let func = (arg1, arg2, ...argN) => expression
// let func = function (arg1, arg2, ...argN) {
//   return expression
// }
// Отсутствие фигурных скобок после стрелки, НЕЯВНО (не пишем return) возвращает результат
// let func1 = (a: number, b: number) => a+b;
// let func1 = (a: number, b: number) => { return a }
// let func2 = function (a: number, b: number) {
//   return a + b
// }
// Стрелочная функция с логикой и явным возвратом
// let func3 = (a: number, b: number) => {
//   const c = a + b
//   return c
// }
// console.log('func1', func1(3, 2))
// console.log('func2', func2(1, 2))
// console.log('func3', func3(1, 2))
// ################### OBJECTS ######################
// let user
// user = new Object() // синтаксис "конструктор объекта"
// type User = {
//   age: number,
//   name: string
// }
// user = {} as any // синтаксис "литерал объекта"
// console.log({...user})
// user.age = 18
// console.log({...user})
// user.name = 'Vasya'
// console.log({...user})
// user.height = 180
// console.log(user.age)
// console.log({...user})
// const user1 = {
//   age: 18,
//   name: 'Vasya',
//   height: 180,
//   'master pass': '[admin}',
// } as any
// for (let key in user1) {
//   console.log(key, user1[key])
// }
// user1.age = 20
// console.log(user1['age'])
// let key = 'master pass'
// console.log(user1[key])
// delete user1['master pass']
// console.log(user1)
// let name = '123'
// let age = 20
// const user3 = {
//   name, 
//   age,
// }
// console.log(user3)
// 5. Написать функцию для вывода всех множителей переданного числа в 
// возрастающем порядке. Например: число 18 – множители 2 * 3 * 3.
// function multiplier(a = 18) {
//   let array = []
//   for (let i = 2; i <= a; i++) {
//     if (a % i == 0) {
//       array.push(i)
//       a = a / i
//       // console.log(i)
//       i--
//     }
//   }
//   return array
// }
// console.log(multiplier(333))
// console.log(multiplier(90))
// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100
// let year = 2000
//  if ( year % 100 == 0) {
//   console.log ('год не високосный')
//  } else if (year % 4 == 0) {
//   console.log ('год високосный')
//   } else {
//   console.log ('год не високосный')
//  }
// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.
// let summ = prompt ('введите сколько долларов хотите поменять')
// let currency = prompt ('выбор валюты')
// if (currency== 'eur') {
//   console.log (summ * 0.8 + ' eur')
// }
// else if (currency== 'uan') {
//   console.log (summ * 5 + ' uan')
// }
// else if (currency== 'azn') {
//   console.log (summ * 10 + ' azn')
// }
// else {
// console.log ('Данную валюту не меняем')
// }
// let summ = 100
// let currency = 3
// switch (currency) {
//   case 1: 
//   console.log (summ * 0.8 + ' euro')
//   break 
//   case 2: 
//   console.log (summ * 5 + ' uan')
//   break 
//   case 3: 
//   console.log (summ * 10 + ' azn')
//   break 
//   default:
// }
// "Задача 9: Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления)"
// );
// let nmb = prompt('введите число');
// var a = Number(nmb % 10);
// var b = Number((nmb - a) / 10 % 10);
// var c = Number((nmb - a - b * 10) / 100);
// console.log('Перевертыш: ' + (a * 100 + b * 10 + c));
//  Запросить у пользователя число и определить,
//  оно полjжительное, отрицательное или ноль.
// let x = +prompt ('введите число')
// if (x>0) {
//   console.log ('число положительное')
// } else if (x<0) {
//   console.log ('число отрицательное')
// } else if (x==0) {
//   console.log ('число ноль')
// } else {
//   console.log ('это не число')
// }
// 1. Написать функцию, которая принимает 2 числа и 
// возвращает меньшее из них
// let a = 7
// let b = 5
// function min(a:number, b:number) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(a, b))
// 3. Написать функцию, которая принимает 2 числа и знак 
// (+ - * /), считает пример и возвращает результат.
// const myFunc = (a:number, b:number, c:any) => {
//   if (c === '+') return a + b
//   if (c === '-') return a - b
//   if (c === '*') return a * b
//   if (c === '/') return a / b
// }
// console.log(myFunc(a, b, '*'))
// Запросить 2 числа и найти только наибольший общий делитель.
// let x4 = 50
// let y4 = 6
// while (x4 != 0 && y4 != 0) {
//   if (x4 > y4) {
//     x4 = x4 % y4
//   } else if (x4 < y4) {
//     y4 = y4 % x4
//   }
// }
// console.log(`самый большой делитель ${x4 + y4}`)
// let userNumber = 25
// let count = 0
// for (let i = 0; i < userNumber.lenght; i++) {
//   count += 1
// }
// console.log(count)
// let userNumber = prompt(' Введите число'); 
// let count = 0;
// for (let i = 0; i < userNumber.length; i++) {
//     count += 1;
// };
// alert(` Число состоит из ${count} цифр`);
// Запросить у пользователя число и вывести все делители этого числа.
// Анонимные функции-колбэки
// ask(
//   "Вы согласны?",
//   function () { alert("Вы согласились."); },
//   function () { alert("Вы отменили выполнение."); }
// )
// ask(
//   "Вы согласны?",
//   () => alert('Вы согласились.') :
// () => alert("Вы отменили выполнение.")
// )
// Стрелочная функция
// let func = (arg1, arg2, ...argN) => expression
// let func = function (arg1, arg2, ...argN) {
//   return expression
// }
// Отсутствие фигурных скобок после стрелки, НЕЯВНО (не пишем return) возвращает результат
// let func1 = (a: number, b: number) => a+b;
// let func1 = (a: number, b: number) => { return a }
// let func2 = function (a: number, b: number) {
//   return a + b
// }
// Стрелочная функция с логикой и явным возвратом
// let func3 = (a: number, b: number) => {
//   const c = a + b
//   return c
// }
// console.log('func1', func1(3, 2))
// console.log('func2', func2(1, 2))
// console.log('func3', func3(1, 2))
// ################### OBJECTS ######################
// let user
// user = new Object() // синтаксис "конструктор объекта"
// type User = {
//   age: number,
//   name: string
// }
// user = {} as any // синтаксис "литерал объекта"
// console.log({...user})
// user.age = 18
// console.log({...user})
// user.name = 'Vasya'
// console.log({...user})
// user.height = 180
// console.log(user.age)
// console.log({...user})
// const user1 = {
//   age: 18,
//   name: 'Vasya',
//   height: 180,
//   'master pass': '[admin}',
// } as any
// for (let key in user1) {
//   console.log(key, user1[key])
// }
// user1.age = 20
// console.log(user1['age'])
// let key = 'master pass'
// console.log(user1[key])
// delete user1['master pass']
// console.log(user1)
// let name = '123'
// let age = 20
// const user3 = {
//   name, 
//   age,
// }
// console.log(user3)
// 5. Написать функцию для вывода всех множителей переданного числа в 
// возрастающем порядке. Например: число 18 – множители 2 * 3 * 3.
// function multiplier(a = 18) {
//   let array = []
//   for (let i = 2; i <= a; i++) {
//     if (a % i == 0) {
//       array.push(i)
//       a = a / i
//       // console.log(i)
//       i--
//     }
//   }
//   return array
// }
// console.log(multiplier(333))
// console.log(multiplier(90))
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// let user = {}
// user.name = 'jon'
// user.surname = 'smit'
// user.name = 'pete'
// delete user.surname
// console.log(user)
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// function isEmpty(obj) {
//     for (let key in obj){
//         return: false
//     }
//     return:true
// }
// console.log(isEmpty)
// let solyarise = {
//     jon:110,
//     ann:100,
//     fup:200
// }
// let sum = 0;
// for (let key in solyarise) {
//   sum += solyarise[key];
// }
// console.log(sum); 
// Задание 3
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество 
// секунд.
// 3. Функция изменения времени на переданное количество 
// минут.
// 4. Функция изменения времени на переданное количество 
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной 
// части времени, может измениться и другая. Например: если ко 
// времени «20:30:45» добавить 30 секунд, то должно получиться 
// «20:31:15», а не «20:30:75»
// let clock = {
//     hours:10,
//     minutes:22,
//     seconds:15,
//     showTime() {
//         alert(this.hours+":"+this.minutes+":"+this.seconds)
//     },
//     chTS(sec) {
//         this.seconds += sec
//         let min = Math.floor(this.seconds/60)
//         this.seconds = this.seconds%60
//         if (min) this.chTM(min)
//     },
//     chTM(min) {
//         this.minutes+=min
//         let h = Math.floor(this.minutes/60)
//         this.minutes = this.minutes%60
//         if (h) this.chTH(h)
//     },
//     chTH(h) {
//         this.hours+=h
//         this.hours = this.hours%24
//     },
//     changeTimeSeconds() {
//         let sec = +(prompt('na skoliko secund uvelichit vremia') as string)
//         this.chTS(sec)
//         this.showTime()
//     },
//     changeTimeMinutes() {
//         let min = +(prompt('na skoliko minut uvelichit vremia') as string)
//         this.chTM(min)
//         this.showTime()
//     },
//     changeTimeHours() {
//         let h = +(prompt('na skoliko chasov uvelichit vremia') as string)
//         this.chTH(h)
//         this.showTime()
//     },
// }
// clock.changeTimeSeconds()
// clock.changeTimeMinutes()
// clock.changeTimeHours()
//?  добавление свойства обьекта
// let  userInfo = {
//     name: "Вася",
// }
// console.log(userInfo);
// userInfo.age = 30;
//? delete userInfo.age; // удаление обьекта
// console.log(userInfo)
// userInfo['like eat'] = true;
// console.log(userInfo)
// userInfo.adress = {
//     city: 'Pekin',
//     streat: 'Mobu',
// }
// console.log(userInfo)
//? изменеие обьекта
// let  userInfo = {
//     name: "Вася",
//     age: 30
// }
// console.log(userInfo)
// userInfo.age = 11;
// console.log(userInfo)
//? копирование объекта
// let  userInfo = {
//    name: "Вася",
//     age: 30
// }
// console.log(userInfo)
// let user = userInfo;
// console.log(user)
// user.age = 18;
// console.log(userInfo)
//? проверка существования обьекта
// let userInfo = {
//     name: 'Vasya',
//     age: 30
// }
//     if (userInfo.age) {
//         console.log(userInfo)
//     }
//     let userInfo = {
//     name: 'Vasya',
//     age: 30,
//     adress: {
//         city: "Pekin",
// ? street: "Mobu"
//     }
// }
// console.log(userInfo.adress.street)
//? чтобы не было ошибки надо поставить? знакбтогда будет проверка
//  console.log(userInfo?.adress?.street)
//? перебор всех циклов
//  let userInfo = {
//      name: 'Vasya',
//      age: 30,
//      adress: {
//          city: "Pekin",
//           street: "Mobu"
//      }
//  }
// for (let key in userInfo) {
// console.log(key);
// // name,age,adress 
// console.log(userInfo[key])
// }
// for (let key in userInfo.adress) {
//     console.log(key);
// }
//? методы обьекта
// let userInfo = {
//      name: 'Vasya',
//      age: 30,
//      adress: {
//        city: "Pekin",
//        street: "Mobu"
//           }
//           showInfo: function() {
//             console.log(`${userInfo.name}, ${userInfo.age} лут.Aдрес:Г.${userInfo.adress.city}`)
//           } 
//       }
//       userInfo.showInfo()
//   user можно заменить this это и будет текущий обьект
//? функция конструктор нужно чтобы создать многожество однотипных обьектов операто new
//? называется с большой буквы
// function UserInfo(name) {
//     this.name = name;
//     this.age = 30;
// }
// console.log (new UserInfo('Vasy'))
// console.log (new UserInfo('Lena'))
//? Массивы
//? изменение значений
// let arr = ['ваня','лена']
// arr[0] = 'коля',
// console.log(arr)
//? добавление нового
// let arr = ['ваня','лена']
// arr[2] = 'витя'
// console.log(arr)
//? метод push добавляет в конец массива
// let arr = ['ваня','лена']
// arr.push('ася');
// console.log(arr)
//? метод shift удаляет первый элемент
// let arr = ['ваня','лена']
// arr.shift()
// console.log(arr)
//? метод pop удаляет последний элемент 
// let arr = ['ваня','лена']
// arr.pop()
// console.log(arr)
//? метод unshift добавляет элемент в начало
// let arr = ['ваня','лена']
// arr.unshift('катя')
// console.log(arr)
//? удаление,добавление,изменение конкретных элементов
// let arr = ['ваня','лена', 'петя']
// delete arr[1]
// console.log(arr)
// ?метод splice позволяет удалять добвлять и заменять элементы
// удаляем элемент
// let arrOne = ['ваня','лена', 'петя']
// arrOne.splice (1,1)
// console.log(arrOne)
// ?заменяем
// let arrOne = ['ваня','лена', 'петя']
// arrOne.splice(0,1, 'дима')
// console.log(arrOne)
//? добавляем
// let arrOne = ['ваня','лена', 'петя']
// arrOne.splice(1,0,'маша')
// console.log(arrOne)
//? удаляем
// let arrOne = ['ваня','лена', 'петя']
// arrOne.splice(-1,1)
// console.log(arrOne)
//? события
// !'capture': false, фаза на которой должен сработать обработчик
// !once: false, если true тогда обработчик будет автоматически удален после выполнения
// !'passive': false если true то указывает что обработчикникогда не вызовет preventDefault()
// !addEventListener используют чаще т.к события можно отловить, прослушивает несколько событий 
// ?обьект события event
// const menuBody = document.querySelector('.menu');
// document.addEventListener('click', menu)
// function menu(event) {
//     if (event.target.closest('.menu_button')) {
//         menuBody.classList.toggle('_active') 
//     }
//     if(!event.target.closest('.menu')) {
//     menuBody.classList.remove('_active')}
// }
// const button = document.querySelector('.button')
// button.onclick = function () {
//     console.log('клик')
// }
// const button = document.querySelector('.menu_button')
// function showConsole (event)  {
//     console.log(event.target)
//     console.log(event.type)
// }
