// init
var print = console.log;

// get inputs
var fs = require('fs');
var inputFile = './test.txt';
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
for (i in fields) {
    var tBig = false;
    var bBig = false;
    var lBig = false;
    var rBig = false;
    var rBol = true;
    for (var y = 1; y < fields[i].length - 1; y++) {
        for (var x = 1; x < fields[i][y].length - 1; x++) {
            for (var tY = 0; tY < y; tY++) {
                if (fields[i][tY][x] > fields[i][y][x]) {
                    tBig = true;
                    break;
                }
            }
            for (tY = y + 1; tY < fields[i].length; tY++) {
                if (fields[i][tY][x] > fields[i][y][x]) {
                    bBig = true;
                    break;
                }
            }
            for (var tX = 0; tX < x; tX++) {
                if (fields[i][y][tX] > fields[i][y][x]) {
                    lBig = true;
                    break;
                }
            }
            for (tX = x + 1; tX < fields[i][y].length; tX++) {
                if (fields[i][y][tX] > fields[i][y][x]) {
                    rBig = true;
                    break;
                }
            }
            if ((tBig && bBig) && (lBig && rBig)) {
                rBol = false;
                break;
            }
        }
    }
    result[i] = rBol;
}

// output
for (i in result) {
    var strResult = 'Case #' + (parseInt(i) + 1) + ': ';
    strResult += result[i] ? 'YES' : 'NO';
    print(strResult);
}
