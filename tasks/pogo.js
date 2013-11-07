var path = require("path"),
    pogo = require("pogo");

module.exports = function(grunt) {
    "use strict";

    grunt.registerMultiTask("pogo", "Compile PogoScript to JavaScript", function() {
        var task = this,
            compilationResult;
        task.files.forEach(function (files) {
            files = getSrcFiles(files);
            compilationResult = concatCompilation(files);
            //grunt.file.write(files.dest, compilationResult);
            grunt.log.writeln("Compiled" + files.dest);
        });
    });

    var getSrcFiles = function (files) {
        return files.src.filter(function(filepath) {
            return !grunt.file.exists(filepath);
        });
    };

    var concatCompilation = function (files) {
        var contents;
        var result = files.map(function(filepath) {
            contents = grunt.file.read(filepath);
            return compilePogo(contents, filepath);
        }).join(grunt.util.normalizelf(grunt.util.linefeed));
        grunt.log.writeln(result);
        return result;
    };

    var compilePogo = function(contents, filepath) {
        // TODO allow the user to flesh out the options
        var options = {
            filename: filepath
        };
        try {
            return pogo.compile(contents, options);
        } catch (e) {
            grunt.log.error("PogoScript exception: " + e);
            grunt.fail.warn("Compile failed.");
        }
    };
};