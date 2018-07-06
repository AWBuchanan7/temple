module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['./Temple/**/*.ts', './ExampleMods/**/*.ts'],
                dest: './builds/',
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
                    basePath: '',
                    sourceMap: false,
                    declaration: false
                }
            }
        },
        copy: {
            main: {
              files: [
                // includes files within path
                {expand: true, src: ['./ModLoader.js'], dest: './builds/', filter: 'isFile'},
                {expand: true, src: ['./Config/**'], dest: './builds/'},
        
              ],
            },
          }
    });
  
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    // Default task(s).
    grunt.registerTask('default', ['typescript', 'copy']);
  
  };