var path = require("path"),
    pogo = require("pogo"),
    λ = require("functional.js");

module.exports = function(grunt) {
    "use strict";

    grunt.registerMultiTask("pogo", "Compile PogoScript to JavaScript", function() {
        processFiles(this.files);
    });

    var processFiles = λ.each(function (files) {
        var compiled = compile(exists(files.src)),
            combined = compiled.join(grunt.util.normalizelf(grunt.util.linefeed));
        grunt.file.write(files.dest, combined);
        grunt.log.writeln("Compiled: " + files.dest);
    });

    var exists = λ.select(function (file) {
        return grunt.file.exists(file);
    });

    var compile = λ.map(function (src) {
        return compilePogo(grunt.file.read(src));
    });

    var compilePogo = function(contents) {
        try {
            return pogo.compile(contents);
        } catch (e) {
            grunt.log.error("PogoScript exception: " + e);
            grunt.fail.warn("Compilation failed.");
        }
    };
};