"use strict";

/* ------------- 1 -------------- */



// 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
// 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function Test_One(n) {
  let i = 1;
  for (i; i * 7 / n < 1; i++) {
  }
  return console.log(i);
};

Test_One(49);



/* ------------- 2 -------------- */



// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function Test_Two(n) {
  let A = [];
  let B = [];

  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      A.push(n[i]);
    } else {
      B.push(n[i]);
    }
  }
  let answer = [A.length, B.length];
  console.log(answer)
}

Test_Two([5, 6, 3, 123, 4, 34, 656]);

/* -- 좀더 편한 풀이 -- */

function Solution_Two(n) {
  let answer = [n.filter((n) => n % 2 === 0).length, n.filter(n => n % 2 !== 0).length]
  // filter 와 같은 고차 함수 사용을 좀더 고려하기
  console.log(answer)
}

Solution_Two([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])



/* ------------- 3 -------------- */



// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

function Test_three(array, n) {
  let answer = array.filter(A => A === n).length
  console.log(answer)
}

Test_three([1, 2, 3, 4, 4, 5, 4], 4)



/* ------------- 4 -------------- */



// 배열 뒤집기

function Test_four(n) {
  console.log(n.reverse());
}

Test_four([1, 2, 3, 4, 5]);



/* ------------- 5 -------------- */




// 사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

/* 
x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
 */

// x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
// 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

function Test_five(n) {
  let answer = 0;
  if (n[0] > 0 && n[1] > 0) {
    answer = 1;
  } else if (n[0] < 0 && n[1] > 0) {
    answer = 2;
  } else if (n[0] < 0 && n[1] < 0) {
    answer = 3;
  } else {
    answer = 4;
  }
  console.log(answer)
}

Test_five([2, -3])