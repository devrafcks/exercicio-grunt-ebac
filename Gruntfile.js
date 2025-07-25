module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ['less'],
          compress: true, 
          yuicompress: true 
        },
        files: {
          'css/style.min.css': 'less/style.less' 
        }
      }
    },

    uglify: {
      options: {
        mangle: false 
      },
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js']
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};