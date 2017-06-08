#!/bin/bash

set -x
set -e

# set jekyll teardown as trap for easy subsequent runs
jekyllTrap="echo 'Killing jekyll...' && pkill -f jekyll"
trap "$jekyllTrap" ERR INT

if [[ "$@" == *"--skip-initial-build"* ]]; then
    bundle exec jekyll serve --detach --skip-initial-build
else
    bundle exec jekyll serve --detach
fi

if [[ "$@" != *"--skip-npm-build"* ]]; then
    npm run build
fi

rm -rf _test/browser/_results

# is we are in CI
isCI=false
if [[ "$@" == *"--ci-test"* ]]; then
    isCI=true
fi

# CI specific to point at docker container
# plus sed command will not run in macOS
if $isCI ; then
    find _test/browser -name "*.js" | xargs sed -i 's/localhost:4000/devdot:4000/g'
    sed -i 's/localhost/selenium/g' _test/browser/nightwatch.json
fi

# if we are local, there is no docker container
# already running selenium, so we must start it
if ! $isCI ; then
    java \
        -Dwebdriver.chrome.driver=_test/browser/_bin/chromedriver \
        -Dselenium.LOGGER.level=OFF \
        -jar _test/browser/_bin/selenium-server-standalone-2.53.0.jar &
    seleniumPID=$!
    echo $seleniumPID

    # set selenium teardown as trap for easy subsequent runs
    trap "echo 'Killing selenium...' && kill $seleniumPID && $jekyllTrap" ERR INT
    sleep 2
fi

# run nightwatch tests
_test/browser/nightwatch --config _test/browser/nightwatch.json

# since script is ending naturally, traps will not be invoked
# teardown jekyll and selenium here
pkill -f jekyll
if [[ "$seleniumPID" -ne "" ]]; then
    kill $seleniumPID
fi
echo 'Terminating jekyll and selemnium processes...'

if $isCI ; then
    find _test/browser -name "*.js" | xargs sed -i 's/devdot:4000/localhost:4000/g'
    sed -i 's/selenium/localhost/g' _test/browser/nightwatch.json
fi
