#!/bin/bash

set -e
set -x

npm i --progress=false --silent
bundle install
npm run lint
npm run test
npm run test-web -- --ci-test --skip-initial-build
