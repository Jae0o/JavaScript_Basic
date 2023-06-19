'use strict';
/* Set */
// 집합을 나타내고 순서가 중요하지 않다.
const TestSet = new Set([1, 2, 3, 4, 5, 6]);
// Set의 안에는 배열 Array를 직접 넣을수도 빈 배열을 넣을 수도 있다. but 중복 값 불가능.

console.log(TestSet); /* Value = Set(6) { 1, 2, 3, 4, 5, 6 } */

/* ------------------------------------------------------------------------ */

/* Method */

/* set.size */
// 사이즈를 확인 가능하다.
console.log(TestSet.size) /* Value = 6 */

/* set.has( itesm ) */
// 해당 item이 존재한다면 true 없다면 flase
console.log(TestSet.has(3)) /* Value = true */
console.log(TestSet.has(8)) /* Value = false */

/* Iterable */

/* set.forEach( ) */
// 순회가 가능하다.
console.log(TestSet.forEach(function (item) {
    console.log(item + 2);
})); /* Value = 3, 4, 5, 6, 7, 8 */

/* for of 사용가능 */
for (const item of TestSet) {
    console.log(item + 4)
}; /* Value = 5, 6, ,7 ,8 ,9, 10 */

/* set.add( item ) */
// 해당 item을 추가한다.
TestSet.add(9);
console.log(TestSet) /* Value = Set(7) { 1, 2, 3, 4, 5, 6, 9 } */

/* set.delete( item ) */
// 해당 item을 삭제한다.
TestSet.delete(3);
console.log(TestSet) /* Value = Set(6) { 1, 2, 4, 5, 6, 9 } */

/* set.clear( ) */
// 모든 item을 삭제하고 빈 상태가 된다.
TestSet.clear();
console.log(TestSet) /* Value = Set(0) {} */

/* ------------------------------------------------------------------------ */

/* Map */
// key와 value로 이루어진 자료 구조 이다. set과 동일하게 순서가 중요하지 않다.
// 전체적인 구조는 object와 동일하다.

const maap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);
console.log(maap) /* Value = Map(2) { 'key1' => 'value1', 'key2' => 'value2' } */

/* Object와 Map의 차이 */
const ObjectOne = { 'one': 1, 'two': 2 };
const ObjectTwo = { 'one': 1, 'two': 2, 'three': 3 };

const CompareMap = new Map([[ObjectOne, ObjectTwo]]);
console.log(CompareMap) /* Value = Map(1) { { one: 1, two: 2 } => { one: 1, two: 2, three: 3 } } */
// ObjectOne 이 key값으로 object가 value 값으로 만들어진다.

const CompareObject = {
    [ObjectOne]: ObjectTwo
};
console.log(CompareObject) /* Value = { '[object Object]': { one: 1, two: 2, three: 3 } } */
// Map과 동일하게 Object 또한 ObjectOne은 key로 ObjectTwo는 value로써 할당된다.

// Object와 Map은 구조적으로 굉장히 동일한 구조를 가진다.
// But 가장 큰 차이점으로 두가지는
// 1. Map에서 사용가능한 method( size, has ...)등  다양한 함수를 Object에서는 사용불가능하다.

// 2. Map과 Object의 호출 방법에 크게 차이가 존재한다.
// Object의 호출방법
console.log(CompareObject[ObjectOne]) /* Value = { one: 1, two: 2, three: 3 } */
// Map의 호출방법
console.log(CompareMap.get(ObjectOne)) /* Value = { one: 1, two: 2, three: 3 } */

/* ------------------------------------------------------------------------ */

/* Map의 method 들 */

const TestMap = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);

/* map.size */
// 맵의 사이즈를 확인한다.
console.log(TestMap.size) /* Value = 3 */

/* map.has( key ) */
// 해당 key가 존재하는지 유무 확인
console.log(TestMap.has('key1')) /* Value = true */
console.log(TestMap.has('value1')) /* Value = false */

/* map.get( key ) */
// 해당 key의 value를 찾음
console.log(TestMap.get('key3')) /* Value = value3 */
console.log(TestMap.get('value2')) /* Value = undefined */

/* map.set( key, value ) */
// 해당 key와 value를 추가
TestMap.set('key4', 'value4');
console.log(TestMap); /* Value = Map(4) {'key1' => 'value1',
'key2' => 'value2','key3' => 'value3','key4' => 'value4'} */

/* map.delete( key ) */
// 해당 key와 value를 삭제
TestMap.delete('key2');
console.log(TestMap) /* Value = Map(3) { 'key1' => 'value1', 'key3' => 'value3', 'key4' => 'value4' } */

/* map.clear( ) */
// Map의 모든 key와 value를 삭제
TestMap.clear();
console.log(TestMap) /* Value = Map(0) {} */
