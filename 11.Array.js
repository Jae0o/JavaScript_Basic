'use strict';

/* 배열 */
// Array
// 동일한 타입의 Data를 들어온 순서대로 index 번호를 주며 정리

/* 생성 방법 */
// 해당 변수에 n개 만큼의 item이 들어갈 수 있는 배열을 생성
// 직접 item을 시작부터 넣어 만들수 있음

/* 1 */
let newArray = new Array(3);
console.log(newArray); /* Value = [ <3 empty items> ] */

/* 2 */
newArray = Array.of(2, 2, 2);
console.log(newArray); /* Value = [ 2, 2, 2 ] */

/* 3 */
newArray = [4, 5, 6];
console.log(newArray); /* Value = [ 4, 5, 6 ] */

/* 4 */
// from 사용시 순회가 가능한 모든것을 배열로 만듬
const valuearray = [1, 2, 3, 4, 5, 6]
newArray = Array.from(valuearray);
console.log(newArray); /* Value = [ 1, 2, 3, 4, 5, 6 ] */

// 배열은 이어져있어야하고 동일한 크기의 메모리를 가짐
// but Java Script에서의 배열은 연속적으로 이어져있지 않고 object 객체와 유사하다.
// 일반적은 다른 언어의 배열동작을 흉내낸 특수 객체의 일종
// 이것을 보완하기 위해 type이 정해져 있는 type collections이 존재

/* ------------------------------------------------------------------------ */

/* 배열 반환 방법 */

/* Array[ ] */
// 배열의 해당 인덱스 번호의 item을 출력해준다.
console.log(newArray[2]); /* Value = 3 */
// index 번호는 항상 0부터 시작함!

/* Array.length */
// 해당 array의 총 item 갯수를 알려줌
console.log(newArray.length); /* Value = 6 */

/* ------------------------------------------------------------------------ */

/* Array Method */

/* Array.isArray( ) */
// 해당 변수가 Array라면 true 아니면 false
let notArray = 2;
console.log(Array.isArray(newArray)); /* Value = true */
console.log(Array.isArray(notArray)); /* Value = false */

/* Array.includes( ) */
// item이 Array에 존재한다면 true 없다면 false.
console.log(newArray.includes(1)); /* Value = true */
console.log(newArray.includes(1, 2)); /* Value = false */

/* Array.indexOf( ) */
// Array 안에 해당 item이 존재 한다면 해당 item의 index 번호를 알려줌
console.log(newArray.indexOf(8)); /* Value = -1 */
console.log(newArray.indexOf(4)); /* Value = 3 */

let testArray = [1, 2, 3, 4];
/* Array Add */
/* Array.push( ) */
// item을 해당 Array의 가장 뒤 index번호에 추가함
testArray.push(5);
console.log(testArray); /* Value = [ 1, 2, 3, 4, 5 ] */

/* Array.unshift() */
// 해당 Arrayd의 index 0번 자리에 item을 추가하고 기존 item index 번호들을 하나씩 뒤로밀어낸다
testArray.unshift(0);
console.log(testArray); /* Value = [ 0, 1, 2, 3, 4, 5 ] */

/* Array Delete */
/* Array.pop( ) */
// 가장 맨 뒤의 index 번호 item을 삭제함
testArray.pop();
console.log(testArray); /* Value = [ 0, 1, 2, 3, 4  */

/* Array.shift() */
// Array의 0번째 index위치의 item을 지움
testArray.shift();
console.log(testArray); /* Value = [ 1, 2, 3, 4 ] */

/* Array.splice( index , delete count , add item ... ) */
// index 넘버의 위치부터 delete count 숫자만큼 item을 삭제하고 
// 추가하 item이 있다면 item을 추가한다.
testArray.splice(1, 2, "add", "item");
console.log(testArray); /* Value = [ 1, 'add', 'item', 4 ] */

/* Array.slice( start index , End index ) */
// start index 부터 end index 앞의 item을 반환하고 기존의 배열은 유지한다.
let sliceArray = testArray.slice(1, 3)
console.log(sliceArray); /* Value = [ 'add', 'item' ] */
console.log(testArray); /* Value = [ 1, 'add', 'item', 4 ] */

/* Array1.concat( Array2 ) */
// Array1 에 Array2 를 붙여 새로운 배열을 반환하고 기존의 배열은 유지.
let concatArray = newArray.concat(testArray);
console.log(concatArray); /* Value = [ 1, 2, 3, 4, 5, 6, 1, 'add', 'item', 4 ] */
console.log(newArray); /* Value = [ 1, 2, 3, 4, 5, 6 ] */
console.log(testArray); /* Value = [ 1, 'add', 'item', 4 ] */

/* Array.reverse( ) */
// item의 순서를 뒤집어 버린다.
newArray.reverse();
console.log(newArray); /* Value = [ 6, 5, 4, 3, 2, 1 ] */

/* Array.fill( value , start index? , count ) */
// Array의 item을 value로 바꿔버림.
// srat index에서부터 count갯수 만큼 범위도 따로 지정가능
testArray.fill("value", 0, 3);
console.log(testArray); /* Value = [ 'value', 'value', 'value', 4 ] */

let ArrayArray = [1, [2, [3, 4], 5], 6, 7]
/* Array.flat( ) */
// 중첩되어있는 Array를 1단계 중첩까지만 풀어서 반환한다.
let flatArray = ArrayArray.flat();
console.log(flatArray); /* Value = [ 1, 2, [ 3, 4 ], 5, 6, 7 ] */
console.log(ArrayArray); /* Value = [ 1, [ 2, [ 3, 4 ], 5 ], 6, 7 ] */

/* Array.join( ) */
// 배열을 하나의 문자열로 합쳐준다.
// 기본값은 , 이지만 별도로 지정가능
console.log(testArray.join()); /* Value = value,value,value,4 */
console.log(testArray.join(" 공백 ")); /* Value = value 공백 value 공백 value 공백 4 */

/* ------------------------------------------------------------------------ */

/* Shallow Copy */
//  얕은     복사
// Java Script 에서는 복사할때 항상 얕은 복사가 이루어짐
// 이로인해 Array 안에 Object를 복사하더라도 value 그대로의 복사가 아닌 Object의 주소가 복사되어짐.
let Drum = { "name": "Drum" }
let Piano = { "name": "piano" }
let flut = { "name": "flut" }

let music = [Drum, Piano];
let store = Array.from(music);
console.log("music : ", music); /* Value = music :  [ { name: 'Drum' }, { name: 'piano' } ] */
console.log("store : ", store); /* Value = store :  [ { name: 'Drum' }, { name: 'piano' } ] */

store.push(flut);
console.log(music); /* Value = [ { name: 'Drum' }, { name: 'piano' } ] */
console.log(store); /* Value = [ { name: 'Drum' }, { name: 'piano' }, { name: 'flut' } ] */
// store Array 와 music Array는 서로 만든 각자의 Array를 가르키기때문에 추가해도 적용되지않는다.
music.push(flut);

flut.name = "플룻 변경"
console.log(music); /* Value = [ { name: 'Drum' }, { name: 'piano' }, { name: '플룻 변경' } ] */
console.log(store); /* Value = [ { name: 'Drum' }, { name: 'piano' }, { name: '플룻 변경' } ] */
// 위에서의 언급과 같이 객체 Object는 주소를 복사해오기때문에 값을 변경시 모든 해당 object 주소를 포함한 값이 바뀜

/* ------------------------------------------------------------------------ */

/* 배열의 for in 문 */
// for ( key in 배열이름 ) { 반복내용 }
// 출력시 key = 인덱스 번호를 출력함
// 배열이름[key] = 배열의 내용물을 출력함
let forin_1 = ["one", "two", "three"];
console.log(forin_1);
// for (number in forin_1) {
//     console.log(number); /* 인덱스 번호들을 나열 */
//     console.log(forin_1[number]); /* 배열의 내용물들을 나열 */
// }


/* 반복문에 응용 */

let test_list_two = ["lee", "jae", "yeong"]; /* 배열 값을 추가해도 함수내에서 추개해서 동작 */
for (let i = 0; i < test_list_two.length; i++) {
    console.log(test_list_two[i].toUpperCase());
}