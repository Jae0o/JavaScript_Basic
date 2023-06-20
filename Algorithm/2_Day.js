"use strict";

/* ------------- 1 -------------- */
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function Solution_One(num) {
  let A = 0
  for (let i = 0; i <= num; i++) {
    if (0 === (i % 2)) {
      A += i
    }
  }
  console.log(A)
};

Solution_One(10);

/* ------------- 2 -------------- */

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function Solution_Two(num) {
  let answer = 0;
  for (let i = 0; i < num.length; i++) {
    answer += num[i];
  };
  answer = answer / num.length;
  console.log(answer)
};

Solution_Two([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//다른 풀이

function Test1(num) {
  let answer = num.reduce((total, value) => total += value, 0) / num.length;
  // reduce 고차 함수를 이용해 좀 간단하고 쉽게 해결 가능
  console.log(answer);
}

Test1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* ------------- 3 -------------- */

/* 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요. */

function Solution_Three(A, B) {
  let answer = (A * 12000) + ((B - ~~(A / 10)) * 2000)
  // ~~ 틸트 연산자 이용해 정수만 추출
  console.log(answer)
};

Solution_Three(64, 6)