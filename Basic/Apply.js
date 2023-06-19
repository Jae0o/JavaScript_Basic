'use strict';
/* apply */
// 함수를 호출 할때 사용한다.
// 주어진 this(객체의)값과 배열로 제공되는 arguments(인자 값)들을 호출하여 함수 실행

function apply_test() {
    let sum = 0;
    for (num in this) {
        sum += this[num];
        /* this */ /* this의 역할이 굉장히 중요 */
        /* this를 넣는것으로 인해 함수
        넣고자 하는 배열 , 객체 의 이름 = this 라는 문구가 숨겨져 있는것과 같다. */
    }
    return console.log(sum);
}


/* 객체 list 와 배열 dictionary 를 이용한 apply 실행 */

let list1 = [1, 2, 3, 4];
apply_test.apply(list1); /* 결과 = 10 */
let list2 = ["텍스트", "를", "하나로", "합칠수", "있다"];
apply_test.apply(list2); /* 결과 = 0텍스트를하나로합칠수있다 */

let dictionary1 = { num1: 1, num2: 3, text1: "더하기" };
apply_test.apply(dictionary1); /* 결과 = 4더하기 */


/* apply 자체에 값 입력도 가능 */
apply_test.apply([10, 20, 30, 40]); /* 결과 = 100 */
apply_test.apply({ num1: 400, num2: 500, num3: 1500, num4: 600 }); /* 결과 = 3000 */












/* 신기했던 상식 */

function sence() {
    let sum = 0;
    for (num in this) {
        sum += this[num];
    }
    return console.log(sum);
}

let sencetest = { num1: 31278, num2: 2714, num3: 8934, sum1: sence }; /* 객체속 함수 */
sencetest.sum1();
/* 결과 */
// 42926function sence() {
//     let sum = 0;
//     for (num in this) {
//         sum += this[num];
//     }
//     return console.log(sum);
// }

// 함수 발동중 this 도 함께 더해져 this가 뜻하는 객체 sencetest 속 함수도 같이 더해져 함수 식이 같이 출력
// 이를 방지하기 위해 여러 가지 방법중


function sence2() {
    let sum = 0;
    for (num in this) {
        // if 문을 통해 함수를 부정해 준다.
        if (typeof this[num] !== 'function')
            sum += this[num];
    }
    return console.log(sum);
}
let sencetest2 = { num1: 31278, num2: 2714, num3: 8934, sum2: sence2 };
sencetest2.sum2();

// 하지만 이런 불편한 방법을 사용하지 않기위해 .apply를 사용!