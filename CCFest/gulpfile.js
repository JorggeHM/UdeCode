import * as dartSass from 'sass'
import GulpSass from 'gulp-sass'
import { src, dest, watch, series } from 'gulp'

const sass = GulpSass(dartSass)

export function css(done){
    src('src/scss/app.scss')
        .pipe( sass().on('error', sass.logError))
        .pipe( dest('build/css'))
    done()
}


function watchStyles(){
    watch('src/scss/**/*.scss', css)
}