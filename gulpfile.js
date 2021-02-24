// Gulp Components
const { series, parallel, src, dest, watch } = require("gulp")

// Image Minimization
const gulpImageMin = require("gulp-imagemin"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass"),
  babel = require("gulp-babel"),
  imagemin = require("imagemin"),
  imageMinWebp = require("imagemin-webp"),
  fileinclude = require("gulp-file-include"),
  cache = require("gulp-cached")

const // Source Roots
  Source = {
    main: "src",
    images: "images",
    sass: "sass",
    js: "js/pages",
    sassFiles: "pages/",
    fonts: "fonts",
    videos: "videos",
  },
  // Compile Roots
  Compile = {
    main: "assets",
    css: "css",
    images: Source.images,
    fonts: Source.fonts,
    js: "js",
    videos: "videos",
  }

// Scss Compile
const scssCompile = () =>
  src([
    `${Source.main}/${Source.sass}/${Source.sassFiles}*`,
    `${Source.main}/${Source.sass}/fonts.scss`,
  ])
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(dest(`${Compile.main}/${Compile.css}/`))

// Javascript Minify / Concatinating
const jsCompile = () =>
  src(`./${Source.main}/${Source.js}/*`)
    .pipe(
      fileinclude({
        prefix: "~",
        basepath: "@file",
      })
    )
    .pipe(cache("linting"))
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(dest(`./${Compile.main}/${Compile.js}`))
    .pipe(dest(`./${Compile.main}/${Compile.js}`))

//Image Minimization
const imageMin = () => (
  src(`${Source.main}/${Source.images}/**/*`)
    //.pipe(imagemin())
    .pipe(
      gulpImageMin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [
          {
            removeViewBox: true,
          },
        ],
      })
    )
    .pipe(dest(`./${Compile.main}/${Compile.images}`)),
  imagemin(
    [
      `${Source.main}/${Source.images}/*.{jpg,png,tiff,webp}`,
      `${Source.main}/${Source.images}/**/*.{jpg,png,tiff,webp}`,
    ],
    `${Compile.main}/${Compile.images}/webp/`,
    {
      use: [
        imageMinWebp({
          quality: 50,
        }),
      ],
    }
  ).then(() => {
    console.log("Webp Images converted / optimized")
  })
)

// Copy Fonts
const copyFonts = () =>
  src(`./${Source.main}/${Source.fonts}/*`).pipe(
    dest(`./${Compile.main}/${Compile.fonts}`)
  )

// Videos
const copyVideos = () =>
  src(`./${Source.main}/${Source.videos}/*`).pipe(
    dest(`./${Compile.main}/${Compile.videos}`)
  )

const tasks = () => (
  // Watch Different Files And Perform Related Task
  watch(
    [
      `./${Source.main}/js/*.js`,
      `./${Source.main}/js/**/*.js`,
      `./${Source.main}/js/**/**/*.js`,
      `./${Source.main}/js/**/**/**/*.js`,
    ],
    jsCompile
  ),
  watch(
    [
      `./${Source.main}/${Source.sass}/**/**/**/*.scss`,
      `./${Source.main}/${Source.sass}/**/**/*.scss`,
      `./${Source.main}/${Source.sass}/**/*.scss`,
      `./${Source.main}/${Source.sass}/*.scss`,
    ],
    scssCompile
  ),
  watch(`./${Source.main}/${Source.font}/*`, copyFonts),
  watch(
    [
      `./${Source.main}/${Source.images}/*.{jpg,png,tiff,gif,svg}`,
      `./${Source.main}/${Source.images}/**/*.{jpg,png,tiff,gif,svg}`,
      `./${Source.main}/${Source.images}/**/**/*.{jpg,png,tiff,gif,svg}`,
    ],
    imageMin
  ),
  watch(`./${Source.main}/${Source.videos}/*`, copyVideos)
)

// Tasks
exports.tasks = series(tasks)
exports.scssCompile = series(scssCompile)
exports.jsCompile = series(jsCompile)
exports.copyFonts = series(copyFonts)
exports.imageMin = series(imageMin)
exports.copyVideos = series(copyVideos)

// Default Task
exports.default = parallel(jsCompile, scssCompile, copyFonts, imageMin)
