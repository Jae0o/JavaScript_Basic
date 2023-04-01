// 반복문 iterate or loop



// while문

// while ( 반복 조건 ) { 반복 실행될 코드 }
// 주의점 - 적정 한계 설정없이 실행시 컴퓨터에 무리한 과부하를 줄수 있다.

let i = 0;
while (i < 1) {
    console.log(i);
    i = i + 1;
}



// for 문

// while 문의 상위 대체제 같은 느낌
// 조건 란이 순서가 매우 중요하다
// for ( 초기화; 반복조건; 반복 실행) { 반복 실행할 코드}

for (let i = 0; i < 2; i++) {
    console.log(i);
}

// i++ = 알림창과 같은 태그와 사용시 더하기 이전의 값을 먼저 보여주고 ++를 실행한다.
// ++i = 반대로 값을 먼저 더한후 더한 값을 보여주며 실행한다.



// break

// break는 조건에 맞는 값에 도달하면 활동을 정지한다.
// 조건문이 필요함.

for (let i = 0; i < 20; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
} /* 0~4 까지 출력된후 5에 멈추고 나머지 6~19는 출력이 안된다. */



// continue 

// continue 는 break와 다르게 조건에 도달한 부분만 활동을 정지하고 이후 계속 진행한다.
// 조건문이 필요함.

for (let i = 0; i < 20; i++) {
    if (i === 5 || i == 8) {
        continue;
    }
    console.log(i);
} /* 5와 8이 제외된 0부터 19까지의 값이 출력됨.*/



// 반복문의 중첩 실행

/* 예시 */
for (let i = 0; i < 10; i++) {
    for (let o = 0; o < 10; o++) {
        console.log(i, o);
    }
}