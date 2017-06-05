#!/bin/bash

set -x

#TODO(DX-392) something for spinning up docker here
bundle exec jekyll serve --detach --skip-initial-build
rm -rf _test/browser/_results

_test/browser/nightwatch --config _test/browser/nightwatch.json
testResults=$?

pkill -f jekyll
echo 'Terminating jekyll process...'

exit $testResults
