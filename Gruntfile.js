module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "src/",
                    paths: {
						AutomizyStatusBar: ''
                    },
                    name: "AutomizyStatusBar/asb",
                    optimize: "none",
                    out: "dist/automizy-status-bar.js"
                }
            },
            css: {
                options: {
                    cssIn: "src/asb.css",
                    out: "dist/automizy-status-bar.css"
                }
            },
            cssMin: {
                options: {
                    cssIn: "dist/automizy-status-bar.css",
                    optimizeCss: "default",
                    out: "dist/automizy-status-bar.min.css"
                }
            }
        },
		uglify: {
			all: {
				files: {
					"dist/automizy-status-bar.min.js": ["dist/automizy-status-bar.js"]
				},
				options: {
					preserveComments: false,
					sourceMap: true,
					sourceMapName: "dist/automizy-status-bar.min.map",
					report: "min",
					beautify: {
						"ascii_only": true
					},
					compress: {
						hoist_funs: false,
						loops: false,
						unused: false,
						dead_code: false,
						conditionals: false,
						comparisons: false,
						evaluate: false,
						booleans: false,
						if_return: false,
						join_vars: false,
						warnings: false,
						negate_iife: false,
						drop_console: false
					}
				}
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: '.bower/automizy-js/dist/', src: '**/*', dest: 'src/vendor/automizy-js'},
					{expand: true, cwd: '.bower/automizy-js-api/dist/', src: '**/*', dest: 'src/vendor/automizy-js-api'},
					{expand: true, cwd: '.bower/jquery/dist/', src: 'jquery.min.*', dest: 'src/vendor/jquery'},
					{expand: true, cwd: '.bower/requirejs/', src: 'require.js', dest: 'src/vendor/requirejs'},
					{expand: true, cwd: '.bower/fontawesome/css', src: '**/*', dest: 'src/vendor/fontawesome/css'},
					{expand: true, cwd: '.bower/fontawesome/fonts', src: '**/*', dest: 'src/vendor/fontawesome/fonts'},
					{expand: true, cwd: '.bower/automizy-icon-set/dist/', src: '**/*', dest: 'src/vendor/automizy-icon-set'},
                    {expand: true, cwd: '.bower/automizy-project-initializer/dist/', src: '**/*', dest: 'src/vendor/automizy-project-initializer'}
				]
			},
			copytodist: {
				files: [
                    {expand: true, cwd: 'src/vendor/', src: '**/*', dest: 'dist/vendor'},
                    {expand: true, cwd: 'src/images/', src: '**/*', dest: 'dist/images'}
				]
			}
		},
        compress: {
            main: {
                options: {
                    archive: 'dist/automizy-status-bar.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd : "dist/",
                        src: [
                            './vendor/**',
                            './images/**',
                            './languages/**',
                            '*.js',
                            '*.css',
                            '*.map'
                        ]
                    }
                ]
            }
        }
    });
	
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadTasks('build/tasks');
    grunt.registerTask("default", ["requirejs", "require_clear", "uglify", "copy:main", "copy:copytodist", "compress"]);
    grunt.registerTask("bower", ["copy"]);
};

