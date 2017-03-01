var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    typographic = require('typographic'),
    nib = require('nib'),
    plumber = require('gulp-plumber');



    /*uising errorLog
      You can put -->     .on('error',errorLog)
      Or you can use -->  .pipe(plumber())
    */
function errorLog(error){
    console.error.bind(error);
    this.emit('end');
}

// Deletes prod folder so we can start from new
// NOTE: ONLY USE WHEN NEEDED
gulp.task('clean',function(){
    return gulp.src('prod',{force: true})
      .pipe(clean());
});


//adds all files for the landing page to the game
gulp.task('landing', function(){
  gulp.src('src/index.html')
    .pipe(plumber())
    .pipe(gulp.dest('prod/'));
  gulp.src('src/vendor/bootstrap/css/bootstrap.min.css')
    .pipe(plumber())
    .pipe(gulp.dest('prod/css'));
  gulp.src('src/vendor/bootstrap/js/bootstrap.min.js')
    .pipe(plumber())
    .pipe(gulp.dest('prod/js'));
  gulp.src('src/landing/landing.css')
    .pipe(plumber())
    .pipe(gulp.dest('prod/css'));
  gulp.src('src/landing/landing.js')
    .pipe(plumber())
    .pipe(gulp.dest('prod/js'));
});

//adds the main JS and html file for the game

gulp.task('game', function(){
  gulp.src('src/game.html')
    .pipe(plumber())
    .pipe(gulp.dest('prod/'));
    gulp.src('src/main.js')
      .pipe(plumber())
      .pipe(uglify())
      .pipe(gulp.dest('prod/'));
});

//add images / fonts / music
// NOTE : If images are not jpg or png
//        If Audo is not mp3
//        If fonts are not OTF or TTF
// You will need to modify this task and
// the watch task at the bottom
gulp.task('addassets', function(){
  gulp.src('src/assets/fonts/*.ttf')
    .pipe(plumber())
    .pipe(gulp.dest('prod/assets/fonts/'));
  gulp.src('src/assets/fonts/*.otf')
    .pipe(plumber())
    .pipe(gulp.dest('prod/assets/fonts/'));
  gulp.src('src/assets/images/*.jpg')
    .pipe(plumber())
    .pipe(gulp.dest('prod/assets/images/'));
  gulp.src('src/assets/style/*.css')
    .pipe(plumber())
    .pipe(gulp.dest('prod/assets/style/'));
  gulp.src('src/assets/images/*.png')
    .pipe(plumber())
    .pipe(gulp.dest('prod/assets/images/'));
  gulp.src('src/assets/music/*.mp3')
    .pipe(plumber())
    .pipe(gulp.dest('prod/assets/music/'));
});

// The LIB & Plugins - is a folder with all various utilities for Phaser
// NOTE: has to be js
// We uglify, but you may not have to

gulp.task('libmove', function(){
  gulp.src('src/lib/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('prod/lib/'));
  gulp.src('src/plugins/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('prod/plugins/'));
});

// The vendor - is a folder with various vendor stuff --
// NOTE: Update as needed
// NOTE: has to be js
// Uglify, but may not be needed
gulp.task('vendormove', function(){
  gulp.src('src/vendor/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('prod/vendor/'));
});

//statesuglify task
//Uglifies our game states
gulp.task('statesuglify', function(){
  gulp.src('src/states/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('prod/minjs/'));
});


gulp.task('addgame', [  'game',
                        'addassets',
                        'libmove',
                        'vendormove',
                        'statesuglify']);


//styles task
//run styles
// composes our stylus in to css
gulp.task('styles', function(){
  gulp.src('src/assets/style/*.styl')
    .pipe(plumber())
    .pipe(stylus({
        use:[typographic(), nib()]
    }))
    .pipe(gulp.dest('prod/style/'));
});



//watch task
//watching for changes to any of the project
//  GAME - Watches for changes to the game
//  LANDING - Watches for changes to the landing page
//  STYLE - Stylus to CSS watch
//  NOTE : WE don't watch for changes to folder such as...
//          plugins or vendor
//         We assume they don't change often
// if they do run the staticchange function
gulp.task('watch-game', function(){
  gulp.watch('src/states/*.js',['statesuglify']);
  gulp.watch('src/assets/font/*.ttf',['addassets']);
  gulp.watch('src/assets/font/*.otf',['addassets']);
  gulp.watch('src/assets/images/*.png',['addassets']);
  gulp.watch('src/assets/images/*.jpg',['addassets']);
  gulp.watch('src/assets/music/*.mp3',['addassets']);
  gulp.watch('src/assets/style/*.css',['addassets']);
  gulp.watch('src/main.js',['game']);
  gulp.watch('src/game.html',['game']);
});

gulp.task('watch-landing', function(){
  gulp.watch('src/index.html',['landing']);
  gulp.watch('src/landing/landing.js',['landing']);
  gulp.watch('src/landing/landing.css',['landing']);
});

gulp.task('watch-styles', function(){
  gulp.watch('src/assets/style/*.styl',['styles']);
});

//sc --> Static change will modify all files from lib and vendor directories
gulp.task('sc', ['libmove','vendormove']);

gulp.task('watch', ['watch-game','watch-landing','watch-styles']);

gulp.task('default', ['landing','addgame','styles','watch']);
