"use strict";
// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
function func1(array) {
    const funcvalue = Array.from(array);
    for (let i = 0; i < funcvalue.length; i++) {
        if (funcvalue[i] === "🍓") {
            funcvalue[i] = "🥝"
        };
    };
    return funcvalue;
};

const Quiz1 = ['🍌', '🍓', '🍇', '🍓'];
const Quiz1Result = func1(Quiz1);
console.log(Quiz1Result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function func2(array, value) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            count++
        };
    };
    return count;
};

const Quiz2 = ['🍌', '🥝', '🍇', '🥝'];
console.log(func2(Quiz2, "🥝"));
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
function func3(array1, array2) {
    const value = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            value.push(array1[i]);
        };
    };
    return value;
};

const array1 = ['🍌', '🥝', '🍇'];
const array2 = ['🍌', '🍓', '🍇', '🍓', '🥝'];
console.log(func3(array1, array2));