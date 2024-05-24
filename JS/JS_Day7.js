// copy to runauxlabs/doit-js/04/rest-1.js, rest-2.js, timer-1.js, timer-2.js, timer-3.js

// rest-1
// fruits = ["a", "b", "g"];
// console.log(fruits);
// console.log(...fruits);
// //전개구문, 값만 쏙 뽑아서 출력

// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(1, 3)); //4 
// console.log(addNum(1, 3, 5, 7)); //4

// 전개구문을 파라미터에 사용하면, 파라미터의 갯수와는 상관없이 유연한 계산을 해준다.
// ...배열명 == 값,값,값, ...
// 대괄호를 뗀 배열을 파라미터에 넣는느낌, 배열의 요소 갯수만큼 파라미터로 들어감, 전개구문이 파라미터로 들어오면 배열이 문자화가 된것으로 끝나는것이 아니라 배열로써 활용할 수 있는 수식은 다 사용가능
// function addNum2(...numbers) {
//   let sum = 0;
//   for (let number of numbers) sum += number;
//   return sum;
// }
// console.log(addNum2(1, 3)); //4
// console.log(addNum2(1, 3, 5, 7)); //16

// const arr = [1, 3, 7, 53, 43, 18, 9, 11, 13, 15, 17, 19, 1, 2, 50, 100, 6, 4];
// console.log(addNum2(arr)); // 스트링으로 그냥 찍힘
// console.log(addNum2(...arr)); // 인자에 전개구문형식으로 콜링하기

// function multipleNum3(...numbers) {
//   let sum = 1;
//   for (let number of numbers) sum *= number;
//   // 곱하기, 나누기에서 0이 개입되지 않도록 조심하자
//   return sum;
// }
// console.log(multipleNum3(...arr));


// rest-2
// function displayFavorites(first, ...favs) {
//   let str = `가장 좋아하는 과일은 "${first}"군요`;
//   return str;
// }

// console.log(displayFavorites("사과", "포도", "토마토"));

// const fruits = ["a", "b", "g", "s"];
// console.log(displayFavorites(...fruits));

// // 전개구문형식의 파라미터는 무조건 마지막에 온다
// // function displayFavorites2(...favs, first) {
// //   let str = `가장 좋아하는 과일은 "${first}"군요`;
// //   return str;
// // }

// const user = ['His', 'name', 'is', 'Hong'];
// console.log(user);
// console.log(...user);


// timer-1
// greeting 함수를 선언한 후 콜백 함수로 사용
// function greeting() {
//   console.log("안녕하세요?");
// }

// setInterval(콜백함수명, 시간);
// setInterval(greeting, 500);

// 직접 함수를 선언하면서 실행
// setInterval(function(){
//   실행문
// },2000);

// 화살표함수로 바꾸면?
// setInterval(() => {
//   console.log("안녕하세요?");
// }, 2000);
// setInterval( 파라미터 => 리턴값, 시간)


// timer-2
// let counter = 0;

// let timer = setInterval(() => {
//   console.log("안녕하세요?");
//   counter++;
//   if (counter === 5) clearInterval(timer);
// }, 1000);

// clearInterval(타이머함수명)
// let 타이머함수명 = setInterval() 함수가 종료된다.

// 응용 해보기
// let timer3 = setInterval(() => {
//   console.log("안녕? 🌱");
// }, 500);

// let stopGreeting = clearInterval(timer3);

// let bt = document.querySelector('#bt');

// bt.addEventListener('click', stopGreeting);

// bt.addEventListener('click', () => {
//   clearInterval(timer3);
// });


// timer-3
// setTimeout(콜백함수, 시간)
// 딜레이의 개념, 해당시간후에 함수실행시켜줘

// setTimeout(function(){
//   console.log("안녕하세요?")
// }, 3000);

// setTimeout(() => {
//   console.log("안녕하세요?")
// }, 3000);

let greet = () => console.log("안녕하세요?");
setTimeout(greet, 3000);
