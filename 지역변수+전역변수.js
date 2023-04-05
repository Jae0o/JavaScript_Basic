/* 전역변수 와 지역변수 */

// 함수의 안에 지정된 변수는 함수 안에서만 작용하는 지역변수.
// 함수의 밖에서 지정된 변수는 전역변수.



/* 예제 1 */

function test() {
    let veriable = "local";
    console.log(veriable);
};
let veriable = "global";
test();
// 결과는 local 함수의 안에 있는 지역변수를 우선시한다.
// 전역변수가 지정 되어있다 하더라도 함수안의 지역변수와 같은 변수가 있다면 지역변수가 적용되어진다.



/* 예제 2 */

function test2() {
    let veriable2 = "local";
    let Lv = "local veriable";
    console.log(veriable2);
};
test2();
// /* console.log(Lv); */ = 결과는 undefined
//함수안에서 작동된 지역변수는 함수 밖에서도 영향을 줄수 없다.



/* 예제 3 */

let veriable3 = "global";
function test3() {
    veriable3 = 'local';
};
test3();
console.log(veriable3);
/* var let const 같은 선언자가 붙어 있지 않다면 지역변수로 작용하는것이 아니라
이전에 지정한 전역 변수를 대상으로 변경하는것과 같기 때문에 전역변수가 변하게 된다. */
