module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                "*.js",
                "<%= nodeunit.tests %>"
            ]
        },
        clean: {
            output: ["specs/output/*"]
        },
        pogo: {
            compile: {
                files: {
                    "specs/output/pogo-sample.js": ["specs/pogo-sample.pogo"]
                }
            }
        },
        nodeunit: {
            tests: ["specs/*spec.js"]
        }
    });

    grunt.loadTasks("tasks");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-contrib-internal");

    grunt.registerTask("test", ["clean", "jshint", "pogo", "nodeunit"]);
    grunt.registerTask("default", ["test", "build-contrib"]);
};