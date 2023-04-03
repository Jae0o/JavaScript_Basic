/* 정규식 표현 */
// 문자열에서 찾고자 하는 특정 내용을 찾거나 그값을 반환하고자 할때 사용함.

// ( / 정규표현식 / 플래그 ) ; = 가장 기본적인 형태


/* 정규식의 메소드 method */

/* .match */
// ( "문자열" ) .macth ( / 정규식 / 플래그 ) ;
console.log(".match : " + ("abcbdbeb").match(/b/g)); /* 앞 텍스트를 없앨시 배열로 표현 */
// 문자열에서 에서 정규식에 해당하는 항목을 찾아 배열로 표현함

/* .replace */
// ( "문자열" ) .macth ( / 정규식 / 플래그 , " 대체 내용 " ) ;
console.log(".replace : " + ("abcde").replace(/b/, " test "));
// 문자열에서 정규식과 같은 항목을 찾아 대체 내용으로 변환하여 표시

/* .split */
// ( "문자열" ) .split ( / 정규식 / 플래그 ) ;
console.log(".split : " + ("abcbacabcba").split(/c/));
// 문자열에서 정규식에 해당하는 항목을 찾아 찾은 항목을 기준으로 쪼개어 배열로 반환

/* .test */
// ( / 정규식 / 플래그 ) .test ( " 문자열 " ) ;
console.log(".test : " + (/a/).test("abcd"));

/* exec */
// ( / 정규식 / 플래그 ) .test ( " 문자열 " ) ;
console.log(".exec : " + (/a/g).exec("abcdaaaa"));