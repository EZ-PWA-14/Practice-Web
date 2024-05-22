// copy to runauxlabs/doit-js

// break 알아보기
// const number = parseInt(prompt("자연수를 입력하세요"));
// let isPrime;

// if (number === 1) {
//   document.write(`1은 소수도 합성수도 아닙니다.`);
// } else if (number === 2) {
//   isPrime = true;   // 숫자 2는 당연히 소수이므로 true로 할당
// } else {
//   // 1과 2를 제외한 모든 값이 들어왔을때 isPrime을 구분해줘
//   for (let i = 2; i < number; i++) {
//     // i가 증가하여 number 이전숫자만큼 몫계산을 반복하여 true/false 재할당을받고, 마지막에 받은 true/false값으로 아래의 제어문을 만난다.
//     if (number % i === 0) {
//       // i로 나누어서 똑 떨어지면 소수가 아니다, break를 이용하여 더돌릴필요없음 시전
//       isPrime = false;
//       break;
//     } else {
//       // i로 나누어서 똑 떨어지지 않는다면 소수다
//       isPrime = true;
//     }
//   }

//   // 문구완성
//   if (isPrime) {
//     document.write(`${number}는 소수입니다.`);
//   } else {
//     document.write(`${number}는 소수가 아닙니다.`);
//   }
// }

// 마무리 문제
// const arr = [1, 3, 5, 7, 53, 43, 18, 8, 9, 11, 13, 15, 17, 19, 1, 2, 50, 100, 6, 4, 129, 64, 22, 72, 89, 42];

// 나중에 데이터를 만나면 .filter() 함수를 돌리면 원하는 값 찾을 수 있다.
// for문의 로직을 이해하기위해 만들어 놓은 예제다.

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 50) {
//     document.write(`${arr[i]}, `);
//   }
// }

// for ..of로 쓰기
// let comment = ``; // 빈값으로 해놓을 거지만 굳이 `` 빈스트링으로 구성해 놓은 이유는 아래에 문구를 찍을때 데이터 초기형태가 찍히기 때문에 방지하는 용도
// for (let data of arr) {
//   if (data > 49) {
//     comment += `${data}, `; // 값 누적
//   }
// }
// document.write(`49보다 큰 값을 가지고 있는 데이터는 ${comment} 입니다.`);


// 도전! n보다 큰 수를 구해라의 n을 사용자가 원하는대로 뽑게 만들어보기
// 힌트, 프롬프트를 이용하여 숫자를 받아 변수를 대입한다.
// const number = parseInt(prompt("배열에서 지정하신 수 이상을 찾아드릴께요, 원하시는 숫자를 입력해주세요."));
// document.querySelector('h1 > span').textContent = number;
// // 사용자가 입력한 숫자를 DOM에 적용한다

// // 배열값도 넣기(전개구문)
// // p.148 전개구문은 배열의 값을 스트링으로 바꿔준다
// document.querySelector('p > span').textContent = [...arr];

// let comment2 = ``;
// for (data of arr) {
//   if (data > number) {
//     comment2 += `${data} `;
//   }
// }
// document.write(`입력하신 ${number}보다 큰 값을 가지고 있는 데이터는 ${comment2} 입니다.`);
// // 사용자가 '내가 ui를 컨트롤 하고있군'이라는 착각을 하게 만들자!


// 함수 선언하고  Initialize하기
// function calcSum() {
// // ^^^^^^^^^^^^^^^^^
// // 이 방식으로 콜링 먼저 할것
// // 괜히 Swift처럼 func name() {}으로 하지 말기    
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}입니다.`);

//   // 실행문이랑 리턴값(퉤)랑 구분할 것
// }

// // func name() {
// //  function...
// // }
// // swift처럼 쓰면 func에 빨간줄 뜸

// // 다중 콜링 때리면 그대로 다 나옴
// calcSum();
// calcSum();
// calcSum();
// calcSum();
// calcSum();

// 응용! 사용자에게 숫자를 받아, 1부터 그 숫자까지 더한값을 출력해보자
// const number = parseInt(prompt("1부터 얼마까지 더해드릴까요?"));
// function calcSum2() {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${number}까지 더하면 ${sum}입니다.`);
//   document.write(`1부터 ${number}까지 더하면 ${sum}입니다.`);
// }
// calcSum2();


// 매개변수 지정하기
// function calcSum(n) {
//   //             ^
//   // 아게 매개변수임. 함수 안에서 변수 지정이라고 보면 됨
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }
// // // n은 매개변수 = 파라미터
// calcSum(5);
// calcSum(35143135);

// const number = parseInt(prompt("1부터 얼마까지 더해드릴까요?"));
// calcSum(number);
// // number는 사용자가 입력한 값, 이것을 함수의 인수=인자로 넣고있다. 함수는 이 인수를 받아서 n에 대입하여 계산을 돌린다.


// function sum(a, b) { // a, b는 파라미터 또는 매개변수라고 불림
//   let result = a + b;
//   console.log(`두 수의 합: ${result}`);
// }
// sum(100, 54645846); //54645946 // 100, 54645846는 인수, 인자라고 불림
// sum(100);// NaN
// sum();// NaN

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`두 수의 합: ${sum}`); // 함수 내 실행문
  return sum; // 반환 값
  // 함수 밖에서 calcSum(n)을 콜링했을때 넘겨주는 값은 sum이다.
  // return 다음줄에 나오는 실행문은 무시된다.
  console.log(`${calcSum()}`);
}

let num = parseInt(prompt("몇까지 더할까요?")); // 파라미터용 변수 설정
console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.${calcSum()}`);
// 함수콜링하여 반환받은 값 표출

/** return으로 내보내는 변수, 밖에서 쓸수 있나요? ㄴㄴ
 *  return이란 함수 블록 스코프에서 반환(뱉어주는)해주는 값(변수 또는 수식)인데,
 *  그 변수나 수식이 직접 나가는것으로 착각 할 수 있다. 함수를 콜링했을때 그 값이 나오니까.
 *  함수를 불렀을때 까보면 그 안에 그 값이 있다는 것 일 뿐이다.
 *  예고) 수준이 올라가면 꺼낼 수 있다. 지금은 함수로 불러라.
 */
console.log(`${sum}`); // Uncaught ReferenceError: sum is not defined

function multiple1(a, b, c) {
  return a * b + c;
}
console.log(multiple1(5, 10));  // a=5, b=10, c=undefined NaN
// 인자가 부족하면, 계산이 안된다. 숫자가 없어서 계산이 안될 뿐 오류가 아님.
// 현업에서 이런거 발생하면 찾으러 가기 힘듦.

// ES6부터는 파라미터에 기본값 깔고 갈 수 있음
function multiple(a, b = 5, c = 10) {
  return a * b + c;
}

// 기본값이 있는데 인자를 갯수대로 입력하면 덮어써서 올바르게 계산해줌
console.log(multiple(5, 10, 20));  // a=5, b=10, c=20

// 인자가 모자라면 기본값 뽑아서 계산해줌
console.log(multiple(10, 20));  // a=10, b=20, c=10(default)
console.log(multiple(10));  // a=10, b=5(default), c=10(default)
console.log(multiple());


// 내가 준비한것이 패턴이면 좋겠고, 이패턴이 다양한 케이스를 대응할 수 있게 고민을 하고 수식을 짜야한다.