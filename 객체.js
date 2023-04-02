/* 객체 */
// 객체는 = 맵 (map) , 연관배열 ( associative array ) , 딕셔너리 ( dictionary ) 라고도 불림

/* 정의 방법 */
/* 1 */
let test_1 = { name: "lee", age: 29, home: "sejong" };
console.log(test_1);

/* 2 */
let test_2 = {};
test_2.name = "jae";
test_2["age"] = 27; /* 텍스트로 사용해야하거나 정의 후에 사용해야함 */
test_2.home = "daejeon";
console.log(test_2);


/* key 값을 불러오는 방법 */
console.log(test_1.name);
console.log(test_1["age"]); /* 텍스트로 사용해야하거나 정의 후에 사용해야함 */

/* 객체 지향 프로그래밍 */
// 하나의 객체 안에 여러 객체를 그룹화 하여 사용하는 것을 의미함.
let dictionary = {
    'list_dictionary': { 'key1': "value1", 'key2': "value2", 'key3': "value3" },
    'function_dictionary': function () {
        for (let list in dictionary.list_dictionary);
        console.log(this.list_dictionary[list]);
        /* this 는 함수가 소속된 개체의 이름을 대체한다. */
    }
}

