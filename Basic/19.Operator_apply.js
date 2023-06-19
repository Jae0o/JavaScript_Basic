'use strict';

/* 유용한 연산자 사용처 */

/* ------------------------------------------------------------------------ */

let object1 = { key11: 'value1', key12: 'value2' };
const object2 = { key1: 'value1', key2: 'value2', key3: 'value3' };
console.log(!!object1); /* Value = true */
console.log(!!object2); /* Value = true */

/* Logical Operator */
/*     논리 연산자     */

/* 간단정리 */
//  || or && and !부정 

if (object1 || object2) {
    // 둘중 하나만 true여도 실행
    console.log('true 여서 실행'); /* Value = true 여서 실행 */
};
if (object1 && object2) {
    // 둘다 true 일때 실행
    console.log('true 여서 실행'); /* Value = true 여서 실행 */
};

/* 단축 평가 */
/* Short circuit evaluation */
// 조건문 안에서는 Boolean 값으로 평가 되지만 조건문 밖에서는 단축 평가가 이루어짐.
// 단축평가란? 표현식을 평가하는중 결과가 확정되면 나머지 평가가 생략되는 과정

let result = object1 && object2;
// 기본적으로 조건문에서는 Boolean 값으로 변환되지만
// 조건문 외부에서는 object1이 true 라는것을 확인하고 true이기때문에 평가가 단축된후 object2를 평가하는것이 아닌 할당을 한다.
console.log(result); /* Value = { key1: 'value1', key2: 'value2', key3: 'value3' } */

result = object1 || object2
// And와는 다르게 or은 object1이 true가 평가된 순간 뒤의 값은 중요하지 않기때문에 바로 object1만 할당해버리고 종료된다.
console.log(result); /* Value = { key11: 'value1', key12: 'value2' } */

/* ------------------------------------------------------------------------ */
object1 = { key1: 'value1', key2: 'value2' };
function MakeKey3(object) {
    if (object.key3) {
        return console.log("key3 존재함");
    };
    object.key3 = "value3";
    console.log(object);
};


function MakeKey4(object) {
    if (!object.key3) {
        return console.log("key3 없음 먼저 만들고 실행");
    } else if (object.key4) {
        return console.log('key4 존재함');
    };
    object.key4 = "value4";
    console.log(object);
};

/* && */
// And 연산자의 경우 결과가 truthy 할때 && 실행할 코드가 사용된다.

object1.key3 && MakeKey4(object1); /* 실행안됨 */
// object1에 key3이 존재해 true 라면 뒤의 함수 호출 이지만 object1은 false

object2.key3 && MakeKey4(object2); /* 실행값 = { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' } */
// 반대로 object2가 true 이기때문에 실행

/* ------------------------------------------------------------------------ */

/* || */
// Or 연산자의 경우 결과가 falshy 일때 || 실행할 코드가 사용된다.

object1.key3 || MakeKey3(object1); /* 결과 = { key1: 'value1', key2: 'value2', key3: 'value3' } */
// 앞의 조건이 false일때 실행이 되기 때문에 함수가 실행이됨.
object2.key3 || MakeKey3(object2); /* 실행안됨 */
// 단축평가에 의해 앞의 조건이 true이기때문에 바로 실행이 중단됨.

/* ------------------------------------------------------------------------ */

/* null or undefined 구별 */
let item = { 'key1': 1 }
let key = item.key1;
// 할당 시에는 문제없지만 만약 item이 undefined인 경우 
let UseKey = item && item.key1;
// 이용 해줘야 오류가 아닌 undefined라는 결과가 호출됨
console.log(key); /* Value =  */

/* ------------------------------------------------------------------------ */

/* Optional Chaining Operator */
//  ?. 있다면?
// 위에서의 null, undefined 구별을 좀더 간편하게 도와주는 선언자

let OCO = { '성': 'Lee', '이름': { '중간': 'Jae', '끝': 'Yeong' } }
console.log(OCO); /* Value = { '성': 'Lee', '이름': { '중간': 'Jae', '끝': 'Yeong' } } */

OCO && OCO.이름 && OCO.이름.중간 && console.log('사용 안함');
// 일반적으로 호출을 할때 꼬리에 꼬리를 물고 호출해야하는 번거로움이 존재

OCO?.이름?.끝 && console.log('사용함');
// 해석 : OCO가 있다면 그안에 이름이 있다면 그리고 그안에 끝이 있다면 log 실행.
// 간편하게 축약가능.

/* ------------------------------------------------------------------------ */

/* ?? Nullish Coalescing Operator */
// Null은 true로 판단하고 undefined만 false로 간주한다.

// 왼쪽의 값이 숫자가 아니라면 -1을 출력하고 싶을때.

const Nullish = 0;
console.log(Nullish || '-1'); /* Value = -1 */
// 결과의 이유는 보통 Boolean 값에서 0 undefined null 등은 false의 값을 가지기 때문에 -1 출력
console.log(Nullish ?? '-1'); /* Value = 0 */
// ?? 라는 Nullish Coalescing Operator 사용시 true