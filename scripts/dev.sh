#!/bin/bash

# import helper functions
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source $DIR/helpers.sh

init

watch "$build_css" _sass |
    watchify_bundle "dynamic/react/api-models/index.js" "public/js/render-model-bundle.js" |
    watchify_bundle "dynamic/react/api-app/signin-redirect.js" "public/js/signin-bundle.js" |
    watchify_bundle "dynamic/react/api-app/index.js" "public/js/api-bundle.js" |
    watchify_bundle "dynamic/react/api-recipes/index.js" "public/js/recipe-bundle.js"
