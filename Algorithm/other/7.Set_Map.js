'use strict';
// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
const Quiz1 = new Set(fruits);
console.log(Quiz1);
console.log(fruits);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
const Quiz2 = new Set([])

for (const item of set1) {
    if (set2.has(item)) {
        Quiz2.add(item);
    }
}
console.log(Quiz2);



function Quiz3(set1, set2) {
    let array = [...set1].filter((item) => set2.has(item));
    return new Set(array);
}
console.log(Quiz3(set1, set2));