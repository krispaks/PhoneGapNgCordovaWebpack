module.exports = {
    "port" : 3000,
    "server" : {
        "baseDir" : "./www"
    },
    "files": ['./www/dist/app.bundle.js', './www/app/**/*.html'],
    "browser" : "chrome"
}