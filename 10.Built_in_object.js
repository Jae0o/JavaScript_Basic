'use strict';
/* wrapper */
// 원시 값을 필요에 따라 관련된 빌트인 객체로 변환해준다.

let wrapper = 100;
console.log(wrapper); /* 원시타입 100 */

// wrapper 라는 원시타입의 객체를 사용하는동안 Wrapper 라는 객체로 감싸버림
console.log(wrapper.toString());
// 사용하는 동안에만 해당하고 사용하지 않는다면 다시 원시 타입으로 남음.
console.log(wrapper); /* 원시타입 100 */


/* ------------------------------------------------------------------------ */


/* Global */
console.log(globalThis);

/* eval */
// java script를 한줄한줄 표현하고 평가한다.
eval('let EvalTest = 3; console.log(EvalTest);');

/* isfinite */
// 숫자가 유한한지 무한한지 구분해낸다 유한 = true 무한 = false
console.log(isFinite(827.312)); /* true */
console.log(isFinite(Infinity)); /* false */
console.log(isFinite(19 / 0)); /* false */

/* parseFloat */
// 문자열이지만 숫자가 있다면 그것을 숫자열로 변경해줌
console.log(parseFloat("123")); /* 값 = 123 */
console.log(parseFloat(" 12.124")); /* 값 = 12.124 */
console.log(parseFloat("text 123")); /* 값 = NaN */
console.log(parseFloat("Text")); /* 값 = NaN */

/* parseInt */
// 문자열 안의 소수점을 정수로 변화시켜줌
console.log(parseInt("12.8"));

/* URL */
/* URI , Uniform Resource Identifier 하위 개념*/
// 어떤 리소스를 나타낼수 있는 단 하나의 고유한 주소 또는 ID
// 아스키 문자로만 구성되어야한다.  -  한글이나 특수문자는 이스케이프 처리해야함.

/* encodURI */
// 아스키 문자가 아닌 URL을 이스케이프 하여 주소로 만듬.
let URL = 'https://한글.com';
let encoded = encodeURI(URL);
console.log(URL); /* 값 = https://한글.com */
console.log(encoded); /* 값 = https://%ED%95%9C%EA%B8%80.com */

/* decodeURI */
// encodeURI통해 이스케이프 처리한 주소를 다시 원래대로 돌리고싶을때 사용
let decoded = decodeURI(encoded);
console.log(decoded); /* 값 = https://한글.com */

/* encodeURLComponent & decodeURIComponent */
// 전체 URL 주소가 아닌 부분적인 part 주고만 있을때 사용
let parturl = '주소한글.com';
let partencoded = encodeURIComponent(parturl);
let test = encodeURI(parturl);
console.log(test); /* 값 = %EC%A3%BC%EC%86%8C%ED%95%9C%EA%B8%80.com */
console.log(partencoded); /* 값 = %EC%A3%BC%EC%86%8C%ED%95%9C%EA%B8%80.com */

let partdecoded = decodeURIComponent(partencoded);
console.log(partdecoded);


/* ------------------------------------------------------------------------ */


/* Boolean */

/* new Boolean */
// 블리언을 할당하는 함수 - 생성자를 사용해 객체를 많이 만들면 메모리 사용량이 급증.
let TrueObject = new Boolean(true);
console.log(TrueObject);
// 함수사용보다는 그냥 바로 지정해주는것이 좋음
let ThisTrue = true;
let ThisFalse = false;

/* .valueOf */
// boolean값을 보여줌
console.log(ThisTrue.valueOf());
console.log(ThisFalse.valueOf());