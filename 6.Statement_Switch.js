/*  switch statement */
/*    스위치     문    */
// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우에 사용한다.
// ex : 요일을 출력할때 or 특정 교실을 배정할때 등

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

/* ------------------------------------------------------------------------ */

/* 예제 */
// 확실한 값을 가지고 구별해낼때 사용하기에 적합하고 정확한 값이 아니라면 if문을 사용

let group = 4;

switch (group) {
    case 1:
        console.log(" A반 입니다. ");
        break;
    case 2:
        console.log(" B반 입니다. ");
        break;
    case 3:
        console.log(" C반 입니다. ");
        break;
    case 4:
        console.log(" D반 입니다. ");
        break;
    case 5:
        console.log(" E반 입니다. ");
        break;
    default:
        console.log(" 해당 학년이 아니거나 등록된 학생이 아닙니다.");
        break;
};