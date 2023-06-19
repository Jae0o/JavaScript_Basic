"use strict";
/* Iteration Protocol */
/* 순회가 가능하기위해 따라야 하는 규칙 or 인터페이스 */
// 규격에 맞다면 for...of or spread 에서 사용가능하고 이런것이 가능한 기본적 Data Type 은 Array, String, Map, Set

const testArray = [1, 2, 3];
// 배열은 기본적으로 순회가 가능하다.
for (const item of testArray) {
    // 기본적으로 for ... of 를 이용해 순회하여 호출이 가능하다.
    console.log(10 + item);
}
/* Value */
//11
//12
//13

// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은 순회가능한 객체이다 라는뜻
// 순회가 가능하다면 for... of , spread를 사용할 수 있다.

const valuesTest = testArray.values();
console.log(valuesTest); /* Value = Object [Array Iterator] {} */
console.log(valuesTest.next()); /* Value = { value: 1, done: false } */
console.log(valuesTest.next()); /* Value = { value: 2, done: false } */
console.log(valuesTest.next()); /* Value = { value: 3, done: false } */
console.log(valuesTest.next()); /* Value = { value: undefined, done: true } */

// done : 결과가 끝났다면 true 아니라면 false
console.log(valuesTest.next().done); /* Value = true */

console.log(valuesTest.next().value); /* Value = undefined */
// 이후의 결과가 끝났기 때문에 undefined가 출력 아니라면 해당 값이 출력
// ex ) [1,2,3] 이 아닌 [ 1,2,3,4,5,6 ] 이었다면 결과 값으로 6이 출력

/* ------------------------------------------------------------------------ */

/* 예시 */

function iteratorTest(num, maxV, callback) {
    return {
        [Symbol.iterator]() {
            let multi = num;
            return {
                next() {
                    return { value: callback(num++), done: multi > maxV };
                },
            };
        },
    };
}