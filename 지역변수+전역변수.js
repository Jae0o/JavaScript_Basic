/* 전역변수 와 지역변수 */

// 함수의 안에 지정된 변수는 함수 안에서만 작용하는 지역변수.
// 함수의 밖에서 지정된 변수는 전역변수.

/* java script에서는 함수 안에 있는 변수만이 지역변수의 가치를 같는다. */



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



/* 예시 4 */

let count = 5;

function a() {
    let count = 10;
    b();
}
function b() {
    console.log(count);
}

a(); /* 결과 = 5 */
/* 함수안에서 함수를 실행하더라도 사용될때의 변수가 아닌 정의될때는 전역변수를 사용! */



/* 전역 함수의 사용 예시 */

let ex = {};
ex.calculator = {
    'left': null,
    'right': null
};
ex.coordinate = {
    'left': null,
    'right': null
};

ex.calculator.left = 20;
console.log(ex.calculator.left);
ex.coordinate.right = 50;
console.log(ex.coordinate.right);

function sum() {
    return ex.calculator.left + ex.coordinate.right;
}
console.log(sum());

// 만약 이렇게라도 함수의 저역변수 사용을 하고싶지 않을때는
(function () {
    let ex = {};
    ex.calculator = {
        'left': null,
        'right': null
    };
    ex.coordinate = {
        'left': null,
        'right': null
    };

    ex.calculator.left = 20;
    console.log(ex.calculator.left);
    ex.coordinate.right = 50;
    console.log(ex.coordinate.right);

    function sum() {
        return ex.calculator.left + ex.coordinate.right;
    }
    console.log(sum());
})();

/* 전체를 함수로 묶고 한번더 괄호로 묶어준후,
함수 사용법과 같이 마지막에 괄호를 한번 붙여주면 가능! */
