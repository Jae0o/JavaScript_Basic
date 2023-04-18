'use strict';
/* 객체 */
// 객체는 = 맵 (map) , 연관배열 ( associative array ) , 딕셔너리 ( dictionary ) 라고도 불림
// 밀접하게 연관된 속성과 행동을 묶어준다.

/* 객체 복합데이터는 공간이 크다. 
그렇기 때문에 데이터의 대부분을 메모리의 heap이라느 곳에 별도 저장하고
heap에 저장된 object를 메모리 다른 공간에 변수를 하나 지정하여 
객체가 들어 있는 메모리의 주소를 저장하고 필요할때 꺼내 사용한다.*/

/* ------------------------------------------------------------------------ */

/* 객체 리터럴 */
// object literal

// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let ObjectName = {
    KeyName: "😀",
    'text': "😀",
    10: "ten",
    ['Key-name']: "😀"
};

/* 속성, 데이터에 접근하는 방법 */
// 객체 이름 . 속성,데이터 이름
console.log(ObjectName.KeyName); /* 마침표 표기법 dot natation */
console.log(ObjectName["Key-name"]); /* 대괄호 표기법 bracket notation */
console.log(ObjectName['KeyName']);

/* 속성 추가 */
ObjectName.NewKey = '💩';
console.log('create :');
console.log(ObjectName);

/* 속성 삭제 */
delete ObjectName.NewKey;
console.log("Delete : ");
console.log(ObjectName);

/* ------------------------------------------------------------------------ */

/* 객체의 동적 정적 접근방법 */

const ObjectOne = {
    동적: "동적일때",
    정적: "정적일떄"
};

// 코딩을 하고 있는 시점 정적으로 접근하는 상황
ObjectOne.정적; /* 이미 key값이 지정되어있기 때문에 가능 */

// 동적 속성에 접근하고 싶을때 대괄호 표기법을 이용
function Getkey(object, key) {
    console.log(object[key]);
    /* 대괄호 [ ] 사용 */
};
console.log(Getkey(ObjectOne, '동적'));

function AddKey(object, key, value) {
    object[key] = value;
};
function DeleteKey(object, key) {
    delete object[key];
};
AddKey(ObjectOne, 'new', 'new value');
console.log(ObjectOne);
DeleteKey(ObjectOne, 'new');
console.log(ObjectOne);
// 동적으로 행동을 해야할때 대괄호 사용방법을 사용하여 이용

/* ------------------------------------------------------------------------ */

/* 축약 사용 */

let x = 10;
let y = 20;
let Longobj = { x: x, y: y };
console.log(Longobj);
let Shortobj = { x, y };
console.log(Shortobj);
// key와 value의 이름이 같다면 생략후 축약하여 사용가능

/* ------------------------------------------------------------------------ */

/* 메소드 */
// Method

// 이전의 순서 데이터 객체들로 이루어진 객체들은 property 프로퍼티 라고 함
// 객체안의 함수 속성을 가르켜 method 메소드 라고 함

const MethodObject = {
    key: "method 자신을 담고 있는 객체를 뜻함",
    method: function () {
        console.log(`this : ${this.key}`);
    }
};
MethodObject.method();

/* ------------------------------------------------------------------------ */

/* 생성자 */
// create / New
// 동일한 형식의 객체들을 좀더 쉽고 간편하게 만들어주고 관리가 쉽게 해주는 함수.

/* Not use new */
let Bmw = {
    name: 'BMW',
    country: function () {
        console.log(`${this.name} country : 🇩🇪`);
    }   // 중복되는 함수
};
let Hyundai = {
    name: 'HyunDai',
    country: function () {
        console.log(`${this.name} country : 🇰🇷`);
    }   //// 중복되는 함수
};
Bmw.country();
Hyundai.country();
// 새로 생성시 매번 모든걸 반복해야하는 번거로움이 있다.

/* Use new */
// new 생성자를 이용할때는 항상 첫글자가 대문자여야한다.
function Brand(name, flag) {
    this.name = name;
    this.flag = flag;
    this.country = function () {
        console.log(`${this.name} country : ${this.flag}`);
    };
    // return this 생략이 가능하다.
};
const Audi = new Brand('Audi', '🇩🇪');
Audi.country();
const Kia = new Brand('Kia', '🇰🇷');
Kia.country();
// 정해둔 템플릿을 이용하여 쉽게 새로운 객체를 생성하게 해준다.


/* ------------------------------------------------------------------------ */

/* 이전 공부 자료 */
/* 정의 방법 */
/* 1 */
let test_1 = { name: "lee", age: 29, home: "sejong" };
console.log(test_1);

/* 2 */
let test_2 = {};
test_2.name = "jae";
test_2["age"] = 27; /* 텍스트로 사용해야하거나 정의 후에 사용해야함 */
test_2.home = "daejeon";
console.log(test_2);


/* 객체 지향 프로그래밍 */
// 하나의 객체 안에 여러 객체를 그룹화 하여 사용하는 것을 의미함.
let dictionary = {
    'list_dictionary': { 'key1': "value1", 'key2': "value2", 'key3': "value3" },
    'function_dictionary': function () {
        for (let list in dictionary.list_dictionary);
        console.log(this.list_dictionary[list]);
        /* this 는 함수가 소속된 개체의 이름을 대체한다. */
    }
}

