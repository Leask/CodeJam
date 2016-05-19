'use strict';

var fs = require('fs');

// var inputFileName = 'C-small-attempt1.in.txt';
var inputFileName = 'C-large.in.txt';

var file = fs.readFileSync(inputFileName, 'UTF8');

var lines = file.split('\n');

var count = null;

var cases = [];

for(var i in lines) {
    if (!lines[i]) {
        continue;
    }
    if (count) {
        cases.push(lines[i]);
    } else {
        count = parseInt(lines[i], 10);
    }
}

// -----------------------------------------------------------------------------

var n    = null;

var j    = null;

var cur  = null;

var got  = null;

var base = {};

var decToBin = function(dec) {
    var bits = [];
    var rem  = 0;
    while (dec >= 2) {
        rem = dec % 2;
        bits.push(rem);
        dec = (dec - rem) / 2;
    }
    bits.push(dec);
    bits.reverse();
    return bits.join('');
};

var next = function() {
    cur = decToBin(parseInt(cur, 2) + 2);
    // console.log(cur);
};

var check = function() {
    for (var i = 2; i <= 10; i++) {
        base[i] = parseInt(cur, i);
    }
    var nd = [];
    for (i in base) {
        var p = prime(base[i]);
        if (p.length < 2) {
            return false;
        }
        nd.push(p[0]);
    }
    return nd;
}

var prime = function(n) {
    var p = [];
    if (n >= 0) {
        while(n % 2 === 0) {
            p.push(2);
            if (p.length > 1) {
                return p;
            }
            n /= 2;
        }
        for (var i = 3; n >= i;) {
            if (i > 10000) {
                return p;
            }
            if (n % i == 0) {
                p.push(i);
                if (p.length > 1) {
                    return p;
                }
                n /= i;
            } else {
                i += 2;
            }
        }
    }
    return p;
};

var work = function(i, item) {
    console.log('Case #' + (i + 1) + ':');
    item = item.split(' ');
    n    = parseInt(item[0], 10);
    j    = parseInt(item[1], 10);
    got  = 0;
    cur  = '1';
    for (var l = 0; l < n - 2; l++) {
        cur += '0';
    }
    cur += '1';
    while (cur.length === n && got < j) {
        var result = check();
        if (result) {
            var out = cur;
            for (var k in result) {
                out += ' ' + result[k];
            }
            got++;
            console.log(out);
        }
        next();
    }
};

for (i = 0; i < count; i++) {
    work(i, cases[i]);
}
