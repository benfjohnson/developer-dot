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

build_pages() {
    browserify \
        -t babelify \
        --node \
        --extension=.jsx \
        --extension=.js \
        dynamic/$1 \
        --outfile /tmp/$1
    node /tmp/$1
}

init() {
    set -x
    git clean -dxf --exclude='**/node_modules' --exclude='**/tmp'
    transpile_sass
    build_pages build-all-pages.js
    build_pages build-models.js
}
