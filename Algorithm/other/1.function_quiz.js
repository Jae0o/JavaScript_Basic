`use strict`;

/* ------------------------------------------------------------------------ */

/* callback 응용 */

/* 주어진 숫자 만큼 0부터 수노히 하는 함수
순회하면서 주어진 특정한 일을 수행해야함
5, 순회하는 수자를 다 출력하고 싶음
5, 순회하는 숫자의 두배값을 다 출력하고싶음 */

function iterate(max, action) {
    for (i = 0; i < max; i++) {
        action(i + 1);
    }
};

const number = (num) => console.log(num);
const double = (num) => console.log(num * 2);
iterate(3, number);
iterate(3, double);

setTimeout(() => {
    console.log('자체 저장된 고차함수');
}, 3000);