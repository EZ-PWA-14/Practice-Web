// 자스는 대소문자를 구분하는 아이
let name = "라희";
let Name = "도희";
let NAME = "나희";

console.log(`${name}님은 자스를 공부하는 중입니다!`);
console.log(`${Name}님은 자스를 공부하는 중입니다!`);
console.log(`${NAME}님은 자스를 공부하는 중입니다!`);


// 재할당하는 법
// 위에 있는 name이 라희지만 이걸 다시 할당하는 법
name = "라히";
console.log(name);
console.log(`${name}님은 자스를 공부하는 중입니다!`); // 이러면 재할당 완료 !
// let name = "나히"; >> 이런식으로 하면 변수명이 겹치는 것으로 이해해서 에러 메세지 뜸

// var = 변수타입이라서 유연한데 문제가 생김
var bot = "name";
var bot = "mine"; // 이런식으로 계속 부를 수 있음

// const는 뭐하는 아이 ?
const name2 = "나히";
// name2 = "지도";
console.log(name2); // 재할당도 안되고, 재선언도 안되는 이도저도 못하는 아이에요

// 나이 계산하기
/* const currentYear = 2024;
let birthYear = parseInt(prompt("태어난 해를 입력하세요."));
let age = currentYear - birthYear + 1;
document.write(age); */

// 호이스팅 ?
var x = 10;
var sum = x + y; // y 누구 ? (아래에 있는 y가 선 선언이 아니라서 누군지 모름)
var y = 20; // 여기서 y를 만나서 위에 식으로 올라가서 연산을 하고 콘솔로그를 찍고 끝나는 구조로 됨
console.log(sum); // 이러고 NaN 띄우는 이상한 현상이 호이스팅임

let a = 10;
// let sum1 = a + b;
// let b = 20; >> 이러면 나오는데 레퍼런스 에러가 생김
// console.log(sum1);

// 자료형 알아보기
let data = 5;
typeof (data); // 이걸로 어떤 자료형인지 알수 있음

// undefined ?
let className;
let years = null;
console.log(className); // 변수 안에 값이 지정되지 않으면 찾을 수 없어서 뜨는 메세지 > 할당이 아직 되지 않은것.
console.log(years); // 할당이 되었지만 아무것도 모르는 상태인것.

// 객체 / 배열
// 객체는 이거 ! ↓
let profiles = {
  id: 0, // 키: 값으로 된 것을 프로퍼티라고 부름
  name: "도히",
  pronoum: "they/them"
};

let wallet = {
  name: "cardWallet",
  brand: "MPeak",
  color: "pink"
};

console.log(profiles);

// 배열은 이거 ! ↓
let color = [
  "red",
  "blue",
  "green"
];
console.log(color);

let fruits = [
  `apple`,
  `mango`,
  `banana`
];
console.log(fruits[1]);

//배열과 객체 중첩하기
let student = {
  name: "도레미",
  scoure: {
    history: 85,
    science: 94
  },
  friends: [
    "kim",
    "lee",
    "park"
  ]
};

// 과학 점수가 알고 싶을때는
console.log(student.scoure.science);

// 친구 이씨를 부르고 싶을때는
console.log(student.friends[1]);

// 두개를 같이 부르고 싶을때는
console.log(student.scoure.science, student.friends[1]);