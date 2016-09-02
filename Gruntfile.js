
module.exports = function(grunt) {

  var webpackConfig = require('./webpack.config.js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      dev: Object.assign({}, webpackConfig, {
        progress: true,
        failOnError: true,
        watch: false,
        keepalive: false
      }),
      watch: Object.assign({}, webpackConfig, {
        progress: false,
        failOnError: false,
        watch: true,
        keepalive: true 
      }),
    }
  });

  grunt.loadNpmTasks('grunt-webpack')
  grunt.registerTask('bundle', ['webpack:dev']);
  grunt.registerTask('watch', ['webpack:watch']);

}
