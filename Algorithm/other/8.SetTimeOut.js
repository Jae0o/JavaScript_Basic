'use strict';
// 주어진 시간이 지나면 함수를 호출함.
// 단 시간이; 0보다 작으면 에러를 던짐.


function RunTime(func, time) {
    if (time > 0) {
        setTimeout(func, time * 1000);
    } else {
        throw new Error("!");
    };
};


try {
    RunTime(() => { console.log("출력좀 돼주세요") }, 0);
} catch (error) {
    console.log("error");
}