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

/* Object.assign( 이름, 대상 ) */
// 해당 이름의 object에 대상 object를 복사함.
const cat2 = {};
Object.assign(cat2, cat);
console.log("복사 완료", cat2); /* Value = 복사 완료 { name: '깜시', age: 3 } */
// but Spread 연산자와 같음
const cat3 = { ...cat };
console.log("복사 완료", cat3); /* Value = 복사 완료 { name: '깜시', age: 3 } */


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

try {
    delete cat.age;
}
catch (error) { console.log("TypeError: Cannot delete property 'age' of #<Object>") }
// configurable을 false로 변경 했기 때문에 삭제 또한 불가능!!

try {
    cat.age = "3"
} catch (error) {
    console.log("TypeError: Cannot assign to read only property 'age' of object '# < Object > '");
}
// 또한 writable 값을 false로 수정하여 수정불가!

try {
    Object.defineProperty(cat, "age", {
        value: 3,
        writable: true,
        enumerable: true,
        configurable: true
    })
} catch (error) {
    console.log("TypeError: Cannot redefine property: age")
};

/* ------------------------------------------------------------------------ */

/* freeze / seal / preventExtensions */

/* Object.freeze( 이름 ) */
// 해당 이름의 object를 동결 시켜버림
const TestFreeze = { key: "value", Test: "test" };
Object.freeze(TestFreeze);
// 동결이 된상태로 값의 추가, 쓰기, 삭제, 속성 재지정 모두 불가능하다.

/* Object.isFrozen( 이름 ) */
// 해당 이름의 object가 freeze되었는지 알려줌
console.log(Object.isFrozen(TestFreeze)); /* Value = true */


/* Object.seal( 이름 ) */
// 해당 이름의 object가 밀봉 seal이 되도록 만듬.
const TestSeal = { key: "value", Test: "test" };
Object.seal(TestSeal);
// 밀봉 상태에서는 값은 수정가능하지만 값의 추가, 삭제, 속성 재지정이 불가능하다.

/* Object.isSealed( 이름 ) */
// 해당 이름의 object가 seal이 맞는지 알려준다.
console.log(Object.isSealed(TestSeal)); /* Value = true */


/* Object.preventExtensions( 이름 ) */
// 해당 이름의 object를 확장만 불가능하게 함.
const TestpreventExtensions = { key: "value", Test: "test" };
Object.preventExtensions(TestpreventExtensions);
// 즉 추가를 제외한 삭제 수정 재지정은 가능하다.

/* Object.isExtensible */
console.log(Object.isExtensible(TestpreventExtensions)); /* Value = false */

/* ------------------------------------------------------------------------ */

/* 인스턴스 레벨의 함수 */

function protoLevel(A, B) {
    this.A = A;
    this.B = B;
    this.display = function () {
        // 해당 함수는 프로토타입으로 새로운 값을 만들면 포함되는 프로토타입 래밸의 함수이다,
        console.log("protoLevel의 프로토타입 레벨의 함수")
    }
}

const insLevel1 = new protoLevel(2, 2); /* Value = protoLevel { A: 2, B: 2, display: [Function (anonymous)] */
console.log(insLevel1);
const inslevel2 = new protoLevel(5, 5); /* Value = protoLevel { A: 5, B: 5, display: [Function (anonymous)] */
console.log(inslevel2);
// 각각 display 라는 프로토타입 레벨의 함수를 가지고있다.

/* 프로토타입 레벨의 함수 추가 */
// 생성자이름 . prototype . 함수이름 = 함수
protoLevel.prototype.newdisplay = function () { console.log("새로 추가된 프로토타입 레벨 함수") }
insLevel1.newdisplay(); /* Value = 새로 추가된 프로토타입 레벨 함수 */
inslevel2.newdisplay(); /* Value = 새로 추가된 프로토타입 레벨 함수 */
insLevel1.display(); /* Value = protoLevel의 프로토타입 레벨의 함수 */
inslevel2.display(); /* Value = protoLevel의 프로토타입 레벨의 함수 */
// 모두 정상 작동.

insLevel1.display = function () { console.log("오버라이딩") };
insLevel1.display(); /* Value = 오버라이딩 */
// class 생성자와 마찬가지로 오버라이딩이 가능하다
// 즉 인스턴스 레벨에서 동일한 이름의 함수를 재정의 하면 프로토타입 레벨의 함수가 가려져 버린다 ( 섀도잉 )


/* ------------------------------------------------------------------------ */

/* Prototype을 베이스로 한 객체 지향 프로그래밍 */

function animal(name, age) {
    this.name = name;
    this.age = age;
};
animal.prototype.animalDisplay = function () { console.log("animal의 함수", this.name, this.age) };

function Dog(name, age, home) {
    animal.call(this, name, age, home);
    // 다른 대상에게 prototype을 가져올때는 class 의 super()와 같이 연결해줘야한다!
};

Dog.prototype = Object.create(animal.prototype);
/* 이름.prototype = Object.create( 대상 .prototype ) */
// 해당 이름의 object의 prototype을 대상 object의 prototype과 동일하게 만들어줌.
// 생성할때는 위치를 조심해야함!

Dog.prototype.DogDisplay = function () { console.log("Dog의 함수") };

const newDog = new Dog("Dog", 3, "chungju");
newDog.DogDisplay();
// Dog의 기본 함수!

newDog.animalDisplay(); /* Value = animal의 함수 Dog 3 */

/* ------------------------------------------------------------------------ */

/* Mixin */
// 오브젝트는 단 하나의 prototype( 부모 ) 가리킬 수 있다.
// 하지만 여러 함수들을 상속학 싶을때 사용하는 방법이 mixin

// Object.assign ( 이름.prototype, object1, object2 .... )
// 해당 이름을 가진 object에 object1 과 object2 등에 들어있는 함수를 상속시킴 

const play = {
    play: function () {
        console.log(`${this.name}play!!`)
    }
};
const sleep = {
    sleep: function () {
        console.log(`${this.name}sleep!!`)
    }
};

function Dog(name) {
    this.name = name;
};

Object.assign(Dog.prototype, play, sleep);
const NewDogDog = new Dog("으르렁");
NewDogDog.play(); /* Value = 으르렁play!! */
NewDogDog.sleep(); /* Value = 으르렁sleep!! */