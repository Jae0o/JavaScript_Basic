"use strict"

/* Async 와 await */
// 비동기적인 code들을 async를 통해서 동기적으로 변환해 수행하게 해준다.
// but Promise를 사용할경우 앞에 await을 붙여 줘야한다.

/* 예제 */
function getBanana() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve("banana"), 2000)
    })
};

function getApple() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve("apple"), 1500)
    })
};

/* not Use asyns */
getBanana()
    .then((banana) =>
        getApple()
            .then((apple) => [banana, apple]))
    .then((list) => console.log("not use Asyns", list));

/* Use asyns */
async function Fruit() {
    // asyns는 function 앞에 붙여 사용해준다.
    const Banana = await getBanana();
    // promise 앞에는 await을 써주고 이를 변수로 할당해 사용성을 높임
    const Apple = await getApple();
    return [Banana, Apple];
};
Fruit()
    .then((item) => console.log('use asyns ', item));