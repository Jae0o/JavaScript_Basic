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
let TesttoPrecision = 1234.12345
console.log(TesttoPrecision.toPrecision(6)); /* Value = 1.12 */



/* ------------------------------------------------------------------------ */


/* Math */
// math 는 대부분 존재하기때문에 직접 만들어 사용할 일은 없음.

/* Math.E */
// 오일러의 상수
console.log(Math.E); /* Value = 2.718281828459045 */

/* Math.PI */
// 원주율 PI값
console.log(Math.PI); /* Value = 3.141592653589793 */

// --------- static method ---------- //

/* Math.abs( ) */
// 절대값
console.log(Math.abs(-13)); /* Value = 13 */

/* Math.ceil( ) */
//소수점 이하를 올림
console.log(Math.ceil(1.1234)); /* Value = 2 */

/* Math.floor( ) */
// 소수점 이하를 내림
console.log(Math.floor(8.9)) /* Value = 8 */

/* Math.round( ) */
// 소수점 이하를 반올림함
console.log(Math.round(1.2)); /* Value = 1 */
console.log(Math.round(1.5)); /* Value = 2 */

/* Math.trunc( ) */
// 소수점에서 정수만 반환함
console.log(Math.trunc(12.345)); /* Value = 12 */

/* Math.max( ) and Math.min( ) */
// 여러 숫자중 최대값 최소값을 찾아줌
console.log(Math.max(1, 10, 100)); /* Value = 100 */
console.log(Math.min(1, 10, 100)); /* Value = 1 */

/* Math.pow( ) */
// 거듭제곱을 해줌
console.log(Math.pow(3, 4)); /* Value = 81 */
console.log(3 ** 4); /* Value = 81 */

/* Math.sqrt( ) */
// 제곱근을 알려줌
console.log(Math.sqrt(9)); /* Value = 3 */


// --------- 정말 많이 사용되는 Random ---------- //
/* Math.random( ) */
// 0부터 1까지의 수를 랜덤으로 반환 해줌
console.log(Math.random()); /* Value = 매번 랜덤 */

/* 1~10까지의 random ? */
console.log(Math.floor(Math.random() * 10) + 1); /* Value = 0~10 random */


/* ------------------------------------------------------------------------ */


/* String */

/* new String( ) */
// string 생성자
let TextConstructor = new String("Text");
console.log(TextConstructor); /* Value = [String: 'Text'] */

let TestText = "문자열  테스트 문자열 "
/* Text[ ] & Text.charAt( ) */
// 지정한 index Num 자리의 글자를 반환함
console.log(TestText[6]); /* Value = 스 */
console.log(TestText.charAt(6)); /* Value = 스 */

/* Text.length */
// 문자열의 총 수를 알려줌
console.log(TestText.length); /* Value = 13 */

/* Text.indexOf( ) */
// 해당 값이 문자열에 몇번째 인덱스인지 알려줌
console.log(TestText.indexOf("테")); /* Value = 7 */

/* Text.lastIndexOf( ) */
// 뒤에서 부터 카운트해서 인덱스 번호를 알려줘야하는데...
console.log(TestText.lastIndexOf("열")); /* Value =  */

/* Text.includes( ) */
// 해당 값이 문자열에 존재하는가 결과값을 반환
console.log(TestText.includes(" 테스")); /* Value = ture */
console.log(TestText.includes("없다")); /* Value = false */

/* Text.startWith( ) */
// 해당 값으로 시작하는지 결과값을 반환
console.log(TestText.startsWith("자")); /* Value = false */
console.log(TestText.startsWith("문")); /* Value = true */

/* Text.endsWith( ) */
// 해당 값으로 문자열이 끝나는지 결과값 반환
console.log(TestText.endsWith(" ")); /* Value = true */
console.log(TestText.endsWith("열 ")); /* Value = true */

/* Text.toUpperCase( ) */
let uplower = 'UPPERlower';
// 문자열을 전부 대문자로
console.log(uplower.toUpperCase()); /* Value = UPPERLOWER */

/* Text.toLowerCase( ) */
// 문자열을 전부 소문자로
console.log(uplower.toLowerCase()); /* Value = upperlower */

/* Text.substring( index , n ) */
// 문자열의 인덱스 번호부터 n번째 인덱스 번호까지의 문자열을 반환
console.log(uplower.substring(2,8)); /* Value = PERlow */

/* Text.slice( ) */
// 지정한 인덱스 번호부터 그뒤의 문자열들을 반환
// 인덱스에 -를 붙이면 뒤에서부터 카운트
console.log(uplower.slice(3)); /* Value = ERlower */
console.log(uplower.slice(-3)); /* Value = wer */

/* Text.trim( ) */
// 문자열의 모든 앞뒤 공백을 없애줌
let TestTrim ="     공백  공백   공백        "
console.log(TestTrim.trim()); /* Value = 공백  공백   공백 */

/* Text.split( ) */
// 해당 값을 제외 하고 양옆의 문자열을 따로따로 반환한다.
let SplitTest = "테스트! 문자열! 나누어! 표현!  "
console.log(SplitTest.split("!")); /* Value = [ '테스트', ' 문자열', ' 나누어', ' 표현', '  ' ] */
// ( value , 3 ) 반환 값들중 앞에서 3개의 값만 반환함.
console.log(SplitTest.split("!",3)); /* Value = [ '테스트', ' 문자열', ' 나누어' ] */


/* ------------------------------------------------------------------------ */


/* Date */
// 현재시간과 특정 시간을 불러올 수 있음.
console.log(new Date()); /* Value = 2023-04-22T00:25:56.350Z */
console.log(new Date("mar 5 2021")); /* Value = 2021-03-04T15:00:00.000Z */

/* UTC */
// 세계 협정 시간으로 1970년도 1월 1일 UTC 자정과의 차이 시간을 밀리초 단위로 계산한것.

/* Date.now( ) */
// 현재의 시간을 밀리초로 보여줌
console.log(Date.now()); /* Value = 1682123349803 */

/* Date.parse( ) */
// 특정 시간을 밀리초 단위로 바꿔줌
console.log(Date.parse('2021-03-04T15:00:00.000Z')); /* Value = 1614870000000 */

const now = new Date();
console.log(now); /* Value = 2023-04-22T00:33:03.525Z */
/* Date.setFullYear And Month And Date ..등 */
// set뒤의 값으로 Date를 원하는 Date로 변경시켜준다
now.setFullYear(2020);
console.log(now); /* Value = 2020-04-22T00:34:28.806Z */
now.setMonth(0);
console.log(now); /* Value = 2020-01-22T00:35:10.107Z */
now.setHours(0);
console.log(now); /* Value = 2020-01-21T15:38:24.002Z */

/* Date.getFullYear and Month ..등 */
// 해당 Date의 원하는 부분을 반환함.
console.log(now.getFullYear()); /* Value = 2020 */
console.log(now.getHours()); /* Value =  0 */
console.log(now.getDay()); /* Value = 3 */
// Day = 0 부터 일요일 / 6은 토요일

/* Date.toString( ) and toTimeString( ).. 등 */
console.log(now.toString()); /* Value = Wed Jan 22 2020 00:43:55 GMT+0900 (대한민국 표준시) */
console.log(now.toTimeString()); /* Value = 00:44:17 GMT+0900 (대한민국 표준시) */
console.log(now.toLocaleString("en-US")); /* Value = 1/22/2020, 12:45:45 AM */
console.log(now.toLocaleString("ko-KR")); /* Value = 2020. 1. 22. 오전 12:46:03 */
