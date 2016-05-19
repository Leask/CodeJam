'use strict';

var fs = require('fs');

var inputFileName = 'D-small-attempt0.in.txt';
// var inputFileName = 'D-large.in.txt';

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

var k     = null;
var c     = null;
var s     = null;
var tiles = null;
var orgs  = null;
var t     = null;

var mkOrg = function(str) {
    // console.log(str);
    // console.log(k);
    str = str ? str : '';
    if (str.length === k) {
        return orgs.push(str.split(''));
    }
    return mkOrg(str + 'G') && mkOrg(str + 'L');
};

var mkNc = function(org, first) {
    var nc = [];
    for (var i in org) {
        for (var j in first) {
            nc.push(org[i] === 'G' ? 'G' : first[j]);
        }
    }
    return nc;
};

var mkNcX = function() {
    for (var j in orgs) {
        var nc = orgs[j];
        for (var i = 1; i < c; i++) {
            nc = mkNc(nc, orgs[j]);
        }
        tiles.push(nc);
    }
};

var getT = function(curT, length, cI) {
    curT = curT ? curT : '';
    if (curT.length === cI) {
        return t.push(curT.split('').map(function(x) {
            return ~~x;
        }));
    }
    for (var p = curT.length ? ~~curT.substr(-1) + 1 : 0; p < length; p++) {
        getT(curT + String(p), length, cI);
    }
};

var getTX = function() {
    for (var r = 1; r <= s; r++) {
        getT(null, tiles[0].length, r);
    }
};

var rawCheck = function(x) {
    var cAL = 0;
    for (var i in x) {
        var aL = true;
        for (var j in x[i]) {
            if (x[i][j] !== 'L') {
                aL = false;
                break;
            }
        }
        cAL += aL;
    }
    return !cAL;
};

var check = function() {
    var result = [];
    if (tiles.length === 1) {
        result.push(1);
        return result;
    }
    for (var i in t) {
        var x = [];
        for (var j = 0; j < tiles.length - 1; j++) {
            var y = [];
            for (var k in t[i]) {
                y.push(tiles[j][t[i][k]]);
            }
            x.push(y);
        }
        if (rawCheck(x)) {
            return t[i];
        }
    }
    return null;
};

var work = function(i, item) {
    item  = item.split(' ');
    k     = parseInt(item[0], 10);
    c     = parseInt(item[1], 10);
    s     = parseInt(item[2], 10);
    tiles = [];
    orgs  = [];
    t     = [];
    mkOrg();
    mkNcX();
    getTX();
    var ts  = check();
    var res = 'Case #' + (i + 1) + ':';
    if (ts) {
        for (var i in ts) {
            res += ' ' + (ts[i] + 1);
        }
    } else {
        res += ' IMPOSSIBLE';
    }
    console.log(res);
};

for (i = 0; i < count; i++) {
    work(i, cases[i]);
}
