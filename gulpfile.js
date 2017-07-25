const gulp = require('gulp');
const concat = require('gulp-concat');
const watch= require('gulp-watch');
const webserver = require('gulp-webserver');
const runSequence = require('run-sequence');

gulp.task('scripts', () => 
  gulp
    .src(['src/js/module.js', 'src/js/**/!(module.js)*.js'])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('src'))
);
gulp.task('server', () => 
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: 'http://localhost:8000/src/index.html'
    }))
);
gulp.task('watch', () => {
  watch('src/js/*.js', () => gulp.start('scripts') );
});
gulp.task('default', () =>
   runSequence('scripts', 'server', 'watch')
);