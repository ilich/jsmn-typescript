module.exports = function (grunt) {

	grunt.initConfig({
		ts: {
			samples: {
				src: ['ts/samples/*.ts'],
				dest: 'public/samples/',
				options: {
					sourceMap: false	
				}
			},
			todomvc: {
				src: ['ts/todomvc/*.ts'],
				dest: 'public/todomvc/',
				options: {
					sourceMap: false	
				}
			},
			combine: {
				src: ['ts/combine/*.ts'],
				out: 'public/combine/app.js',
				options: {
					sourceMap: false	
				}
			},
			amd: {
				src: ['ts/amd/*.ts'],
				dest: 'public/amd/scripts/modules/',
				options: {
					sourceMap: false,
					module: 'amd'	
				}
			}
		},
		clean: [
			'public/samples/*.js',
			'public/todomvc/*.js',
			'public/combine/*.js',
			'public/amd/scripts/modules/*.js'
		]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-ts');

	grunt.registerTask('default', ['ts']);
};