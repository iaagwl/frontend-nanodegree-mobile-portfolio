'use strict'

var ngrok = require('ngrok');

module.exports = function(grunt) {

  // Load grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt configuration
  grunt.initConfig({
    uglify: {
      compress: {
        files: [{
          expand: true,
          cwd: 'src',
          dest: 'dest',
          src: ['js/*.js', 'views/js/*.js']
        }]
      }
    },

    cssmin: {
      compress: {
        files: [{
          expand: true,
          cwd: 'src',
          dest: 'dest',
          src: ['css/*.css', 'views/css/*.css']
        }]
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**',
        dest: 'dest/',
      },
    },

    clean: {
      build: {
        src: ['dest']
      }
    },

    responsive_images: {
      myTask:{
  			options: {
  				engine: 'im',
  				quality: 70,
  				sizes: [
  					{
  						name: 'quarter',
  						width: '25%'
  					},
  					{
  						name: 'tenth',
  						width: '10%'
  					},
  					{
  						name: 'origin',
  						width: '100%'
  					}
  				]
  			},
				files: [{
					expand: true,
					cwd: 'src',
					dest: 'dest',
					src: [
						'img/*.jpg', 'img/*.png',
						'views/images/*.png', 'views/images/*.jpg'
					]
				}]
      }
		},

    pagespeed: {
      options: {
        nokey: true,
        locale: "en_GB",
        threshold: 40
      },
      local: {
        options: {
          strategy: "desktop"
        }
      },
      mobile: {
        options: {
          strategy: "mobile"
        }
      }
    }
  });

  // Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 8080;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });

  // Register default tasks
  grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'responsive_images']);
}
