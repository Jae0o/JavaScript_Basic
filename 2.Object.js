/* 객체 */
// 객체는 = 맵 (map) , 연관배열 ( associative array ) , 딕셔너리 ( dictionary ) 라고도 불림
// 공통된 데이터를 묶어 보관하는 역할을 한다.

/* 객체 복합데이터는 공간이 크다. 
    그렇기 때문에 데이터의 대부분을 메모리의 heap이라느 곳에 별도 저장하고
    heap에 저장된 object를 메모리 다른 공간에 변수를 하나 지정하여 
    객체가 들어 있는 메모리의 주소를 저장하고 필요할때 꺼내 사용한다.*/

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
