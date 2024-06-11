// 이 값을 false로 바꿔서도 테스트해 보세요. 
// let likePizza = false;

// 여기에 쓰인 아이들이 제적코드임
// const pizza = new Promise((resolve, reject) => { // promise는 함수를 이거 실행해달라고 전달하고, 실제로 함수를 실행하진 않음
//   if (likePizza) resolve('피자를 주문합니다.');
//   else reject('피자를 주문하지 않습니다.');
// });

// 여기 써진 아이들이 소비코드임
// pizza
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

/** 제작코드는 실행할 코드를 제작하는 개념으로 보는 거지 저 코드가 실제로 살행을 하진 않음 
 * 애초에 제작코드가 아니라 소비 코드가 소비를 하면서 실행을 한다고 생각하는 게 맞는 수준 ,,,
 * 
 * 저기서는 result에서 값을 받은걸 콘솔에서 찍어주는 것이 달라진다는 개념임
 * 위에 true, false마다 값이 달라지니까 확인해보기 !
*/


let likePizza = true;

const pizza = new Promise((resolve, reject) => {
  if (likePizza)
    resolve('피자를 주문합니다.');
  else
    reject('피자를 주문하지 않습니다.');
});

pizza
  .then(
    result => console.log(result)
  )
  .catch(
    err => console.error(err) // console.error로 하면 콘솔 상에 에러 메세지로 띄워줌
  )
  .finally(
    () => console.log('완료')
    // console.log('완료')
    // 이렇게 쓰면 비동기 안되고 얘먼저 뜲
    // 항상 프로미스 소비코드에서는 함수형으로 써야한다. 콜백함수를 이어붙여 비동기처리를 했다는 개념에서 시작한것을 잊지 말자
  );   