"use strict";

/* 모듈화에서 노출된 코드를 불러오는 방법 */
// MainJS에서 노출된 코드를 불러오는 방법 동일한 번호끼리 참고
// 기본적으로 import... from을 통해 받아올 수 있다. but export의 설정에 따라 방법이 다르다.

/* 1 */

// impot 함수이름(변경가능) from "./MainJS.js";
// 단 1개의 노출시에 불러오는 방법으로 import 뒤에 { } 를 붙이지 않는다.
// 단 1개의 코드를 불러오기때문에 꼭 기존 MainJs에서의 함수 이름이 아닌 다른 이름을 사용할 수 있다.

/* 2 */

// 여러 code를 불러올때 사용하는방법.
import { increase, display as changeName } from "./MainJs.js";
// import 뒤 { } 를 통해 원하는 MainJS 속 함수,code들의 이름을 "그대로" 가져와야한다.
// 이름 변경을 원한다면 " 기존함수이름 as 변경이름 " 형태를 통해 변경
let num = 0;

increase(num);
changeName(num);

/* 3 */

// 여러 code를 그룹화 하여 가져올 수 있다. ( JS 파일이 많아 관리가 어려울때 유용 )

// import * as GroupNaming from "./MainJs.js"
// * as 그룹이름의 형태로 하나의 그룹으로 묶어줄 수 있다.

// GroupNaming.display(num);
// GroupNaming.increase(num);
// 호출시 그룹이름.MainJSCode이름 으로 호출가능.