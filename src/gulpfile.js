var gulp = require('gulp'),
    uglify = require('gulp-uglify');

//scripts task
//Uglifies
gulp.task('scripts', function(){
  gulp.src('states/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('minjs'));
});

//styles task
//run styles
gulp.task('styles', function(){
  console.log('runs styles');
});

//watch task
//watching for changes
gulp.task('watches', function(){
  gulp.watch('states/*.js',['scripts']);
});

gulp.task('default', ['scripts', 'styles','watch']);
