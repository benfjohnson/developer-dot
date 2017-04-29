#!/usr/bin/env bash
rvm $TRAVIS_RUBY_VERSION
echo $bucket_name
s3_website push