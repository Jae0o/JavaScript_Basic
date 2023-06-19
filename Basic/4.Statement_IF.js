'use strict';
/* IF Operator & else & else if */
/*          조 건 문 I F          */

/* 기본적인 형태
if (true or false 기준값 넣기 ) {
    true or false 의 기준에 일치한다면 출력할 코드
        } else {
        반대의 값이라면 출력할 코드
    }   
*/

/* ------------------------------------------------------------------------ */

/* If + else */
// if의 조건에 맞아 true라면 if의 할당값이 출력되어지고 false라면 else 값이 출력된다.

function test1(age) {
    if (age > 20) {
        console.log("성인");
    } else {
        console.log("어린이");
    }
}
test1(28);

/* ------------------------------------------------------------------------ */

/* If + else if + else */
// else if 는 여러개가 있다면 위에서부터 차례대로 검사한후 실행한다.

function test2(age, university) {
    if (age > 19 && university === "yes") {
        console.log("대학생입니다.");
    } else if (age > 19 && university === "no") {
        console.log("성인입니다.")
    } else if (age > 7) {
        console.log("청소년입니다.")
    } else {
        console.log("유아입니다.")
    }
}
test2(4, "yes");

/* ------------------------------------------------------------------------ */

/* ternary operator  */
/*  if 조건문 간단 사용법 */

// 조건 ? 'value1' : 'value2'
console.log(1 === 1 ? '같다' : '같지않다'); /* 값 = 같다 */
console.log(1 === 3 ? '같다' : '같지않다'); /* 값 = 같지않다 */


console.clear();
/* ------------------------------------------------------------------------ */

/* 예제 */

// 짝수면 true 홀수면 false
let num = 5;
if ((num % 2) === 0) {
    console.log("value : true");
} else {
    console.log("value : false");
};

console.log((num % 2) === 0 ? "ok" : "No");