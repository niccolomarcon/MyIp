module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      target: {
        files: {
          'dist/js/popup.min.js': 'src/popup.js'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/css/popup.min.css': 'src/popup.css'
        }
      }
    },
    minjson: {
      compile: {
        files: {
          'dist/manifest.json': 'src/manifest.json'
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/popup.html': 'src/popup.html'
        }
      }
    },
    copy: {
      main: {
        src: 'media/*',
        dest: 'dist/'
      }
    },
    shell: {
      dep: {
        command: 'zip -r -X extension.zip dist/popup.html dist/manifest.json dist/media'
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true
        },
        files: {
          'dist/popup.html': 'dist/popup.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-minjson');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', [
    'uglify',
    'cssmin',
    'minjson',
    'processhtml',
    'copy',
    'htmlmin'
  ]);
  grunt.registerTask('deploy', ['default', 'shell']);

};
