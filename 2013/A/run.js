// init
var print = console.log;

// get inputs
var fs = require('fs');
var inputFile = './A-large.in.txt';
var rawInput = fs.readFileSync(inputFile, 'utf-8');
if (!rawInput) {
    console.log('Error reading input file.');
    process.exit(1);
}

// get fields
var arrInput = rawInput.split('\n');
var numLine  = parseInt(arrInput[0]);
arrInput.shift();
var fields = [];
var full   = [];
for (var i = 0; i < numLine; i++) {
    var fieldItem = [];
    full[i] = true;
    for (var j = i * 5; j < i * 5 + 4; j++) {
        var splited = arrInput[j].split('');
        for (var k in splited) {
            fieldItem.push(splited[k]);
            if (splited[k] === '.') {
                full[i] = false;
            }
        }
    }
    fields.push(fieldItem);
    fields.push(fieldItem);
}

// get result
var result = [];
for (i in fields) {
    var resultItem = '';
    var lines = [
        [fields[i][0],  fields[i][1],  fields[i][2],  fields[i][3]],
        [fields[i][4],  fields[i][5],  fields[i][6],  fields[i][7]],
        [fields[i][8],  fields[i][9],  fields[i][10], fields[i][11]],
        [fields[i][12], fields[i][13], fields[i][14], fields[i][15]],
        [fields[i][0],  fields[i][4],  fields[i][8],  fields[i][12]],
        [fields[i][1],  fields[i][5],  fields[i][9],  fields[i][13]],
        [fields[i][2],  fields[i][6],  fields[i][10], fields[i][14]],
        [fields[i][3],  fields[i][7],  fields[i][11], fields[i][15]],
        [fields[i][0],  fields[i][5],  fields[i][10], fields[i][15]],
        [fields[i][3],  fields[i][6],  fields[i][9],  fields[i][12]]
    ]
    for (j in lines) {
        var count = {'X' : 0, 'O' : 0, 'T' : 0, '.' : 0, '' : 0};
        for (k in lines[j]) {
            count[lines[j][k]]++;
        }
        if (count['X'] + count['T'] === 4) {
            resultItem = 'X';
        } else if (count['O'] + count['T'] === 4) {
            resultItem = 'O';
        }
        if (resultItem) {
            break;
        }
    }
    if (!resultItem) {
        resultItem = full[i] ? 'D' : '';
    }
    result[i] = resultItem;
}

// output
for (i in result) {
    var strResult = 'Case #' + (parseInt(i) + 1) + ': ';
    switch (result[i]) {
        case 'X':
            strResult += 'X won';
            break;
        case 'O':
            strResult += 'O won';
            break;
        case 'D':
            strResult += 'Draw';
            break;
        default:
            strResult += 'Game has not completed';
    }
    print(strResult);
}
