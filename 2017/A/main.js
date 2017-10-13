var input = [
    [[0, 0, 0, 1, 0, 1, 1, 0], 3],
    [[1, 1, 1, 1], 4],
    [[0, 1, 0, 1, 0], 4],
];

var flip = function(arr, i, j) {
    var tmp = [];
    for (var x in arr) {
        tmp.push(~~x >= i && ~~x < i + j ? ~~!arr[x] : arr[x]);
    }
    console.log(tmp);
    return tmp;
};

var check = function(arr) {
    var result = true;
    for (var i in arr) {
        if (!arr[i]) {
            result = false;
            break;
        }
    }
    return result;
};

var exists = function(arr) {
    var str = arr.join('');
    var result = !!allStatus[str];
    allStatus[str] = true;
    return result;
};

var allStatus = {};

var k = null;

var min = null;

var rawCal = function(arr, time) {

    // var allExists = true;
    for (var i = 0; i + k <= arr.length; i++) {
        // console.log(i);
        var newArr = flip(arr, i, k);
        if (check(newArr)) {
            // console.log(time);
            if (min === null || min > time) {
                console.log('OK!');
                min = time;
            }
            // return;
        }
        if (!exists(newArr)) {
            rawCal(flip(arr, i, k), time + 1);
        }
    }

};

var cal = function(arr, ki) {
    allStatus = {};
    k = ki;
    min = null;
    rawCal(arr, 0);
    console.log(min);
    // console.log(flip(arr, 0, 3));
    // console.log(arr);
    // console.log(k);
};

for (var i in input) {
    cal(input[i][0], input[i][1]);
    break;
}
