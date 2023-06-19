/* 클로저 */
/* closure */

// 중첩된 함수들 속에서 내부함수가 외부 함수에 있는 상태에 접근 할 수 있는 권한을 갖게되는것.

function outer() {
    const Value = 10;


    function inner() {
        console.log("inner 에서의 Value 호출값은 : ", Value);
    };
    return inner;
    // 함수가 리턴이 될때 함수 뿐만 아니라 
    // 외부의 outer의 렉시컬 환경까지 함께 클로저에 의해 반환되기 때문에 가능하다.
    // 따라서 inner에서 Value에 접근할 수 있다.

};
const TestFunc = outer();
TestFunc(); /* Value = inner 에서의 Value 호출값은 :  10 */

// 즉!
// 자신이 생성될때의 렉시컬 환경을 기억하는 함수! 이고
// 클로저에 의해 참조되는 외부 함수의 변수를 " 자유 변수 " 라고함

/* ------------------------------------------------------------------------ */

/* 내부함수 외부함수 */

function 외부함수() {
    let testvalue = '적용 되는가?'
    function 내부함수() {
        console.log(testvalue);
    };
    내부함수();
};
console.log(외부함수());
// 내부함수는 외부함수의 지역변수에 접근하여 변수를 사용할 수 있다.

/* ------------------------------------------------------------------------ */

/* private variable */
/*  비밀       변수   */

// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 사용
// 최신 class의 pricate 필드나 메소드를 사용하는것과 같다.

function makeCounter() {
    let count = 0;
    // 헷갈리지 말것! 은닉하고자 하는 대사잉 외부의 함수!

    //--------------------------------- 

    function increase() {
        count++;
        console.log(`카운트 작동! 현재값은 ${count}`)
    };

    //사용자와 직접적으로 마주치게 되는 함수가 내부 함수
    //----------------------------------
    return increase;
};
// 이를 통해 데이터를 은닉하여 보안을 유지하고 공개 함수를 통해 데이터를 조작한다.

const increase = makeCounter();
increase(); /* Value = 카운트 작동! 현재값은 1 */
increase(); /* Value = 카운트 작동! 현재값은 2 */
increase(); /* Value = 카운트 작동! 현재값은 3 */

/* ------------------------------------------------------------------------ */

/* class를 이용한 보안 */
// 위와 같은 counter 함수를 최신 class로 제작하기

class Counter {
    #count = 0;
    // 변수에 # 을 붙이면 private 필드가 적용되어 외부에서 볼수도 조작할 수 도 없는 상태가된다.

    increase() {
        this.count++;
        console.log(`class 카운트 작동! 현재값은 ${this.count}`)
    };
};

const counter = new Counter();
counter.increase(); /* Value = class 카운트 작동! 현재값은 1 */
counter.increase(); /* Value = class 카운트 작동! 현재값은 2 */
counter.increase(); /* Value = class 카운트 작동! 현재값은 3 */
counter.increase(); /* Value = class 카운트 작동! 현재값은 4 */


/* ------------------------------------------------------------------------ */

/* 예전 공부 */

// 소프트 웨어가 커졌을때 아무나 접근하여 변경하는것을 방지하는 방법중 하나
function outline(비밀변수) {
    return {
        infunc1: function (내부함수1) {
            return 비밀변수;
        },
        infunc2: function (내부함수2) {
            비밀변수 = 내부함수2;
        }
    }
}
test1 = outline('내부함수1 적용');
test2 = outline('내부함수2 적용');

console.log(test1.infunc1());
console.log(test2.infunc1());

test1.infunc2("내부함수1 비밀 적용");
console.log(test1.infunc1());
console.log(test2.infunc1());