const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/*.txt') // pastaA/**/*.txt para pegar pastas internas
        // .pipe(transformacao1()) apenas para ter ideia do fluxo comum de uso
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!')
})

gulp.task('fim', () => {
    console.log('Fim!!!')
})