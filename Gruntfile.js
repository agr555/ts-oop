module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default : {
                tsconfig: './tsconfig.json'
            }
        },
        clean: {
            build: {
                src: ['dist']
            }
        },
        copy: {
            //"amd" requarejs
            requirejs: {
                src: './node_modules/requirejs/require.js',
                dest: './dist/lib/require.js'
            },
            //"system"
            // systemjs: {
            //     src: './node_modules/systemjs/dist/system.js',
            //     dest: './dist/lib/system.js'
            // },
            // nameRegister: {
            //     src: './node_modules/systemjs/dist/extras/named-register.js',
            //     dest: './dist/lib/named-register.js'
            // },
            index: {
                src: './index.html',
                dest: './dist/index.html'
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks("grunt-ts");
    // grunt.registerTask("default", ["ts", "clean","copy"]);
    grunt.registerTask("default", ["clean","ts","copy"]);

};