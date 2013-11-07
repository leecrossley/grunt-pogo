var grunt = require("grunt"),
    fs = require("fs");

var readFile = function (file) {
    "use strict";
    var contents = grunt.file.read(file);
    if (process.platform === "win32") {
        contents = contents.replace(/\r\n/g, "\n");
    }
    return contents;
};

exports.pogo = {
    compile: function(test) {
        "use strict";
        test.expect(1);

        var expected = readFile("specs/pogo-expected.js"),
            actual = readFile("specs/pogo-actual.js");

        test.equal(expected, actual, "Should match expected compilation result");
        test.done();
    }
};