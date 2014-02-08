module.exports = function (grunt) {

  grunt.initConfig({
    requirejs: {
      template: {
        options: {
          baseUrl: 'dev',
          name: 'almond',
          include: ['js/index'],
          out: 'build/static/js/index.js',
          insertRequire: ['js/index'],
          mainConfigFile: 'dev/js/index.js',
          namespace: 'MRT',
          stubModules: ['hbs/hbs'],
          optimize: 'none',
          pragmasOnSave: {
            excludeAfterBuild: true
          }
        }
      }
    },
    connect: {
      rjs: {
        options: {
          port: 8000,
          hostname: '0.0.0.0',
          middleware: function (connect) {
            var statics = connect.static;
            return [
              statics('build'),
              statics('dev')
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('build', ['requirejs:template']);
  grunt.registerTask('serve', ['connect:rjs:keepalive']);

  grunt.registerTask('default', ['build', 'serve']);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-connect');


};