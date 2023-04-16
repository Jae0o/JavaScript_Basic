/* Operator */
/*  선언자    */

/* ------------------------------------------------------------------------ */

/* string concatenation */

console.log("나는" + " 합친다");
// 텍스트를 이어 붙일수 있음
console.log("1" + 2);
// 숫자와 텍스트는 표기상 이어 붙일수 있음

/* ------------------------------------------------------------------------ */

//* numeric operator */

console.log(2 + 3); /* 더하기 */
console.log(2 - 3); /* 빼기 */
console.log(2 / 3); /* 나누기 */
console.log(2 * 3); /* 곱하기 */
console.log(2 % 3); /* 나머지후 나머지값 */
console.log(2 ** 3); /* 지수 / 거듭제곱 */

/* ------------------------------------------------------------------------ */

/* unary operators */
//  + 양    - 음    ! 부정
let test = 9;
console.log(+test); /* 9 */
console.log(-test); /* -9 */

// 숫자가 아닌 타입앞에 +를 붙이면 숫자로 변경시 어떤 값이 나오는지 확인 할수 있다
console.log(+" "); /* 0 */
console.log(+true); /* 1 */
console.log(+false); /* 0 */
console.log(+null); /* 0 */
console.log(+undefined); /* NaN */

console.log(!true); /* false */
console.log(!false); /* true */
// !!를 boolean이 아닌 타입의 앞에 붙이면 데이터 타입을 boolean으로 변경할수 있다.
console.log(!!123); /* ture */
console.log(!!null); /* false */
/* ------------------------------------------------------------------------ */

/* incremant / decrement operator */
/*  증가 / 감소 선언자 */

/* ++ */
// "++"뜻은 let count = count + 1 ; 이라는 뜻과 동일하다
let count = 0;
let preincrement = ++count;
// 1. count = count + 1 적용후
// 2. preincrement = count 적용
console.log(preincrement); /* 값 = 1 */
console.log(count); /* 값 = 1 */
// ++를 적용후 선언이 활성화 되었기 때문에 더해진 값이 출력됨

let postincrement = count++;
// 1. postincrement = count 적용후
// 2. count = count + 1 적용됨
console.log(postincrement); /* 값 = 1 */
console.log(count); /* 값 = 2 */
// 위와 달리 선언이 먼저 활성화 된후 ++ 가 적용되었기 때문에 선언값은 1 이후 count는 2가 된다

/* -- */
// "--"뜻은 let count = count - 1 ; 이라는 뜻과 동일하다
let decount = 0;
let predecrement = --decount;
// 1. decount = count - 1 적용후
// 2. predecrement = count 적용
console.log(predecrement); /* 값 = -1 */
console.log(decount); /* 값 = -1 */
// --를 적용후 선언이 활성화 되었기 때문에 더해진 값이 출력됨

let postdecrement = decount--;
// 1. postdecrement = count 적용후
// 2. decount = count + 1 적용됨
console.log(postdecrement); /* 값 = -1 */
console.log(decount); /* 값 = -2 */
// 위와 달리 선언이 먼저 활성화 된후 -- 가 적용되었기 때문에 선언값은 1 이후 count는 2가 된다

/* ------------------------------------------------------------------------ */

/* assignment operator */
/*      할당    선언자    */

/* = */
let 할당 = " 할당됨 "
console.log(할당); /* 값 = 할당됨 */

let x = 3;
let y = 7;

x += y; /* x = x + y */
x -= y; /* x = x - y */
x *= y; /* x = x * y */
x /= y; /* x = x / y */

/* ------------------------------------------------------------------------ */

/* comparison operator */
/*    비교       연산자   */

console.log(10 > 6); /* 값 = true */ /* 보다큰 */
console.log(10 >= 6); /* 값 = true */ /* 크거나 같은 */
console.log(10 < 6); /* 값 = false */ /* 보다 작은 */
console.log(10 <= 6); /* 값 = false */ /* 작거나 같은 */

/* ------------------------------------------------------------------------ */

/* logical operator */
/*   논리     연산자   */
// 논리 비교 사용시에는 좀더 무거운 값이나 실행을 가진 아이템을 뒤로 붙이기
let value1 = true;
let value2 = false;

/* || or */
// 비교 값들중 하나라도 true 라면 true !
console.log(value1 || value2); /* 값 = true */
/* 중요! */
// or 연산자는 true를 발견하는 순간 작동을 멈춰버림

/* && and */
// 모든 값들이 true일때 ture
console.log(value1 && value2); /* 값 = false */

/* ! not */
// 값의 반대 값을 호출함
console.log(!value1); /* 값 = false */
console.log(!value2); /* 값 = true */

/* ------------------------------------------------------------------------ */

/* Equality */
/*   균등(=) */
let string = '50';
let number = 50;

/* loose Equality */
/*  느슨한 ( == )   */
console.log(string == number); /* 값 = true */
console.log(string != number); /* 값 = false */
// 비교할 값들의 type을 동등하게 바꿔 값이 같은지를 비교한다.

/* strict Equality */
/*  엄격한   (===)   */
console.log(string === number); /* 값 = false */
console.log(string !== number); /* 값 = true */
// 비교할 값들의 type까지도 엄격하게 검사하여 비교한다.

// 웬만하면 strict equality를 사용