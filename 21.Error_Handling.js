'use strict';
/* Error Handling */

/* throw new Error( 'message' ) */
// 에러를 강제로 던진다. 실행되어 에러를 던지고 나면 어플리케이션 종료사망.
function Error(text) {
    // throw new Error('강제 error 발생');
    return console.log('에러가 던져져 이미 어플리케이션이 종료되어 실행안됨.')
};

// Error() 실행시 당연히 에러 발생.

/* ------------------------------------------------------------------------ */

/* try catch finally */

function NotUseTryCatchFinally(error) {
    // throw new Error('강제 error 발생');
    let Value = error;
}
// 주석을 헤제하고 NotUseTryCatchFinally(Error()) 실행 경우 해당 경우 에러가 발생.

function TryCatchFinally(func) {
    let Value;
    try {
        Value = func;
        throw new Error('강제 error 발생');
    } catch (error) {
        console.log('catch에서는 에러가 발생시 실행');
    } finally {
        console.log('이후 에러에 성공,실패의 유무와 상관없이 finally에서 리소스 정리가 가능')
    }
};

TryCatchFinally(Error());
// 에러가 발생할것 같은 function,code 라면 "try" 로 시도 하고
// 에러 발생시 "catch(error)"안의 내용이 실행이 된다.
// 이후 "finally"에서 이전의 값이 성공, 실패의 유무와는 무관하게 리소스 정리등이 가능하다.