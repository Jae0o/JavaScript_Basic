'use strict';
// 정수 num1 , num2  가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수 만들기

// 조건 : 0 < num1 <= 100
// 조건 : 0 < num2 <= 100

function Solution1(num1, num2) {
    if ((0 < num1 && num1 <= 100) && (0 < num2 && num2 <= 100)) {
        let value = num1 * num2;
        return value;
    }
};
console.log(Solution1(10, 39));

function Solution2(num1, num2) {
    let answer = 0;
    if (0 <= num1 && num1 <= 100) {
        if (0 <= num2 && num2 <= 100) {
            answer = num1 * num2
        };
    };
    return answer;
};
console.log(Solution2(100, 2))