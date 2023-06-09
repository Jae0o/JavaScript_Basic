'use strict';
/* loop Statement*/
/*      반복문     */

/* ------------------------------------------------------------------------ */

/* while문 */
// 주의점 - 적정 한계 설정없이 실행시 컴퓨터에 무리한 과부하를 줄수 있다.

/* 기본적 형태
while ( 반복 조건 ) { 
    반복 실행될 코드 
}
*/

let i = 0;
while (i < 1) {
    console.log(i);
    i = i + 1;
}

/* ------------------------------------------------------------------------ */

/* for 문 */

// while 문의 상위 대체제 같은 느낌
// 조건 란이 순서가 매우 중요하다

/* 기본적 형태
for ( 변수선언문; 반복조건; 증감식) { 
    반복 실행할 코드
}
*/

/* 실행되어지는 과정 */
// 1. 변수선언문
// 2. 반복조건의 값이 참이면 { } 코드가 실행이된다
// 3. 증감식이 수행되어 값이 증가
// 4. 조건식이 false가 될때까지 2번 3번이 반복되어진다.

for (let i = 0; i < 2; i++) {
    console.log(i);
};

/* ------------------------------------------------------------------------ */

/* break */

// break는 조건에 맞는 값에 도달하면 활동을 정지한다.
// 조건문이 필요함.

for (let i = 0; i < 20; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
} /* 0~4 까지 출력된후 5에 멈추고 나머지 6~19는 출력이 안된다. */

/* ------------------------------------------------------------------------ */

/* continue  */

// continue 는 break와 다르게 조건에 도달한 부분만 활동을 정지하고 이후 계속 진행한다.
// 조건문이 필요함.

for (let i = 0; i < 20; i++) {
    if (i === 5 || i == 8) {
        continue;
    }
    console.log(i);
} /* 5와 8이 제외된 0부터 19까지의 값이 출력됨.*/



// 반복문의 중첩 실행

/* 예시 */
for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
        console.log(i, o);
    }
};
