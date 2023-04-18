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