#!/bin/bash

# import helper functions
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source $DIR/helpers.sh

init

watch "$build_css" _sass |
    watchify_bundle "dynamic/react/api-app/index.js" "public/js/api-bundle.js" |
    watchify_bundle "dynamic/react/get-started/index.js" "public/js/get-started-bundle.js" |
    watchify_bundle "dynamic/react/api-recipes/index.js" "public/js/recipe-bundle.js"
