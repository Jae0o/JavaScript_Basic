/* 유사 배열 */
/* arguments */

// 사용자가 전달한 인자가 들어있다.
function 함수() {
    console.log(arguments.length);
}
함수(1, 2, 3, 4, 6); /* 결과 = 5 */
함수(1, 4, 100); /* 결과 = 3 */

/* 예시 */
function sum() {
    let i, _sum = 0; /* 사용전 i 와 _sum 을변수로 만들기 */
    for (i = 0; i < arguments.length; i++) {
        // i 를 미리 변수로 만들어서 let을 사용안함.
        console.log(i + " : " + arguments[i]);
        // i는 반복 횟수를 의미하게 되고 arguments 안의 i가 유사변수의 해당 인덱스 위치의 값을 불러오게됨.
        _sum += arguments[i];

        /* a += b */
        // a = a + b와 같은 뜻으로 a를 b와 더한후 그 값을 다시 a 로 지정한다.
    }
    return _sum;
};

console.log(sum(1, 2, 6, 4)); /* 결과 = 13 */
console.log(sum(10, 125213214, 43253, 1421321, 46345134)); /* 결과 = 173022932 */

