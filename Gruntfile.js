module.exports = function(grunt) {

    grunt.initConfig({
        //Description tasks - START
        less: {
            dev: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'public/css/main.min.css': 'app/frontend/less/main.less'
                }
            }
        },


        uglify: {
            target: {
                files: {
                    'app/frontend/js/main.min.js': 'app/frontend/js/main.js'
                }
            }
        },

        browserify: {
            'public/js/main.min.js': ['app/frontend/js/main.min.js']
        }

        //Description tasks - END
    });

    //Loadtasks - START
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    //Loadtasks - END

    //DEFAULT TASK COMAND
    grunt.registerTask('default', ['less', 'uglify', 'browserify']);

};