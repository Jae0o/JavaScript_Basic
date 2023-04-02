/* function 함수 */
// 높은 재사용성과 유지보수의 용이 함으로 매우 중요하다.


/* 기본 형식 */
// function 함수이름 ( 매개변수 .... ) {
//       code 실행할 코드 ;
//       Return 반환값 ;
// }


/* 함수 호출 */
// 함수 이름 (인자);

/* 매개변수 parameter 를 지정후 인자 argument 를 통해 대입하여 계산 */

/* 예시 */
function function_first(parameter1, parameter2) {
    console.log(parameter1 * parameter2);
}

function_first(15, 19);

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


/* 여러 정의 방법 */

// first
function defind1() { };
// second
defind2 = function () { };
//third
(function () { console.log("1회성 함수 표현할대 사용하고 잘안쓰임") })();