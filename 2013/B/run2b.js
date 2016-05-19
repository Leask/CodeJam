// init
var print = console.log;

// get inputs
var fs = require('fs');
var inputFile = './B-large.in.txt';
var rawInput = fs.readFileSync(inputFile, 'utf-8');
if (!rawInput) {
    print('Error reading input file.');
    process.exit(1);
}

// pcs inputs
var arrInput = rawInput.split('\n');
var numCase  = parseInt(arrInput[0]);
arrInput.shift();
var fields = [];
for (var i = 0; i < arrInput.length; i++) {
    var readCfgArgs = arrInput[i].split(' ');
    readCfgArgs[0] = parseInt(readCfgArgs[0]);
    readCfgArgs[1] = parseInt(readCfgArgs[1]);
    var field = [];
    for (var j = 0; j < readCfgArgs[0]; j++) {
        field[j] = arrInput[i + 1 + j].split(' ');
        for (var k in field[j]) {
            field[j][k] = parseInt(field[j][k]);
        }
    }
    i += j;
    fields.push(field);
    if (fields.length >= numCase) {
        break;
    }
}

// get result
var result = [];
for (i = 0; i < fields.length; i++) {
    while (true) {
        var k = 0;
        while (k < fields[i].length) {
            if (!fields[i][k].length) {
                fields[i].splice(k, 1);
                continue;
            }
            k++;
        }
        if (!fields[i].length) {
            break;
        }

        var min = 11;
        var minr = 0;
        var minc = 0;
        // find min
        for(var r = 0; r < fields[i].length; r++){
            for(var c = 0; c < fields[i][0].length; c++){
                if (min > fields[i][r][c]){
                    minr = r;
                    minc = c;
                    min = fields[i][r][c];
                }
            }
        }

        var numc = 0;
        var numr = 0;
        var rb   = true;
        var cb   = true;

        // check whole row
        for(var j = 0; j < fields[i][minr].length; j++) {
            if (fields[i][minr][j] === min) {
                numr++;
            }
        }

        if (numr !== fields[i][minr].length) {
            rb = false;
        }

        // check whole column
        for(j = 0; j < fields[i].length; j++) {
            if (fields[i][j][minc] === min) {
                numc++;
            }
        }
        if (numc != fields[i].length) {
            cb = false;
        }

        // NO case
        if ((cb == false) && (rb == false)){
            print("Case #" + (i + 1) + ': NO');
            break;
        }

        // clean the the column that is good
        if (cb) {
            for (j = 0; j < fields[i].length; j++) {
                fields[i][j].splice(minc, 1);
            }
            continue;
        } else if (rb) {
            fields[i].splice(minr, 1);
            continue;
        }
    }
    if (fields[i].length) {
        continue;
    }
    print("Case #" + (i + 1) + ': YES');
}
