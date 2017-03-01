var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    uglify = require('gulp-stylus'),
    typographic = require('typographic'),
    nib = require('nib'),
    plumber = require('gulp-plumber');

function errorLog(error){
    console.error.bind(error);
    this.emit('end');
}

/*uising errorLog
  You can put -->     .on('error',errorLog)
  Or you can use -->  .pipe(plumber())
*/

//scripts task
//Uglifies
gulp.task('scripts', function(){
  gulp.src('src/states/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/minjs/'));
});

//styles task
//run styles
gulp.task('styles', function(){
  gulp.src('src/assets/style/*.styl')
    .pipe(plumber())
    .pipe(stylus({
        use:[typographic(), nib()]
    }))
    .pipe(gulp.dest('build/style/'));
});

//watch task
//watching for changes
gulp.task('watches', function(){
  gulp.watch('src/states/*.js',['scripts']);
  gulp.watch('src/assets/style/*.styl',['styles']);

});

gulp.task('default', ['scripts', 'styles','watch']);
