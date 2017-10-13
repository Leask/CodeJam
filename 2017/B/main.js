var fs = require('fs');

var txt = fs.readFileSync('small.txt', 'utf-8');

txt = txt.trim().split('\n');

txt.shift();

// console.log(txt);

var input = txt.map(x => parseInt(x));

var check = function(x) {
    var strX = String(x);
    for (var i in strX) {
        var j = ~~i + 1;
        if (j < strX.length) {
            if (strX[i] > strX[j]) {
                return false;
            }
        }
    }
    return true;
};

var getStart = function(n) {
    if (String(n).length < 2) {
        return n;
    }
    var arrN = String(n).split('').map(x => parseInt(x))
    for (var i = 0; i < arrN.length; i++) {
        var j = ~~i + 1;
        if (j < arrN.length) {
            if (arrN[i] > arrN[j]) {
                arrN[i]--;
                break;
            }
        }
    }
};
    // console.log(arrN);

var cal = function(n) {
    // console.log('>' + n);
    var nX = getStart(n);
    for (var i = 2; i <= n; i++) {
        if (check(i)) {
            nX = i
        }
    }
    return nX;
};

for (var i in input) {
    console.log(cal(input[i]));
}
