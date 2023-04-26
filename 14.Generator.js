"use strict";

/* Generator */
/*   생성기    */
// iterator를 더 쉽게 만들수 있는 방법

function* Generator() {
    try {
        // function뒤에 "*" 를 붙이면 generator 가 만들어진다.
        for (let i = 0; i < 10; i++) {
            yield i * 2;
            // 사용자가 next를 호출할때까지 기다렸다가 호출하면 하나씩 순회하며 실행
        }
    } catch (error) {
        console.log(error)
    };
    // try { } catch ( ) { } 문
};
let TestLog = Generator();

console.log(TestLog.next()); /* Value = { value: 0, done: false } */
console.log(TestLog.next()); /* Value = { value: 2, done: false } */
console.log(TestLog.next()); /* Value = { value: 4, done: false } */

/* ------------------------------------------------------------------------ */

/* Iterator.throw( ) */
// 에러를 던져 에러를 일으킬 수 있다.
console.log(TestLog.throw('Error!')) /* Value = Error!
                                                { value: undefined, done: true } */

/* ------------------------------------------------------------------------ */

/* Iterator.return( ) */
// 결과가 결과가 출력되지 않았지만 도중에 결과를 끊어버리고 마무리 시킨다.
console.log(TestLog.return()); /* Value = { value: undefined, done: true } */
