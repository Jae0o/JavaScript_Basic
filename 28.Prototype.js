"use strict";

/* Prototype */
/*    원형    */

// 원형을 copy해 다른것을 만들기 이전의 원본
//  or 임시 대략적인 툴 JS에서는 비슷한 object의 베이스 틀.


/* ------------------------------------------------------------------------ */


/* Object.Prototype */
// 객체는 공통적으로 가지고 있는 속성,함수들을 묶은 object prototype을 가지고있음. ex) tostring, valueOf

const cat = { name: "깜시", age: 3 };
/* Object.keys( 이름 ) */
// 해당 이름의 object의 key들을 불러옴.
console.log(Object.keys(cat)); /* Value = [ 'name', 'age' ] */

/* Object.values( 이름 ) */
// 해당 이름의 object의 value들을 불러옴
console.log(Object.values(cat)); /* Value = [ '깜시', 3 ] */

/* Object.entries( 이름 ) */
// 해당 이름의 object의 key와 value 값을 불러옴
console.log(Object.entries(cat)); /* Value = [ [ 'name', '깜시' ], [ 'age', 3 ] ] */

/* " key " in 이름 */
// 해당 이름의 object에서 해당 key가 존재하는지 알려줌
console.log("age" in cat); /* Value = true */
// 다른방법으로는
console.log(cat.hasOwnProperty("age")); /* Value = true */

/* ------------------------------------------------------------------------ */

/* Array.Prototype */
// 배열또한 Array라는 Prototype을 상속하고 있고
// 배열은 결국 객체이기 때문에 object Prototype을 계승하고 있다.

const dog = ["이름", 3, 3, 4]

console.log(Array.isArray(dog)); /* Value = true */

//  Array.Prototype = Object.Prototype

/* ------------------------------------------------------------------------ */


/* Descriptor */
/*  디스크립터   */
// object 각각의 프로퍼티는 프로퍼티 디스크립터 라고 하는 객체로 저장된다.

const Descriptors = Object.getOwnPropertyDescriptors(cat);
console.log(Descriptors);
/* Value = {
    name: { value: '깜시', writable: true, enumerable: true, configurable: true },
    age: { value: 3, writable: true, enumerable: true, configurable: true }
} */

// writable : 값의 수정 가능여부
// enumerable : 값을 열거할 수 있는지 / 출력할 수 잇는지.
// configurable : 속성들을 수정 혹은 삭제 할 수 있는지.

const Desc = Object.getOwnPropertyDescriptor(cat, "name");

console.log(Desc);
/* Value = { value: '깜시', writable: true, enumerable: true, configurable: true } */

// Descriptor는 한개의 key에 해당하는 디스크립터만, Descriptors는 해당 object의 모든 key의 디스크립터를

Object.defineProperty(cat, "age", {
    value: "수정왠료",
    writable: false,
    enumerable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(cat, "age"));
/* Value = { value: '수정왠료', writable: false, enumerable: false, configurable: false } */


console.log(Object.keys(cat)); /* Value = [ 'name' ] */
// 위에서 defineProperty로 수정하면서 enumerable의 값을 변경했기 때문에 나타나지않음.