// IF 조건문 & else & else if


// if (true or false 기준값 넣기 ) {
//     true or false 의 기준에 일치한다면 출력할 코드
//      } else {
//         반대의 값이라면 출력할 코드
//      }   


function test1(age) {
    if (age > 20) {
        console.log("성인");
    } else {
        console.log("어린이");
    }
}

test1(28);


// else if 는 여러개가 있다면 위에서부터 차례대로 검사한후 실행한다.

function test2(age, university) {
    if (age > 19 && university === "yes") {
        console.log("대학생입니다.");
    } else if (age > 19 && university === "no") {
        console.log("성인입니다.")
    } else if (age > 7) {
        console.log("청소년입니다.")
    } else {
        console.log("유아입니다.")
    }
}

test2(4, "yes");

