/* 클로저 */
/* closure */


/* 내부함수 외부함수 */

function 외부함수() {
    let testvalue = '적용 되는가?'
    function 내부함수() {
        console.log(testvalue);
    };
    내부함수();
};
console.log(외부함수());
// 내부함수는 외부함수의 지역변수에 접근하여 변수를 사용할 수 있다.


/* private variable */
/*  비밀       변수   */

// 소프트 웨어가 커졌을때 아무나 접근하여 변경하는것을 방지하는 방법중 하나
function outline(비밀변수) {
    return {
        infunc1: function (내부함수1) {
            return 비밀변수;
        },
        infunc2: function (내부함수2) {
            비밀변수 = 내부함수2;
        }
    }
}
test1 = outline('내부함수1 적용');
test2 = outline('내부함수2 적용');

console.log(test1.infunc1());
console.log(test2.infunc1());

test1.infunc2("내부함수1 비밀 적용");
console.log(test1.infunc1());
console.log(test2.infunc1());


/* 비밀변수 사용 예시 */

function movie_title_test(title) {
    return {
        get_title() {
            return title;
        },
        // set title 로 title변수를 바꾸더라도 근본적인 title에는 접근이 불가능하다.
        set_title(_title) {
            if (typeof _title === 'string') {
                title = _title;
                console.log(_title);
            } else {
                console.log("제목이 문자열이 아닙니다.");
            };
        }
    }
}
movie_title = movie_title_test("테스트용 영화이름");
console.log(movie_title.get_title());
movie_title.set_title(1);
movie_title.set_title("ㅇㅁㄴㅇㅁ");
// console.log(movie_title_test.set_title(1));