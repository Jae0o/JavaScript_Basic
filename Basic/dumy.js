// null 빈공간
// undefinded 확정되지 않은.

// function 함수이름 (변수값들) {
//     함수들
// }


// return 함수들중 가장 마지막 반환하는 값을 쓸때 붙여줌.


// 리터럴 방식
// let a = function () {
//     console.log("리터럴 방식");
// }


// // for문
// let fruit_list = ['사과', '감', '감', '배', '포도', '포도', '딸기', '포도', '감', '수박', '딸기']
// let count = 0;

// for (let i = 0; i < fruit_list.length; i++) {
//     let fruit = fruit_list[i]
//     if (fruit == '감') {
//         count += 1;
//     }

// };
// console.log(count);

function checkEmail(email) {
    if (email.indexOf('@') == -1) {
        console.log("이메일이 아닙니다");
    } else {
        console.log("이메일이 맞습니다.");
        console.log("아이디 : " + email.split("@", 1));
        console.log("도메인 : " + email.split("@")[1].split(".")[0]);
    }
}

checkEmail("lejdfskfhsd@nasdbasjkd.com");

// let abc = ["a", "b", "c"];
// abc.splice(1, 1, "g");

// console.log(abc);