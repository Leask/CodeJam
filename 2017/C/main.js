var input = [
    [4, 2],
    [5, 2],
    [6, 2],
    [1000, 1000],
    [1000, 1],
];

// Case #1: 1 0
// Case #2: 1 0
// Case #3: 1 1
// Case #4: 0 0
// Case #5: 500 499

var makSpace = function(num) {
    var result = [1];
    for (var i = 0; i < num; i++) {
        result.push(0);
    }
    result.push(1);
    return result;
};

var cal = function(x, y) {
    var space = makSpace(x);
    for (var i = 0; i < y; i++) {
        var range = getLongestRang(space);
        console.log(range);
        pick(space, range);
    }
    console.log(space);
};

var getLongestRang = function(space) {
    var found = [];
    var lastTrue  = null;
    var lastFalse = null;
    var start     = null;
    for (var i in space) {
        var lastStatus = !!space[Number(i) - 1];
        if (space[i]) {
            if (!lastStatus && start) {
                found.push([
                    start,
                    Number(i) - 1,
                    Number(i) - start,
                ]);
            }
            lastTrue = Number(i);
        } else {
            if (lastStatus) {
                start = Number(i);
            }
            lastFalse = Number(i);
        }
    }
    found.sort(function(x, y) {
        return y[2] - x[2];
    });
    return found[0] ? found[0] : null;
};

var pick = function(space, range) {
    var x = Math.floor(range[0] + (range[2] - 1) / 2);
    space[x] = 1;
};

for (var i in input) {
    cal(input[i][0], input[i][1]);
    break;
}
