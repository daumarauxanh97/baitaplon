var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function(){
    gulp.src('app/scss/abstracts.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
    gulp.src('app/scss/homepage.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
    gulp.src('app/scss/homepage2.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});
var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app/html'
        },
    })
});
gulp.task('html', function(){
    return gulp.src('app/html/index.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('watch', ['browserSync', 'sass'],function(){
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/html/index.html', ['html']);
    gulp.watch('app/html/index.html', browserSync.reload);
    gulp.watch('app/css/*.css', browserSync.reload);
});