#!/bin/bash

# import helper functions
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source $DIR/helpers.sh

init

bash -c "$build_css"
browserify_bundle "dynamic/react/api-app/signin-redirect.js" "public/js/signin-bundle.js"
browserify_bundle "dynamic/react/api-app/index.js" "public/js/api-bundle.js"
browserify_bundle "dynamic/react/get-started/index.js" "public/js/get-started-bundle.js"
browserify_bundle "dynamic/react/api-recipes/index.js" "public/js/recipe-bundle.js"
