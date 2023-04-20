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
// 전체 URL 주소가 아닌 부분적인 part 주소만 있을때 사용
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

/* ------------------------------------------------------------------------ */

/* Number */

/* new Number */
// 생성자를 통해 number 생성 가능
let Numbertest = new Number(4000);
console.log(Numbertest);

/* number.EPSILON */
// 0과 1사이를 나타낼수 있는 가장 작은수
console.log(Number.EPSILON); /* Value = 2.220446049250313e-16 */

/* Number.MAX_SAFE_INTERGER */
/* Number.MAX_VALUE */
// 정수에서 사용가능한 가장 큰수
console.log(Number.MAX_SAFE_INTERGER); /* Value = undefined */
console.log(Number.MAX_VALUE); /* Value = 1.7976931348623157e+308 */

/* Number.MIN_SAFE_INTERGER */
/* Number.MIN_VALUE */
// 정수에서 사용가능한 가장 큰수
console.log(Number.MIN_SAFE_INTERGER); /* Value = undefined */
console.log(Number.MIN_VALUE); /* Value = 5e-324 */

/* Number.NaN */
// 숫자가 아님
console.log(Number.NaN); /* Value = NaN */

/* Number.NEGATIVE_INFINITY */
// 음의 infinity 값
console.log(Number.NEGATIVE_INFINITY); /* Value = -Infinity */

/* Number.POSITIVE_INFINITY */
// 양의 infinity 값
console.log(Number.POSITIVE_INFINITY); /* Value = Infinity */

/* Number.prototype */
// prototype에 접근
console.log(Number.prototype); /* Value = {} */

/* Number.isNaN( ) */
// 숫자가 not a number 인가 알려줌
console.log(Number.isNaN(12)); /* Value = false */

/* Number.isInteger( ) */
// 숫자가 정수인지 알려줌.
console.log(Number.isInteger(12)); /* Value = true */

/* Number.isSafeInteger( ) */
// 숫자가 범위 안의 안전한 정수인가 알려줌.
console.log(Number.isSafeInteger(12)); /* Value = true */

/* Number.toExponential() */
// 숫자를 지수 ( 거듭제곱 )로 표현해줌
let TestExponential = 102;
console.log(TestExponential.toExponential()); /* Value = 1.02e+2 */
// 숫자 뒤의 e+2는 10의 2승이라는뜻 으로 1.02 * 10의 2승 이라는뜻

/* Number.toFixed */
// 반올림하여 문자열로 반환한다.
let TestFixed = 3.94
console.log(TestFixed.toFixed()); /* Value = 4 */

/* Number.toString */
// String 타입으로 바꿔줌
let TestStrng = 12;
console.log(TestStrng.toString()); /* Value = 12( 타입이 string)*/

/* .valueOf */
// 값의 원시타입을 반환함
let TestValueOf = 102
console.log(TestValueOf.valueOf()); /* Value = 102 */

/* Number.toLocaleString */
// 해당 나라에 맞는 문자열로 바꿔줌
let TesttoLocaleString = 1142
console.log(TesttoLocaleString.toLocaleString('ar-EG')); /* Value = ١٬١٤٢ */

/* Number.toPrecision */
// 원하는 자릿수까지 유효하도록 반올림
let TesttoPrecision = 1.12345
console.log(TesttoPrecision.toPrecision(3)); /* Value = 1.12 */
console.log(); /* Value = */
console.log(); /* Value = */
console.log(); /* Value = */