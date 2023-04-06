let number = [20, 17, 100, 7, 53, 3, 2, 1];

let sortfunc = function (a, b) {
    console.log(a, b);
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}
console.log(number.sort(sortfunc));

