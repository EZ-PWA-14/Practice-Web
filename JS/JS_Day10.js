// JS로 노드 만들기
// 단일 노드 생성
let newSpan = document.createElement(`span`);
// 텍스트 노드 생성
let spanText = document.createTextNode(`swift`);

// 노드간 서로 연결
newSpan.appendChild(spanText);
// 연결된 전체노드를 body에 연결
document.body.appendChild(newSpan);

// 이런 방법으로도 가능
// 똑같이 단일 노드 생성
let newDiv = document.createElement(`div`);
// 바로 추가하기
document.body.appendChild(newDiv);

// querySelector로 div를 잡고
let div = document.querySelector(`div`);
// 비로 텍스트 넣기
div.textContent = `swift`; // 재검증

// 노드 상단으로 보내기
// 동일하게 구성하고
let newP = document.createElement(`p`);
let pText = document.createTextNode(`bootstrap`);
newP.appendChild(pText);

// querySelectorAll로 body 전체의 p를 부르고
let basic = document.querySelectorAll(`p`)[0];

// insertBefore로 상위로 그냥 올리기
document.body.insertBefore(newP, basic);

// 사진을 노드 상에 추가해보기
// 이미지 태그 추가
let newImg = document.createElement(`img`);

// 속성값 전달
newImg.setAttribute(`src`, `../Images/JS_Days/wall.jpg`);
newImg.setAttribute(`alt`, `wallpaper`);

// 이미지 노출
document.body.appendChild(newImg);