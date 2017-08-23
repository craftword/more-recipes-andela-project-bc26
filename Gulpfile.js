import gulp from "gulp";
import sass from "gulp-sass";

gulp.task("styles", ()=> {
    gulp.src("template/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./template/css/"));
});


//Watch task
gulp.task("default",()=> {
    gulp.watch("template/sass/**/*.scss",["styles"]);
});

gulp.task("travis",  ()=> {
    gulp.watch("test/testRoute.js");
    process.exit(0);
});