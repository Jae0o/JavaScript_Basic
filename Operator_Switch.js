/*  switch statement */
/*    스위치     문    */

// if 문에서 else if의 사용량이 많을때 사용을 고려해볼필요가 있다.

/* ------------------------------------------------------------------------ */

/* 가장 기본형태
switch (key) {
    case value:
        
        break;
    case value:

        break;
    default:
        break;
}
*/

/* ------------------------------------------------------------------------ */

let text = 'lee'
switch (text) {
    case 'lee':
        console.log('이름의 성');
        break;
    case 'jae':
    case 'yeong':
        // 결과의 호출하고자 하는 값이 같다면 중복 설정가능
        console.log(' 중간 이름');
        break;
    default:
        console.log('내이름이 아니다');
        break;
};
// 맨 위에서 부터 실행하여 case 안의 값을 비교한다.
// 원하는 값이 일치 하다면 break 까지 실행.
// 원하는 값을 찾고 break 까지 실행을 하고나면 이후의 값은 실행을 하지않고 멈춤