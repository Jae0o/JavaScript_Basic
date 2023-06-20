"use strict";
// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

const filter = nums.filter(function (item) {
    return item > 5;
})
const average = filter.reduce(function (total, value) {
    total += value;
    return total / filter.length
})
console.log(average);


let Test1 = nums
    .filter((item) => item > 5)
    .reduce((total, value, _, array) => total + value / array.length, 0);
console.log(Test1);