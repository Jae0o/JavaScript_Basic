'use strict';
/* 객체의 상식 */

let 객체 = {} /* 객체를 생성 */
객체.프로퍼티 = "value";
객체.메소드 = function () { };
// 객체 속에 존재하는 변수는 프로퍼티 / property 라고 함
// 객체 속에 존재하는 함수는 메소드 / method 라고 함



/* 생성자 construct */
// 객체를 만드는 역할을 하는 함수

function id(name) {
    this.name = name;
    this.introduce = function () {
        return "아이디는 " + this.name;
    }
};

let code1 = new id('leey153');
console.log(code1.introduce());
let code2 = new id('leey123');
console.log(code1.introduce() + code2.introduce());

// id 라는 이름의 매배변수는 name !
// 이후 this.name의 this = 앞으로 주어질 객체 들의 이름 code1 / code2