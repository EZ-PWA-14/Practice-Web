// copy to runauxlabs/doit-js

// let userNumber = prompt("홀짝게임을 시작할게요! 숫자를 입력해주세요😎");

// if (userNumber !== null) {
//   // 사용자가 뭐든 입력함
//   // userNumber = parseInt(userNumber);  // null이 아니라면 정수로 변환
//   userNumber = Number(userNumber);
//   if (isNaN(userNumber)) alert("문자를 입력하면 홀짝구분이 안되요😂");
//   // 사용자가 문자를 입력한 경우
//   else {
//     // 사용자가 숫자를 입력한 경우
//     (userNumber % 2 === 0) ?
//       alert(`${userNumber}는 짝수입니다!`) : alert(`${userNumber}는 홀수입니다!`);
//     // userNumber를 2로 나누어서 나머지가 없니? 2로 똑떨어지는 개념이면 짝수이다.
//     // 숫자를 엄청 많이 넣으면 지수e 까지 가면서 계산정확도가 떨어짐
//   }
// } else alert("F5로 리셋하고 게임에 참여해 보시겠어요?😊");
// // 사용자가 취소를 누른 경우


/** 배수확인 게임으로 응용해보기 */
// let standardNumber = prompt("배수확인게임을 해볼까요? 원하는 기준 숫자를 입력해주세요😎");

// standardNumber = Number(standardNumber);
// if (isNaN(standardNumber)) {
//   alert("기준 숫자는 숫자로만 입력해 주셔야 한답니다😑");
// } else {
//   let userNumber2 = prompt("배수확인 할 숫자를 입력해주세요😎");
//   if (userNumber2 !== null) {
//     userNumber2 = Number(userNumber2);
//     if (isNaN(userNumber2)) alert("문자를 입력하면 게임이 안되요😂");
//     else {
//       (userNumber2 % standardNumber === 0) ?
//         alert(`${userNumber2}는 ${standardNumber}의 배수입니다!`) : alert(`${userNumber2}는 ${standardNumber}의 배수가 아닙니다!`);
//     }
//   } else alert("F5로 리셋하고 게임에 참여해 보시겠어요?😊");
// }
// alert("게임끝!🤡 다시하고싶으시면 F5로 리셋해주세요!");


// const num1 = parseInt(prompt("첫번째 양의 정수 : "));
// const num2 = parseInt(prompt("두번째 양의 정수 : "));
// let str;


// AND 연산. 둘다 true여야 결괏값 true
// if (num1 % 2 === 0 && num2 % 2 === 0) {
//   str = `당신이 쓰신 ${num1}과(와) ${num2}은 모두 짝수입니다.`;
// } else {
//   str = "짝수가 아닌 수가 있습니다.";
// }
// alert(str);


// 단축 평가값
// let x = 10;
// let y = 20;
// if (x > 15 && y > 15) alert(`둘 다 15보다 큽니다.`);
// if (y > 15 || x > 15) alert(`둘 중 하나는 15보다 큽니다`);


// 빈복문
// for ... in
const gitbook = {
  title: `github overview`,
  pubDate: `2025-05-21`,
  pages: 120,
  finshed: true
};
console.log(gitbook);

for (let key in gitbook) {
  document.write(`${key} : ${gitbook[key]}<br>`);
}

// 객체에 직접적으로 접근하는 방식
console.log(`${gitbook.pages}`);
console.log(`------------------`);

// p.319 - 객체에 체계적으로 접근하는 방식
console.log(`${Object.keys(gitbook)}`);
console.log(`${Object.values(gitbook)}`);
console.log(`${Object.entries(gitbook)}`);
console.log(`------------------`);

let keys = Object.keys(gitbook);
console.log(keys);
console.log(`------------------`);


// for ... of
const fruits = [
  "mango",
  `banana`,
  `kiwi`
];
console.log(fruits);

const color = ["peach fuzz", "light pink", "sky blue"];

// for (let i = 0; i < color.length; i++) {
//   document.white(`${color[i]}`);
// }

// for (const c of color) {
//   document.write(`${c}<br>`);
// };
