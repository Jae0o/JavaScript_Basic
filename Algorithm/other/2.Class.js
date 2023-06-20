'use strict';

/* counter */

/* Quiz 1 */
class Counter {
    #Not;
    constructor(startnum) {
        if (isNaN(startnum) || startnum < 0) {
            this.#Not = 0;
            // 숫자가 아니거나 음수라면 0부터 가운터를 시작한다
        } else {
            this.#Not = startnum;
            // 숫자라면 그 숫자부터 카운터를 시작할수 있도록
        }
    };
    get show() {
        return console.log(this.#Not);
        // 값을 확인하고 싶을때 사용가능
    }
    increment() {
        this.#Not++
        // 실행시 카운터가 작동해 +1을 실행
    };
}

const counter1 = new Counter("fj");
counter1.increment();
counter1.increment();  /* 3번을 실행해 값 +3 */
counter1.increment();
counter1.show; /* 값 = 3 */

const counter2 = new Counter(5); /* 5에서 시작 */
counter2.increment();
counter2.increment(); /* 2번을 실행 +2 */
counter2.show; /* 5에서 2번을 실행 값 = 7 */

/* ------------------------------------------------------------------------ */

/* Quiz 2 */

// 정직원과 파트타임직원을 나타낼 수 잇는 클래스를 만듬.
// 직원들의 정보 : 이름. 부서이름 , 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산
// 정직원은 시간당 10000 / 파트타임 직원은 8000

class Staff {
    constructor(name, department, hours, pay) {
        this.name = name;
        this.department = department;
        this.hours = hours;
        this.pay = pay;
    }
    Monthpay() {
        return this.hour * this.pay;
    }
}
class PartTime extends Staff {
    constructor(name, department, hours) {
        super(name, department, hours, 8000);
    }
};

let None = new PartTime('every', 'body', 8);
None.Monthpay();



// class PartStaff {
//     constructor(name, division, time) {
//         this.name = name;
//         this.division = division;
//         this.time = time;
//     }
//     pay() {
//         return console.log(this.time * 10000 + "won");
//     }
//     information() {
//         console.log(`이름 : ${this.name}
//         부서 : ${this.division}
//         근무시간 : ${this.time} hour
//         월급 : ${this.MonthPay}`);
//     }
// }

// class FullStaff extends PartStaff {
//     pay() {
//         return console.log(this.time * 10000 + "won");
//     }
// }

// const Lee = new PartStaff("Lee", "artist", "6");
// Lee.pay();
// Lee.information();
// const Pyen = new FullStaff("na", "Artist", "8")
// Pyen.pay();