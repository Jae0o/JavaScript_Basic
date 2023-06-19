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


/* ------------------------------------------------------------------------ */

/* Error Bubbling */
// 에러는 전파되어 질 수 있음
// 또 에러가 발생한 함수외의 다른함수에서 중간에 에러를 잡아줄 수 있음.

function A() {
    throw new Error("error");
};
// A에서 에러가 발생
function B() {
    try {
        A();
        // B에서 A를 호출하면 Error가 전파되어지고 이를 중간에 잡아 줄수 있다.
    } catch (error) {
        console.log("B Error Bubbling!");
        console.log("B에서 try를 통해 미리 에러를 검출");
    } finally {
        console.log("B에서의 try catch Finally");
    };
};

function C() {
    try {
        B();
    } catch (error) {
        console.log('C Error Bubbling!');
        // 앞의 B의 try catch finally를 주석처리하면 C에서 Error를 캐치한다.
        // 즉 원하는 위치에서 에러를 캐치해 잡아낼 수 있음.
    } finally {
        console.log('C에서의 try catch Finally');
        // B에서 Error를 잡아 냈더라도 C의 finally는 잘 작동한다.
    }
};
C();
/* 결과
B Error Bubbling!
B에서 try를 통해 미리 에러를 검출
B에서의 try catch Finally
C에서의 try catch Finally */
