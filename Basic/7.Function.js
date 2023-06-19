'use strict';
/* function 함수 */
// 높은 재사용성과 유지보수의 용이 함으로 매우 중요하다.
// 사용자에게 특정 데이터를 받아내고
// 특정한 블럭(함수)안에서 특정 데이터를 처리한후
// 결과같을 다시 뱉어낸다.

/* ------------------------------------------------------------------------ */

/* 기본 형식 */
/* function 함수이름 ( 매개변수 .... ) {
    code 실행할 코드 ;
    Return 반환값 ;
} */


/* 함수 호출 */
// 함수 이름 (매개변수 값));

/* ------------------------------------------------------------------------ */

/* 예시 */
function function_first(parameter1, parameter2) {
  console.log(parameter1 * parameter2);
}

function_first(15, 19);

/* ------------------------------------------------------------------------ */

/* return */
// return 에서 ; 까지 사이의 코드를 출력값으로 지정.
// 첫 return 이후의 함수는 작동 하지 않고 함수 종료.

/* return 예시 */
function test_return(test1, test2) {
  console.log(test1 + test2);
  console.log(test1 / test2);
  return test1;
  return test2;
  console.log(test1 * test2);
}
test_return(10, 10);

// 조건이 맞지 않는 경우 함수의 도입부에서 종료 시킴.
// 무거운 함수의 경우 도입부 조건 차단이 중요.
function ReturnTest(num) {
  if (num < 0) {
    return console.log("음수");
  };
  console.log("양수");
};
ReturnTest(10);
ReturnTest(-13);

/* ------------------------------------------------------------------------ */

/* 매개변수 Parameter */
// parameter의 기본값은 undefined.
// 매개 변수는 함수 내부에서 사용가능한 Arguments 객체에 저장되어진다.

/* default parameter 지정 */
function ParameterTest(index1 = 2, index2 = 2) {
  //                     호출시 별도의 prameter값 이 없다면 괄호 안의 default 값 호출
  console.log(`index1 의 값은 : ${index1}`);
  console.log(`index2 의 값은 : ${index2}`);
}
ParameterTest();

ParameterTest(10, 10);
// 호출할때 별도의 안자값을 지정하면 default 값은 무시되어 인자값이 적용된다.

/* Rest 매개변수 Rest Parameter */
// 무수한 인자를 받거나 얼마나 인자를 받을지 알수 없을때 사용한다.

/* Not use rest */
function NotRestTest(num) {
  console.log(`Not use test : ${num}`);
}
NotRestTest(1, 2, 3, 4);

/* Use rest */
function RestTest(...num) {
  console.log(`Use rest : ${num}`);
}
RestTest(5, 2, 4, 1);
RestTest(1, 2, 3, 4, 5, 6);

/* 응용 */
function RestTest2(a, b, c, ...num) {
  console.log(`Use rest : ${num}
    a : ${a}
    b : ${b}
    c : ${c}`);
};
RestTest2(9, 8, 7, 6, 5, 4);

/* ------------------------------------------------------------------------ */

/* 여러 정의 방법 */

/* 함수 선언문 */
function func1(num1, num2) { return num1 + num2 };
console.log(` 함수 선언문 방식 : ${func1(2, 2)}`);

/* 함수 표현식 (무명 함수) */
let func2 = function (num1, num2) { return num1 + num2 };
console.log(` 함수 표현식 방식 : ${func2(6, 3)}`);

/* 화살표 함수 방식 */
let func3 = (num1, num2) => { return num1 + num2 };
console.log(` 화살표 함수 방식 : ${func3(4, 3)}`);

/* 1회성 함수 */
// IIFE = Immedicately-Invoked Function Expressions
(function () {
  console.log("1회성 함수 표현할대 사용하고 잘안쓰임");
})();

/* ------------------------------------------------------------------------ */

/* 값으로써의 함수 */

// 함수는 값이기 때문에 다른함수의 인자로 전달 될 수있다.

function calculator(func, num) {
  return func(num);
}

function increase(num) {
  return num + 100;
}

function decrease(num) {
  return num - 100;
}

console.log(calculator(increase, 3)); /* 값 = 103 */
console.log(calculator(decrease, 3)); /* 값 = -97 */

/* ------------------------------------------------------------------------ */

/* Callback 콜백 함수 */

/* 개념 */
// 1. 일급 객체 = 일급 객체 함수
// 함수가 일반 객체와 같이 모든 연산이 가능한 객체이며
// 함수의 매개변수로 전달 가능 / 함수의 반환값으로 사용가능 / 할당 가능 / 동일 비교가 가능 하다.

// 2. 고차함수
// 일자로 함수를 받을수 있고 = 콜백함수
// 함수를 반환하는 함수

/* callback 함수 예시 */

const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

// callback이라는 함수에 action 매개변수에 전달된 함수가 callback 함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스주소가 전달된다,
function callback(num1, num2, action) {
  let value = action(num1, num2);
  console.log(value);
  return value
}
callback(2, 6, add);
callback(2, 6, multiply);

/* ------------------------------------------------------------------------ */

/* Function 주의 */

//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는것은 좋지않다.
//상태변경이 필요한 경우에는, 새로운 오브젝트와 값을 만들어서 반환해야함
//원시값은 값에 의한 복사가 이루어져 괜찮지만
//객체의 경우 메모리 주소를 가져기오기때문에 큰 오류를 만들어낼수 있다.

function NO(value) {
  value = 5;
  // 외부의 값을 받은 매개변수를 내부에서 변경
  console.log(value);
};

const not = 4;
console.log(not); /* 값 = 4 */
NO(not); /* 값 = 5 */
// 내부에서 외부의 값을 변경하면안됨.