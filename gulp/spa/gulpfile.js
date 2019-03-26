const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production){
        sequence('deps', 'app') // Serial
        //gulp.start('deps','app') // Paralelo
    } else {
        sequence('deps','app', 'servidor') // Serial
        //gulp.start('deps','app', 'servidor') // Paralelo
    }
})