/* length의 심화 */
// 함수이름.length와 arguments.length의 차이?

function 함수이름(avg1, avg2) {
    console.log("함수이름.length : " + 함수이름.length);
    console.log("arguments.length : " + arguments.length);
    return console.log(avg1 + avg2);
};

함수이름(1, 10, 1000, 100000);
/* 결과
함수이름.length : 2
arguments.length : 4 */

/* 함수.length */
// 함수가 정의한 매개 변수 (avg1 and avg2) 자체의 수를 표시한다.
/* arguments.length */
// 함수의 배개로 전송한 모든 인자 (124213, 1231234, 123123, 12321) 의 갯수를 전송하다.