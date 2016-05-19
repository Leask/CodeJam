'use strict';

var fs = require('fs');

// var inputFileName = 'A-small-attempt0.in.txt';
var inputFileName = 'A-large.in.txt';

var file = fs.readFileSync(inputFileName, 'UTF8');

var lines = file.split('\n');

var count = null;

var cases = [];

for(var i in lines) {
    if (!lines[i]) {
        continue;
    }
    if (count) {
        cases.push(parseInt(lines[i], 10));
    } else {
        count = parseInt(lines[i], 10);
    }
}

// -----------------------------------------------------------------------------

var curDigs = {};

var logDig = function(item) {
    var items = String(item).split('');
    for (var i in items) {
        curDigs[items[i]] = true;
    }
};

var countDigs = function() {
    return Object.keys(curDigs).length >= 10;
};



var work = function(i, item) {
    var lastNum = null;
    var curNum  = item;
    var j       = 1;
    curDigs = {};
    do {
        logDig(curNum);
        lastNum = curNum;
        curNum  = item * ++j;
    } while (!countDigs() && lastNum !== curNum)
    if (countDigs()) {
        console.log('Case #' + (i + 1) + ': ' + lastNum);
    } else {
        console.log('Case #' + (i + 1) + ': ' + 'INSOMNIA');
    }
};

for (i = 0; i < count; i++) {
    work(i, cases[i]);
}

