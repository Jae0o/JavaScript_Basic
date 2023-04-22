/* 배열 or 리스트 */

// 연관된 데이터를 모아 통으로 관리하기 위해 사용한다.
/* 간단 예시 */
let test_list_one = ["ex_1", "ex_2", "ex_3"];
console.log(test_list_one[0]);
console.log(test_list_one[1]);
console.log(test_list_one[2]);


/* length */
// 배열의 크기 확인
console.log(test_list_one.length);

/* .push */
// 배열의 맨뒤에 추가
console.log(test_list_one);
test_list_one.push("ex_4");
console.log(test_list_one);

/* unshift */
// 배열의 맨 뒤에 추가
console.log(test_list_one);
test_list_one.unshift("ex_0");
console.log(test_list_one);

/* concat */
// 기존의 배열에 배열단위의 내용을 추가한다.
console.log(test_list_one);
test_list_one = test_list_one.concat(["ex_5", "ex_6"]);
console.log(test_list_one);

/* shifht */
// 맨앞의 내용을 삭제한다.
test_list_one.shift();
console.log(test_list_one);

/* pop */
// 맨뒤의 내용을 삭제한다.
console.log(test_list_one);
test_list_one.pop();
console.log(test_list_one);

// -------------------------------------------------------------------------

/* splice */
// 주의
// 배열의 이름 ( 들어갈 index번호 , 기존의 인덱스번호에 위치한 내용을 기준으로 제거할 숫자 , 추가할 내용1.추가할 내용2, ... )

let splice_1 = ["a", "b", "c", "d", "e"];
console.log(splice_1);
splice_1.splice(2, 2, "1", "2", "3");
console.log(splice_1);

// --------------------------------------------------------------------------

/* sort or reverse */
// sort 는 배열을 정리해준다.
// reverse는 sort와 반대로 역행으로 정렬해준다.
let sort_1 = ["1", "b", "3", "c", "a", "2"];
console.log(sort_1);
sort_1.sort();
console.log(sort_1);
sort_1.reverse();
console.log(sort_1);

/* 배열의 for in 문 */
// for ( key in 배열이름 ) { 반복내용 }
// 출력시 key = 인덱스 번호를 출력함
// 배열이름[key] = 배열의 내용물을 출력함
let forin_1 = ["one", "two", "three"];
console.log(forin_1);
for (number in forin_1) {
    console.log(number); /* 인덱스 번호들을 나열 */
    console.log(forin_1[number]); /* 배열의 내용물들을 나열 */
}


/* 반복문에 응용 */

let test_list_two = ["lee", "jae", "yeong"]; /* 배열 값을 추가해도 함수내에서 추개해서 동작 */
for (let i = 0; i < test_list_two.length; i++) {
    console.log(test_list_two[i].toUpperCase());
}

