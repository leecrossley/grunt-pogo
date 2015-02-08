module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: [
                "*.js",
                "tasks/*.js",
                "<%= nodeunit.tests %>"
            ]
        },
        clean: {
            output: ["specs/pogo-result.js"]
        },
        pogo: {
            compile: {
                files: {
                    "specs/pogo-result.js": ["specs/pogo-sample.pogo"]
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

    grunt.registerTask("test", ["clean", "jshint", "pogo", "nodeunit"]);
    grunt.registerTask("default", ["test"]);
};
