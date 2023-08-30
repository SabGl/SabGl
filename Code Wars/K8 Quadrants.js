//need find part of Euclidian plane

//variant 1
function quadrant(x, y) {
    if(x > 0 && y > 0){
        return 1
    }
    else if(x < 0 && y > 0){
        return 2
    }
    else if(x < 0 && y < 0){
        return 3
    }
    else {
        return 4
    }
}

//variant 2
// function quadrant(x, y) {
//     return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
// }

//TEST

const {assert} = require("chai");
describe("Fixed", () => {
    const tests = {
        Example: [
            [1, 2, 1], [3, 5, 1], [-10, 100, 2],
            [-1, -9, 3], [19, -56, 4]
        ]
    };
    for (var k of Object.keys(tests)) {
        it(k, () => {
            for (var t of tests[k]) {
                assert.strictEqual(quadrant(t[0], t[1]), t[2]);
            }
        });
    }
});