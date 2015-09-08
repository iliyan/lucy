//'use strict';

var baseDir = 'app';
var buildDir = 'build';

var defaults = {

    //This is the list of file patterns to load into the browser during testing.
    //TODO if you install a new vendor component with bower you have to write the new dependency below
    files: [
        //baseDir + '/vendor/jquery/**/*min.js',
        baseDir + '/vendor/jquery/dist/jquery.js',
        baseDir + '/vendor/underscore/underscore.js',
        //baseDir + '/vendor/bootstrap/**/*min.js',
        baseDir + '/vendor/bootstrap/dist/bootstrap.js',
        baseDir + '/vendor/angular/angular.js',
        baseDir + '/vendor/angular-mocks/angular-mocks.js',
        baseDir + '/vendor/angular-ui-router/release/angular-ui-router.js',
        baseDir + '/vendor/angular-animate/angular-animate.js',
        baseDir + '/vendor/angular-resource/angular-resource.js',
        baseDir + '/vendor/angular-cookies/angular-cookies.js',
        baseDir + '/vendor/angular-ui-utils/ui-utils.js',
        baseDir + '/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
        baseDir + '/vendor/moment/moment.js',
        //baseDir + '/vendor/**/*min.js',
        baseDir + '/vendor/d3/d3.js',
        baseDir + '/app.js',
        baseDir + '/modules/**/*.js',
        baseDir + '/partial/**/*.js',
        'build/tmp/*.js'
    ],

    //used framework
    frameworks: ['jasmine'],

    plugins: [
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage',
        'karma-html-reporter',
        'karma-mocha-reporter'
    ],

    preprocessors: {
        'app/**/*.js': 'coverage'
    },

    reporters: ['mocha', 'html', 'coverage'],

    coverageReporter: {
        type: 'html',
        dir: buildDir + '/test/unit-results/coverage',
        file: 'coverage.html',
        instrumenterOptions: { // https://github.com/karma-runner/karma-coverage#dont-minify-instrumenter-output
            istanbul: { noCompact: true }
        }
    },

    htmlReporter: {
        outputDir: buildDir + '/test/unit-results/html'
    },

    logLevel: 'info',

    urlRoot: '/__test/',

    //used browsers (overriddeng in some gulp task)
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],

    phantomjsLauncher: {
        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        exitOnResourceError: true
    }

};

module.exports = function(config){
    return config.set(defaults);
};
