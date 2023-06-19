'use strit';
/* Promise */
// 무겁고 오래걸리는 일이 있다면 내부에서 좀 더 비동기적으로 처리하도록 도와준다.
// 또 끝난것을 알려주고 작동 실패시 알림도 수행.

/* 이전의 setTimeout 예제 */
function RunTime(func, time) {
    if (time > 0 || !time) {
        setTimeout(func, time * 1000);
    } else {
        throw new Error("!");
    };
};

try {
    RunTime(() => { console.log("출력좀 돼주세요") }, 1);
} catch (error) {
    console.log("error");
}
// 20초 뒤에 실행

/* Promise로 변환 */

function UsePromise(time) {
    return new Promise(function (resolve, reject) {
        // Promise를 사용할때는 함수안에서 new Promise를 이용해 만들어준다.
        // 그리고 성공했을때의 resolve 와 실패했을 때의 행동 reject를 지정해주는것이 중요.
        if (!time || time < 0) {
            reject(new Error('실패인가요'))
        } /* reject는 조건에 안맞고 실패했을때 사용해 실패를 잡아주는 역할을 한다. */
        setTimeout(resolve, time * 1000);
        // 정상 작동시 resolve와 then은 서로 연결돼서 일을 수행함.
    })
}

UsePromise(1)
    .then(function () { console.log("성공인가요") })
    // 정상 작동시 출력될 Code들
    .catch(function (error) { console.log("이게맞나") })
    // 실패시 에러를 잡아줄 역할
    .finally(console.log('실패,성공과 상관없이 언제나 작동 이전 Error handling과 동일'));
// Error handling 때와 동일하게 실패 성공에 무관하게 작동하여 리소스를 정리하는 등의 역할.

/* ------------------------------------------------------------------------ */

/* Chaining */
// then을 이용해 이용이 가능하다.

function makePopcorn(harvest) {
    // return new Promise(function (resolve, reject) {
    //     resolve(`🌾 => ${harvest}`)
    // });
    return Promise.resolve(`🌾 => ${harvest}`);
    // 위와 같이 축약할 수 있음.
}
function cooking(cook) {
    return Promise.resolve(`${cook} => 🔥`);
    // return Promise.reject(new Error('에러가 발생할경우'));
};
function finish(end) {
    return Promise.resolve(`${end} => 🍿`)
}

makePopcorn("🌽")
    .catch((error) => console.log("실행안되고 건너뜀"))
    .then((test) => cooking(test))
    .then((cook) => finish(cook))
    .then((end) => console.log(end))
    // 이해하면 어렵지 않음.
    // 결과를 하나씩 중첩하여 만들어가는 과정
    .catch((error) => console.log("에러는 잡아놔 주는것이 좋음 / 특히 에러 발생률이 높은 code의 경우"))
// catch 사용시에는 가장 맨뒤에 써주는것이 좋음.


/* 축약 */

makePopcorn("축약")
    .then(cooking)
    // prameter가 한개이고 그걸 그대로 함수에 사용할것이기때문에 함수이름만.
    .then(finish())
    // 위와 같지만 괄호를 넣어도된다.
    .then(console.log)
// log도 동일

/* ------------------------------------------------------------------------ */

/* Promise.all */
//  병렬 처리 방법

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

/* 병렬처리 X */
getBanana()
    .then((banana) =>
        getApple()
            .then((apple) => [banana, apple]))
    .then((list) => console.log("not use 3.5s", list));
// 병렬 처리를 진행하지 않았기때문에 
// Banana의 settime 2초 + Apple의 1.5초 
// 3.5초 후에 결과가 실행된다.

/* 병렬 O */
Promise.all([getApple(), getBanana()])
    .then((list) => console.log('Promise all 2s', list))
// Promise.all을 사용함으로 모든 promise가 병렬로 실행돼 2초 후에 모든 결과가 출력된다.

/* ------------------------------------------------------------------------ */

/* Promise.race */
// 주어진 Promise들중 가장 먼저 결과가 종료되는 Promise의 결과를 반환후 종료.

Promise.race([getApple(), getBanana()])
    .then((list) => console.log("Promise race 의 승자", list))
    // Banana는 2초 Apple은 1.5초로 Apple이 먼저 종료되어 Apple의 결과만 반환하고 끝남