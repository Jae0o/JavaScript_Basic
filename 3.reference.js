/* 원시 와 객체의 데이터 저장*/

/* ------------------------------------------------------------------------ */

/* 원시 primitive */
// 값이 그래도 복사되어 전달됨.
let a = 123;
let b = a;
console.log(a);
console.log(b);
// 값을 복사하여 저장하기 때문에 a가 바뀌어도 b의 값은 변경되지 않음.
a = 222;
console.log(a);
console.log(b);

/* ------------------------------------------------------------------------ */

/* 객체 object */
// 객체 타입에는 참조값의 값이 아닌 주소가 복사되어 지기때문에 원시 와는 다른 결과가 출력된다.

// 값이 복사가 되는 것이 아닌 주소가 복사가 된다!
let mom = {
    name: "yeon"
}
let dad = mom;
console.log(mom);
console.log(dad);

// dad의 name 값을 바꾸게 되면 연결된 주소의 name이 변경되기 때문에 mom에서도 바뀌게된다.
dad.name = "lee";
console.log(mom);
console.log(dad);

/* ------------------------------------------------------------------------ */

/* const 의 재할당*/

const value = 3;
console.log(value);
//value = 5 같은 재할당이 불가능하다

const object = {
    name: "lee"
};
console.log(object); /* 값 = { name: 'lee' } */
object.name = "Jaeyeon"
console.log(object); /* 값 = { name: 'Jaeyeon' } */
object.FirstName = "Lee";
console.log(object); /* 값 = { name: 'Jaeyeon', FirstName: 'Lee' } */

/* 하지만 객체 object는 상수변수 const로 지정하더라도 주소가 저장되어지는 것이기떼문에
객체 object안의 데이터는 변경할 수 있다. */
