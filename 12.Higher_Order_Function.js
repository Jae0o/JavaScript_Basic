"use strict";

/* Higher Order Function */   /* 고차 함수 */
//  인자로 함수 ( Callback Function ) 를 받아드릴수 있고 함수를 반환하는 함수.

/* 순수 함수 */
// 함수 내부에서 전달받은 변수나 함수의 Data를 수정하지 는
// Data 변경 X , 변수 사용 X , 조건문 X , 반복문 X

/* 함수형 프로그래밍 */
// 특정한 일을 수행하는 함수 ( 순수 함수 ) 들끼리 묶어 놓음

// 사용할때 return을 잘 붙여야 작동한다.

/* ------------------------------------------------------------------------ */

const Testarray = ["가", "나", "다", "라"];
console.log(Testarray); /* Value = [ '가', '나', '다', '라' ] */
/* Array.forEach( function( value , index , array ) { code } ) */
// 배열의 item을 하나씩 거치며 code를 실행한다.
Testarray.forEach(function (value, index, array) {
    console.log("value : " + value);
    console.log("index : " + index);
    console.log("array : " + array);
    console.log("------------ 구분선 -----------");
})

/* Value */
// value : 가
// index : 0
// array : 가,나,다,라
// ------------ 구분선 -----------
// value : 나
// index : 1
// array : 가,나,다,라
// ------------ 구분선 -----------
// value : 다
// index : 2
// array : 가,나,다,라
// ------------ 구분선 -----------
// value : 라
// index : 3
// array : 가,나,다,라
// ------------ 구분선 -----------

/* 축약 가능 */
Testarray.forEach((value, index) => (console.log(index)))

/* Value */
// 0
// 1
// 2
// 3

/* ------------------------------------------------------------------------ */

const one = { "name": "일", "동일": "값" };
const two = { "name": "이", "동일": "값" };
const three = { "name": "삼", "동일": "값" };
let findArray = [one, two, three];
console.log(findArray); /* value = [ { name: '일' }, { name: '이' }, { name: '삼' } ] */

/* Array.find ( function ( array ) { 조건 } ) */
// Array에서 콜백함수 조건에 맞는 item을 찾아 반환
const found = findArray.find(function (array) { return array.name === "이" })
// 배열을 매개 변수로 해당 배열의 item에 있는 name 이라는 속성과 같은 값을 찾음

console.log(found); /* value = { name: '이' } */

/* Array.findIndex ( function ( array ) { 조건 } ) */
// 해당 조건에 맞는 index번호를 반환
const foundindex = findArray.findIndex(function (array) { return array.name === "이" })
console.log(foundindex); /* Value */

/* ------------------------------------------------------------------------ */

/* Array.some ( function ( array ) { 조건 } ) */
// Array의 아이템들이 부분적으로 조건 ( callback function ) 과 동일 하다면 true 아니면 false
const someArray = findArray.some(function (array) { return array.name === "이" })
console.log(someArray); /* true */

/* Array.some ( function ( array ) { 조건 } ) */
// Array의 모든 아이템이 조건 ( callback function ) 과 동일 하다면 true 아니면 false
const everyArrayfalse = findArray.every(function (array) { return array.name === "이" });
console.log(everyArrayfalse); /* Value = false */

const everyArraytrue = findArray.every(function (array) { return array.동일 === "값" });
console.log(everyArraytrue); /* Value = true */

/* ------------------------------------------------------------------------ */

console.log(findArray);
/* Array.filter( function ( item ) { 조건 } ) */
// 조건에 맞는 item들만 따로 반환하여 새로운 배열을 만들고 싶을때
const filterArray = findArray.filter(function (item) { return item.name === "이" });
console.log(filterArray);

/* ------------------------------------------------------------------------ */

const Testnum = [1, 2, 3, 4, 5, 6];
/* Array.map ( function (item) { 맵핑 값 } ) */
// Array에 있는 각각의 item을 각각의 다른 item으로 맵핑 하여 반환후 새로운 array로 생성.    
const Maparray = Testnum.map(function (item) {
    if (item % 2 === 0) {
        return item * 100
    } else { return item * 2 };
});
console.log(Maparray); /* Value = [ 2, 200, 6, 400, 10, 600 ] */

const simplemap = Testnum.map((item) => item * 10);
console.log(simplemap); /* Valuse = [ 10, 20, 30, 40, 50, 60 ] */

/* ------------------------------------------------------------------------ */

/* Array.flatMap ( function (item) { 맵핑 값 } ) */
// 중첩된 배열을 풀어서 맵핑함
const FlatText = ["Text", "test"]
const Textmap = FlatText.map((item) => item.split(""));
console.log(Textmap); /* Value = [ [ 'T', 'e', 'x', 't' ], [ 't', 'e', 's', 't' ] ] */

const Textflatmap = FlatText.flatMap((item) => item.split(""));
console.log(Textflatmap); /* value = [ 'T', 'e', 'x', 't', 't', 'e', 's', 't' ] */

/* ------------------------------------------------------------------------ */

/* Array.reduce( function ( total , value ) { code} ) */
// Array의 item을 원하는 code 행동을 적용하여 하나의 item으로 줄인다.
// total = 값을 계속해서 저장할 인자   &   value = 각각의 item이 들어감
const reduceArray = Testnum.reduce(function (total, value) {
    total += value;
    return total;
}, 10)
// 여기 10 이라는 2번째 인자는 값이 저장될 인자 total의 초기값
console.log(reduceArray);
