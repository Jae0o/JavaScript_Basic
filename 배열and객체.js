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
// 배열에 추가
console.log(test_list_one);
test_list_one.push("ex_4");
console.log(test_list_one);










/* 반복문에 응용 */

let test_list_two = ["lee", "jae", "yeong"]; /* 배열 값을 추가해도 함수내에서 추개해서 동작 */
for (let i = 0; i < test_list_two.length; i++) {
    console.log(test_list_two[i].toUpperCase());
}



