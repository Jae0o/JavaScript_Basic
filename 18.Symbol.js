'use strict';
/* Symbol */
// 유일한 하나의 고유 key를 생성할때 사용된다.

/* Not use Symbol */
const notUse1 = 'key';
const notUse2 = 'key';
console.log(notUse1 === notUse2); /* Value = true */
// 동일한 데이터 타입을 가지기 때문에 동일한 키를 가지게된다. 여기서 발생하는 문제.
const notUseSymbol = new Map();
notUseSymbol.set(notUse1, 'changekey');
// notUse1 키만 맵에 담아 값을 변경했지만
console.log(notUseSymbol.get(notUse2)); /* Value = changekey */
// 맵에 담지 않은 notUse2의 key도 변경되어진 모습이 보여짐

/* Use Symbol */
// 위와 같은 문제를 해결하기 위해
const Use1 = Symbol('key');
const Use2 = Symbol('key');
console.log(Use1 === Use2); /* Value = false */
// 아까와는 다른 결과 값을 가지게되고 Symbol을 사용하였기때문에 서로 고유한 값을 가지게 됨
const UseSymbol = new Map();
UseSymbol.set(Use1, 'changekey');
console.log(UseSymbol.get(Use2)); /* Value = undefined */
// 결과는 당연하게도

/* ------------------------------------------------------------------------ */

/* Global Symbol Registry */
/*     전역 심볼 레지스트리    */

/* Symbol.for */
// 동일한 이름으로 하나의 키를 여러곳에서 사용하고 싶다면 사용할수 있다.
// 또한 Symbol.for로 Symbol로 생성한 경우 전역 심볼 레지스트리에 따로 별도 저장됨
const Testfor1 = Symbol.for('ForKey');
const Testfor2 = Symbol.for('ForKey');
const Testfor3 = Symbol.for('ForKey');
console.log(Testfor1 === Testfor2); /* Value = true */
console.log(Testfor2 === Testfor3); /* Value = true */
console.log(Testfor1 === Testfor3); /* Value = true */

/* ------------------------------------------------------------------------ */

/* Symbol.keyfor( ) */
// 해당 Symbol이 Global Symbol Registry 전역 심볼 레지스트리로 만들어진 Symbol이라면
// 해당 Symbol의 값을 반환한다.

const Keyfor1 = Symbol.for('Registry');
// for을 이용해 만들어 Global Symbol Registry로 만들어진 Symbol
const Keyfor2 = Symbol('not Registry');
// 값에만 간단히 젖아된 Symbol
console.log(Symbol.keyFor(Keyfor1)); /* Value = Registry */
// 호출시 정상 작동으로 값을 출력
console.log(Symbol.keyFor(Keyfor2)); /* Value = undefined */
// Registry에 저장되어있지 않기때문에 작동을 하지않는다.
console.log(Keyfor2); /* Value = Symbol(not Registry */
// 하지만 Symbol의 기능은 잘하고있음.