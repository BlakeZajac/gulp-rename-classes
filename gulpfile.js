const gulp          = require( 'gulp' );
const replace       = require( 'gulp-replace' );
const rename        = require( 'gulp-rename' );
const browserSync   = require( 'browser-sync' ).create();

// Define the task to replace classes
gulp.task( 'replace-classes', function () {
  let textCounter   = 1;
  let imageCounter  = 1;

  return gulp.src( 'src/**/*.html' ) // Adjust the source path to match your project structure
    .pipe( replace( /text_index/g, () => 'text_' + textCounter++ ) ) // Replace the text_index classes with the textCounter value
    .pipe( replace( /image_index/g, () => 'image_' + imageCounter++ ) ) // Replace the image_index classes with the imageCounter value
    .pipe( rename( { extname: '.html' } ) ) // Rename the files if needed
    .pipe( gulp.dest( 'output') ) // Output directory
    .pipe( browserSync.stream() ); // Use BrowserSync to reload the browser
});

// Watch for changes in source HTML files and run the replace-classes task
gulp.task( 'watch', function () {
  browserSync.init({
    server: {
      baseDir: './output', // Serve the output folder
    },
  });

  gulp.watch( 'src/**/*.html', gulp.series( 'replace-classes' ) );
});

// Create a default task that runs the watch task
gulp.task( 'default', gulp.series( 'replace-classes', 'watch' ) );
