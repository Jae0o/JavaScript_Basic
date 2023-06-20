// 이메일을 구분하고 아이디와 도메인을 검출 하는 문제.


function checkEmail(email) {
    if (email.indexOf('@') == -1) {
        console.log("이메일이 아닙니다.");
    } else {
        console.log("이메일이 맞습니다.");
        console.log("아이디 : " + email.split("@", 1));
        console.log("도메인 : " + email.split("@")[1].split(".")[0]);
    }
}
checkEmail("leey153@naver.com");
/* 결과 */
// 이메일이 맞습니다.
// 아이디 : leey153
// 도메인 : naver

checkEmail("leey153naver.com");
/* 결과 */
// 이메일이 아닙니다.




// 정규식 사용으로 만들기

function checkEmail2(email) {
    if ((/[\w\-\.]+\@[\w\-\.]+\.[\w]+/g).test(email)) {
        console.log("정답");
    } else {
        console.log("오답");
    }
}

checkEmail2("leey153@naver.com")