'use strict';

/* Destructuring Assignment */
/*     구조   분해   할당      */
// Data 뭉치 ( 그룹화 ) 를 쉽게 만들수 있다.

let num = [1, 2, 3, 4, 5, 6];
let [one, two, three, ...others] = num;
// 구조분해후 할당 지정을 해주면 이후에 힘들게 인덱스 번호로의 호출이 아닌 각자의 네이밍으로 호출가능

console.log(one); /* Value = 1 */
console.log(two); /* Value = 2 */
console.log(three); /* Value = 3 */
console.log(others); /* Value = [ 4, 5, 6 ] */
// Spread를 통해 이후의 값들은 모두 others에 포함
// Spread미사용시 그냥 4만 들어옴

let animal = ['🐶', '🐱', '🦄'];
let [cat, dog, unicorn = '🐴', rabbit = "🐰"] = animal;
console.log(cat); /* Value = 🐶 */
console.log(dog); /* Value = 🐱 */
// 분해할당 과정에 원하는 순서를 변경할 수도 있다.
console.log(unicorn); /* Value = 🦄 */
// 기존의 값이 지정되어있다면 새로 지정하더라도 우선순위는 기존의 Array의 값이다.
console.log(rabbit); /* Value = 🐰 */
// 분해 할당 과정중에 새로운 값을 추가도 할 수 있음.

/* ------------------------------------------------------------------------ */

/* 함수에서의 사용 */

function De() {
    return ['사용', '가능'];
};
let [use, possible] = De();
// 함수에서의 출력되는 결과를 바로 구조 분해 할당을 통해 담아서 지정할 수 있다.

console.log(use); /* Value = 사용 */
console.log(possible); /* Value = 가능 */


const TestCoffee = { venti: 1000, grande: 600, small: 300 };

function display1(Object) {
    console.log(Object.venti, "ml");
    console.log(Object.grande, "ml");
    console.log(Object.small, "ml");
    // 해당 방법은 귀찮게 오브젝트와 속성을 따로 지정해줘야함.
};
display1(TestCoffee);
/* 결과 */
// 1000 ml
// 600 ml
// 300 ml

function Dedisplay({ venti, grande, small }) {
    // 매개 변수 위치에 분해할당을 지정.
    console.log(venti, "ml");
    console.log(grande, "ml");
    console.log(small, "ml");
};
Dedisplay(TestCoffee);
/* 결과 통일 */

/* 오브젝트 또한 분해할당 가능 */
let { venti, grande, samll } = TestCoffee;
console.log(grande); /* Value = 600 */