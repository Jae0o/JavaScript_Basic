"use strict";

/* Hoisting */

// Java Script 엔진이 code를 실행하기전 변수, 함수, 클래스의 선언문을 끌어 올려줌
// 즉 ! 제일 아래 선언한 것을 제일 먼저 실행함.

/* ------------------------------------------------------------------------ */

/* function */
call(); /* Value = Hoisting 덕에 실행 가능 */
// 함수의 Hoisting은 함수 선언문 작성 부분 이전에도 작동이 가능하게 해준다.

function call() {
    console.log("Hoisting 덕에 실행 가능")
};

/* ------------------------------------------------------------------------ */

/* Variable */


try {
    console.log(letVariable)
} catch (error) {
    console.log("Error!!");
    // function과 다르게 에러가 나지만 정의가 된것이 아닌
    // "초기화" 가 진행이 되지 않았다는 에러가 발생한다. 그렇기 때문에 초기화 이전에 변수에 접근시 컴파일 에러가 발생한것,
};

let letVariable = "let";
const constVariable = "const";

// 즉 function , class 를 변수로 지정하여 사용하게 된다면? 이와 같이 에러가 발생하게됨.

/* 심화 */

let A = "A";
{
    try {
        console.log(A); /* Value = Cannot access 'A' before initialization */
    } catch (error) {
        console.log("Error!")
        // 에러 발생의 이유는 해당 값 B의 A변수가 호이스팅 되었기 때문에!
    };
    let A = "B";
};
