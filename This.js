'use strict';
/* 함수속 this */

/* 크롬에서 실행 */

// function test() {
//     if (Window === this) {
//         console.log("현재의 상태는 window 라는 전역객체 안에 있다.");
//     }
// };
// test();

/* 크롬에서 실행하면 값 */
// "현재의 상태는 window 라는 전역객체 안에 있다."
/* 전역객체 */
// 모든 전역변수와 함수는 전역 객체 속에 존재하고 있는 속성의 일부일뿐임.




/* 메소드 속의 this */
// 메소드는 소속된 해당 객체를 의미한다.

/* test1 */
let test_func1 = {
    code1: function () {
        if (test_func1 === this) {
            console.log("메소드 속 this는 해당 객체를 가르킨다");
        };
    }
};

test_func1.code1();

/* test2 */
let test_func2 = {}
test_func2.code1 = function () {
    if (test_func2 === this) {
        console.log("메소드 속 this는 해당 객체를 가르킨다");
    };
};

test_func2.code1();




/* apply 속 this */
let key1 = { fg: 2, ft: 3, hf: 4 };
let key2 = {};
function test_func3() {
    switch (this) {
        case key1:
            console.log("key1 이 this값 ");
            break;

        case key2:
            console.log("key2 가 this값 ");
            break;
        default:
            console.log(" 값이 없음 ");
            break;
    }
}
test_func3.apply(key1);
test_func3.apply(key2);
test_func3(key1);