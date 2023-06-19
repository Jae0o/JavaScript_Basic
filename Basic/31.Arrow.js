"use strict";

/* Arrow Function */

// JavaScript 에서 함수는 만능이지만 함수 or 함수 생성자를 사용하고 만들기 위해서는
// 불필요한 무거운 Prototype이 생성된다.

/* ------------------------------------------------------------------------ */

const heavy = {
    name: "heavy prototype",
    heavyFunc: function () {
        console.log("heavy한 prototype의 생성.")
    }
};
heavy.heavyFunc(); /* Value = heavy한 prototype의 생성. */

const heavyfunc = new heavy.heavyFunc();
console.log(heavyfunc); /* Value = heavyFunc {} */
// 이러한 방법으로 function을 지정해 사용하면 생성자 함수로도 사용해
// 무거운 prototype을 남기기때문에 좋지않다.

/* ------------------------------------------------------------------------ */

/* 해결방법 : 객체의 method */

const method = {
    name: "object method",
    method() {
        console.log("해당 방법을 객체의 메소드라고 한다.")
    }
};
method.method(); /* Value = 해당 방법을 객체의 메소드라고 한다. */
// 정상적 호출도 가능하지만

try {
    const newMethod = new method.method();
} catch (error) {
    console.log("객체의 메소드는 생성자 사용 불가!") /* Value = 객체의 메소드는 생성자 사용 불가! */
};
// Object method 방식을 사용시 생성자 함수로 이용이 불가능하고
// 즉 무거운 prototype의 생성을 막아준다.

/* ------------------------------------------------------------------------ */

/* Arrow */
// Arrow 함수 또한 객체의 메소드와 같은 기능을 한다

const Arrow = {
    name: "Arrow function",
    ArrowFunc: () => console.log("화살표 함수 라고도 함"),
    TestArguments: () => console.log(arguments)
};
Arrow.ArrowFunc(); /* Value = 화살표 함수 라고도 함 */
// 역시 잘 작동하고

try {
    const ArrowTest = new Arrow.ArrowFunc();
} catch (error) {
    console.log("Arrow 함수 또한 생성자 사용 불가!") /* Value = Arrow 함수 또한 생성자 사용 불가! */
};

/* Arrow Function 특징 */
// 1. 문법이 깔끔해진다.
// 2. 생성자 Function 으로 사용이 불가능해 무거운 prototype 생성이 불가능해진다.
// 3. 함수 외부의 arguments를 참조만 하게된다.
console.log(Arrow.TestArguments());
//4. this 에 대한 바인딩이 정적으로 생성됨. 즉 ! 가장 가까운 상위 scope에 바인딩 됨.
