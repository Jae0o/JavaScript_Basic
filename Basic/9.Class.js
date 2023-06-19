'use strict';
// 객체를 만들수 만들수 있는 템플릿 방법
// 1. 생성자 create New 함수  /* 고전 방법으로 이제는 잘 사용하지않음. */
// 2. Class     /* 가장 최근의 방법 */

/* ------------------------------------------------------------------------ */

/* Class */

// 객체를 생성할 수 있는 템플릿 = new 생성자
// 객체 지향 프로그램의 시작 단계 / 요즘은 create 함수가 아닌 Class를 사용.
// Class를 만들어진 객체 Object 들은 "인스턴스 instance" 라고 한다.

// create 함수
function Brand(name, flag) {
    this.name = name;
    this.flag = flag;
    this.country = function () {
        console.log(`${this.name} country : ${this.flag}`);
    };
};
const Audi = new Brand('Audi', '🇩🇪');
Audi.country();
const Kia = new Brand('Kia', '🇰🇷');
Kia.country();

// Use Class

// class를 만들때는 class 키워드를 이용해 사용
class CarBrand {
    /* 생성자 함수*/
    // New 키워드로 객체를 생성할때 호출되는 함수
    constructor(name, flag) {
        // 외부에서 받아온 인자를 class와 링크시켜주는 작업이 필요.
        this.name = name;
        this.flag = flag;
    };

    // Class에 필요한 멤버 함수는 보통 밖에 설정
    display() {
        // 함수 앞에 function 붙이면 에러남 주의
        console.log(`${this.name} country : ${this.flag}`);
    }
}

const Toyota = new CarBrand('Toyota', '🇯🇵');
Toyota.display();
// Toyota 는 CarBrand 라는 Class의 Instance 인스턴스이다

const ObJ = { name: "객체일뿐" };
// Class 나 생성자를 거치지 않은 그저 객체일뿐이다.

/* ------------------------------------------------------------------------ */

/* Static */
// Class 이름을 통해서만 접근이 가능한 method 와 property 들로 Class 레벨이라고 함.
// instance를 호출해도 그 static으로 정의한 값은 호출되지 않음.

class Artist {
    constructor(name, major) {
        // instance 레벨의 method
        this.name = name;
        this.major = major;
    };
    display = () => { console.log(`전공 : ${this.major} / 이름 : ${this.name}`) };
    // 동일한 형식의 property와 method를 찍어내는것을 instance 레벨의 property 와 method라함

    // Class 레벨의 method
    static StaticMethod() {
        //Class 레벨의 method에서는 this를 참조할 수 없음.
        return new Artist('pyen', '해금');
    };
};
// instance 레벨호출 방법!
const Lee = new Artist('lee', 'Piano');
console.log(Lee.display());
console.log(Lee);
// 호출을 하더라도 static /class 레벨은 호출되어 표시되지 않음.

// class 레벨의 경우 호출 이름을 class 이름으로 해야함
console.log(Artist.StaticMethod());

/* ------------------------------------------------------------------------ */

/* field */

class Feild {
    /* field */
    #name; // private
    major; // public
    #type = "서양";
    // 생성자에서 받기전 보이지 않는 필드들이 존재하는것과 같음.

    constructor(name, major) {
        this.#name = name;
        this.major = major;
    };
    display() { console.log(`전공 : ${this.major} / 이름 : ${this.#name}`) };
};

const TestField = new Feild('Kim', 'Drum');
TestField.display();
console.log(TestField);
/* 결론 */
// 해당 Class 에는 3개의 property가 존재하고
// name and major은 외부로 부터 property값을 제공 받고
// type 은 미리 초기화 해둔 값으로 지정된다.

/* 접근 제어자 ( 캡슐화 ) */
// 내부상 필요한 데이터를 외부에서 보이지 않도록 캡슐화 하는 작업
// 보안에는 private(#) public(기본값) protected(상속과 관련) 이 있고
// public은 기본상태이며 private는 필드의 값에 #을 붙여준다.
// #을 붙여주면 외부에서 값을 수정할수없음.
// instance를 호출해도 private로 설정한 값은 보여지지 않는다.

/* ------------------------------------------------------------------------ */

/* 접근자 프로퍼티 */
// Accessor Property

// 무엇인가 처리하는 행동은 아니지만 무엇을 조합하거나 특정한 일을 좀 더 처리할때 주로 사용
// 예로 변수를 할당하거나 함수의 일보다는 함수의 한부분을 호출하는 과정 

/* Not use Get or Set */
class GetSet {
    constructor(time, num) {
        this.time = time;
        this.num = num;
        this.test = `배정시간 : ${this.time}  수험번호 : ${this.num}`;
    };
    /* test를 꼭 함수로 받아야할까? */
    // test() {
    //     console.log(`배정시간 : ${this.time}  수험번호 : ${this.num}`);
    // };
}

let lee = new GetSet('16:00', 5);
console.log(lee.test);
// 동일 하게 실행이 가능하지만...
lee.time = '14:00';
console.log(lee.time);
console.log(lee.test);
// 해당 값을 변경하더라도 변경이 되지 않는 문제가 존재하기때문에 업데이트가 가능한 함수를 사용하던이유.


/* Use Get or Set */

class GetSet2 {
    constructor(time, num) {
        this.time = time;
        this.num = num;
        this.test = `배정시간 : ${this.time}  수험번호 : ${this.num}`;
    };

    get test() {
        // 함수의 복잡한 일이라기 보다는 속성의 한부분이라고 생각될때 간단하게 get을 붙여 사용가능
        console.log(`배정시간 : ${this.time}  수험번호 : ${this.num}`);
    };

    set result(value) {
        // 변수를 "할당" 할때 사용하는 것인 set
        console.log(value, "왜안돼");
    };
}

let jae = new GetSet('15:00', 2);
// 새로운 객체 생성
console.log(jae.test);
// 일반적 함수와 달리 " ( ) " 를 넣지 않아도 호출 get을 이용해 함수를 호출
jae.result = 'pass';
// set을 통해 함수를 할당 하기 때문에 위와 같은 방법으로 호출
console.log(jae);

/* ------------------------------------------------------------------------ */

/* 확장 */
// Extends

/* Not use Extends */
class NotUseDog {
    constructor(color) {
        this.color = color;
    };
    play() {
        console.log("산책이 가능하다.");
    }
};
class NotUseCat {
    constructor(color) {
        this.color = color;
    };
    play() {
        console.log("산책이 가능하다.");
    }
};
let smalldog = new NotUseDog('brown');
let samllcat = new NotUseCat('black');
console.log(smalldog);
console.log(samllcat);
smalldog.play();
samllcat.play();
// 두개의 동일한 클래스에 공통된 내용이 존재하고 이런경우를
// 이러한 비효율을 막기 위해 확장 Extends를 사용한다.

/* Use Extends */

// 동물이라는 공통점을 가지고 있다.
class Animal {
    constructor(color) {
        this.color = color;
    };
    play() {
        console.log("use extends : 산책이 가능하다.");
    };
};
class UseDog extends Animal { }
// extends를 통해 animal에 있는 생성자 함수 변수 모든걸 UseDog으로 상속한다.
let bigdog = new UseDog('gold');
console.log(bigdog);
bigdog.play();

/* 생성자와 함수 변수를 추가하고싶을때 */
class UseCat extends Animal {
    // 생성자 추가
    constructor(color, name) {
        // 기존 상속된 상속자도 써주고 super를 통해 상속된 생성자도 링크해ㅈ ㅁ
        super(color);
        // super : 내가 상속중인 부모를 카르킴 this와 비슷함
        this.name = name;
    };
    // 기존의 class에 함수적는것과 동일 하게 추가가능
    food() {
        console.log("밥은 뭘먹을까");
    };
    // 상속된 함수를 덮어 쓰거나 그대로 유지하며 함수에 내용 추가하고싶을때
    play() {
        // 기존의 함수를 불러 내용을 쓰면 덮어써지고 기존의 함수내용은 없어짐.
        console.log("use extends : 산책이 불가능할 확률이 높다.");
        // super를 붙여 이전의 상속된 함수를 호출하면 기존의 내용은 유지하며 새로 추가 가능 
        super.play();
    }
}
let bigcat = new UseCat("white", "nabi");
console.log(bigcat);
bigcat.food(); /* 추가한 함수 */
bigcat.play(); /* 기존의 상속된 함수에 덮어쓰고 유지하기 */


/* ------------------------------------------------------------------------ */

/* 오버라이딩 */

function overRiding(A, B) {
    this.A = A;
    this.B = B;
    this.display = function () {
        console.log("기존의 내장 프로퍼티 레벨의 함수", A, B)
    }
}

const over1 = new overRiding(3, 4);
const over2 = new overRiding(5, 4);

console.log(over1); /* Value = overRiding { A: 3, B: 4, display: [Function (anonymous)] } */
console.log(over2); /* Value = overRiding { A: 5, B: 4, display: [Function (anonymous)] } */
// 생성자를 통해 만든 인스턴스에는 각각의 프로토타입 레벨의 함수가 존재!
over1.display(); /* Value = 기존의 내장 프로퍼티 레벨의 함수 3 4 */
over2.display(); /* Value = 기존의 내장 프로퍼티 레벨의 함수 5 4 */

over1.display = function () {
    console.log("인스턴트 레벨에서 동일한 이름으로 함수를 재정의 하여 프로토타입 레벨의 함수를 가리는것을 오버라이딩이라함")
}
over1.display() /* Value = 인스턴트 레벨에서 동일한 이름으로 함수를 재정의 하여 프로토타입 레벨의 함수를 가리는것을 오버라이딩이라함 */
over2.display() /* Value = 기존의 내장 프로퍼티 레벨의 함수 5 4 */