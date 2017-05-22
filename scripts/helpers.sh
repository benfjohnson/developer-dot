#!/bin/bash

build_css="postcss \
    -u autoprefixer \
    -o public/css/style.css \
    public/css/style.css"

transpile_sass() {
    node-sass \
        --recursive \
        --source-map=true \
        --source-map-contents=true \
        --source-map-embed=true \
        _sass/style.scss \
        public/css/style.css
}

watchify_bundle() {
    watchify \
        -g [ envify --NODE_ENV development ] \
        -t babelify \
        --extension=.jsx \
        --extension=.js \
        $1 --outfile $2
}

browserify_bundle() {
    browserify \
        -g [ envify --NODE_ENV production ] \
        -t babelify \
        --extension=.jsx \
        --extension=.js \
        $1 --outfile $2
}

build_all_pages() {
    browserify \
        -t babelify \
        --node \
        --extension=.jsx \
        --extension=.js \
        dynamic/build-all-pages.js \
        --outfile /tmp/build-all-pages.js
    node /tmp/build-all-pages.js
}

init() {
    set -x
    git clean -dXf --exclude='!node_modules'
    transpile_sass
    build_all_pages
}
