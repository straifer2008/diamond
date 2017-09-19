module.exports = function(grunt) {

    grunt.initConfig({
    //Description tasks - START
        //CSS files
        less: {
            dev: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'public/css/main.css': 'app/frontend/less/main.less'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            your_target: {
                dist: {
                    files: {
                        'public/css/main.css': 'app/css/main.css'
                    }
                }
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/css/main.min.css': ['public/css/main.css']
                }
            }
        },

        //JS files

        uglify: {
            target: {
                files: {
                    'app/frontend/js/main.min.js': 'app/frontend/js/main.js'
                }
            }
        },

        browserify: {
            'public/js/main.min.js': ['app/frontend/js/main.min.js']
        },
        //WATCH
        watch: {
            scripts: {
                files: ['public/js/index.js', 'app/frontend/js/main.js','app/frontend/less/style.less', 'app/frontend/less/variables.less', 'public/index.css'],
                tasks: ['less', 'autoprefixer', 'cssmin'],
                options: {
                    interrupt: true,
                    reload: true
                }
            }
        },

        //Reload
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'public/css/*.css',
                        'public/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './public'
                }
            }
        }

    //Description tasks - END
    });

    //Loadtasks - START
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    //Loadtasks - END

    //DEFAULT TASK COMAND
    grunt.registerTask('default', ['browserSync', 'watch']);
    //My TASK COMAND
    grunt.registerTask('js', ['uglify', 'browserify']);
    grunt.registerTask('up', ['less', 'autoprefixer', 'cssmin', 'uglify', 'browserify', 'browserSync', 'watch']);
    grunt.registerTask('css', ['less', 'autoprefixer', 'cssmin']);

};