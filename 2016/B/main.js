'use strict';

var fs = require('fs');

// var inputFileName = 'B-small-attempt0.in.txt';
var inputFileName = 'B-large.in.txt';

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

var stack = [];

var lite = function() {
    var items = [];
    var lp    = null;
    for (var i in stack) {
        if (lp !== stack[i]) {
            items.push(stack[i]);
        }
        lp = stack[i];
    }
    stack = items;
};

var check = function() {
    // console.log(stack);
    return stack.length === 1 && stack[0] === '+';
};

var flip = function() {
    if (stack[0] === '-') {
        stack[0]  =  '+';
    } else if (stack[1] === '-') {
        stack[0]  =  '-';
        stack[1]  =  '+';
    } else {
        console.log('Error');
    }
    lite(stack);
};

var work = function(i, item) {
    stack = item.split('');
    lite();
    var step = 0;
    while(!check()) {
        flip();
        step++;
    }
    console.log('Case #' + (i + 1) + ': ' + step);
};

for (i = 0; i < count; i++) {
    work(i, cases[i]);
}
