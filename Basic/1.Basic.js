'use strict';
//엄격한 모드 - 디버깅을 쉽게 해주고 에러 예방에 효과적


// Java Script 적용

// ###.js 파일 생성후 - ###.html 파일의 </head> 바로앞
// <script defer src="###.js" type="text/javascript"></script> 적용


/* ------------------------------------------------------------------------ */

/* 변수 [ Variable ] */

// 값을 저장하는 공간
// 자료를 저장할수 있는 이름이 주어진 기억장소

// let/var/const 변수이름 = 변수값 ;
/* var  */
var A = "value or text";
var A = "change value or text"; // 재선언 가능
A = "change value or text"; // 재할당 가능

/* let  */
let B = "value or text";
// let B = "can't change"; 재선언 불가
B = "change value or text"; // 재할당 가능

/* const */
const C = "value or text";
// const C = "can't change"; 재선언 불가
// C = "can't change"; 재할당 불가
// 보안에 용이하고 실수를 방지할수 있다.

/* Naming */
// 1. 라틴문자 (0 ~ 9), (a ~ z), (A ~ Z), _언더바
// 2. 대소문자 구분
// 3. CamelCase 방법으로 표기 추천
// 4. 한국어 X 예약어 X
// 5. 최대한 의미있게 구체적으로 네이밍을 지정 해야함


/* ------------------------------------------------------------------------ */

/* String */
// 숫자와 텍스트 구분을 잘해야함

//text " " or ' ' or ` ` 사용 
// \ [ secape ]를 붙이면 텍스트로 인식 

텍스트 = ' 재영\'s의 맥북 연습장이다'

/* template Literal */
console.log(`텍스트로 표현되고 ${텍스트} 안에는 변수 값이 주어진다`);

/* ------------------------------------------------------------------------ */

/* number */
// number는 항상 0부터 시작

console.log(1 + 1);  // 결과 2
console.log(1 + "1"); // 결과 11
console.log("1+1"); // 결과 1+1

console.log(123 / 0); // 결과 Infinity
console.log(123 / -0); // 결과 - Infinity
console.log(123 / "asd"); // 결과 NaN (not a number)
/* bigint */
// 큰 값의 끝에 n 을 붙여야 제대로 표현된다.
console.log(1234213214213213126371263871263781); // 결과 1.2342132142132132e+33
console.log(1231421371826371826372816378612783621783n);

/* ------------------------------------------------------------------------ */

/* Boolean */
// true or false
//boolean 함수를 지정할때 함수의 이름 앞에 is를 붙여준다.

/* false */
// 0 , null , undefined , nan , " "

// let isA = Boolean();
// let isB = Boolean(0);
// let isC = Boolean(null);
// let isD = Boolean('');
// let isE = Boolean(undefined);
// let isF = Boolean(false);

/* true */
// any other value

// let isG = Boolean();
// let isH = Boolean(0);
// let isJ = Boolean(null);
// let isK = Boolean('');

/* ------------------------------------------------------------------------ */

/* null vs undefined */

/* null */
let test_null = null;
console.log(test_null);
// null은 아무것도 아닌 선언조차 안된 텅텅 빈값이라고 따로 지정할때 사용

/* undefined */
let test_undefined = undefined;
console.log(test_undefined);
// 선언은 되었지만 값이 지정되지 않은 상태

/* ------------------------------------------------------------------------ */

/* symbol */
// 고유한 식별자를 만들때 사용한다.

// 같은 값을 symbol로 지정 해주더라도 고유한 값으로써 인정된다
let symbol1 = Symbol('value');
let symbol2 = Symbol('value');
console.log(symbol1);
console.log(symbol2);
console.log(symbol1 === symbol2);
// 같은 심볼 값을 주고싶을때는 symbol뒤 .for 추가하기
let symbol3 = Symbol.for('value2');
let symbol4 = Symbol.for('value2');
console.log(symbol3);
console.log(symbol4);
console.log(symbol3 === symbol4);

/* ------------------------------------------------------------------------ */

/* Type Of */
// data의 타입을 확인하고 값을 타입 문자열로 반환한다.
console.log(typeof 123); /* 값 = number */
console.log(typeof "123"); /* 값 = string */
let testfunc = function name(params) { }
console.log(typeof testfunc); /* 값 = function */
console.log(typeof {}); /* 값 = object */

/* ------------------------------------------------------------------------ */

/* dynamic typing */

let typing = 'text';
console.log(`valuse : ${typing}, type : ${typeof typing}`);

typing = 1;
console.log(`valuse : ${typing}, type : ${typeof typing}`);

typing = 1 + "2";
console.log(`valuse : ${typing}, type : ${typeof typing}`);

typing = '13' - '1';
console.log(`valuse : ${typing}, type : ${typeof typing}`);

typing = '13' + '1'; /* string */
console.log(`valuse : ${typing}, type : ${typeof typing}`);

// java script 자체에서 다이나믹하게 타입을 바꿔줌