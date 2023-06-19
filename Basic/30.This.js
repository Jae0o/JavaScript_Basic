/* This */
/*  이것 */
// Java Script에서는 문맥에 따라 this가 가르키는 것이 다르다.
// Js와 Ts 는 다른 언어와 다르게 정적이지 않고 런타임 동안 동적으로 작동한다.

/* ------------------------------------------------------------------------ */

/* 기본값 */

// node 에서는 Global
// Browser 에서는 Window 를 뜻함.

console.log(globalThis);

/* <ref *1> Object [global] {
  global: [Circular *1],
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    structuredClone: [Getter/Setter],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [AsyncFunction: fetch],
    crypto: [Getter]
} */
// 해당 값 처럼 기본값 this 는 global을 뜻하고 호출시 사용가능한 함수가 나옴.

/* ------------------------------------------------------------------------ */

/* 함수 내부에서의 this */

function display() {
    console.log(this);
}
display();
// 위와 똑같이 global 값이 나옴

"use strict"; /* 를 맨위에 붙인 상태라면 */
function display2() {
    console.log(this);
}
display2(); /* Value = undefined */

// 엄격모드 use stricti 에서는 undefined
// 느슨한모드 기본값 에서는 globalThis와 같음

/* ------------------------------------------------------------------------ */

/* 생성자 함수 or Class 에서의 thid */

function NewClass(name) {
    this.name = name;
    // instance.name = name ; 과 같음
    this.display = () => console.log(this.name);
    // instance.display = () => console.log(instance.name); 과 같음 
};
const instance = new NewClass("Instance 인스턴스");


instance.display(); /* Value = Instance 인스턴스 */
// this = instance


// 앞으로 생성될 인스턴스 자체를 뜻하고 가르킨다.

/* ------------------------------------------------------------------------ */

/* this 의 동적 바인딩 */
// Java , C# , C++ 등 대부분의 객체 지향 프로그래밍 언어는 this가 자신의 인스턴스를 가리킴.
// 즉, 정적으로 인스턴스가 만들어 지고 만들어진 순간 this가 결정되어버림.
// but!
// JavaScript 에서는 누가 호출 하는가에 따라 this가 달라지고
// 즉, 호출하는 사람에 의해 동적으로 작동되어짐.

/* 정적으로 바인딩 하는방법 */
function Dog(Text) {
    this.Text = Text;
    this.display = function () {
        console.log(`개는 말할때 ${Text}`);
    };
    this.display = this.display.bind(this);
    // 1. bind 함수를 이용해 수동적으로 바인딩 해주기!
};

function Cat(Text) {
    this.Text = Text;
    this.display = () => {
        // 2. arrow 함수를 이용: 화살 함수는 렉시컬 환경에서의 this를 기억함.
        console.log(`고양이는 말할때 ${Text}`);
    };
};

const newDog = new Dog("멍멍멍");
const newCat = new Cat("냐옹냐옹냐옹");

newDog.display(); /* Value = 개는 말할때 멍멍멍 */
newCat.display(); /* Value = 고양이는 말할때 냐옹냐옹냐옹 */

newDog.display = newCat.display;

newCat.display();
newDog.display();