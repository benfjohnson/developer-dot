#!/bin/bash

set -x

npm run pretest
bundle exec jekyll serve --detach
rm -rf _test/browser/_results

_test/browser/nightwatch --config _test/browser/nightwatch.json
pkill -f jekyll
echo 'Terminating jekyll process...'
