// Java Script 적용

// ###.js 파일 생성후 - ###.html 파일의 </head> 바로앞
// <script defer src="###.js" type="text/javascript"></script> 적용

// 변수 [ Variable ]

// let/var/const 변수이름 = 변수값 ;

// var 
var A = "value or text";
var A = "change value or text"; // 재선언 가능
A = "change value or text"; // 재할당 가능

// let 
let B = "value or text";
// let B = "can't change"; 재선언 불가
B = "change value or text"; // 재할당 가능


const C = "value or text";
// const C = "can't change"; 재선언 불가
// C = "can't change"; 재할당 불가



// String & number

//text " " or ' ' 사용 
// \ [ secape ]를 붙이면 텍스트로 인식 

텍스트 = ' 재영\'s의 맥북 연습장이다'

// 숫자와 텍스트 구분을 잘해야함
// number는 항상 0부터 시작

console.log(1 + 1);  // 결과 2
console.log(1 + "1"); // 결과 11
console.log("1+1"); // 결과 1+1