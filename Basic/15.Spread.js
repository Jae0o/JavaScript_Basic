'use strict';

/* Spread " ... " */
/*  펼치다  " ... " */
// Spread 연산자, 전개구문

// 모든 Iterable은 Spread 될수 있다.
// 순회가 가능한 모든것들을 펼칠수 있다.
// function( ... iterable ) / [ ... iterable ] / { ... object }

function ADD(a, b, c, d) { return a + b + c + d };

let num = [1, 2, 3, 4];

console.log(ADD(num[0], num[1], num[2], num[3])); /* Value = 10 */
// 하지만 이러한 방식은 너무 힘들고 시간낭비가 심함.

console.log(ADD(...num)); /* Value = 10 */
// " ... " Spead를 이용하면 간편

/* ------------------------------------------------------------------------ */

/* 사용처 */

/* Parameters */

function Prameters(num1, num2, ...num) {
    console.log(`num1 : ${num1} / num2 : ${num2} / num : ${num}`)
}
Prameters(1, 2, 3, 4, 5, 6, 7, 8)
/* Value = num1 : 1 / num2 : 2 / num : 3,4,5,6,7,8 */
// num1 과  num2 이후의 값은 Spead 연산자에 의해 num 이라는 인자에 들어가게된다.


/* Array Concat */
let Array1 = [1, 2, 3];
let Array2 = [4, 5, 6];
let Arrayconcat = Array1.concat(Array2);
console.log(Arrayconcat); /* Value = [ 1, 2, 3, 4, 5, 6 ] */

let ArraySpread = [...Array2, "추가가능", ...Array1];
//구분을 위해 순서를 반대로
console.log(ArraySpread); /* Value = [ 4, 5, 6, '추가가능', 1, 2, 3 ] */
// concat을 대체하는 방법으로 Spread를 이용해 펼쳐 넣을 수 있다.
// 좀 더 장점으로 중간에 값을 추가하는 등 여러가지 일을 수행 가능


/* Object */
let ObjectNum = { "one": "일", "two": "이" };
let NewNum = { ...ObjectNum, "three": "삼" };

console.log(NewNum); /* Value = { one: '일', two: '이', three: '삼' } */
/* 주의점 */
// object는 Iterator가 아니지만 Spread는 Iterator와 Object에서 사용가능하다!

console.log(ObjectNum); /* Value = { one: '일', two: '이' } */
// 당연하게도 이전의 값은 유지된다.
